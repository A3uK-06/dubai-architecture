import fs from 'fs';

let tr = fs.readFileSync('src/i18n/translations.ts', 'utf8');

// 1. Add ttxLabels interface to TranslationDictionary
const ttxInterface = `  ttxLabels: {
    engineeringTeam: string;
    geotechnical: string;
    pilesCount: string;
    pileDepth: string;
    pileDiameter: string;
    raftThickness: string;
    bedrock: string;
    windStructural: string;
    lateralSystem: string;
    vortexDamping: string;
    maxApexSway: string;
    concreteStrength: string;
    facadeGlazing: string;
    glazingSpec: string;
    shgc: string;
    uValue: string;
    bmu: string;
    cleaningCycle: string;
    verticalTransport: string;
    elevatorMfg: string;
    elevatorsTotal: string;
    maxSpeed: string;
    zoningStrategy: string;
    peakWait: string;
    operatingClimate: string;
    coolingProvider: string;
    chillerBilling: string;
    serviceCharge: string;
    acoustic: string;
    ceilingHeight: string;
    layoutEfficiency: string;
    columnImpact: string;
    netGross: string;
    balconies: string;
    transitIntegration: string;
  };
`;

// Insert ttxLabels right before buildingDetail in TranslationDictionary
tr = tr.replace('  buildingDetail: {', `${ttxInterface}  buildingDetail: {`);

// 2. Expand districtDetail in TranslationDictionary
const oldDistrictDetailInterface = `  districtDetail: {
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
  };`;

const newDistrictDetailInterface = `  districtDetail: {
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
    masterplanTitle?: string;
    subzonesTitle?: string;
    transitTitle?: string;
    infrastructureTitle?: string;
    prosTitle?: string;
    risksTitle?: string;
    zoneLabel?: string;
    avgPriceLabel?: string;
    bestForLabel?: string;
    highwayAccessLabel?: string;
    bottlenecksLabel?: string;
    publicTransitLabel?: string;
    walkabilityLabel?: string;
    chillerLabel?: string;
    stormwaterLabel?: string;
    serviceChargesLabel?: string;
    occupancyLabel?: string;
    tenantProfileLabel?: string;
  };`;

tr = tr.replace(oldDistrictDetailInterface, newDistrictDetailInterface);

// 3. Add ttxLabels and expanded districtDetail to enBase
const enTtxLabels = `  ttxLabels: {
    engineeringTeam: "General Contractor & Engineering Team",
    geotechnical: "Geotechnical Engineering & Deep Piles",
    pilesCount: "Piles Count",
    pileDepth: "Pile Drilling Depth",
    pileDiameter: "Pile Diameter",
    raftThickness: "Foundation Raft Thickness",
    bedrock: "Supporting Bedrock Strata",
    windStructural: "Wind Engineering & Structural Frame",
    lateralSystem: "Lateral Load Resisting System",
    vortexDamping: "Vortex Shedding Damping",
    maxApexSway: "Max Apex Wind Sway (50-Yr Storm)",
    concreteStrength: "Core Concrete Strength Grade",
    facadeGlazing: "Facade Glazing & Solar Protection",
    glazingSpec: "Glazing Specification",
    shgc: "Solar Heat Gain (SHGC)",
    uValue: "U-Value Heat Transmittance",
    bmu: "Facade BMU Cleaning System",
    cleaningCycle: "Full Facade Cleaning Cycle",
    verticalTransport: "Vertical Transport & Elevators",
    elevatorMfg: "Elevator Manufacturer",
    elevatorsTotal: "Total Elevators",
    maxSpeed: "Max Cab Speed",
    zoningStrategy: "Zoning Strategy & Sky Lobbies",
    peakWait: "Morning Peak Wait Time",
    operatingClimate: "Climate & Building Operating Specs",
    coolingProvider: "District Cooling Provider",
    chillerBilling: "Chiller Billing Type",
    serviceCharge: "Annual DLD Service Charge",
    acoustic: "Acoustic Insulation (STC)",
    ceilingHeight: "Clear Ceiling Height",
    layoutEfficiency: "Layout Efficiency & Floor Plate",
    columnImpact: "Structural Column Impact",
    netGross: "Net-to-Gross Efficiency",
    balconies: "Balcony Usability & Terraces",
    transitIntegration: "Transit Integration",
  },
`;

tr = tr.replace('  buildingDetail: {', `${enTtxLabels}  buildingDetail: {`);

// In enBase, update districtDetail:
const oldEnDistrictDetail = `  districtDetail: {
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
  },`;

