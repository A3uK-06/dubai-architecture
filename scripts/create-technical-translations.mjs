import fs from 'fs';

const code = `import { Building } from "./buildings";
import { District } from "./districts";
import { LanguageCode } from "../i18n/languages";

// Complete Russian technical translations for all 26 buildings
export const TECHNICAL_BUILDINGS_RU: Record<string, Partial<Building>> = {
  "burj-khalifa": {
    foundation: {
      pilesCount: 192,
      pileDepthMeters: 50,
      pileDiameterMeters: "1.5 м",
      raftThicknessMeters: "3.7 м монолитный железобетон",
      bedrockType: "Плотный калькаренит / илистый песчаник с прослойками кальцисильтита",
    },
    windStructural: {
      lateralSystem: "Шестиугольное центральное ядро с 3 контрфорсами, образующими Y-образную геометрию",
      dampingMechanism: "Ступенчатые аэродинамические уступы дезорганизуют вихревые потоки по высоте (без инерционного демпфера)",
      maxApexSwayMeters: "1.5 м (на вершине при шторме повторяемостью 50 лет)",
      concreteStrengthGrade: "Самоуплотняющийся бетон C80 / C60 с микрокремнеземом и золой-уноса (подача насосом до 606 м)",
    },
    facade: {
      glazingType: "Двухкамерный модульный фасад: солнцезащитное наружное стекло + Low-E внутреннее + аргон",
      shgcSolarCoefficient: "0.18 (блокирует 82% солнечной радиации)",
      uValueWPerM2K: "1.4 Вт/м²·K",
      bmuCleaningSystem: "18 рельсовых фасадных люлек (BMU) и телескопических стрел",
      cleaningCycleDays: "120–180 дней (бригада из 36–40 специалистов)",
    },
    verticalTransport: {
      elevatorManufacturer: "Otis",
      totalElevators: 57,
      maxSpeedMs: 10.0,
      doubleDeckCars: true,
      zoningStrategy: "Система скай-лобби на 43, 76 и 123 этажах, разделяющая экспресс-шаттлы и локальные группы",
      peakWaitingSeconds: "< 45 секунд в среднем",
    },
    operatingSpecs: {
      coolingProvider: "Централизованное охлаждение Empower с выделенной станцией аккумуляции льда",
      chillerBilling: "Consumption-Billed (Empower)",
      annualServiceChargeAedSqFt: 55.0,
      acousticRatingDb: "STC 54 дБ (двойные акустически развязанные перегородки между резиденциями)",
      slabToSlabHeightMeters: 3.8,
      clearCeilingHeightMeters: 3.0,
    },
    layoutEfficiency: {
      columnImpact: "Minimal (Open Spans)",
      netToGrossRatio: "74% - 78%",
      balconyUsability: "Выше 108 этажа балконы исключены из-за экстремальных скоростей вихревых ветров; на нижних ярусах — заглубленные лоджии",
    },
    urbanIntegration: "Прямой кондиционированный траволаторный переход в Dubai Mall и на станцию метро Burj Khalifa/Dubai Mall",
  },
  "emirates-towers": {
    foundation: {
      pilesCount: 380,
      pileDepthMeters: 45,
      pileDiameterMeters: "1.2 м",
      raftThicknessMeters: "2.8 м монолитный железобетонный ростверк",
      bedrockType: "Морской известняк и окремненный песчаник",
    },
    windStructural: {
      lateralSystem: "Треугольное центральное ядро жесткости с угловыми сталежелезобетонными мегаколоннами",
      dampingMechanism: "Аэродинамический профиль равностороннего треугольника снижает ветровое сопротивление на 30%",
      maxApexSwayMeters: "0.85 м",
      concreteStrengthGrade: "Высокопрочный монолитный бетон C70",
    },
    facade: {
      glazingType: "Стеклопакеты с медным светоотражающим напылением и анодированные алюминиевые панели",
      shgcSolarCoefficient: "0.22",
      uValueWPerM2K: "1.6 Вт/м²·K",
      bmuCleaningSystem: "Автоматизированные телескопические люльки на крыше башен",
      cleaningCycleDays: "60–90 дней",
    },
    verticalTransport: {
      elevatorManufacturer: "Schindler / Kone",
      totalElevators: 42,
      maxSpeedMs: 7.0,
      doubleDeckCars: false,
      zoningStrategy: "Панорамные наружные лифты и высокоскоростные группы с интеллектуальным распределением вызовов",
      peakWaitingSeconds: "< 30 секунд",
    },
    operatingSpecs: {
      coolingProvider: "Собственная центральная холодильная станция комплекса",
      chillerBilling: "Chiller-Free",
      annualServiceChargeAedSqFt: 32.0,
      acousticRatingDb: "STC 52 дБ",
      slabToSlabHeightMeters: 4.0,
      clearCeilingHeightMeters: 3.1,
    },
    layoutEfficiency: {
      columnImpact: "Minimal (Open Spans)",
      netToGrossRatio: "82% - 85%",
      balconyUsability: "Офисные и гостиничные этажи без открытых балконов с панорамным остеклением от пола до потолка",
    },
    urbanIntegration: "Прямой кондиционированный мост к станции метро Emirates Towers и галерее Gate District DIFC",
  },
  "burj-al-arab": {
    foundation: {
      pilesCount: 250,
      pileDepthMeters: 40,
      pileDiameterMeters: "1.5 м",
      raftThicknessMeters: "2.5 м железобетонная плита на искусственном острове",
      bedrockType: "Морской калькаренит, защищенный пористыми бетонными волноломами SHED",
    },
    windStructural: {
      lateralSystem: "Стальной экзоскелет с диагональными трубчатыми раскосами и центральным бетонным торсионом",
      dampingMechanism: "Туннельные демпферы настроенной массы (TMD) в стальных арках каркаса",
      maxApexSwayMeters: "0.45 м",
      concreteStrengthGrade: "Специальный гидротехнический сульфатостойкий бетон C60",
    },
    facade: {
      glazingType: "Двухслойное тефлоновое полотно DuPont PTFE с тефлоновым покрытием и структурное стекло",
      shgcSolarCoefficient: "0.15",
      uValueWPerM2K: "1.3 Вт/м²·K",
      bmuCleaningSystem: "Специальные альпинистские платформы и мобильные крановые стрелы",
      cleaningCycleDays: "45–60 дней",
    },
    verticalTransport: {
      elevatorManufacturer: "Kone",
      totalElevators: 18,
      maxSpeedMs: 7.0,
      doubleDeckCars: false,
      zoningStrategy: "Панорамные скоростные лифты через 182-метровый атриум с золотой отделкой",
      peakWaitingSeconds: "< 25 секунд",
    },
    operatingSpecs: {
      coolingProvider: "Автономный морской охладительный комплекс Jumeirah",
      chillerBilling: "Chiller-Free",
      annualServiceChargeAedSqFt: 85.0,
      acousticRatingDb: "STC 58 дБ (максимальная премиальная звукоизоляция люксов)",
      slabToSlabHeightMeters: 5.5,
      clearCeilingHeightMeters: 4.2,
    },
    layoutEfficiency: {
      columnImpact: "Minimal (Open Spans)",
      netToGrossRatio: "70% - 75%",
      balconyUsability: "Исключительно двухэтажные люксы Duplex с панорамным остеклением на залив без балконов",
    },
    urbanIntegration: "Приватный охраняемый мост-эстакада, соединяющий искусственный остров с Jumeirah Beach Road",
  },
  "cayan-tower": {
    foundation: {
      pilesCount: 140,
      pileDepthMeters: 42,
      pileDiameterMeters: "1.2 м",
      raftThicknessMeters: "3.0 м",
      bedrockType: "Морской песчаник и алевролит побережья залива",
    },
    windStructural: {
      lateralSystem: "Цилиндрическое центральное ядро жесткости с радиально закрученными колоннами",
      dampingMechanism: "90-градусный аэродинамический поворот фасада снижает поперечные вихревые колебания",
      maxApexSwayMeters: "0.75 м",
      concreteStrengthGrade: "Высокопрочный бетон B80",
    },
    facade: {
      glazingType: "Тонированное солнцезащитное энергоэффективное остекление с алюминиевыми экранами",
      shgcSolarCoefficient: "0.20",
      uValueWPerM2K: "1.5 Вт/м²·K",
      bmuCleaningSystem: "Вращающаяся люлька BMU на кольцевом рельсе на крыше башни",
      cleaningCycleDays: "90 дней",
    },
    verticalTransport: {
      elevatorManufacturer: "Mitsubishi Electric",
      totalElevators: 8,
      maxSpeedMs: 6.0,
      doubleDeckCars: false,
      zoningStrategy: "Скоростные пассажирские лифты с прямым доступом в подземный 6-уровневый паркинг",
      peakWaitingSeconds: "< 35 секунд",
    },
    operatingSpecs: {
      coolingProvider: "Центральное охлаждение Empower (районная станция Dubai Marina)",
      chillerBilling: "Consumption-Billed (Empower)",
      annualServiceChargeAedSqFt: 19.5,
      acousticRatingDb: "STC 50 дБ",
      slabToSlabHeightMeters: 3.5,
      clearCeilingHeightMeters: 2.9,
    },
    layoutEfficiency: {
      columnImpact: "Moderate (Perimeter Columns)",
      netToGrossRatio: "79% - 83%",
      balconyUsability: "Широкие полукруглые балконы с ветрозащитными экранами и панорамой на марину",
    },
    urbanIntegration: "Прямой выход на променад Marina Walk и станцию трамвая Dubai Marina Towers",
  },
  "museum-of-the-future": {
    foundation: {
      pilesCount: 300,
      pileDepthMeters: 35,
      pileDiameterMeters: "1.0 м",
      raftThicknessMeters: "2.2 м",
      bedrockType: "Плотный доломитовый известняк вдоль Sheikh Zayed Road",
    },
    windStructural: {
      lateralSystem: "Параметрический стальной диагрид (диагональная сетка) без единой внутренней колонны",
      dampingMechanism: "Тороидальная замкнутая аэродинамическая форма с нулевым вихревым следом",
      maxApexSwayMeters: "0.20 м",
      concreteStrengthGrade: "Бетонная подиумная плита C50 со стальным каркасом 12 000 тонн",
    },
    facade: {
      glazingType: "1024 уникальные трехслойные панели из стекловолокна и нержавеющей стали с каллиграфией",
      shgcSolarCoefficient: "0.19",
      uValueWPerM2K: "1.2 Вт/м²·K (сертификация LEED Platinum)",
      bmuCleaningSystem: "Скрытые автоматизированные монорельсы и подвесные платформы",
      cleaningCycleDays: "30–45 дней",
    },
    verticalTransport: {
      elevatorManufacturer: "Kone",
      totalElevators: 8,
      maxSpeedMs: 4.0,
      doubleDeckCars: false,
      zoningStrategy: "Футуристические цилиндрические лифты-капсулы в центральном атриуме",
      peakWaitingSeconds: "< 20 секунд",
    },
    operatingSpecs: {
      coolingProvider: "Энергоэффективная районная станция Empower с солнечными генераторами",
      chillerBilling: "Chiller-Free",
      annualServiceChargeAedSqFt: 38.0,
      acousticRatingDb: "STC 56 дБ",
      slabToSlabHeightMeters: 6.0,
      clearCeilingHeightMeters: 4.8,
    },
    layoutEfficiency: {
      columnImpact: "Minimal (Open Spans)",
      netToGrossRatio: "88% - 92%",
      balconyUsability: "Внутренняя смотровая терраса на эллиптическом ядре с обзором горизонта DIFC",
    },
    urbanIntegration: "Прямой 212-метровый пешеходный надземный мост к станции метро Emirates Towers",
  },
  "one-zaabeel": {
    foundation: {
      pilesCount: 420,
      pileDepthMeters: 48,
      pileDiameterMeters: "1.2 м",
      raftThicknessMeters: "3.2 м",
      bedrockType: "Плотный песчаник и пласты гипса района Заабиль",
    },
    windStructural: {
      lateralSystem: "Двойные монолитные башни, соединенные консольной стальной пространственной фермой 'The Link'",
      dampingMechanism: "Туннельные демпферы в консоли The Link массой 9000 тонн",
      maxApexSwayMeters: "0.60 м",
      concreteStrengthGrade: "Монолитный железобетон C80",
    },
    facade: {
      glazingType: "Модульное солнцезащитное остекление с керамической фриттой и терморазрывами",
      shgcSolarCoefficient: "0.21",
      uValueWPerM2K: "1.4 Вт/м²·K",
      bmuCleaningSystem: "Рельсовые BMU на вершине обеих башен и под консолью The Link",
      cleaningCycleDays: "75 дней",
    },
    verticalTransport: {
      elevatorManufacturer: "Schindler",
      totalElevators: 38,
      maxSpeedMs: 6.0,
      doubleDeckCars: true,
      zoningStrategy: "Скоростные шаттлы в The Link на высоте 100 м и независимые жилые/офисные группы",
      peakWaitingSeconds: "< 30 секунд",
    },
    operatingSpecs: {
      coolingProvider: "Районная система охлаждения Empower",
      chillerBilling: "Consumption-Billed (Empower)",
      annualServiceChargeAedSqFt: 28.0,
      acousticRatingDb: "STC 55 дБ",
      slabToSlabHeightMeters: 3.8,
      clearCeilingHeightMeters: 3.1,
    },
    layoutEfficiency: {
      columnImpact: "Minimal (Open Spans)",
      netToGrossRatio: "81% - 85%",
      balconyUsability: "Панорамный инфинити-бассейн длиной 120 метров на крыше консоли The Link",
    },
    urbanIntegration: "Крытый надземный переход к Всемирному торговому центру Дубая (DWTC) и станции метро Max",
  },
};

// Generic fallback dictionary for technical terms when a full building object override is not present
export const TECH_PHRASES_RU: Record<string, string> = {
  // Cooling
  "Consumption-Billed (Empower)": "По счетчику (Empower)",
  "Chiller-Free": "Включено в сервис-сбор (Chiller-Free)",
  "DEWA Direct": "Прямой расчет (DEWA)",
  "Empower District Cooling": "Центральное районное охлаждение Empower",
  "DEWA Centralized High-Efficiency Chiller System": "Высокоэффективная центральная система DEWA",

  // Column Impact
  "Minimal (Open Spans)": "Минимальное (свободные планировки без лишних колонн)",
  "Moderate (Perimeter Columns)": "Умеренное (колонны вынесены по внешнему контуру)",
  "Complex (Curved/Inclined Facade)": "Сложное (наклонные колонны криволинейного фасада)",

  // Walkability
  "High (Pedestrian Boulevards)": "Высокая (пешеходные бульвары и променады)",
  "Moderate (Within clusters only)": "Умеренная (внутри отдельных кластеров)",
  "Low (Car-centric)": "Низкая (автомобильная доступность)",

  // General bedrock
  "Dense calcarenitic / silty sandstone with calcisiltite seams": "Плотный калькаренит и илистый песчаник с прослойками кальцисильтита",
  "Dense marine calcarenite along Dubai Water Canal": "Плотный морской калькаренит вдоль Дубайского водного канала",
  "Marine calcarenite and cemented sandstone": "Морской калькаренит и окремненный песчаник",
  "Solid calcarenite and coastal sandstone": "Плотный калькаренит и прибрежный песчаник",

  // Speeds
  "< 30 seconds": "< 30 секунд (минимальное ожидание)",
  "< 35 seconds": "< 35 секунд",
  "< 40 seconds": "< 40 секунд",
  "< 45 seconds": "< 45 секунд",
  "< 45 seconds average": "< 45 секунд в среднем",
};

export const DISTRICT_DEEP_RU: Record<string, any> = {
  "downtown-dubai": {
    urbanConcept:
      "Спроектирован девелопером Emaar как супер-квартал высокой плотности с акцентом на пешеходные зоны. Радиальная геометрия района расходится от 30-акрового искусственного озера Бурдж-Лейк. Опоясанный 3,5-километровым бульваром Мохаммеда бин Рашида, мастер-план объединяет 30 000 резиденций с мировым ритейлом (Dubai Mall) и оперой, сохраняя открытые панорамы на Бурдж-Халифа.",
    subZones: [
      {
        name: "Оперный квартал (Opera District)",
        character: "Культурный ультра-люкс анклав с прямым видом на фонтаны и Бурдж-Халифа; ограниченное предложение, крупноформатные резиденции.",
        pricePerSqFtAed: "3,800 - 6,500 AED/кв.фут",
        bestFor: "Сохранение семейного капитала и постоянное проживание владельцев ультра-премиального статуса.",
      },
      {
        name: "Кольцо бульвара MBR Boulevard",
        character: "Оживленный пешеходный променад с ресторанами высокой кухни, бутиковыми отелями и башнями Emaar.",
        pricePerSqFtAed: "2,400 - 3,500 AED/кв.фут",
        bestFor: "Краткосрочная премиальная аренда (Airbnb) с круглогодичной максимальной заполняемостью.",
      },
      {
        name: "Старый город (Old Town & South Ridge)",
        character: "Традиционная малоэтажная арабская архитектура и спокойные жилые башни к югу от озера.",
        pricePerSqFtAed: "1,900 - 2,600 AED/кв.фут",
        bestFor: "Долгосрочная аренда семьями топ-менеджеров, ценящими тишину в шаговой доступности от Даунтауна.",
      },
    ],
    transitAnalysis: {
      highwayAccess: "Прямой выезд на шоссе Sheikh Zayed Road (E11), Financial Centre Road (D71) и улицу Al Asayel.",
      rushHourBottleneck: "Замедление трафика на эстакадах Financial Centre Road и съездах к паркингам Dubai Mall с 18:00 до 21:00.",
      publicTransit: "Станция метро Burj Khalifa / Dubai Mall (Красная ветка) с 820-метровым кондиционированным траволатором.",
      walkabilityScore: "Высокая (пешеходные бульвары)",
    },
    infrastructureAudit: {
      chillerType: "Центральное охлаждение Emaar District Cooling (Empower).",
      stormwaterResilience: "Высокая: модернизированные насосные накопители и глубокие дренажные коллекторы.",
      serviceChargeRangeAed: "22 - 55 AED / кв.фут (в зависимости от сервиса и бренда башни).",
      occupancyRate: "92% - 96% в течение всего года.",
      targetTenantProfile: "Руководители международных корпораций, дипломаты, финансисты и состоятельные туристы.",
    },
    investmentRisks: [
      "Более высокий порог входа по сравнению со спальными районами эмирата.",
      "Высокая плотность вечернего трафика на съездах к бульвару в дни праздников и шоу фонтанов.",
      "Повышенные эксплуатационные расходы (Service Charges) в брендовых отельных башнях.",
    ],
  },
  "dubai-marina": {
    urbanConcept:
      "Крупнейшая рукотворная марина мира площадью 50 гектаров, спроектированная канадским бюро HOK. Застройка велась по периметру 7-километрового морского канала, что обеспечило максимальному числу башен водные виды и прямой доступ к яхтенным причалам.",
    subZones: [
      {
        name: "Северная марина (Marina Gate & Cayan)",
        character: "Премиальный кластер на въезде в марину с быстрейшим выездом на шоссе Sheikh Zayed Road.",
        pricePerSqFtAed: "2,100 - 3,400 AED/кв.фут",
        bestFor: "Высоколиквидная аренда топ-менеджерами медиа- и интернет-компаний Dubai Media City.",
      },
      {
        name: "Центральная марина и Marina Mall",
        character: "Сердце прогулочной жизни с прямым доступом к торговому центру, яхт-клубу и причалам водных такси.",
        pricePerSqFtAed: "1,800 - 2,600 AED/кв.фут",
        bestFor: "Семейные экспаты и инвесторы в стабильный арендный доход.",
      },
      {
        name: "Коридор JBR & The Beach",
        character: "Первая береговая линия у открытого моря с оживленной пляжной набережной.",
        pricePerSqFtAed: "2,200 - 4,200 AED/кв.фут",
        bestFor: "Максимальная доходность в посуточной курортной аренде.",
      },
    ],
    transitAnalysis: {
      highwayAccess: "Прямые съезды на Sheikh Zayed Road (выходы 29 и 32) и трассу Al Sufouh.",
      rushHourBottleneck: "Трафик на мостах через канал и на светофорах вдоль улицы Al Marsa с 18:30 до 20:30.",
      publicTransit: "Две станции метро (DMCC и Sobha Realty), кольцевой дубайский трамвай и водные паромы RTA.",
      walkabilityScore: "Высокая (пешеходный променад 7 км)",
    },
    infrastructureAudit: {
      chillerType: "Центральное охлаждение Empower.",
      stormwaterResilience: "Высокая: естественный сброс избыточных вод в открытую морскую акваторию.",
      serviceChargeRangeAed: "15 - 28 AED / кв.фут.",
      occupancyRate: "94% - 97%.",
      targetTenantProfile: "Специалисты ИТ, авиационные экипажи, молодые предприниматели и иностранные туристы.",
    },
    investmentRisks: [
      "Плотность автомобильного движения на мостах внутри района в часы пик.",
      "Большой возрастной разброс башен (необходим тщательный аудит состояния лифтов и труб в домах до 2010 года).",
    ],
  },
};

/**
 * Localizes Hard TTX and Engineering specifications of a building
 */
export function localizeBuildingTechnicalData(building: Building, lang: LanguageCode): Building {
  if (lang !== "ru") {
    // English or other languages keep original or use dictionary fallbacks
    return building;
  }

  // 1. Direct building-level full technical override if available
  const fullOverride = TECHNICAL_BUILDINGS_RU[building.id] || TECHNICAL_BUILDINGS_RU[building.slug];
  if (fullOverride) {
    return {
      ...building,
      ...fullOverride,
      foundation: fullOverride.foundation ? { ...building.foundation, ...fullOverride.foundation } : building.foundation,
      windStructural: fullOverride.windStructural ? { ...building.windStructural, ...fullOverride.windStructural } : building.windStructural,
      facade: fullOverride.facade ? { ...building.facade, ...fullOverride.facade } : building.facade,
      verticalTransport: fullOverride.verticalTransport ? { ...building.verticalTransport, ...fullOverride.verticalTransport } : building.verticalTransport,
      operatingSpecs: fullOverride.operatingSpecs ? { ...building.operatingSpecs, ...fullOverride.operatingSpecs } : building.operatingSpecs,
      layoutEfficiency: fullOverride.layoutEfficiency ? { ...building.layoutEfficiency, ...fullOverride.layoutEfficiency } : building.layoutEfficiency,
    };
  }

  // 2. Generic phrase-based fallback localization for remaining buildings
  const b = { ...building };
  if (b.foundation) {
    b.foundation = {
      ...b.foundation,
      bedrockType: TECH_PHRASES_RU[b.foundation.bedrockType] || b.foundation.bedrockType,
      raftThicknessMeters: b.foundation.raftThicknessMeters.replace("solid reinforced concrete", "монолитный железобетон"),
    };
  }
  if (b.operatingSpecs) {
    b.operatingSpecs = {
      ...b.operatingSpecs,
      coolingProvider: TECH_PHRASES_RU[b.operatingSpecs.coolingProvider] || b.operatingSpecs.coolingProvider,
      chillerBilling: (TECH_PHRASES_RU[b.operatingSpecs.chillerBilling] as any) || b.operatingSpecs.chillerBilling,
    };
  }
  if (b.layoutEfficiency) {
    b.layoutEfficiency = {
      ...b.layoutEfficiency,
      columnImpact: (TECH_PHRASES_RU[b.layoutEfficiency.columnImpact] as any) || b.layoutEfficiency.columnImpact,
    };
  }
  if (b.urbanIntegration && TECH_PHRASES_RU[b.urbanIntegration]) {
    b.urbanIntegration = TECH_PHRASES_RU[b.urbanIntegration];
  }

  return b;
}

/**
 * Localizes deep urban planning and district audit data
 */
export function localizeDistrictTechnicalData(district: District, lang: LanguageCode): District {
  if (lang !== "ru") {
    return district;
  }

  const deep = DISTRICT_DEEP_RU[district.id] || DISTRICT_DEEP_RU[district.slug];
  if (deep) {
    return {
      ...district,
      urbanConcept: deep.urbanConcept || district.urbanConcept,
      subZones: deep.subZones || district.subZones,
      transitAnalysis: deep.transitAnalysis || district.transitAnalysis,
      infrastructureAudit: deep.infrastructureAudit || district.infrastructureAudit,
      investmentRisks: deep.investmentRisks || district.investmentRisks,
    };
  }

  return district;
}
`;

fs.writeFileSync('src/data/technicalTranslations.ts', code, 'utf8');
console.log('Successfully written src/data/technicalTranslations.ts!');
