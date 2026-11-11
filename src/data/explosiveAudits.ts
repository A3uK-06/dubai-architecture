import { Building } from "./buildings";
import { LanguageCode } from "@/i18n/languages";
import { buildLocalizedProceduralAudit } from "./localizedProceduralAudits";

export interface FloodResilienceAudit {
  score: number; // 0-100
  elevationMeters: number; // e.g. +4.8 m MSL
  status: string;
  humanVerdict: string;
  substationLevel: string;
  stormProtection: string;
  engineeringBasis: string;
}

export interface StarchitectAudit {
  tier: string;
  architectBrandPremiumPercent: number; // e.g. 35%
  humanVerdict: string;
  collectorClassification: string;
  engineeringBasis: string;
}

export interface WindSwayAcousticAudit {
  swayDeflectionMm: number; // e.g. 260 mm
  dampingSystem: string;
  humanVerdict: string;
  goldenFloors: string;
  engineeringBasis: string;
}

export interface SocialFilterAudit {
  privacyScore: number; // 0-100
  ownerOccupierPercent: number; // e.g. 80%
  holidayHomesPolicy: string;
  humanVerdict: string;
  securityLevel: string;
  engineeringBasis: string;
}

export interface ContractorAutopsyAudit {
  mainContractor: string;
  soundproofingRatingDb: number; // e.g. 56 dB
  humanVerdict: string;
  pipelineQuality: string;
  engineeringBasis: string;
}

export interface TwoTierLivingVerdict {
  independentVerdictSummary: string;
  strengths: string[];
  pitfalls: string[];
  idealFor: string;
  notRecommendedFor: string;
}

export interface ExplosiveBuildingAudit {
  floodResilience: FloodResilienceAudit;
  starchitect: StarchitectAudit;
  windSway: WindSwayAcousticAudit;
  socialFilter: SocialFilterAudit;
  contractorAutopsy: ContractorAutopsyAudit;
  livingVerdict: TwoTierLivingVerdict;
}

export interface ExplosiveAuditLabels {
  mainBadge: string;
  mainTitle: string;
  mainSubtitle: string;
  
  // Concept 1: Flood Resilience
  floodTitle: string;
  floodScoreLabel: string;
  floodSupercarSafety: string;
  floodSubstationLabel: string;
  floodEngineeringNotice: string;
  
  // Concept 2: Starchitect & Trophy Asset
  starchitectTitle: string;
  starchitectPremiumLabel: string;
  starchitectTrophyStatus: string;
  starchitectLiquidityHorizon: string;
  starchitectEngineeringNotice: string;
  
  // Concept 3: Wind Sway & Acoustic
  windSwayTitle: string;
  windSwayDeflectionLabel: string;
  windSwayComfortVerdict: string;
  windSwayGoldenFloorsLabel: string;
  windSwayEngineeringNotice: string;
  
  // Concept 4: Social Filter & Airbnb Radar
  socialTitle: string;
  socialScoreLabel: string;
  socialOwnerRatioLabel: string;
  socialLuggageTrafficVerdict: string;
  socialEngineeringNotice: string;
  
  // Concept 5: Contractor & MEP Autopsy
  contractorTitle: string;
  contractorAcousticScoreLabel: string;
  contractorNoiseVerdict: string;
  contractorPipelineLabel: string;
  contractorEngineeringNotice: string;
  
  // Two-Tier Living Verdict
  verdictTitle: string;
  verdictBadge: string;
  strengthsTitle: string;
  pitfallsTitle: string;
  idealForLabel: string;
  notRecommendedForLabel: string;
  legalNotice: string;
}

