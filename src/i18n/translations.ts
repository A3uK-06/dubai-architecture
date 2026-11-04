import { LanguageCode } from "./languages";

export interface TranslationDictionary {
  siteTitle: string;
  siteSubtitle: string;
  tagline: string;
  nav: {
    home: string;
    catalog: string;
    districts: string;
    calculator: string;
    goldenVisa: string;
    archive: string;
    contactBroker: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
    ctaCatalog: string;
    ctaInvestment: string;
    statsYears: string;
    statsTowers: string;
    statsRoi: string;
    statsDistricts: string;
    downloadGuideBtn: string;
    statusBarText: string;
  };
  filters: {
    allDistricts: string;
    allHeights: string;
    allArchitects: string;
    search: string;
    sortBy: string;
    heightDesc: string;
    yearDesc: string;
    popularity: string;
  };
  catalog: {
    title: string;
    subtitle: string;
    masterpieces: string;
    allTypes: string;
    type: string;
    types: {
      all: string;
      residential: string;
      commercial: string;
      hotel: string;
      mixedUse: string;
      cultural: string;
    };
    heightOptions: {
      all: string;
      megatall: string;
      supertall: string;
      highrise: string;
    };
    sortOptions: {
      height: string;
      year: string;
      popularity: string;
      yield: string;
    };
    estRentalYield: string;
    underConstruction: string;
    showing: string;
    buildings: string;
    filteredBy: string;
    noMatch: string;
    clearSearch: string;
    resetFilters: string;
    resetAllFilters: string;
  };
  buildingCard: {
    height: string;
    floors: string;
    year: string;
    architect: string;
    developer: string;
    district: string;
    viewDetails: string;
    inquireUnits: string;
    residential: string;
    commercial: string;
    hotel: string;
    mixedUse: string;
  };
  districts: {
    badge: string;
    title: string;
    subtitle: string;
    towersCount: string;
    keyLandmarks: string;
    exploreDistrict: string;
    masterDeveloper: string;
    averageYield: string;
    investPros: string;
  };
  investmentBanner: {
    title: string;
    subtitle: string;
    ctaText: string;
    requestUnits: string;
    downloadCatalog: string;
    badge: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    propertyPrice: string;
    rentalYield: string;
    serviceCharge: string;
    estimatedGross: string;
    estimatedNet: string;
    netRoi: string;
    annualNetProfit: string;
    currency: string;
    disclaimer: string;
    badge: string;
    selectCurrency: string;
    conservative: string;
    dubaiAvg: string;
    shortTermHigh: string;
    lowMaintenance: string;
    ultraLuxury: string;
    annualProjections: string;
    zeroTax: string;
    netRoiSub: string;
    maintenanceCharges: string;
    fiveYearReturn: string;
    perYear: string;
    goldenVisaQualified: string;
    goldenVisaQualifiedDesc: string;
    goldenVisaNeed: string;
    inquireCalculationCta: string;
    instantMatchDesc: string;
  };
  goldenVisa: {
    title: string;
    badge: string;
    subtitle: string;
    thresholdNotice: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
    checkEligibility: string;
  };
  goldenVisaWidget: {
    badge: string;
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    qBudget: string;
    optUnder2m: string;
    optUnder2mDesc: string;
    opt2mTo5m: string;
    opt2mTo5mDesc: string;
    opt5mPlus: string;
    opt5mPlusDesc: string;
    qReadiness: string;
    optOffPlan: string;
    optReady: string;
    optMortgage: string;
    qFamily: string;
    optIndividual: string;
    optFamily: string;
    optParents: string;
    resultEligible: string;
    resultStandard: string;
    resultDescEligible: string;
    resultDescStandard: string;
    formName: string;
    formPhone: string;
    submitBtn: string;
    submittedTitle: string;
    submittedDesc: string;
    back: string;
    next: string;
  };
  leadModal: {
    modalBadge: string;
    defaultTitle: string;
    defaultSubtitle: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    budgetLabel: string;
    submitBtn: string;
    instantDelivery: string;
    successTitle: string;
    successDesc: string;
    openWhatsApp: string;
    close: string;
  };
  buildingDetail: {
    breadcrumbHome: string;
    breadcrumbCatalog: string;
    storeys: string;
    built: string;
    archiveId: string;
    architectLabel: string;
    developerLabel: string;
    districtLabel: string;
    estRentalYield: string;
    unitsFrom: string;
    historyTitle: string;
    historyNote: string;
    highlightsTitle: string;
    ttxTitle: string;
    officialHeight: string;
    totalFloors: string;
    aboveGroundLevels: string;
    yearCompleted: string;
    buildingType: string;
    structuralSystem: string;
    verifiedAllocation: string;
    investIn: string;
    investSubtitle: string;
    entryPriceAed: string;
    entryPriceUsd: string;
    projectedYield: string;
    goldenVisaEligible: string;
    goldenVisaEligibleValue: string;
    inquireWhatsApp: string;
    requestFloorplans: string;
    reraNotice: string;
    moreTowersIn: string;
  };
  districtDetail: {
    breadcrumbHome: string;
    breadcrumbDistricts: string;
    masterDeveloper: string;
    towersCount: string;
    avgRentalYield: string;
    districtOverview: string;
    districtHighlights: string;
    districtInvestment: string;
    iconicTowersInDistrict: string;
    inquireDistrictUnits: string;
    inquireWhatsApp: string;
  };
  whatsapp: {
    buttonText: string;
    tooltip: string;
    defaultMessage: string;
  };
  footer: {
    description: string;
    linksTitle: string;
    legalTitle: string;
    disclaimer: string;
    rightsReserved: string;
    historicalArchiveNote: string;
  };
}

function deepMerge<T extends Record<string, any>>(base: T, override: any): T {
  const result: any = { ...base };
  for (const key of Object.keys(override || {})) {
    const val = override[key];
    if (val && typeof val === "object" && !Array.isArray(val)) {
      result[key] = deepMerge(base[key] || {}, val);
    } else if (val !== undefined) {
      result[key] = val;
    }
  }
  return result;
}

