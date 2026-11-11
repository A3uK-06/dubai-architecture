import { LanguageCode } from "@/i18n/languages";

export interface LeadModalI18n {
  namePlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  budgetOptions: {
    under2m: string;
    from2mTo5m: string;
    from5mTo10m: string;
    over10m: string;
  };
  getWhatsAppMessage: (name: string, targetBuildingName: string) => string;
}

export const LEAD_MODAL_I18N: Record<LanguageCode, LeadModalI18n> = {
  en: {
    namePlaceholder: "e.g. Alexander Smith",
    phonePlaceholder: "+971 50 ... / +44 ... / +1 ...",
    emailPlaceholder: "name@example.com",
    budgetOptions: {
      under2m: "Under 2,000,000 AED (< $545,000 USD)",
      from2mTo5m: "2,000,000 – 5,000,000 AED (Golden Visa 10-Yr)",
      from5mTo10m: "5,000,000 – 10,000,000 AED ($1.36M - $2.7M)",
      over10m: "Over 10,000,000 AED (Ultra-Luxury Penthouse)",
    },
    getWhatsAppMessage: (name, building) =>
      `Hello! My name is ${name || "a website visitor"}. I requested the Architecture & Investment Dossier on Dubai-Architecture.info for ${building}. Please share current availability and payment plans.`,
  },
  ru: {
    namePlaceholder: "Например: Александр Смирнов",
    phonePlaceholder: "+971 50 ... / +7 999 ... / +375 ...",
    emailPlaceholder: "name@example.com",
    budgetOptions: {
      under2m: "До 2 000 000 AED (< $545 000 USD)",
      from2mTo5m: "2 000 000 – 5 000 000 AED (Golden Visa на 10 лет)",
      from5mTo10m: "5 000 000 – 10 000 000 AED ($1.36M – $2.7M)",
      over10m: "Более 10 000 000 AED (Ультра-люкс пентхаусы)",
    },
    getWhatsAppMessage: (name, building) =>
      `Здравствуйте! Меня зовут ${name || "посетитель сайта"}. Я запросил архитектурно-инвестиционное досье на Dubai-Architecture.info по объекту ${building}. Пожалуйста, отправьте актуальные планировки и доступность.`,
  },
  ar: {
    namePlaceholder: "مثال: محمد الشامسي",
    phonePlaceholder: "+971 50 ... / +966 5 ... / +965 ...",
    emailPlaceholder: "name@example.com",
    budgetOptions: {
      under2m: "أقل من 2,000,000 درهم إماراتي (< 545,000 دولار)",
      from2mTo5m: "2,000,000 – 5,000,000 درهم (مؤهل للإقامة الذهبية 10 سنوات)",
      from5mTo10m: "5,000,000 – 10,000,000 درهم (1.36 – 2.7 مليون دولار)",
      over10m: "أكثر من 10,000,000 درهم (بنتهاوس وعقارات فائقة الفخامة)",
    },
    getWhatsAppMessage: (name, building) =>
      `مرحباً! اسمي ${name || "زائر للموقع"}. طلبت الملف المعماري والاستثماري عبر Dubai-Architecture.info لمشروع ${building}. يرجى إرسال الوحدات المتاحة حالياً وجدول الدفع.`,
  },
  zh: {
    namePlaceholder: "例如：陈先生 / 李女士",
    phonePlaceholder: "+971 50 ... / +86 138 ... / +852 ...",
    emailPlaceholder: "name@example.com",
    budgetOptions: {
      under2m: "200 万 AED 以下（约 54.5 万美元以下）",
      from2mTo5m: "200 万 – 500 万 AED（符合 10 年黄金签证门槛）",
      from5mTo10m: "500 万 – 1000 万 AED（136 万 - 270 万美元高端资产）",
      over10m: "1000 万 AED 以上（顶级奢华大平层与顶层豪宅 Penthouse）",
    },
    getWhatsAppMessage: (name, building) =>
      `您好！我是 ${name || "网站访客"}。我在 Dubai-Architecture.info 申请了关于 ${building} 的建筑与投资分析专属档案，请发送最新可用房源与付款计划。`,
  },
  de: {
    namePlaceholder: "z.B. Alexander Schmidt",
    phonePlaceholder: "+971 50 ... / +49 170 ... / +41 ...",
    emailPlaceholder: "name@example.com",
    budgetOptions: {
      under2m: "Unter 2.000.000 AED (< 545.000 USD)",
      from2mTo5m: "2.000.000 – 5.000.000 AED (Golden Visa 10 Jahre)",
      from5mTo10m: "5.000.000 – 10.000.000 AED (1,36 Mio. - 2,7 Mio. USD)",
      over10m: "Über 10.000.000 AED (Ultra-Luxus Penthouse)",
    },
    getWhatsAppMessage: (name, building) =>
      `Guten Tag! Mein Name ist ${name || "ein Webseitenbesucher"}. Ich habe das Architektur- und Investitionsdossier auf Dubai-Architecture.info für ${building} angefordert. Bitte senden Sie aktuelle Verfügbarkeiten.`,
  },
  fr: {
    namePlaceholder: "ex. Alexandre Dupont",
    phonePlaceholder: "+971 50 ... / +33 6 ... / +32 ...",
    emailPlaceholder: "name@example.com",
    budgetOptions: {
      under2m: "Moins de 2 000 000 AED (< 545 000 USD)",
      from2mTo5m: "2 000 000 – 5 000 000 AED (Éligible Golden Visa 10 ans)",
      from5mTo10m: "5 000 000 – 10 000 000 AED (1,36M $ - 2,7M $)",
      over10m: "Plus de 10 000 000 AED (Penthouses Ultra-Luxe)",
    },
    getWhatsAppMessage: (name, building) =>
      `Bonjour ! Je m'appelle ${name || "un visiteur du site"}. J'ai demandé le dossier architectural et d'investissement sur Dubai-Architecture.info pour ${building}. Merci de me transmettre les disponibilités actuelles.`,
  },
  it: {
    namePlaceholder: "es. Alessandro Rossi",
    phonePlaceholder: "+971 50 ... / +39 340 ... / +41 ...",
    emailPlaceholder: "name@example.com",
    budgetOptions: {
      under2m: "Meno di 2.000.000 AED (< 545.000 USD)",
      from2mTo5m: "2.000.000 – 5.000.000 AED (Golden Visa 10 anni)",
      from5mTo10m: "5.000.000 – 10.000.000 AED ($1.36M - $2.7M)",
      over10m: "Oltre 10.000.000 AED (Penthouse Ultra-Lusso)",
    },
    getWhatsAppMessage: (name, building) =>
      `Buongiorno! Mi chiamo ${name || "un visitatore del sito"}. Ho richiesto il dossier su Dubai-Architecture.info per ${building}. Vi prego di inviare disponibilità e planimetrie.`,
  },
  tr: {
    namePlaceholder: "Örn: Mehmet Yılmaz",
    phonePlaceholder: "+971 50 ... / +90 532 ...",
    emailPlaceholder: "name@example.com",
    budgetOptions: {
      under2m: "2.000.000 AED altı (< 545.000 USD)",
      from2mTo5m: "2.000.000 – 5.000.000 AED (10 Yıllık Golden Visa)",
      from5mTo10m: "5.000.000 – 10.000.000 AED (1.36M $ - 2.7M $)",
      over10m: "10.000.000 AED üzeri (Ultra Lüks Penthouse)",
    },
    getWhatsAppMessage: (name, building) =>
      `Merhaba! Adım ${name || "bir site ziyaretçisi"}. Dubai-Architecture.info üzerinden ${building} projesi için mimari ve yatırım dosyasını talep ettim. Güncel müsaitlik durumunu iletir misiniz?`,
  },
  hi: {
    namePlaceholder: "उदा. राहुल शर्मा",
    phonePlaceholder: "+971 50 ... / +91 98 ...",
    emailPlaceholder: "name@example.com",
    budgetOptions: {
      under2m: "2,000,000 AED से कम (< $545,000 USD)",
      from2mTo5m: "2,000,000 – 5,000,000 AED (10-वर्षीय गोल्डन वीजा)",
      from5mTo10m: "5,000,000 – 10,000,000 AED ($1.36M - $2.7M)",
      over10m: "10,000,000 AED से अधिक (अल्ट्रा-लक्जरी पेंटहाउस)",
    },
    getWhatsAppMessage: (name, building) =>
      `नमस्ते! मेरा नाम ${name || "एक वेबसाइट आगंतुक"} है। मैंने Dubai-Architecture.info पर ${building} के लिए आर्किटेक्चर एवं निवेश डोजियर का अनुरोध किया है। कृपया वर्तमान उपलब्धता साझा करें।`,
  },
  ur: {
    namePlaceholder: "مثلاً: احمد خان",
    phonePlaceholder: "+971 50 ... / +92 300 ...",
    emailPlaceholder: "name@example.com",
    budgetOptions: {
      under2m: "2,000,000 درہم سے کم (< $545,000 USD)",
      from2mTo5m: "2,000,000 – 5,000,000 درہم (10 سالہ گولڈن ویزا)",
      from5mTo10m: "5,000,000 – 10,000,000 درہم (1.36M $ - 2.7M $)",
      over10m: "10,000,000 درہم سے زیادہ (الٹرا لگژری پینٹ ہاؤس)",
    },
    getWhatsAppMessage: (name, building) =>
      `ہیلو! میرا نام ${name || "ایک ویب سائٹ وزیٹر"} ہے۔ میں نے Dubai-Architecture.info پر ${building} کے لیے آرکیٹیکچرل اور سرمایہ کاری ڈوزیئر کی درخواست کی ہے۔ براہ کرم دستیابی کی تفصیلات بھیجیں۔`,
  },
};