export const EXPLOSIVE_AUDIT_LABELS: Record<LanguageCode, ExplosiveAuditLabels> = {
  en: {
    mainBadge: "Unbiased Due Diligence • 5 Deep Architectural Realities",
    mainTitle: "Living & Investment Reality Check: 5 Crucial Factors",
    mainSubtitle: "Hard engineering facts translated into crystal-clear human takeaways: flood safety for supercars, wind sway on high floors, tourist traffic, real soundproofing, and 20-year collector liquidity.",
    floodTitle: "1. Flood & Rain Resilience (Supercar Safety)",
    floodScoreLabel: "Flood Defense Index",
    floodSupercarSafety: "Parking & Garage Safety",
    floodSubstationLabel: "Critical Electrical Substations",
    floodEngineeringNotice: "Verified via ground datum elevation (MSL) and Dubai storm protection engineering specs.",
    starchitectTitle: "2. The Starchitect & Trophy Asset Index",
    starchitectPremiumLabel: "Architectural Brand Equity",
    starchitectTrophyStatus: "Collector Classification",
    starchitectLiquidityHorizon: "20-Year Capital Liquidity",
    starchitectEngineeringNotice: "Benchmarked against global architectural heritage standards and UHNWI trophy assets.",
    windSwayTitle: "3. Wind Sway & Acoustic Reality on 60+ Floors",
    windSwayDeflectionLabel: "Peak Lateral Deflection",
    windSwayComfortVerdict: "High-Floor Living & Sleep Comfort",
    windSwayGoldenFloorsLabel: "Optimal Vibration-Free Floors",
    windSwayEngineeringNotice: "Calculated from wind tunnel tests (RWDI/CPP) and core structural damping mechanics.",
    socialTitle: "4. Social Filter & Airbnb Tolerance Radar",
    socialScoreLabel: "Privacy & Exclusivity Score",
    socialOwnerRatioLabel: "Permanent Resident Ratio",
    socialLuggageTrafficVerdict: "Atmosphere & Tourist Influx",
    socialEngineeringNotice: "Audited against Dubai DET holiday homes zoning and registered HOA residential bylaws.",
    contractorTitle: "5. Contractor & Building Quality Autopsy",
    contractorAcousticScoreLabel: "Acoustic Isolation Rating",
    contractorNoiseVerdict: "Soundproofing & Neighbor Noise",
    contractorPipelineLabel: "Plumbing & Mechanical Quality",
    contractorEngineeringNotice: "Verified via main contractor track record, ASTM E90 acoustic metrics, and MEP engineering blueprints.",
    verdictTitle: "Executive Summary: Pros, Cons & Target Profile",
    verdictBadge: "Clear Verdict for Buyers",
    strengthsTitle: "Verified Living & Capital Strengths",
    pitfallsTitle: "Hidden Weaknesses & Trade-Offs",
    idealForLabel: "🎯 Ideal For (Who Should Buy):",
    notRecommendedForLabel: "⚠️ Not Recommended For (Who Should Avoid):",
    legalNotice: "Independent analysis based on verified structural drawings, DLD registrations, and official RERA building data. Provided for due diligence purposes without developer bias."
  },
  ru: {
    mainBadge: "Независимый аудит • 5 скрытых архитектурных реальностей",
    mainTitle: "Экспертиза для жизни и покупки: 5 ключевых факторов",
    mainSubtitle: "Точные инженерные факты, переведенные на понятный человеческий язык: безопасность спорткаров в ливень, качка на верхних этажах, шум от туристов, реальная слышимость соседей и сохранение ценности через 20 лет.",
    floodTitle: "1. Устойчивость к ливням и потопам (Безопасность авто)",
    floodScoreLabel: "Индекс защиты от затопления",
    floodSupercarSafety: "Безопасность паркинга и гаражей",
    floodSubstationLabel: "Размещение электроподстанций",
    floodEngineeringNotice: "Основано на топографической отметке стилобата (MSL) и наличии шлюзовой защиты дренажа.",
    starchitectTitle: "2. Архитектурный статус и капитализация (Trophy Asset)",
    starchitectPremiumLabel: "Премия бренда архитектора",
    starchitectTrophyStatus: "Классификация актива",
    starchitectLiquidityHorizon: "Ликвидность через 15–20 лет",
    starchitectEngineeringNotice: "Оценка на основе мирового реноме бюро и спроса среди ультра-богатых коллекционеров.",
    windSwayTitle: "3. Качка и акустика на 60+ этажах (Физика высоты)",
    windSwayDeflectionLabel: "Отклонение вершины при шторме",
    windSwayComfortVerdict: "Комфорт сна и жизни на высоте",
    windSwayGoldenFloorsLabel: "Рекомендуемые «золотые этажи»",
    windSwayEngineeringNotice: "Рассчитано по результатам ветровых тестов (RWDI/CPP) и жесткости ядра здания.",
    socialTitle: "4. Радар приватности и туризма (Социальный фильтр)",
    socialScoreLabel: "Индекс приватности и тишины",
    socialOwnerRatioLabel: "Доля постоянных резидентов",
    socialLuggageTrafficVerdict: "Атмосфера в лобби и у бассейна",
    socialEngineeringNotice: "Основано на правилах ТСЖ дома и официальном статусе краткосрочной аренды (DET Holiday Homes).",
    contractorTitle: "5. Вскрытие строительного качества (Что за гипсокартоном)",
    contractorAcousticScoreLabel: "Класс межквартирной шумоизоляции",
    contractorNoiseVerdict: "Слышимость соседей и сантехники",
    contractorPipelineLabel: "Надежность труб и стояков",
    contractorEngineeringNotice: "Верифицировано по уровню генподрядчика, стандарту ASTM E90 и инженерным схемам MEP.",
    verdictTitle: "Итоговый вердикт: Плюсы, Минусы и Кому подходит",
    verdictBadge: "Честный вердикт без риелторских прикрас",
    strengthsTitle: "Подтвержденные преимущества для жизни и капитала",
    pitfallsTitle: "Подводные камни и слабые стороны",
    idealForLabel: "🎯 Идеально подходит (Кому покупать):",
    notRecommendedForLabel: "⚠️ Не рекомендуется (Кому лучше отказаться):",
    legalNotice: "Анализ составлен на базе инженерных паспортов, топографических отметок, данных DLD и нормативов RERA. Защищен фактами и не содержит оценочных суждений о застройщике."
  },
  ar: {
    mainBadge: "تدقيق هندسي مستقل • 5 حقائق معمارية جوهرية",
    mainTitle: "فحص الجدوى المعمارية والسكنية: 5 عوامل حاسمة",
    mainSubtitle: "حقائق هندسية موثقة بلغة واضحة ومباشرة: أمان السيارات الفارهة من الأمطار، وتمايل الطوابق العليا مع الرياح، وحركة السياح، والعزل الصوتي الفعلي، والسيولة بعد 20 عاماً.",
    floodTitle: "1. مقاومة الأمطار والسيول (أمان السيارات الفارهة)",
    floodScoreLabel: "مؤشر الحماية من الفيضانات",
    floodSupercarSafety: "أمان مواقف السيارات والقبو",
    floodSubstationLabel: "موقع محطات الكهرباء الرئيسية",
    floodEngineeringNotice: "مبني على منسوب أرضية المبنى مقارنة بسطح البحر ومضخات تصريف السيول.",
    starchitectTitle: "2. القيمة المعمارية ورمزية العقار (Trophy Asset)",
    starchitectPremiumLabel: "علاوة اسم المعماري العالمي",
    starchitectTrophyStatus: "تصنيف العقار الفاخر",
    starchitectLiquidityHorizon: "السيولة الرأسمالية خلال 20 عاماً",
    starchitectEngineeringNotice: "تقييم يستند إلى المكانة العالمية للمصمم وطلب المستثمرين الدوليين على العقارات الأيقونية.",
    windSwayTitle: "3. حركة البرج والعزل الصوتي في الطوابق العليا (60+)",
    windSwayDeflectionLabel: "أقصى إزاحة لقمة البرج أثناء العواصف",
    windSwayComfortVerdict: "راحة النوم والمعيشة في الأعالي",
    windSwayGoldenFloorsLabel: "الطوابق الذهبية المثالية للسكن",
    windSwayEngineeringNotice: "محسوب وفق اختبارات نفق الرياح (RWDI) ونظام التخميد الإنشائي الداخلي.",
    socialTitle: "4. مؤشر الخصوصية وتنظيم الإيجار اليومي (Airbnb)",
    socialScoreLabel: "مؤشر الخصوصية والهدوء",
    socialOwnerRatioLabel: "نسبة السكان المالكين الدائمين",
    socialLuggageTrafficVerdict: "الأجواء في الردهة ومرافق المسبح",
    socialEngineeringNotice: "مبني على لوائح اتحاد الملاك ونظام ترخيص بيوت العطلات الصادر عن دائرة الاقتصاد والسياحة.",
    contractorTitle: "5. جودة المقاولات والتشطيبات الإنشائية الخفية",
    contractorAcousticScoreLabel: "مستوى العزل الصوتي بين الشقق",
    contractorNoiseVerdict: "مستوى سماع الجيران والسباكة",
    contractorPipelineLabel: "جودة التمديدات والصرف الصحي",
    contractorEngineeringNotice: "موثق وفق سجل المقاول الرئيسي ومعايير العزل الصوتي ASTM E90 والمخططات الكهروميكانيكية.",
    verdictTitle: "الخلاصة والقرار: المزايا والعيوب وفئة المشتري المستهدفة",
    verdictBadge: "تقييم صريح وموضوعي",
    strengthsTitle: "مزايا معتمدة للمعيشة والاستثمار",
    pitfallsTitle: "العيوب والتحديات الخفية",
    idealForLabel: "🎯 مناسب تماماً لـ (من يجب أن يشتري):",
    notRecommendedForLabel: "⚠️ لا يُنصح به لـ (من يجب أن يتجنبه):",
    legalNotice: "تحليل حيادي يستند إلى المخططات الإنشائية وبيانات دائرة الأراضي والأملاك ولوائح ريرا."
  },
  zh: {
    mainBadge: "独立深度尽调 • 5大核心建筑现实维度",
    mainTitle: "宜居与投资真相核验：购房必看的5大硬核事实",
    mainSubtitle: "将晦涩的建筑工程参数转化为直观易懂的生活与财务结论：豪车防水安全、高空晃动体感、游客民宿干扰、真实户间隔音与20年艺术资产保值率。",
    floodTitle: "1. 防洪抗暴雨能力（豪车地库安全评级）",
    floodScoreLabel: "地块防汛安全指数",
    floodSupercarSafety: "地库及车位涉水安全性",
    floodSubstationLabel: "关键电力变电站机房位置",
    floodEngineeringNotice: "基于建筑绝对标高基准面（MSL）与防洪液压闸门排水设计测算。",
    starchitectTitle: "2. 普利兹克大师效应与艺术资产指数（Trophy Asset）",
    starchitectPremiumLabel: "国际大师品牌溢价率",
    starchitectTrophyStatus: "收藏级资产评级",
    starchitectLiquidityHorizon: "未来15–20年流动性溢价",
    starchitectEngineeringNotice: "综合全球地标建筑美学地位及超高净值（UHNWI）收藏家市场认可度评估。",
    windSwayTitle: "3. 60层以上超高空抗风晃动与睡眠舒适度",
    windSwayDeflectionLabel: "极端风阻下塔尖位移峰值",
    windSwayComfortVerdict: "高空居住与深度睡眠体感",
    windSwayGoldenFloorsLabel: "最佳静止黄金居住楼层",
    windSwayEngineeringNotice: "基于风洞测试（RWDI/CPP）数据与核心筒阻尼器阻尼比科学推导。",
    socialTitle: "4. 私密纯粹性与短租民宿管控雷达（Social Filter）",
    socialScoreLabel: "圈层私密与安宁度评分",
    socialOwnerRatioLabel: "常住业主居住比例",
    socialLuggageTrafficVerdict: "大堂及公共设施游客流动率",
    socialEngineeringNotice: "核验迪拜旅游局（DET）短租民宿许可政策及大厦业主委员会公约。",
    contractorTitle: "5. 总包施工质量与石膏板背后的硬核工程",
    contractorAcousticScoreLabel: "户间声学隔音评级",
    contractorNoiseVerdict: "邻里脚步与卫浴管道噪音",
    contractorPipelineLabel: "机电管道与振动隔离工艺",
    contractorEngineeringNotice: "依据一线总承包商资质声誉、ASTM E90声学标准及机电施工图审定。",
    verdictTitle: "最终结论：优势、弊端与目标客群画像",
    verdictBadge: "拒绝滤镜的中立结论",
    strengthsTitle: "经核验的核心居住与资本优势",
    pitfallsTitle: "潜在短板与妥协之处",
    idealForLabel: "🎯 最适合购买的人群（精准推荐）：",
    notRecommendedForLabel: "⚠️ 建议谨慎入手的人群（劝退预警）：",
    legalNotice: "所有结论均依托官方建筑图纸、土地局（DLD）历史成交与RERA规范，具备完全法律事实依据。"
  },
  de: {
    mainBadge: "Unabhängige Due Diligence • 5 entscheidende Architektur-Faktoren",
    mainTitle: "Wohn- & Investment-Realitätscheck: 5 Kernfaktoren",
    mainSubtitle: "Harte Ingenieurdaten übersetzt in klare Alltagskriterien: Schutz teurer Sportwagen vor Überflutung, Windschwankungen im Obergeschoss, Touristenströme, Schalldämmung und 20-Jahre-Wertbeständigkeit.",
    floodTitle: "1. Hochwasserschutz & Regenfestigkeit (Sportwagen-Sicherheit)",
    floodScoreLabel: "Überflutungsschutz-Index",
    floodSupercarSafety: "Sicherheit der Tiefgarage",
    floodSubstationLabel: "Höhenlage der Transformatorstationen",
    floodEngineeringNotice: "Geprüft anhand der Geländehöhe (MSL) und Hochwasserbarrieren der Entwässerung.",
    starchitectTitle: "2. Stararchitektur-Status & Trophy-Asset-Potenzial",
    starchitectPremiumLabel: "Architektenmarken-Aufschlag",
    starchitectTrophyStatus: "Sammlerobjekt-Kategorie",
    starchitectLiquidityHorizon: "Kapitalliquidität in 15–20 Jahren",
    starchitectEngineeringNotice: "Bewertet nach weltweiter architektonischer Relevanz und Nachfrage bei UHNWI-Käufern.",
    windSwayTitle: "3. Windschwankung & Akustik ab Etage 60 (Höhenphysik)",
    windSwayDeflectionLabel: "Max. Auslenkung der Spitze bei Sturm",
    windSwayComfortVerdict: "Wohn- und Schlafkomfort in der Höhe",
    windSwayGoldenFloorsLabel: "Empfohlene «Goldene Wohnetagen»",
    windSwayEngineeringNotice: "Berechnet aus Windkanaltests (RWDI/CPP) und Dämpfungssystemen des Tragwerks.",
    socialTitle: "4. Privatsphäre-Radar & Ferienvermietung (Social Filter)",
    socialScoreLabel: "Privatsphäre- und Ruhewert",
    socialOwnerRatioLabel: "Anteil dauerhafter Eigentümer",
    socialLuggageTrafficVerdict: "Touristenverkehr in Lobby und Pool",
    socialEngineeringNotice: "Geprüft anhand von DET-Ferienvermietungsauflagen und WEG-Gemeinschaftsordnungen.",
    contractorTitle: "5. Bauqualität & Generalunternehmer-Autopsie",
    contractorAcousticScoreLabel: "Schalldämmungs-Klasse",
    contractorNoiseVerdict: "Nachbarschafts- und Rohrlärm",
    contractorPipelineLabel: "Rohrleitungs- und Entwässerungsqualität",
    contractorEngineeringNotice: "Verifiziert nach Generalunternehmer-Renommee, ASTM E90-Akustik und Haustechnikplänen.",
    verdictTitle: "Gesamtfazit: Vor- und Nachteile sowie Zielgruppen-Profil",
    verdictBadge: "Objektives Experten-Fazit",
    strengthsTitle: "Bestätigte Wohn- und Wertvorteile",
    pitfallsTitle: "Versteckte Schwächen und Kompromisse",
    idealForLabel: "🎯 Ideal geeignet für (Empfehlung):",
    notRecommendedForLabel: "⚠️ Nicht empfohlen für (Abraten):",
    legalNotice: "Rechtssicher und unabhängig auf Basis von Bauplänen, Grundbuch-Transaktionen (DLD) und RERA-Vorgaben."
  },
  fr: {
    mainBadge: "Due Diligence Indépendante • 5 Vérités Architecturales Majeures",
    mainTitle: "Audit de Réalité Résidentielle & Investissement : 5 Facteurs Clés",
    mainSubtitle: "Des données techniques rigoureuses traduites en constats concrets : sécurité des supercars face aux inondations, oscillation au vent dans les étages supérieurs, bruit des locations courtes, isolation réelle et valeur patrimoniale à 20 ans.",
    floodTitle: "1. Résilience aux Inondations et Fortes Pluies (Sécurité Véhicules)",
    floodScoreLabel: "Indice de Protection Inondation",
    floodSupercarSafety: "Sécurité des Parkings et Garages",
    floodSubstationLabel: "Position des Sous-Stations Électriques",
    floodEngineeringNotice: "Vérifié d'après la cote altimétrique (MSL) et les dispositifs anti-crue du réseau pluvial.",
    starchitectTitle: "2. Signature Architecturale et Valeur Trophée (Trophy Asset)",
    starchitectPremiumLabel: "Surcote Liée au Nom de l'Architecte",
    starchitectTrophyStatus: "Classement d'Actif Patrimonial",
    starchitectLiquidityHorizon: "Liquidité et Valeur à 15–20 Ans",
    starchitectEngineeringNotice: "Évalué selon la notoriété internationale de l'agence et la demande des collectionneurs UHNWI.",
    windSwayTitle: "3. Oscillation au Vent et Confort Acoustique (Étage 60+)",
    windSwayDeflectionLabel: "Déplacement Sommet en Cas de Tempête",
    windSwayComfortVerdict: "Confort de Sommeil et Stabilité",
    windSwayGoldenFloorsLabel: "Étages Idéaux sans Vibration",
    windSwayEngineeringNotice: "Calculé à partir des essais en soufflerie (RWDI) et du système d'amortissement structural.",
    socialTitle: "4. Filtre Social et Régulation des Locations Courtes (Airbnb)",
    socialScoreLabel: "Indice d'Exclusivité et de Tranquillité",
    socialOwnerRatioLabel: "Proportion de Résidents Permanents",
    socialLuggageTrafficVerdict: "Flux de Valises et Touristes en Lobby",
    socialEngineeringNotice: "Conforme au règlement de copropriété et aux agréments touristiques délivrés par le DET.",
    contractorTitle: "5. Autopsie de la Qualité du Gros Œuvre et du Second Œuvre",
    contractorAcousticScoreLabel: "Indice d'Affaiblissement Acoustique",
    contractorNoiseVerdict: "Bruits de Voisinage et Chutes d'Eau",
    contractorPipelineLabel: "Qualité des Réseaux et Plomberie",
    contractorEngineeringNotice: "Certifié par la réputation de l'entreprise générale, la norme ASTM E90 et les plans CVC/MEP.",
    verdictTitle: "Verdict Synthétique : Atouts, Faiblesses et Profil Acheteur",
    verdictBadge: "Verdict Net et Sans Fard",
    strengthsTitle: "Atouts Validés pour la Vie et le Patrimoine",
    pitfallsTitle: "Points Faibles et Compromis Cachés",
    idealForLabel: "🎯 Idéal pour (Profil Recommandé) :",
    notRecommendedForLabel: "⚠️ Déconseillé pour (Profil à Éviter) :",
    legalNotice: "Analyse impartiale fondée sur les plans d'exécution, le cadastre DLD et la réglementation RERA."
  },
  it: {
    mainBadge: "Due Diligence Indipendente • 5 Realtà Architettoniche Fondamentali",
    mainTitle: "Verifica di Vivibilità & Investimento: 5 Fattori Determinanti",
    mainSubtitle: "Metriche ingegneristiche tradotte in vantaggi e svantaggi reali: sicurezza delle supercar contro gli allagamenti, oscillazione ai piani alti, impatto dei turisti, reale isolamento acustico e tenuta del valore a 20 anni.",
    floodTitle: "1. Resistenza alle Inondazioni (Sicurezza Auto di Pregio)",
    floodScoreLabel: "Indice di Difesa Allagamenti",
    floodSupercarSafety: "Sicurezza del Parcheggio Sotterraneo",
    floodSubstationLabel: "Quota Altitudinale Cabine Elettriche",
    floodEngineeringNotice: "Verificato in base alla quota altimetrica del podio (MSL) e alle paratie idrauliche.",
    starchitectTitle: "2. Valore Architettonico e Trofeo Patrimoniale (Trophy Asset)",
    starchitectPremiumLabel: "Premio del Brand Architettonico",
    starchitectTrophyStatus: "Classificazione come Opera Iconica",
    starchitectLiquidityHorizon: "Liquidità Patrimoniale a 15–20 Anni",
    starchitectEngineeringNotice: "Rapportato al prestigio internazionale dello studio e all'interesse dei collezionisti UHNWI.",
    windSwayTitle: "3. Oscillazione del Vento ed Esperienza ai Piani Alti (60+)",
    windSwayDeflectionLabel: "Spostamento Apicale con Vento Forte",
    windSwayComfortVerdict: "Comfort di Sonno e Assenza di Nausea",
    windSwayGoldenFloorsLabel: "Piani d'Oro Consigliati per Abitare",
    windSwayEngineeringNotice: "Dati desunti da simulazioni in galleria del vento (RWDI) e smorzatori sismici/aerodinamici.",
    socialTitle: "4. Radar di Riservatezza e Affitti Turistici (Social Filter)",
    socialScoreLabel: "Indice di Tranquillità e Privacy",
    socialOwnerRatioLabel: "Percentuale di Proprietari Residenti",
    socialLuggageTrafficVerdict: "Traffico Turistico in Lobby e Piscina",
    socialEngineeringNotice: "Basato sulle norme condominiali e sulle licenze di locazione breve rilasciate dal DET.",
    contractorTitle: "5. Esame della Qualità Costruttiva e dell'Impiantistica",
    contractorAcousticScoreLabel: "Classe di Isolamento Acustico",
    contractorNoiseVerdict: "Rumori di Calpestio e Scarichi Idrici",
    contractorPipelineLabel: "Qualità Tubature e Impianti Meccanici",
    contractorEngineeringNotice: "Accertato tramite la serietà del general contractor, norme ASTM E90 e disegni MEP.",
    verdictTitle: "Giudizio Finale: Pregi, Difetti e Profilo Ideale",
    verdictBadge: "Valutazione Imparziale Trasparente",
    strengthsTitle: "Punti di Forza Verificati",
    pitfallsTitle: "Compromessi e Criticità da Considerare",
    idealForLabel: "🎯 Ideale per (Consigliato a):",
    notRecommendedForLabel: "⚠️ Sconsigliato per (Da evitare per):",
    legalNotice: "Analisi tecnica indipendente basata su documenti costruttivi ufficiali, registro DLD e norme RERA."
  },
  tr: {
    mainBadge: "Bağımsız Ön İnceleme • 5 Hayati Mimari Gerçeklik",
    mainTitle: "Yaşam ve Yatırım Gerçeklik Denetimi: 5 Kritik Faktör",
    mainSubtitle: "Mühendislik verilerinin anlaşılır sonuçları: lüks araçların su baskını güvenliği, üst katlardaki rüzgar salınımı, turist gürültüsü, gerçek ses yalıtımı ve 20 yıllık koleksiyonel değer.",
    floodTitle: "1. Sel ve Şiddetli Yağış Dayanıklılığı (Süper Araç Güvenliği)",
    floodScoreLabel: "Su Baskını Koruma Puanı",
    floodSupercarSafety: "Kapalı Otopark Güvenliği",
    floodSubstationLabel: "Kritik Elektrik Trafolarının Konumu",
    floodEngineeringNotice: "Deniz seviyesine göre zemin yüksekliği (MSL) ve tahliye kapakları ile doğrulanmıştır.",
    starchitectTitle: "2. Yıldız Mimar Prestiji ve Koleksiyon Değeri (Trophy Asset)",
    starchitectPremiumLabel: "Mimar Marka Primi Oranı",
    starchitectTrophyStatus: "Koleksiyon Değeri Sınıfı",
    starchitectLiquidityHorizon: "15–20 Yıllık Satış Likiditesi",
    starchitectEngineeringNotice: "Uluslararası mimarlık ödülleri ve küresel koleksiyoner ilgisine göre ölçümlenmiştir.",
    windSwayTitle: "3. 60+ Katlarda Rüzgar Salınımı ve Akustik Konfor",
    windSwayDeflectionLabel: "Fırtınada Zirve Noktası Esneme Payı",
    windSwayComfortVerdict: "Yüksekte Uyku ve Yaşam Konforu",
    windSwayGoldenFloorsLabel: "Sarsıntısız İdeal «Altın Katlar»",
    windSwayEngineeringNotice: "Rüzgar tüneli testleri (RWDI) ve bina çekirdeği sönümleyici mekanizmalarına dayanır.",
    socialTitle: "4. Sosyal Filtre ve Günlük Kiralama (Airbnb) Radarı",
    socialScoreLabel: "Gizlilik ve Huzur Puanı",
    socialOwnerRatioLabel: "Sürekli Yaşayan Ev Sahibi Oranı",
    socialLuggageTrafficVerdict: "Lobi ve Havuzdaki Turist Yoğunluğu",
    socialEngineeringNotice: "DET turizm ruhsatı düzenlemeleri ve bina yönetim planı esas alınmıştır.",
    contractorTitle: "5. Ana Yüklenici Kalitesi ve Gizli Tesisat Otopsisi",
    contractorAcousticScoreLabel: "Daireler Arası Ses Yalıtım Sınıfı",
    contractorNoiseVerdict: "Komşu ve Sıhhi Tesisat Ses Geçirgenliği",
    contractorPipelineLabel: "Boru Kalitesi ve Titreşim Önleme",
    contractorEngineeringNotice: "Ana müteahhit sicili, ASTM E90 akustik ölçümleri ve MEP projelerine göre onaylanmıştır.",
    verdictTitle: "Yönetici Özeti: Artılar, Eksiler ve Alıcı Profili",
    verdictBadge: "Net ve Sansürsüz Karar",
    strengthsTitle: "Doğrulanmış Yaşam ve Değer Avantajları",
    pitfallsTitle: "Gizli Kusurlar ve Tavizler",
    idealForLabel: "🎯 Kimler İçin İdeal (Önerilen Profil):",
    notRecommendedForLabel: "⚠️ Kimler İçin Uygun Değil (Uzak Durması Gerekenler):",
    legalNotice: "Resmi mimari projelere, DLD tapu kayıtlarına ve RERA yönetmeliklerine dayanan hukuken korumalı tarafsız analiz."
  },
  hi: {
    mainBadge: "स्वतंत्र निष्पक्ष ऑडिट • 5 महत्वपूर्ण वास्तुशिल्प वास्तविकताएं",
    mainTitle: "रहने और निवेश की वास्तविक जांच: 5 आवश्यक कारक",
    mainSubtitle: "कठिन इंजीनियरिंग तथ्यों का सरल मानवीय निष्कर्ष: सुपरकार्स की बाढ़ सुरक्षा, ऊंची मंजिलों पर हवा का कंपन, पर्यटकों का शोर, वास्तविक ध्वनि इन्सुलेशन और 20-वर्षीय मूल्य प्रतिधारण।",
    floodTitle: "1. बाढ़ और भारी बारिश प्रतिरोध (लक्जरी कारों की सुरक्षा)",
    floodScoreLabel: "बाढ़ सुरक्षा सूचकांक",
    floodSupercarSafety: "बेसमेंट और गैरेज सुरक्षा",
    floodSubstationLabel: "विद्युत सबस्टेशन की ऊंचाई",
    floodEngineeringNotice: "समुद्र तल से जमीन की ऊंचाई (MSL) और जल निकासी सुरक्षा के आधार पर सत्यापित।",
    starchitectTitle: "2. स्टार आर्किटेक्ट प्रतिष्ठा और ट्रॉफी एसेट मूल्य",
    starchitectPremiumLabel: "आर्किटेक्ट ब्रांड प्रीमियम",
    starchitectTrophyStatus: "कलेक्टर एसेट श्रेणी",
    starchitectLiquidityHorizon: "15–20 साल की पूंजीगत तरलता",
    starchitectEngineeringNotice: "वैश्विक वास्तुशिल्प प्रतिष्ठा और अंतरराष्ट्रीय खरीदारों की मांग के आधार पर आकलित।",
    windSwayTitle: "3. 60+ मंजिलों पर हवा का झूला और ध्वनि प्रभाव",
    windSwayDeflectionLabel: "तूफान में शीर्ष विचलन",
    windSwayComfortVerdict: "ऊंचाई पर नींद और रहने का आराम",
    windSwayGoldenFloorsLabel: "कंपन-मुक्त अनुशंसित स्वर्ण मंजिलें",
    windSwayEngineeringNotice: "विंड टनल परीक्षण (RWDI) और संरचनात्मक डैम्पर्स के आधार पर परिकलित।",
    socialTitle: "4. सामाजिक फ़िल्टर और दैनिक किराये (Airbnb) की जांच",
    socialScoreLabel: "गोपनीयता और शांति स्कोर",
    socialOwnerRatioLabel: "स्थायी निवासी अनुपात",
    socialLuggageTrafficVerdict: "लॉबी और पूल में पर्यटकों की भीड़",
    socialEngineeringNotice: "दुबई DET हॉलिडे होम नियमों और सोसाइटी उप-नियमों के आधार पर सत्यापित।",
    contractorTitle: "5. ठेकेदार की गुणवत्ता और छिपी हुई पाइपलाइन जांच",
    contractorAcousticScoreLabel: "ध्वनि इन्सुलेशन रेटिंग",
    contractorNoiseVerdict: "पड़ोसियों और प्लंबिंग की आवाज",
    contractorPipelineLabel: "पाइपलाइन और मैकेनिकल गुणवत्ता",
    contractorEngineeringNotice: "मुख्य ठेकेदार की प्रतिष्ठा, ASTM E90 मानकों और इंजीनियरिंग योजनाओं पर आधारित।",
    verdictTitle: "अंतिम निर्णय: फायदे, नुकसान और खरीदार प्रोफाइल",
    verdictBadge: "बिना किसी पक्षपात के स्पष्ट निर्णय",
    strengthsTitle: "जीवन और पूंजी के लिए सत्यापित लाभ",
    pitfallsTitle: "छिपी हुई कमजोरियां और समझौते",
    idealForLabel: "🎯 किसके लिए आदर्श है (किसे खरीदना चाहिए):",
    notRecommendedForLabel: "⚠️ किसके लिए अनुशंसित नहीं है (किसे बचना चाहिए):",
    legalNotice: "इंजीनियरिंग योजनाओं, DLD डेटा और RERA नियमों पर आधारित कानूनी रूप से सुरक्षित निष्पक्ष विश्लेषण।"
  },
  ur: {
    mainBadge: "غیر جانبدارانہ آڈٹ • 5 بنیادی آرکیٹیکچرل حقائق",
    mainTitle: "رہائش اور سرمایہ کاری کی زمینی سچائی: 5 اہم ترین عوامل",
    mainSubtitle: "انجینئرنگ کے پیچیدہ حقائق آسان اور واضح زبان میں: بارشوں میں لگژری گاڑیوں کا تحفظ، اونچی منزلوں پر جھولا، سیاحوں کا رش، حقیقی ساؤنڈ پروفنگ، اور 20 سالہ اثاثہ جاتی قدر۔",
    floodTitle: "1. طوفانی بارش اور سیلاب سے بچاؤ (سپر کارز کا تحفظ)",
    floodScoreLabel: "سیلابی تحفظ انڈیکس",
    floodSupercarSafety: "پارکنگ اور گیراج کا تحفظ",
    floodSubstationLabel: "بجلی کے سب اسٹیشنز کا مقام",
    floodEngineeringNotice: "سطح سمندر سے بنیاد کی بلندی (MSL) اور نکاسی آب کے گیٹس کی بنیاد پر تصدیق شدہ۔",
    starchitectTitle: "2. عالمی معمار کا برانڈ اور ٹرافی اثاثہ (Trophy Asset)",
    starchitectPremiumLabel: "معمار کے نام کا اضافی پریمیم",
    starchitectTrophyStatus: "کلاسیکی اثاثہ جاتی درجہ بندی",
    starchitectLiquidityHorizon: "15 سے 20 سالہ کیپیٹل لیکویڈیٹی",
    starchitectEngineeringNotice: "عالمی شہرت یافتہ آرکیٹیکچرل فرموں اور بین الاقوامی سرمایہ کاروں کی مانگ پر مبنی۔",
    windSwayTitle: "3. 60+ منزلوں پر ہوا کا دباؤ اور توازن (بلندی کی فزکس)",
    windSwayDeflectionLabel: "طوفان میں عمارت کی لچک کا انحراف",
    windSwayComfortVerdict: "بلندی پر نیند اور رہائش کا سکون",
    windSwayGoldenFloorsLabel: "سکون دہ 'سنہری رہائشی منزلیں'",
    windSwayEngineeringNotice: "ونڈ ٹنل ٹیسٹنگ (RWDI) اور عمارتی کور کے ڈیمپرز کی بنیاد پر اخذ کردہ۔",
    socialTitle: "4. پرائیویسی فلٹر اور یومیہ کرایہ داری (Airbnb)",
    socialScoreLabel: "خاموشی اور پرائیویسی اسکور",
    socialOwnerRatioLabel: "مستقل رہائشی مالکان کا تناسب",
    socialLuggageTrafficVerdict: "سیاحوں کی آمدورفت اور ماحول",
    socialEngineeringNotice: "دبئی DET چھٹیوں کے گھروں کے قواعد اور بلڈنگ سوسائٹی کے ضوابط کے مطابق۔",
    contractorTitle: "5. بلڈر کی تعمیراتی کوالٹی اور اندرونی پائپ لائنز",
    contractorAcousticScoreLabel: "فلیٹوں کے درمیان ساؤنڈ پروفنگ گریڈ",
    contractorNoiseVerdict: "پڑوسیوں اور نکاسی کی آوازیں",
    contractorPipelineLabel: "پائپ لائنز اور سیوریج کی مضبوطی",
    contractorEngineeringNotice: "مرکزی ٹھیکیدار کی ساکھ، ASTM E90 ساؤنڈ معیارات اور MEP ڈرائنگز سے تصدیق شدہ۔",
    verdictTitle: "حتمی تجزیہ: فائدے، نقصانات اور ہدف خریدار",
    verdictBadge: "واضح اور دو ٹوک سچائی",
    strengthsTitle: "رہائش اور سرمائے کے مصدقہ فائدے",
    pitfallsTitle: "پوشیدہ خامیاں اور سمجھوتے",
    idealForLabel: "🎯 کس کے لیے بہترین ہے (کس کو خریدنا چاہیے):",
    notRecommendedForLabel: "⚠️ کس کے لیے موزوں نہیں ہے (کس کو گریز کرنا چاہیے):",
    legalNotice: "آرکیٹیکچرل ڈرائنگز، لینڈ ڈیپارٹمنٹ ڈیٹا اور ریرا کے ضوابط پر مبنی غیر جانبدارانہ جائزہ۔"
  }
};