const enBase: TranslationDictionary = {
  siteTitle: "Dubai Architecture",
  siteSubtitle: "Architectural Encyclopedia & Premium Skyscrapers",
  tagline: "Documenting Dubai's skyline since 2006. Architectural engineering meets luxury real estate opportunities.",
  nav: {
    home: "Home",
    catalog: "Skyscrapers",
    districts: "Districts",
    calculator: "ROI Calculator",
    goldenVisa: "Golden Visa",
    archive: "Archive (2006)",
    contactBroker: "Inquire Units",
  },
  hero: {
    badge: "Historical Trust Domain • Since 2006",
    title: "Dubai's Architectural Marvels &",
    titleHighlight: "Iconic Skyscrapers",
    subtitle: "Explore the structural engineering, legendary architects, and investment opportunities in the world's most dynamic vertical metropolis.",
    searchPlaceholder: "Search towers, architects, or districts (e.g. Burj Khalifa, Foster, Marina)...",
    ctaCatalog: "Explore Architecture",
    ctaInvestment: "Investment Opportunities",
    statsYears: "Years of Heritage",
    statsTowers: "Iconic Towers",
    statsRoi: "Avg. Rental Yield",
    statsDistricts: "Key Waterfront Districts",
    downloadGuideBtn: "📥 Download Top-10 Towers Guide (PDF)",
    statusBarText: "Auto-saved to localStorage • TOP-10 DLD Investor Languages",
  },
  filters: {
    allDistricts: "All Districts",
    allHeights: "Any Height",
    allArchitects: "All Architects",
    search: "Search architecture...",
    sortBy: "Sort by",
    heightDesc: "Tallest first",
    yearDesc: "Newest first",
    popularity: "Most Iconic",
  },
  catalog: {
    title: "Dubai Skyscrapers Encyclopedia",
    subtitle: "Architectural profiles, structural engineering metrics, and prime investment allocations in Dubai's tallest icons.",
    masterpieces: "Masterpieces",
    allTypes: "All Types",
    type: "Type",
    types: {
      all: "All Types",
      residential: "Residential",
      commercial: "Commercial",
      hotel: "Hotel",
      mixedUse: "Mixed-Use",
      cultural: "Cultural",
    },
    heightOptions: {
      all: "Any Height",
      megatall: "Megatall (> 600m)",
      supertall: "Supertall (300m - 600m)",
      highrise: "High-rise (< 300m)",
    },
    sortOptions: {
      height: "Tallest first",
      year: "Newest first",
      popularity: "Most Iconic",
      yield: "Highest Net Yield (%)",
    },
    estRentalYield: "Est. Rental Yield",
    underConstruction: "Under Construction",
    showing: "Showing",
    buildings: "buildings",
    filteredBy: "Filtered by:",
    noMatch: "No skyscrapers match your filter criteria",
    clearSearch: "Try clearing your search query or selecting a different district.",
    resetFilters: "Reset filters",
    resetAllFilters: "Reset all filters",
  },
  buildingCard: {
    height: "Height",
    floors: "Floors",
    year: "Year",
    architect: "Architect",
    developer: "Developer",
    district: "District",
    viewDetails: "Architectural Profile",
    inquireUnits: "Available Units & Prices",
    residential: "Residential",
    commercial: "Commercial",
    hotel: "Luxury Hotel",
    mixedUse: "Mixed-Use",
  },
  districts: {
    badge: "8 Prime Investment Hubs",
    title: "Dubai's Iconic Urban Districts",
    subtitle: "From the world's highest density skyscraper corridor to private beachfront islands. Compare yield and architectural scale.",
    towersCount: "Towers",
    keyLandmarks: "Key Landmarks:",
    exploreDistrict: "Explore District",
    masterDeveloper: "Master-Developer:",
    averageYield: "Average Rental Yield",
    investPros: "Investment Advantages",
  },
  investmentBanner: {
    title: "Invest in Dubai's Architectural Icons",
    subtitle: "Direct developer allocations, 0% property tax, high rental yields (7-10% net), and 10-Year Golden Visa qualification.",
    ctaText: "Request Available Units",
    requestUnits: "Request Floor Plans & Prices",
    downloadCatalog: "Download Top-10 Towers Guide (PDF)",
    badge: "Investor Dossier 2026",
  },
  calculator: {
    title: "Skyscraper Rental Yield & ROI Calculator",
    subtitle: "Estimate your net annual rental yield and capital appreciation in USD, AED, EUR and more.",
    propertyPrice: "Property Purchase Price",
    rentalYield: "Expected Gross Yield (%)",
    serviceCharge: "Annual Service Charges / Maintenance",
    estimatedGross: "Gross Annual Income",
    estimatedNet: "Net Annual Cash Flow",
    netRoi: "Net Annual ROI",
    annualNetProfit: "Estimated Net Profit",
    currency: "Currency",
    disclaimer: "Estimates are for projection purposes based on current Dubai Land Department transactional indices.",
    badge: "Financial Modeling • Multicurrency",
    selectCurrency: "Select Currency:",
    conservative: "5.0% (Conservative)",
    dubaiAvg: "8.5% (Dubai Avg)",
    shortTermHigh: "12.0% (Short-term High)",
    lowMaintenance: "0.5% (Low Maintenance)",
    ultraLuxury: "2.5% (Ultra-Luxury Tower)",
    annualProjections: "Annual Projections",
    zeroTax: "0% Property Tax",
    netRoiSub: "Net annual cash-in-hand yield after maintenance",
    maintenanceCharges: "Maintenance & Service Charges:",
    fiveYearReturn: "5-Year Total Return (Rent + Growth):",
    perYear: "yr",
    goldenVisaQualified: "UAE 10-Year Golden Visa Eligible",
    goldenVisaQualifiedDesc: "This budget qualifies you and your family for 10-year renewable residency.",
    goldenVisaNeed: "💡 Need 2,000,000 AED ($545k) to qualify for UAE 10-Year Golden Visa.",
    inquireCalculationCta: "Inquire Units Matching This Calculation",
    instantMatchDesc: "Instant match with verified developer floor plans & off-market listings.",
  },
  goldenVisa: {
    title: "UAE 10-Year Golden Visa via Real Estate",
    badge: "Residency by Investment",
    subtitle: "Acquire residential or commercial property with a minimum value of 2,000,000 AED (~$545,000 USD) to qualify for 100% foreign ownership and long-term residency.",
    thresholdNotice: "Minimum investment: 2,000,000 AED ($545,000 USD)",
    benefit1: "10-Year renewable residency for investor & immediate family",
    benefit2: "100% tax-free personal & rental income in Dubai",
    benefit3: "No minimum stay requirement to maintain residency status",
    benefit4: "Access to premier UAE healthcare and world-class education",
    checkEligibility: "Check Visa Eligibility",
  },
  goldenVisaWidget: {
    badge: "Official 2026 Regulations",
    title: "UAE 10-Year Golden Visa Eligibility Checker",
    subtitle: "Answer 3 simple questions to verify your eligibility for 10-year residency via Dubai real estate acquisition.",
    step1: "1. Budget",
    step2: "2. Readiness",
    step3: "3. Family",
    qBudget: "What is your target property investment budget?",
    optUnder2m: "Under 2,000,000 AED (< $545k USD)",
    optUnder2mDesc: "Standard 2-year property investor residency",
    opt2mTo5m: "2,000,000 – 5,000,000 AED ($545k – $1.36M USD)",
    opt2mTo5mDesc: "Fully eligible for 10-year Golden Visa",
    opt5mPlus: "5,000,000+ AED ($1.36M+ USD)",
    opt5mPlusDesc: "VIP Golden Visa allocation & prime penthouses",
    qReadiness: "What stage of purchase are you considering?",
    optOffPlan: "Off-plan / Direct from developer (Construction)",
    optReady: "Ready property / Secondary market",
    optMortgage: "Financed with UAE mortgage (>2M AED equity)",
    qFamily: "Who will be included in the Golden Visa application?",
    optIndividual: "Individual investor only",
    optFamily: "Investor + Spouse & Children",
    optParents: "Investor + Family + Dependent Parents",
    resultEligible: "Eligible for 10-Year Golden Visa!",
    resultStandard: "Eligible for 2-Year Investor Visa",
    resultDescEligible: "Based on your budget, you qualify for 10-year renewable residency in the UAE with 100% company and asset ownership.",
    resultDescStandard: "Properties under 2M AED qualify for the standard 2-year renewable investor visa. Contact us to find units reaching the 2M AED Golden Visa threshold.",
    formName: "Your Full Name",
    formPhone: "Phone / WhatsApp (with country code)",
    submitBtn: "Verify Eligibility & Get Free Legal Consultation",
    submittedTitle: "Eligibility Confirmed!",
    submittedDesc: "Our licensed Dubai residency and real estate specialist will contact you on WhatsApp with verified project recommendations.",
    back: "Back",
    next: "Next",
  },
  leadModal: {
    modalBadge: "Exclusive Real Estate Dossier",
    defaultTitle: "Download Top-10 Investment Towers Guide (PDF)",
    defaultSubtitle: "Direct developer pricing, architectural floor plans, and verified net rental yields (7-10%).",
    nameLabel: "Your Full Name",
    phoneLabel: "Phone / WhatsApp (with country code)",
    emailLabel: "Email Address (Optional)",
    budgetLabel: "Investment Budget",
    submitBtn: "Get PDF Guide & Available Units",
    instantDelivery: "Instant PDF delivery via WhatsApp & Email. No spam guarantee.",
    successTitle: "Thank You! Guide is on its way",
    successDesc: "Our specialist has received your request. You will receive the Top-10 Towers dossier and available floor plans shortly.",
    openWhatsApp: "Open in WhatsApp Now",
    close: "Close",
  },
  buildingDetail: {
    breadcrumbHome: "Home",
    breadcrumbCatalog: "Skyscrapers",
    storeys: "Storeys",
    built: "Built",
    archiveId: "Archive ID",
    architectLabel: "Architect",
    developerLabel: "Developer",
    districtLabel: "District",
    estRentalYield: "Estimated Rental Yield",
    unitsFrom: "Units From",
    historyTitle: "Architectural History & Design Concept",
    historyNote: "Historical Archive Note",
    highlightsTitle: "Key Structural & Engineering Milestones",
    ttxTitle: "Technical Specifications (TTX)",
    officialHeight: "Official Height",
    totalFloors: "Total Floors",
    aboveGroundLevels: "Above-Ground Levels",
    yearCompleted: "Year Completed",
    buildingType: "Function / Building Type",
    structuralSystem: "Structural System",
    verifiedAllocation: "Verified Allocation",
    investIn: "Invest in",
    investSubtitle: "Request current resale pricing, floor plans, and developer resale allocations.",
    entryPriceAed: "Entry Price (AED)",
    entryPriceUsd: "Entry Price (USD)",
    projectedYield: "Projected Net Yield",
    goldenVisaEligible: "UAE Golden Visa",
    goldenVisaEligibleValue: "✓ Eligible (2M+ AED)",
    inquireWhatsApp: "Inquire on WhatsApp",
    requestFloorplans: "Request Official PDF Floorplans",
    reraNotice: "🔒 Direct consultation via licensed RERA real estate brokers in Dubai. 0% buyer commission.",
    moreTowersIn: "More Architectural Icons in",
  },
  districtDetail: {
    breadcrumbHome: "Home",
    breadcrumbDistricts: "Districts",
    masterDeveloper: "Master-Developer:",
    towersCount: "Towers",
    avgRentalYield: "Average Rental Yield",
    districtOverview: "District Overview & Architecture",
    districtHighlights: "Key Architectural Landmarks",
    districtInvestment: "Investment Appeal & Infrastructure",
    iconicTowersInDistrict: "Iconic Skyscrapers in",
    inquireDistrictUnits: "Inquire District Resale & Off-Plan Allocations",
    inquireWhatsApp: "Consult District Broker on WhatsApp",
  },
  whatsapp: {
    buttonText: "Consult Broker",
    tooltip: "Direct WhatsApp with Licensed Dubai Real Estate Specialist",
    defaultMessage: "Hello, I am inquiring through Dubai-Architecture.info regarding luxury towers and investment opportunities in Dubai.",
  },
  footer: {
    description: "Dubai-Architecture.info is an architectural heritage archive founded in 2006, highlighting the structural evolution of the emirate and offering direct market connectivity to licensed real estate partners.",
    linksTitle: "Architecture Directory",
    legalTitle: "Information & Compliance",
    disclaimer: "Dubai-Architecture.info is an independent architectural catalog and marketing platform connecting prospective buyers with RERA-licensed brokerage agencies.",
    rightsReserved: "All rights reserved. Historical architectural archive.",
    historicalArchiveNote: "Preserving architectural milestones of the UAE since 2006.",
  },
};

