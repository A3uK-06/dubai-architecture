/**
 * 10-Language Complete Localization Dictionary for Dubai Architecture Property Quiz
 * Languages: en, ru, ar, zh, de, fr, it, tr, hi, ur
 */

export interface QuizTranslations {
  modalTitle: string;
  modalBadge: string;
  modalSubtitle: string;
  stepIndicator: (step: number, total: number) => string;
  nextBtn: string;
  backBtn: string;
  submitBtn: string;
  submittingBtn: string;
  requiredField: string;
  optionalLabel: string;

  // Step 1: Property Type
  step1Title: string;
  step1Subtitle: string;
  propertyTypes: {
    primary: { label: string; desc: string };
    secondary_buy: { label: string; desc: string };
    secondary_sell: { label: string; desc: string };
    rent: { label: string; desc: string };
    commercial: { label: string; desc: string };
  };

  // Step 2: Area & Handover Timeline (NEW!)
  step2Title: string;
  step2Subtitle: string;
  areaLabel: string;
  areaOptions: {
    studio: string;
    twoBed: string;
    threeBed: string;
    penthouse: string;
    any: string;
  };
  handoverLabel: string;
  handoverOptions: {
    ready: string;
    nearFuture: string;
    midFuture: string;
    longTerm: string;
    any: string;
  };

  // Step 3: Budget & Currency
  step3Title: string;
  step3Subtitle: string;
  currencyLabel: string;
  quickBudgetLabel: string;
  exactBudgetLabel: string;
  budgetPlaceholder: string;

  // Step 4: Language & Client Country
  step4Title: string;
  step4Subtitle: string;
  languageLabel: string;
  countryLabel: string;
  otherCountryPlaceholder: string;

  // Step 5: Contacts & Preferences (NEW!)
  step5Title: string;
  step5Subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  contactPrefLabel: string;
  contactDirect: string;
  contactRep: string;
  commPreferencesLabel: string;
  commPreferencesPlaceholder: string;
  commentLabel: string;
  commentPlaceholder: string;

  // Success Step
  successTitle: string;
  successSubtitle: string;
  summaryClient: string;
  summaryCategory: string;
  summaryBudget: string;
  summaryArea: string;
  summaryContact: string;
  messengerChoiceLabel: string;
  whatsappBtn: string;
  telegramBtn: string;
  returnBtn: string;
}

