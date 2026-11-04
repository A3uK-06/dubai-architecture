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

const zhTranslations: Partial<TranslationDictionary> = {
  siteTitle: "迪拜建筑志",
  siteSubtitle: "建筑百科全书与顶级摩天大楼",
  tagline: "自2006年起记录迪拜天际线变迁。结构工程巨作与豪华地产投资机遇。",
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
    badge: "历史信誉域名 • 始于2006年",
    title: "迪拜的建筑奇迹与",
    titleHighlight: "标志性摩天大楼",
    subtitle: "探索全球最具活力的垂直大都市中的结构工程、传奇建筑师以及顶级投资机遇。",
    searchPlaceholder: "搜索大楼、建筑师或区域（如 哈利法塔、福斯特、滨海区）...",
    ctaCatalog: "探索建筑图鉴",
    ctaInvestment: "顶级置业机遇",
    statsYears: "年传承沉淀",
    statsTowers: "座标志性巨塔",
    statsRoi: "平均年化租金回报",
    statsDistricts: "大核心滨水板块",
    downloadGuideBtn: "📥 下载Top-10摩天大楼投资指南 (PDF)",
    statusBarText: "语言已自动保存 • 迪拜土地局(DLD)十大投资者语言",
  },
  filters: {
    allDistricts: "全部区域",
    allHeights: "任意高度",
    allArchitects: "全部建筑师",
    search: "搜索建筑...",
    sortBy: "排序方式",
    heightDesc: "按高度最高排序",
    yearDesc: "按最新建成排序",
    popularity: "按知名度排序",
  },
  catalog: {
    title: "迪拜摩天大楼建筑百科",
    subtitle: "迪拜最高天际线地标的建筑档案、结构工程参数及核心投资配额。",
    masterpieces: "座建筑杰作",
    allTypes: "全部类型",
    type: "物业类型",
    types: {
      all: "全部类型",
      residential: "高端住宅",
      commercial: "商务办公",
      hotel: "奢华酒店",
      mixedUse: "综合体",
      cultural: "文化地标",
    },
    heightOptions: {
      all: "任意高度",
      megatall: "极高层 (> 600米)",
      supertall: "超高层 (300米 - 600米)",
      highrise: "高层 (< 300米)",
    },
    sortOptions: {
      height: "按高度最高排序",
      year: "按最新建成排序",
      popularity: "按知名度排序",
      yield: "按最高净租金收益率排序",
    },
    estRentalYield: "预估租金收益率",
    underConstruction: "在建中",
    showing: "显示",
    buildings: "座大楼",
    filteredBy: "当前筛选区域:",
    noMatch: "未找到符合筛选条件的摩天大楼",
    clearSearch: "请尝试清除搜索关键词或选择其他区域。",
    resetFilters: "重置筛选",
    resetAllFilters: "重置所有筛选",
  },
  buildingCard: {
    height: "高度",
    floors: "总楼层",
    year: "竣工年份",
    architect: "建筑师",
    developer: "开发商",
    district: "所在区域",
    viewDetails: "建筑档案与详情",
    inquireUnits: "查询户型与价格",
    residential: "高端住宅",
    commercial: "商务办公",
    hotel: "奢华酒店",
    mixedUse: "综合体",
  },
  districts: {
    badge: "8大核心投资枢纽",
    title: "迪拜代表性城市板块",
    subtitle: "从全球密度最高的摩天大楼走廊到私密海滨人工岛屿。全方位对比租金收益与建筑规模。",
    towersCount: "座摩天楼",
    keyLandmarks: "核心地标:",
    exploreDistrict: "探索该区域",
    masterDeveloper: "主要开发商:",
    averageYield: "平均租金回报率",
    investPros: "核心投资优势",
  },
  investmentBanner: {
    title: "投资迪拜标志性建筑地标",
    subtitle: "开发商直属一手配额、0%房产税、7-10%高额净租金回报，并享有申请阿联酋10年黄金签证资格。",
    ctaText: "索取可售房源",
    requestUnits: "索取户型图与报价",
    downloadCatalog: "下载Top-10楼盘指南 (PDF)",
    badge: "2026投资者专刊",
  },
  calculator: {
    title: "摩天大楼租金收益与投资回报计算器",
    subtitle: "估算您在美元、阿联酋迪拉姆、欧元、人民币等币种下的年化净租金收益及资本升值潜力。",
    propertyPrice: "房产购置总价",
    rentalYield: "预期年化毛收益率 (%)",
    serviceCharge: "年化物业维护费 (Service Charge)",
    estimatedGross: "预估年租金毛收入",
    estimatedNet: "预估年净现金流",
    netRoi: "年化净投资回报率 (ROI)",
    annualNetProfit: "预估年度净利润",
    currency: "计价货币",
    disclaimer: "计算结果基于迪拜土地局(DLD)官方交易指数的投影估算。",
    badge: "财务模型 • 多币种实时换算",
    selectCurrency: "选择货币:",
    conservative: "5.0% (稳健保守)",
    dubaiAvg: "8.5% (迪拜平均水准)",
    shortTermHigh: "12.0% (高收益短租)",
    lowMaintenance: "0.5% (低维护成本)",
    ultraLuxury: "2.5% (超奢豪宅大楼)",
    annualProjections: "年度财务预测",
    zeroTax: "0% 房产税率",
    netRoiSub: "扣除物业管理费后的实际到手年净回报率",
    maintenanceCharges: "物业服务与维护支出:",
    fiveYearReturn: "5年综合总回报 (租金收益 + 资本增值):",
    perYear: "每年",
    goldenVisaQualified: "符合阿联酋10年黄金签证申请资格",
    goldenVisaQualifiedDesc: "该投资预算使您及全家享有10年可续期居留权。",
    goldenVisaNeed: "💡 房产购置总价满 2,000,000 迪拉姆 (~54.5万美元) 即可获得10年黄金签证。",
    inquireCalculationCta: "匹配符合此计算的优质房源",
    instantMatchDesc: "即时匹配开发商官方在售户型与独家场外特许配额。",
  },
  goldenVisa: {
    title: "阿联酋10年黄金签证购房移居指南",
    badge: "投资居留通道",
    subtitle: "购置总额不低于200万迪拉姆 (~54.5万美元) 的住宅或商用物业，即可享有100%外资产权及长期免税居留权。",
    thresholdNotice: "最低置业门槛: 2,000,000 迪拉姆 (约 545,000 美元)",
    benefit1: "主申请人、配偶及子女均可获得10年可续期居留身份",
    benefit2: "个人收入、租金所得及资本增值享有100%免税待遇",
    benefit3: "无每年最低出入境离境限制要求，身份永久稳定有效",
    benefit4: "优先开立阿联酋顶级商业银行账户 (ENBD, FAB 等)",
    checkEligibility: "立即核验签证申请资格",
  },
  goldenVisaWidget: {
    badge: "2026官方最新法规",
    title: "阿联酋10年黄金签证资格测评",
    subtitle: "只需回答3个简单问题，即可快速核验您通过购置迪拜房产获取10年长期居留身份的资格。",
    step1: "1. 预算",
    step2: "2. 交付进度",
    step3: "3. 随行家属",
    qBudget: "您的目标房产投资预算是多少？",
    optUnder2m: "2,000,000 迪拉姆以下 (< 54.5万美元)",
    optUnder2mDesc: "符合2年期标准投资居留签证资格",
    opt2mTo5m: "2,000,000 – 5,000,000 迪拉姆 (54.5万 – 136万美元)",
    opt2mTo5mDesc: "完全符合阿联酋10年黄金签证资格",
    opt5mPlus: "5,000,000 迪拉姆以上 (> 136万美元)",
    opt5mPlusDesc: "尊享VIP黄金签证极速通道及顶奢豪宅大平层配额",
    qReadiness: "您倾向考虑何种类型的房产？",
    optOffPlan: "期房开发项目 / 开发商直属一手预售",
    optReady: "现房现楼 / 二手成熟现房",
    optMortgage: "阿联酋本地银行按揭贷款 (自有资金超200万迪拉姆)",
    qFamily: "哪些家庭成员将共同纳入签证申请？",
    optIndividual: "仅主申请人本人",
    optFamily: "主申请人 + 配偶 + 子女",
    optParents: "主申请人 + 配偶子女 + 双方父母",
    resultEligible: "恭喜！您完全符合10年黄金签证资格",
    resultStandard: "您符合2年期标准房产投资签证资格",
    resultDescEligible: "根据您的预算，您及家人完全享有在阿联酋持有10年可续期长期居留权、100%独资控股及全免税待遇。",
    resultDescStandard: "200万迪拉姆以下房产可申请2年期投资居留。欢迎联系我们了解总价达200万迪拉姆的黄金签证专享优选房源。",
    formName: "您的全名",
    formPhone: "手机号码 / 微信 / WhatsApp (含国家区号)",
    submitBtn: "验证签证资格并获取官方免费法务咨询",
    submittedTitle: "您的评估申请已成功受理！",
    submittedDesc: "我们的迪拜土地局认证房产及居留法务专家将尽快与您取得联系，并发送专属楼盘指南。",
    back: "返回上一步",
    next: "下一步",
  },
  leadModal: {
    modalBadge: "独家一手房源档案",
    defaultTitle: "下载迪拜Top-10投资地标大楼官方指南 (PDF)",
    defaultSubtitle: "开发商直售底价、高清建筑户型图与核验真实净租金收益率 (7-10%)。",
    nameLabel: "您的姓名",
    phoneLabel: "电话 / WhatsApp / 微信 (含国际区号)",
    emailLabel: "电子邮箱 (选填，用于接收高清PDF)",
    budgetLabel: "置业投资预算",
    submitBtn: "立即索取PDF指南与精选户型清单",
    instantDelivery: "系统将通过WhatsApp与邮件即时发送。郑重承诺无任何垃圾骚扰。",
    successTitle: "感谢您的咨询！指南正在发送中",
    successDesc: "我们的置业顾问已收到您的需求，Top-10摩天大楼投资档案与可售房源清单即将呈递给您。",
    openWhatsApp: "立即在WhatsApp中查看",
    close: "关闭",
  },
  buildingDetail: {
    breadcrumbHome: "首页",
    breadcrumbCatalog: "摩天大楼",
    storeys: "层",
    built: "建成于",
    archiveId: "档案编号",
    architectLabel: "设计建筑师",
    developerLabel: "开发商",
    districtLabel: "所属板块",
    estRentalYield: "预估年租金收益率",
    unitsFrom: "起售价",
    historyTitle: "建筑设计理念与历史沿革",
    historyNote: "2006年历史档案注解",
    highlightsTitle: "关键结构工程与技术里程碑",
    ttxTitle: "官方技术规格与工程参数 (TTX)",
    officialHeight: "官方建筑高度",
    totalFloors: "总层数",
    aboveGroundLevels: "地上楼层",
    yearCompleted: "竣工交付年份",
    buildingType: "物业建筑类型",
    structuralSystem: "结构工程受力系统",
    verifiedAllocation: "核验真实配额",
    investIn: "置业投资于",
    investSubtitle: "索取一手开盘直订价格、官方户型平面图及开发商内部保留特批席位。",
    entryPriceAed: "入场起价 (AED):",
    entryPriceUsd: "入场起价 (USD):",
    projectedYield: "预估净收益率:",
    goldenVisaEligible: "阿联酋黄金签证:",
    goldenVisaEligibleValue: "✓ 满足要求 (满200万迪拉姆)",
    inquireWhatsApp: "通过WhatsApp直接咨询",
    requestFloorplans: "索取官方高清PDF户型图",
    reraNotice: "🔒 仅通过迪拜土地局RERA执业持牌官方经纪机构提供咨询，买方0佣金中介费。",
    moreTowersIn: "该板块更多标志性摩天大楼",
  },
  districtDetail: {
    breadcrumbHome: "首页",
    breadcrumbDistricts: "区域板块",
    masterDeveloper: "一级主开发商:",
    towersCount: "座摩天楼",
    avgRentalYield: "平均年化租金回报",
    districtOverview: "板块总体规划与建筑风貌",
    districtHighlights: "核心代表性建筑地标",
    districtInvestment: "投资吸引力与基础配套设施",
    iconicTowersInDistrict: "板块内代表性地标建筑",
    inquireDistrictUnits: "索取该区域在售及一手配额",
    inquireWhatsApp: "在WhatsApp中咨询该区域专家",
  },
  whatsapp: {
    buttonText: "微信/WhatsApp咨询",
    tooltip: "直接联络迪拜土地局持牌资深华语置业专家",
    defaultMessage: "您好，我通过 Dubai-Architecture.info 了解迪拜优质地标建筑与高回报投资机会。",
  },
  footer: {
    description: "Dubai-Architecture.info 始于2006年，是专注于迪拜摩天大楼历史演进的权威建筑图鉴，为全球高净值买家提供直连官方合规经纪人的专属通道。",
    linksTitle: "建筑名录索引",
    legalTitle: "信息安全与合规声明",
    disclaimer: "本站为独立建筑文化遗产图集与国际营销平台，所有购房咨询均由迪拜RERA法定持牌房产经纪团队依法合规提供。",
    rightsReserved: "版权所有 © 2006-2026 迪拜建筑图鉴历史档案。",
    historicalArchiveNote: "忠实记录并见证阿联酋二十年摩天建筑奇迹。",
  },
};