const ruTranslations: Partial<TranslationDictionary> = {
  siteTitle: "Архитектура Дубая",
  siteSubtitle: "Архитектурная энциклопедия и премиальные небоскребы",
  tagline: "Летопись скайлайна Дубая с 2006 года. Инженерное искусство и инвестиционная недвижимость премиум-класса.",
  nav: {
    home: "Главная",
    catalog: "Небоскребы",
    districts: "Районы",
    calculator: "Калькулятор ROI",
    goldenVisa: "Золотая виза",
    archive: "Архив (2006)",
    contactBroker: "Доступные лоты",
  },
  hero: {
    badge: "Исторический трастовый домен • С 2006 года",
    title: "Архитектурные шедевры и",
    titleHighlight: "небоскребы Дубая",
    subtitle: "Инженерные решения великих зодчих, детальные ТТХ и эксклюзивные инвестиционные возможности в главных высотках планеты.",
    searchPlaceholder: "Поиск башни, архитектора или района (Бурдж-Халифа, Заха Хадид, Марина)...",
    ctaCatalog: "Каталог архитектуры",
    ctaInvestment: "Инвестиционные объекты",
    statsYears: "Лет истории проекта",
    statsTowers: "Культовых небоскребов",
    statsRoi: "Средняя доходность аренды",
    statsDistricts: "Премиальных районов",
    downloadGuideBtn: "📥 Скачать гид по ТОП-10 небоскребам (PDF)",
    statusBarText: "Автосохранение языка • ТОП-10 языков инвесторов DLD",
  },
  filters: {
    allDistricts: "Все районы",
    allHeights: "Любая высота",
    allArchitects: "Все архитекторы",
    search: "Поиск по каталогу...",
    sortBy: "Сортировка",
    heightDesc: "Сначала самые высокие",
    yearDesc: "Сначала новые",
    popularity: "Самые известные",
  },
  catalog: {
    title: "Энциклопедия небоскребов Дубая",
    subtitle: "Архитектурные профили, инженерно-технические характеристики и премиальные инвестиционные пулы в высочайших башнях мира.",
    masterpieces: "Шедевров архитектуры",
    allTypes: "Все типы",
    type: "Тип",
    types: {
      all: "Все типы",
      residential: "Жилой комплекс",
      commercial: "Бизнес-центр",
      hotel: "Отель люкс",
      mixedUse: "Многофункциональный",
      cultural: "Культурный объект",
    },
    heightOptions: {
      all: "Любая высота",
      megatall: "Мегатолл (> 600 м)",
      supertall: "Супертолл (300 м – 600 м)",
      highrise: "Высотное здание (< 300 м)",
    },
    sortOptions: {
      height: "Сначала самые высокие",
      year: "Сначала новые",
      popularity: "Самые известные",
      yield: "Максимальная доходность (%)",
    },
    estRentalYield: "Ожидаемая арендная доходность",
    underConstruction: "Строится",
    showing: "Показано",
    buildings: "зданий",
    filteredBy: "Фильтр по району:",
    noMatch: "Небоскребы по заданным критериям не найдены",
    clearSearch: "Попробуйте изменить поисковый запрос или выбрать другой район.",
    resetFilters: "Сбросить фильтры",
    resetAllFilters: "Сбросить все фильтры",
  },
  buildingCard: {
    height: "Высота",
    floors: "Этажность",
    year: "Год постройки",
    architect: "Архитектор",
    developer: "Девелопер",
    district: "Район",
    viewDetails: "Архитектурный профиль",
    inquireUnits: "Цены и планировки",
    residential: "Жилой комплекс",
    commercial: "Бизнес-центр",
    hotel: "Отель люкс",
    mixedUse: "Многофункциональный",
  },
  districts: {
    badge: "8 ключевых инвестиционных центров",
    title: "Культовые районы Дубая",
    subtitle: "От высочайшей в мире концентрации небоскребов до частных насыпных островов. Сравните доходность и архитектурный масштаб.",
    towersCount: "башен",
    keyLandmarks: "Ключевые ориентиры:",
    exploreDistrict: "Смотреть район",
    masterDeveloper: "Мастер-девелопер:",
    averageYield: "Средняя доходность аренды",
    investPros: "Инвестиционные преимущества",
  },
  investmentBanner: {
    title: "Инвестиции в архитектурные символы Дубая",
    subtitle: "Прямые квоты от застройщиков, 0% налог на недвижимость, доходность 7–10% годовых в валюте и право на Золотую визу ОАЭ на 10 лет.",
    ctaText: "Запросить варианты",
    requestUnits: "Получить каталог и планировки",
    downloadCatalog: "Скачать гид по ТОП-10 небоскребам (PDF)",
    badge: "Инвесторский релиз 2026",
  },
  calculator: {
    title: "Калькулятор доходности аренды (ROI)",
    subtitle: "Рассчитайте чистую доходность, сервисное обслуживание и годовой денежный поток в USD, AED, EUR и RUB.",
    propertyPrice: "Стоимость объекта",
    rentalYield: "Ожидаемая валовая аренда (%)",
    serviceCharge: "Сервисные сборы (Service Charges)",
    estimatedGross: "Валовой доход в год",
    estimatedNet: "Чистый доход инвестора",
    netRoi: "Чистый ROI в год",
    annualNetProfit: "Годовая чистая прибыль",
    currency: "Валюта",
    disclaimer: "Расчет основан на официальных аналитических индикаторах Земельного департамента Дубая (DLD).",
    badge: "Финансовое моделирование • Мультивалютный расчет",
    selectCurrency: "Выберите валюту:",
    conservative: "5.0% (Консервативная)",
    dubaiAvg: "8.5% (Средняя по Дубаю)",
    shortTermHigh: "12.0% (Краткосрочная аренда)",
    lowMaintenance: "0.5% (Низкие расходы)",
    ultraLuxury: "2.5% (Ультра-люкс башня)",
    annualProjections: "Годовые показатели",
    zeroTax: "0% налог на недвижимость",
    netRoiSub: "Чистый доход инвестора на руки после вычета сервисных сборов",
    maintenanceCharges: "Сервисные сборы и обслуживание:",
    fiveYearReturn: "Совокупный доход за 5 лет (аренда + рост):",
    perYear: "в год",
    goldenVisaQualified: "Подходит под Золотую визу ОАЭ на 10 лет",
    goldenVisaQualifiedDesc: "Этот бюджет дает право инвестору и его семье получить 10-летний продлеваемый ВНЖ ОАЭ.",
    goldenVisaNeed: "💡 Необходимо от 2 000 000 AED ($545k) для получения 10-летней Золотой визы.",
    inquireCalculationCta: "Подобрать объекты под этот расчет",
    instantMatchDesc: "Мгновенный подбор планировок от застройщиков и закрытых лотов.",
  },
  goldenVisa: {
    title: "Золотая виза ОАЭ на 10 лет за недвижимость",
    badge: "ВНЖ через инвестиции",
    subtitle: "Покупка недвижимости от 2 000 000 AED (~$545 000) дает вам и вашей семье долгосрочный статус резидента ОАЭ со 100% владением активами.",
    thresholdNotice: "Порог входа: от 2 000 000 AED ($545 000 USD)",
    benefit1: "10-летний продлеваемый ВНЖ для инвестора, супруги и детей",
    benefit2: "0% налог на доходы физлиц, аренду и прирост капитала",
    benefit3: "Нет обязательства постоянно проживать в ОАЭ для сохранения статуса",
    benefit4: "Открытие счетов в ведущих банках ОАЭ (ENBD, FAB, Mashreq)",
    checkEligibility: "Проверить право на визу",
  },
  goldenVisaWidget: {
    badge: "Официальные правила 2026 года",
    title: "Проверка права на 10-летнюю Золотую визу ОАЭ",
    subtitle: "Ответьте на 3 простых вопроса, чтобы проверить возможность получения 10-летнего ВНЖ через покупку недвижимости в Дубае.",
    step1: "1. Бюджет",
    step2: "2. Готовность",
    step3: "3. Семья",
    qBudget: "Какой у вас планируемый бюджет покупки недвижимости?",
    optUnder2m: "До 2 000 000 AED (< $545 000 USD)",
    optUnder2mDesc: "Стандартная виза инвестора на 2 года",
    opt2mTo5m: "2 000 000 – 5 000 000 AED ($545 000 – $1.36M USD)",
    opt2mTo5mDesc: "Полное право на 10-летнюю Золотую визу",
    opt5mPlus: "От 5 000 000+ AED ($1.36M+ USD)",
    opt5mPlusDesc: "VIP-статус Золотой визы и премиальные пентхаусы",
    qReadiness: "Какой тип объекта вы рассматриваете?",
    optOffPlan: "Строящаяся недвижимость (Off-plan) напрямую от девелопера",
    optReady: "Готовая недвижимость / Вторичный рынок",
    optMortgage: "Покупка в ипотеку банков ОАЭ (от 2 млн AED собств. средств)",
    qFamily: "Кто будет включен в заявку на Золотую визу?",
    optIndividual: "Только сам инвестор",
    optFamily: "Инвестор + супруга/супруг и дети",
    optParents: "Инвестор + семья + родители на иждивении",
    resultEligible: "Вы имеете право на Золотую визу на 10 лет!",
    resultStandard: "Доступна стандартная виза инвестора на 2 года",
    resultDescEligible: "При данном бюджете вы и ваша семья получаете возобновляемый 10-летний ВНЖ в ОАЭ со 100% владением активами и безналоговым статусом.",
    resultDescStandard: "Объекты стоимостью до 2 млн AED дают право на стандартную 2-летнюю резидентскую визу. Свяжитесь с нами, чтобы подобрать лоты от 2 млн AED для 10-летней визы.",
    formName: "Ваше имя",
    formPhone: "Телефон / WhatsApp (с кодом страны)",
    submitBtn: "Подтвердить право на визу и получить консультацию юриста",
    submittedTitle: "Заявка принята!",
    submittedDesc: "Наш лицензированный специалист по ВНЖ и недвижимости Дубая свяжется с вами в WhatsApp с подборкой аккредитованных объектов.",
    back: "Назад",
    next: "Далее",
  },
  leadModal: {
    modalBadge: "Эксклюзивный инвестиционный релиз",
    defaultTitle: "Скачать гид по ТОП-10 небоскребам Дубая (PDF)",
    defaultSubtitle: "Прямые цены от застройщиков, архитектурные планировки и проверенная чистая доходность аренды (7–10%).",
    nameLabel: "Ваше имя",
    phoneLabel: "Телефон / WhatsApp (с кодом страны)",
    emailLabel: "Email (необязательно)",
    budgetLabel: "Инвестиционный бюджет",
    submitBtn: "Получить каталог и доступные планировки",
    instantDelivery: "Мгновенная отправка PDF в WhatsApp и на Email. Без спама.",
    successTitle: "Спасибо! Каталог уже отправляется",
    successDesc: "Наш специалист получил вашу заявку. В ближайшие минуты вам придет PDF-гид и список свободных планировок.",
    openWhatsApp: "Открыть в WhatsApp сейчас",
    close: "Закрыть",
  },
  buildingDetail: {
    breadcrumbHome: "Главная",
    breadcrumbCatalog: "Небоскребы",
    storeys: "этажей",
    built: "Построен в",
    archiveId: "Архивный ID",
    architectLabel: "Архитектор",
    developerLabel: "Девелопер",
    districtLabel: "Район",
    estRentalYield: "Ожидаемая доходность",
    unitsFrom: "Цены от",
    historyTitle: "Архитектурная концепция и история создания",
    historyNote: "Архивная историческая справка",
    highlightsTitle: "Ключевые инженерные и конструктивные решения",
    ttxTitle: "Технические характеристики (ТТХ)",
    officialHeight: "Официальная высота",
    totalFloors: "Количество этажей",
    aboveGroundLevels: "надземных уровней",
    yearCompleted: "Год ввода в эксплуатацию",
    buildingType: "Назначение / Тип объекта",
    structuralSystem: "Конструктивная система",
    verifiedAllocation: "Проверенный пул лотов",
    investIn: "Инвестиции в",
    investSubtitle: "Запросить актуальные цены перепродажи, планировки и эксклюзивные лоты от девелопера.",
    entryPriceAed: "Цена входа (AED):",
    entryPriceUsd: "Цена входа (USD):",
    projectedYield: "Ожидаемая доходность:",
    goldenVisaEligible: "Золотая виза ОАЭ:",
    goldenVisaEligibleValue: "✓ Доступна (от 2M AED)",
    inquireWhatsApp: "Запросить в WhatsApp",
    requestFloorplans: "Получить официальные планировки в PDF",
    reraNotice: "🔒 Прямые консультации через лицензированных брокеров RERA в Дубае. 0% комиссии для покупателя.",
    moreTowersIn: "Другие шедевры архитектуры в районе",
  },
  districtDetail: {
    breadcrumbHome: "Главная",
    breadcrumbDistricts: "Районы",
    masterDeveloper: "Мастер-девелопер:",
    towersCount: "башен",
    avgRentalYield: "Средняя доходность аренды",
    districtOverview: "Обзор района и архитектура",
    districtHighlights: "Ключевые архитектурные доминанты",
    districtInvestment: "Инвестиционная привлекательность и инфраструктура",
    iconicTowersInDistrict: "Культовые небоскребы района",
    inquireDistrictUnits: "Запросить варианты и планировки в районе",
    inquireWhatsApp: "Консультация по району в WhatsApp",
  },
  whatsapp: {
    buttonText: "Связаться в WhatsApp",
    tooltip: "Прямой диалог с лицензированным брокером в Дубае",
    defaultMessage: "Здравствуйте! Я обращаюсь с сайта Dubai-Architecture.info. Интересуют доступные планировки и цены в небоскребах Дубая.",
  },
  footer: {
    description: "Dubai-Architecture.info — исторический архитектурный проект, основанный в 2006 году. Фиксирует эволюцию небоскребов ОАЭ и обеспечивает прямое взаимодействие с лицензированными брокерами.",
    linksTitle: "Навигация по сайту",
    legalTitle: "Информация и комплаенс",
    disclaimer: "Сайт является независимым каталогом архитектурного наследия и маркетинговой платформой, перенаправляющей запросы лицензированным агентствам RERA.",
    rightsReserved: "Все права защищены. Исторический архив архитектуры Дубая.",
    historicalArchiveNote: "Сохраняем историю архитектурного прорыва ОАЭ с 2006 года.",
  },
};

