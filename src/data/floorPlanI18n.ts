import { LanguageCode } from "@/i18n/languages";
import { FloorPlan } from "./buildings";

export interface FloorPlanLabels {
  sectionBadge: string;
  sectionTitle: string;
  sectionSubtitle: (tower: string) => string;
  cadRef: string;
  fullscreenBtn: string;
  closeFullscreen: string;
  zoomIn: string;
  zoomOut: string;
  resetZoom: string;
  clickToEnlarge: string;
  blueprintTitle: string;
  scaleLabel: string;
  totalArea: string;
  livingArea: string;
  balconyArea: string;
  clearCeiling: string;
  roomsTitle: string;
  bedroomsLabel: string;
  bathroomsLabel: string;
  maidRoomLabel: string;
  powderRoomLabel: string;
  kitchenTypeLabel: string;
  viewAspectLabel: string;
  engineeringHighlights: string;
  printBtn: (type: string) => string;
  yes: string;
  no: string;
  ofTotal: string;
  floorToCeiling: string;
  // Room names inside SVG
  svgMasterBed: string;
  svgBath: string;
  svgLiving: string;
  svgKitchen: string;
  svgBalcony: string;
  svgCeilingHeight: string;
  svgDimensions: string;
  svgWardrobe: string;
  svgShower: string;
  svgDining: string;
  svgLounge: string;
  svgIsland: string;
  themeDark: string;
  themeLight: string;
  svgBed2: string;
  svgBed3: string;
  svgMaid: string;
  svgPool: string;
  svgOffice: string;
  svgFoyer: string;
  svgFosterButtress: string;
  svgBriseSoleil: string;
  svgWetKitchen: string;
  svgStaffBed: string;
  svgVipLift: string;
  svgPresidentialWing: string;
  svgJacuzziSpa: string;
  svgExecutiveDesk: string;
  svgGrandSalon: string;
  svgInfinityPool: string;
  svgSeats: (count: number) => string;
  svgPowderRoom: string;
  seriesBadge: (name: string) => string;
  officialPlanBadge: (dev: string) => string;
  cornerDualAspect: string;
  enSuiteBadge: string;
  svgSomCore: string;
  svgTwistedCol: string;
  svgZahaVoid: string;
  svgCarLift: string;
  svgOceanFront: string;
  svgServiceCore: string;
  unitMetric: string;
  unitImperial: string;
  unitMetricShort: string;
  unitImperialShort: string;
  unitSqM: string;
  unitSqFt: string;
  unitM: string;
  unitFt: string;
  tepMetrics: string;
}