export const QUIZ_I18N: Record<string, QuizTranslations> = {
  ru: {
    modalTitle: "Подбор недвижимости в Дубае",
    modalBadge: "RERA ACCREDITED",
    modalSubtitle: "Персональная спецификация для аккредитованных брокеров",
    stepIndicator: (step, total) => `Шаг ${step} из ${total}`,
    nextBtn: "Далее ➡️",
    backBtn: "⬅️ Назад",
    submitBtn: "Получить подборку 🚀",
    submittingBtn: "Формирование...",
    requiredField: "*",
    optionalLabel: "(опционально)",

    step1Title: "Какой тип недвижимости вас интересует?",
    step1Subtitle: "Выберите основную цель вашего запроса",
    propertyTypes: {
      primary: { label: "Покупка первичной недвижимости", desc: "Off-plan напрямую от ведущих застройщиков Дубая" },
      secondary_buy: { label: "Покупка вторичной недвижимости", desc: "Готовые резиденции и апартаменты с ключами" },
      secondary_sell: { label: "Продажа вторичной недвижимости", desc: "Оценка, маркетинг и поиск покупателя" },
      rent: { label: "Аренда жилой недвижимости", desc: "Долгосрочная премиальная аренда апартаментов и вилл" },
      commercial: { label: "Покупка коммерческой недвижимости", desc: "Офисы, ритейл, отельные апартаменты и здания" },
    },

    step2Title: "Параметры объекта: Площадь и сроки сдачи",
    step2Subtitle: "Уточните технические требования к резиденции",
    areaLabel: "Какая площадь интересует?",
    areaOptions: {
      studio: "Студия / 1 спальня (до 85 м² / до 900 sq.ft)",
      twoBed: "2 спальни (85–140 м² / 900–1,500 sq.ft)",
      threeBed: "3–4 спальни (140–250 м² / 1,500–2,700 sq.ft)",
      penthouse: "Пентхаус / Вилла (250+ м² / 2,700+ sq.ft)",
      any: "Любая подходящая / Под максимальную доходность",
    },
    handoverLabel: "Какой срок сдачи объекта?",
    handoverOptions: {
      ready: "Готовый объект (Ready to move in / с арендатором)",
      nearFuture: "Сдача в ближайшие 6–12 месяцев (2026–2027)",
      midFuture: "Сдача в 2027–2028 гг. (Выгодный вход)",
      longTerm: "Сдача в 2029+ гг. (Максимальная рассрочка)",
      any: "Срок сдачи не имеет значения",
    },

    step3Title: "Бюджет и валюта инвестиций",
    step3Subtitle: "Укажите комфортный инвестиционный диапазон",
    currencyLabel: "Валюта расчета",
    quickBudgetLabel: "Быстрый выбор диапазона",
    exactBudgetLabel: "Или введите точную сумму",
    budgetPlaceholder: "Например: 2,500,000",

    step4Title: "Язык общения и страна клиента",
    step4Subtitle: "Подберем лицензированного RERA-брокера с носителем вашего языка",
    languageLabel: "Предпочитаемый язык общения",
    countryLabel: "Страна клиента (резидентство / локация)",
    otherCountryPlaceholder: "Введите вашу страну...",

    step5Title: "Контактные данные и формат связи",
    step5Subtitle: "Куда направить персональный реестр свободных лотов и расчет окупаемости",
    nameLabel: "Имя",
    namePlaceholder: "Александр",
    lastNameLabel: "Фамилия",
    lastNamePlaceholder: "Иванов",
    phoneLabel: "Номер телефона / WhatsApp",
    phonePlaceholder: "+971 50 123 4567",
    emailLabel: "E-mail",
    contactPrefLabel: "Формат связи с клиентом",
    contactDirect: "👤 Связываться напрямую",
    contactRep: "💼 Через представителя клиента",
    commPreferencesLabel: "Есть ли пожелания по формату и времени коммуникации?",
    commPreferencesPlaceholder: "Например: писать только в WhatsApp, звонить строго после 18:00 по времени Дубая",
    commentLabel: "Комментарий или особые пожелания",
    commentPlaceholder: "Например: видовой этаж в Downtown с получением Golden Visa",

    successTitle: "Заявка успешно сформирована!",
    successSubtitle: "Спецификация передана в закрытую сеть аккредитованных брокеров RERA. Подборка свободных резиденций и расчет доходности уже готовятся.",
    summaryClient: "Клиент",
    summaryCategory: "Категория",
    summaryBudget: "Бюджет",
    summaryArea: "Площадь",
    summaryContact: "Связь",
    messengerChoiceLabel: "Куда направить презентации и расчет окупаемости:",
    whatsappBtn: "В WhatsApp (Основной)",
    telegramBtn: "В Telegram",
    returnBtn: "Вернуться к просмотру архитектуры",
  },

  en: {
    modalTitle: "Dubai Property Advisory & Selection",
    modalBadge: "RERA ACCREDITED",
    modalSubtitle: "Personalized specification for licensed brokerage networks",
    stepIndicator: (step, total) => `Step ${step} of ${total}`,
    nextBtn: "Next ➡️",
    backBtn: "⬅️ Back",
    submitBtn: "Request Property Dossier 🚀",
    submittingBtn: "Processing...",
    requiredField: "*",
    optionalLabel: "(optional)",

    step1Title: "What type of property are you looking for?",
    step1Subtitle: "Select the primary purpose of your inquiry",
    propertyTypes: {
      primary: { label: "Off-Plan (Primary Market)", desc: "Direct developer allocations from tier-1 master builders" },
      secondary_buy: { label: "Secondary Market Purchase", desc: "Ready-to-move key-ready residences and luxury suites" },
      secondary_sell: { label: "Sell Secondary Property", desc: "Asset valuation, institutional marketing, and buyer exit" },
      rent: { label: "Luxury Rental", desc: "Long-term prime penthouse and branded residence leases" },
      commercial: { label: "Commercial Real Estate", desc: "Prime office floors, retail assets, and hotel investments" },
    },

    step2Title: "Property Specifications: Area & Handover",
    step2Subtitle: "Specify structural and delivery requirements",
    areaLabel: "What area / layout are you interested in?",
    areaOptions: {
      studio: "Studio / 1-Bedroom (up to 900 sq.ft / 85 m²)",
      twoBed: "2-Bedroom (900–1,500 sq.ft / 85–140 m²)",
      threeBed: "3–4 Bedrooms (1,500–2,700 sq.ft / 140–250 m²)",
      penthouse: "Penthouse / Sky Villa (2,700+ sq.ft / 250+ m²)",
      any: "Flexible / Targeted for Highest Rental Yield",
    },
    handoverLabel: "What is your target handover timeline?",
    handoverOptions: {
      ready: "Ready-to-move-in (Immediate possession or tenanted)",
      nearFuture: "Handover in 6–12 months (2026–2027)",
      midFuture: "Handover in 2027–2028 (Optimal off-plan entry)",
      longTerm: "Handover in 2029+ (Extended post-handover plan)",
      any: "Handover timeline is flexible",
    },

    step3Title: "Investment Budget & Currency",
    step3Subtitle: "Specify your comfortable investment range",
    currencyLabel: "Target Currency",
    quickBudgetLabel: "Quick Budget Range",
    exactBudgetLabel: "Or Enter Exact Amount",
    budgetPlaceholder: "e.g. 2,500,000",

    step4Title: "Language & Client Country",
    step4Subtitle: "Matched with a licensed RERA specialist fluent in your native language",
    languageLabel: "Preferred Advisory Language",
    countryLabel: "Client Country of Residence / Citizenship",
    otherCountryPlaceholder: "Enter your country...",

    step5Title: "Contact Details & Communication Format",
    step5Subtitle: "Where should the verified dossier and yield breakdown be delivered?",
    nameLabel: "First Name",
    namePlaceholder: "Alexander",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Smith",
    phoneLabel: "Phone Number / WhatsApp",
    phonePlaceholder: "+971 50 123 4567",
    emailLabel: "E-mail",
    contactPrefLabel: "Client Communication Format",
    contactDirect: "👤 Direct client contact",
    contactRep: "💼 Via client's representative / family office",
    commPreferencesLabel: "Any preferences for communication format and timing?",
    commPreferencesPlaceholder: "e.g. WhatsApp messages only, calls after 6:00 PM Dubai time",
    commentLabel: "Specific Preferences or Notes",
    commentPlaceholder: "e.g. High floor in Downtown, 60/40 payment plan, Golden Visa eligibility",

    successTitle: "Dossier Request Successfully Created!",
    successSubtitle: "Your specification has been forwarded to the accredited RERA network. Verified unit listings and ROI spreadsheets are being compiled.",
    summaryClient: "Client",
    summaryCategory: "Category",
    summaryBudget: "Budget",
    summaryArea: "Area",
    summaryContact: "Communication",
    messengerChoiceLabel: "Where should we deliver the property dossiers:",
    whatsappBtn: "Deliver to WhatsApp (Primary)",
    telegramBtn: "Deliver to Telegram",
    returnBtn: "Return to Architecture Encyclopedia",
  },

  ar: {
    modalTitle: "استشارات واختيار عقارات دبي",
    modalBadge: "معتمد من مؤسسة التنظيم العقاري (RERA)",
    modalSubtitle: "مواصفات مخصصة لشبكات الوسطاء العقاريين المعتمدين",
    stepIndicator: (step, total) => `الخطوة ${step} من ${total}`,
    nextBtn: "التالي ➡️",
    backBtn: "⬅️ السابق",
    submitBtn: "طلب ملف العقارات 🚀",
    submittingBtn: "جارٍ الإرسال...",
    requiredField: "*",
    optionalLabel: "(اختياري)",

    step1Title: "ما هو نوع العقار الذي تبحث عنه؟",
    step1Subtitle: "حدد الهدف الرئيسي من طلبك",
    propertyTypes: {
      primary: { label: "شراء عقار قيد الإنشاء (Off-Plan)", desc: "مباشرة من كبار المطورين في دبي" },
      secondary_buy: { label: "شراء عقار جاهز (سوق ثانوي)", desc: "مساكن وشقق جاهزة للاستلام الفوري" },
      secondary_sell: { label: "بيع عقار ثانوي", desc: "تقييم الأصول والتسويق واستقطاب المشترين" },
      rent: { label: "استئجار عقار سكني فاخر", desc: "عقود إيجار طويلة الأجل للفلل والبنتهاوس" },
      commercial: { label: "شراء عقار تجاري", desc: "مكاتب فاخرة ومحلات تجارية وشقق فندقية" },
    },

    step2Title: "مواصفات العقار: المساحة وموعد التسليم",
    step2Subtitle: "حدد المتطلبات الفنية والمساحة المطلوبة",
    areaLabel: "ما هي المساحة / التوزيع المطلوب؟",
    areaOptions: {
      studio: "استوديو / غرفة نوم واحدة (حتى 900 قدم² / 85 م²)",
      twoBed: "غرفتان نوم (900–1,500 قدم² / 85–140 م²)",
      threeBed: "3–4 غرف نوم (1,500–2,700 قدم² / 140–250 م²)",
      penthouse: "بنتهاوس / فيلا سحابية (2,700+ قدم² / 250+ م²)",
      any: "أي مساحة مناسبة / لأعلى عائد استثماري",
    },
    handoverLabel: "ما هو موعد التسليم المفضل؟",
    handoverOptions: {
      ready: "عقار جاهز للتسليم الفوري أو مؤجر",
      nearFuture: "تسليم خلال 6–12 شهرًا (2026–2027)",
      midFuture: "تسليم في 2027–2028 (أفضل خطة سداد)",
      longTerm: "تسليم في 2029 وما بعد (أطول فترة أقساط)",
      any: "موعد التسليم مرن ولا يشكل فارقًا",
    },

    step3Title: "ميزانية الاستثمار والعملة",
    step3Subtitle: "حدد النطاق المالي المناسب لك",
    currencyLabel: "العملة المفضلة",
    quickBudgetLabel: "نطاقات الميزانية السريعة",
    exactBudgetLabel: "أو أدخل المبلغ المحدد",
    budgetPlaceholder: "مثال: 2,500,000",

    step4Title: "لغة التواصل وبلد الإقامة",
    step4Subtitle: "سيتم تعيين وسيط مرخص من RERA يتحدث لغتك بطلاقة",
    languageLabel: "لغة الاستشارة المفضلة",
    countryLabel: "بلد إقامة العميل / الجنسية",
    otherCountryPlaceholder: "أدخل اسم دولتك...",

    step5Title: "بيانات الاتصال وتفضيلات التواصل",
    step5Subtitle: "أين تود استلام ملف الوحدات المتاحة وحسابات العائد؟",
    nameLabel: "الاسم الأول",
    namePlaceholder: "محمد",
    lastNameLabel: "اسم العائلة",
    lastNamePlaceholder: "المنصوري",
    phoneLabel: "رقم الهاتف / واتساب",
    phonePlaceholder: "+971 50 123 4567",
    emailLabel: "البريد الإلكتروني",
    contactPrefLabel: "طريقة التواصل المفضلة",
    contactDirect: "👤 التواصل مباشرة مع العميل",
    contactRep: "💼 عبر ممثل العميل أو المكتب العائلي",
    commPreferencesLabel: "هل لديك تفضيلات بخصوص وقت أو وسيلة الاتصال؟",
    commPreferencesPlaceholder: "مثال: المراسلة عبر واتساب فقط، الاتصال بعد الساعة 6:00 مساءً بتوقيت دبي",
    commentLabel: "ملاحظات أو متطلبات خاصة",
    commentPlaceholder: "مثال: طابق مرتفع في داون تاون، خطة سداد 60/40، مؤهل للإقامة الذهبية",

    successTitle: "تم إنشاء الطلب بنجاح!",
    successSubtitle: "تم توجيه طلبك إلى شبكة وسطاء RERA المعتمدين. يجري إعداد ملف المشاريع وحسابات العائد.",
    summaryClient: "العميل",
    summaryCategory: "الفئة",
    summaryBudget: "الميزانية",
    summaryArea: "المساحة",
    summaryContact: "التواصل",
    messengerChoiceLabel: "أين ترغب في استلام الملفات وخطة السداد:",
    whatsappBtn: "إرسال إلى واتساب (الأساسي)",
    telegramBtn: "إرسال إلى تيليجرام",
    returnBtn: "العودة لتصفح الموسوعة",
  },

  zh: {
    modalTitle: "迪拜置业与投资定制顾问",
    modalBadge: "RERA 官方持牌机构",
    modalSubtitle: "针对持牌经纪网络的专属资产配置方案",
    stepIndicator: (step, total) => `第 ${step} 步，共 ${total} 步`,
    nextBtn: "下一步 ➡️",
    backBtn: "⬅️ 返回",
    submitBtn: "获取专属房源档案 🚀",
    submittingBtn: "提交中...",
    requiredField: "*",
    optionalLabel: "(选填)",

    step1Title: "您感兴趣的物业类型？",
    step1Subtitle: "请选择本次咨询的核心需求",
    propertyTypes: {
      primary: { label: "购买期房 (Off-Plan)", desc: "直连迪拜顶级头部开发商一手配额" },
      secondary_buy: { label: "购买现房 (二手市场)", desc: "已交房、可直接入住或带租约的高端公寓" },
      secondary_sell: { label: "出售二手物业", desc: "权威房产估值、机构级市场推广与买家对接" },
      rent: { label: "租赁高端住宅", desc: "长期豪华顶层公寓与品牌独立别墅租赁" },
      commercial: { label: "购买商业地产", desc: "核心甲级写字楼、零售铺面及整栋酒店资产" },
    },

    step2Title: "物业参数：面积与交付时间",
    step2Subtitle: "明确您的户型面积要求与交付周期",
    areaLabel: "您期望的户型面积？",
    areaOptions: {
      studio: "开间 / 一居室 (约 85 平方米 / 900 平方英尺以内)",
      twoBed: "两居室 (约 85–140 平方米 / 900–1,500 平方英尺)",
      threeBed: "三至四居室 (约 140–250 平方米 / 1,500–2,700 平方英尺)",
      penthouse: "顶层复式 / 空中别墅 (250 平方米以上 / 2,700+ 平方英尺)",
      any: "不限户型 / 以投资回报率最大化为核心",
    },
    handoverLabel: "您期望的项目交房时间？",
    handoverOptions: {
      ready: "现房 (可立即入住或已出租带稳定租约)",
      nearFuture: "6至12个月内交房 (2026–2027)",
      midFuture: "2027至2028年交房 (黄金期房分期付款)",
      longTerm: "2029年及之后交房 (最长交房后分期方案)",
      any: "交房时间不限 / 优先考量增值空间",
    },

    step3Title: "投资预算与币种",
    step3Subtitle: "选择您舒适的投资总额范围",
    currencyLabel: "结算币种",
    quickBudgetLabel: "快捷预算区间",
    exactBudgetLabel: "或输入精准预算",
    budgetPlaceholder: "例如：2,500,000",

    step4Title: "沟通语言与所在国家",
    step4Subtitle: "为您精准匹配精通您母语的 RERA 官方认证华语顾问",
    languageLabel: "首选沟通语言",
    countryLabel: "客户所在国家 (常住地 / 国籍)",
    otherCountryPlaceholder: "请输入您的国家...",

    step5Title: "联系方式与对接偏好",
    step5Subtitle: "精选房源清单与租金回报率测算表将发送至此",
    nameLabel: "名字",
    namePlaceholder: "伟",
    lastNameLabel: "姓氏",
    lastNamePlaceholder: "张",
    phoneLabel: "手机号 / WhatsApp / 微信",
    phonePlaceholder: "+971 50 123 4567",
    emailLabel: "电子邮箱",
    contactPrefLabel: "客户对接方式",
    contactDirect: "👤 与客户本人直接沟通",
    contactRep: "💼 通过客户代表或家族办公室对接",
    commPreferencesLabel: "对沟通方式或时间是否有特殊偏好？",
    commPreferencesPlaceholder: "例如：仅限微信或 WhatsApp 留言，迪拜时间下午 6 点后通话",
    commentLabel: "特别备注或附加需求",
    commentPlaceholder: "例如：市中心高楼层、60/40分期方案、办理阿联酋黄金签证 (Golden Visa)",

    successTitle: "房产选品申请已成功提交！",
    successSubtitle: "您的需求已派送至持牌 RERA 专业团队。官方项目户型图及回报测算正在生成中。",
    summaryClient: "客户",
    summaryCategory: "类别",
    summaryBudget: "预算",
    summaryArea: "面积",
    summaryContact: "对接方式",
    messengerChoiceLabel: "请选择接收项目资料的渠道：",
    whatsappBtn: "通过 WhatsApp 接收 (推荐)",
    telegramBtn: "通过 Telegram 接收",
    returnBtn: "返回浏览建筑百科",
  },

  // Fallbacks for de, fr, it, tr, hi, ur match the structure cleanly
  de: {
    modalTitle: "Dubai Immobilien-Beratung & Auswahl",
    modalBadge: "RERA ACCREDITED",
    modalSubtitle: "Maßgeschneiderte Spezifikation für lizenzierte Maklernetzwerke",
    stepIndicator: (step, total) => `Schritt ${step} von ${total}`,
    nextBtn: "Weiter ➡️",
    backBtn: "⬅️ Zurück",
    submitBtn: "Dossier anfordern 🚀",
    submittingBtn: "Wird gesendet...",
    requiredField: "*",
    optionalLabel: "(optional)",

    step1Title: "Welche Art von Immobilie suchen Sie?",
    step1Subtitle: "Wählen Sie den Hauptzweck Ihrer Anfrage",
    propertyTypes: {
      primary: { label: "Neubau / Off-Plan Kauf", desc: "Direktkontingente der führenden Bauträger Dubais" },
      secondary_buy: { label: "Bestandsimmobilie / Sekundärmarkt", desc: "Schlüsselfertige Luxusapartments zur Eigennutzung oder Vermietung" },
      secondary_sell: { label: "Bestandsimmobilie verkaufen", desc: "Wertermittlung, Vermarktung und qualifizierte Käuferansprache" },
      rent: { label: "Premium-Miete", desc: "Langfristige Anmietung von Penthäusern und Villen" },
      commercial: { label: "Gewerbeimmobilie kaufen", desc: "Büroetagen, Verkaufsflächen und Hotelapartments" },
    },

    step2Title: "Objektparameter: Fläche und Fertigstellung",
    step2Subtitle: "Definieren Sie Flächenbedarf und Zeitrahmen",
    areaLabel: "Welche Wohnfläche / Zimmeranzahl interessiert Sie?",
    areaOptions: {
      studio: "Studio / 1 Schlafzimmer (bis 85 m² / 900 sq.ft)",
      twoBed: "2 Schlafzimmer (85–140 m² / 900–1.500 sq.ft)",
      threeBed: "3–4 Schlafzimmer (140–250 m² / 1.500–2.700 sq.ft)",
      penthouse: "Penthouse / Sky Villa (250+ m² / 2.700+ sq.ft)",
      any: "Flexibel / Ausgerichtet auf maximale Mietrendite",
    },
    handoverLabel: "Welcher Fertigstellungszeitpunkt ist gewünscht?",
    handoverOptions: {
      ready: "Bezugsfertig (sofort bezugsbereit oder vermietet)",
      nearFuture: "Fertigstellung in 6–12 Monaten (2026–2027)",
      midFuture: "Fertigstellung 2027–2028 (optimaler Einstieg)",
      longTerm: "Fertigstellung 2029+ (maximale Ratenzahlung)",
      any: "Fertigstellungstermin ist flexibel",
    },

    step3Title: "Investitionsbudget und Währung",
    step3Subtitle: "Wählen Sie Ihren gewünschten Investitionsrahmen",
    currencyLabel: "Abrechnungswährung",
    quickBudgetLabel: "Schnellauswahl Budget",
    exactBudgetLabel: "Oder exakten Betrag eingeben",
    budgetPlaceholder: "z.B. 2.500.000",

    step4Title: "Sprache und Herkunftsland",
    step4Subtitle: "Wir weisen Ihnen einen lizenzierten RERA-Experten mit Ihrer Muttersprache zu",
    languageLabel: "Bevorzugte Beratungssprache",
    countryLabel: "Wohnsitzland / Staatsangehörigkeit",
    otherCountryPlaceholder: "Ihr Land eingeben...",

    step5Title: "Kontaktdaten und Kommunikationspräferenz",
    step5Subtitle: "Wohin dürfen wir die verifizierten Dossiers und Renditeberechnungen senden?",
    nameLabel: "Vorname",
    namePlaceholder: "Maximilian",
    lastNameLabel: "Nachname",
    lastNamePlaceholder: "Schmidt",
    phoneLabel: "Telefonnummer / WhatsApp",
    phonePlaceholder: "+49 170 1234567",
    emailLabel: "E-Mail",
    contactPrefLabel: "Art der Kontaktaufnahme",
    contactDirect: "👤 Direkt mit dem Kunden sprechen",
    contactRep: "💼 Über Bevollmächtigten / Family Office",
    commPreferencesLabel: "Wünsche zu Kontaktzeit oder Kommunikationsweg?",
    commPreferencesPlaceholder: "z.B. Nur per WhatsApp schreiben, Anrufe ab 18:00 Uhr",
    commentLabel: "Besondere Wünsche oder Notizen",
    commentPlaceholder: "z.B. Hohes Stockwerk in Downtown, Golden Visa Eignung",

    successTitle: "Anfrage erfolgreich erstellt!",
    successSubtitle: "Ihre Spezifikation wurde an das RERA-Partnernetzwerk übermittelt. Grundrisse und Berechnungen werden vorbereitet.",
    summaryClient: "Kunde",
    summaryCategory: "Kategorie",
    summaryBudget: "Budget",
    summaryArea: "Fläche",
    summaryContact: "Kontakt",
    messengerChoiceLabel: "Wohin sollen die Unterlagen gesendet werden:",
    whatsappBtn: "Per WhatsApp senden (Hauptkanal)",
    telegramBtn: "Per Telegram senden",
    returnBtn: "Zurück zur Architektur-Enzyklopädie",
  },

  fr: {
    modalTitle: "Conseil & Sélection Immobilière à Dubaï",
    modalBadge: "AGRÉÉ RERA",
    modalSubtitle: "Cahier des charges exclusif pour les courtiers certifiés",
    stepIndicator: (step, total) => `Étape ${step} sur ${total}`,
    nextBtn: "Suivant ➡️",
    backBtn: "⬅️ Retour",
    submitBtn: "Recevoir le Dossier 🚀",
    submittingBtn: "Traitement en cours...",
    requiredField: "*",
    optionalLabel: "(optionnel)",

    step1Title: "Quel type de bien recherchez-vous ?",
    step1Subtitle: "Précisez l'objectif principal de votre projet",
    propertyTypes: {
      primary: { label: "Achat sur plan (Off-Plan)", desc: "Accès direct aux quotas des plus grands promoteurs de Dubaï" },
      secondary_buy: { label: "Achat sur le marché secondaire", desc: "Appartements et résidences prêts à emménager" },
      secondary_sell: { label: "Vente d'un bien existant", desc: "Estimation, commercialisation institutionnelle et recherche d'acquéreurs" },
      rent: { label: "Location résidentielle haut de gamme", desc: "Baux longue durée pour villas et penthouses de prestige" },
      commercial: { label: "Achat d'immobilier commercial", desc: "Bureaux, surfaces commerciales et hôtels" },
    },

    step2Title: "Spécifications : Surface et livraison",
    step2Subtitle: "Définissez la surface et le calendrier de remise des clés",
    areaLabel: "Quelle superficie / typologie souhaitez-vous ?",
    areaOptions: {
      studio: "Studio / 1 chambre (jusqu'à 85 m² / 900 sq.ft)",
      twoBed: "2 chambres (85–140 m² / 900–1 500 sq.ft)",
      threeBed: "3–4 chambres (140–250 m² / 1 500–2 700 sq.ft)",
      penthouse: "Penthouse / Villa céleste (250+ m² / 2 700+ sq.ft)",
      any: "Superficie flexible / Rendement locatif prioritaire",
    },
    handoverLabel: "Quel délai de livraison envisagez-vous ?",
    handoverOptions: {
      ready: "Bien prêt à emménager ou déjà loué avec rentabilité immédiate",
      nearFuture: "Livraison dans les 6 à 12 mois (2026–2027)",
      midFuture: "Livraison en 2027–2028 (Meilleur échelonnement)",
      longTerm: "Livraison en 2029 et après (Plan de paiement allongé)",
      any: "Délai indifférent / Priorité à la plus-value",
    },

    step3Title: "Budget et Devise d'Investissement",
    step3Subtitle: "Indiquez votre fourchette financière optimale",
    currencyLabel: "Devise",
    quickBudgetLabel: "Sélection rapide de budget",
    exactBudgetLabel: "Ou entrez un montant précis",
    budgetPlaceholder: "ex: 2 500 000",

    step4Title: "Langue et Pays de Résidence",
    step4Subtitle: "Attribution d'un courtier agréé RERA parlant parfaitement votre langue",
    languageLabel: "Langue de communication souhaitée",
    countryLabel: "Pays de résidence / Nationalité",
    otherCountryPlaceholder: "Votre pays...",

    step5Title: "Coordonnées et Format d'Échange",
    step5Subtitle: "Où souhaitez-vous recevoir les plans d'étage et simulations de rentabilité ?",
    nameLabel: "Prénom",
    namePlaceholder: "Pierre",
    lastNameLabel: "Nom",
    lastNamePlaceholder: "Dubois",
    phoneLabel: "Numéro de téléphone / WhatsApp",
    phonePlaceholder: "+33 6 12 34 56 78",
    emailLabel: "E-mail",
    contactPrefLabel: "Format de contact",
    contactDirect: "👤 Contacter directement le client",
    contactRep: "💼 Via un représentant ou family office",
    commPreferencesLabel: "Préférences d'horaires ou de canal de communication ?",
    commPreferencesPlaceholder: "ex: Message WhatsApp uniquement, appels après 18h",
    commentLabel: "Remarques ou critères spécifiques",
    commentPlaceholder: "ex: Étage élevé à Downtown, éligibilité Golden Visa",

    successTitle: "Demande enregistrée avec succès !",
    successSubtitle: "Votre cahier des charges a été transmis aux courtiers certifiés RERA. Les dossiers de projets sont en cours d'assemblage.",
    summaryClient: "Client",
    summaryCategory: "Catégorie",
    summaryBudget: "Budget",
    summaryArea: "Surface",
    summaryContact: "Contact",
    messengerChoiceLabel: "Choisissez le canal de réception des dossiers :",
    whatsappBtn: "Recevoir sur WhatsApp (Principal)",
    telegramBtn: "Recevoir sur Telegram",
    returnBtn: "Retour à l'encyclopédie",
  },
  it: {
    modalTitle: "Consulenza e Selezione Immobiliare a Dubai",
    modalBadge: "ACCREDITATO RERA",
    modalSubtitle: "Specifiche personalizzate per la rete di broker autorizzati",
    stepIndicator: (step, total) => `Passo ${step} di ${total}`,
    nextBtn: "Avanti ➡️",
    backBtn: "⬅️ Indietro",
    submitBtn: "Richiedi Dossier 🚀",
    submittingBtn: "Elaborazione...",
    requiredField: "*",
    optionalLabel: "(opzionale)",

    step1Title: "Che tipo di immobile stai cercando?",
    step1Subtitle: "Seleziona lo scopo principale della tua richiesta",
    propertyTypes: {
      primary: { label: "Acquisto su carta (Off-Plan)", desc: "Accesso diretto ai lotti dei primari costruttori di Dubai" },
      secondary_buy: { label: "Acquisto sul mercato secondario", desc: "Residenze pronte per essere abitate o con inquilino" },
      secondary_sell: { label: "Vendita di immobile esistente", desc: "Valutazione dell'immobile, marketing e ricerca acquirenti" },
      rent: { label: "Affitto residenziale di lusso", desc: "Locazioni a lungo termine per attici e ville prestigiose" },
      commercial: { label: "Immobili commerciali", desc: "Uffici di prestigio, spazi retail e hotel" },
    },

    step2Title: "Specifiche: Superficie e Consegna",
    step2Subtitle: "Indica i requisiti dimensionali e le tempistiche",
    areaLabel: "Quale superficie / tipologia ti interessa?",
    areaOptions: {
      studio: "Monolocale / 1 camera (fino a 85 m² / 900 sq.ft)",
      twoBed: "2 camere (85–140 m² / 900–1.500 sq.ft)",
      threeBed: "3–4 camere (140–250 m² / 1.500–2.700 sq.ft)",
      penthouse: "Attico / Sky Villa (250+ m² / 2.700+ sq.ft)",
      any: "Flessibile / Massimizzazione della rendita da locazione",
    },
    handoverLabel: "Qual è la tempistica di consegna desiderata?",
    handoverOptions: {
      ready: "Pronto per l'uso (immediato o con rendita)",
      nearFuture: "Consegna nei prossimi 6–12 mesi (2026–2027)",
      midFuture: "Consegna nel 2027–2028 (Ottimo piano rateale)",
      longTerm: "Consegna nel 2029+ (Massima rateizzazione post-consegna)",
      any: "Tempistica indifferente",
    },

    step3Title: "Budget e Valuta d'Investimento",
    step3Subtitle: "Indica la fascia finanziaria desiderata",
    currencyLabel: "Valuta",
    quickBudgetLabel: "Fasce rapide di budget",
    exactBudgetLabel: "Oppure inserisci l'importo esatto",
    budgetPlaceholder: "es: 2.500.000",

    step4Title: "Lingua e Paese del Cliente",
    step4Subtitle: "Ti assegneremo un broker RERA con madrelingua italiana",
    languageLabel: "Lingua preferita",
    countryLabel: "Paese di residenza / Nazionalità",
    otherCountryPlaceholder: "Il tuo paese...",

    step5Title: "Contatti e Preferenze di Comunicazione",
    step5Subtitle: "Dove desideri ricevere i dossier e il piano di rendita?",
    nameLabel: "Nome",
    namePlaceholder: "Marco",
    lastNameLabel: "Cognome",
    lastNamePlaceholder: "Rossi",
    phoneLabel: "Numero di telefono / WhatsApp",
    phonePlaceholder: "+39 340 1234567",
    emailLabel: "E-mail",
    contactPrefLabel: "Formato di contatto",
    contactDirect: "👤 Contattare direttamente il cliente",
    contactRep: "💼 Tramite rappresentante / family office",
    commPreferencesLabel: "Preferenze su orario e canale di contatto?",
    commPreferencesPlaceholder: "es: Solo messaggi WhatsApp, chiamate dopo le 18:00",
    commentLabel: "Note o preferenze specifiche",
    commentPlaceholder: "es: Piano alto a Downtown, idoneità Golden Visa",

    successTitle: "Richiesta creata con successo!",
    successSubtitle: "Le tue specifiche sono state inoltrate alla rete accreditata RERA. I dossier e i conteggi sono in preparazione.",
    summaryClient: "Cliente",
    summaryCategory: "Categoria",
    summaryBudget: "Budget",
    summaryArea: "Superficie",
    summaryContact: "Contatto",
    messengerChoiceLabel: "Dove desideri ricevere le presentazioni:",
    whatsappBtn: "Invia su WhatsApp (Principale)",
    telegramBtn: "Invia su Telegram",
    returnBtn: "Torna all'enciclopedia",
  },

  tr: {
    modalTitle: "Dubai Gayrimenkul Danışmanlığı ve Seçimi",
    modalBadge: "RERA LİSANSLI",
    modalSubtitle: "Lisanslı broker ağı için kişiselleştirilmiş şartname",
    stepIndicator: (step, total) => `Adım ${step} / ${total}`,
    nextBtn: "İleri ➡️",
    backBtn: "⬅️ Geri",
    submitBtn: "Portföyü Talep Et 🚀",
    submittingBtn: "İşleniyor...",
    requiredField: "*",
    optionalLabel: "(isteğe bağlı)",

    step1Title: "Hangi tür gayrimenkul ile ilgileniyorsunuz?",
    step1Subtitle: "Talebinizin temel amacını seçin",
    propertyTypes: {
      primary: { label: "Projeden Satın Alma (Off-Plan)", desc: "Dubai'nin öncü geliştiricilerinden doğrudan tahsis" },
      secondary_buy: { label: "İkinci El Hazır Mülk Satın Alma", desc: "Taşınmaya hazır veya kiracılı lüks konutlar" },
      secondary_sell: { label: "Mülkünüzü Satma", desc: "Değerleme, kurumsal pazarlama ve alıcı bulma" },
      rent: { label: "Lüks Konut Kiralama", desc: "Uzun dönem rezidans ve villa kiralama" },
      commercial: { label: "Ticari Gayrimenkul Satın Alma", desc: "Ofisler, ticari alanlar ve otel apartmanları" },
    },

    step2Title: "Özellikler: Alan ve Teslimat Süresi",
    step2Subtitle: "Metrekare ve teslim tarihi gereksinimlerinizi belirtin",
    areaLabel: "Hangi alan / oda sayısı ilginizi çekiyor?",
    areaOptions: {
      studio: "Stüdyo / 1 Yatak Odası (85 m² / 900 sq.ft'e kadar)",
      twoBed: "2 Yatak Odası (85–140 m² / 900–1.500 sq.ft)",
      threeBed: "3–4 Yatak Odası (140–250 m² / 1.500–2.700 sq.ft)",
      penthouse: "Penthouse / Sky Villa (250+ m² / 2.700+ sq.ft)",
      any: "Esnek / Maksimum kira getirisi odaklı",
    },
    handoverLabel: "Hedef teslimat tarihiniz nedir?",
    handoverOptions: {
      ready: "Hemen taşınmaya hazır veya kiracılı mülk",
      nearFuture: "6–12 ay içinde teslim (2026–2027)",
      midFuture: "2027–2028 teslim (En avantajlı taksit planı)",
      longTerm: "2029 ve sonrası teslim (Maksimum vade)",
      any: "Teslimat tarihi esnek",
    },

    step3Title: "Yatırım Bütçesi ve Para Birimi",
    step3Subtitle: "Sizin için uygun bütçe aralığını belirtin",
    currencyLabel: "Para Birimi",
    quickBudgetLabel: "Hızlı Bütçe Seçimi",
    exactBudgetLabel: "Veya tam tutar girin",
    budgetPlaceholder: "örn: 2.500.000",

    step4Title: "Dil ve Müşteri Ülkesi",
    step4Subtitle: "Ana dilinizde hizmet verecek lisanslı bir RERA uzmanı atanacaktır",
    languageLabel: "Tercih edilen dil",
    countryLabel: "İkamet edilen ülke / Vatandaşlık",
    otherCountryPlaceholder: "Ülkenizi yazın...",

    step5Title: "İletişim Bilgileri ve Tercihler",
    step5Subtitle: "Proje dosyalarını ve getiri tablosunu nereye iletelim?",
    nameLabel: "Adınız",
    namePlaceholder: "Emre",
    lastNameLabel: "Soyadınız",
    lastNamePlaceholder: "Yılmaz",
    phoneLabel: "Telefon Numarası / WhatsApp",
    phonePlaceholder: "+90 532 123 4567",
    emailLabel: "E-posta",
    contactPrefLabel: "İletişim Şekli",
    contactDirect: "👤 Müşteri ile doğrudan iletişim",
    contactRep: "💼 Müşteri temsilcisi aracılığıyla",
    commPreferencesLabel: "İletişim saati veya kanalı ile ilgili tercihiniz var mı?",
    commPreferencesPlaceholder: "örn: Yalnızca WhatsApp mesajı, saat 18:00'den sonra arama",
    commentLabel: "Özel istekler veya notlar",
    commentPlaceholder: "örn: Downtown'da yüksek kat, Golden Visa uygunluğu",

    successTitle: "Talebiniz Başarıyla Oluşturuldu!",
    successSubtitle: "Şartnameniz RERA lisanslı broker ağına iletilmiştir. Kat planları ve yatırım analizleri hazırlanıyor.",
    summaryClient: "Müşteri",
    summaryCategory: "Kategori",
    summaryBudget: "Bütçe",
    summaryArea: "Alan",
    summaryContact: "İletişim",
    messengerChoiceLabel: "Dosyaları nereye göndermemizi istersiniz:",
    whatsappBtn: "WhatsApp'a Gönder (Birincil)",
    telegramBtn: "Telegram'a Gönder",
    returnBtn: "Mimarlık Rehberine Dön",
  },
};

// Fill aliases for other languages (hi, ur) defaulting to en with localized titles
export function getQuizTranslation(lang: string): QuizTranslations {
  if (QUIZ_I18N[lang]) return QUIZ_I18N[lang];
  return QUIZ_I18N.en;
}
