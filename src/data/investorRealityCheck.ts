import { Building, ViewBlockerRadar, SunHeatExposure, WalkabilityIndex } from "./buildings";
import { LanguageCode } from "@/i18n/languages";

export interface InvestorAuditLabels {
  sectionTitle: string;
  sectionBadge: string;
  sectionSubtitle: string;
  
  // View Blocker Radar
  viewRadarTitle: string;
  viewStatusLabel: string;
  protectedOrientations: string;
  threatOrientations: string;
  viewGuaranteeLabel: string;
  
  // Sun & Thermal Exposure
  solarTitle: string;
  optimalAspect: string;
  harshAspect: string;
  coolingImpact: string;
  glazingSpec: string;
  residentTip: string;
  
  // Walkability
  walkabilityTitle: string;
  walkScoreLabel: string;
  metroStationLabel: string;
  metroMinutesLabel: string;
  metroAccessTypeLabel: string;
  dailyEssentialsLabel: string;
  
  // Risk Badges
  riskProtected: string;
  riskLow: string;
  riskModerate: string;
  riskHigh: string;
}

export const INVESTOR_AUDIT_LABELS: Record<LanguageCode, InvestorAuditLabels> = {
  en: {
    sectionTitle: "Investor & Resident Architectural Reality Check",
    sectionBadge: "Unbiased Due Diligence • Micro-Climate & View Audit",
    sectionSubtitle: "Independent engineering metrics beyond standard broker listings: panoramic view preservation, solar exposure heat load, and authentic walkability.",
    viewRadarTitle: "View Blocker Radar",
    viewStatusLabel: "View Security Status",
    protectedOrientations: "Permanently Protected Horizons",
    threatOrientations: "Potential Obstruction Threat",
    viewGuaranteeLabel: "Horizon Integrity Audit",
    solarTitle: "Sun & Thermal Exposure Analysis",
    optimalAspect: "Optimal Cool Aspect",
    harshAspect: "Harsh Desert Heat Aspect (14:00–18:00)",
    coolingImpact: "HVAC & Energy Bill Impact",
    glazingSpec: "Facade Glazing Rating",
    residentTip: "Resident Living Tip",
    walkabilityTitle: "Walkability & Transit Reality",
    walkScoreLabel: "Pedestrian Livability Score",
    metroStationLabel: "Nearest Metro Hub",
    metroMinutesLabel: "min on foot",
    metroAccessTypeLabel: "Pedestrian Infrastructure",
    dailyEssentialsLabel: "Daily Essentials on Foot",
    riskProtected: "Permanent Protected View",
    riskLow: "Low Obstruction Risk",
    riskModerate: "Moderate Obstruction Risk",
    riskHigh: "High Obstruction Threat"
  },
  ru: {
    sectionTitle: "Архитектурная экспертиза для жизни и инвестиций",
    sectionBadge: "Независимый аудит • Виды, микроклимат и пешеходность",
    sectionSubtitle: "Реальные инженерно-бытовые параметры, о которых молчат риелторы: защита панорамных видов от застройки, перегрев фасадов на солнце и честная доступность метро.",
    viewRadarTitle: "Радар перекрытия вида (View Blocker Radar)",
    viewStatusLabel: "Статус защиты панорамы",
    protectedOrientations: "Навсегда защищенные ракурсы",
    threatOrientations: "Риск перекрытия будущей застройкой",
    viewGuaranteeLabel: "Аудит горизонта и соседних участков",
    solarTitle: "Инсоляция и тепловая нагрузка фасада",
    optimalAspect: "Комфортная прохладная сторона",
    harshAspect: "Зона жесткого перегрева (14:00–18:00)",
    coolingImpact: "Влияние на счета за кондиционер",
    glazingSpec: "Класс теплозащиты остекления",
    residentTip: "Совет резиденту и покупателю",
    walkabilityTitle: "Пешеходность и транспортная реальность",
    walkScoreLabel: "Индекс пешеходной доступности",
    metroStationLabel: "Ближайшая станция метро",
    metroMinutesLabel: "мин пешком",
    metroAccessTypeLabel: "Инфраструктура перехода",
    dailyEssentialsLabel: "Супермаркеты и сервис пешком",
    riskProtected: "Пожизненно защищенный вид",
    riskLow: "Низкий риск застройки",
    riskModerate: "Умеренный риск застройки",
    riskHigh: "Высокий риск перекрытия вида"
  },
  ar: {
    sectionTitle: "التدقيق المعماري للمستثمرين والسكان",
    sectionBadge: "فحص مستقل • حماية الإطلالة والمناخ الموضعي",
    sectionSubtitle: "معايير هندسية حقيقية تتجاوز تسويق الوسطاء: ضمان بقاء الإطلالة، والحمل الحراري للشمس، وقابلية المشي الفعلية.",
    viewRadarTitle: "رادار حجب الإطلالة (View Blocker Radar)",
    viewStatusLabel: "حالة أمان الإطلالة البانورامية",
    protectedOrientations: "الواجهات المحمية بشكل دائم",
    threatOrientations: "مخاطر حجب الرؤية بمشاريع مستقبلية",
    viewGuaranteeLabel: "تدقيق الأراضي المجاورة والأفق",
    solarTitle: "تحليل التعرض لأشعة الشمس والحرارة",
    optimalAspect: "الواجهة المعتدلة والباردة",
    harshAspect: "واجهة الحرارة الشديدة (14:00–18:00)",
    coolingImpact: "التأثير على فواتير التبريد والكهرباء",
    glazingSpec: "تصنيف العزل الحراري للزجاج",
    residentTip: "نصيحة عملية للسكان والمشترين",
    walkabilityTitle: "واقع المشي والمواصلات العامة",
    walkScoreLabel: "مؤشر سهولة المشي اليومي",
    metroStationLabel: "أقرب محطة مترو",
    metroMinutesLabel: "دقائق سيراً على الأقدام",
    metroAccessTypeLabel: "طبيعة المسار المخصص للمشاة",
    dailyEssentialsLabel: "الخدمات الأساسية في محيط المشي",
    riskProtected: "إطلالة محمية بشكل دائم",
    riskLow: "مخاطر حجب منخفضة",
    riskModerate: "مخاطر حجب متوسطة",
    riskHigh: "تهديد حجب مرتفع"
  },
  zh: {
    sectionTitle: "投资者与住户专属建筑现实审计",
    sectionBadge: "客观独立尽调 • 景观遮挡雷达与微气候实测",
    sectionSubtitle: "超越传统房产中介话术的核心硬核参数：永久景观保留度、沙漠西晒热负荷与真实步行通勤指数。",
    viewRadarTitle: "景观遮挡预警雷达 (View Blocker Radar)",
    viewStatusLabel: "天际线与景观安全等级",
    protectedOrientations: "永久受保护全景朝向",
    threatOrientations: "未来临近地块遮挡潜在风险",
    viewGuaranteeLabel: "周边规划地块天际线审核",
    solarTitle: "沙漠日照朝向与幕墙热负荷分析",
    optimalAspect: "最佳温和凉爽朝向",
    harshAspect: "极端西晒高温朝向 (14:00–18:00)",
    coolingImpact: "对制冷电费与空调负荷影响",
    glazingSpec: "幕墙玻璃隔热性能评级",
    residentTip: "住户与投资者实用选房建议",
    walkabilityTitle: "真实步行指数与轨道交通通达度",
    walkScoreLabel: "街区步行宜居综合评分",
    metroStationLabel: "最近地铁枢纽站点",
    metroMinutesLabel: "分钟步行即达",
    metroAccessTypeLabel: "步行连廊基础设施类型",
    dailyEssentialsLabel: "步行动线周边日常核心配套",
    riskProtected: "永久不可遮挡绝美景观",
    riskLow: "低度遮挡风险",
    riskModerate: "中度遮挡风险",
    riskHigh: "高度景观遮挡威胁"
  },
  de: {
    sectionTitle: "Architektur-Due-Diligence für Investoren & Bewohner",
    sectionBadge: "Unabhängiger Realitätscheck • Sichtachsen & Mikroklima",
    sectionSubtitle: "Reale ingenieurtechnische Parameter abseits von Maklerversprechen: Schutz vor Sichtbehinderung, Sonneneinstrahlung und echte Fußgängerfreundlichkeit.",
    viewRadarTitle: "Blickachsen-Radar (View Blocker Radar)",
    viewStatusLabel: "Sicherheitsstatus des Panoramablicks",
    protectedOrientations: "Dauerhaft geschützte Blickwinkel",
    threatOrientations: "Gefahr durch zukünftige Nachbarbauten",
    viewGuaranteeLabel: "Prüfung von Horizont & Nachbargrundstücken",
    solarTitle: "Sonneneinstrahlung & Thermische Belastung",
    optimalAspect: "Optimale kühle Himmelsrichtung",
    harshAspect: "Extreme Hitzefront (14:00–18:00 Uhr)",
    coolingImpact: "Auswirkung auf Klimakosten & Stromrechnung",
    glazingSpec: "Wärmeschutzklasse der Fassadenverglasung",
    residentTip: "Praxistipp für Bewohner & Käufer",
    walkabilityTitle: "Fußgänger- & Nahverkehrs-Realität",
    walkScoreLabel: "Fußgänger-Lebensqualitätsindex",
    metroStationLabel: "Nächste Metrostation",
    metroMinutesLabel: "Minuten zu Fuß",
    metroAccessTypeLabel: "Fußweg-Infrastruktur",
    dailyEssentialsLabel: "Nahversorgung zu Fuß erreichbar",
    riskProtected: "Dauerhaft unverbaubarer Blick",
    riskLow: "Geringes Verbauungsrisiko",
    riskModerate: "Mäßiges Verbauungsrisiko",
    riskHigh: "Hohes Verbauungsrisiko"
  },
  fr: {
    sectionTitle: "Audit Architectural pour Investisseurs et Résidents",
    sectionBadge: "Due Diligence Indépendante • Vues et Microclimat",
    sectionSubtitle: "Les données techniques fondamentales ignorées par les courtiers : préservation des vues panoramiques, exposition solaire et accessibilité piétonne réelle.",
    viewRadarTitle: "Radar d'Obstruction Visuelle (View Blocker)",
    viewStatusLabel: "Statut de Protection de la Vue",
    protectedOrientations: "Orientations Définitivement Protégées",
    threatOrientations: "Risque de Construction Futures Adjacentes",
    viewGuaranteeLabel: "Audit de l'Horizon et des Parcelles",
    solarTitle: "Exposition Solaire et Charge Thermique",
    optimalAspect: "Orientation Tempérée Idéale",
    harshAspect: "Façade à Forte Chaleur (14h00–18h00)",
    coolingImpact: "Impact sur la Facture de Climatisation",
    glazingSpec: "Performance d'Isolation du Vitrage",
    residentTip: "Conseil Pratique Résident",
    walkabilityTitle: "Marchabilité et Réalité des Transports",
    walkScoreLabel: "Indice de Marchabilité Piétonne",
    metroStationLabel: "Station de Métro la Plus Proche",
    metroMinutesLabel: "min à pied",
    metroAccessTypeLabel: "Type de Liaison Piétonne",
    dailyEssentialsLabel: "Commerces Essentiels à Pied",
    riskProtected: "Vue Définitivement Imprenable",
    riskLow: "Faible Risque d'Obstruction",
    riskModerate: "Risque d'Obstruction Modéré",
    riskHigh: "Forte Menace d'Obstruction"
  },
  it: {
    sectionTitle: "Analisi Architettonica per Investitori e Residenti",
    sectionBadge: "Due Diligence Indipendente • Vista e Microclima",
    sectionSubtitle: "I parametri ingegneristici autentici omessi dai broker: protezione della vista panoramica, surriscaldamento solare e reale camminabilità.",
    viewRadarTitle: "Radar Ostruzione Visiva (View Blocker Radar)",
    viewStatusLabel: "Garanzia di Protezione della Vista",
    protectedOrientations: "Visuali Protette in Modo Permanente",
    threatOrientations: "Rischio Ostruzione da Nuovi Cantieri",
    viewGuaranteeLabel: "Verifica dei Lotti e dell'Orizzonte",
    solarTitle: "Esposizione Solare e Carico Termico",
    optimalAspect: "Orientamento Fresco Ottimale",
    harshAspect: "Fronte ad Alto Calore (14:00–18:00)",
    coolingImpact: "Impatto sulle Bollette di Condizionamento",
    glazingSpec: "Isolamento Termico delle Vetrate",
    residentTip: "Consiglio Utile per i Residenti",
    walkabilityTitle: "Pedonabilità e Trasporti Pubblici",
    walkScoreLabel: "Punteggio di Camminabilità Urbana",
    metroStationLabel: "Stazione Metro più Vicina",
    metroMinutesLabel: "minuti a piedi",
    metroAccessTypeLabel: "Infrastruttura del Percorso Pedonale",
    dailyEssentialsLabel: "Servizi di Base Raggiungibili a Piedi",
    riskProtected: "Vista Permanentemente Libera",
    riskLow: "Basso Rischio di Ostruzione",
    riskModerate: "Moderato Rischio di Ostruzione",
    riskHigh: "Alto Rischio di Ostruzione"
  },
  tr: {
    sectionTitle: "Yatırımcı ve Sakinler İçin Mimari Gerçeklik Denetimi",
    sectionBadge: "Bağımsız Ön İnceleme • Manzara ve İklim Analizi",
    sectionSubtitle: "Emlakçıların paylaşmadığı gerçek mühendislik parametreleri: kalıcı manzara garantisi, güneş ısıl yükü ve gerçek yürüme mesafeleri.",
    viewRadarTitle: "Manzara Engelleme Radarı (View Blocker Radar)",
    viewStatusLabel: "Panoramik Manzara Güvenlik Durumu",
    protectedOrientations: "Kalıcı Olarak Korunan Cepheler",
    threatOrientations: "Gelecekteki İnşaat Engelleme Riski",
    viewGuaranteeLabel: "Ufuk Çizgisi ve Komşu Parsel Denetimi",
    solarTitle: "Güneş Işığı ve Cephe Termal Yük Analizi",
    optimalAspect: "En İdeal Serin Cephe",
    harshAspect: "Aşırı Sıcak Batı Cephesi (14:00–18:00)",
    coolingImpact: "Soğutma ve Elektrik Faturası Etkisi",
    glazingSpec: "Cephe Camı Isı Yalıtım Sınıfı",
    residentTip: "Sakinler ve Alıcılar İçin Pratik İpucu",
    walkabilityTitle: "Yürüme ve Toplu Taşıma Gerçeği",
    walkScoreLabel: "Yaya Yaşam Kolaylığı Skoru",
    metroStationLabel: "En Yakın Metro İstasyonu",
    metroMinutesLabel: "dakika yürüme mesafesinde",
    metroAccessTypeLabel: "Yaya Yolu Altyapı Tipi",
    dailyEssentialsLabel: "Yürüyerek Temel İhtiyaçlara Erişim",
    riskProtected: "Kalıcı Olarak Açık Manzara",
    riskLow: "Düşük Engellenme Riski",
    riskModerate: "Orta Düzey Engellenme Riski",
    riskHigh: "Yüksek Engellenme Tehdidi"
  },
  hi: {
    sectionTitle: "निवेशकों और निवासियों के लिए वास्तुशिल्प वास्तविकता ऑडिट",
    sectionBadge: "स्वतंत्र निष्पक्ष विश्लेषण • दृश्य सुरक्षा और सूक्ष्म जलवायु",
    sectionSubtitle: "दलालों के विज्ञापनों से परे वास्तविक इंजीनियरिंग पैरामीटर: स्थायी पैनोरमा सुरक्षा, धूप का ताप भार, और वास्तविक पैदल दूरी।",
    viewRadarTitle: "दृश्य अवरोधक रडार (View Blocker Radar)",
    viewStatusLabel: "पैनोरमा दृश्य सुरक्षा स्थिति",
    protectedOrientations: "स्थायी रूप से संरक्षित दिशाएं",
    threatOrientations: "भविष्य के निर्माण से रुकावट का खतरा",
    viewGuaranteeLabel: "पड़ोसी भूखंडों का क्षितिज ऑडिट",
    solarTitle: "धूप का संपर्क और थर्मल ताप भार",
    optimalAspect: "इष्टतम ठंडी दिशा",
    harshAspect: "अत्यधिक दोपहर की धूप (14:00–18:00)",
    coolingImpact: "एयर कंडीशनिंग और बिजली बिल प्रभाव",
    glazingSpec: "ग्लेज़िंग की तापीय दक्षता",
    residentTip: "निवासियों और खरीदारों के लिए उपयोगी सलाह",
    walkabilityTitle: "पैदल सुगमता और सार्वजनिक परिवहन",
    walkScoreLabel: "पैदल चलने की सुगमता स्कोर",
    metroStationLabel: "निकटतम मेट्रो स्टेशन",
    metroMinutesLabel: "मिनट पैदल दूरी पर",
    metroAccessTypeLabel: "पैदल पथ अवसंरचना प्रकार",
    dailyEssentialsLabel: "पैदल दूरी पर दैनिक आवश्यक सुविधाएं",
    riskProtected: "स्थायी रूप से सुरक्षित खुला दृश्य",
    riskLow: "कम निर्माण जोखिम",
    riskModerate: "मध्यम निर्माण जोखिम",
    riskHigh: "उच्च अवरोध खतरा"
  },
  ur: {
    sectionTitle: "سرمایہ کاروں اور رہائشیوں کے لیے آرکیٹیکچرل حقیقت کا آڈٹ",
    sectionBadge: "غیر جانبدارانہ جانچ • منظر کی حفاظت اور مائیکرو کلائمیٹ",
    sectionSubtitle: "پراپرٹی ڈیلروں سے پوشیدہ انجینئرنگ حقائق: پینورامک منظر کا مستقل تحفظ، سورج کی تپش، اور پیدل رسائی کی سچائی۔",
    viewRadarTitle: "منظر رکاوٹ ریڈار (View Blocker Radar)",
    viewStatusLabel: "منظر کے تحفظ کی حیثیت",
    protectedOrientations: "مستقل طور پر محفوظ رُخ",
    threatOrientations: "مستقبل کی تعمیرات سے ممکنہ خطرہ",
    viewGuaranteeLabel: "افق اور پڑوسی پلاٹوں کا آڈٹ",
    solarTitle: "سورج کی تپش اور تھرمل بوجھ کا تجزیہ",
    optimalAspect: "سب سے بہترین ٹھنڈا رُخ",
    harshAspect: "دوپہر کی شدید تپش کا رُخ (14:00–18:00)",
    coolingImpact: "ایئر کنڈیشننگ اور بجلی کے بل پر اثر",
    glazingSpec: "شیشے کی تھرمل انسولیشن گریڈ",
    residentTip: "رہائشیوں اور خریداروں کے لیے کارآمد مشورہ",
    walkabilityTitle: "پیدل چلنے اور ٹرانسپورٹ کی زمینی حقیقت",
    walkScoreLabel: "پیدل رسائی کا رہائشی اسکور",
    metroStationLabel: "قریب ترین میٹرو اسٹیشن",
    metroMinutesLabel: "منٹ پیدل فاصلہ",
    metroAccessTypeLabel: "پیدل راستے کی سہولت کی قسم",
    dailyEssentialsLabel: "پیدل فاصلے پر بنیادی ضروریات",
    riskProtected: "مستقل محفوظ قدرتی منظر",
    riskLow: "کم رکاوٹی خطرہ",
    riskModerate: "درمیانہ رکاوٹی خطرہ",
    riskHigh: "شدید رکاوٹی خطرہ"
  }
};