const newEnDistrictDetail = `  districtDetail: {
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
    masterplanTitle: "Urban Masterplanning & Architectural DNA",
    subzonesTitle: "Micro-Zones & Price Range Audit",
    transitTitle: "Transit Logistics, Access & Peak Hours",
    infrastructureTitle: "Engineering Infrastructure & Operating Expenses",
    prosTitle: "Key Investment Advantages",
    risksTitle: "Investment Risks & Operating Nuances",
    zoneLabel: "Zone",
    avgPriceLabel: "Average Price:",
    bestForLabel: "Ideal for:",
    highwayAccessLabel: "Highway Access",
    bottlenecksLabel: "Rush-Hour Bottlenecks",
    publicTransitLabel: "Public Transit",
    walkabilityLabel: "Walkability:",
    chillerLabel: "Cooling (Chiller)",
    stormwaterLabel: "Stormwater Resilience",
    serviceChargesLabel: "Service Charge Range",
    occupancyLabel: "Tenant Occupancy",
    tenantProfileLabel: "Target Tenant Profile",
  },`;

tr = tr.replace(oldEnDistrictDetail, newEnDistrictDetail);

// 4. Update ruTranslations:
const ruTtxLabels = `  ttxLabels: {
    engineeringTeam: "Генеральный подрядчик и инженерная команда",
    geotechnical: "Геотехника и свайный фундамент",
    pilesCount: "Количество свай",
    pileDepth: "Глубина бурения свай",
    pileDiameter: "Диаметр свай",
    raftThickness: "Толщина ростверка",
    bedrock: "Опорная коренная порода",
    windStructural: "Ветроустойчивость и несущий каркас",
    lateralSystem: "Пространственная схема жесткости",
    vortexDamping: "Гашение вихрей (Vortex Shedding)",
    maxApexSway: "Максимальное отклонение верхушки (Шторм 50 лет)",
    concreteStrength: "Класс прочности бетона ядра",
    facadeGlazing: "Фасадное остекление и климатическая стойкость",
    glazingSpec: "Спецификация стеклопакетов",
    shgc: "Солнцезащитный фактор (SHGC)",
    uValue: "Теплопередача U-Value",
    bmu: "BMU-система очистки фасада",
    cleaningCycle: "Полный цикл мытья фасада",
    verticalTransport: "Вертикальный транспорт и лифтовое хозяйство",
    elevatorMfg: "Производитель лифтов",
    elevatorsTotal: "Всего лифтовых кабин",
    maxSpeed: "Максимальная скорость",
    zoningStrategy: "Схема зонирования и пересадочные лобби",
    peakWait: "Ожидание в утренний пик",
    operatingClimate: "Климат и эксплуатационные характеристики",
    coolingProvider: "Поставщик центрального холода",
    chillerBilling: "Тип тарификации охлаждения",
    serviceCharge: "Годовой сбор за обслуживание DLD",
    acoustic: "Акустическая звукоизоляция",
    ceilingHeight: "Высота потолков в чистоте",
    layoutEfficiency: "Эффективность планировок и полезная площадь",
    columnImpact: "Влияние несущих колонн на планировку",
    netGross: "Полезная площадь (Net-to-Gross)",
    balconies: "Эксплуатация балконов и террас",
    transitIntegration: "Транспортная интеграция",
  },
`;

// In ruTranslations, insert ttxLabels before buildingDetail
const ruBuildingDetailMatch = tr.indexOf('  buildingDetail: {\n    breadcrumbHome: "Главная"');
if (ruBuildingDetailMatch !== -1) {
  tr = tr.slice(0, ruBuildingDetailMatch) + ruTtxLabels + tr.slice(ruBuildingDetailMatch);
}

// In ruTranslations buildingDetail, add the missing districtBanner and engineer keys:
const ruTarget = '    moreTowersIn: "Другие шедевры архитектуры в районе",\n  },';
const ruReplacement = `    moreTowersIn: "Другие шедевры архитектуры в районе",
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

tr = tr.replace(ruTarget, ruReplacement);

// In ruTranslations districtDetail, add Russian section titles:
const oldRuDistrictDetail = `  districtDetail: {
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
  },`;

const newRuDistrictDetail = `  districtDetail: {
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
    masterplanTitle: "Градостроительная концепция и генплан",
    subzonesTitle: "Микролокации внутри района и диапазон цен",
    transitTitle: "Транспортная логистика, выезды и пробки в час пик",
    infrastructureTitle: "Инженерная инфраструктура и коммунальные расходы",
    prosTitle: "Ключевые инвестиционные преимущества",
    risksTitle: "Честные риски и эксплуатационные нюансы",
    zoneLabel: "Зона",
    avgPriceLabel: "Средняя стоимость:",
    bestForLabel: "Для кого идеально:",
    highwayAccessLabel: "Выезды на шоссе",
    bottlenecksLabel: "Бутылочные горлышки (Час пик)",
    publicTransitLabel: "Общественный транспорт",
    walkabilityLabel: "Пешеходность:",
    chillerLabel: "Охлаждение (Chiller)",
    stormwaterLabel: "Ливневая канализация",
    serviceChargesLabel: "Вилка Service Charges",
    occupancyLabel: "Заполняемость арендаторами",
    tenantProfileLabel: "Портрет основного арендатора",
  },`;

tr = tr.replace(oldRuDistrictDetail, newRuDistrictDetail);

fs.writeFileSync('src/i18n/translations.ts', tr, 'utf8');
console.log('Successfully patched translations.ts!');