export const FLOOR_PLAN_LABELS: Record<LanguageCode, FloorPlanLabels> = {
  ru: {
    sectionBadge: "Архитектурные планировки и ТЭП",
    sectionTitle: "Атлас планировочных решений",
    sectionSubtitle: (tower) => `Официальные типоразмеры, экспликация помещений и полезная площадь в ${tower}.`,
    cadRef: "CAD-шифр",
    fullscreenBtn: "Развернуть чертеж на весь экран",
    closeFullscreen: "Закрыть просмотр",
    zoomIn: "Увеличить",
    zoomOut: "Уменьшить",
    resetZoom: "Сброс",
    clickToEnlarge: "Кликните для открытия полноразмерного чертежа CAD",
    blueprintTitle: "Архитектурная схема CAD",
    scaleLabel: "МАСШТАБ 1:100 • МЕТРИКИ DLD / RERA",
    totalArea: "Общая площадь",
    livingArea: "Жилая площадь (Net)",
    balconyArea: "Балкон / Лоджия",
    clearCeiling: "Чистая высота",
    roomsTitle: "Экспликация и планировочный состав",
    bedroomsLabel: "Спальни",
    bathroomsLabel: "Санузлы",
    maidRoomLabel: "Комната горничной",
    powderRoomLabel: "Гостевой санузел",
    kitchenTypeLabel: "Тип кухни",
    viewAspectLabel: "Видовой горизонт",
    engineeringHighlights: "Конструктивные преимущества",
    printBtn: (type) => `Распечатать чертеж: ${type}`,
    yes: "Да",
    no: "Нет",
    ofTotal: "от общей площади",
    floorToCeiling: "Остекление в пол",
    svgMasterBed: "МАСТЕР-СПАЛЬНЯ",
    svgBath: "ВАННАЯ EN-SUITE",
    svgLiving: "ГОСТИНАЯ И СТОЛОВАЯ",
    svgKitchen: "КУХНЯ",
    svgBalcony: "ТЕРРАСА / ЛОДЖИЯ",
        svgCeilingHeight: "ВЫСОТА ПОТОЛКА",
    svgDimensions: "ГАБАРИТЫ",
    svgWardrobe: "ГАРДЕРОБ",
    svgShower: "ДУШ",
    svgDining: "ОБЕДЕННАЯ ЗОНА",
    svgLounge: "ЛАУНЖ-ТЕРРАСА",
    svgIsland: "КУХОННЫЙ ОСТРОВ",
        themeDark: "Тёмный CAD",
    themeLight: "Светлый чертёж",
    svgBed2: "ВТОРАЯ СПАЛЬНЯ",
    svgBed3: "ТРЕТЬЯ СПАЛЬНЯ",
    svgMaid: "КОМНАТА ПЕРСОНАЛА",
    svgPool: "ЛИЧНЫЙ БАССЕЙН НА ТЕРРАСЕ",
        svgOffice: "КАБИНЕТ-БИБЛИОТЕКА",
    svgFoyer: "ВХОДНОЙ ХОЛЛ",
    svgFosterButtress: "БЕТОННЫЙ ПИЛОН-ЭКРАН FOSTER",
    svgBriseSoleil: "НАРУЖНЫЕ СОЛНЦЕЗАЩИТНЫЕ ЛАМЕЛИ BRISE-SOLEIL",
    svgWetKitchen: "ЧЕРНОВАЯ КУХНЯ (WET KITCHEN)",
    svgStaffBed: "СПАЛЬНЯ ПЕРСОНАЛА + САНУЗЕЛ",
    svgVipLift: "ПРИВАТНЫЙ VIP-ЛИФТ",
    svgPresidentialWing: "ПРЕЗИДЕНТСКОЕ МАСТЕР-КРЫЛО",
    svgJacuzziSpa: "СПА-ДЖАКУЗИ С ПАНОРАМОЙ",
    svgExecutiveDesk: "ПРЕДСТАВИТЕЛЬСКИЙ КАБИНЕТ",
    svgGrandSalon: "ДВУСВЕТНЫЙ ПАРАДНЫЙ САЛОН",
    svgInfinityPool: "ИНФИНИТИ-БАССЕЙН 8.5м × 3.5м",
    svgSeats: (n) => `${n} персон`,
    svgPowderRoom: "ГОСТЕВОЙ WC / УБОРНАЯ",
    seriesBadge: (name) => `Архитектурная серия ${name}`,
    officialPlanBadge: (dev) => `Официальный план: ${dev}`,
        cornerDualAspect: "УГЛОВОЙ ДВУХСТОРОННИЙ ОБЗОР",
    enSuiteBadge: "ПРИВАТНЫЙ САНУЗЕЛ",
    svgSomCore: "ШЕСТИГРАННОЕ ЯДРО SOM",
    svgTwistedCol: "ПОВОРОТНЫЕ КОЛОННЫ 90° (ТОРСИОННЫЙ СТОЯК)",
    svgZahaVoid: "СВОБОДНЫЙ ОРГАНИЧЕСКИЙ АТРИУМ-ПУСТОТА (ZAHA HADID)",
    svgCarLift: "ПРИВАТНЫЙ АВТОМОБИЛЬНЫЙ ЛИФТ В АПАРТАМЕНТЫ",
    svgOceanFront: "ПАНОРАМНЫЙ МОРСКОЙ ФАСАД (ПЕРВАЯ ЛИНИЯ)",
    svgServiceCore: "ЦЕНТРАЛЬНОЕ ЛИФТОВОЕ ЯДРО ВЫСОТКИ",
    unitMetric: "Метрическая (м² / м)",
    unitImperial: "Имперская (sq.ft / ft)",
    unitMetricShort: "м² / м",
    unitImperialShort: "sq.ft / ft",
    unitSqM: "м²",
    unitSqFt: "sq.ft",
    unitM: "м",
    unitFt: "ft",
    tepMetrics: "Основные ТЭП помещения",
  },
  en: {
    sectionBadge: "Architectural Typologies & Floor Plans",
    sectionTitle: "Floor Plans & Living Typologies",
    sectionSubtitle: (tower) => `Official unit dimensions, room breakdown, and net-to-gross living efficiency in ${tower}.`,
    cadRef: "CAD Ref",
    fullscreenBtn: "Expand Fullscreen Blueprint",
    closeFullscreen: "Close Fullscreen",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    resetZoom: "Reset",
    clickToEnlarge: "Click to open full-scale high-resolution CAD blueprint",
    blueprintTitle: "Architectural Blueprint Schematic",
    scaleLabel: "SCALE 1:100 • VERIFIED DLD / RERA METRICS",
    totalArea: "Total Built-Up Area",
    livingArea: "Internal Living Area (Net)",
    balconyArea: "Balcony / Loggia Space",
    clearCeiling: "Clear Ceiling Height",
    roomsTitle: "Layout Specification & Rooms",
    bedroomsLabel: "Bedrooms",
    bathroomsLabel: "Bathrooms",
    maidRoomLabel: "Maid's Room",
    powderRoomLabel: "Powder Room",
    kitchenTypeLabel: "Kitchen Type",
    viewAspectLabel: "View Horizon",
    engineeringHighlights: "Engineering Highlights",
    printBtn: (type) => `Print Blueprint: ${type}`,
    yes: "Yes",
    no: "No",
    ofTotal: "of total area",
    floorToCeiling: "Floor-to-ceiling glass",
    svgMasterBed: "MASTER BEDROOM",
    svgBath: "EN-SUITE BATH",
    svgLiving: "LIVING & DINING PAVILION",
    svgKitchen: "GOURMET KITCHEN",
    svgBalcony: "BALCONY LOGGIA",
        svgCeilingHeight: "CLEAR CEILING",
    svgDimensions: "DIMENSIONS",
    svgWardrobe: "WARDROBE",
    svgShower: "WALK-IN SHOWER",
    svgDining: "DINING AREA",
    svgLounge: "SKY LOUNGE",
    svgIsland: "KITCHEN ISLAND",
        themeDark: "Dark CAD",
    themeLight: "Architectural White",
    svgBed2: "BEDROOM 2",
    svgBed3: "BEDROOM 3",
    svgMaid: "MAID'S SUITE",
    svgPool: "PRIVATE SKY PLUNGE POOL",
        svgOffice: "EXECUTIVE SKY OFFICE",
    svgFoyer: "PRIVATE FOYER",
    svgFosterButtress: "FOSTER CONCRETE BUTTRESS (SOLAR SHIELD)",
    svgBriseSoleil: "AERODYNAMIC BRISE-SOLEIL SUNSHADES",
    svgWetKitchen: "WET PREP KITCHEN",
    svgStaffBed: "STAFF SUITE + EN-SUITE",
    svgVipLift: "PRIVATE VIP LIFT",
    svgPresidentialWing: "PRESIDENTIAL MASTER WING",
    svgJacuzziSpa: "PANORAMIC JACUZZI SPA",
    svgExecutiveDesk: "EXECUTIVE DESK & STUDY",
    svgGrandSalon: "DOUBLE-HEIGHT GRAND SALON",
    svgInfinityPool: "INFINITY POOL 8.5m × 3.5m",
    svgSeats: (n) => `${n} Seats`,
    svgPowderRoom: "GUEST POWDER ROOM / WC",
    seriesBadge: (name) => `${name} Architectural Series`,
    officialPlanBadge: (dev) => `Official Plan: ${dev}`,
        cornerDualAspect: "CORNER DUAL-ASPECT PANORAMA",
    enSuiteBadge: "EN-SUITE BATH",
    svgSomCore: "SOM HEXAGONAL BUTTRESSED CORE",
    svgTwistedCol: "90° ROTATED HELICAL COLUMN ARRAY",
    svgZahaVoid: "ORGANIC VOID CURTAIN WALL (ZAHA HADID)",
    svgCarLift: "PRIVATE VEHICULAR SKY LIFT & DISPLAY",
    svgOceanFront: "PRIME WATERFRONT OCEAN GLAZING",
    svgServiceCore: "HIGH-SPEED PASSENGER & SERVICE CORE",
    unitMetric: "Metric (m² / m)",
    unitImperial: "Imperial (sq.ft / ft)",
    unitMetricShort: "m² / m",
    unitImperialShort: "sq.ft / ft",
    unitSqM: "sq.m",
    unitSqFt: "sq.ft",
    unitM: "m",
    unitFt: "ft",
    tepMetrics: "Key Architectural Metrics",
  },
  ar: {
    sectionBadge: "المخططات الهندسية والمساحات",
    sectionTitle: "أطلس المخططات والوحدات السكنية",
    sectionSubtitle: (tower) => `المقاييس الرسمية وتوزيع المساحات المعيشية في ${tower}.`,
    cadRef: "مرجع كاد",
    fullscreenBtn: "تكبير المخطط الهندسي للشاشة الكاملة",
    closeFullscreen: "إغلاق العرض الكامل",
    zoomIn: "تكبير",
    zoomOut: "تصغير",
    resetZoom: "إعادة تعيين",
    clickToEnlarge: "انقر لفتح المخطط المعماري بالحجم الكامل",
    blueprintTitle: "المخطط المعماري الرقمي CAD",
    scaleLabel: "مقياس 1:100 • معتمد من دائرة الأراضي والأملاك",
    totalArea: "المساحة الإجمالية",
    livingArea: "المساحة الصافية (Net)",
    balconyArea: "الشرفة / التراس",
    clearCeiling: "ارتفاع السقف الصافي",
    roomsTitle: "تفاصيل الغرف والتقسيم الداخلي",
    bedroomsLabel: "غرف النوم",
    bathroomsLabel: "الحمامات",
    maidRoomLabel: "غرفة الخادمة",
    powderRoomLabel: "حمام الضيوف",
    kitchenTypeLabel: "نوع المطبخ",
    viewAspectLabel: "الإطلالة والاتجاه",
    engineeringHighlights: "المزايا الإنشائية والمعمارية",
    printBtn: (type) => `طباعة المخطط: ${type}`,
    yes: "نعم",
    no: "لا",
    ofTotal: "من المساحة الكلية",
    floorToCeiling: "زجاج ممتد من الأرض للسقف",
    svgMasterBed: "غرفة النوم الرئيسية",
    svgBath: "حمام خاص",
    svgLiving: "صالة المعيشة وتناول الطعام",
    svgKitchen: "المطبخ",
    svgBalcony: "الشرفة / التراس",
        svgCeilingHeight: "ارتفاع السقف",
    svgDimensions: "الأبعاد",
    svgWardrobe: "خزانة ملابس",
    svgShower: "دش زجاجي",
    svgDining: "منطقة طعام",
    svgLounge: "لاونج التراس",
    svgIsland: "جزيرة المطبخ",
        themeDark: "مخطط ليلي CAD",
    themeLight: "مخطط نهاري",
    svgBed2: "غرفة نوم 2",
    svgBed3: "غرفة نوم 3",
    svgMaid: "غرفة الخادمة",
    svgPool: "مسبح سماوي خاص",
        svgOffice: "مكتب خاص",
    svgFoyer: "بهو المدخل",
    svgFosterButtress: "جدار الدعم الخرساني فوستر (حماية شمسية)",
    svgBriseSoleil: "كاسرات شمس هوائية ديناميكية",
    svgWetKitchen: "مطبخ التحضير المغلق",
    svgStaffBed: "جناح المساعدين + حمام",
    svgVipLift: "مصعد كبار الشخصيات الخاص",
    svgPresidentialWing: "جناح الماستر الرئاسي",
    svgJacuzziSpa: "جاكوزي سبا بانورامي",
    svgExecutiveDesk: "مكتب تنفيذي خاص",
    svgGrandSalon: "صالون استقبال مزدوج الارتفاع",
    svgInfinityPool: "مسبح إنفينيتي 8.5م × 3.5م",
    svgSeats: (n) => `${n} مقاعد`,
    svgPowderRoom: "حمام الضيوف",
    seriesBadge: (name) => `السلسلة المعمارية ${name}`,
    officialPlanBadge: (dev) => `المخطط الرسمي: ${dev}`,
        cornerDualAspect: "إطلالة زاوية مزدوجة الاتجاه",
    enSuiteBadge: "حمام خاص ملحق",
    svgSomCore: "نواة SOM السداسية المدعمة",
    svgTwistedCol: "أعمدة ملتوية بزاوية 90 درجة",
    svgZahaVoid: "الجدار المنحني للفراغ المركزي (زاها حديد)",
    svgCarLift: "مصعد سيارات خاص للشقق الفاخرة",
    svgOceanFront: "واجهة بحرية بانورامية مفتوحة",
    svgServiceCore: "نواة المصاعد والخدمات المركزية",
    unitMetric: "متري (م² / م)",
    unitImperial: "إمبراطوري (قدم² / قدم)",
    unitMetricShort: "م² / م",
    unitImperialShort: "قدم² / قدم",
    unitSqM: "م²",
    unitSqFt: "قدم²",
    unitM: "م",
    unitFt: "قدم",
    tepMetrics: "المؤشرات المساحية والمعمارية",
  },
  zh: {
    sectionBadge: "建筑户型与技术参数",
    sectionTitle: "精选户型平面图与空间布局",
    sectionSubtitle: (tower) => `${tower} 官方权威尺寸、房间配置与高得房率解析。`,
    cadRef: "CAD图纸编号",
    fullscreenBtn: "全屏查看建筑设计图纸",
    closeFullscreen: "退出全屏",
    zoomIn: "放大",
    zoomOut: "缩小",
    resetZoom: "重置",
    clickToEnlarge: "点击展开高清全尺寸CAD户型图",
    blueprintTitle: "CAD建筑轴网设计图",
    scaleLabel: "比例 1:100 • 迪拜土地局权威认证",
    totalArea: "建筑总面积",
    livingArea: "套内使用面积 (Net)",
    balconyArea: "观景露台 / 阳台",
    clearCeiling: "室内净层高",
    roomsTitle: "功能区空间配置",
    bedroomsLabel: "卧室数量",
    bathroomsLabel: "卫浴配置",
    maidRoomLabel: "独立保姆房",
    powderRoomLabel: "客用洗手间",
    kitchenTypeLabel: "厨房形制",
    viewAspectLabel: "景观朝向",
    engineeringHighlights: "建筑工程亮点",
    printBtn: (type) => `打印图纸: ${type}`,
    yes: "配备",
    no: "无",
    ofTotal: "占总面积",
    floorToCeiling: "落地隔音隔热幕墙",
    svgMasterBed: "主卧套房",
    svgBath: "主卫浴",
    svgLiving: "客厅与宴会餐厅",
    svgKitchen: "主厨厨房",
    svgBalcony: "景观阳台",
        svgCeilingHeight: "净层高",
    svgDimensions: "尺寸规格",
    svgWardrobe: "衣帽间",
    svgShower: "淋浴间",
    svgDining: "用餐区",
    svgLounge: "观景露台",
    svgIsland: "中岛料理台",
        themeDark: "深色 CAD",
    themeLight: "工程白图",
    svgBed2: "第二卧室 (次卧)",
    svgBed3: "第三卧室 (客卧/儿童房)",
    svgMaid: "独立保姆套房",
    svgPool: "私人天幕无边泳池",
        svgOffice: "行政景观书房",
    svgFoyer: "专属入户玄关",
    svgFosterButtress: "福斯特混凝土抗震遮阳翼墙",
    svgBriseSoleil: "外立面流线型遮阳百叶",
    svgWetKitchen: "独立重油烟料理间",
    svgStaffBed: "保姆套房带独立卫浴",
    svgVipLift: "私人专属VIP电梯",
    svgPresidentialWing: "总统级主卧套房翼",
    svgJacuzziSpa: "全景天际按摩水疗池",
    svgExecutiveDesk: "行政景观书房工作台",
    svgGrandSalon: "挑空双层奢华会客厅",
    svgInfinityPool: "天际无边泳池 8.5米 × 3.5米",
    svgSeats: (n) => `${n} 人位`,
    svgPowderRoom: "客用洗手间",
    seriesBadge: (name) => `${name} 建筑图纸系列`,
    officialPlanBadge: (dev) => `开发商官方图纸: ${dev}`,
        cornerDualAspect: "双面转角全景视界",
    enSuiteBadge: "独立套房卫浴",
    svgSomCore: "SOM六边形中央支撑核心筒",
    svgTwistedCol: "90度扭转螺旋承重柱网",
    svgZahaVoid: "扎哈流体雕塑中空玻璃幕墙",
    svgCarLift: "私人汽车入户专属电梯及展示廊",
    svgOceanFront: "一线正南向无遮挡海景幕墙",
    svgServiceCore: "高速客梯与机电综合核心筒",
    unitMetric: "公制 (m² / m)",
    unitImperial: "英制 (sq.ft / ft)",
    unitMetricShort: "m² / m",
    unitImperialShort: "sq.ft / ft",
    unitSqM: "m²",
    unitSqFt: "sq.ft",
    unitM: "m",
    unitFt: "ft",
    tepMetrics: "建筑技术经济指标与面积",
  },
  de: {
    sectionBadge: "Architektonische Grundrisse & Flächen",
    sectionTitle: "Grundriss-Atlas & Wohntypologien",
    sectionSubtitle: (tower) => `Offizielle Abmessungen, Raumeinteilung und Netto-Wohnflächeneffizienz in ${tower}.`,
    cadRef: "CAD-Referenz",
    fullscreenBtn: "Grundriss im Vollbild anzeigen",
    closeFullscreen: "Vollbild schließen",
    zoomIn: "Vergrößern",
    zoomOut: "Verkleinern",
    resetZoom: "Zurücksetzen",
    clickToEnlarge: "Klicken, um den hochauflösenden CAD-Grundriss zu öffnen",
    blueprintTitle: "Architektonische CAD-Planzeichnung",
    scaleLabel: "MASSSTAB 1:100 • DLD / RERA VERIFIZIERT",
    totalArea: "Bruttogeschossfläche",
    livingArea: "Netto-Wohnfläche (Net)",
    balconyArea: "Balkon / Loggia",
    clearCeiling: "Lichte Raumhöhe",
    roomsTitle: "Raumprogramm & Spezifikation",
    bedroomsLabel: "Schlafzimmer",
    bathroomsLabel: "Badezimmer",
    maidRoomLabel: "Personalzimmer",
    powderRoomLabel: "Gäste-WC",
    kitchenTypeLabel: "Küchenkonzept",
    viewAspectLabel: "Ausrichtung / Blickachse",
    engineeringHighlights: "Ingenieurtechnische Vorteile",
    printBtn: (type) => `Plan drucken: ${type}`,
    yes: "Vorhanden",
    no: "Nein",
    ofTotal: "der Gesamtwohnfläche",
    floorToCeiling: "Bodentiefe Fensterfronten",
    svgMasterBed: "HAUPTSCHLAFZIMMER",
    svgBath: "EN-SUITE BAD",
    svgLiving: "WOHN- & ESSBEREICH",
    svgKitchen: "KÜCHE",
    svgBalcony: "BALKON / LOGGIA",
        svgCeilingHeight: "DECKENHÖHE",
    svgDimensions: "ABMESSUNGEN",
    svgWardrobe: "ANKLEIDE",
    svgShower: "DUSCHE",
    svgDining: "ESSBEREICH",
    svgLounge: "SKY-LOUNGE",
    svgIsland: "KOCHINSEL",
        themeDark: "Dunkler CAD",
    themeLight: "Weißer Plan",
    svgBed2: "SCHLAFZIMMER 2",
    svgBed3: "SCHLAFZIMMER 3",
    svgMaid: "PERSONALSUITE",
    svgPool: "PRIVATER SKY-POOL",
        svgOffice: "EXECUTIVE-STUDIO",
    svgFoyer: "EINGANGSFOYER",
    svgFosterButtress: "FOSTER-BETONPFEILER (SONNENSCHUTZ)",
    svgBriseSoleil: "AERODYNAMISCHE BRISE-SOLEIL-LAMELLEN",
    svgWetKitchen: "VORBEREITUNGSKÜCHE (WET KITCHEN)",
    svgStaffBed: "PERSONALZIMMER MIT BAD",
    svgVipLift: "PRIVATER VIP-AUFZUG",
    svgPresidentialWing: "PRÄSIDENTEN-MASTERTRAKT",
    svgJacuzziSpa: "PANORAMA-WHIRLPOOL-SPA",
    svgExecutiveDesk: "EXECUTIVE-SCHREIBTISCH",
    svgGrandSalon: "DOPPELT HOCHMÄSSIGER SALON",
    svgInfinityPool: "INFINITY-POOL 8.5m × 3.5m",
    svgSeats: (n) => `${n} Plätze`,
    svgPowderRoom: "GÄSTE-WC",
    seriesBadge: (name) => `Architekturserie ${name}`,
    officialPlanBadge: (dev) => `Offizieller Plan: ${dev}`,
        cornerDualAspect: "ZWEISEITIGES ECKPANORAMA",
    enSuiteBadge: "EN-SUITE-BAD",
    svgSomCore: "SOM-SECHSKANT-STÜTZKERN",
    svgTwistedCol: "90°-VERDREHTE WENDELSÄULEN",
    svgZahaVoid: "ORGANISCHE VOID-FASSADE (ZAHA HADID)",
    svgCarLift: "PRIVATER PKW-SKY-AUFZUG",
    svgOceanFront: "PRIME-MEERESFRONT-VERGLASUNG",
    svgServiceCore: "HOCHGESCHWINDIGKEITS-KERN",
    unitMetric: "Metrisch (m² / m)",
    unitImperial: "Imperial (sq.ft / ft)",
    unitMetricShort: "m² / m",
    unitImperialShort: "sq.ft / ft",
    unitSqM: "m²",
    unitSqFt: "sq.ft",
    unitM: "m",
    unitFt: "ft",
    tepMetrics: "Flächen- & Kennzahlen (T&E)",
  },
  fr: {
    sectionBadge: "Typologies Architecturales & Plans",
    sectionTitle: "Atlas des Plans & Espaces de Vie",
    sectionSubtitle: (tower) => `Dimensions officielles, distribution des pièces et efficacité habitable dans ${tower}.`,
    cadRef: "Réf. CAD",
    fullscreenBtn: "Agrandir le plan en plein écran",
    closeFullscreen: "Fermer le plein écran",
    zoomIn: "Zoomer",
    zoomOut: "Dézoomer",
    resetZoom: "Réinitialiser",
    clickToEnlarge: "Cliquez pour afficher le plan CAD en haute résolution",
    blueprintTitle: "Schéma Architectural Vectoriel CAD",
    scaleLabel: "ÉCHELLE 1:100 • CERTIFIÉ DLD / RERA",
    totalArea: "Surface Totale Construite",
    livingArea: "Surface Habitable Nette (Net)",
    balconyArea: "Balcon / Terrasse",
    clearCeiling: "Hauteur sous plafond nette",
    roomsTitle: "Distribution des pièces & Programme",
    bedroomsLabel: "Chambres",
    bathroomsLabel: "Salles de bain",
    maidRoomLabel: "Chambre de service",
    powderRoomLabel: "WC Invités",
    kitchenTypeLabel: "Type de cuisine",
    viewAspectLabel: "Orientation & Vue",
    engineeringHighlights: "Atouts Techniques & Structurels",
    printBtn: (type) => `Imprimer le plan: ${type}`,
    yes: "Oui",
    no: "Non",
    ofTotal: "de la surface totale",
    floorToCeiling: "Baies vitrées toute hauteur",
    svgMasterBed: "CHAMBRE PRINCIPALE",
    svgBath: "SALLE DE BAIN EN-SUITE",
    svgLiving: "SALON & SALLE À MANGER",
    svgKitchen: "CUISINE",
    svgBalcony: "TERRASSE / BALCON",
        svgCeilingHeight: "HAUTEUR SOUS PLAFOND",
    svgDimensions: "DIMENSIONS",
    svgWardrobe: "DRESSING",
    svgShower: "DOUCHE",
    svgDining: "ESPACE REPAS",
    svgLounge: "SALON TERRASSE",
    svgIsland: "ÎLOT CUISINE",
        themeDark: "CAD Sombre",
    themeLight: "Plan Blanc",
    svgBed2: "DEUXIÈME CHAMBRE",
    svgBed3: "TROISIÈME CHAMBRE",
    svgMaid: "CHAMBRE DE SERVICE",
    svgPool: "PISCINE PRIVÉE SUSPENDUE",
        svgOffice: "BUREAU EXÉCUTIF",
    svgFoyer: "VESTIBULE D'ENTRÉE",
    svgFosterButtress: "CONTREFORT BÉTON FOSTER (BRISE-SOLEIL)",
    svgBriseSoleil: "LAMELLEN BRISE-SOLEIL AÉRODYNAMIQUES",
    svgWetKitchen: "CUISINE DE PRÉPARATION",
    svgStaffBed: "CHAMBRE PERSONNEL + SDB",
    svgVipLift: "ASCENSEUR VIP PRIVATIF",
    svgPresidentialWing: "AILE PARENTALE PRÉSIDENTIELLE",
    svgJacuzziSpa: "SPA JACUZZI PANORAMIQUE",
    svgExecutiveDesk: "BUREAU EXÉCUTIF",
    svgGrandSalon: "GRAND SALON DOUBLE HAUTEUR",
    svgInfinityPool: "PISCINE INFINITY 8.5m × 3.5m",
    svgSeats: (n) => `${n} Couverts`,
    svgPowderRoom: "TOILETTES INVITÉS",
    seriesBadge: (name) => `Série Architecturale ${name}`,
    officialPlanBadge: (dev) => `Plan Officiel : ${dev}`,
        cornerDualAspect: "PANORAMA D'ANGLE DOUBLE ORIENTATION",
    enSuiteBadge: "SDB EN-SUITE",
    svgSomCore: "NOYAU HEXAGONAL CONTREFORT SOM",
    svgTwistedCol: "COLONNES TORSADÉES À 90°",
    svgZahaVoid: "FAÇADE COURBE DU VIDE CENTRAL (ZAHA HADID)",
    svgCarLift: "ASCENSEUR À VOITURE PRIVATIF",
    svgOceanFront: "FAÇADE PANORAMIQUE SUR MER",
    svgServiceCore: "NOYAU CENTRAL ASCENSEURS & GAINES",
    unitMetric: "Métrique (m² / m)",
    unitImperial: "Impérial (sq.ft / ft)",
    unitMetricShort: "m² / m",
    unitImperialShort: "sq.ft / ft",
    unitSqM: "m²",
    unitSqFt: "sq.ft",
    unitM: "m",
    unitFt: "ft",
    tepMetrics: "Surfaces & Métriques Architecturales",
  },
  it: {
    sectionBadge: "Tipologie Architettoniche & Planimetrie",
    sectionTitle: "Atlante delle Planimetrie & Layout",
    sectionSubtitle: (tower) => `Dimensioni ufficiali, divisione degli spazi ed efficienza abitativa in ${tower}.`,
    cadRef: "Rif. CAD",
    fullscreenBtn: "Ingrandisci planimetria a schermo intero",
    closeFullscreen: "Chiudi schermo intero",
    zoomIn: "Ingrandisci",
    zoomOut: "Riduci",
    resetZoom: "Ripristina",
    clickToEnlarge: "Clicca per visualizzare la planimetria CAD a schermo intero",
    blueprintTitle: "Schema Architettonico CAD",
    scaleLabel: "SCALA 1:100 • CERTIFICAZIONE DLD / RERA",
    totalArea: "Superficie Totale",
    livingArea: "Superficie Calpestabile (Net)",
    balconyArea: "Balcone / Loggia",
    clearCeiling: "Altezza Utile Soffitti",
    roomsTitle: "Composizione e Dettagli Ambienti",
    bedroomsLabel: "Camere da letto",
    bathroomsLabel: "Bagni",
    maidRoomLabel: "Camera di servizio",
    powderRoomLabel: "Bagno di servizio ospiti",
    kitchenTypeLabel: "Tipologia Cucina",
    viewAspectLabel: "Esposizione e Vista",
    engineeringHighlights: "Punti di Forza Ingegneristici",
    printBtn: (type) => `Stampa Planimetria: ${type}`,
    yes: "Sì",
    no: "No",
    ofTotal: "della superficie totale",
    floorToCeiling: "Vetrata a tutta altezza",
    svgMasterBed: "CAMERA PADRONALE",
    svgBath: "BAGNO EN-SUITE",
    svgLiving: "SOGGIORNO E PRANZO",
    svgKitchen: "CUCINA",
    svgBalcony: "BALCONE / LOGGIA",
        svgCeilingHeight: "ALTEZZA SOFFITTO",
    svgDimensions: "DIMENSIONI",
    svgWardrobe: "CABINA ARMADIO",
    svgShower: "DOCCIA",
    svgDining: "ZONA PRANZO",
    svgLounge: "TERRAZZA LOUNGE",
    svgIsland: "ISOLA CUCINA",
        themeDark: "CAD Scuro",
    themeLight: "Planimetria Chiara",
    svgBed2: "SECONDA CAMERA",
    svgBed3: "TERZA CAMERA",
    svgMaid: "CAMERA DI SERVIZIO",
    svgPool: "PISCINA PANORAMICA PRIVATA",
        svgOffice: "STUDIO PRIVATO",
    svgFoyer: "ATRIO D'INGRESSO",
    svgFosterButtress: "CONTRAFFORTE IN CEMENTO FOSTER",
    svgBriseSoleil: "FRANGISOLE AERODINAMICI BRISE-SOLEIL",
    svgWetKitchen: "CUCINA DI SERVIZIO",
    svgStaffBed: "CAMERA PERSONALE CON BAGNO",
    svgVipLift: "ASCENSORE VIP PRIVATO",
    svgPresidentialWing: "ALA PADRONALE PRESIDENZIALE",
    svgJacuzziSpa: "JACUZZI SPA PANORAMICA",
    svgExecutiveDesk: "SCRIVANIA DIREZIONALE",
    svgGrandSalon: "GRAN SALONE A DOPPIA ALTEZZA",
    svgInfinityPool: "PISCINA INFINITY 8.5m × 3.5m",
    svgSeats: (n) => `${n} Posti`,
    svgPowderRoom: "BAGNO OSPITI",
    seriesBadge: (name) => `Serie Architettonica ${name}`,
    officialPlanBadge: (dev) => `Piano Ufficiale: ${dev}`,
        cornerDualAspect: "PANORAMA D'ANGOLO DOPPIA ESPOSIZIONE",
    enSuiteBadge: "BAGNO EN-SUITE",
    svgSomCore: "NUCLEO ESAGONALE A CONTRAFFORTE SOM",
    svgTwistedCol: "COLONNE ELICOIDALI RUOTATE DI 90°",
    svgZahaVoid: "FACCIATA CURVA DEL VUOTO CENTRALE (ZAHA HADID)",
    svgCarLift: "ASCENSORE PER AUTO PRIVATO",
    svgOceanFront: "FACCIATA PANORAMICA SUL MARE",
    svgServiceCore: "NUCLEO ASCENSORI AD ALTA VELOCITÀ",
    unitMetric: "Metrico (m² / m)",
    unitImperial: "Imperiale (sq.ft / ft)",
    unitMetricShort: "m² / m",
    unitImperialShort: "sq.ft / ft",
    unitSqM: "m²",
    unitSqFt: "sq.ft",
    unitM: "m",
    unitFt: "ft",
    tepMetrics: "Superfici e Metriche Architettoniche",
  },
  tr: {
    sectionBadge: "Mimari Kat Planları ve Alanlar",
    sectionTitle: "Kat Planları ve Yaşam Alanı Atlası",
    sectionSubtitle: (tower) => `${tower} için resmi boyutlar, oda dağılımı ve net alan verimliliği.`,
    cadRef: "CAD Ref",
    fullscreenBtn: "Tam ekran planı büyüt",
    closeFullscreen: "Tam ekranı kapat",
    zoomIn: "Yakınlaştır",
    zoomOut: "Uzaklaştır",
    resetZoom: "Sıfırla",
    clickToEnlarge: "Yüksek çözünürlüklü CAD planını tam ekran açmak için tıklayın",
    blueprintTitle: "CAD Mimari Plan Çizimi",
    scaleLabel: "ÖLÇEK 1:100 • DLD / RERA ONAYLI",
    totalArea: "Toplam Brüt Alan",
    livingArea: "Net Yaşam Alanı (Net)",
    balconyArea: "Balkon / Teras",
    clearCeiling: "Net Tavan Yüksekliği",
    roomsTitle: "Oda Dağılımı ve Teknik Özellikler",
    bedroomsLabel: "Yatak Odası",
    bathroomsLabel: "Banyo",
    maidRoomLabel: "Hizmetli Odası",
    powderRoomLabel: "Misafir WC",
    kitchenTypeLabel: "Mutfak Tipi",
    viewAspectLabel: "Manzara Cephesi",
    engineeringHighlights: "Mühendislik ve Yapı Avantajları",
    printBtn: (type) => `Planı Yazdır: ${type}`,
    yes: "Var",
    no: "Hayır",
    ofTotal: "toplam alan oranı",
    floorToCeiling: "Tabandan tavana cam cephe",
    svgMasterBed: "EBEVEYN ODASI",
    svgBath: "ÖZEL BANYO",
    svgLiving: "SALON VE YEMEK ALANI",
    svgKitchen: "MUTFAK",
    svgBalcony: "BALKON / TERAS",
        svgCeilingHeight: "TAVAN YÜKSEKLİĞİ",
    svgDimensions: "ÖLÇÜLER",
    svgWardrobe: "GİYİNME ODASI",
    svgShower: "DUŞ",
    svgDining: "YEMEK ALANI",
    svgLounge: "TERAS SALONU",
    svgIsland: "MUTFAK ADASI",
        themeDark: "Koyu CAD",
    themeLight: "Açık Plan",
    svgBed2: "2. YATAK ODASI",
    svgBed3: "3. YATAK ODASI",
    svgMaid: "HİZMETLİ ODASI",
    svgPool: "ÖZEL TERAS HAVUZU",
        svgOffice: "YÖNETİCİ ÇALIŞMA ODASI",
    svgFoyer: "GİRİŞ ANTRE",
    svgFosterButtress: "FOSTER BETON TAŞIYICI GÜNEŞLİK",
    svgBriseSoleil: "AERODİNAMİK GÜNEŞ KIRICI PANELLER",
    svgWetKitchen: "HAZIRLIK MUTFAĞI",
    svgStaffBed: "PERSONEL ODASI + BANYO",
    svgVipLift: "ÖZEL VIP ASANSÖR",
    svgPresidentialWing: "BAŞKANLIK MASTER KANADI",
    svgJacuzziSpa: "PANORAMİK JAKUZİ SPA",
    svgExecutiveDesk: "YÖNETİCİ ÇALIŞMA MASASI",
    svgGrandSalon: "ÇİFT KAT YÜKSEKLİKTE BÜYÜK SALON",
    svgInfinityPool: "SONSUZLUK HAVUZU 8.5m × 3.5m",
    svgSeats: (n) => `${n} Kişilik`,
    svgPowderRoom: "MİSAFİR TUVALETİ",
    seriesBadge: (name) => `${name} Mimari Serisi`,
    officialPlanBadge: (dev) => `Resmi Plan: ${dev}`,
        cornerDualAspect: "ÇİFT CEPHE KÖŞE MANZARA",
    enSuiteBadge: "EBEVEYN BANYOSU",
    svgSomCore: "SOM ALTIGEN TAŞIYICI ÇEKİRDEK",
    svgTwistedCol: "90° DÖNÜŞLÜ HELİKAL KOLONLAR",
    svgZahaVoid: "ORGANİK BOŞLUK CEPHE HATTI (ZAHA HADID)",
    svgCarLift: "ÖZEL ARAÇ ASANSÖRÜ",
    svgOceanFront: "DENİZE SIFIR PANORAMİK CAM CEPHE",
    svgServiceCore: "YÜKSEK HIZLI ASANSÖR VE SERVİS ÇEKİRDEĞİ",
    unitMetric: "Metrik (m² / m)",
    unitImperial: "İngiliz (sq.ft / ft)",
    unitMetricShort: "m² / m",
    unitImperialShort: "sq.ft / ft",
    unitSqM: "m²",
    unitSqFt: "sq.ft",
    unitM: "m",
    unitFt: "ft",
    tepMetrics: "Mimari Alan ve Teknik Değerler",
  },
  hi: {
    sectionBadge: "आर्किटेक्चरल फ्लोर प्लान और विनिर्देश",
    sectionTitle: "फ्लोर प्लान और लिविंग लेआउट एटलस",
    sectionSubtitle: (tower) => `${tower} में आधिकारिक इकाइयाँ, कमरों का विवरण और शुद्ध रहने की दक्षता।`,
    cadRef: "कैड कोड",
    fullscreenBtn: "फ़ुल स्क्रीन लेआउट देखें",
    closeFullscreen: "फ़ुल स्क्रीन बंद करें",
    zoomIn: "बड़ा करें",
    zoomOut: "छोटा करें",
    resetZoom: "रीसेट",
    clickToEnlarge: "पूर्ण आकार का सीएडी ब्लूप्रिंट खोलने के लिए क्लिक करें",
    blueprintTitle: "सीएडी आर्किटेक्चरल ब्लूप्रिंट",
    scaleLabel: "स्केल 1:100 • डीएलडी / रेरा प्रमाणित",
    totalArea: "कुल निर्मित क्षेत्रफल",
    livingArea: "आंतरिक शुद्ध क्षेत्रफल (Net)",
    balconyArea: "बालकनी / लॉजिया",
    clearCeiling: "छत की शुद्ध ऊँचाई",
    roomsTitle: "कक्ष विवरण और लेआउट संरचना",
    bedroomsLabel: "शयनकक्ष",
    bathroomsLabel: "स्नानघर",
    maidRoomLabel: "सहायक कक्ष (Maid)",
    powderRoomLabel: "अतिथि शौचालय",
    kitchenTypeLabel: "रसोई का प्रकार",
    viewAspectLabel: "दृश्य क्षितिज",
    engineeringHighlights: "इंजीनियरिंग विशेषताएँ",
    printBtn: (type) => `ब्लूप्रिंट प्रिंट करें: ${type}`,
    yes: "उपलब्ध",
    no: "नहीं",
    ofTotal: "कुल क्षेत्रफल का",
    floorToCeiling: "फ़र्श से छत तक कांच",
    svgMasterBed: "मास्टर बेडरूम",
    svgBath: "संलग्न स्नानघर",
    svgLiving: "लिविंग व डाइनिंग हॉल",
    svgKitchen: "रसोईघर",
    svgBalcony: "बालकनी / छत",
        svgCeilingHeight: "छत की ऊँचाई",
    svgDimensions: "आयाम",
    svgWardrobe: "वॉर्डरोब",
    svgShower: "शॉवर",
    svgDining: "डाइनिंग एरिया",
    svgLounge: "स्काई लाउंज",
    svgIsland: "किचन आइलैंड",
        themeDark: "डार्क सीएडी",
    themeLight: "व्हाइट प्लान",
    svgBed2: "दूसरा बेडरूम",
    svgBed3: "तीसरा बेडरूम",
    svgMaid: "स्टाफ क्वार्टर",
    svgPool: "प्राइवेट स्काई पूल",
        svgOffice: "एग्जीक्यूटिव स्टडी",
    svgFoyer: "प्राइवेट फ़ोयर",
    svgFosterButtress: "फ़ोस्टर कंक्रीट बट्रेस दीवार",
    svgBriseSoleil: "एरोडायनामिक धूप रोधक लामेले",
    svgWetKitchen: "वेट प्रेप किचन",
    svgStaffBed: "स्टाफ बेडरूम + बाथरूम",
    svgVipLift: "प्राइवेट वीआईपी लिफ्ट",
    svgPresidentialWing: "प्रेसिडेंशियल मास्टर विंग",
    svgJacuzziSpa: "पैनोरमिक जकूज़ी स्पा",
    svgExecutiveDesk: "एग्जीक्यूटिव डेस्क व स्टडी",
    svgGrandSalon: "डबल-हाइट भव्य सैलून",
    svgInfinityPool: "इनफिनिटी पूल 8.5m × 3.5m",
    svgSeats: (n) => `${n} सीटें`,
    svgPowderRoom: "गेस्ट पाउडर रूम",
    seriesBadge: (name) => `${name} आर्किटेक्चरल सीरीज़`,
    officialPlanBadge: (dev) => `आधिकारिक योजना: ${dev}`,
        cornerDualAspect: "कॉर्नर डुअल-एस्पेक्ट पैनोरमा",
    enSuiteBadge: "एन-सुइट बाथरूम",
    svgSomCore: "SOM हेक्सागोनल बट्रेस्ड कोर",
    svgTwistedCol: "90° घुमावदार स्तंभ सरणी",
    svgZahaVoid: "ऑर्गेनिक वॉइड कर्टेन वॉल (ज़ाहा हदीद)",
    svgCarLift: "प्राइवेट कार स्काई लिफ्ट",
    svgOceanFront: "प्राइम वॉटरफ्रंट महासागर ग्लेज़िंग",
    svgServiceCore: "हाई-स्पीड लिफ्ट व सर्विस कोर",
    unitMetric: "मीट्रिक (m² / m)",
    unitImperial: "इंपीरियल (sq.ft / ft)",
    unitMetricShort: "m² / m",
    unitImperialShort: "sq.ft / ft",
    unitSqM: "m²",
    unitSqFt: "sq.ft",
    unitM: "m",
    unitFt: "ft",
    tepMetrics: "वास्तुशिल्प मीट्रिक और क्षेत्रफल",
  },
  ur: {
    sectionBadge: "معماری فلور پلان اور رقبہ",
    sectionTitle: "فلور پلانز اور رہائشی لے آؤٹ اٹلس",
    sectionSubtitle: (tower) => `${tower} میں یونٹ کی پیمائش، کمروں کی تفصیل اور نیٹ کارآمد رقبہ۔`,
    cadRef: "کیڈ کوڈ",
    fullscreenBtn: "مکمل سکرین پر خاکہ دیکھیں",
    closeFullscreen: "بند کریں",
    zoomIn: "بڑا کریں",
    zoomOut: "چھوٹا کریں",
    resetZoom: "ری سیٹ",
    clickToEnlarge: "فل سائز CAD بلیو پرنٹ کھولنے کے لیے کلک کریں",
    blueprintTitle: "CAD آرکیٹیکچرل بلیو پرنٹ",
    scaleLabel: "پیمانہ 1:100 • منظور شدہ DLD / RERA",
    totalArea: "کل تعمیراتی رقبہ",
    livingArea: "اندرونی کارآمد رقبہ (Net)",
    balconyArea: "بالکونی / لاجیا",
    clearCeiling: "چھت کی اونچائی",
    roomsTitle: "کمروں کی تقسیم اور تفصیلات",
    bedroomsLabel: "بیڈ رومز",
    bathroomsLabel: "باتھ رومز",
    maidRoomLabel: "ملازمہ کا کمرہ",
    powderRoomLabel: "مہمان واش روم",
    kitchenTypeLabel: "باورچی خانے کی قسم",
    viewAspectLabel: "منظر اور رخ",
    engineeringHighlights: "تعمیراتی خصوصیات",
    printBtn: (type) => `پرنٹ کریں: ${type}`,
    yes: "دستیاب",
    no: "نہیں",
    ofTotal: "کل رقبے کا",
    floorToCeiling: "فرش سے چھت تک شیشہ",
    svgMasterBed: "ماسٹر بیڈ روم",
    svgBath: "منسلک باتھ روم",
    svgLiving: "لونگ و ڈائننگ ہال",
    svgKitchen: "باورچی خانہ",
    svgBalcony: "بالکونی / ٹیرس",
        svgCeilingHeight: "چھت کی اونچائی",
    svgDimensions: "پیمائش",
    svgWardrobe: "الماری",
    svgShower: "شاور",
    svgDining: "کھانے کی جگہ",
    svgLounge: "اسکائی لاؤنج",
    svgIsland: "کچن جزیرہ",
        themeDark: "ڈارک سی اے ڈی",
    themeLight: "لائٹ پلان",
    svgBed2: "بیڈ روم 2",
    svgBed3: "بیڈ روم 3",
    svgMaid: "ملازمہ کا کمرہ",
    svgPool: "نجی اسکائی پول",
        svgOffice: "ایگزیکٹو اسٹڈی",
    svgFoyer: "نجی داخلی فوئر",
    svgFosterButtress: "فوسٹر کنکریٹ سپورٹ دیوار",
    svgBriseSoleil: "ہوائی دھوپ روکنے والے سن شیڈز",
    svgWetKitchen: "تیاری کا باورچی خانہ",
    svgStaffBed: "اسٹاف بیڈ روم بمع واش روم",
    svgVipLift: "نجی وی آئی پی لفٹ",
    svgPresidentialWing: "صدارتی ماسٹر ونگ",
    svgJacuzziSpa: "پینورامک جکوزی سپا",
    svgExecutiveDesk: "ایگزیکٹو ڈیسک اور اسٹڈی",
    svgGrandSalon: "ڈبل اونچائی والا گرینڈ سیلون",
    svgInfinityPool: "انفینٹی پول 8.5m × 3.5m",
    svgSeats: (n) => `${n} نشستیں`,
    svgPowderRoom: "مہمان واش روم",
    seriesBadge: (name) => `${name} آرکیٹیکچرل سیریز`,
    officialPlanBadge: (dev) => `سرکاری پلان: ${dev}`,
        cornerDualAspect: "کونے کا دو طرفہ پینورما",
    enSuiteBadge: "منسلک باتھ روم",
    svgSomCore: "ایس او ایم چھ رخی سپورٹ کور",
    svgTwistedCol: "90 ڈگری گھومتے ہوئے ستون",
    svgZahaVoid: "آرگینک خالی حصہ کرٹین وال (زہا حدید)",
    svgCarLift: "نجی کار اسکائی لفٹ",
    svgOceanFront: "پہلی قطار سمندری گلیزنگ",
    svgServiceCore: "ہائی اسپیڈ لفٹ اور سروس کور",
    unitMetric: "میٹرک (m² / م)",
    unitImperial: "امپیریل (sq.ft / ft)",
    unitMetricShort: "m² / m",
    unitImperialShort: "sq.ft / ft",
    unitSqM: "م²",
    unitSqFt: "sq.ft",
    unitM: "m",
    unitFt: "ft",
    tepMetrics: "تعمیراتی پیمائش اور رقبہ",
  },
};