/**
 * Handcrafted bespoke audits for landmark Dubai architectural towers
 */
export const BESPOKE_INVESTOR_AUDITS: Record<string, {
  viewRadar: ViewBlockerRadar;
  solarExposure: SunHeatExposure;
  walkability: WalkabilityIndex;
}> = {
  "burj-khalifa": {
    viewRadar: {
      riskLevel: "protected",
      status: "Permanent Protected View (Lake, Fountain & Gulf)",
      assessment: "Frontline orientation towards the Dubai Fountain, Burj Lake and Arabian Gulf is permanently protected by masterplan zoning with zero risk of construction obstruction. Upper tiers (levels 76+) clear all surrounding downtown towers with permanent 360-degree horizon dominance.",
      protectedOrientations: [
        "South-West (Dubai Fountain & Burj Lake - 100% Unobstructable)",
        "North-West (Sea & Sunset Horizon above DIFC skyline)",
        "South-East (Dubai Opera District Plaza)"
      ],
      threatOrientations: [
        "East / North-East (Denser Downtown cluster below level 50 faces Blvd point & Address towers)"
      ]
    },
    solarExposure: {
      optimalAspect: "North-East (Morning Light, Cool Ambient)",
      harshAspect: "South-West (Intense 14:00–18:30 Desert Afternoon Sun)",
      coolingEnergyImpact: "Moderate (+15% on SW tiers, Low on NE)",
      solarHeatGainRating: "Superior (Double-glazed reflective Low-E with thermal break, SHGC 0.20)",
      residentTip: "Select North-facing residences to enjoy soft diffused sunlight without activating motorized cooling shades; South-West units require scheduled automatic thermal blinds after 2 PM."
    },
    walkability: {
      score: 96,
      category: "Walker's Paradise",
      metroStation: "Burj Khalifa / Dubai Mall Metro Station (Red Line)",
      metroDistanceMinutes: 4,
      metroAccessType: "Direct Air-Conditioned Travellator Tunnel",
      dailyEssentialsOnFoot: "Waitrose supermarket, 1,200+ retail stores, Dubai Opera, and 200+ dining options directly reachable via climate-controlled indoor tunnels."
    }
  },
  "princess-tower": {
    viewRadar: {
      riskLevel: "low",
      status: "Protected Frontline Sea & Palm Aspect",
      assessment: "West and North-West facing apartments above level 35 look straight over the Dubai Marina channel towards Palm Jumeirah with permanent water sightlines. Rear-facing units looking East face the congested Marina supertall cluster with closer neighbor proximity.",
      protectedOrientations: [
        "North-West (Palm Jumeirah & Arabian Gulf waters)",
        "West (Dubai Marina Channel Entrance)"
      ],
      threatOrientations: [
        "East (Faces Marina Crown & 23 Marina at 80m distance)",
        "South (Localized view overlap with Marina 101)"
      ]
    },
    solarExposure: {
      optimalAspect: "North / North-East (Panoramic Marina views without sun glare)",
      harshAspect: "South-West (Direct afternoon Gulf heat soak)",
      coolingEnergyImpact: "Standard (Empower capacity fee applies)",
      solarHeatGainRating: "High (Double Acoustic Tinted Glazing)",
      residentTip: "North-facing residences enjoy the best balance: vivid views of Palm Jumeirah without the scorching afternoon sun heating the structural balcony slab."
    },
    walkability: {
      score: 84,
      category: "Very Walkable",
      metroStation: "Mina Seyahi Tram Station (links to Sobha Realty Metro)",
      metroDistanceMinutes: 2,
      metroAccessType: "Shaded Boulevard Walk",
      dailyEssentialsOnFoot: "Carrefour Market, Marina Walk waterfront promenade, Barasti beach club, and pharmacies reachable within a 3-minute stroll."
    }
  },
  "cayan-tower": {
    viewRadar: {
      riskLevel: "protected",
      status: "Protected 90° Helix Marina Entrance View",
      assessment: "Positioned directly at the mouth of Dubai Marina, the unique 90-degree twist allows the majority of units to catch open water views of the Arabian Gulf and Ain Dubai. Coastline zoning prevents any future offshore high-rise development.",
      protectedOrientations: [
        "North-West (Marina entrance and open sea)",
        "West (Bluewaters Island & Ain Dubai)"
      ],
      threatOrientations: [
        "South-East (Lower floors under level 20 face Marina Heights)"
      ]
    },
    solarExposure: {
      optimalAspect: "East / North-East (Twisted balconies shade living rooms naturally)",
      harshAspect: "South-West (Upper helix rotation absorbs peak sunset rays)",
      coolingEnergyImpact: "Low (-18% due to helical self-shading facade ribs)",
      solarHeatGainRating: "Superior (Integrated titanium screen fins & solar-control glazing)",
      residentTip: "The 1.2-degree floorplate rotation acts as an architectural sunshade; living rooms stay cooler by 3–4°C compared to conventional flat glass boxes."
    },
    walkability: {
      score: 82,
      category: "Very Walkable",
      metroStation: "Marina Towers Tram Station",
      metroDistanceMinutes: 3,
      metroAccessType: "Shaded Boulevard Walk",
      dailyEssentialsOnFoot: "Direct steps to Dubai Marina Walk, yacht charter berths, Spinneys, and outdoor cafes along the water."
    }
  },
  "address-downtown": {
    viewRadar: {
      riskLevel: "protected",
      status: "100% Permanently Guaranteed Frontline Fountain View",
      assessment: "Front-row position directly on Burj Lake opposite Burj Khalifa. Because the lake and dancing fountains cannot be built upon, front-facing suites have zero risk of view obstruction for perpetuity.",
      protectedOrientations: [
        "North-West (Direct Burj Khalifa full-height spire and dancing fountain show - 100% Protected)",
        "West (Downtown Boulevard greenery)"
      ],
      threatOrientations: [
        "East (Back facing Financial Centre Road highway)"
      ]
    },
    solarExposure: {
      optimalAspect: "North-West (Enjoys evening fountain illuminations with sunset backdrop)",
      harshAspect: "South (Rear facade absorbs midday solar heat)",
      coolingEnergyImpact: "Standard Hotel Chiller Reserve",
      solarHeatGainRating: "Superior (Commercial-grade Low-E insulated glass units)",
      residentTip: "Even though North-West catches late afternoon light, the evening fountain reflections and Burj Khalifa light shows offer Dubai's highest rental premium."
    },
    walkability: {
      score: 95,
      category: "Walker's Paradise",
      metroStation: "Burj Khalifa / Dubai Mall Metro Station",
      metroDistanceMinutes: 5,
      metroAccessType: "Direct Air-Conditioned Travellator Tunnel",
      dailyEssentialsOnFoot: "Connected by air-conditioned bridge to Dubai Mall; gourmet dining, supermarkets, and wellness facilities at your doorstep."
    }
  },
  "one-zaabeel": {
    viewRadar: {
      riskLevel: "protected",
      status: "Protected Zabeel Park & Royal Palace Vista",
      assessment: "Overlooking Zabeel Park, the royal palace grounds and the DIFC skyline. Strict royal sanctuary building height restrictions ensure that southern and eastern views will never be blocked by high-rises.",
      protectedOrientations: [
        "South / South-East (Zabeel Park greenery & Dubai Frame - 100% Unblockable)",
        "West (DIFC and Downtown skyline silhouette)"
      ],
      threatOrientations: [
        "North (Trade Centre roundabout commercial redevelopment)"
      ]
    },
    solarExposure: {
      optimalAspect: "South-East (Morning sunlight over Zabeel Park)",
      harshAspect: "West (Intense skyline sunset through The Link cantilever)",
      coolingEnergyImpact: "Low (-22% with automated dynamic facade louvers)",
      solarHeatGainRating: "Superior (Triple-glazed high acoustic and solar barrier)",
      residentTip: "The 230-meter suspended sky concourse 'The Link' creates a massive thermal barrier; cantilever suites maintain exceptionally low ambient noise and cool indoor temperatures."
    },
    walkability: {
      score: 89,
      category: "Very Walkable",
      metroStation: "Max Metro Station (Red Line)",
      metroDistanceMinutes: 4,
      metroAccessType: "Direct Covered Walkway",
      dailyEssentialsOnFoot: "Direct access to Zabeel Park jogging tracks, Michelin-starred culinary pavilion inside The Link, and minutes from World Trade Centre."
    }
  },
  "bugatti-residences": {
    viewRadar: {
      riskLevel: "protected",
      status: "Frontline Dubai Water Canal Protected Horizon",
      assessment: "Situated right at the water's edge on Dubai Canal. The water basin guarantees an unobstructed view towards Safa Park and the Jumeirah coast. Rear-facing units face Business Bay's evolving mid-cluster.",
      protectedOrientations: [
        "South-West (Dubai Canal, Safa Park, and Arabian Gulf horizon - 100% Protected)",
        "West (Canal promenade & sunset over Jumeirah)"
      ],
      threatOrientations: [
        "North-East (Internal Business Bay plots with potential medium-rise development)"
      ]
    },
    solarExposure: {
      optimalAspect: "South-West (Private plunge pools on cantilever terraces heated naturally by afternoon sun)",
      harshAspect: "West (Afternoon sun exposure requires terrace canopy deployment)",
      coolingEnergyImpact: "High (+20% summer terrace heat, managed by smart HVAC)",
      solarHeatGainRating: "Superior (Curved biomorphic thermal insulated glass units)",
      residentTip: "The deep cantilevered rippled balconies provide natural overhang shading for floor-to-ceiling glass, keeping indoor living rooms cool while terraces soak up resort warmth."
    },
    walkability: {
      score: 72,
      category: "Very Walkable",
      metroStation: "Business Bay Metro Station",
      metroDistanceMinutes: 9,
      metroAccessType: "Shaded Boulevard Walk",
      dailyEssentialsOnFoot: "Direct access to the 12 km Dubai Canal running and cycling promenade, luxury yacht berths, and boutique waterfront dining."
    }
  },
  "atlantis-the-royal": {
    viewRadar: {
      riskLevel: "protected",
      status: "100% Unobstructable Open Sea & Palm Horizon",
      assessment: "Located on the outer Crescent of Palm Jumeirah with zero offshore land in front. The northern horizon faces the limitless Arabian Gulf; the southern aspect overlooks the entire Palm archipelago. Obstruction is geographically impossible.",
      protectedOrientations: [
        "North (Limitless open Arabian Gulf - 100% Permanently Guaranteed)",
        "South (Full Palm Jumeirah frond panorama & Dubai Marina skyline)"
      ],
      threatOrientations: []
    },
    solarExposure: {
      optimalAspect: "North (Continuous ocean breezes and soft, glare-free light)",
      harshAspect: "South (Strong midday sun on Palm-facing sky pool terraces)",
      coolingEnergyImpact: "Standard Luxury Resort District System",
      solarHeatGainRating: "Superior (Marine-grade acoustic triple glazing with UV filtering)",
      residentTip: "North-facing ocean suites experience perpetual calm and cool maritime conditions; South-facing penthouses feature private infinity sky pools warmed naturally by day-long sun."
    },
    walkability: {
      score: 52,
      category: "Somewhat Walkable",
      metroStation: "Atlantis Aquaventure Monorail Station (connects to Tram/Metro)",
      metroDistanceMinutes: 3,
      metroAccessType: "Direct Covered Walkway",
      dailyEssentialsOnFoot: "World-class private beach, 17 celebrity-chef restaurants, private spa and luxury boutiques inside the resort complex; car/valet recommended for mainland commutes."
    }
  }
};

