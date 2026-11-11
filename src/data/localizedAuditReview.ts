import { Building, BuildingAuditReview } from "@/data/buildings";
import { LanguageCode } from "@/i18n/languages";
import { CUSTOM_TOWER_AUDITS } from "./localizedAuditReviews/customAudits";

export { CUSTOM_TOWER_AUDITS };

/**
 * Standard templates for non-explicit buildings across all 10 languages
 */
export const AUDIT_TEMPLATES: Record<LanguageCode, {
  honestVerdict: (b: Building) => string;
  strengthLateral: (lateral: string) => string;
  strengthLift: (mfr: string, wait: string) => string;
  strengthLocation: (district: string) => string;
  pitfallServiceCharge: (charge: number) => string;
  pitfallEmpowerCooling: string;
  pitfallDewaCooling: string;
  pitfallTraffic: string;
  airbnbCommercial: string;
  airbnbResidential: string;
  guestParking: string;
  soundproofing: (spec?: string) => string;
  elevatorPeakWait: (wait: string) => string;
  costsChillerFree: string;
  costsDistrictCooling: (provider: string) => string;
}> = {
  en: {
    honestVerdict: (b) => `${b.name} in ${b.district} is a verified ${b.type.toLowerCase()} asset with an official height of ${b.heightMeters} m (${b.floors} storeys). Engineered with a ${b.structuralSystem.toLowerCase()}, it delivers solid structural stability and an estimated yield of ${b.investmentYield}.`,
    strengthLateral: (lat) => `Engineered with ${lat.toLowerCase()} ensuring excellent lateral and wind stability.`,
    strengthLift: (mfr, wait) => `Vertical transport powered by ${mfr} with a peak rush hour wait time of ${wait}.`,
    strengthLocation: (dist) => `Prime location within ${dist} with strong capital liquidity and proven tenant demand.`,
    pitfallServiceCharge: (sc) => `Annual service charges stand at ${sc} AED/sq.ft, which must be factored into net rental yield.`,
    pitfallEmpowerCooling: "Quarterly district cooling capacity fees apply year-round regardless of occupancy.",
    pitfallDewaCooling: "DEWA electrical tariffs fluctuate during peak summer cooling months due to heavy AC draw.",
    pitfallTraffic: "Peak commute hours in the surrounding district can create localized vehicle bottlenecks.",
    airbnbCommercial: "Not Applicable (Commercial Property)",
    airbnbResidential: "Subject to standard Dubai Department of Economy & Tourism (DET) licensing regulations and building HOA bylaws.",
    guestParking: "Visitor parking allocated via dedicated podium bays or valet service.",
    soundproofing: (spec) => spec || "STC 52 dB (Dual-glazed acoustic facade, high inter-unit isolation)",
    elevatorPeakWait: (wait) => wait,
    costsChillerFree: "Chiller-free billing protects owner from standalone AC demand tariffs; standard service fee applies.",
    costsDistrictCooling: (p) => `District cooling capacity charges (${p}) plus annual capital reserve allocations.`
  },
  ru: {
    honestVerdict: (b) => `«${b.name}» в районе ${b.district} — сертифицированный объект (${b.type}) официальной высотой ${b.heightMeters} м (${b.floors} этажей). Конструктивная схема: ${b.structuralSystem}, обеспечивающая высокую пространственную жесткость и прогнозируемую доходность ${b.investmentYield}.`,
    strengthLateral: (lat) => `Конструкция: ${lat}, гарантирующая исключительную ветровую и сейсмическую устойчивость.`,
    strengthLift: (mfr, wait) => `Скоростной вертикальный транспорт от ${mfr} со средним временем ожидания в часы пик ${wait}.`,
    strengthLocation: (dist) => `Престижное расположение в ${dist} с высокой ликвидностью капитала и устойчивым спросом арендаторов.`,
    pitfallServiceCharge: (sc) => `Ежегодные сервисные сборы составляют ${sc} AED/кв. фут, что необходимо учитывать в расчете чистой доходности.`,
    pitfallEmpowerCooling: "Ежеквартальные сборы за резервирование мощности охлаждения начисляются круглый год независимо от проживания.",
    pitfallDewaCooling: "Тарифы DEWA на электроэнергию возрастают в пиковые летние месяцы из-за повышенной нагрузки кондиционеров.",
    pitfallTraffic: "В часы пик на прилегающих развязках района возможны локальные транспортные задержки.",
    airbnbCommercial: "Не применимо (Коммерческое здание)",
    airbnbResidential: "Регулируется стандартными лицензиями DET и внутренними правилами ТСЖ дома.",
    guestParking: "Выделенные гостевые места на паркинге подиума или услуга консьерж-парковки (валет).",
    soundproofing: (spec) => spec || "STC 50–54 дБ (Двойной акустический стеклопакет, высокая межквартирная изоляция)",
    elevatorPeakWait: (wait) => wait,
    costsChillerFree: "Охлаждение включено в сервисный сбор (Chiller-Free), защищая владельца от отдельных счетов за кондиционирование.",
    costsDistrictCooling: (p) => `Сборы за резервирование мощности районного охлаждения (${p}) плюс отчисления в обязательный резервный фонд.`
  },
  ar: {
    honestVerdict: (b) => `يُعد ${b.name} في ${b.district} أصلاً معتمداً فئة (${b.type}) بارتفاع رسمي يبلغ ${b.heightMeters} متراً (${b.floors} طابقاً). صُمم بنظام ${b.structuralSystem}، مما يوفر استقراراً إنشائياً فائقاً وعائداً استثمارياً يقدر بـ ${b.investmentYield}.`,
    strengthLateral: (lat) => `نظام إنشائي: ${lat}، يوفر كفاءة استثنائية لمقاومة الرياح والأحمال الجانبية.`,
    strengthLift: (mfr, wait) => `مصاعد فائقة السرعة من تصنيع ${mfr} بمتوسط انتظار في أوقات الذروة يبلغ ${wait}.`,
    strengthLocation: (dist) => `موقع استراتيجي متميز في ${dist} يتمتع بسيولة استثمارية عالية وطلب إيجاري مستمر.`,
    pitfallServiceCharge: (sc) => `تبلغ رسوم الصيانة السنوية ${sc} درهم/قدم²، ويجب احتسابها بدقة ضمن صافي العائد الإيجاري.`,
    pitfallEmpowerCooling: "تُطبق رسوم سعة التبريد الفصلية على مدار العام بصرف النظر عن إشغال الشقة السكنية.",
    pitfallDewaCooling: "تخضع فواتير كهرباء هيئة كهرباء ومياه دبي لتقلبات التعرفة خلال أشهر الصيف الحارة.",
    pitfallTraffic: "قد تشهد الطرق والمخارج المحيطة بالمنطقة بعض التباطؤ والازدحام المروري في ساعات الذروة.",
    airbnbCommercial: "غير قابل للتطبيق (عقار تجاري)",
    airbnbResidential: "خاضع للوائح ترخيص دائرة الاقتصاد والسياحة (DET) واللائحة الداخلية لاتحاد الملاك.",
    guestParking: "مواقف زوار مخصصة في مبنى البوديوم أو متوفرة عبر خدمة صف السيارات (فاليه).",
    soundproofing: (spec) => spec || "STC 50–54 ديسيبل (واجهة زجاجية مزدوجة عازلة للصوت، عزل فائق بين الوحدات)",
    elevatorPeakWait: (wait) => wait,
    costsChillerFree: "التبريد مشمول بالكامل في رسوم الصيانة الأساسية (Chiller-Free)، مما يحمي المالك من فواتير منفصلة.",
    costsDistrictCooling: (p) => `رسوم سعة تبريد المناطق الإلزامية (${p}) بالإضافة إلى مخصصات صندوق الصيانة السنوي.`
  },
  zh: {
    honestVerdict: (b) => `${b.district}的${b.name}是经过官方核验的${b.type}核心资产，官方高度为${b.heightMeters}米（${b.floors}层）。建筑采用${b.structuralSystem}，具备出色的工程抗风抗震稳定性，预计净租金收益率为${b.investmentYield}。`,
    strengthLateral: (lat) => `工程结构：${lat}，确保卓越的侧向刚度与超强抗风稳定性。`,
    strengthLift: (mfr, wait) => `高速电梯系统由 ${mfr} 打造，高峰时段平均候梯时长仅为 ${wait}。`,
    strengthLocation: (dist) => `坐落于 ${dist} 核心黄金地段，具备高度流动性与持续稳健的高端承租需求。`,
    pitfallServiceCharge: (sc) => `年度物业管理费为 ${sc} AED/平方英尺，在测算实际净租金回报率时需予以扣除。`,
    pitfallEmpowerCooling: "无论房屋实际是否有人居住，每季度均需缴纳集中区域供冷基础容量维护费。",
    pitfallDewaCooling: "夏季高温月份空调用电负荷激增，DEWA 阶梯电费支出会有所上涨。",
    pitfallTraffic: "早晚通勤高峰期间，周边连接干道可能会出现短时间的局部车流密集或拥堵。",
    airbnbCommercial: "不适用（纯商业/办公楼宇）",
    airbnbResidential: "须遵循迪拜经济与旅游部（DET）短租民宿运营牌照法规及大厦业主公约要求。",
    guestParking: "访客停车位设于裙楼指定专属区域，或通过大厦代客泊车（Valet）服务提供。",
    soundproofing: (spec) => spec || "STC 50–54 分贝（双层中空隔音玻璃幕墙体系，优异户间声学降噪）",
    elevatorPeakWait: (wait) => wait,
    costsChillerFree: "免冷气费政策（Chiller-Free）免除业主的单独空调电费负担，统一计入基础物业费中。",
    costsDistrictCooling: (p) => `区域供冷基础容量费（${p}）加上年度公摊资本重置基金计提。`
  },
  de: {
    honestVerdict: (b) => `${b.name} in ${b.district} ist ein verifiziertes ${b.type}-Objekt mit einer offiziellen Höhe von ${b.heightMeters} m (${b.floors} Stockwerke). Konstruiert mit einem ${b.structuralSystem}, bietet das Gebäude solide strukturelle Stabilität und eine prognostizierte Rendite von ${b.investmentYield}.`,
    strengthLateral: (lat) => `Ausgelegt mit ${lat}, was eine hervorragende Seiten- und Windstabilität gewährleistet.`,
    strengthLift: (mfr, wait) => `Vertikaltransport von ${mfr} mit einer durchschnittlichen Wartezeit in Stoßzeiten von ${wait}.`,
    strengthLocation: (dist) => `Erstklassige Lage in ${dist} mit hoher Liquidität und stabiler Mieter-Nachfrage.`,
    pitfallServiceCharge: (sc) => `Die jährlichen Servicegebühren liegen bei ${sc} AED/sq.ft und müssen in die Nettorendite eingerechnet werden.`,
    pitfallEmpowerCooling: "Vierteljährliche Fernkälte-Kapazitätsgebühren fallen ganzjährig an, unabhängig vom tatsächlichen Leerstand.",
    pitfallDewaCooling: "DEWA-Stromtarife schwanken während der heißen Sommermonate aufgrund der hohen Klimalast.",
    pitfallTraffic: "Während der Hauptverkehrszeiten kann es im umliegenden Stadtviertel zu lokalen Staus kommen.",
    airbnbCommercial: "Nicht zutreffend (Gewerbliche Immobilie)",
    airbnbResidential: "Unterliegt den offiziellen Lizenzvorschriften des Dubai Department of Economy & Tourism (DET) und der Hausordnung.",
    guestParking: "Besucherparkplätze auf ausgewiesenen Podiumsplätzen oder über Valet-Service zugänglich.",
    soundproofing: (spec) => spec || "STC 50–54 dB (Doppelverglaste Akustikfassade, hohe Schallisolierung zwischen Einheiten)",
    elevatorPeakWait: (wait) => wait,
    costsChillerFree: "Chiller-Free Abrechnung schützt den Eigentümer vor separaten Kältekosten; es fällt nur die Standardgebühr an.",
    costsDistrictCooling: (p) => `Fernkälte-Kapazitätsgebühren (${p}) plus jährliche Rücklagen für die Gebäudeerhaltung.`
  },
  fr: {
    honestVerdict: (b) => `${b.name} à ${b.district} est un actif certifié (${b.type}) d'une hauteur officielle de ${b.heightMeters} m (${b.floors} étages). Conçu selon un système de ${b.structuralSystem}, il assure une excellente stabilité structurelle et un rendement estimé à ${b.investmentYield}.`,
    strengthLateral: (lat) => `Structure avec ${lat}, garantissant une résistance latérale et au vent exceptionnelle.`,
    strengthLift: (mfr, wait) => `Ascenseurs haute vitesse conçus par ${mfr} avec une attente en heure de pointe de ${wait}.`,
    strengthLocation: (dist) => `Emplacement stratégique à ${dist} bénéficiant d'une excellente liquidité et d'une forte demande locative.`,
    pitfallServiceCharge: (sc) => `Les charges de copropriété s'élèvent à ${sc} AED/pi², à intégrer au calcul du rendement net.`,
    pitfallEmpowerCooling: "Les frais de capacité de climatisation urbaine s'appliquent toute l'année, même en cas de vacance locative.",
    pitfallDewaCooling: "Les tarifs d'électricité DEWA connaissent des hausses en période estivale en raison de la forte demande de climatisation.",
    pitfallTraffic: "Les heures de pointe sur les axes routiers environnants peuvent engendrer des ralentissements ponctuels.",
    airbnbCommercial: "Non applicable (Immeuble à usage commercial)",
    airbnbResidential: "Soumis aux règles de licence du DET de Dubaï et au règlement intérieur de l'association des propriétaires (HOA).",
    guestParking: "Stationnement visiteurs attribué sur des emplacements dédiés au podium ou via voiturier.",
    soundproofing: (spec) => spec || "STC 50–54 dB (Façade à double vitrage acoustique, isolation soignée entre appartements)",
    elevatorPeakWait: (wait) => wait,
    costsChillerFree: "La formule Chiller-Free protège le propriétaire des surcoûts individuels de climatisation, inclus dans les charges.",
    costsDistrictCooling: (p) => `Frais fixes de capacité de climatisation urbaine (${p}) et provisions annuelles pour travaux d'entretien.`
  },
  it: {
    honestVerdict: (b) => `${b.name} a ${b.district} è un immobile verificato (${b.type}) con un'altezza ufficiale di ${b.heightMeters} m (${b.floors} piani). Ingegnerizzato con ${b.structuralSystem}, garantisce un'eccellente stabilità strutturale e un rendimento stimato del ${b.investmentYield}.`,
    strengthLateral: (lat) => `Progettato con ${lat}, a garanzia di una tenuta laterale e al vento di massimo livello.`,
    strengthLift: (mfr, wait) => `Trasporto verticale affidato a ${mfr} con tempo di attesa medio nelle ore di punta di ${wait}.`,
    strengthLocation: (dist) => `Posizione privilegiata all'interno di ${dist} con forte liquidità del capitale e domanda locativa costante.`,
    pitfallServiceCharge: (sc) => `Le spese condominiali ammontano a ${sc} AED/sq.ft, voce da computare per il rendimento netto.`,
    pitfallEmpowerCooling: "Le tariffe per la capacità del teleriscaldamento si applicano trimestralmente tutto l'anno a prescindere dall'occupazione.",
    pitfallDewaCooling: "Le tariffe elettriche DEWA subiscono oscillazioni nei mesi estivi a causa del condizionamento intensivo.",
    pitfallTraffic: "Le ore di punta nei nodi viari circostanti possono generare temporanei rallentamenti del traffico.",
    airbnbCommercial: "Non applicabile (Immobile ad uso commerciale)",
    airbnbResidential: "Soggetto alle normative sulle licenze del DET di Dubai e al regolamento interno del condominio.",
    guestParking: "Posti auto per visitatori disponibili nel podio o tramite comodo servizio di car valet.",
    soundproofing: (spec) => spec || "STC 50–54 dB (Facciata con doppio vetro acustico, alto isolamento tra alloggi)",
    elevatorPeakWait: (wait) => wait,
    costsChillerFree: "La fatturazione Chiller-Free protegge il proprietario da spese energetiche separate per l'aria condizionata.",
    costsDistrictCooling: (p) => `Costi di capacità fissa del raffrescamento distrettuale (${p}) e quote del fondo di riserva per manutenzione.`
  },
  tr: {
    honestVerdict: (b) => `${b.district} bölgesindeki ${b.name}, ${b.heightMeters} m resmi yüksekliğe (${b.floors} kat) sahip tescilli bir ${b.type} varlığıdır. ${b.structuralSystem} ile inşa edilmiş olup yüksek yapısal stabilite ve %${b.investmentYield} tahmini net getiri sunar.`,
    strengthLateral: (lat) => `Yapısal sistem: ${lat}, mükemmel rüzgar ve yanal yük direnci sağlar.`,
    strengthLift: (mfr, wait) => `${mfr} marka yüksek hızlı asansörler ile zirve saatlerde ortalama bekleme süresi ${wait}.`,
    strengthLocation: (dist) => `${dist} bölgesinde yüksek sermaye likiditesine ve güçlü kiracı talebine sahip stratejik konum.`,
    pitfallServiceCharge: (sc) => `Yıllık aidat bedeli ${sc} AED/sq.ft olup, net kira getirisi hesabına dahil edilmelidir.`,
    pitfallEmpowerCooling: "Üç aylık bölge soğutma kapasite ücretleri dairenin doluluk durumuna bakılmaksızın yıl boyunca tahakkuk eder.",
    pitfallDewaCooling: "Yaz aylarında yoğun klima kullanımı sebebiyle DEWA elektrik tarifelerinde artış gözlemlenir.",
    pitfallTraffic: "İş çıkışı yoğun saatlerde çevre bağlantı yollarında bölgesel trafik yoğunlukları yaşanabilmektedir.",
    airbnbCommercial: "Geçerli Değil (Ticari Bina)",
    airbnbResidential: "Dubai Ekonomi ve Turizm Departmanı (DET) lisans yönetmeliklerine ve bina yönetim planına tabidir.",
    guestParking: "Podyum katında ayrılmış misafir otopark alanları veya vale hizmeti ile sağlanmaktadır.",
    soundproofing: (spec) => spec || "STC 50–54 dB (Çift camlı akustik cephe, daireler arası yüksek ses yalıtımı)",
    elevatorPeakWait: (wait) => wait,
    costsChillerFree: "Klima tüketimi aidata dahildir (Chiller-Free), bu durum mülk sahibini sürpriz soğutma faturalarından korur.",
    costsDistrictCooling: (p) => `Bölge soğutma kapasite bedelleri (${p}) artı yıllık zorunlu bakım ve yenileme rezervi kesintileri.`
  },
  hi: {
    honestVerdict: (b) => `${b.district} में ${b.name} एक सत्यापित ${b.type} संपत्ति है जिसकी आधिकारिक ऊंचाई ${b.heightMeters} मीटर (${b.floors} मंजिलें) है। ${b.structuralSystem} के साथ निर्मित, यह मजबूत संरचनात्मक स्थिरता और ${b.investmentYield} का अनुमानित शुद्ध रिटर्न प्रदान करता है।`,
    strengthLateral: (lat) => `इंजीनियरिंग: ${lat}, जो उत्कृष्ट पार्श्व और वायु स्थिरता सुनिश्चित करता है।`,
    strengthLift: (mfr, wait) => `${mfr} द्वारा संचालित वर्टिकल ट्रांसपोर्ट, व्यस्त घंटों में औसत प्रतीक्षा समय ${wait}।`,
    strengthLocation: (dist) => `${dist} में मुख्य स्थान, मजबूत पूंजी तरलता और सिद्ध किरायेदार मांग के साथ।`,
    pitfallServiceCharge: (sc) => `वार्षिक सेवा शुल्क ${sc} AED/वर्ग फुट है, जिसे शुद्ध किराये की गणना में शामिल किया जाना चाहिए।`,
    pitfallEmpowerCooling: "अधिभोग की स्थिति की परवाह किए बिना साल भर त्रैमासिक डिस्ट्रिक्ट कूलिंग क्षमता शुल्क लागू होते हैं।",
    pitfallDewaCooling: "गर्मियों के चरम महीनों में भारी एसी उपयोग के कारण डीईडब्ल्यूए बिजली दरों में उतार-चढ़ाव होता है।",
    pitfallTraffic: "आसपास के जिले में व्यस्त आवागमन के घंटों के दौरान स्थानीय वाहन जाम की स्थिति बन सकती है।",
    airbnbCommercial: "लागू नहीं (व्यावसायिक संपत्ति)",
    airbnbResidential: "दुबई अर्थव्यवस्था और पर्यटन विभाग (DET) लाइसेंसिंग नियमों और भवन उप-नियमों के अधीन।",
    guestParking: "समर्पित पोडियम बे या वैलेट सेवा के माध्यम से आगंतुक पार्किंग आवंटित की जाती है।",
    soundproofing: (spec) => spec || "एसटीसी 50–54 डीबी (दोहरे शीशे वाला ध्वनिक मुखौटा, इकाइयों के बीच उच्च अलगाव)",
    elevatorPeakWait: (wait) => wait,
    costsChillerFree: "चिलर-मुक्त बिलिंग मालिक को अलग एसी मांग शुल्क से बचाती है; सामान्य सेवा शुल्क लागू होता है।",
    costsDistrictCooling: (p) => `डिस्ट्रिक्ट कूलिंग क्षमता शुल्क (${p}) और वार्षिक पूंजी आरक्षित आवंटन।`
  },
  ur: {
    honestVerdict: (b) => `${b.district} میں ${b.name} ایک تصدیق شدہ ${b.type} اثاثہ ہے جس کی سرکاری اونچائی ${b.heightMeters} میٹر (${b.floors} منزلیں) ہے۔ ${b.structuralSystem} کے ساتھ تیار کردہ، یہ مضبوط ساختی استحکام اور ${b.investmentYield} متوقع خالص منافع فراہم کرتا ہے۔`,
    strengthLateral: (lat) => `ساختی نظام: ${lat}، جو بہترین ہوا اور سائیڈ استحکام فراہم کرتا ہے۔`,
    strengthLift: (mfr, wait) => `${mfr} کا تیز رفتار لفٹ سسٹم، رش کے اوقات میں انتظار کا وقت ${wait}۔`,
    strengthLocation: (dist) => `${dist} میں شاندار پرائم لوکیشن، بہترین کیپٹل لیکویڈیٹی اور مستحکم کرایہ داری کے ساتھ۔`,
    pitfallServiceCharge: (sc) => `سالانہ سروس چارجز ${sc} درہم فی مربع فٹ ہیں، جنہیں خالص کرائے کے منافع میں شمار کیا جانا چاہیے۔`,
    pitfallEmpowerCooling: "ڈسٹرکٹ کولنگ کے سہ ماہی کیپیسٹی چارجز مکان میں رہائش نہ ہونے کے باوجود پورے سال لاگو رہتے ہیں۔",
    pitfallDewaCooling: "موسم گرما کے مہینوں میں زیادہ ایئر کنڈیشننگ کے باعث DEWA بجلی کے نرخوں میں اضافہ ہوتا ہے۔",
    pitfallTraffic: "رش کے اوقات میں آس پاس کی سڑکوں پر ٹریفک کی عارضی سست روی یا رکاوٹ پیش آ سکتی ہے۔",
    airbnbCommercial: "لاگو نہیں (تجارتی عمارت)",
    airbnbResidential: "دبئی ڈیپارٹمنٹ آف اکانومی اینڈ ٹورزم (DET) کے لائسنسنگ قوانین اور بلڈنگ کے ضوابط کے تابع۔",
    guestParking: "مہمانوں کی پارکنگ پوڈیم میں مخصوص جگہوں یا ویلٹ سروس کے ذریعے فراہم کی جاتی ہے۔",
    soundproofing: (spec) => spec || "ایس ٹی سی 50 تا 54 ڈی بی (ڈبل گلیزڈ صوتی فساڈ، رہائشی یونٹس کے درمیان بہترین خاموشی)",
    elevatorPeakWait: (wait) => wait,
    costsChillerFree: "چلر فری نظام مالک کو ایئر کنڈیشننگ کے الگ بلوں سے محفوظ رکھتا ہے؛ اخراجات سروس فیس میں شامل ہیں۔",
    costsDistrictCooling: (p) => `ڈسٹرکٹ کولنگ کیپیسٹی چارجز (${p}) مع سالانہ مینٹیننس ریزرو فنڈ۔`
  }
};