// Unit Type Translations
export const TYPOLOGY_NAMES: Record<string, Partial<Record<LanguageCode, string>>> = {
  "1-Bedroom Suite": {
    ru: "1-спальный сьют",
    en: "1-Bedroom Suite",
    ar: "جناح غرفة نوم واحدة",
    zh: "一居室套房",
    de: "1-Zimmer-Suite",
    fr: "Suite 1 chambre",
    it: "Suite 1 camera",
    tr: "1 Yatak Odalı Süit",
    hi: "1-बेडरूम सुइट",
    ur: "1 بیڈ روم سویٹ",
  },
  "2-Bedroom Executive": {
    ru: "2-спальная резиденция",
    en: "2-Bedroom Executive",
    ar: "شقة تنفيذية بغرفتي نوم",
    zh: "行政两居室",
    de: "2-Zimmer-Executive",
    fr: "2 pièces Exécutif",
    it: "Executive 2 camere",
    tr: "2 Yatak Odalı Yönetici Daire",
    hi: "2-बेडरूम एक्जीक्यूटिव",
    ur: "2 بیڈ روم ایگزیکٹو",
  },
  "3-Bedroom Residence": {
    ru: "3-спальная резиденция",
    en: "3-Bedroom Residence",
    ar: "شقة 3 غرف نوم",
    zh: "三居室大平层",
    de: "3-Zimmer-Residenz",
    fr: "Résidence 3 chambres",
    it: "Residenza 3 camere",
    tr: "3 Yatak Odalı Rezidans",
    hi: "3-बेडरूम रेजिडेंस",
    ur: "3 بیڈ روم رہائش گاہ",
  },
  "Grand Sky Penthouse": {
    ru: "Гранд Скай-пентхаус",
    en: "Grand Sky Penthouse",
    ar: "بنتهاوس سكاي الفاخر",
    zh: "空中顶层豪宅",
    de: "Grand Sky Penthouse",
    fr: "Grand Penthouse Céleste",
    it: "Grand Sky Penthouse",
    tr: "Büyük Gökyüzü Penthouse",
    hi: "ग्रैंड स्काई पेंटहाउस",
    ur: "گرینڈ اسکائی پینٹ ہاؤس",
  },
};