const arTranslations: Partial<TranslationDictionary> = {
  siteTitle: "عمارة دبي",
  siteSubtitle: "الموسوعة المعمارية وناطحات السحاب الفاخرة",
  tagline: "توثيق أفق دبي منذ عام 2006. حيث يلتقي الإبداع الهندسي بفرص الاستثمار العقاري الفاخر.",
  nav: {
    home: "الرئيسية",
    catalog: "ناطحات السحاب",
    districts: "المناطق",
    calculator: "حاسبة العائد",
    goldenVisa: "الإقامة الذهبية",
    archive: "الأرشيف (2006)",
    contactBroker: "الوحدات المتاحة",
  },
  hero: {
    badge: "نطاق تاريخي موثوق • منذ عام 2006",
    title: "روائع دبي المعمارية و",
    titleHighlight: "ناطحات السحاب الأيقونية",
    subtitle: "اكتشف الهندسة الإنشائية، وأشهر المعماريين العالميين، وأرقى الفرص الاستثمارية في عاصمة الارتفاعات العالمية.",
    searchPlaceholder: "ابحث عن برج، مهندس معماري، أو منطقة (مثل برج خليفة، داون تاون)...",
    ctaCatalog: "استكشف العمارة",
    ctaInvestment: "فرص الاستثمار العقاري",
    statsYears: "عاماً من التوثيق",
    statsTowers: "برجاً أيقونياً",
    statsRoi: "متوسط عائد الإيجار",
    statsDistricts: "مناطق استثمارية رئيسية",
    downloadGuideBtn: "📥 تحميل دليل أفضل 10 أبراج (PDF)",
    statusBarText: "حفظ اللغة تلقائياً • أهم 10 لغات للمستثمرين في دائرة الأراضي والأملاك",
  },
  filters: {
    allDistricts: "جميع المناطق",
    allHeights: "كافة الارتفاعات",
    allArchitects: "كافة المعماريين",
    search: "بحث في المعمار...",
    sortBy: "ترتيب حسب",
    heightDesc: "الأعلى أولاً",
    yearDesc: "الأحدث أولاً",
    popularity: "الأكثر شهرة",
  },
  catalog: {
    title: "موسوعة ناطحات سحاب دبي",
    subtitle: "ملفات معمارية، مواصفات هندسية إنشائية، وتخصيصات استثمارية مميزة في أعلى أبراج دبي.",
    masterpieces: "تحفة معمارية",
    allTypes: "كافة الأنواع",
    type: "النوع",
    types: {
      all: "كافة الأنواع",
      residential: "سكني",
      commercial: "تجاري",
      hotel: "فندق فاخر",
      mixedUse: "متعدد الاستخدامات",
      cultural: "صرح ثقافي",
    },
    heightOptions: {
      all: "كافة الارتفاعات",
      megatall: "أبراج شاهقة جداً (> 600م)",
      supertall: "أبراج شاهقة (300م - 600م)",
      highrise: "أبراج عالية (< 300م)",
    },
    sortOptions: {
      height: "الأعلى أولاً",
      year: "الأحدث أولاً",
      popularity: "الأكثر شهرة",
      yield: "أعلى عائد إيجاري (%)",
    },
    estRentalYield: "العائد الإيجاري المتوقع",
    underConstruction: "قيد الإنشاء",
    showing: "عرض",
    buildings: "مبنى",
    filteredBy: "تصفية حسب المنطقة:",
    noMatch: "لا توجد ناطحات سحاب تطابق معايير البحث",
    clearSearch: "يرجى تجربة البحث بكلمات أخرى أو إعادة تعيين الفلاتر.",
    resetFilters: "إعادة تعيين",
    resetAllFilters: "إعادة تعيين كافة الفلاتر",
  },
  buildingCard: {
    height: "الارتفاع",
    floors: "الطوابق",
    year: "سنة الإنجاز",
    architect: "المهندس المعماري",
    developer: "المطور العقاري",
    district: "المنطقة",
    viewDetails: "الملف المعماري",
    inquireUnits: "الأسعار والمخططات",
    residential: "سكني",
    commercial: "تجاري",
    hotel: "فندقي فاخر",
    mixedUse: "متعدد الاستخدامات",
  },
  districts: {
    badge: "8 مناطق استثمارية رئيسية",
    title: "أبرز مناطق دبي الحضرية",
    subtitle: "من أعلى كثافة لناطحات السحاب في العالم إلى الجزر البحرية الخاصة. قارن العوائد الاستثمارية والمقاييس المعمارية.",
    towersCount: "برجاً",
    keyLandmarks: "أبرز المعالم:",
    exploreDistrict: "استكشف المنطقة",
    masterDeveloper: "المطور الرئيسي:",
    averageYield: "متوسط عائد الإيجار",
    investPros: "المزايا الاستثمارية",
  },
  investmentBanner: {
    title: "استثمر في معالم دبي المعمارية الأيقونية",
    subtitle: "تخصيص مباشر من المطورين، 0% ضرائب عقارية، عوائد إيجارية مرتفعة (7-10% صافي)، والتأهل للإقامة الذهبية لمدة 10 سنوات.",
    ctaText: "طلب الوحدات المتاحة",
    requestUnits: "طلب المخططات والأسعار",
    downloadCatalog: "تحميل دليل أفضل 10 أبراج (PDF)",
    badge: "ملف المستثمر 2026",
  },
  calculator: {
    title: "حاسبة العائد الاستثماري على الإيجار (ROI)",
    subtitle: "احسب صافي العائد الإيجاري السنوي ونمو رأس المال بالدولار، الدرهم، اليورو والروبل.",
    propertyPrice: "سعر العقار",
    rentalYield: "العائد الإجمالي المتوقع (%)",
    serviceCharge: "رسوم الخدمات السنوية / الصيانة",
    estimatedGross: "الدخل الإجمالي السنوي",
    estimatedNet: "صافي التدفق النقدي السنوي",
    netRoi: "صافي العائد السنوي (ROI)",
    annualNetProfit: "صافي الربح السنوي المتوقع",
    currency: "العملة",
    disclaimer: "التقديرات مبنية على مؤشرات المعاملات الرسمية لدائرة الأراضي والأملاك في دبي (DLD).",
    badge: "النمذجة المالية • متعدد العملات",
    selectCurrency: "اختر العملة:",
    conservative: "5.0% (محافظ)",
    dubaiAvg: "8.5% (متوسط دبي)",
    shortTermHigh: "12.0% (إيجار قصير الأجل)",
    lowMaintenance: "0.5% (رسوم منخفضة)",
    ultraLuxury: "2.5% (أبراج فائقة الفخامة)",
    annualProjections: "التوقعات السنوية",
    zeroTax: "0% ضريبة عقارية",
    netRoiSub: "صافي العائد السنوي المستلم بعد خصم رسوم الخدمات",
    maintenanceCharges: "رسوم الخدمات والصيانة:",
    fiveYearReturn: "إجمالي العائد لـ 5 سنوات (الإيجار + نمو السعر):",
    perYear: "سنوياً",
    goldenVisaQualified: "مؤهل للحصول على الإقامة الذهبية في الإمارات (10 سنوات)",
    goldenVisaQualifiedDesc: "هذا الاستثمار يمنحك أنت وعائلتك إقامة متجددة لمدة 10 سنوات.",
    goldenVisaNeed: "💡 تحتاج إلى 2,000,000 درهم للتأهل للإقامة الذهبية لمدة 10 سنوات.",
    inquireCalculationCta: "طلب وحدات متطابقة مع هذه الحسبة",
    instantMatchDesc: "مطابقة فورية مع مخططات الطوابق المعتمدة وقوائم الوحدات المتاحة.",
  },
  goldenVisa: {
    title: "الإقامة الذهبية في الإمارات عبر الاستثمار العقاري",
    badge: "الإقامة عبر الاستثمار",
    subtitle: "شراء عقار بقيمة لا تقل عن 2,000,000 درهم يمنحك ملكية أجنبية بنسبة 100% وإقامة طويلة الأمد لك ولعائلتك.",
    thresholdNotice: "الحد الأدنى للاستثمار: 2,000,000 درهم إماراتي",
    benefit1: "إقامة متجددة لمدة 10 سنوات للمستثمر وأفراد أسرته",
    benefit2: "0% ضرائب على الدخل الشخصي، الإيجارات وأرباح رأس المال",
    benefit3: "عدم اشتراط حد أدنى للبقاء في الدولة للحفاظ على الإقامة",
    benefit4: "إمكانية فتح حسابات مصرفية في أكبر بنوك الدولة",
    checkEligibility: "تحقق من الأهلية للفيزا",
  },
  goldenVisaWidget: {
    badge: "لوائح عام 2026 الرسمية",
    title: "أداة التحقق من الأهلية للإقامة الذهبية لمدة 10 سنوات",
    subtitle: "أجب عن 3 أسئلة بسيطة للتحقق من أهليتك للحصول على إقامة الـ 10 سنوات في الإمارات عبر التملك العقاري.",
    step1: "1. الميزانية",
    step2: "2. الجاهزية",
    step3: "3. العائلة",
    qBudget: "ما هي ميزانيتك المستهدفة للاستثمار العقاري؟",
    optUnder2m: "أقل من 2,000,000 درهم",
    optUnder2mDesc: "تأشيرة مستثمر عقاري قياسية لمدة سنتين",
    opt2mTo5m: "2,000,000 – 5,000,000 درهم",
    opt2mTo5mDesc: "مؤهل بالكامل للإقامة الذهبية لمدة 10 سنوات",
    opt5mPlus: "أكثر من 5,000,000 درهم",
    opt5mPlusDesc: "تخصيص VIP للإقامة الذهبية وبنتهاوس استثنائية",
    qReadiness: "ما هي مرحلة الشراء التي تفضلها؟",
    optOffPlan: "عقار قيد الإنشاء (Off-plan) مباشرة من المطور",
    optReady: "عقار جاهز / السوق الثانوي",
    optMortgage: "تمويل عبر رهن عقاري محلي (برأس مال خاص يفوق 2 مليون)",
    qFamily: "من سيتم شمله في طلب الإقامة الذهبية؟",
    optIndividual: "المستثمر فقط",
    optFamily: "المستثمر + الزوج/الزوجة والأبناء",
    optParents: "المستثمر + العائلة + الوالدين المكفولين",
    resultEligible: "أنت مؤهل للإقامة الذهبية لمدة 10 سنوات!",
    resultStandard: "مؤهل لتأشيرة المستثمر العقاري لمدة سنتين",
    resultDescEligible: "بناءً على هذه الميزانية، تتأهل أنت وعائلتك لإقامة متجددة مدتها 10 سنوات في الإمارات مع ملكية بنسبة 100%.",
    resultDescStandard: "العقارات الأقل من 2 مليون درهم تؤهل للحصول على فيزا المستثمر لمدة سنتين. تواصل معنا لاكتشاف خيارات تبدأ من 2 مليون درهم.",
    formName: "الاسم الكامل",
    formPhone: "رقم الهاتف / واتساب (مع رمز الدولة)",
    submitBtn: "تأكيد الأهلية والحصول على استشارة قانونية مجانية",
    submittedTitle: "تم تأكيد طلبك بنجاح!",
    submittedDesc: "سيتواصل معك خبير الإقامة والاستثمار العقاري في دبي عبر واتساب مع التوصيات المناسبة.",
    back: "رجوع",
    next: "التالي",
  },
  leadModal: {
    modalBadge: "ملف استثماري حصري",
    defaultTitle: "تحميل دليل أفضل 10 أبراج استثمارية في دبي (PDF)",
    defaultSubtitle: "أسعار مباشرة من المطورين، مخططات معمارية، وعوائد إيجارية صافية مؤكدة (7-10%).",
    nameLabel: "الاسم الكامل",
    phoneLabel: "رقم الهاتف / واتساب (مع رمز الدولة)",
    emailLabel: "البريد الإلكتروني (اختياري)",
    budgetLabel: "الميزانية الاستثمارية",
    submitBtn: "الحصول على الدليل والوحدات المتاحة",
    instantDelivery: "إرسال فوري لملف PDF عبر واتساب والبريد الإلكتروني.",
    successTitle: "شكراً لك! الدليل في طريقه إليك",
    successDesc: "استلم خبراؤنا طلبك. ستصلك نسخة الدليل وقائمة الوحدات المتاحة قريباً.",
    openWhatsApp: "فتح واتساب الآن",
    close: "إغلاق",
  },
  buildingDetail: {
    breadcrumbHome: "الرئيسية",
    breadcrumbCatalog: "ناطحات السحاب",
    storeys: "طابقاً",
    built: "سنة الإنجاز",
    archiveId: "رمز الأرشيف",
    architectLabel: "المهندس المعماري",
    developerLabel: "المطور",
    districtLabel: "المنطقة",
    estRentalYield: "العائد الإيجاري المتوقع",
    unitsFrom: "الأسعار تبدأ من",
    historyTitle: "التاريخ المعماري والمفهوم التصميمي",
    historyNote: "ملاحظة الأرشيف التاريخي",
    highlightsTitle: "أبرز الإنجازات الهندسية والإنشائية",
    ttxTitle: "المواصفات الفنية والهندسية (TTX)",
    officialHeight: "الارتفاع الرسمي",
    totalFloors: "إجمالي الطوابق",
    aboveGroundLevels: "طابقاً فوق الأرض",
    yearCompleted: "سنة الاكتمال",
    buildingType: "نوع واستخدام المبنى",
    structuralSystem: "النظام الإنشائي",
    verifiedAllocation: "تخصيص معتمد",
    investIn: "الاستثمار في",
    investSubtitle: "طلب أحدث أسعار إعادة البيع، مخططات الطوابق، وتخصيصات المطورين المباشرة.",
    entryPriceAed: "سعر البدء (درهم):",
    entryPriceUsd: "سعر البدء (دولار):",
    projectedYield: "العائد الصافي المتوقع:",
    goldenVisaEligible: "الإقامة الذهبية:",
    goldenVisaEligibleValue: "✓ مؤهل (من 2 مليون درهم)",
    inquireWhatsApp: "استفسر عبر واتساب",
    requestFloorplans: "طلب المخططات الرسمية بتنسيق PDF",
    reraNotice: "🔒 استشارات مباشرة عبر وسطاء عقاريين معتمدين ومرخصين من مؤسسة التنظيم العقاري (RERA) في دبي. 0% عمولة على المشتري.",
    moreTowersIn: "المزيد من الأبراج الأيقونية في",
  },
  districtDetail: {
    breadcrumbHome: "الرئيسية",
    breadcrumbDistricts: "المناطق",
    masterDeveloper: "المطور الرئيسي:",
    towersCount: "برجاً",
    avgRentalYield: "متوسط عائد الإيجار",
    districtOverview: "نظرة عامة على المنطقة والعمارة",
    districtHighlights: "أبرز المعالم المعمارية",
    districtInvestment: "الجاذبية الاستثمارية والبنية التحتية",
    iconicTowersInDistrict: "ناطحات السحاب الأيقونية في",
    inquireDistrictUnits: "طلب الوحدات والمخططات المتاحة في المنطقة",
    inquireWhatsApp: "استشر وسيط المنطقة عبر واتساب",
  },
  whatsapp: {
    buttonText: "محادثة واتساب",
    tooltip: "تواصل مباشر عبر واتساب مع وسيط عقاري مرخص في دبي",
    defaultMessage: "مرحباً، أستفسر من خلال موقع Dubai-Architecture.info بخصوص الأبراج الفاخرة والفرص الاستثمارية في دبي.",
  },
  footer: {
    description: "Dubai-Architecture.info هو أرشيف للتراث المعماري تأسس في عام 2006، يسلط الضوء على التطور الإنشائي لدبي ويوفر تواصلاً مباشراً مع الشركاء العقاريين المرخصين.",
    linksTitle: "دليل العمارة",
    legalTitle: "المعلومات والامتثال",
    disclaimer: "موقع مستقل للتوثيق المعماري ومنصة تسويقية تربط المشترين بوكالات الوساطة العقارية المرخصة من ريرا (RERA).",
    rightsReserved: "جميع الحقوق محفوظة. الأرشيف التاريخي لعمارة دبي.",
    historicalArchiveNote: "توثيق المعالم المعمارية في دولة الإمارات منذ عام 2006.",
  },
};

