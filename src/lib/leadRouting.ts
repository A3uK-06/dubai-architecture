import { LeadAttribution } from "./attribution";

export interface LeadData {
  name: string;
  phone: string;
  email?: string;
  budget?: string;
  targetTower?: string;
  district?: string;
  language: string;
  attribution?: LeadAttribution;
  notes?: string;
  timestamp?: string;
}

export interface LeadRoutingResult {
  agency: "Whitewill" | "Metropolitan Premium Properties";
  agencyDesk: string;
  payoutTerms: string;
  telegramDelivered: boolean;
  leadId: string;
}

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
const LEAD_WORKER_URL = process.env.NEXT_PUBLIC_LEAD_WORKER_URL;

// Fallback USDT (TRC-20) payment wallet identifier for owner commission logs
export const USDT_TRC20_WALLET_TAG = "USDT (TRC-20) Payout Network";

/**
 * Determines whether a phone number or language belongs to Russia/CIS or International.
 */
export function determineAgencyDestination(phone: string, language: string): {
  agency: "Whitewill" | "Metropolitan Premium Properties";
  agencyDesk: string;
} {
  const cleanPhone = phone.replace(/[^\d+]/g, "");

  // Russian/CIS phone detection (+7, 7, 89...)
  const isRussianPhone =
    cleanPhone.startsWith("+7") ||
    (cleanPhone.startsWith("7") && cleanPhone.length === 11) ||
    (cleanPhone.startsWith("8") && cleanPhone.length === 11);

  const isRussianLang = language.toLowerCase() === "ru";

  if (isRussianPhone || (isRussianLang && !cleanPhone.startsWith("+971"))) {
    return {
      agency: "Whitewill",
      agencyDesk: "Whitewill (Russian & CIS Investors Desk)",
    };
  }

  return {
    agency: "Metropolitan Premium Properties",
    agencyDesk: "Metropolitan International Department (Native Brokers)",
  };
}

/**
 * Formats lead details into an HTML message for Telegram.
 */
function formatTelegramMessage(lead: LeadData, routing: { agency: string; agencyDesk: string }): string {
  const dateStr = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Dubai" });
  const attr = lead.attribution || {};

  return `
🏛 <b>НОВАЯ ЗАЯВКА С САЙТА DUBAI-ARCHITECTURE.INFO</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Имя:</b> ${lead.name || "Не указано"}
📞 <b>Телефон / WhatsApp:</b> <code>${lead.phone}</code>
📧 <b>Email:</b> ${lead.email || "Не указан"}
💰 <b>Бюджет:</b> ${lead.budget || "Не указан"}
🏢 <b>Объект интереса:</b> ${lead.targetTower || lead.district || "Общий каталог ТОП-10"}
🌐 <b>Язык посетителя:</b> ${lead.language.toUpperCase()}
⏰ <b>Время (Dubai):</b> ${dateStr}

🎯 <b>МАРШРУТИЗАЦИЯ ЛИДА:</b>
🏢 <b>Партнер:</b> <b>${routing.agency}</b>
📌 <b>Отдел:</b> ${routing.agencyDesk}
💵 <b>Условия комиссии:</b> 30–50% от комиссии сделки
🪙 <b>Выплата владельцу:</b> <b>USDT (TRC-20)</b>

📊 <b>МАРКЕТИНГОВАЯ АТРИБУЦИЯ (UTM):</b>
• <b>Источник (Source):</b> ${attr.utm_source || "Прямой органический трафик"}
• <b>Кампания (Campaign):</b> ${attr.utm_campaign || "—"}
• <b>Тип (Medium):</b> ${attr.utm_medium || "—"}
• <b>Содержание (Content):</b> ${attr.utm_content || "—"}
• <b>Посадочная страница:</b> ${attr.landing_page || "Главная"}
• <b>Устройство:</b> ${attr.device || "Не определено"}
━━━━━━━━━━━━━━━━━━━━
<i>Зафиксировано в реестре dubai-architecture.info</i>
`.trim();
}

/**
 * Dispatches lead to Telegram bot and returns routing outcome.
 */
export async function dispatchLead(lead: LeadData): Promise<LeadRoutingResult> {
  const routing = determineAgencyDestination(lead.phone, lead.language);
  const leadId = `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
  let telegramDelivered = false;

  // 1. Send via Secure Cloudflare Worker proxy (Recommended - Zero token exposure)
  if (LEAD_WORKER_URL) {
    try {
      const response = await fetch(LEAD_WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (response.ok) {
        telegramDelivered = true;
      }
    } catch (err) {
      console.warn("Cloudflare Worker proxy failed, attempting fallback:", err);
    }
  }

  // 2. Direct Telegram API fallback if Worker is not configured
  if (!telegramDelivered && TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    try {
      const text = formatTelegramMessage(lead, routing);
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      });

      if (response.ok) {
        telegramDelivered = true;
      } else {
        console.warn("Telegram API returned non-OK status:", await response.text());
      }
    } catch (err) {
      console.error("Failed to send Telegram notification:", err);
    }
  } else if (!LEAD_WORKER_URL) {
    console.info(
      "Telegram credentials not configured in environment variables. Lead logged locally:",
      lead
    );
  }

  // 3. Local storage retention (fail-safe)
  if (typeof window !== "undefined") {
    try {
      const existing = JSON.parse(localStorage.getItem("dubai_arch_leads") || "[]");
      existing.push({
        ...lead,
        leadId,
        routing,
        payoutCurrency: "USDT_TRC20",
        telegramDelivered,
        timestamp: lead.timestamp || new Date().toISOString(),
      });
      localStorage.setItem("dubai_arch_leads", JSON.stringify(existing));
    } catch (e) {
      console.warn("Could not write lead to localStorage", e);
    }
  }

  return {
    agency: routing.agency,
    agencyDesk: routing.agencyDesk,
    payoutTerms: "30-50% Broker Commission Split • Direct USDT (TRC-20) Settlement",
    telegramDelivered,
    leadId,
  };
}