// Kitchen Translations
export const KITCHEN_NAMES: Record<string, Partial<Record<LanguageCode, string>>> = {
  "European Open-Plan with Quartz Island": {
    ru: "Европейская открытая кухня с кварцевым островом",
    en: "European Open-Plan with Quartz Island",
    ar: "مطبخ أوروبي مفتوح مع جزيرة كوارتز",
    zh: "欧洲开放式设计 配石英石中央岛台",
    de: "Europäische offene Küche mit Quarz-Insel",
    fr: "Cuisine américaine européenne avec îlot en quartz",
    it: "Cucina a vista europea con isola in quarzo",
    tr: "Kuvars Adalı Avrupa Açık Mutfak",
    hi: "क्वार्ट्ज आइलैंड के साथ यूरोपीय ओपन-प्लान रसोई",
    ur: "کوارٹز جزیرے کے ساتھ یورپی اوپن کچن",
  },
  "Semi-Enclosed Gourmet Kitchen with Breakfast Counter": {
    ru: "Полуоткрытая кухня для гурманов с барной стойкой",
    en: "Semi-Enclosed Gourmet Kitchen with Breakfast Counter",
    ar: "مطبخ ذواقة شبه مغلق مع كاونتر إفطار",
    zh: "半封闭美食厨房 带早餐吧台",
    de: "Halboffene Gourmetküche mit Frühstückstheke",
    fr: "Cuisine gastronomique semi-fermée avec comptoir",
    it: "Cucina gourmet semi-chiusa con bancone colazione",
    tr: "Kahvaltı Barlı Yarı Kapalı Gurme Mutfak",
    hi: "नाश्ता काउंटर के साथ अर्ध-संलग्न पेटू रसोई",
    ur: "ناشتہ کاؤنٹر کے ساتھ نیم بند نفیس کچن",
  },
  "Dual Kitchen: Wet Cooking Kitchen + Show Kitchen Island": {
    ru: "Двойная кухня: рабочая 'мокрая' зона + парадный остров",
    en: "Dual Kitchen: Wet Cooking Kitchen + Show Kitchen Island",
    ar: "مطبخ مزدوج: مطبخ تحضير رطب + مطبخ عرض رئيسي",
    zh: "双厨系统：中式重油烟烹饪区 + 西式观景岛台",
    de: "Doppelküche: Vorbereitungsküche + repräsentative Show-Küche",
    fr: "Double cuisine: cuisine de préparation + cuisine spectacle",
    it: "Doppia cucina: zona cottura separata + isola a vista",
    tr: "Çift Mutfak: Ağır Pişirme Mutfağı + Sunum Ada Mutfağı",
    hi: "दोहरी रसोई: वेट कुकिंग किचन + शो किचन आइलैंड",
    ur: "ڈبل کچن: گیلے کھانا پکانے کا باورچی خانہ + نمائشی جزیرہ",
  },
  "Custom Italian Chef Kitchen with Butler Pantry & Wine Cellar": {
    ru: "Итальянская кухня шеф-повара с кладовой дворецкого и винной зоной",
    en: "Custom Italian Chef Kitchen with Butler Pantry & Wine Cellar",
    ar: "مطبخ طهاة إيطالي مخصص مع مخزن ومساحة تبريد خاصة",
    zh: "定制意大利主厨厨房 配备管家备餐室与酒窖",
    de: "Maßgeschneiderte italienische Chefküche mit Butler-Pantry & Weinklima",
    fr: "Cuisine de chef italienne sur mesure avec office et cave à vin",
    it: "Cucina chef italiana su misura con dispensa e cantinetta vini",
    tr: "Kiler ve Şarap Bölümlü Özel İtalyan Şef Mutfağı",
    hi: "बटलर पेंट्री और वाइन सेलर के साथ कस्टम इतालवी शेफ रसोई",
    ur: "بٹلر پینٹری اور وائن سیلر کے ساتھ اطالوی شیف کچن",
  },
};