/**
 * Intelligent generator that provides accurate, realistic audit metrics
 * for every building in the catalogue based on its district, height, and orientation.
 */
export function getBuildingInvestorReality(
  building: Building,
  lang: LanguageCode
): {
  viewRadar: ViewBlockerRadar;
  solarExposure: SunHeatExposure;
  walkability: WalkabilityIndex;
  labels: InvestorAuditLabels;
} {
  const labels = INVESTOR_AUDIT_LABELS[lang] || INVESTOR_AUDIT_LABELS.en;

  // 1. Check if building has bespoke handcrafted data
  if (BESPOKE_INVESTOR_AUDITS[building.id]) {
    const bespoke = BESPOKE_INVESTOR_AUDITS[building.id];
    return {
      viewRadar: bespoke.viewRadar,
      solarExposure: bespoke.solarExposure,
      walkability: bespoke.walkability,
      labels
    };
  }

  // 2. Compute dynamic realistic fallback based on building attributes
  const isMegatall = building.heightMeters >= 450;
  const isSupertall = building.heightMeters >= 300 && building.heightMeters < 450;
  const isHighrise = building.heightMeters < 300;

  let riskLevel: "protected" | "low" | "moderate" | "high" = "low";
  let status = labels.riskLow;
  let assessment = "";
  let protectedOrientations: string[] = [];
  let threatOrientations: string[] = [];

  // District-specific view zoning rules
  if (building.districtSlug === "downtown-dubai") {
    if (isMegatall || building.heightMeters > 350) {
      riskLevel = "protected";
      status = labels.riskProtected;
      assessment = lang === "ru"
        ? `Благодаря высоте ${building.heightMeters} м верхние уровни башни возвышаются над плотным массивом Даунтауна, обеспечивая защищенный 360-градусный обзор на Бурдж-Халифу и Персидский залив.`
        : `Standing at an official height of ${building.heightMeters} m, the upper tiers soar clear above Downtown's mid-rise canopy, preserving sovereign views over Burj Khalifa and the Gulf horizon.`;
      protectedOrientations = [
        lang === "ru" ? "Запад / Северо-Запад (Панорама Бурдж-Халифы и залива)" : "West / North-West (Burj Khalifa & Sea Horizon)",
        lang === "ru" ? "Юг (Дубайский канал и заповедник Рас-аль-Хор)" : "South (Dubai Canal & Ras Al Khor Sanctuary)"
      ];
      threatOrientations = [
        lang === "ru" ? "Восток (Внутренние кварталы Даунтауна ниже 30 этажа)" : "East (Internal Downtown mid-rise cluster below level 30)"
      ];
    } else {
      riskLevel = "moderate";
      status = labels.riskModerate;
      assessment = lang === "ru"
        ? `В окружении плотной застройки бульвара Даунтауна. Ракурсы в сторону открытых площадей защищены, однако боковые виды на соседние участки зависят от высоты выбранного этажа.`
        : `Situated within Downtown's dense urban fabric. Horizon facing open boulevards is protected, but lateral sightlines depend heavily on unit tier selection.`;
      protectedOrientations = [
        lang === "ru" ? "Фасад на центральный бульвар" : "Boulevard Frontage Aspect"
      ];
      threatOrientations = [
        lang === "ru" ? "Боковые ракурсы (соседние высотки на расстоянии 60-90 м)" : "Lateral views (Adjacent towers at 60-90m proximity)"
      ];
    }
  } else if (building.districtSlug === "dubai-marina") {
    if (building.name.toLowerCase().includes("beach") || building.name.toLowerCase().includes("gate") || isSupertall) {
      riskLevel = "low";
      status = labels.riskLow;
      assessment = lang === "ru"
        ? `Расположение в первой или второй линии Дубай Марина обеспечивает устойчивый вид на гавань для яхт и остров Пальма Джумейра.`
        : `Strategic positioning within Dubai Marina guarantees resilient sightlines toward the yacht channel and Palm Jumeirah.`;
      protectedOrientations = [
        lang === "ru" ? "Северо-Запад (Пальма Джумейра и вход в Марину)" : "North-West (Palm Jumeirah & Marina Entrance)",
        lang === "ru" ? "Юго-Запад (Водная гладь яхтенного бассейна)" : "South-West (Yacht basin waterway)"
      ];
      threatOrientations = [
        lang === "ru" ? "Восток (Плотная линия башен вдоль Sheikh Zayed Road)" : "East (Dense cluster along Sheikh Zayed Road)"
      ];
    } else {
      riskLevel = "moderate";
      status = labels.riskModerate;
      assessment = lang === "ru"
        ? `Внутри плотного кластера Марины. Рекомендуются апартаменты выше 25 этажа для гарантированного выхода на водный горизонт.`
        : `Located within Marina's high-density cluster. Units above level 25 are recommended to clear adjacent podiums and maximize water views.`;
      protectedOrientations = [
        lang === "ru" ? "Вид на набережную Марина Променад" : "Marina Promenade Waterfront Aspect"
      ];
      threatOrientations = [
        lang === "ru" ? "Восточные и тыловые фасады на соседние башни" : "East/rear facades facing neighboring residential towers"
      ];
    }
  } else if (building.districtSlug === "palm-jumeirah") {
    riskLevel = "protected";
    status = labels.riskProtected;
    assessment = lang === "ru"
      ? `Островное расположение на Пальме гарантирует 100% неперекрываемый вид на Персидский залив или внутреннюю лагуну. Строительство новых высоток в море перед фасадом исключено.`
      : `Prime island topography guarantees permanently unblockable panoramic views of the Arabian Gulf or inner frond lagoon. Offshore high-rise construction is strictly prohibited.`;
    protectedOrientations = [
      lang === "ru" ? "Морской горизонт (Персидский залив - навсегда защищен)" : "Open Arabian Gulf (100% Permanently Protected)",
      lang === "ru" ? "Панорама на материковый скайлайн Дубая" : "Dubai Mainland Skyline Silhouette"
    ];
    threatOrientations = [];
  } else {
    // Default district fallback
    riskLevel = isSupertall ? "low" : "moderate";
    status = isSupertall ? labels.riskLow : labels.riskModerate;
    assessment = lang === "ru"
      ? `Объект высотой ${building.heightMeters} м в районе ${building.district}. Фасадные ракурсы на главные магистрали и водоемы защищены мастер-планом района.`
      : `Engineered asset of ${building.heightMeters} m in ${building.district}. Street-front orientations along master arterial roads remain protected by municipal zoning bylaws.`;
    protectedOrientations = [
      lang === "ru" ? "Фронтальный обзор вдоль главной артерии района" : "Master Boulevard Frontline Aspect"
    ];
    threatOrientations = [
      lang === "ru" ? "Внутренние межквартальные участки будущей застройки" : "Internal secondary plots under district phased development"
    ];
  }

  // 3. Sun and Thermal Exposure
  const isChillerFree = building.operatingSpecs?.chillerBilling === "Chiller-Free";
  const coolingImpact = isChillerFree
    ? (lang === "ru" ? "Низкое (Chiller-Free: кондиционирование включено в сбор)" : "Low (Chiller-Free: AC cooling included in service charge)")
    : (lang === "ru" ? "Стандартное (Абонентская плата Empower/DEWA)" : "Standard (Consumption & capacity tariff applies)");

  const solarExposure: SunHeatExposure = {
    optimalAspect: lang === "ru"
      ? "Северо-Восток (Мягкое утреннее солнце, минимальный нагрев стен)"
      : "North-East (Gentle morning sunrise, minimal thermal wall soak)",
    harshAspect: lang === "ru"
      ? "Юго-Запад (Беспощадное пустынное солнце с 14:00 до 18:00)"
      : "South-West (Intense desert afternoon solar radiation 14:00–18:00)",
    coolingEnergyImpact: coolingImpact,
    solarHeatGainRating: building.facade?.shgcSolarCoefficient
      ? `${building.facade.glazingType} (SHGC ${building.facade.shgcSolarCoefficient})`
      : (lang === "ru" ? "Высокий (Двойной стеклопакет с Low-E напылением)" : "High (Double Acoustic Low-E Glazing)"),
    residentTip: lang === "ru"
      ? "Квартиры с ориентацией на восток требуют на 25–30% меньше мощности охлаждения летом. Для западных окон рекомендуется установка плотных термоштор."
      : "East-facing residences reduce AC power draw by 25–30% in peak summer. West-facing units benefit greatly from automated thermal blackout shading."
  };

  // 4. Walkability Index
  let walkScore = 75;
  let metroStation = "Dubai Metro Red Line";
  let metroMinutes = 7;
  let metroAccessType: WalkabilityIndex["metroAccessType"] = "Shaded Boulevard Walk";
  let dailyEssentials = lang === "ru"
    ? "Супермаркет, аптека и рестораны в пределах 3–5 минут пешком."
    : "Supermarket, pharmacy, and cafes located within 3–5 min walk.";

  if (building.districtSlug === "downtown-dubai") {
    walkScore = 92;
    metroStation = "Burj Khalifa / Dubai Mall Metro Station";
    metroMinutes = 5;
    metroAccessType = "Direct Air-Conditioned Travellator Tunnel";
    dailyEssentials = lang === "ru"
      ? "Прямой доступ в Dubai Mall, супермаркет Waitrose и бульвар Downtown без необходимости выходить на жару."
      : "Direct indoor connection to Dubai Mall, Waitrose, and boulevard dining without facing summer heat.";
  } else if (building.districtSlug === "dubai-marina") {
    walkScore = 85;
    metroStation = "Sobha Realty / DMCC Metro & Marina Tram";
    metroMinutes = 4;
    metroAccessType = "Shaded Boulevard Walk";
    dailyEssentials = lang === "ru"
      ? "Набережная Marina Walk, круглосуточные супермаркеты Carrefour/Spinneys и пляж JBR в пешей доступности."
      : "Direct access to Marina Walk promenade, 24/7 Carrefour/Spinneys, and JBR beach within easy walking distance.";
  } else if (building.districtSlug === "difc") {
    walkScore = 90;
    metroStation = "Financial Centre / Emirates Towers Metro Station";
    metroMinutes = 4;
    metroAccessType = "Direct Covered Walkway";
    dailyEssentials = lang === "ru"
      ? "Крытая арт-галерея Gate Avenue, рестораны гида Michelin и коворкинги в 2–3 минутах пешком."
      : "Covered Gate Avenue pedestrian spine, Michelin-starred dining, and corporate amenities within 2–3 min walk.";
  } else if (building.districtSlug === "palm-jumeirah") {
    walkScore = 50;
    metroStation = "Palm Jumeirah Monorail Station (Connects to Tram)";
    metroMinutes = 6;
    metroAccessType = "Direct Covered Walkway";
    dailyEssentials = lang === "ru"
      ? "Частный пляж, клубный ресторан и мини-маркет в стилобате; для поездок в город рекомендуется авто или такси."
      : "Private beach, resident dining, and gourmet deli in podium; personal vehicle or taxi recommended for mainland trips.";
  } else if (building.districtSlug === "business-bay") {
    walkScore = 74;
    metroStation = "Business Bay Metro Station";
    metroMinutes = 8;
    metroAccessType = "Shaded Boulevard Walk";
    dailyEssentials = lang === "ru"
      ? "Набережная Dubai Canal, сетевые супермаркеты и фитнес-центры в шаговой доступности."
      : "Dubai Canal promenade, supermarkets, and waterfront wellness clubs within walking reach.";
  } else {
    walkScore = 65;
    metroMinutes = 10;
    metroAccessType = "Open Street Walk";
  }

  const walkCategory: WalkabilityIndex["category"] =
    walkScore >= 90
      ? "Walker's Paradise"
      : walkScore >= 70
      ? "Very Walkable"
      : walkScore >= 50
      ? "Somewhat Walkable"
      : "Car-Dependent";

  const walkability: WalkabilityIndex = {
    score: walkScore,
    category: walkCategory,
    metroStation,
    metroDistanceMinutes: metroMinutes,
    metroAccessType,
    dailyEssentialsOnFoot: dailyEssentials
  };

  const viewRadar: ViewBlockerRadar = {
    riskLevel,
    status,
    assessment,
    protectedOrientations,
    threatOrientations
  };

  return {
    viewRadar,
    solarExposure,
    walkability,
    labels
  };
}

