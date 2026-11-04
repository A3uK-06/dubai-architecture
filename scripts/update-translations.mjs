import fs from 'fs';

let content = fs.readFileSync('src/i18n/translations.ts', 'utf8');

// 1. Update TranslationDictionary interface for buildingCard
const oldCardInterface = `  buildingCard: {
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
  };`;

const newCardInterface = `  buildingCard: {
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
    exploreDistrict: string;
    districtLocationLabel: string;
    exploreDistrictInfrastructure: string;
  };`;

content = content.replace(oldCardInterface, newCardInterface);

// 2. Update TranslationDictionary interface for buildingDetail
const oldDetailInterface = `    moreTowersIn: string;
  };`;

const newDetailInterface = `    moreTowersIn: string;
    districtBannerBadge: string;
    districtBannerTitle: string;
    districtBannerDesc: string;
    districtBannerButton: string;
    districtLocationLabel: string;
    exploreDistrictCta: string;
    contractorLabel: string;
    structuralEngineerLabel: string;
    mepEngineerLabel: string;
  };`;

content = content.replace(oldDetailInterface, newDetailInterface);

// 3. Update enBase buildingCard
const oldEnCard = `  buildingCard: {
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
  },`;

const newEnCard = `  buildingCard: {
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
    exploreDistrict: "Explore District",
    districtLocationLabel: "District:",
    exploreDistrictInfrastructure: "infrastructure & prices",
  },`;

content = content.replace(oldEnCard, newEnCard);

// 4. Update enBase buildingDetail
const oldEnDetail = `    moreTowersIn: "More Architectural Icons in",
  },`;

const newEnDetail = `    moreTowersIn: "More Architectural Icons in",
    districtBannerBadge: "URBAN CONTEXT & DISTRICT PROFILE",
    districtBannerTitle: "Explore District Infrastructure & Master Plan",
    districtBannerDesc: "Examine rush-hour transit corridors, chiller specifications, service charges, and community investment yield.",
    districtBannerButton: "Explore Full District Analytics",
    districtLocationLabel: "District Location:",
    exploreDistrictCta: "View District Master Plan & Transit",
    contractorLabel: "Main Contractor:",
    structuralEngineerLabel: "Structural Engineer:",
    mepEngineerLabel: "MEP Consultant:",
  },`;

content = content.replace(oldEnDetail, newEnDetail);

// 5. Update ruTranslations buildingCard
const oldRuCard = `  buildingCard: {
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
  },`;

const newRuCard = `  buildingCard: {
    height: "Высота",
    floors: "Этажность",
    year: "Год постройки",
    architect: "Архитектор",
    developer: "Девелопер",
    district: "Район",
    viewDetails: "Паспорт ТТХ",
    inquireUnits: "Цены и планировки",
    residential: "Жилой комплекс",
    commercial: "Бизнес-центр",
    hotel: "Отель люкс",
    mixedUse: "Многофункциональный",
    exploreDistrict: "О районе",
    districtLocationLabel: "Район:",
    exploreDistrictInfrastructure: "инфраструктура и инвестиции",
  },`;

content = content.replace(oldRuCard, newRuCard);

// 6. Update ruTranslations buildingDetail
const oldRuDetail = `    reraNotice: "🔒 Прямые консультации через лицензированных брокеров RERA в Дубае. 0% комиссия покупателя.",
    moreTowersIn: "Другие шедевры архитектуры в районе",
  },`;

const newRuDetail = `    reraNotice: "🔒 Прямые консультации через лицензированных брокеров RERA в Дубае. 0% комиссия покупателя.",
    moreTowersIn: "Другие шедевры архитектуры в районе",
    districtBannerBadge: "ГОРОДСКОЙ КОНТЕКСТ И АНАЛИТИКА",
    districtBannerTitle: "Мастер-план, инфраструктура и транспорт района",
    districtBannerDesc: "Изучите транспортную доступность, пробки в часы пик, типы охлаждения (Chiller), сервис-сборы и инвестиционный потенциал локации.",
    districtBannerButton: "Перейти к детальной аналитике района",
    districtLocationLabel: "Район расположения:",
    exploreDistrictCta: "Смотреть мастер-план и анализ района",
    contractorLabel: "Генеральный подрядчик:",
    structuralEngineerLabel: "Главный инженер-конструктор:",
    mepEngineerLabel: "Инженерия систем жизнеобеспечения (MEP):",
  },`;

content = content.replace(oldRuDetail, newRuDetail);

// 7. Update arTranslations buildingCard
const oldArCard = `  buildingCard: {
    height: "الارتفاع",
    floors: "الطوابق",
    year: "سنة البناء",
    architect: "المهندس المعماري",
    developer: "المطور العقاري",
    district: "المنطقة",
    viewDetails: "الملف المعماري",
    inquireUnits: "الوحدات والأسعار",
    residential: "سكني",
    commercial: "تجاري",
    hotel: "فندق فاخر",
    mixedUse: "متعدد الاستخدامات",
  },`;

const newArCard = `  buildingCard: {
    height: "الارتفاع",
    floors: "الطوابق",
    year: "سنة البناء",
    architect: "المهندس المعماري",
    developer: "المطور العقاري",
    district: "المنطقة",
    viewDetails: "المواصفات الفنية",
    inquireUnits: "الوحدات والأسعار",
    residential: "سكني",
    commercial: "تجاري",
    hotel: "فندق فاخر",
    mixedUse: "متعدد الاستخدامات",
    exploreDistrict: "استكشف المنطقة",
    districtLocationLabel: "المنطقة:",
    exploreDistrictInfrastructure: "البنية التحتية والاستثمار",
  },`;

content = content.replace(oldArCard, newArCard);

fs.writeFileSync('src/i18n/translations.ts', content, 'utf8');
console.log('Updated translations.ts successfully!');