// View Translations
export function localizeViewHorizon(view: string, lang: LanguageCode): string {
  if (lang === "en") return view;
  if (lang === "ru") {
    if (view.includes("Burj Lake")) return "Озеро Бурдж, фонтан Дубай и бульвар шейха Мохаммеда";
    if (view.includes("Marina Yacht")) return "Яхтенный канал Дубай Марина и Персидский залив";
    if (view.includes("Private Beachfront")) return "Частный пляж и линия горизонта Дубай Марина";
    if (view.includes("Dubai Water Canal")) return "Дубайский водный канал и силуэт Даунтауна";
    return "Панорама горизонта Дубая и ландшафтные парки";
  }
  if (lang === "ar") {
    if (view.includes("Burj Lake")) return "بحيرة البرج ونافورات دبي وبوليفارد محمد بن راشد";
    if (view.includes("Marina Yacht")) return "قناة دبي مارينا لليخوت والخليج العربي";
    if (view.includes("Private Beachfront")) return "شاطئ خاص وأفق ناطحات سحاب دبي مارينا";
    if (view.includes("Dubai Water Canal")) return "قناة دبي المائية وأفق وسط المدينة";
    return "إطلالة بانورامية على أفق المدينة والحدائق الطبيعية";
  }
  if (lang === "zh") {
    if (view.includes("Burj Lake")) return "哈利法塔人工湖、迪拜音乐喷泉与市中心大道全景";
    if (view.includes("Marina Yacht")) return "迪拜码头游艇港运河与阿拉伯湾碧海全景";
    if (view.includes("Private Beachfront")) return "私家海滩与迪拜码头璀璨天际线";
    if (view.includes("Dubai Water Canal")) return "迪拜运河与市中心摩天轮廓线";
    return "壮丽城市天际线与园林景观公园双重盛景";
  }
  if (lang === "de") {
    if (view.includes("Burj Lake")) return "Burj Lake, Dubai Fountain & Mohammed Bin Rashid Boulevard";
    if (view.includes("Marina Yacht")) return "Dubai Marina Yachtkanal & Arabischer Golf";
    if (view.includes("Private Beachfront")) return "Privatstrand & Skyline von Dubai Marina";
    if (view.includes("Dubai Water Canal")) return "Dubai Water Canal & Downtown Skyline";
    return "Panoramablick auf Skyline & Landschaftsparks";
  }
  if (lang === "fr") {
    if (view.includes("Burj Lake")) return "Lac du Burj, Fontaine de Dubaï & Boulevard MBR";
    if (view.includes("Marina Yacht")) return "Canal des yachts de Dubai Marina & Golfe Arabique";
    if (view.includes("Private Beachfront")) return "Plage privée & Skyline de Dubai Marina";
    if (view.includes("Dubai Water Canal")) return "Canal de Dubaï & Skyline de Downtown";
    return "Vue panoramique sur la skyline & parcs paysagers";
  }
  if (lang === "it") {
    if (view.includes("Burj Lake")) return "Lago del Burj, Fontana di Dubai & Boulevard";
    if (view.includes("Marina Yacht")) return "Canale Yacht di Dubai Marina & Golfo Arabico";
    if (view.includes("Private Beachfront")) return "Spiaggia privata & Skyline di Dubai Marina";
    if (view.includes("Dubai Water Canal")) return "Canale di Dubai & Skyline di Downtown";
    return "Vista panoramica sullo skyline & parchi";
  }
  if (lang === "tr") {
    if (view.includes("Burj Lake")) return "Burj Gölü, Dubai Çeşmesi ve MBR Bulvarı";
    if (view.includes("Marina Yacht")) return "Dubai Marina Yat Kanalı ve Basra Körfezi";
    if (view.includes("Private Beachfront")) return "Özel plaj ve Dubai Marina silüeti";
    if (view.includes("Dubai Water Canal")) return "Dubai Su Kanalı ve Downtown manzarası";
    return "Panoramik şehir silüeti ve peyzaj parkları";
  }
  if (lang === "hi") {
    if (view.includes("Burj Lake")) return "बुर्ज झील, दुबई फाउंटेन और बुलेवार्ड";
    if (view.includes("Marina Yacht")) return "दुबई मरीना यॉट नहर और अरब की खाड़ी";
    if (view.includes("Private Beachfront")) return "निजी समुद्र तट और दुबई मरीना स्काईलाइन";
    if (view.includes("Dubai Water Canal")) return "दुबई जल नहर और डाउनटाउन स्काईलाइन";
    return "स्काईलाइन और लैंडस्केप पार्कों का दृश्य";
  }
  if (lang === "ur") {
    if (view.includes("Burj Lake")) return "برج جھیل، دبئی فوارہ اور بولیوارڈ";
    if (view.includes("Marina Yacht")) return "دبئی مرینا یاٹ کینال اور خلیج عرب";
    if (view.includes("Private Beachfront")) return "نجی ساحل اور دبئی مرینا اسکائی لائن";
    if (view.includes("Dubai Water Canal")) return "دبئی واٹر کینال اور ڈاؤن ٹاؤن اسکائی لائن";
    return "اسکائی لائن اور قدرتی پارکوں کا خوبصورت منظر";
  }
  return view;
}