/**
 * Returns a fully localized BuildingAuditReview for any building in any language.
 */
export function getLocalizedBuildingAuditReview(
  building: Building,
  lang: LanguageCode
): BuildingAuditReview {
  // 1. Check if tower has custom localized review
  const towerCustom = CUSTOM_TOWER_AUDITS[building.id] || (building.slug && CUSTOM_TOWER_AUDITS[building.slug]);
  if (towerCustom && towerCustom[lang]) {
    return towerCustom[lang]!;
  }

  // 2. Fallback to generating review dynamically using the language's native template
  const tmpl = AUDIT_TEMPLATES[lang] || AUDIT_TEMPLATES.en;

  const isEmpower = building.operatingSpecs?.coolingProvider
    ? building.operatingSpecs.coolingProvider.toLowerCase().includes("empower")
    : true;
  const isChillerFree = building.operatingSpecs?.chillerBilling
    ? building.operatingSpecs.chillerBilling.toLowerCase().includes("free") ||
      building.operatingSpecs.chillerBilling.toLowerCase().includes("включено") ||
      building.operatingSpecs.chillerBilling.toLowerCase().includes("مشمول") ||
      building.operatingSpecs.chillerBilling.toLowerCase().includes("incluso") ||
      building.operatingSpecs.chillerBilling.toLowerCase().includes("dahili") ||
      building.operatingSpecs.chillerBilling.toLowerCase().includes("包含")
    : false;
  const serviceCharge = building.operatingSpecs?.annualServiceChargeAedSqFt || 18.5;
  const coolingProvider = building.operatingSpecs?.coolingProvider || "District Cooling";
  const lateralSystem = building.windStructural?.lateralSystem || "Reinforced concrete core";
  const mfr = building.verticalTransport?.elevatorManufacturer || "Otis / Schindler";
  const peakWait = building.verticalTransport?.peakWaitingSeconds || "< 45s";
  const soundproofing = building.operatingSpecs?.acousticRatingDb;

  return {
    honestVerdict: tmpl.honestVerdict(building),
    strengths: [
      tmpl.strengthLateral(lateralSystem),
      tmpl.strengthLift(mfr, peakWait),
      tmpl.strengthLocation(building.district)
    ],
    pitfallsAndWeaknesses: [
      tmpl.pitfallServiceCharge(serviceCharge),
      isEmpower ? tmpl.pitfallEmpowerCooling : tmpl.pitfallDewaCooling,
      tmpl.pitfallTraffic
    ],
    airbnbHolidayHomesPolicy:
      building.type.toLowerCase().includes("commercial") ||
      building.type.toLowerCase().includes("коммерческ") ||
      building.type.toLowerCase().includes("تجاري")
        ? tmpl.airbnbCommercial
        : tmpl.airbnbResidential,
    guestParkingReality: tmpl.guestParking,
    soundproofingRating: tmpl.soundproofing(soundproofing),
    elevatorPeakWaitReality: tmpl.elevatorPeakWait(peakWait),
    hiddenOperatingCosts: isChillerFree
      ? tmpl.costsChillerFree
      : tmpl.costsDistrictCooling(coolingProvider)
  };
}