const deTranslations: Partial<TranslationDictionary> = {
  siteTitle: "Dubai Architektur",
  siteSubtitle: "Architektur-Enzyklopädie & Premium Wolkenkratzer",
  tagline: "Dokumentation von Dubais Skyline seit 2006. Meisterhafte Ingenieurskunst trifft auf exklusive Immobilieninvestitionen.",
  nav: {
    home: "Startseite",
    catalog: "Wolkenkratzer",
    districts: "Stadtteile",
    calculator: "Rendite-Rechner",
    goldenVisa: "Golden Visa",
    archive: "Archiv (2006)",
    contactBroker: "Einheiten Anfragen",
  },
  hero: {
    badge: "Historische Vertrauens-Domain • Seit 2006",
    title: "Dubais architektonische Meisterwerke &",
    titleHighlight: "Ikonische Wolkenkratzer",
    subtitle: "Entdecken Sie die statische Ingenieurskunst, weltberühmte Architekten und erstklassige Investitionschancen in der dynamischsten vertikalen Metropole der Welt.",
    searchPlaceholder: "Türme, Architekten oder Stadtteile suchen (z.B. Burj Khalifa, Foster, Marina)...",
    ctaCatalog: "Architektur Erkunden",
    ctaInvestment: "Investitionsmöglichkeiten",
    statsYears: "Jahre Tradition",
    statsTowers: "Ikonische Türme",
    statsRoi: "Ø Mietrendite",
    statsDistricts: "Erstklassige Bezirke",
    downloadGuideBtn: "📥 Top-10 Wolkenkratzer Leitfaden (PDF)",
    statusBarText: "Sprache automatisch gespeichert • Top-10 DLD Investorensprachen",
  },
  filters: {
    allDistricts: "Alle Stadtteile",
    allHeights: "Jede Höhe",
    allArchitects: "Alle Architekten",
    search: "Architektur durchsuchen...",
    sortBy: "Sortieren nach",
    heightDesc: "Höchste zuerst",
    yearDesc: "Neueste zuerst",
    popularity: "Bekannteste zuerst",
  },
  catalog: {
    title: "Dubai Wolkenkratzer Enzyklopädie",
    subtitle: "Architektonische Profile, bautechnische Kennzahlen und erstklassige Investitionskontingente in Dubais höchsten Wahrzeichen.",
    masterpieces: "Meisterwerke",
    allTypes: "Alle Gebäudetypen",
    type: "Kategorie",
    types: {
      all: "Alle Gebäudetypen",
      residential: "Wohnresidenz",
      commercial: "Gewerbe & Büro",
      hotel: "Luxushotel",
      mixedUse: "Mischnutzung",
      cultural: "Kulturbau",
    },
    heightOptions: {
      all: "Jede Höhe",
      megatall: "Megatall (> 600m)",
      supertall: "Supertall (300m - 600m)",
      highrise: "Hochhaus (< 300m)",
    },
    sortOptions: {
      height: "Höchste zuerst",
      year: "Neueste zuerst",
      popularity: "Bekannteste zuerst",
      yield: "Höchste Netto-Mietrendite (%)",
    },
    estRentalYield: "Geschätzte Mietrendite",
    underConstruction: "Im Bau",
    showing: "Angezeigt",
    buildings: "Gebäude",
    filteredBy: "Gefiltert nach:",
    noMatch: "Keine Wolkenkratzer entsprechen Ihren Kriterien",
    clearSearch: "Versuchen Sie, den Suchbegriff zu leeren oder einen anderen Bezirk zu wählen.",
    resetFilters: "Filter zurücksetzen",
    resetAllFilters: "Alle Filter zurücksetzen",
  },
  districts: {
    badge: "8 Wichtige Investitionszentren",
    title: "Dubais Ikonische Stadtviertel",
    subtitle: "Von der dichtesten Wolkenkratzer-Allee der Welt bis hin zu privaten Inselresorts. Vergleichen Sie Rendite und Dimensionen.",
    towersCount: "Türme",
    keyLandmarks: "Wichtige Wahrzeichen:",
    exploreDistrict: "Stadtviertel Erkunden",
    masterDeveloper: "Hauptentwickler:",
    averageYield: "Durchschnittliche Mietrendite",
    investPros: "Investitionsvorteile",
  },
  calculator: {
    title: "Wolkenkratzer Mietrendite- & ROI-Rechner",
    subtitle: "Berechnen Sie Ihre jährliche Nettorendite und Wertsteigerung in EUR, USD, AED und weiteren Währungen.",
    propertyPrice: "Immobilienkaufpreis",
    rentalYield: "Erwartete Bruttorendite (%)",
    serviceCharge: "Jährliche Nebenkosten / Service Charges",
    estimatedGross: "Brutto-Jahreseinnahmen",
    estimatedNet: "Netto-Cashflow p.a.",
    netRoi: "Netto-Jahresrendite (ROI)",
    annualNetProfit: "Geschätzter jährlicher Reingewinn",
    currency: "Währung",
    disclaimer: "Die Schätzungen basieren auf offiziellen Transaktionsindizes des Dubai Land Department (DLD).",
    badge: "Finanzmodellierung • Mehrwährungsrechner",
    selectCurrency: "Währung auswählen:",
    conservative: "5.0% (Konservativ)",
    dubaiAvg: "8.5% (Dubai Durchschnitt)",
    shortTermHigh: "12.0% (Kurzzeitvermietung)",
    lowMaintenance: "0.5% (Niedrige Nebenkosten)",
    ultraLuxury: "2.5% (Ultra-Luxusturm)",
    annualProjections: "Jährliche Prognosen",
    zeroTax: "0% Grundsteuer",
    netRoiSub: "Tatsächlicher Reingewinn nach Abzug aller Betriebskosten",
    maintenanceCharges: "Wartungs- & Servicegebühren:",
    fiveYearReturn: "5-Jahres-Gesamtertrag (Miete + Wertzuwachs):",
    perYear: "pro Jahr",
    goldenVisaQualified: "Qualifiziert für das 10-Jahre UAE Golden Visa",
    goldenVisaQualifiedDesc: "Mit diesem Budget erhalten Sie und Ihre Familie das 10-jährige Aufenthaltsrecht.",
    goldenVisaNeed: "💡 Mindestens 2.000.000 AED (~500.000 €) für das 10-Jahre Golden Visa erforderlich.",
    inquireCalculationCta: "Passende Einheiten zu dieser Berechnung anfragen",
    instantMatchDesc: "Sofortige Übereinstimmung mit geprüften Bauträger-Grundrissen.",
  },
  goldenVisaWidget: {
    badge: "Offizielle Bestimmungen 2026",
    title: "Prüfung der Berechtigung für das 10-jährige UAE Golden Visa",
    subtitle: "Beantworten Sie 3 kurze Fragen, um Ihre Berechtigung für das 10-Jahre-Visum durch Immobilienerwerb in Dubai zu prüfen.",
    step1: "1. Budget",
    step2: "2. Bauphase",
    step3: "3. Familie",
    qBudget: "Wie hoch ist Ihr geplantes Investitionsbudget?",
    optUnder2m: "Unter 2.000.000 AED (< 500.000 €)",
    optUnder2mDesc: "Berechtigt zum 2-jährigen Standard-Investorenvisum",
    opt2mTo5m: "2.000.000 – 5.000.000 AED (500.000 € – 1,25 Mio. €)",
    opt2mTo5mDesc: "Voll berechtigt für das 10-jährige Golden Visa",
    opt5mPlus: "Über 5.000.000 AED (> 1,25 Mio. €)",
    opt5mPlusDesc: "VIP-Status für Golden Visa & exklusive Penthäuser",
    qReadiness: "Welche Art von Immobilie bevorzugen Sie?",
    optOffPlan: "Off-Plan / Neubau direkt vom Bauträger",
    optReady: "Bezugsfertige Bestandsimmobilie",
    optMortgage: "Finanziert mit VAE-Hypothek (>2 Mio. AED Eigenkapital)",
    qFamily: "Wer soll in den Visumsantrag aufgenommen werden?",
    optIndividual: "Nur der Hauptinvestor",
    optFamily: "Investor + Ehepartner & Kinder",
    optParents: "Investor + Familie + abhängige Eltern",
    resultEligible: "Glückwunsch! Sie qualifizieren sich für das 10-Jahre Golden Visa",
    resultStandard: "Sie qualifizieren sich für das 2-Jahre Investorenvisum",
    resultDescEligible: "Mit diesem Budget erhalten Sie und Ihre Familie das erneuerbare 10-jährige Aufenthaltsrecht in den VAE mit 100% Eigentum und 0% Einkommensteuer.",
    resultDescStandard: "Immobilien unter 2 Mio. AED qualifizieren für das reguläre 2-Jahres-Visum. Sprechen Sie mit uns über Optionen ab 2 Mio. AED.",
    formName: "Ihr vollständiger Name",
    formPhone: "Telefon / WhatsApp (mit Ländervorwahl)",
    submitBtn: "Berechtigung prüfen & kostenlose Rechtsberatung anfordern",
    submittedTitle: "Anfrage erfolgreich übermittelt!",
    submittedDesc: "Unser lizenzierter Experte für Aufenthaltsrecht und Immobilien in Dubai wird sich per WhatsApp mit verifizierten Empfehlungen bei Ihnen melden.",
    back: "Zurück",
    next: "Weiter",
  },
  leadModal: {
    modalBadge: "Exklusives Immobilien-Dossier",
    defaultTitle: "Top-10 Wolkenkratzer Leitfaden herunterladen (PDF)",
    defaultSubtitle: "Direkte Bauträgerpreise, architektonische Grundrisse und verifizierte Nettomietrenditen (7-10%).",
    nameLabel: "Vollständiger Name",
    phoneLabel: "Telefon / WhatsApp (mit Ländervorwahl)",
    emailLabel: "E-Mail-Adresse (Optional)",
    budgetLabel: "Investitionsbudget",
    submitBtn: "PDF-Leitfaden & Verfügbarkeiten anfordern",
    instantDelivery: "Sofortige Zustellung per WhatsApp & E-Mail. Garantiert werbefrei.",
    successTitle: "Vielen Dank! Der Leitfaden wird versendet",
    successDesc: "Unser Spezialist hat Ihre Anfrage erhalten. Sie erhalten das Dossier in Kürze.",
    openWhatsApp: "Jetzt in WhatsApp öffnen",
    close: "Schließen",
  },
  whatsapp: {
    buttonText: "WhatsApp-Beratung",
    tooltip: "Direkter WhatsApp-Kontakt mit lizenziertem Dubai-Makler",
    defaultMessage: "Guten Tag, ich interessiere mich über Dubai-Architecture.info für Luxus-Wolkenkratzer und Investmentmöglichkeiten in Dubai.",
  },
};