// Features Translations
export function localizeFeature(feature: string, lang: LanguageCode): string {
  if (lang === "en") return feature;
  if (lang === "ru") {
    if (feature.includes("Floor-to-ceiling Low-E")) return "Панорамное остекление Low-E в пол с повышенной акустической изоляцией";
    if (feature.includes("En-suite master bath")) return "Мастер-ванная с двойной раковиной и отдельностоящей ванной";
    if (feature.includes("Integrated German")) return "Встроенная премиальная немецкая техника (Miele / Siemens или эквивалент)";
    if (feature.includes("Deep loggia balcony")) return "Глубокая лоджия-терраса, защищенная от высотных ветровых потоков";
    if (feature.includes("Dual-aspect corner")) return "Угловое остекление двойного обзора с максимальным естественным светом";
    if (feature.includes("Separate walk-in dressing")) return "Изолированная гардеробная галерея в мастер-спальне";
    if (feature.includes("Private laundry")) return "Изолированная постирочная и хозяйственная зона с вентиляцией";
    if (feature.includes("Acoustically decoupled")) return "Акустически развязанные межквартирные стены (STC 54+ дБ)";
    if (feature.includes("Dedicated en-suite staff")) return "Выделенный блок для персонала с отдельным служебным входом";
    if (feature.includes("Expansive living pavilion")) return "Гранд-гостиная площадью свыше 65 м² для приемов и встреч";
    if (feature.includes("Smart home automation")) return "Умный дом: управление климатом, светом и шторами со смартфона";
    if (feature.includes("Direct elevator")) return "Приватный лифтовой холл с прямым доступом в резиденцию";
    if (feature.includes("Private cantilevered sky plunge")) return "Индивидуальный консольный скай-бассейн на частной террасе";
    if (feature.includes("Double-height 7-meter")) return "Двусветное пространство гостиной с высотой потолков 7 метров";
    if (feature.includes("Private internal elevator")) return "Внутренний скоростной лифт между этажами пентхауса";
    if (feature.includes("Dedicated multi-car")) return "Выделенные машиноместа рядом с VIP-лифтовой зоной паркинга";
    return feature;
  }
  if (lang === "ar") {
    if (feature.includes("Floor-to-ceiling Low-E")) return "نوافذ زجاجية عازلة للصوت والحرارة ممتدة من الأرض إلى السقف";
    if (feature.includes("En-suite master bath")) return "حمام رئيسي فاخر مزود بمغسلة مزدوجة وحوض استحمام مستقل";
    if (feature.includes("Integrated German")) return "أجهزة مطبخ ألمانية مدمجة من أعلى الفئات العالمية";
    if (feature.includes("Deep loggia balcony")) return "شرفة فسيحة محمية هندسياً من تيارات الرياح العالية";
    if (feature.includes("Dual-aspect corner")) return "إطلالة زاوية مزدوجة تسمح بدخول الإضاءة الطبيعية طوال اليوم";
    if (feature.includes("Separate walk-in dressing")) return "غرفة ملابس وخزائن مستقلة في جناح النوم الرئيسي";
    if (feature.includes("Private laundry")) return "غرفة غسيل ومرافق مستقلة مع نظام تهوية متطور";
    if (feature.includes("Acoustically decoupled")) return "جدران عازلة للصوت بالكامل لضمان الخصوصية التامة";
    if (feature.includes("Dedicated en-suite staff")) return "غرفة خادمة مستقلة بحمام خاص ومدخل خدمة منفصل";
    if (feature.includes("Expansive living pavilion")) return "صالة معيشة فسيحة تتجاوز 65 متراً مربعاً للضيافة";
    if (feature.includes("Smart home automation")) return "نظام ذكي متكامل للتحكم بالإنارة والتكييف والستائر";
    if (feature.includes("Direct elevator")) return "مدخل مصعد خاص يؤدي مباشرة إلى بهو الشقة";
    if (feature.includes("Private cantilevered sky plunge")) return "مسبح خاص معلق بإطلالة بانورامية على أفق دبي";
    if (feature.includes("Double-height 7-meter")) return "سقف مرتفع بارتفاع 7 أمتار في الصالة الرئيسية";
    if (feature.includes("Private internal elevator")) return "مصعد داخلي خاص للتنقل بين طوابق البنتهاوس";
    if (feature.includes("Dedicated multi-car")) return "مواقف سيارات خاصة متعددة بجوار المصاعد السريعة";
    return feature;
  }
  if (lang === "zh") {
    if (feature.includes("Floor-to-ceiling Low-E")) return "全景超白Low-E中空落地幕墙 卓越隔音隔热性能";
    if (feature.includes("En-suite master bath")) return "豪华主卧卫浴 配备双台盆与独立式奢华浸泡浴缸";
    if (feature.includes("Integrated German")) return "全套内嵌式德国顶级厨电（美诺Miele/西门子同等奢标）";
    if (feature.includes("Deep loggia balcony")) return "深凹进式空中阳台 有效屏蔽高空强侧风对流";
    if (feature.includes("Dual-aspect corner")) return "270度转角双向采光 全天候通透采光视界";
    if (feature.includes("Separate walk-in dressing")) return "主卧独立奢阔步入式衣帽走廊";
    if (feature.includes("Private laundry")) return "独立家政洗涤与储藏间 配备专业强排风系统";
    if (feature.includes("Acoustically decoupled")) return "声学解耦多层隔音分户墙（STC 54+分贝极静标准）";
    if (feature.includes("Dedicated en-suite staff")) return "独立套内保姆间 配备专属独立服务动线入口";
    if (feature.includes("Expansive living pavilion")) return "逾65平方米无柱式超阔宴会级会客客厅";
    if (feature.includes("Smart home automation")) return "全屋智能系统：手机一键联控温控、灯光与电动窗帘";
    if (feature.includes("Direct elevator")) return "专属私家电梯前厅刷卡直达入户";
    if (feature.includes("Private cantilevered sky plunge")) return "空中悬挑私家无边际深潜泳池与日光浴甲板";
    if (feature.includes("Double-height 7-meter")) return "挑高约7米恢弘双层通高奢华会客厅";
    if (feature.includes("Private internal elevator")) return "顶层复式专属室内私家观光电梯";
    if (feature.includes("Dedicated multi-car")) return "毗邻VIP专属高速电梯梯厅的多车位私家车位";
    return feature;
  }
  if (lang === "de") {
    if (feature.includes("Floor-to-ceiling Low-E")) return "Bodentiefe Low-E-Verglasung mit hochwirksamer Schalldämmung";
    if (feature.includes("En-suite master bath")) return "Master-Badezimmer mit Doppelwaschtisch und freistehender Badewanne";
    if (feature.includes("Integrated German")) return "Integrierte deutsche Premium-Küchengeräte (Miele / Siemens)";
    if (feature.includes("Deep loggia balcony")) return "Tiefe Loggia mit speziellem Windschutz für Höhenlagen";
    if (feature.includes("Dual-aspect corner")) return "Über Eck verglaste Doppelansicht für maximalen Tageslichteinfall";
    if (feature.includes("Separate walk-in dressing")) return "Separater begehbarer Ankleidebereich im Hauptschlafzimmer";
    if (feature.includes("Private laundry")) return "Eigener Hauswirtschaftsraum mit separater Belüftung";
    if (feature.includes("Acoustically decoupled")) return "Akustisch entkoppelte Trennwände (STC 54+ dB)";
    if (feature.includes("Dedicated en-suite staff")) return "Eigenes Personal-Zimmer mit separatem Serviceeingang";
    if (feature.includes("Expansive living pavilion")) return "Großzügiger Wohn- und Empfangsbereich über 65 m²";
    if (feature.includes("Smart home automation")) return "Vollintegrierte Smart-Home-Steuerung für Klima, Licht & Rollos";
    if (feature.includes("Direct elevator")) return "Privates Aufzugsvorfoyer mit direktem Wohnungszugang";
    if (feature.includes("Private cantilevered sky plunge")) return "Privater auskragender Sky-Pool auf der eigenen Terrasse";
    if (feature.includes("Double-height 7-meter")) return "Galeriewohnzimmer mit 7 Meter Deckenhöhe";
    if (feature.includes("Private internal elevator")) return "Eigener interner Aufzug zwischen den Penthausebenen";
    if (feature.includes("Dedicated multi-car")) return "Reservierte Stellplätze direkt am VIP-Aufgang";
    return feature;
  }
  if (lang === "fr") {
    if (feature.includes("Floor-to-ceiling Low-E")) return "Baies vitrées Low-E du sol au plafond avec isolation acoustique renforcée";
    if (feature.includes("En-suite master bath")) return "Salle de bain parentale avec double vasque et baignoire îlot";
    if (feature.includes("Integrated German")) return "Électroménager haut de gamme allemand intégré (Miele / Siemens)";
    if (feature.includes("Deep loggia balcony")) return "Loggia profonde protégée des rafales de vent en altitude";
    if (feature.includes("Dual-aspect corner")) return "Double exposition d'angle maximisant la lumière naturelle";
    if (feature.includes("Separate walk-in dressing")) return "Dressing indépendant spacieux dans la suite parentale";
    if (feature.includes("Private laundry")) return "Buanderie et cellier avec système d'aération indépendant";
    if (feature.includes("Acoustically decoupled")) return "Cloisons mitoyennes à désolidarisation acoustique (STC 54+ dB)";
    if (feature.includes("Dedicated en-suite staff")) return "Chambre de service en-suite avec entrée de service dédiée";
    if (feature.includes("Expansive living pavilion")) return "Vaste salon de réception de plus de 65 m²";
    if (feature.includes("Smart home automation")) return "Domotique complète: contrôle climatisation, éclairage et stores";
    if (feature.includes("Direct elevator")) return "Palier d'ascenseur privatif avec accès direct à la résidence";
    if (feature.includes("Private cantilevered sky plunge")) return "Bassin de nage privé en porte-à-faux sur la terrasse";
    if (feature.includes("Double-height 7-meter")) return "Séjour magistral avec 7 mètres de hauteur sous plafond";
    if (feature.includes("Private internal elevator")) return "Ascenseur intérieur privé reliant les niveaux du penthouse";
    if (feature.includes("Dedicated multi-car")) return "Places de parking privatives situées près des ascenseurs VIP";
    return feature;
  }
  if (lang === "it") {
    if (feature.includes("Floor-to-ceiling Low-E")) return "Vetrate a tutta altezza Low-E ad alto isolamento acustico";
    if (feature.includes("En-suite master bath")) return "Bagno padronale con doppio lavabo e vasca freestanding";
    if (feature.includes("Integrated German")) return "Elettrodomestici tedeschi premium integrati (Miele / Siemens)";
    if (feature.includes("Deep loggia balcony")) return "Loggia profonda protetta dai venti di alta quota";
    if (feature.includes("Dual-aspect corner")) return "Doppia esposizione angolare per la massima luminosità naturale";
    if (feature.includes("Separate walk-in dressing")) return "Cabina armadio walk-in nella suite padronale";
    if (feature.includes("Private laundry")) return "Lavanderia e ripostiglio con aerazione dedicata";
    if (feature.includes("Acoustically decoupled")) return "Pareti divisorie ad isolamento acustico (STC 54+ dB)";
    if (feature.includes("Dedicated en-suite staff")) return "Alloggio di servizio en-suite con ingresso secondario";
    if (feature.includes("Expansive living pavilion")) return "Salone di rappresentanza di oltre 65 mq";
    if (feature.includes("Smart home automation")) return "Domotica avanzata per controllo clima, luci e tende";
    if (feature.includes("Direct elevator")) return "Ascensore con accesso diretto al piano o foyer privato";
    if (feature.includes("Private cantilevered sky plunge")) return "Piscina panoramica a sbalzo sulla terrazza privata";
    if (feature.includes("Double-height 7-meter")) return "Soggiorno a doppia altezza di 7 metri";
    if (feature.includes("Private internal elevator")) return "Ascensore interno privato tra i livelli dell'attico";
    if (feature.includes("Dedicated multi-car")) return "Posti auto riservati adiacenti agli ascensori VIP";
    return feature;
  }
  if (lang === "tr") {
    if (feature.includes("Floor-to-ceiling Low-E")) return "Tabandan tavana ses yalıtımlı Low-E çift cam cephe";
    if (feature.includes("En-suite master bath")) return "Çift lavabolu ve bağımsız küvetli ebeveyn banyosu";
    if (feature.includes("Integrated German")) return "Ankastre Alman birinci sınıf beyaz eşyalar (Miele / Siemens)";
    if (feature.includes("Deep loggia balcony")) return "Yüksek irtifa rüzgarlarından korunaklı geniş loca balkon";
    if (feature.includes("Dual-aspect corner")) return "Maksimum gün ışığı alan 270 derece köşe cephe";
    if (feature.includes("Separate walk-in dressing")) return "Ebeveyn odasında geniş giyinme odası galerisi";
    if (feature.includes("Private laundry")) return "Havalandırmalı bağımsız çamaşır ve kiler odası";
    if (feature.includes("Acoustically decoupled")) return "Ses yalıtımlı daireler arası duvarlar (STC 54+ dB)";
    if (feature.includes("Dedicated en-suite staff")) return "Özel servis girişli hizmetli odası ve banyosu";
    if (feature.includes("Expansive living pavilion")) return "65 m²'yi aşan ferah konuk ve salon alanı";
    if (feature.includes("Smart home automation")) return "Akıllı ev otomasyonu: iklimlendirme, aydınlatma ve perde kontrolü";
    if (feature.includes("Direct elevator")) return "Doğrudan daireye açılan özel asansör holü";
    if (feature.includes("Private cantilevered sky plunge")) return "Özel terasta konsollu gökyüzü havuzu";
    if (feature.includes("Double-height 7-meter")) return "7 metre tavan yüksekliğine sahip galeri salon";
    if (feature.includes("Private internal elevator")) return "Penthouse katları arası özel iç asansör";
    if (feature.includes("Dedicated multi-car")) return "VIP asansörlerin yanında tahsis edilmiş kapalı otopark";
    return feature;
  }
  if (lang === "hi") {
    if (feature.includes("Floor-to-ceiling Low-E")) return "ध्वनि इन्सुलेशन के साथ फ़र्श से छत तक लो-ई ग्लास";
    if (feature.includes("En-suite master bath")) return "दोहरे सिंक और सोकिंग टब के साथ संलग्न मास्टर स्नान";
    if (feature.includes("Integrated German")) return "एकीकृत जर्मन प्रीमियम उपकरण (Miele / Siemens)";
    if (feature.includes("Deep loggia balcony")) return "ऊंचाई वाली हवाओं से सुरक्षित गहरी बालकनी";
    if (feature.includes("Dual-aspect corner")) return "कोने का डुअल-पहलू अधिकतम प्राकृतिक प्रकाश";
    if (feature.includes("Separate walk-in dressing")) return "मास्टर बेडरूम में वॉक-इन ड्रेसिंग रूम";
    if (feature.includes("Private laundry")) return "वेंटिलेशन के साथ अलग लॉन्ड्री और उपयोगिता कोठरी";
    if (feature.includes("Acoustically decoupled")) return "ध्वनि-पृथक दीवारें (STC 54+ dB)";
    if (feature.includes("Dedicated en-suite staff")) return "निजी सेवा प्रवेश द्वार के साथ सहायक क्वार्टर";
    if (feature.includes("Expansive living pavilion")) return "65 वर्ग मीटर से अधिक का विशाल लिविंग रूम";
    if (feature.includes("Smart home automation")) return "स्मार्ट होम ऑटोमेशन: जलवायु, प्रकाश और ब्लाइंड्स";
    if (feature.includes("Direct elevator")) return "सीधे अपार्टमेंट में खुलने वाला निजी लिफ्ट फ़ोयर";
    if (feature.includes("Private cantilevered sky plunge")) return "निजी छत पर स्काई प्लंज पूल";
    if (feature.includes("Double-height 7-meter")) return "7 मीटर छत की ऊंचाई वाला हॉल";
    if (feature.includes("Private internal elevator")) return "पेंटहाउस स्तरों के बीच आंतरिक लिफ्ट";
    if (feature.includes("Dedicated multi-car")) return "वीआईपी लिफ्टों के बगल में सुरक्षित पार्किंग स्थल";
    return feature;
  }
  if (lang === "ur") {
    if (feature.includes("Floor-to-ceiling Low-E")) return "آواز کی موصلیت کے ساتھ فرش سے چھت تک لو ای گلاس";
    if (feature.includes("En-suite master bath")) return "ڈبل سنک اور الگ باتھ ٹب کے ساتھ اٹیچڈ ماسٹر باتھ";
    if (feature.includes("Integrated German")) return "پریمیم جرمن برقی آلات (Miele / Siemens)";
    if (feature.includes("Deep loggia balcony")) return "بلند ہواؤں سے محفوظ گہری لاجیا بالکونی";
    if (feature.includes("Dual-aspect corner")) return "کونے کا ڈبل رخ جو قدرتی روشنی کو زیادہ کرے";
    if (feature.includes("Separate walk-in dressing")) return "ماسٹر بیڈروم میں کشادہ واک ان الماری";
    if (feature.includes("Private laundry")) return "علیحدہ لانڈری اور اسٹور روم";
    if (feature.includes("Acoustically decoupled")) return "آواز کو روکنے والی دیواریں (STC 54+ dB)";
    if (feature.includes("Dedicated en-suite staff")) return "علیحدہ سروس دروازے کے ساتھ ملازمہ کا کمرہ";
    if (feature.includes("Expansive living pavilion")) return "65 مربع میٹر سے بڑا کشادہ لونگ روم";
    if (feature.includes("Smart home automation")) return "سمارٹ ہوم: روشنی، اے سی اور پردوں کا کنٹرول";
    if (feature.includes("Direct elevator")) return "براہ راست رہائش گاہ میں کھلنے والی پرائیویٹ لفٹ";
    if (feature.includes("Private cantilevered sky plunge")) return "پرائیویٹ ٹیرس پر کینٹیلیورڈ اسکائی پول";
    if (feature.includes("Double-height 7-meter")) return "7 میٹر اونچی چھت والا مرکزی ہال";
    if (feature.includes("Private internal elevator")) return "پینٹ ہاؤس کے اندر ذاتی لفٹ";
    if (feature.includes("Dedicated multi-car")) return "وی آئی پی لفٹوں کے قریب مختص پارکنگ";
    return feature;
  }
  return feature;
}