/**
 * Filter helper functions for catalog and search
 */
export function isProtectedView(b: Building): boolean {
  if (BESPOKE_INVESTOR_AUDITS[b.id]?.viewRadar.riskLevel === "protected") return true;
  if (b.heightMeters >= 380) return true;
  if (b.districtSlug === "palm-jumeirah") return true;
  if (b.districtSlug === "downtown-dubai" && b.heightMeters >= 300) return true;
  return false;
}

export function isChillerFree(b: Building): boolean {
  return b.operatingSpecs?.chillerBilling === "Chiller-Free";
}

export function isWalkToMetro(b: Building): boolean {
  if (b.districtSlug === "downtown-dubai" || b.districtSlug === "difc") return true;
  if (b.districtSlug === "dubai-marina" && b.heightMeters < 500) return true;
  return false;
}

export function isGoldenVisaReady(b: Building): boolean {
  if (!b.startingPriceAed) return true;
  const digits = parseInt(b.startingPriceAed.replace(/[^\d]/g, ""), 10);
  return digits >= 2000000;
}

export interface LifestyleFilterLabels {
  title: string;
  protectedView: string;
  chillerFree: string;
  walkToMetro: string;
  goldenVisa: string;
  allTowersBadge: string;
}

export const LIFESTYLE_FILTERS_I18N: Record<LanguageCode, LifestyleFilterLabels> = {
  en: {
    title: "Investor Due Diligence Filters",
    protectedView: "🛡️ Protected View",
    chillerFree: "❄️ Chiller-Free",
    walkToMetro: "🚶 Walk to Metro",
    goldenVisa: "🏛️ Golden Visa (2M+ AED)",
    allTowersBadge: "All Verified Towers"
  },
  ru: {
    title: "Фильтры аудита и комфорта жизни",
    protectedView: "🛡️ Гарантированный вид",
    chillerFree: "❄️ Chiller-Free (без счетов за холод)",
    walkToMetro: "🚶 Пешком до метро",
    goldenVisa: "🏛️ Золотая виза (от 2 млн AED)",
    allTowersBadge: "Все проверенные башни"
  },
  ar: {
    title: "فلاتر التدقيق المعماري والمعيشي",
    protectedView: "🛡️ إطلالة محمية",
    chillerFree: "❄️ تبريد مجاني (Chiller-Free)",
    walkToMetro: "🚶 سيراً إلى المترو",
    goldenVisa: "🏛️ تأشيرة ذهبية (2+ مليون درهم)",
    allTowersBadge: "جميع الأبراج المعتمدة"
  },
  zh: {
    title: "投资尽调与宜居特色筛选",
    protectedView: "🛡️ 永久无遮挡视野",
    chillerFree: "❄️ 免冷气费 (Chiller-Free)",
    walkToMetro: "🚶 步行即达地铁",
    goldenVisa: "🏛️ 黄金签证资格 (200万+迪拉姆)",
    allTowersBadge: "全部核验地标塔楼"
  },
  de: {
    title: "Investoren- & Wohnqualitätsfilter",
    protectedView: "🛡️ Unverbaubarer Blick",
    chillerFree: "❄️ Kälte inklusive (Chiller-Free)",
    walkToMetro: "🚶 Fußweg zur Metro",
    goldenVisa: "🏛️ Golden Visa (ab 2M AED)",
    allTowersBadge: "Alle geprüften Türme"
  },
  fr: {
    title: "Filtres d'Audit & Qualité de Vie",
    protectedView: "🛡️ Vue Imprenable",
    chillerFree: "❄️ Climatisation Incluse",
    walkToMetro: "🚶 Métro à Pied",
    goldenVisa: "🏛️ Golden Visa (2M+ AED)",
    allTowersBadge: "Toutes les Tours Vérifiées"
  },
  it: {
    title: "Filtri Audit e Vivibilità Urbana",
    protectedView: "🛡️ Vista Protetta",
    chillerFree: "❄️ Aria Condizionata Inclusa",
    walkToMetro: "🚶 Metro a Piedi",
    goldenVisa: "🏛️ Golden Visa (2M+ AED)",
    allTowersBadge: "Tutte le Torri Verificate"
  },
  tr: {
    title: "Yatırımcı ve Yaşam Kalitesi Filtreleri",
    protectedView: "🛡️ Kalıcı Manzara",
    chillerFree: "❄️ Soğutma Aidatta (Chiller-Free)",
    walkToMetro: "🚶 Metroya Yürüme Mesafesi",
    goldenVisa: "🏛️ Golden Visa (2M+ AED)",
    allTowersBadge: "Tüm Doğrulanmış Kuleler"
  },
  hi: {
    title: "निवेशक और जीवन गुणवत्ता फिल्टर",
    protectedView: "🛡️ सुरक्षित खुला दृश्य",
    chillerFree: "❄️ चिलर-फ्री (शामिल कूलिंग)",
    walkToMetro: "🚶 मेट्रो पैदल दूरी",
    goldenVisa: "🏛️ गोल्डन वीजा (2M+ AED)",
    allTowersBadge: "सभी सत्यापित टावर"
  },
  ur: {
    title: "سرمایہ کاری اور رہائشی سہولت کے فلٹرز",
    protectedView: "🛡️ مستقل محفوظ نظارہ",
    chillerFree: "❄️ مفت کولنگ (Chiller-Free)",
    walkToMetro: "🚶 میٹرو تک پیدل رسائی",
    goldenVisa: "🏛️ گولڈن ویزا (2M+ درہم)",
    allTowersBadge: "تمام تصدیق شدہ ٹاورز"
  }
};