/**
 * UI labels for the technical audit card & sidebar actions in all 10 languages
 */
export const AUDIT_UI_LABELS: Record<LanguageCode, {
  auditBadge: string;
  auditTitle: string;
  verdictBadge: string;
  strengthsTitle: string;
  pitfallsTitle: string;
  liftWait: string;
  guestParking: string;
  soundproofing: string;
  airbnbPolicy: string;
  hiddenCostsNotice: string;
  prePurchaseAuditTitle: (name: string) => string;
  prePurchaseAuditSubtitle: string;
  requestAuditBtn: string;
  downloadDossierTitle: (name: string) => string;
  downloadDossierSubtitle: string;
  downloadDossierBtn: string;
  openDossierModal: string;
  consultArchitectBtn: string;
  neutralityLabel: string;
  neutralityText: string;
  serviceChargeUnit: string;
}> = {
  en: {
    auditBadge: "Independent Technical Audit • No Broker Bias",
    auditTitle: "Resident Reality Check & Operational Truth",
    verdictBadge: "Independent Engineering & Investment Verdict",
    strengthsTitle: "Verified Engineering & Asset Strengths",
    pitfallsTitle: "Hidden Pitfalls & Operational Flaws",
    liftWait: "Rush Hour Lift Wait",
    guestParking: "Guest Parking",
    soundproofing: "Acoustic Isolation",
    airbnbPolicy: "Holiday Homes / Airbnb",
    hiddenCostsNotice: "Auditor Notice on Hidden Costs: ",
    prePurchaseAuditTitle: (n) => `Pre-Purchase Technical Audit: ${n}`,
    prePurchaseAuditSubtitle: "Obtain an independent engineering assessment on finishes, acoustics, and service charge records before signing Form F.",
    requestAuditBtn: "Request Technical Due Diligence",
    downloadDossierTitle: (n) => `Download Engineering Dossier: ${n}`,
    downloadDossierSubtitle: "Comprehensive dossier: geotechnical passport, DLD service fee history, and floorplan catalog.",
    downloadDossierBtn: "Download Engineering & Cost Dossier (PDF)",
    openDossierModal: "Open Executive Dossier Modal",
    consultArchitectBtn: "Consult Architectural Advisor",
    neutralityLabel: "Neutrality Guarantee:",
    neutralityText: "We are not affiliated with specific developers. Every appraisal is based on objective structural TTX and resident data.",
    serviceChargeUnit: "AED/sq.ft"
  },
  ru: {
    auditBadge: "Независимый технический аудит • Без риелторского глянца",
    auditTitle: "Реальность резидента и операционная правда",
    verdictBadge: "Независимый инженерный и инвестиционный вердикт",
    strengthsTitle: "Подтвержденные инженерные плюсы",
    pitfallsTitle: "Скрытые минусы (О чем молчат брокеры)",
    liftWait: "Лифты в час пик",
    guestParking: "Гостевая парковка",
    soundproofing: "Шумоизоляция",
    airbnbPolicy: "Политика Airbnb",
    hiddenCostsNotice: "Предостережение ревизора о расходах: ",
    prePurchaseAuditTitle: (n) => `Запрос технического аудита: ${n}`,
    prePurchaseAuditSubtitle: "Получите независимое заключение инженера по качеству отделки, шумоизоляции и ведомости расходов до внесения депозита.",
    requestAuditBtn: "Запросить независимый тех-аудит",
    downloadDossierTitle: (n) => `Скачать инженерный паспорт: ${n}`,
    downloadDossierSubtitle: "Полный файл: геотехнический паспорт, история сервисных сборов DLD и поэтажные планы.",
    downloadDossierBtn: "Скачать паспорт башни и расходы (PDF)",
    openDossierModal: "Открыть паспорт в компактном окне",
    consultArchitectBtn: "Консультация с архитектором",
    neutralityLabel: "Принцип нейтралитета:",
    neutralityText: "Мы не аффилированы с конкретными девелоперами. Каждое заключение опирается на объективные ТТХ и опыт резидентов.",
    serviceChargeUnit: "AED / кв. фут"
  },
  ar: {
    auditBadge: "تدقيق فني مستقل • بدون تحيز عقاري",
    auditTitle: "واقع الإقامة وحقائق التشغيل الفعلية",
    verdictBadge: "التقييم الهندسي والاستثماري المستقل",
    strengthsTitle: "المزايا الهندسية والأصول المؤكدة",
    pitfallsTitle: "العيوب الخفية والمحاذير التشغيلية (ما يخفيه الوسطاء)",
    liftWait: "انتظار المصاعد في الذروة",
    guestParking: "مواقف الزوار",
    soundproofing: "العزل الصوتي",
    airbnbPolicy: "سياسة تأجير العطلات (Airbnb)",
    hiddenCostsNotice: "تنبيه المدقق بشأن التكاليف التشغيلية الخفية: ",
    prePurchaseAuditTitle: (n) => `طلب تقرير التدقيق الفني: ${n}`,
    prePurchaseAuditSubtitle: "احصل على تقييم هندسي مستقل لجودة التشطيبات والعزل الصوتي وسجل رسوم الصيانة قبل توقيع استمارة الشراء.",
    requestAuditBtn: "طلب التدقيق الفني المسبق",
    downloadDossierTitle: (n) => `تحميل الملف الهندسي الشامل: ${n}`,
    downloadDossierSubtitle: "ملف كامل: الجواز الجيوتقني، وسجل رسوم أراضي دبي (DLD)، ومخططات الطوابق التفصيلية.",
    downloadDossierBtn: "تحميل الجواز الهندسي والمالي (PDF)",
    openDossierModal: "فتح ملف الجواز الهندسي في نافذة منبثقة",
    consultArchitectBtn: "استشارة مع مهندس معماري",
    neutralityLabel: "ضمان الحياد والاستقلالية:",
    neutralityText: "نحن غير تابعين لأي مطور عقاري. كل تقييم يستند حصراً إلى المواصفات الهندسية وبيانات السكان الميدانية.",
    serviceChargeUnit: "درهم / قدم²"
  },
  zh: {
    auditBadge: "独立工程技术审计 • 拒绝中介滤镜",
    auditTitle: "住户居住实情与实际运营真相",
    verdictBadge: "独立工程与投资评估结论",
    strengthsTitle: "经验证的工程结构与资产核心优势",
    pitfallsTitle: "隐性缺陷与运营短板 (中介绝不会告诉你的秘密)",
    liftWait: "早晚高峰候梯时长",
    guestParking: "访客临时停车位",
    soundproofing: "隔音防噪等级",
    airbnbPolicy: "短租 / Airbnb 托管政策",
    hiddenCostsNotice: "审计师隐性运营成本特别提示: ",
    prePurchaseAuditTitle: (n) => `认购前独立工程技术尽调: ${n}`,
    prePurchaseAuditSubtitle: "在签署定金协议前，获取关于施工精装品质、隔音水准与历史实际物业费核算的独立工程师鉴定意见。",
    requestAuditBtn: "申请独立工程尽调报告",
    downloadDossierTitle: (n) => `下载完整工程档案白皮书: ${n}`,
    downloadDossierSubtitle: "综合工程全景文件：包含地基岩土参数、迪拜土地局（DLD）历史物业费账册与楼层户型图册。",
    downloadDossierBtn: "下载大厦工程与运营成本白皮书 (PDF)",
    openDossierModal: "在弹出窗口中查看完整工程底册",
    consultArchitectBtn: "预约注册建筑师顾问咨询",
    neutralityLabel: "独立中立准则保证:",
    neutralityText: "我们与任何具体开发商均无利益绑定。所有评估结论均建立在客观工程技术指标与真实住户运营数据之上。",
    serviceChargeUnit: "AED/平方英尺"
  },
  de: {
    auditBadge: "Unabhängiges technisches Audit • Ohne Maklerfilter",
    auditTitle: "Bewohner-Realität & Operative Wahrheit",
    verdictBadge: "Unabhängiges Ingenieur- & Investitionsurteil",
    strengthsTitle: "Bestätigte Ingenieur- & Asset-Vorteile",
    pitfallsTitle: "Versteckte Schwachstellen (Was Makler verschweigen)",
    liftWait: "Aufzug-Wartezeit Stoßzeit",
    guestParking: "Gästeparkplätze",
    soundproofing: "Schallschutz",
    airbnbPolicy: "Kurzzeitvermietung / Airbnb",
    hiddenCostsNotice: "Prüferhinweis zu versteckten Kosten: ",
    prePurchaseAuditTitle: (n) => `Technisches Ankauf-Audit: ${n}`,
    prePurchaseAuditSubtitle: "Erhalten Sie vor Unterzeichnung des Kaufvertrags ein unabhängiges Gutachten zu Bauausführung, Schallschutz und Servicegebühren.",
    requestAuditBtn: "Technisches Gutachten anfordern",
    downloadDossierTitle: (n) => `Ingenieurs-Dossier herunterladen: ${n}`,
    downloadDossierSubtitle: "Umfassendes Dossier: geotechnischer Pass, DLD-Gebührenhistorie und Grundrisskatalog.",
    downloadDossierBtn: "Technisches Dossier & Kostenplan (PDF) laden",
    openDossierModal: "Technisches Dossier im Vorschaufenster öffnen",
    consultArchitectBtn: "Architektur-Fachberater konsultieren",
    neutralityLabel: "Neutralitätsgarantie:",
    neutralityText: "Wir sind nicht an bestimmte Bauträger gebunden. Jede Bewertung basiert auf objektiven Daten und realen Bewohnererfahrungen.",
    serviceChargeUnit: "AED/sq.ft"
  },
  fr: {
    auditBadge: "Audit technique indépendant • Sans biais commercial",
    auditTitle: "Réalité des résidents et vérité opérationnelle",
    verdictBadge: "Verdict technique et d'investissement indépendant",
    strengthsTitle: "Points forts techniques et d'actifs vérifiés",
    pitfallsTitle: "Pièges cachés et faiblesses opérationnelles",
    liftWait: "Attente ascenseurs en pointe",
    guestParking: "Stationnement visiteurs",
    soundproofing: "Isolation phonique",
    airbnbPolicy: "Locations courtes durées / Airbnb",
    hiddenCostsNotice: "Avertissement de l'auditeur sur les frais cachés : ",
    prePurchaseAuditTitle: (n) => `Audit technique avant achat : ${n}`,
    prePurchaseAuditSubtitle: "Obtenez une expertise technique indépendante sur les finitions, l'insonorisation et l'historique des charges avant d'engager votre dépôt.",
    requestAuditBtn: "Demander l'audit technique préalable",
    downloadDossierTitle: (n) => `Télécharger le dossier technique : ${n}`,
    downloadDossierSubtitle: "Dossier exhaustif : passeport géotechnique, historique des charges DLD et catalogue des plans.",
    downloadDossierBtn: "Télécharger le passeport technique et financier (PDF)",
    openDossierModal: "Ouvrir le dossier technique dans une fenêtre",
    consultArchitectBtn: "Consulter un conseiller architecte",
    neutralityLabel: "Garantie de neutralité :",
    neutralityText: "Nous ne sommes affiliés à aucun promoteur. Chaque évaluation repose sur des données techniques objectives et l'expérience des résidents.",
    serviceChargeUnit: "AED/pi²"
  },
  it: {
    auditBadge: "Audit tecnico indipendente • Senza filtri commerciali",
    auditTitle: "Realtà dei residenti e verità operativa",
    verdictBadge: "Verdetto ingegneristico e d'investimento indipendente",
    strengthsTitle: "Punti di forza ingegneristici verificati",
    pitfallsTitle: "Insidie nascoste e difetti operativi",
    liftWait: "Attesa ascensore ora di punta",
    guestParking: "Parcheggio visitatori",
    soundproofing: "Isolamento acustico",
    airbnbPolicy: "Affitti brevi / Airbnb",
    hiddenCostsNotice: "Avviso del revisore sui costi occulti: ",
    prePurchaseAuditTitle: (n) => `Audit tecnico pre-acquisto: ${n}`,
    prePurchaseAuditSubtitle: "Ottieni una perizia ingegneristica indipendente su finiture, isolamento acustico e storico spese prima di firmare il Form F.",
    requestAuditBtn: "Richiedi due diligence tecnica",
    downloadDossierTitle: (n) => `Scarica fascicolo ingegneristico: ${n}`,
    downloadDossierSubtitle: "Dossier completo: passaporto geotecnico, storico tariffe DLD e planimetrie.",
    downloadDossierBtn: "Scarica fascicolo tecnico e costi (PDF)",
    openDossierModal: "Apri il dossier tecnico nella finestra modale",
    consultArchitectBtn: "Consulta un architetto qualificato",
    neutralityLabel: "Garanzia di neutralità:",
    neutralityText: "Non siamo affiliati con specifici sviluppatori. Ogni perizia si basa su parametri tecnici oggettivi e riscontri dei residenti.",
    serviceChargeUnit: "AED/sq.ft"
  },
  tr: {
    auditBadge: "Bağımsız Teknik Denetim • Emlakçı Filtresi Yok",
    auditTitle: "Sakinlerin Gerçekleri ve İşletme Doğruları",
    verdictBadge: "Bağımsız Mühendislik ve Yatırım Kararı",
    strengthsTitle: "Doğrulanmış Mühendislik ve Varlık Artıları",
    pitfallsTitle: "Gizli Kusurlar ve İşletme Riskleri",
    liftWait: "Zirve Saat Asansör Bekleme",
    guestParking: "Misafir Otoparkı",
    soundproofing: "Ses Yalıtımı",
    airbnbPolicy: "Tatil Evleri / Airbnb Politikası",
    hiddenCostsNotice: "Gizli Masraflar Hakkında Denetçi Uyarısı: ",
    prePurchaseAuditTitle: (n) => `Satın Alma Öncesi Teknik Denetim: ${n}`,
    prePurchaseAuditSubtitle: "Form F imzalamadan önce malzeme kalitesi, ses izolasyonu ve geçmiş aidat kayıtları hakkında bağımsız mühendislik raporu alın.",
    requestAuditBtn: "Bağımsız Teknik Denetim Talep Et",
    downloadDossierTitle: (n) => `Mühendislik Dosyasını İndir: ${n}`,
    downloadDossierSubtitle: "Kapsamlı teknik dosya: geoteknik pasaport, DLD aidat geçmişi ve kat planları kataloğu.",
    downloadDossierBtn: "Bina Pasaportu ve Gider Raporunu İndir (PDF)",
    openDossierModal: "Teknik pasaportu açılır pencerede görüntüle",
    consultArchitectBtn: "Mimar Danışman ile Görüşün",
    neutralityLabel: "Tarafsızlık Güvencesi:",
    neutralityText: "Belirli geliştiricilere bağlı değiliz. Her değerlendirme nesnel teknik verilere ve sakinlerin gerçek deneyimlerine dayanır.",
    serviceChargeUnit: "AED/sq.ft"
  },
  hi: {
    auditBadge: "स्वतंत्र तकनीकी ऑडिट • बिना किसी ब्रोकर पूर्वाग्रह के",
    auditTitle: "निवासियों की वास्तविकता और परिचालन सच्चाई",
    verdictBadge: "स्वतंत्र इंजीनियरिंग और निवेश निर्णय",
    strengthsTitle: "सत्यापित इंजीनियरिंग और संपत्ति की ताकत",
    pitfallsTitle: "छिपी हुई कमियां (जो ब्रोकर कभी नहीं बताते)",
    liftWait: "व्यस्त समय में लिफ्ट प्रतीक्षा",
    guestParking: "अतिथि पार्किंग",
    soundproofing: "ध्वनि इन्सुलेशन",
    airbnbPolicy: "हॉलिडे होम्स / एयरबीएनबी नीति",
    hiddenCostsNotice: "छिपी हुई लागतों पर ऑडिटर की चेतावनी: ",
    prePurchaseAuditTitle: (n) => `खरीद-पूर्व तकनीकी ऑडिट: ${n}`,
    prePurchaseAuditSubtitle: "फॉर्म एफ पर हस्ताक्षर करने से पहले फिनिश, ध्वनिकी और सेवा शुल्क रिकॉर्ड पर एक स्वतंत्र इंजीनियरिंग मूल्यांकन प्राप्त करें।",
    requestAuditBtn: "तकनीकी जांच का अनुरोध करें",
    downloadDossierTitle: (n) => `इंजीनियरिंग डोजियर डाउनलोड करें: ${n}`,
    downloadDossierSubtitle: "व्यापक डोजियर: भू-तकनीकी पासपोर्ट, डीएलडी सेवा शुल्क इतिहास और फ्लोरप्लान कैटलॉग।",
    downloadDossierBtn: "इंजीनियरिंग और लागत डोजियर (पीडीएफ) डाउनलोड करें",
    openDossierModal: "कार्यकारी डोजियर को पॉपअप विंडो में खोलें",
    consultArchitectBtn: "वास्तु सलाहकार से परामर्श करें",
    neutralityLabel: "तटस्थता गारंटी:",
    neutralityText: "हम विशिष्ट डेवलपर्स से संबद्ध नहीं हैं। प्रत्येक मूल्यांकन वस्तुनिष्ठ संरचनात्मक विनिर्देशों और निवासियों के डेटा पर आधारित है।",
    serviceChargeUnit: "AED/वर्ग फुट"
  },
  ur: {
    auditBadge: "آزادانہ تکنیکی آڈٹ • بروکرز کے مبالغے سے پاک",
    auditTitle: "رہائشیوں کی حقیقت اور آپریشنل سچائی",
    verdictBadge: "آزادانہ انجینئرنگ اور سرمایہ کاری کا فیصلہ",
    strengthsTitle: "تصدیق شدہ انجینئرنگ اور اثاثہ جاتی فوائد",
    pitfallsTitle: "پوشیدہ خامیاں اور آپریشنل رکاوٹیں",
    liftWait: "رش کے اوقات میں لفٹ کا انتظار",
    guestParking: "مہمانوں کی پارکنگ",
    soundproofing: "آواز کی بندش (ساؤنڈ پروفنگ)",
    airbnbPolicy: "ہالیڈے ہومز / ایئر بی این بی پالیسی",
    hiddenCostsNotice: "پوشیدہ اخراجات پر آڈیٹر کا انتباہ: ",
    prePurchaseAuditTitle: (n) => `خریداری سے قبل تکنیکی آڈٹ: ${n}`,
    prePurchaseAuditSubtitle: "فارم ایف پر دستخط کرنے سے قبل فنشنگ، ساؤنڈ پروفنگ اور سروس چارجز کے ریکارڈ پر ایک غیر جانبدار انجینئرنگ رپورٹ حاصل کریں۔",
    requestAuditBtn: "تکنیکی جانچ کی درخواست کریں",
    downloadDossierTitle: (n) => `انجینئرنگ ڈوزیئر ڈاؤن لوڈ کریں: ${n}`,
    downloadDossierSubtitle: "جامع فائل: جیو ٹیکنیکل پاسپورٹ، DLD سروس فیس کی تاریخ اور فلور پلان کیٹلاگ۔",
    downloadDossierBtn: "انجینئرنگ و اخراجات ڈوزیئر (PDF) ڈاؤن لوڈ کریں",
    openDossierModal: "ایگزیکٹو ڈوزیئر پاپ اپ ونڈو میں کھولیں",
    consultArchitectBtn: "آرکیٹیکچرل ایڈوائزر سے مشورہ کریں",
    neutralityLabel: "غیر جانبداری کی ضمانت:",
    neutralityText: "ہم کسی خاص ڈویلپر سے وابستہ نہیں ہیں۔ ہر تجزیہ مکمل طور پر معروضی ساختی حقائق اور رہائشیوں کے تجربات پر مبنی ہے۔",
    serviceChargeUnit: "درہم / مربع فٹ"
  }
};