// Localize Entire FloorPlan for current language
export function getLocalizedFloorPlan(plan: FloorPlan, lang: LanguageCode, buildingName: string): FloorPlan {
  const localizedTypology = TYPOLOGY_NAMES[plan.typeTag]?.[lang] || plan.typeTag;
  const localizedKitchen = KITCHEN_NAMES[plan.roomsBreakdown.kitchenType]?.[lang] || plan.roomsBreakdown.kitchenType;
  const localizedView = localizeViewHorizon(plan.viewOrientation, lang);
  const localizedFeatures = plan.features.map((f) => localizeFeature(f, lang));

  return {
    ...plan,
    name: `${localizedTypology} (${buildingName})`,
    typeTag: localizedTypology,
    viewOrientation: localizedView,
    roomsBreakdown: {
      ...plan.roomsBreakdown,
      kitchenType: localizedKitchen,
    },
    features: localizedFeatures,
  };
}

// DLD Procedure Translations
export const DLD_PROCEDURES: Record<string, Partial<Record<LanguageCode, string>>> = {
  Sales: {
    ru: "Купля-продажа",
    en: "Sales",
    ar: "بيع ونقل ملكية",
    zh: "买卖过户",
    de: "Kaufvertrag",
    fr: "Vente",
    it: "Compravendita",
    tr: "Satış",
    hi: "बिक्री",
    ur: "فروخت",
  },
  Mortgage: {
    ru: "Ипотека",
    en: "Mortgage",
    ar: "رهن عقاري",
    zh: "抵押贷款",
    de: "Hypothek",
    fr: "Hypothèque",
    it: "Mutuo",
    tr: "İpotek",
    hi: "बंधक",
    ur: "رہن",
  },
  "Off-Plan Resale": {
    ru: "Переуступка (Off-Plan)",
    en: "Off-Plan Resale",
    ar: "إعادة بيع على الخارطة",
    zh: "期房转售",
    de: "Off-Plan Weiterverkauf",
    fr: "Revente sur plan",
    it: "Rivendita su carta",
    tr: "Proje Devir",
    hi: "ऑफ-प्लान पुनर्विक्रय",
    ur: "آف پلان دوبارہ فروخت",
  },
};