const frTranslations: Partial<TranslationDictionary> = {
  siteTitle: "Architecture de Dubaï",
  siteSubtitle: "Encyclopédie architecturale & Gratte-ciel d'exception",
  tagline: "Documenter la skyline de Dubaï depuis 2006. Quand les prouesses de l'ingénierie rencontrent l'investissement immobilier d'élite.",
  nav: {
    home: "Accueil",
    catalog: "Gratte-ciel",
    districts: "Quartiers",
    calculator: "Calculateur ROI",
    goldenVisa: "Golden Visa",
    archive: "Archives (2006)",
    contactBroker: "Lots Disponibles",
  },
  hero: {
    badge: "Domaine de Référence Historique • Depuis 2006",
    title: "Merveilles architecturales de Dubaï &",
    titleHighlight: "Gratte-ciel emblématiques",
    subtitle: "Explorez l'ingénierie structurelle, les architectes visionnaires et les opportunités d'investissement dans la métropole verticale la plus dynamique du monde.",
    searchPlaceholder: "Rechercher une tour, un architecte ou un quartier (ex: Burj Khalifa, Foster, Marina)...",
    ctaCatalog: "Explorer l'Architecture",
    ctaInvestment: "Opportunités d'Investissement",
    statsYears: "Années d'Histoire",
    statsTowers: "Tours Emblématiques",
    statsRoi: "Rendement Locatif Moyen",
    statsDistricts: "Quartiers d'Élite",
    downloadGuideBtn: "📥 Télécharger le Guide Top-10 Tours (PDF)",
    statusBarText: "Langue sauvegardée automatiquement • Top-10 langues d'investisseurs DLD",
  },
  filters: {
    allDistricts: "Tous les quartiers",
    allHeights: "Toutes hauteurs",
    allArchitects: "Tous les architectes",
    search: "Rechercher un monument...",
    sortBy: "Trier par",
    heightDesc: "Les plus hautes d'abord",
    yearDesc: "Les plus récentes",
    popularity: "Les plus emblématiques",
  },
  catalog: {
    title: "Encyclopédie des Gratte-ciel de Dubaï",
    subtitle: "Fiches architecturales, spécifications techniques et allocations d'investissement premium dans les plus hautes tours de Dubaï.",
    masterpieces: "Chefs-d'œuvre",
    allTypes: "Tous types",
    type: "Usage",
    types: {
      all: "Tous types",
      residential: "Résidentiel",
      commercial: "Commercial & Bureaux",
      hotel: "Hôtel de luxe",
      mixedUse: "Usage mixte",
      cultural: "Édifice culturel",
    },
    heightOptions: {
      all: "Toutes hauteurs",
      megatall: "Mégatour (> 600m)",
      supertall: "Supertour (300m - 600m)",
      highrise: "Gratte-ciel (< 300m)",
    },
    sortOptions: {
      height: "Les plus hautes d'abord",
      year: "Les plus récentes",
      popularity: "Les plus emblématiques",
      yield: "Meilleur rendement net (%)",
    },
    estRentalYield: "Rendement locatif estimé",
    underConstruction: "En construction",
    showing: "Affichage de",
    buildings: "édifices",
    filteredBy: "Filtré par quartier :",
    noMatch: "Aucun gratte-ciel ne correspond à vos critères",
    clearSearch: "Essayez d'effacer votre recherche ou de sélectionner un autre quartier.",
    resetFilters: "Réinitialiser",
    resetAllFilters: "Réinitialiser tous les filtres",
  },
  districts: {
    badge: "8 Pôles Majeurs d'Investissement",
    title: "Quartiers Emblématiques de Dubaï",
    subtitle: "Du corridor de gratte-ciel le plus dense au monde jusqu'aux îles privées d'exception. Comparez rendements et dimensions.",
    towersCount: "tours",
    keyLandmarks: "Monuments clés :",
    exploreDistrict: "Explorer le Quartier",
    masterDeveloper: "Aménageur Principal :",
    averageYield: "Rendement Locatif Moyen",
    investPros: "Atouts d'Investissement",
  },
  calculator: {
    title: "Calculateur de Rendement Locatif & ROI",
    subtitle: "Estimez vos revenus locatifs nets et la plus-value de votre capital en EUR, USD, AED et d'autres devises.",
    propertyPrice: "Prix d'Acquisition",
    rentalYield: "Rendement Brut Estimé (%)",
    serviceCharge: "Frais de Service Annuels / Maintenance",
    estimatedGross: "Revenu Annuel Brut",
    estimatedNet: "Cash-flow Net Annuel",
    netRoi: "Rendement Net Annuel (ROI)",
    annualNetProfit: "Bénéfice Net Annuel Estimé",
    currency: "Devise",
    disclaimer: "Estimations fondées sur les indices de transaction officiels du Dubai Land Department (DLD).",
    badge: "Modélisation Financière • Multi-devises",
    selectCurrency: "Sélectionner la devise :",
    conservative: "5.0% (Prudent)",
    dubaiAvg: "8.5% (Moyenne Dubaï)",
    shortTermHigh: "12.0% (Location Courte Durée)",
    lowMaintenance: "0.5% (Faibles Charges)",
    ultraLuxury: "2.5% (Tour Ultra-Luxe)",
    annualProjections: "Projections Annuelles",
    zeroTax: "0% d'Impôt Foncier",
    netRoiSub: "Rendement net en main après déduction des charges de copropriété",
    maintenanceCharges: "Charges de maintenance et de gestion :",
    fiveYearReturn: "Rendement total sur 5 ans (Loyers + Plus-value) :",
    perYear: "par an",
    goldenVisaQualified: "Éligible au Golden Visa des EAU (10 ans)",
    goldenVisaQualifiedDesc: "Ce montant vous permet, ainsi qu'à votre famille, d'obtenir le titre de séjour de 10 ans.",
    goldenVisaNeed: "💡 Seuil minimum de 2 000 000 AED (~500 000 €) pour prétendre au Golden Visa 10 ans.",
    inquireCalculationCta: "Trouver les biens correspondant à cette simulation",
    instantMatchDesc: "Accès instantané aux plans vérifiés des promoteurs et lots exclusifs hors marché.",
  },
  goldenVisaWidget: {
    badge: "Réglementations Officielles 2026",
    title: "Vérificateur d'Éligibilité au Golden Visa de 10 Ans",
    subtitle: "Répondez à 3 questions simples pour vérifier votre éligibilité à la résidence de 10 ans via l'achat immobilier à Dubaï.",
    step1: "1. Budget",
    step2: "2. Livraison",
    step3: "3. Famille",
    qBudget: "Quel est votre budget prévisionnel d'investissement ?",
    optUnder2m: "Moins de 2 000 000 AED (< 500 000 €)",
    optUnder2mDesc: "Éligible au visa investisseur classique de 2 ans",
    opt2mTo5m: "2 000 000 à 5 000 000 AED (500 000 € – 1,25 M€)",
    opt2mTo5mDesc: "Totalement éligible au Golden Visa de 10 ans",
    opt5mPlus: "Plus de 5 000 000 AED (> 1,25 M€)",
    opt5mPlusDesc: "Statut VIP Golden Visa & Penthouses d'exception",
    qReadiness: "Quel type de bien envisagez-vous d'acquérir ?",
    optOffPlan: "Vente en l'état futur d'achèvement (VEFA / Sur plan)",
    optReady: "Bien achevé / Marché secondaire disponible",
    optMortgage: "Financé par emprunt hypothécaire local (>2M AED d'apport)",
    qFamily: "Qui sera inclus dans la demande de visa de résidence ?",
    optIndividual: "L'investisseur principal uniquement",
    optFamily: "Investisseur + Conjoint(e) & Enfants",
    optParents: "Investisseur + Famille + Parents à charge",
    resultEligible: "Félicitations ! Vous êtes éligible au Golden Visa de 10 ans",
    resultStandard: "Vous êtes éligible au visa investisseur de 2 ans",
    resultDescEligible: "Selon votre budget, vous et vos proches bénéficiez d'une résidence renouvelable de 10 ans avec pleine propriété à 100% et 0% d'impôt.",
    resultDescStandard: "Les biens sous 2M AED permettent d'obtenir le visa de 2 ans. Échangez avec nous pour découvrir les biens atteignant le seuil de 2M AED.",
    formName: "Votre nom complet",
    formPhone: "Téléphone / WhatsApp (avec indicatif pays)",
    submitBtn: "Confirmer mon éligibilité & Obtenir un conseil juridique",
    submittedTitle: "Demande reçue avec succès !",
    submittedDesc: "Notre spécialiste francophone de la résidence et de l'immobilier à Dubaï vous contactera sur WhatsApp.",
    back: "Retour",
    next: "Suivant",
  },
  leadModal: {
    modalBadge: "Dossier Immobilier Exclusif",
    defaultTitle: "Télécharger le Guide des 10 Meilleures Tours (PDF)",
    defaultSubtitle: "Prix directs promoteurs, plans architecturaux certifiés et rendements locatifs nets vérifiés (7-10%).",
    nameLabel: "Votre nom complet",
    phoneLabel: "Téléphone / WhatsApp (avec indicatif international)",
    emailLabel: "Adresse e-mail (Facultatif)",
    budgetLabel: "Budget d'investissement",
    submitBtn: "Recevoir le Guide PDF & les Lots Disponibles",
    instantDelivery: "Envoi instantané par WhatsApp et par e-mail. Aucun spam garanti.",
    successTitle: "Merci ! Votre guide est en cours d'envoi",
    successDesc: "Notre expert a bien reçu votre demande. Le dossier vous parviendra dans les plus brefs délais.",
    openWhatsApp: "Ouvrir dans WhatsApp maintenant",
    close: "Fermer",
  },
  whatsapp: {
    buttonText: "Conseiller WhatsApp",
    tooltip: "Contact direct WhatsApp avec un courtier agréé RERA à Dubaï",
    defaultMessage: "Bonjour, je vous contacte via Dubai-Architecture.info pour obtenir des renseignements sur les tours de prestige et opportunités d'investissement à Dubaï.",
  },
};