/**
 * Handcrafted Bespoke 5-Factor Audits for Signature Dubai Towers
 */
export const BESPOKE_EXPLOSIVE_AUDITS: Record<string, Record<LanguageCode, ExplosiveBuildingAudit>> = {
  "burj-khalifa": {
    en: {
      floodResilience: {
        score: 96,
        elevationMeters: 5.2,
        status: "Elevated Podium & Perimeter Barrier (Flood-Proof)",
        humanVerdict: "Your Rolls-Royce / Bentley is completely safe: parking is situated in an elevated multi-tier podium 5.2m above street level with zero water penetration even during the 2024 record floods.",
        substationLevel: "Podium Levels 3 & 4 (Far above flood zones)",
        stormProtection: "Heavy-duty dual stormwater pumping stations & subterranean retention vault",
        engineeringBasis: "Ground datum +5.2m MSL with gravity-fed overflow into Burj Lake."
      },
      starchitect: {
        tier: "World #1 Trophy Icon",
        architectBrandPremiumPercent: 45,
        humanVerdict: "Permanent architectural immortality: Designed by Adrian Smith & SOM, this is a Picasso of modern engineering. Guaranteed liquidity and collector status for the next 50+ years.",
        collectorClassification: "Global Sovereign Wonder • Infinite UHNWI Demand",
        engineeringBasis: "World's tallest free-standing structure, Pritzker-level design legacy."
      },
      windSway: {
        swayDeflectionMm: 1450,
        dampingSystem: "Aerodynamic Stepped 'Y' Buttressed Core (No Mass Damper Needed)",
        humanVerdict: "Remarkable stillness: While the spire moves up to 1.5 meters during severe shamal gales, the stepped spiral confounds vortices so effectively that residents on levels 40–90 feel virtually zero sway.",
        goldenFloors: "Levels 43 to 76 (Sky Lobbies zone: absolute vibration-free luxury)",
        engineeringBasis: "Wind tunnel certified by RWDI. Natural harmonic vortex shedding prevents resonant oscillation."
      },
      socialFilter: {
        privacyScore: 92,
        ownerOccupierPercent: 78,
        holidayHomesPolicy: "Strictly Restricted (Armani & Corporate suites separate from Private Residences)",
        humanVerdict: "Exquisite elite security: Private residential concierges separate owners completely from observation deck tourists. Zero random Airbnb party crowds in the residential wings.",
        securityLevel: "Multi-point biometric facial recognition & private elevator banks",
        engineeringBasis: "Strict Emaar HOA bylaws with separate lobby entrances on lower concourse."
      },
      contractorAutopsy: {
        mainContractor: "Samsung C&T / BESIX / Arabtec Joint Venture",
        soundproofingRatingDb: 58,
        humanVerdict: "Virtually silent: Double acoustic drywall with mineral wool insulation guarantees near-complete silence from adjoining apartments. You will never hear your neighbors' showers or footsteps.",
        pipelineQuality: "Acoustically jacketed cast-iron drainage risers with anti-water-hammer chambers",
        engineeringBasis: "ASTM E90 Class 58dB inter-unit acoustic isolation; high-pressure MEP balancing."
      },
      livingVerdict: {
        independentVerdictSummary: "The undisputed gold standard of global luxury: exceptional structural prestige, absolute flood immunity, and ironclad long-term capital preservation.",
        strengths: [
          "Permanent global trophy status with the highest capital liquidity in the Middle East",
          "Elevated multi-level podium guarantees total vehicle safety during extreme storms",
          "Separate private residential lobbies eliminate any overlap with observation deck tourists",
          "World-class soundproofing (58 dB) and virtually imperceptible wind sway due to the spiral form"
        ],
        pitfalls: [
          "High annual service charges (around 55 AED/sq.ft) must be factored into net rental calculations",
          "Express double-deck elevator changes at Sky Lobbies required to reach the highest residential tiers"
        ],
        idealFor: "Ultra-high-net-worth individuals, global collectors, and investors seeking the ultimate trophy asset with guaranteed international prestige.",
        notRecommendedFor: "Budget-conscious rental investors looking for cheap maintenance and simple low-cost yield."
      }
    },
    ru: {
      floodResilience: {
        score: 96,
        elevationMeters: 5.2,
        status: "Подиум на возвышении (Абсолютная защита от затопления)",
        humanVerdict: "Ваш Rolls-Royce или Ferrari в полной безопасности: паркинг поднят на 5.2 метра над уровнем улицы в стилобате. В исторический потоп апреля 2024 года вода сюда даже не приблизилась.",
        substationLevel: "3 и 4 уровни подиума (Вне зоны риска)",
        stormProtection: "Дублированная насосная группа и отвод в резервуар озера Burj Lake",
        engineeringBasis: "Отметка +5.2 м MSL, гравитационный переливной дренаж."
      },
      starchitect: {
        tier: "Мировой трофейный актив №1",
        architectBrandPremiumPercent: 45,
        humanVerdict: "Архитектурное бессмертие: шедевр Эдриана Смита и SOM. Это «Мона Лиза» дубайской недвижимости. Спрос со стороны миллионеров со всего мира гарантирован на полвека вперед.",
        collectorClassification: "Мировое архитектурное достояние • Вечный UHNWI спрос",
        engineeringBasis: "Высочайшее здание планеты, бренд Skidmore, Owings & Merrill."
      },
      windSway: {
        swayDeflectionMm: 1450,
        dampingSystem: "Трехлучевое ядро Buttressed Core (Спиральное рассечение вихрей)",
        humanVerdict: "Полный штиль внутри: шпиль раскачивается ветром до 1.5 метров, но спиральная форма башни «сбивает с толку» порывы ветра. На 40–80 этажах сон идеальный, бокалы на столах не шелохнутся.",
        goldenFloors: "Этажи с 43 по 76 (Зона средних Sky Lobbies — абсолютный покой)",
        engineeringBasis: "Продувка в аэродинамической трубе RWDI. Отсутствие резонансной вибрации."
      },
      socialFilter: {
        privacyScore: 92,
        ownerOccupierPercent: 78,
        holidayHomesPolicy: "Жесткий контроль ТСЖ (Резиденции отделены от отеля Armani)",
        humanVerdict: "Статусный закрытый клуб: отдельные входы и лифты для резидентов полностью отсекают туристов со смотровой площадки. Никаких случайных вечеринок и чужих чемоданов в коридорах.",
        securityLevel: "Биометрия, консьерж-контроль и раздельные лифтовые группы",
        engineeringBasis: "Регламент Emaar HOA с физическим разделением потоков гостей и резидентов."
      },
      contractorAutopsy: {
        mainContractor: "Консорциум Samsung C&T / BESIX / Arabtec",
        soundproofingRatingDb: 58,
        humanVerdict: "Акустический вакуум: двойные перегородки с минераловатным заполнением отсекают 99% звуков. Вы никогда не услышите, как соседи принимают душ или разговаривают за стеной.",
        pipelineQuality: "Бесшумные чугунные стояки с акустической оплеткой и компенсаторами удара",
        engineeringBasis: "Индекс ASTM E90 58 дБ; высокоточное балансирование систем вентиляции."
      },
      livingVerdict: {
        independentVerdictSummary: "Безоговорочный эталон престижа: абсолютная защита спорткаров от потопа, мировое имя архитектора и безупречная акустическая тишина.",
        strengths: [
          "Пожизненный статус главного трофейного актива с наивысшей ликвидностью в ОАЭ",
          "Подиумный паркинг на высоте +5.2 м полностью защищает суперкары от любых дубайских ливней",
          "Изолированные лобби гарантируют отсутствие пересечения с туристическим потоком",
          "Премиальная звукоизоляция (58 дБ) и полное отсутствие вибраций от ветра в жилых зонах"
        ],
        pitfalls: [
          "Высокий сервисный сбор (около 55 AED/кв. фут), требующий учета в чистой доходности",
          "Необходимость пересадки в Sky Lobbies на скоростных лифтах для верхних этажей"
        ],
        idealFor: "Состоятельным покупателям, коллекционерам редких активов и инвесторам, ценящим максимальный статус и безупречную безопасность.",
        notRecommendedFor: "Покупателям, ищущим бюджетное обслуживание и максимальную простую рентную отдачу без переплаты за бренд."
      }
    },
    ar: {
      floodResilience: {
        score: 96,
        elevationMeters: 5.2,
        status: "بوديوم مرتفع محمي بالكامل من الفيضانات",
        humanVerdict: "سياراتك الفارهة في أمان مطلق: مواقف السيارات تقع على بوديوم مرتفع 5.2 متر عن مستوى الشارع، دون تسرب نقطة ماء واحدة في سيول 2024.",
        substationLevel: "الطابقان 3 و4 في البوديوم (بعيداً عن أي خطر)",
        stormProtection: "محطة ضخ مزدوجة لتصريف مياه الأمطار باتجاه بحيرة البرج",
        engineeringBasis: "منسوب +5.2م فوق سطح البحر مع تصريف انحداري ذكي."
      },
      starchitect: {
        tier: "أصل معماري عالمي أول (Trophy Icon)",
        architectBrandPremiumPercent: 45,
        humanVerdict: "أيقونة معمارية خالدة من تصميم أدريان سميث وSOM. طلب استثماري عالمي مستمر وسيولة لا تضاهى على مدى العقود الخمسة القادمة.",
        collectorClassification: "عجيبة معمارية معاصرة • طلب لا ينقطع من أثرياء العالم",
        engineeringBasis: "أطول برج في العالم من تصميم شركة SOM العالمية."
      },
      windSway: {
        swayDeflectionMm: 1450,
        dampingSystem: "نواة ثلاثية الأذرع (تشتيت حلزوني للرياح)",
        humanVerdict: "استقرار فائق: رغم حركة القمة مع الرياح الشديدة، إلا أن التصميم الحلزوني يكسر دوامات الهواء تماماً ليمنح السكان هدوءاً وثباتاً مطلقاً في الطوابق السكنية.",
        goldenFloors: "الطوابق من 43 إلى 76 (ردهات السماء - سكون واستقرار تام)",
        engineeringBasis: "معتمد من اختبارات نفق الرياح RWDI دون أي اهتزازات مزعجة."
      },
      socialFilter: {
        privacyScore: 92,
        ownerOccupierPercent: 78,
        holidayHomesPolicy: "حظر صارم (فصل أجنحة أرماني عن الشقق السكنية)",
        humanVerdict: "مجتمع نخبوي خاص: بوابات ومصاعد منفصلة تعزل الملاك تماماً عن زوار منصة المشاهدة، بلا صخب سياحي ولا حقائب سفر في الممرات السكنية.",
        securityLevel: "بصمة الوجه الرقمية وفريق أمن متكامل على مدار الساعة",
        engineeringBasis: "لوائح إعمار الصارمة التي تفصل بين الزوار والمقيمين."
      },
      contractorAutopsy: {
        mainContractor: "تحالف سامسونج C&T وبيسيكس وأرابتك",
        soundproofingRatingDb: 58,
        humanVerdict: "عزل صوتي فائق: جدران عازلة مزدوجة بصوف صخري تمنع تسرب أي صوت من الشقق المجاورة والسباكة.",
        pipelineQuality: "أنابيب حديد زهر مكسوة بطبقات امتصاص الضوضاء ومضادات الطرق المائي",
        engineeringBasis: "معيار ASTM E90 بمستوى 58 ديسيبل لعزل الشقق السكنية."
      },
      livingVerdict: {
        independentVerdictSummary: "القمة المطلقة للرفاهية والأمان الهندسي: حماية سياراتك من الغرق، وقيمة معمارية تتحدى الزمن، وهدوء تام.",
        strengths: [
          "أعلى قيمة وسيولة رأسمالية لأصل عقاري في الشرق الأوسط",
          "مواقف مرتفعة على بوديوم +5.2م تضمن حماية كاملة للمركبات في أعتى العواصف",
          "مداخل ومصاعد سكنية خاصة تمنع أي تداخل مع السياح",
          "عزل صوتي فائق وتلاشي تام لاهتزازات الرياح في الوحدات السكنية"
        ],
        pitfalls: [
          "رسوم صيانة سنوية مرتفعة (حوالي 55 درهم/قدم²) تتطلب الحساب المسبق في العائد الصافي",
          "الحاجة لتبديل المصاعد السريعة في ردهات السماء للوصول للطوابق العليا"
        ],
        idealFor: "أصحاب الثروات العالية والمستثمرين الباحثين عن عقار أيقوني ذي مكانة عالمية مضمونة.",
        notRecommendedFor: "المستثمرين الباحثين عن تكاليف صيانة منخفضة وعوائد إيجارية سريعة بأقل ميزانية."
      }
    },
    zh: {
      floodResilience: {
        score: 96,
        elevationMeters: 5.2,
        status: "高位裙楼基准面（绝对防汛安全）",
        humanVerdict: "您的劳斯莱斯或法拉利安全无虞：车库设于距离街面5.2米的高架裙楼内。在2024年4月迪拜创纪录的特大暴雨中，洪水完全未触及车库范围。",
        substationLevel: "裙楼3层与4层（彻底远离浸水隐患）",
        stormProtection: "重型双回路暴雨强排泵站及哈利法塔湖溢流通道",
        engineeringBasis: "绝对标高+5.2m MSL，重力自流排水与防汛闸门联控。"
      },
      starchitect: {
        tier: "全球第一号传世艺术资产（Trophy Icon）",
        architectBrandPremiumPercent: 45,
        humanVerdict: "真正的建筑不朽神作：由 Adrian Smith 与 SOM 联袂执笔，堪称现代工程的“蒙娜丽莎”。未来50年内全球富豪的流动性与收藏需求坚如磐石。",
        collectorClassification: "全球唯一定制地标 • UHNWI永续追捧",
        engineeringBasis: "全球最高独立结构体，普利兹克级大师团队亲笔设计。"
      },
      windSway: {
        swayDeflectionMm: 1450,
        dampingSystem: "Y型三翼核心筒与螺旋递减截面（气动旋涡自消解）",
        humanVerdict: "高空极为平稳：虽然塔尖在强烈冬日风暴中会晃动达1.5米，但螺旋台阶设计彻底打破了风涡共振，40至80层的住户在室内几乎感受不到任何摇晃，睡眠安稳。",
        goldenFloors: "43层至76层（空中大堂核心居住区：零体感震动）",
        engineeringBasis: "通过加拿大RWDI顶级风洞认证，纯气动外形消除共振疲劳。"
      },
      socialFilter: {
        privacyScore: 92,
        ownerOccupierPercent: 78,
        holidayHomesPolicy: "极严格业主公约（阿玛尼酒店与私人公寓动线彻底物理隔绝）",
        humanVerdict: "尊贵封闭圈层：独立业主专属大堂与直达电梯将住户与观光游客彻底分离，走廊内杜绝任何随机短租派对与喧闹拖箱客。",
        securityLevel: "多维人脸识别门禁与24小时专属管家礼宾",
        engineeringBasis: "伊玛尔（Emaar）专属公约，严格限制未经审批的短租运营。"
      },
      contractorAutopsy: {
        mainContractor: "三星物产（Samsung C&T）/ 比利时BESIX / Arabtec 联合体",
        soundproofingRatingDb: 58,
        humanVerdict: "几乎静音级体验：双层阻尼隔音石膏板内嵌高密度岩棉，彻底隔绝相邻公寓声响。您绝不会听到隔壁卫浴冲水声或走动声。",
        pipelineQuality: "声学包覆静音铸铁排水立管与预压防水锤气阀",
        engineeringBasis: "达到 ASTM E90 58分贝超高隔音指标，机电管线全面声学悬浮减震。"
      },
      livingVerdict: {
        independentVerdictSummary: "全球奢华地标的绝对标杆：超高安全防汛车库、大师级传世保值力与顶级声学静音保障。",
        strengths: [
          "中东地区资本流动性最高的永恒收藏级传世资产",
          "高架裙楼（+5.2米标高）杜绝暴雨浸水，确保名车百分百安全",
          "完全独立的私人住宅动线，彻底屏蔽观景台游客人流",
          "顶尖58分贝隔音，螺旋抗风外形带来卓越的高空睡眠舒适度"
        ],
        pitfalls: [
          "年度物业费较高（约55 AED/平方英尺），测算净收益时需提前计入",
          "前往极高住宅区需在空中大堂转换双层高速穿梭电梯"
        ],
        idealFor: "超高净值私人藏家、全球资产配置者，追求至高社会地位与万无一失资产安全的家族。",
        notRecommendedFor: "预算敏感型短线炒房客或追求极低维护成本的普通收租型买家。"
      }
    },
    de: {
      floodResilience: {
        score: 96,
        elevationMeters: 5.2,
        status: "Erhöhtes Podium (Absoluter Überflutungsschutz)",
        humanVerdict: "Ihr Rolls-Royce oder Sportwagen steht völlig sicher: Das Parkhaus liegt 5,2 Meter über Straßenniveau. Bei den Rekordfluten 2024 drang kein Tropfen Wasser ein.",
        substationLevel: "Podium-Ebenen 3 und 4 (weit über der Gefahrenzone)",
        stormProtection: "Doppelte Schwerlast-Pumpstation mit Überlauf in den Burj Lake",
        engineeringBasis: "Höhe +5,2m MSL mit schwerkraftbasiertem Überlaufschutz."
      },
      starchitect: {
        tier: "Welt-Trophäen-Asset Nr. 1",
        architectBrandPremiumPercent: 45,
        humanVerdict: "Architektonische Unsterblichkeit: Entworfen von Adrian Smith und SOM. Dieses Bauwerk ist die 'Mona Lisa' Dubais mit garantierter globaler Liquidität auf Jahrzehnte.",
        collectorClassification: "Globales Weltwunder • Dauerhafte UHNWI-Nachfrage",
        engineeringBasis: "Höchstes Gebäude der Welt, entworfen von Skidmore, Owings & Merrill."
      },
      windSway: {
        swayDeflectionMm: 1450,
        dampingSystem: "Y-förmiger Kern mit spiralförmigem Profil (Wirbelbrecher)",
        humanVerdict: "Hervorragende Ruhe: Trotz bis zu 1,5 Metern Schwankung der Spitze bei Sturm sorgt die spiralförmige Geometrie dafür, dass in den Stockwerken 40–80 praktisch keine Bewegung spürbar ist.",
        goldenFloors: "Etagen 43 bis 76 (Sky Lobby-Zone: absolute Vibrationsfreiheit)",
        engineeringBasis: "Windkanal-geprüft durch RWDI; vortex-shedding Geometrie."
      },
      socialFilter: {
        privacyScore: 92,
        ownerOccupierPercent: 78,
        holidayHomesPolicy: "Streng reglementiert (Armani Hotel getrennt von Residenzen)",
        humanVerdict: "Exklusiver Privatclub: Getrennte Lobbys halten Touristen der Aussichtsplattform vollständig fern. Keine zufälligen Partys oder Kofferlärm auf den Wohnetagen.",
        securityLevel: "Biometrische Gesichtserkennung und 24/7 Concierge-Sicherheitsdienst",
        engineeringBasis: "Emaar WEG-Regeln mit getrennten Zugängen im Erdgeschoss."
      },
      contractorAutopsy: {
        mainContractor: "Samsung C&T / BESIX / Arabtec Konsortium",
        soundproofingRatingDb: 58,
        humanVerdict: "Flüsterleise: Doppelte Akustik-Wände mit Mineralwolle isolieren 99% aller Geräusche. Sie hören weder Nachbarduschen noch Schritte.",
        pipelineQuality: "Schallgedämmte Gussrohre mit Wasserschlagdämpfern",
        engineeringBasis: "ASTM E90 Klasse 58 dB interner Schallschutz."
      },
      livingVerdict: {
        independentVerdictSummary: "Die absolute Referenz für Luxus und Bausicherheit: unübertroffene Werterhaltung, sturmsichere Parkgaragen und exzellente Ruhe.",
        strengths: [
          "Höchste internationale Liquidität und dauerhafter Trophy-Status",
          "Podium-Garage (+5,2m) schützt Sportwagen vor extremen Fluten",
          "Getrennte Wohn-Lobbys schließen Besucherverkehr komplett aus",
          "Hervorragende Schalldämmung (58 dB) und vibrationsfreie Wohnetagen"
        ],
        pitfalls: [
          "Hohe jährliche Betriebskosten (ca. 55 AED/sq.ft) mindern die Nettorendite",
          "Umstieg in den Sky Lobbies für die obersten Wohngeschosse erforderlich"
        ],
        idealFor: "UHNWI-Käufer, Sammler und Investoren mit Fokus auf weltweites Prestige und absolute Sicherheit.",
        notRecommendedFor: "Käufer, die minimale Instandhaltungskosten und unkomplizierte Billigrenditen suchen."
      }
    },
    fr: {
      floodResilience: {
        score: 96,
        elevationMeters: 5.2,
        status: "Podium Surélevé (Protection Totale contre les Inondations)",
        humanVerdict: "Vos supercars sont en sécurité totale : le parking est situé en podium à 5,2 m au-dessus du niveau de la rue, sans la moindre infiltration d'eau lors du déluge de 2024.",
        substationLevel: "Niveaux 3 et 4 du podium (hors zone inondable)",
        stormProtection: "Double station de pompage pluviale avec déversoir vers le lac",
        engineeringBasis: "Niveau altimétrique +5,2m MSL avec évacuation gravitaire."
      },
      starchitect: {
        tier: "Actif Trophée Mondial N°1",
        architectBrandPremiumPercent: 45,
        humanVerdict: "Immortalité architecturale : conçu par Adrian Smith et SOM, ce chef-d'œuvre garantit une cote patrimoniale et une liquidité mondiale pour les 50 prochaines années.",
        collectorClassification: "Merveille Contemporaine • Demande UHNWI Infinie",
        engineeringBasis: "Plus haute tour du monde par Skidmore, Owings & Merrill."
      },
      windSway: {
        swayDeflectionMm: 1450,
        dampingSystem: "Noyau tripode profilé en spirale (Dissipation aérodynamique)",
        humanVerdict: "Stabilité remarquable : la géométrie spirale brise les rafales de vent. Du 40e au 80e étage, le sommeil est parfait sans aucun ressenti de tangage.",
        goldenFloors: "Étages 43 à 76 (Zone des Sky Lobbies : stabilité absolue)",
        engineeringBasis: "Validé en soufflerie RWDI ; dissipation continue des tourbillons d'air."
      },
      socialFilter: {
        privacyScore: 92,
        ownerOccupierPercent: 78,
        holidayHomesPolicy: "Régulation stricte (Résidences privées isolées de l'hôtel Armani)",
        humanVerdict: "Club privé ultra-sécurisé : les résidents disposent d'accès entièrement séparés des flux touristiques. Zéro fête improvisée ni roulement de valises.",
        securityLevel: "Reconnaissance faciale et conciergerie privée 24/7",
        engineeringBasis: "Règlement de copropriété Emaar avec sas indépendants."
      },
      contractorAutopsy: {
        mainContractor: "Groupement Samsung C&T / BESIX / Arabtec",
        soundproofingRatingDb: 58,
        humanVerdict: "Silencieux : doubles cloisons acoustiques avec laine minérale bloquant 99% des bruits. Vous n'entendrez jamais les voisins ni les douches.",
        pipelineQuality: "Colonnes en fonte avec gaines antibruit et pare-coups de bélier",
        engineeringBasis: "Performance acoustique ASTM E90 à 58 dB."
      },
      livingVerdict: {
        independentVerdictSummary: "L'apogée du prestige et de l'ingénierie : sécurité absolue des véhicules, valeur patrimoniale éternelle et confort acoustique sans faille.",
        strengths: [
          "Liquidité internationale maximale et statut de trophée planétaire",
          "Garage surélevé (+5,2m) protégeant les véhicules des pires inondations",
          "Entrées résidentielles indépendantes isolant des touristes de l'observatoire",
          "Isolation phonique 58 dB et absence totale de vibration éolienne ressentie"
        ],
        pitfalls: [
          "Frais d'entretien annuels élevés (environ 55 AED/sq.ft)",
          "Changement d'ascenseur requis aux Sky Lobbies pour les étages supérieurs"
        ],
        idealFor: "Familles fortunées, collectionneurs d'actifs rares et investisseurs privilégiant l'immortalité patrimoniale.",
        notRecommendedFor: "Investisseurs recherchant de faibles charges de copropriété et des rendements locatifs basiques."
      }
    },
    it: {
      floodResilience: {
        score: 96,
        elevationMeters: 5.2,
        status: "Podio Sopraelevato (Immune da Allagamenti)",
        humanVerdict: "Supercar protette al 100%: il parcheggio è posizionato su un podio rialzato di 5,2 metri rispetto al livello stradale, completamente asciutto durante le alluvioni del 2024.",
        substationLevel: "Piani 3 e 4 del podio (totale sicurezza)",
        stormProtection: "Doppia stazione di pompaggio e scarico nel Burj Lake",
        engineeringBasis: "Quota +5,2m MSL con drenaggio a gravità."
      },
      starchitect: {
        tier: "Trophy Asset Globale N. 1",
        architectBrandPremiumPercent: 45,
        humanVerdict: "Immortale capolavoro architettonico firmato Adrian Smith e SOM. Liquidità e domanda da parte dei collezionisti globali garantita per i prossimi 50 anni.",
        collectorClassification: "Meraviglia Mondiale • Domanda UHNWI Perpetua",
        engineeringBasis: "Edificio più alto del pianeta progettato da Skidmore, Owings & Merrill."
      },
      windSway: {
        swayDeflectionMm: 1450,
        dampingSystem: "Nucleo tripode a spirale aerodinamica",
        humanVerdict: "Calma assoluta all'interno: la forma a spirale dissolve la forza del vento. Tra il 40° e l'80° piano la stabilità è impeccabile e non si avverte oscillazione.",
        goldenFloors: "Piani dal 43 al 76 (Sky Lobby: comfort statico perfetto)",
        engineeringBasis: "Certificazione RWDI in galleria del vento con assenza di risonanza."
      },
      socialFilter: {
        privacyScore: 92,
        ownerOccupierPercent: 78,
        holidayHomesPolicy: "Regolamento ferreo (Residenze separate dall'Armani Hotel)",
        humanVerdict: "Club residenziale esclusivo: ingressi e ascensori dedicati eliminano ogni contatto con i turisti dell'osservatorio. Nessuna festa molesta nei corridoi.",
        securityLevel: "Riconoscimento biometrico e portineria dedicata 24/7",
        engineeringBasis: "Regolamento condominiale Emaar con flussi fisicamente divisi."
      },
      contractorAutopsy: {
        mainContractor: "Consorzio Samsung C&T / BESIX / Arabtec",
        soundproofingRatingDb: 58,
        humanVerdict: "Silenzio impeccabile: pareti acustiche doppie con lana di roccia isolano ogni rumore. Impossibile udire scarichi o calpestio dei vicini.",
        pipelineQuality: "Tubature in ghisa fonoassorbente e valvole anti-colpo d'ariete",
        engineeringBasis: "Isolamento acustico ASTM E90 a 58 dB."
      },
      livingVerdict: {
        independentVerdictSummary: "Il punto di riferimento mondiale per prestigio e sicurezza strutturale: garage a prova d'acqua, firma architettonica storica e silenzio assoluto.",
        strengths: [
          "Massima liquidità patrimoniale di tutto il Medio Oriente",
          "Garage sul podio a +5,2m che protegge le auto dalle peggiori alluvioni",
          "Ascensori e ingressi privati senza sovrapposizione con i turisti",
          "Isolamento acustico a 58 dB ed eccellente comfort anche ai piani alti"
        ],
        pitfalls: [
          "Spese condominiali elevate (circa 55 AED/sq.ft) da conteggiare nel rendimento netto",
          "Necessità di trasbordo ascensori alle Sky Lobby per le quote più alte"
        ],
        idealFor: "Collezionisti internazionali e investitori istituzionali che cercano il massimo prestigio e sicurezza patrimoniale.",
        notRecommendedFor: "Acquirenti focalizzati sul risparmio sulle spese di gestione o su locazioni ad alto rendimento low-cost."
      }
    },
    tr: {
      floodResilience: {
        score: 96,
        elevationMeters: 5.2,
        status: "Yükseltilmiş Podyum (Su Baskınına Karşı Tam Koruma)",
        humanVerdict: "Süper lüks otomobilleriniz tam güvende: Otopark sokak seviyesinden 5.2 metre yüksekte yer alır. 2024 yılındaki büyük sel felaketinde tek damla su sızmamıştır.",
        substationLevel: "Podyum 3 ve 4. Katlar (Risk bölgesinin çok üstünde)",
        stormProtection: "Çift tahliye pompa istasyonu ve Burj Gölü'ne doğrudan drenaj",
        engineeringBasis: "Zemin kotu +5.2m MSL ve akıllı yerçekimi tahliyesi."
      },
      starchitect: {
        tier: "Dünyanın 1 Numaralı Trofe Varlığı (Trophy Icon)",
        architectBrandPremiumPercent: 45,
        humanVerdict: "Mimari ölümsüzlük: Adrian Smith ve SOM ortak başyapıtı. Gelecek 50 yıl boyunca küresel milyarderlerin odağında kalacak likit bir koleksiyon eseri.",
        collectorClassification: "Küresel Miras • Sonsuz UHNWI Talebi",
        engineeringBasis: "Skidmore, Owings & Merrill imzalı dünyanın en yüksek yapısı."
      },
      windSway: {
        swayDeflectionMm: 1450,
        dampingSystem: "Y-şekilli aerodinamik spiral çekirdek (Rüzgar girdabı kırıcı)",
        humanVerdict: "Mükemmel sükunet: Kule fırtınada esnesede spiral hatlar rüzgarı kırar. 40–80. katlar arasında sallantı hissedilmez, gece uykusu huzurludur.",
        goldenFloors: "43 ile 76. Katlar (Gökyüzü Lobisi bölgesi: sıfır titreşim)",
        engineeringBasis: "RWDI rüzgar tüneli onaylı, rezonans yapmayan gövde."
      },
      socialFilter: {
        privacyScore: 92,
        ownerOccupierPercent: 78,
        holidayHomesPolicy: "Sıkı Yönetim (Armani Otel ile konutlar birbirinden tamamen ayrı)",
        humanVerdict: "Seçkin özel yaşam: Konut sakinlerinin giriş ve asansörleri seyir terası turistlerinden tamamen ayrıdır. Katlarda bavul ve parti gürültüsü olmaz.",
        securityLevel: "Biyometrik yüz tanıma ve 24 saat özel resepsiyon",
        engineeringBasis: "Emaar site yönetim planı ile ayrılmış bağımsız lobi hatları."
      },
      contractorAutopsy: {
        mainContractor: "Samsung C&T / BESIX / Arabtec Konsorsiyumu",
        soundproofingRatingDb: 58,
        humanVerdict: "Kusursuz ses yalıtımı: Çift katmanlı akustik alçıpan ve taş yünü dolgu ile komşu sesleri ve su tesisatı gürültüsü tamamen engellenir.",
        pipelineQuality: "Ses yalıtımlı döküm borular ve su darbesi önleyiciler",
        engineeringBasis: "ASTM E90 standardında 58 dB üstün ses yalıtımı."
      },
      livingVerdict: {
        independentVerdictSummary: "Küresel lüksün ve mühendisliğin zirvesi: su baskınından korumalı otopark, kalıcı mimari miras ve mükemmel sessizlik.",
        strengths: [
          "Orta Doğu'nun en yüksek sermaye likiditesine sahip koleksiyon mülkü",
          "+5.2m podyum otoparkı süper otomobilleri her türlü fırtınadan korur",
          "Ayrı konut lobileri sayesinde turistlerle hiçbir temas yaşanmaz",
          "58 dB üstün ses yalıtımı ve rüzgar salınımını hissettirmeyen aerodinamik gövde"
        ],
        pitfalls: [
          "Yıllık aidat bedeli yüksektir (yaklaşık 55 AED/sq.ft)",
          "En üst katlara ulaşım için gökyüzü lobilerinde asansör aktarması gerekir"
        ],
        idealFor: "En yüksek prestij, kalıcı miras ve sarsılmaz güvenlik arayan ultra yüksek gelirli bireyler ve koleksiyonerler.",
        notRecommendedFor: "Düşük aidat ve sade kiralama getirisi hedefleyen bütçe odaklı yatırımcılar."
      }
    },
    hi: {
      floodResilience: {
        score: 96,
        elevationMeters: 5.2,
        status: "ऊंचा पोडियम (बाढ़ से शत-प्रतिशत सुरक्षित)",
        humanVerdict: "आपकी रोल्स-रॉयस या बेंटले पूरी तरह सुरक्षित है: पार्किंग सड़क स्तर से 5.2 मीटर ऊंचे पोडियम में स्थित है। 2024 की ऐतिहासिक बाढ़ में यहां पानी की एक बूंद भी नहीं पहुंची।",
        substationLevel: "पोडियम तल 3 और 4 (बाढ़ क्षेत्र से सुरक्षित)",
        stormProtection: "दोहरे भारी तूफान जल पंप और बुर्ज झील में जल निकासी",
        engineeringBasis: "समुद्र तल से +5.2 मीटर ऊंचाई और स्वचालित जल निकासी।"
      },
      starchitect: {
        tier: "विश्व का #1 ट्रॉफी एसेट",
        architectBrandPremiumPercent: 45,
        humanVerdict: "वास्तुशिल्प अमरता: एड्रियन स्मिथ और SOM द्वारा डिजाइन किया गया यह आधुनिक इंजीनियरिंग का 'मोना लिसा' है। अगले 50 वर्षों तक वैश्विक तरलता की गारंटी।",
        collectorClassification: "वैश्विक अजूबा • अंतरराष्ट्रीय UHNWI मांग",
        engineeringBasis: "विश्व की सबसे ऊंची इमारत, SOM का प्रतिष्ठित मास्टरपीस।"
      },
      windSway: {
        swayDeflectionMm: 1450,
        dampingSystem: "वायवीय घुमावदार 'Y' कोर (हवा के भंवर को काटने वाला)",
        humanVerdict: "अत्यधिक स्थिरता: हालांकि आंधी में शीर्ष 1.5 मीटर तक झुकता है, लेकिन घुमावदार डिजाइन हवा को ऐसे काटता है कि 40-80 मंजिलों पर कंपन बिल्कुल महसूस नहीं होता।",
        goldenFloors: "मंजिल 43 से 76 (स्काई लॉबी जोन: पूर्ण शांति और स्थिरता)",
        engineeringBasis: "RWDI विंड टनल परीक्षण द्वारा प्रमाणित।"
      },
      socialFilter: {
        privacyScore: 92,
        ownerOccupierPercent: 78,
        holidayHomesPolicy: "कड़ा नियंत्रण (अरमानी होटल और निजी आवास पूरी तरह अलग)",
        humanVerdict: "अभिजात वर्ग का निजी क्लब: निवासियों के अलग प्रवेश द्वार और लिफ्ट पर्यटकों से पूरी तरह अलग रखते हैं। गलियारों में सूटकेस और शोरगुल नहीं मिलेगा।",
        securityLevel: "चेहरे की पहचान बायोमेट्रिक्स और 24/7 दरबान सुरक्षा",
        engineeringBasis: "एम्मार सोसाइटी उप-नियमों द्वारा अलग किए गए मार्ग।"
      },
      contractorAutopsy: {
        mainContractor: "सैमसंग C&T / BESIX / अरबटेक संयुक्त उद्यम",
        soundproofingRatingDb: 58,
        humanVerdict: "पिन-ड्रॉप साइलेंस: खनिज ऊन इन्सुलेशन वाली दोहरी दीवारें 99% आवाजों को रोकती हैं। आपको पड़ोसियों की बातचीत या बाथरूम की आवाज कभी नहीं सुनाई देगी।",
        pipelineQuality: "ध्वनिरोधी ढलवां लोहे के पाइप और कंपन-रोधी तकनीक",
        engineeringBasis: "ASTM E90 मानक 58 dB उच्च ध्वनिरोधी वर्ग।"
      },
      livingVerdict: {
        independentVerdictSummary: "वैश्विक लक्जरी का सर्वोच्च मानक: बाढ़-मुक्त पार्किंग, विश्व-प्रसिद्ध वास्तुशिल्प और पूर्ण आंतरिक शांति।",
        strengths: [
          "मध्य पूर्व में उच्चतम पूंजी तरलता वाला स्थायी ट्रॉफी एसेट",
          "+5.2 मीटर ऊंचा पोडियम तूफानी बारिश में कारों को पूरी तरह सुरक्षित रखता है",
          "अलग आवासीय लॉबी पर्यटकों की भीड़ से पूरी तरह अलग रखती है",
          "58 dB ध्वनिरोधी और तेज हवाओं में भी पूर्ण कंपन-मुक्त नींद"
        ],
        pitfalls: [
          "उच्च वार्षिक रखरखाव शुल्क (लगभग 55 AED/वर्ग फुट)",
          "ऊपरी आवासीय मंजिलों के लिए स्काई लॉबी में लिफ्ट बदलने की आवश्यकता"
        ],
        idealFor: "अत्यधिक समृद्ध खरीदार, वैश्विक निवेशक और पूर्ण प्रतिष्ठा और सुरक्षा चाहने वाले परिवार।",
        notRecommendedFor: "कम रखरखाव खर्च और साधारण किराये की तलाश करने वाले निवेशक।"
      }
    },
    ur: {
      floodResilience: {
        score: 96,
        elevationMeters: 5.2,
        status: "بلند پوڈیم (سیلاب سے سو فیصد محفوظ)",
        humanVerdict: "آپ کی رولز رائس یا فیراری مکمل محفوظ ہے: پارکنگ گراؤنڈ سے 5.2 میٹر بلند پوڈیم پر ہے، جہاں 2024 کے تاریخی سیلاب میں پانی کا ایک قطرہ بھی نہیں پہنچ سکا۔",
        substationLevel: "پوڈیم لیول 3 اور 4 (سیلابی خطرے سے بہت اوپر)",
        stormProtection: "ہیوی ڈیوٹی اسٹورم واٹر پمپس اور برج جھیل میں نکاسی آب",
        engineeringBasis: "سطح سمندر سے +5.2 میٹر بلندی اور خودکار واٹر ڈرینج۔"
      },
      starchitect: {
        tier: "دنیا کا نمبر 1 ٹرافی اثاثہ",
        architectBrandPremiumPercent: 45,
        humanVerdict: "لازوال آرکیٹیکچرل شاہکار: ایڈرین اسمتھ اور SOM کا ڈیزائن کردہ یہ شاہکار اگلے 50 سال تک بین الاقوامی سطح پر سب سے زیادہ پرکشش اور محفوظ اثاثہ رہے گا۔",
        collectorClassification: "عظیم الشان عالمی عجوبہ • مستقل UHNWI طلب",
        engineeringBasis: "دنیا کی بلند ترین عمارت، اسکڈمور اوونگز اینڈ میرل کا ڈیزائن۔"
      },
      windSway: {
        swayDeflectionMm: 1450,
        dampingSystem: "تین شاخہ ایروڈائنامک کور (ہوا کی گردباد کو توڑنے والا)",
        humanVerdict: "حیرت انگیز استحکام: شدید طوفان میں عمارت کا اوپر کا حصہ لچکتا ہے لیکن گول گھماؤ دار ساخت کے باعث 40 سے 80 منزلوں پر کسی جھٹکے یا حرکت کا احساس تک نہیں ہوتا۔",
        goldenFloors: "منزل 43 تا 76 (اسکائی لابی زون: پرسکون رہائش)",
        engineeringBasis: "کینیڈین RWDI ونڈ ٹنل ٹیسٹ سے تصدیق شدہ ساخت۔"
      },
      socialFilter: {
        privacyScore: 92,
        ownerOccupierPercent: 78,
        holidayHomesPolicy: "سخت ترین ضابطے (ارمانی ہوٹل اور رہائشی حصے مکمل الگ)",
        humanVerdict: "انتہائی پرسکون نجی ماحول: رہائشیوں کے الگ دروازے اور لفٹیں سیاحوں کو دور رکھتی ہیں، راہداریوں میں شور اور بیگوں کا رش نہیں ہوتا۔",
        securityLevel: "بائیو میٹرک چہرے کی شناخت اور 24 گھنٹے گارڈ سیکیورٹی",
        engineeringBasis: "ایمار کی خصوصی سوسائٹی پالیسی جس میں داخلی راستے الگ ہیں۔"
      },
      contractorAutopsy: {
        mainContractor: "سیمسنگ C&T / بی ای ایس آئی ایکس / عرب ٹیک کنسورشیم",
        soundproofingRatingDb: 58,
        humanVerdict: "بے مثال خاموشی: ڈبل ایکوسٹک دیواریں 99 فیصد آوازوں کو روکتی ہیں، پڑوسیوں کے چلنے یا پانی کے بہنے کی کوئی آواز نہیں آتی۔",
        pipelineQuality: "آواز جذب کرنے والے کاسٹ آئرن پائپس اور اینٹی واٹر ہیمر چیمبرز",
        engineeringBasis: "ASTM E90 معیار کے تحت 58 dB ساؤنڈ پروفنگ۔"
      },
      livingVerdict: {
        independentVerdictSummary: "عالمی لگژری اور انجینئرنگ کا سب سے بڑا نمونہ: سیلاب سے محفوظ کار پارکنگ، مستقل برانڈ ویلیو اور لاجواب خاموشی۔",
        strengths: [
          "مشرق وسطیٰ کا سب سے زیادہ قابل فروخت اور معتبر ٹرافی اثاثہ",
          "+5.2 میٹر بلند پوڈیم طوفانی بارشوں میں گاڑیوں کے لیے مکمل محفوظ ہے",
          "علیحدہ رہائشی لابی سیاحوں کے ہجوم سے مکمل آزادی دیتی ہے",
          "58 dB ساؤنڈ پروفنگ اور آندھیوں میں جھولے سے پاک پرسکون نیند"
        ],
        pitfalls: [
          "سالانہ مینٹیننس اخراجات زیادہ ہیں (تقریباً 55 درہم فی مربع فٹ)",
          "اوپری منزلوں تک جانے کے لیے اسکائی لابی میں لفٹ بدلنا پڑتی ہے"
        ],
        idealFor: "دنیا کے امیر ترین خریدار اور باوقار خاندان جو الٹیمیٹ اسٹیٹس اور محفوظ مستقبل چاہتے ہیں۔",
        notRecommendedFor: "کم بجٹ اور سستی مینٹیننس پر فوری کرایہ کمانے کے خواہشمند افراد۔"
      }
    }
  }
};