// DLD Floor Zone Translations
export function localizeFloorZone(zone: string, lang: LanguageCode): string {
  if (lang === "en") return zone;
  if (lang === "ru") {
    return zone
      .replace("Low Zone", "Нижняя зона")
      .replace("Mid Zone", "Средняя зона")
      .replace("High Zone", "Высотная зона")
      .replace("Sky Tier", "Скай-ярус");
  }
  if (lang === "ar") {
    return zone
      .replace("Low Zone", "المنطقة المنخفضة")
      .replace("Mid Zone", "المنطقة الوسطى")
      .replace("High Zone", "المنطقة المرتفعة")
      .replace("Sky Tier", "طوابق السكاي الفاخرة");
  }
  if (lang === "zh") {
    return zone
      .replace("Low Zone", "低楼层区")
      .replace("Mid Zone", "中楼层区")
      .replace("High Zone", "高楼层区")
      .replace("Sky Tier", "空中天际顶层");
  }
  if (lang === "de") {
    return zone
      .replace("Low Zone", "Untere Etagen")
      .replace("Mid Zone", "Mittlere Etagen")
      .replace("High Zone", "Obere Etagen")
      .replace("Sky Tier", "Sky-Ebene");
  }
  if (lang === "fr") {
    return zone
      .replace("Low Zone", "Zone basse")
      .replace("Mid Zone", "Zone intermédiaire")
      .replace("High Zone", "Zone haute")
      .replace("Sky Tier", "Étages Célestes");
  }
  if (lang === "it") {
    return zone
      .replace("Low Zone", "Piani bassi")
      .replace("Mid Zone", "Piani intermedi")
      .replace("High Zone", "Piani alti")
      .replace("Sky Tier", "Livello Sky");
  }
  if (lang === "tr") {
    return zone
      .replace("Low Zone", "Alt Katlar")
      .replace("Mid Zone", "Orta Katlar")
      .replace("High Zone", "Üst Katlar")
      .replace("Sky Tier", "Gökyüzü Katları");
  }
  if (lang === "hi") {
    return zone
      .replace("Low Zone", "निचला क्षेत्र")
      .replace("Mid Zone", "मध्य क्षेत्र")
      .replace("High Zone", "ऊपरी क्षेत्र")
      .replace("Sky Tier", "स्काई टियर");
  }
  if (lang === "ur") {
    return zone
      .replace("Low Zone", "نچلی منزلیں")
      .replace("Mid Zone", "درمیانی منزلیں")
      .replace("High Zone", "اوپری منزلیں")
      .replace("Sky Tier", "اسکائی ٹیر");
  }
  return zone;
}
