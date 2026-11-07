/**
 * Cloudflare Worker: Secure Telegram Lead Proxy
 * 
 * Protects Telegram Bot Token & Chat ID from being exposed in browser JavaScript.
 * Receives leads from dubai-architecture.info and forwards formatted HTML notifications
 * to the website owner's private Telegram chat with intelligent Whitewill / Metropolitan routing.
 */

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigins = [
      "https://dubai-architecture.info",
      "https://www.dubai-architecture.info",
    ];

    const isAllowed = allowedOrigins.includes(origin) || origin.includes("localhost") || origin.includes("github.io");
    const corsHeaders = {
      "Access-Control-Allow-Origin": isAllowed ? origin : "https://dubai-architecture.info",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    try {
      const data = await request.json();
      const {
        name,
        phone,
        email,
        budget,
        targetTower,
        district,
        language = "en",
        attribution = {},
      } = data;

      if (!phone) {
        return new Response(JSON.stringify({ error: "Phone number is required" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // 1. Determine Agency Destination (Whitewill vs Metropolitan)
      const cleanPhone = String(phone).replace(/[^\d+]/g, "");
      const isRussianPhone =
        cleanPhone.startsWith("+7") ||
        (cleanPhone.startsWith("7") && cleanPhone.length === 11) ||
        (cleanPhone.startsWith("8") && cleanPhone.length === 11);
      const isRussianLang = String(language).toLowerCase() === "ru";

      let agency = "Metropolitan Premium Properties";
      let agencyDesk = "Metropolitan International Department (Native Brokers)";

      if (isRussianPhone || (isRussianLang && !cleanPhone.startsWith("+971"))) {
        agency = "Whitewill";
        agencyDesk = "Whitewill (Russian & CIS Investors Desk)";
      }

      // 2. Format HTML Telegram Notification
      const dateStr = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Dubai" });
      const telegramText = `
🏛 <b>НОВАЯ ЗАЯВКА С САЙТА DUBAI-ARCHITECTURE.INFO</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Имя:</b> ${name || "Не указано"}
📞 <b>Телефон / WhatsApp:</b> <code>${phone}</code>
📧 <b>Email:</b> ${email || "Не указан"}
💰 <b>Бюджет:</b> ${budget || "Не указан"}
🏢 <b>Объект интереса:</b> ${targetTower || district || "Общий каталог"}
🌐 <b>Язык посетителя:</b> ${String(language).toUpperCase()}
⏰ <b>Время (Dubai):</b> ${dateStr}

🎯 <b>МАРШРУТИЗАЦИЯ ЛИДА:</b>
🏢 <b>Партнер:</b> <b>${agency}</b>
📌 <b>Отдел:</b> ${agencyDesk}
💵 <b>Условия комиссии:</b> 30–50% от комиссии сделки
🪙 <b>Выплата владельцу:</b> <b>USDT (TRC-20)</b>

📊 <b>МАРКЕТИНГОВАЯ АТРИБУЦИЯ (UTM):</b>
• <b>Источник (Source):</b> ${attribution.utm_source || "Прямой органический трафик"}
• <b>Кампания (Campaign):</b> ${attribution.utm_campaign || "—"}
• <b>Тип (Medium):</b> ${attribution.utm_medium || "—"}
• <b>Содержание:</b> ${attribution.utm_content || "—"}
• <b>Посадочная:</b> ${attribution.landing_page || "Главная"}
━━━━━━━━━━━━━━━━━━━━
<i>Зафиксировано в защищенном шлюзе Cloudflare Worker</i>
      `.trim();

      // 3. Dispatch to Telegram using secure server-side secrets
      const botToken = env.TELEGRAM_BOT_TOKEN;
      const chatId = env.TELEGRAM_CHAT_ID;

      if (!botToken || !chatId) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "Worker environment variables TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured.",
          }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const tgUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const tgRes = await fetch(tgUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramText,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      });

      if (!tgRes.ok) {
        const errBody = await tgRes.text();
        return new Response(JSON.stringify({ success: false, error: errBody }), {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(
        JSON.stringify({
          success: true,
          agency,
          agencyDesk,
          message: "Lead securely delivered to Telegram",
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } catch (err) {
      return new Response(JSON.stringify({ success: false, error: err.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};