// Build the complete dictionary for each supported language by deep-merging with enBase
export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: enBase,
  ru: deepMerge(enBase, ruTranslations),
  ar: deepMerge(enBase, arTranslations),
  hi: deepMerge(enBase, {
    siteTitle: "दुबई आर्किटेक्चर",
    siteSubtitle: "स्थापत्य विश्वकोश और गगनचुंबी इमारतें",
    nav: {
      home: "होम",
      catalog: "गगनचुंबी इमारतें",
      districts: "जिले / क्षेत्र",
      calculator: "आरओआई कैलकुलेटर",
      goldenVisa: "गोल्डन वीज़ा",
      archive: "संग्रह (2006)",
      contactBroker: "उपलब्ध संपत्तियां",
    },
    hero: {
      title: "दुबई के स्थापत्य चमत्कार और",
      titleHighlight: "प्रतिष्ठित गगनचुंबी इमारतें",
      ctaCatalog: "आर्किटेक्चर देखें",
      ctaInvestment: "निवेश के अवसर",
    },
  }),
  zh: deepMerge(enBase, {
    siteTitle: "迪拜建筑志",
    siteSubtitle: "建筑百科全书与顶级摩天大楼",
    nav: {
      home: "首页",
      catalog: "摩天大楼",
      districts: "核心区域",
      calculator: "投资回报计算器",
      goldenVisa: "黄金签证",
      archive: "历史档案 (2006)",
      contactBroker: "咨询可售房源",
    },
    hero: {
      title: "迪拜的建筑奇迹与",
      titleHighlight: "标志性摩天大楼",
      ctaCatalog: "探索建筑图鉴",
      ctaInvestment: "顶级置业机遇",
    },
  }),
  de: deepMerge(enBase, {
    siteTitle: "Dubai Architektur",
    siteSubtitle: "Architektur-Enzyklopädie & Wolkenkratzer",
    nav: {
      home: "Startseite",
      catalog: "Wolkenkratzer",
      districts: "Bezirke",
      calculator: "Rendite-Rechner",
      goldenVisa: "Golden Visa",
      archive: "Archiv (2006)",
      contactBroker: "Einheiten Anfragen",
    },
    hero: {
      title: "Dubais architektonische Meisterwerke &",
      titleHighlight: "Ikonische Wolkenkratzer",
      ctaCatalog: "Katalog erkunden",
      ctaInvestment: "Investment-Chancen",
    },
  }),
  fr: deepMerge(enBase, {
    siteTitle: "Architecture de Dubaï",
    siteSubtitle: "Encyclopédie architecturale & Gratte-ciel d'exception",
    nav: {
      home: "Accueil",
      catalog: "Gratte-ciel",
      districts: "Quartiers",
      calculator: "Calculateur de Rendement",
      goldenVisa: "Golden Visa",
      archive: "Archives (2006)",
      contactBroker: "Consulter les Lots",
    },
    hero: {
      title: "Merveilles architecturales de Dubaï &",
      titleHighlight: "Gratte-ciel emblématiques",
      ctaCatalog: "Explorer le Catalogue",
      ctaInvestment: "Opportunités d'Investissement",
    },
  }),
  ur: deepMerge(enBase, {
    siteTitle: "دبئی آرکیٹیکچر",
    siteSubtitle: "تعمیراتی انسائیکلوپیڈیا اور فلک بوس عمارتیں",
    nav: {
      home: "ہوم",
      catalog: "فلک بوس عمارتیں",
      districts: "علاقے",
      calculator: "منافع کیلکولیٹر",
      goldenVisa: "گولڈن ویزا",
      archive: "آرکائیو (2006)",
      contactBroker: "دستیاب یونٹس",
    },
  }),
  it: deepMerge(enBase, {
    siteTitle: "Architettura di Dubai",
    siteSubtitle: "Enciclopedia dell'architettura e grattacieli di lusso",
    nav: {
      home: "Home",
      catalog: "Grattacieli",
      districts: "Distretti",
      calculator: "Calcolatore ROI",
      goldenVisa: "Golden Visa",
      archive: "Archivio (2006)",
      contactBroker: "Richiedi Unità",
    },
  }),
  tr: deepMerge(enBase, {
    siteTitle: "Dubai Mimarisi",
    siteSubtitle: "Mimarlık Ansiklopedisi ve İkonik Gökdelenler",
    nav: {
      home: "Ana Sayfa",
      catalog: "Gökdelenler",
      districts: "Bölgeler",
      calculator: "Getiri Hesaplayıcı",
      goldenVisa: "Golden Visa",
      archive: "Arşiv (2006)",
      contactBroker: "Uygun Daireler",
    },
  }),
};