// Build the complete dictionary for each supported language by deep-merging with enBase
export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: enBase,
  ru: deepMerge(enBase, ruTranslations),
  ar: deepMerge(enBase, arTranslations),
  zh: deepMerge(enBase, zhTranslations),
  de: deepMerge(enBase, deTranslations),
  fr: deepMerge(enBase, frTranslations),
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
      badge: "ऐतिहासिक ट्रस्ट डोमेन • 2006 से",
      title: "दुबई के स्थापत्य चमत्कार और",
      titleHighlight: "प्रतिष्ठित गगनचुंबी इमारतें",
      subtitle: "दुनिया के सबसे गतिशील ऊर्ध्वाधर महानगर में संरचनात्मक इंजीनियरिंग और निवेश के अवसरों का अन्वेषण करें।",
      searchPlaceholder: "इमारत, वास्तुकार या क्षेत्र खोजें (जैसे बुर्ज खलीफा, मरीना)...",
      ctaCatalog: "आर्किटेक्चर देखें",
      ctaInvestment: "निवेश के अवसर",
      downloadGuideBtn: "📥 टॉप-10 टावर्स गाइड डाउनलोड करें (PDF)",
      statusBarText: "भाषा सहेजी गई • DLD के शीर्ष 10 निवेशक भाषाएं",
    },
    catalog: {
      title: "दुबई गगनचुंबी इमारत विश्वकोश",
      subtitle: "दुबई के सबसे ऊंचे प्रतीकों में वास्तुशिल्प प्रोफाइल और निवेश आवंटन।",
      masterpieces: "मास्टरपीस",
      allTypes: "सभी प्रकार",
      type: "प्रकार",
      estRentalYield: "अनुमानित किराया उपज",
      underConstruction: "निर्माणाधीन",
      showing: "दिखाया जा रहा है",
      buildings: "इमारतें",
      resetFilters: "फ़िल्टर रीसेट करें",
    },
    districts: {
      badge: "8 प्रमुख निवेश केंद्र",
      title: "दुबई के प्रतिष्ठित शहरी जिले",
      exploreDistrict: "जिले का अन्वेषण करें",
      averageYield: "औसत किराया उपज",
    },
    calculator: {
      title: "किराया उपज और आरओआई कैलकुलेटर",
      propertyPrice: "संपत्ति खरीद मूल्य",
      rentalYield: "अपेक्षित सकल उपज (%)",
      annualProjections: "वार्षिक अनुमान",
      inquireCalculationCta: "इस गणना के अनुसार संपत्तियां खोजें",
    },
    goldenVisaWidget: {
      title: "यूएई 10-वर्षीय गोल्डन वीज़ा पात्रता जांच",
      submitBtn: "पात्रता सत्यापित करें और कानूनी परामर्श प्राप्त करें",
    },
    leadModal: {
      defaultTitle: "शीर्ष-10 टावर्स गाइड डाउनलोड करें (PDF)",
      submitBtn: "गाइड और उपलब्ध इकाइयां प्राप्त करें",
    },
    whatsapp: {
      buttonText: "व्हाट्सएप परामर्श",
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
    hero: {
      badge: "تاریخی ٹرسٹ ڈومین • 2006 سے",
      title: "دبئی کے شاہکار اور",
      titleHighlight: "فلک بوس عمارتیں",
      subtitle: "دنیا کے سب سے متحرک شہر میں تعمیراتی انجینئرنگ اور سرمایہ کاری کے مواقع تلاش کریں۔",
      searchPlaceholder: "برج، معمار یا علاقہ تلاش کریں (جیسے برج خلیفہ، میرینا)...",
      ctaCatalog: "آرکیٹیکچر دیکھیں",
      ctaInvestment: "سرمایہ کاری کے مواقع",
      downloadGuideBtn: "📥 ٹاپ 10 ٹاورز گائیڈ ڈاؤن لوڈ کریں (PDF)",
      statusBarText: "زبان محفوظ ہوگئی • DLD کی ٹاپ 10 سرمایہ کار زبانیں",
    },
    catalog: {
      title: "دبئی فلک بوس عمارتوں کا انسائیکلوپیڈیا",
      subtitle: "دبئی کے بلند ترین شاہکاروں کے تعمیراتی پروفائلز اور سرمایہ کاری۔",
      masterpieces: "شاہکار",
      allTypes: "تمام اقسام",
      type: "قسم",
      estRentalYield: "متوقع کرایہ کا منافع",
      underConstruction: "زیر تعمیر",
      showing: "دکھائے گئے",
      buildings: "عمارتیں",
      resetFilters: "فلٹرز ری سیٹ کریں",
    },
    districts: {
      badge: "8 اہم سرمایہ کاری مراکز",
      title: "دبئی کے باوقار اضلاع",
      exploreDistrict: "علاقہ دریافت کریں",
      averageYield: "اوسط کرایہ منافع",
    },
    calculator: {
      title: "کرایہ منافع اور ROI کیلکولیٹر",
      propertyPrice: "جائیداد کی قیمت",
      rentalYield: "متوقع کل منافع (%)",
      annualProjections: "سالانہ تخمینہ",
      inquireCalculationCta: "اس حساب کے مطابق یونٹس تلاش کریں",
    },
    goldenVisaWidget: {
      title: "متحدہ عرب امارات 10 سالہ گولڈن ویزا اہلیت",
      submitBtn: "اہلیت چیک کریں اور قانونی مشورہ حاصل کریں",
    },
    leadModal: {
      defaultTitle: "ٹاپ 10 ٹاورز گائیڈ ڈاؤن لوڈ کریں (PDF)",
      submitBtn: "گائیڈ اور دستیاب یونٹس حاصل کریں",
    },
    whatsapp: {
      buttonText: "واٹس ایپ مشاورت",
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
    hero: {
      badge: "Dominio Storico di Riferimento • Dal 2006",
      title: "I capolavori architettonici e i",
      titleHighlight: "grattacieli iconici di Dubai",
      subtitle: "Scopri l'ingegneria strutturale, i leggendari architetti e le opportunità di investimento nella metropoli verticale più dinamica del mondo.",
      searchPlaceholder: "Cerca torri, architetti o quartieri (es. Burj Khalifa, Foster, Marina)...",
      ctaCatalog: "Esplora l'Architettura",
      ctaInvestment: "Opportunità di Investimento",
      downloadGuideBtn: "📥 Scarica la Guida Top-10 Torri (PDF)",
      statusBarText: "Lingua salvata automaticamente • Top 10 lingue investitori DLD",
    },
    catalog: {
      title: "Enciclopedia dei Grattacieli di Dubai",
      subtitle: "Profili architettonici, parametri di ingegneria strutturale e allocazioni di investimento premium.",
      masterpieces: "Capolavori",
      allTypes: "Tutti i tipi",
      type: "Tipologia",
      estRentalYield: "Rendimento locativo stimato",
      underConstruction: "In costruzione",
      showing: "Visualizzazione di",
      buildings: "edifici",
      resetFilters: "Reimposta filtri",
    },
    districts: {
      badge: "8 Principali Poli di Investimento",
      title: "I Distretti Iconici di Dubai",
      exploreDistrict: "Esplora Distretto",
      averageYield: "Rendimento Locativo Medio",
    },
    calculator: {
      title: "Calcolatore di Rendimento Locativo & ROI",
      propertyPrice: "Prezzo di Acquisto",
      rentalYield: "Rendimento Lordo Atteso (%)",
      annualProjections: "Proiezioni Annuali",
      inquireCalculationCta: "Richiedi unità corrispondenti a questo calcolo",
    },
    goldenVisaWidget: {
      title: "Verifica Idoneità UAE Golden Visa 10 Anni",
      submitBtn: "Verifica Idoneità & Richiedi Consulenza",
    },
    leadModal: {
      defaultTitle: "Scarica la Guida alle Top-10 Torri (PDF)",
      submitBtn: "Ottieni Guida PDF & Unità Disponibili",
    },
    whatsapp: {
      buttonText: "Consulenza WhatsApp",
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
    hero: {
      badge: "Tarihi Güvenilir Alan Adı • 2006'dan Beri",
      title: "Dubai'nin Mimari Harikaları ve",
      titleHighlight: "İkonik Gökdelenleri",
      subtitle: "Dünyanın en dinamik dikey metropolünde yapı mühendisliğini, efsanevi mimarları ve birinci sınıf yatırım fırsatlarını keşfedin.",
      searchPlaceholder: "Kule, mimar veya bölge arayın (ör. Burj Khalifa, Foster, Marina)...",
      ctaCatalog: "Mimariyi Keşfedin",
      ctaInvestment: "Yatırım Fırsatları",
      downloadGuideBtn: "📥 En İyi 10 Kule Rehberini İndirin (PDF)",
      statusBarText: "Dil otomatik kaydedildi • DLD En İyi 10 Yatırımcı Dili",
    },
    catalog: {
      title: "Dubai Gökdelenler Ansiklopedisi",
      subtitle: "Dubai'nin en yüksek simgelerinde mimari profiller, yapı mühendisliği metrikleri ve özel yatırım tahsisleri.",
      masterpieces: "Başyapıt",
      allTypes: "Tüm Tipler",
      type: "Tür",
      estRentalYield: "Tahmini Kira Getirisi",
      underConstruction: "İnşaat Halinde",
      showing: "Gösterilen",
      buildings: "bina",
      resetFilters: "Filtreleri Sıfırla",
    },
    districts: {
      badge: "8 Önemli Yatırım Merkezi",
      title: "Dubai'nin İkonik Şehir Bölgeleri",
      exploreDistrict: "Bölgeyi Keşfet",
      averageYield: "Ortalama Kira Getirisi",
    },
    calculator: {
      title: "Kira Getirisi ve ROI Hesaplayıcı",
      propertyPrice: "Mülk Satın Alma Fiyatı",
      rentalYield: "Beklenen Brüt Getiri (%)",
      annualProjections: "Yıllık Projeksiyonlar",
      inquireCalculationCta: "Bu hesaplamaya uygun birimleri sorgulayın",
    },
    goldenVisaWidget: {
      title: "BAE 10 Yıllık Golden Visa Uygunluk Kontrolü",
      submitBtn: "Uygunluğu Doğrulayın ve Danışmanlık Alın",
    },
    leadModal: {
      defaultTitle: "En İyi 10 Kule Rehberini İndirin (PDF)",
      submitBtn: "PDF Rehberi ve Uygun Birimleri Alın",
    },
    whatsapp: {
      buttonText: "WhatsApp Danışmanlığı",
    },
  }),
};
