import { LeadAttribution } from "./attribution";

export interface LeadData {
  name: string;
  lastName?: string;
  phone: string;
  email?: string;
  propertyType?: string;
  area?: string;
  handoverTimeline?: string;
  budget?: string;
  currency?: string;
  clientCountry?: string;
  contactPreference?: "direct" | "representative" | string;
  communicationPreferences?: string;
  comment?: string;
  targetTower?: string;
  district?: string;
  language: string;
  attribution?: LeadAttribution;
  notes?: string;
  timestamp?: string;
}

export interface LeadRoutingResult {
  agency: string;
  agencyDesk: string;
  telegramDelivered: boolean;
  leadId: string;
}

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
const LEAD_WORKER_URL = process.env.NEXT_PUBLIC_LEAD_WORKER_URL;

/**
 * Determines appropriate advisory desk based on client language.
 */
export function determineAgencyDestination(phone: string, language: string): {
  agency: string;
  agencyDesk: string;
} {
  const isRussianLang = language.toLowerCase() === "ru";

  if (isRussianLang) {
    return {
      agency: "Dubai Architecture",
      agencyDesk: "Dubai Architecture Desk (CIS & Eastern Europe)",
    };
  }

  return {
    agency: "Dubai Architecture",
    agencyDesk: "Dubai Architecture Global Desk (International)",
  };
}

/**
 * Formats lead details into an HTML message for Telegram.
 */
function formatTelegramMessage(lead: LeadData, leadId: string): string {
  const dateStr = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Dubai" });
  const attr = lead.attribution || {};
  const fullName = [lead.name, lead.lastName].filter(Boolean).join(" ");
  const contactPref = lead.contactPreference === "representative" 
    ? "Через представителя клиента" 
    : "Связываться напрямую";

  return `
🏛 <b>НОВАЯ ЗАЯВКА С САЙТА DUBAI-ARCHITECTURE.INFO</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Клиент:</b> ${fullName || "Не указано"}
🌍 <b>Страна клиента:</b> ${lead.clientCountry || "Не указана"}
🌐 <b>Язык сайта:</b> ${lead.language.toUpperCase()}
📞 <b>Телефон / WhatsApp:</b> <code>${lead.phone}</code>
📧 <b>Email:</b> ${lead.email || "Не указан"}
🤝 <b>Формат связи:</b> ${contactPref}

🏢 <b>ТИП НЕДВИЖИМОСТИ:</b>
• ${lead.propertyType || "Не указан"}
${lead.area ? `📐 <b>Интересующая площадь:</b> ${lead.area}` : ""}
${lead.handoverTimeline ? `📅 <b>Срок сдачи:</b> ${lead.handoverTimeline}` : ""}

💰 <b>БЮДЖЕТ:</b>
• <b>${lead.budget || "Не указан"} ${lead.currency || "USD"}</b>
${lead.communicationPreferences ? `⏰ <b>Пожелания по связи:</b> ${lead.communicationPreferences}` : ""}
${lead.targetTower ? `🏢 <b>Объект интереса:</b> ${lead.targetTower}` : ""}
${lead.comment ? `💬 <b>Комментарий:</b>\n<i>${lead.comment}</i>` : ""}
⏰ <b>Время (Dubai):</b> ${dateStr}

📊 <b>МАРКЕТИНГОВАЯ АТРИБУЦИЯ (UTM):</b>
• <b>Источник (Source):</b> ${attr.utm_source || "Прямой органический трафик"}
• <b>Кампания (Campaign):</b> ${attr.utm_campaign || "—"}
• <b>Тип (Medium):</b> ${attr.utm_medium || "—"}
• <b>Посадочная страница:</b> ${attr.landing_page || "Главная"}
• <b>Устройство:</b> ${attr.device || "Не определено"}
━━━━━━━━━━━━━━━━━━━━
<i>ID заявки: ${leadId}</i>
`.trim();
}

/**
 * Dispatches lead to Telegram bot and saves to local storage.
 */
export async function dispatchLead(lead: LeadData): Promise<LeadRoutingResult> {
  const routing = determineAgencyDestination(lead.phone, lead.language);
  const leadId = `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
  let telegramDelivered = false;

  // 1. Send via Secure Cloudflare Worker proxy if configured
  if (LEAD_WORKER_URL) {
    try {
      const response = await fetch(LEAD_WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, leadId }),
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
      const text = formatTelegramMessage(lead, leadId);
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
    telegramDelivered,
    leadId,
  };
}