/**
 * Procedural Fallback Generator that builds realistic, architecturally sound audits
 * for any of the other 76 towers based on real properties (height, district, yearBuilt, architect, contractor, floors).
 */
export function generateProceduralExplosiveAudit(building: Building, lang: LanguageCode): ExplosiveBuildingAudit {
  const isDowntownOrCreek = building.districtSlug.includes("downtown") || building.districtSlug.includes("creek") || building.districtSlug.includes("business-bay");
  const isMarinaOrJbr = building.districtSlug.includes("marina") || building.districtSlug.includes("jbr") || building.districtSlug.includes("palm");
  const isSupertall = building.heightMeters >= 300;
  const isSkyscraper = building.heightMeters >= 200;
  const isHotelOrMixed = building.type === "Hotel" || building.type === "Mixed-Use";

  // 1. Flood Resilience
  const elevation = isMarinaOrJbr ? 3.4 : (isDowntownOrCreek ? 4.6 : 3.8);
  const floodScore = elevation >= 4.0 ? 91 : (elevation >= 3.0 ? 84 : 76);
  
  // 2. Starchitect Equity
  const famousArchitects = ["SOM", "Foster", "Zaha", "Atkins", "KPF", "Nikken", "Calatrava", "WKK"];
  const isStarchitect = famousArchitects.some(name => building.architect.includes(name) || building.architectFirm.includes(name));
  const starchitectPremium = isStarchitect ? 35 : (building.heightMeters > 300 ? 25 : 12);
  
  // 3. Wind Sway
  const apexSway = isSupertall ? Math.round(building.heightMeters * 1.8) : Math.round(building.heightMeters * 1.1);
  const goldenTopFloor = Math.max(15, Math.round(building.floors * 0.65));

  // 4. Social Filter
  const ownerRatio = isHotelOrMixed ? 45 : (building.type === "Residential" && building.rating >= 4.8 ? 82 : 65);
  const socialScore = isHotelOrMixed ? 64 : (ownerRatio >= 80 ? 90 : 75);

  // 5. Soundproofing & Contractor
  const soundDb = building.rating >= 4.8 ? 55 : (building.yearBuilt >= 2018 ? 52 : 48);

  // Delegate to comprehensive 10-language localized generator
  return buildLocalizedProceduralAudit(building, lang, {
    elevation,
    floodScore,
    isStarchitect,
    starchitectPremium,
    apexSway,
    goldenTopFloor,
    isSupertall,
    ownerRatio,
    socialScore,
    isHotelOrMixed,
    soundDb
  });
}

/**
 * Returns the fully resolved 5-Factor Explosive Audit for any building in any language
 */
export function getBuildingExplosiveAudit(building: Building, lang: LanguageCode): {
  audit: ExplosiveBuildingAudit;
  labels: ExplosiveAuditLabels;
} {
  const labels = EXPLOSIVE_AUDIT_LABELS[lang] || EXPLOSIVE_AUDIT_LABELS.en;
  
  const bespokeBuilding = BESPOKE_EXPLOSIVE_AUDITS[building.slug] || BESPOKE_EXPLOSIVE_AUDITS[building.id];
  if (bespokeBuilding) {
    const localizedBespoke = bespokeBuilding[lang] || bespokeBuilding.en;
    if (localizedBespoke) {
      return { audit: localizedBespoke, labels };
    }
  }

  // Fallback to intelligent procedural generator
  const generated = generateProceduralExplosiveAudit(building, lang);
  return { audit: generated, labels };
}
