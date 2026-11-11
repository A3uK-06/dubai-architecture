import { ViewBlockerRadar, SunHeatExposure, WalkabilityIndex, Building } from "./buildings";
import { LanguageCode } from "@/i18n/languages";

export interface BespokeTowerReality {
  viewRadar: ViewBlockerRadar;
  solarExposure: SunHeatExposure;
  walkability: WalkabilityIndex;
}

export const WALKABILITY_CATEGORIES_I18N: Record<LanguageCode, Record<string, string>> = {
  en: {
    "Walker's Paradise": "Walker's Paradise",
    "Very Walkable": "Very Walkable",
    "Somewhat Walkable": "Somewhat Walkable",
    "Car-Dependent": "Car-Dependent"
  },
  ru: {
    "Walker's Paradise": "Рай для пешехода (Вся инфраструктура рядом)",
    "Very Walkable": "Высокая пешеходная доступность",
    "Somewhat Walkable": "Частичная пешеходность (рекомендуется авто)",
    "Car-Dependent": "Автомобильная зависимость"
  },
  ar: {
    "Walker's Paradise": "جنة للمشاة (كافة الخدمات سيراً على الأقدام)",
    "Very Walkable": "مناسب جداً للمشي اليومي",
    "Somewhat Walkable": "محدود المشي (يُفضل استخدام سيارة)",
    "Car-Dependent": "تعتمد كلياً على السيارات"
  },
  zh: {
    "Walker's Paradise": "步行者天堂（生活全配套步行即达）",
    "Very Walkable": "高度适宜步行",
    "Somewhat Walkable": "部分适宜步行（建议私家车或打车）",
    "Car-Dependent": "完全依赖汽车出行"
  },
  de: {
    "Walker's Paradise": "Fußgänger-Paradies (Alles zu Fuß erreichbar)",
    "Very Walkable": "Sehr fußgängerfreundlich",
    "Somewhat Walkable": "Eingeschränkt fußgängerfreundlich (PKW empfohlen)",
    "Car-Dependent": "Auto-abhängig"
  },
  fr: {
    "Walker's Paradise": "Paradis pour piétons (Tout à pied)",
    "Very Walkable": "Très facile à pied",
    "Somewhat Walkable": "Partiellement marchable (véhicule conseillé)",
    "Car-Dependent": "Dépendant de l'automobile"
  },
  it: {
    "Walker's Paradise": "Paradiso dei pedoni (Tutto a piedi)",
    "Very Walkable": "Molto accessibile a piedi",
    "Somewhat Walkable": "Parzialmente pedonabile (auto consigliata)",
    "Car-Dependent": "Dipendente dall'auto"
  },
  tr: {
    "Walker's Paradise": "Yaya Cenneti (Tüm ihtiyaçlar yürüme mesafesinde)",
    "Very Walkable": "Yüksek Yürüme Kolaylığı",
    "Somewhat Walkable": "Kısmen Yürünebilir (Araç önerilir)",
    "Car-Dependent": "Araç Bağımlı"
  },
  hi: {
    "Walker's Paradise": "पैदल चलने वालों का स्वर्ग (सभी सुविधाएं पैदल दूरी पर)",
    "Very Walkable": "अत्यधिक सुगम पैदल क्षेत्र",
    "Somewhat Walkable": "आंशिक रूप से पैदल सुगम (कार अनुशंसित)",
    "Car-Dependent": "कार पर निर्भर"
  },
  ur: {
    "Walker's Paradise": "پیدل چلنے والوں کی جنت (تمام سہولیات واکنگ ڈسٹنس پر)",
    "Very Walkable": "انتہائی پیدل رسائی کا حامل",
    "Somewhat Walkable": "کچھ حد تک پیدل رسائی (گاڑی تجویز کی جاتی ہے)",
    "Car-Dependent": "گاڑی پر منحصر"
  }
};

export const METRO_ACCESS_TYPES_I18N: Record<LanguageCode, Record<string, string>> = {
  en: {
    "Direct Air-Conditioned Travellator Tunnel": "Direct Air-Conditioned Travellator Tunnel",
    "Shaded Boulevard Walk": "Shaded Boulevard Walk",
    "Direct Covered Walkway": "Direct Covered Walkway",
    "Open Street Walk": "Open Street Walk"
  },
  ru: {
    "Direct Air-Conditioned Travellator Tunnel": "Прямой кондиционированный траволаторный тоннель",
    "Shaded Boulevard Walk": "Затененный променад вдоль бульвара",
    "Direct Covered Walkway": "Прямой крытый пешеходный переход",
    "Open Street Walk": "Пешеходный тротуар вдоль улицы"
  },
  ar: {
    "Direct Air-Conditioned Travellator Tunnel": "نفق مكيف مباشر مع ممشى متحرك",
    "Shaded Boulevard Walk": "ممشى بوليفارد مظلل",
    "Direct Covered Walkway": "ممر مشاة مغطى ومباشر",
    "Open Street Walk": "رصيف مشاة مفتوح"
  },
  zh: {
    "Direct Air-Conditioned Travellator Tunnel": "全天候恒温空调自动人行步道连桥",
    "Shaded Boulevard Walk": "绿荫覆盖林荫大道步行道",
    "Direct Covered Walkway": "直通式全天候有顶遮阳廊桥",
    "Open Street Walk": "开放式市政人行步道"
  },
  de: {
    "Direct Air-Conditioned Travellator Tunnel": "Direkter klimatisierter Fahrsteig-Tunnel",
    "Shaded Boulevard Walk": "Schattiger Boulevard-Spaziergang",
    "Direct Covered Walkway": "Direkter überdachter Fußweg",
    "Open Street Walk": "Offener Straßenfußweg"
  },
  fr: {
    "Direct Air-Conditioned Travellator Tunnel": "Tunnel climatisé direct avec tapis roulant",
    "Shaded Boulevard Walk": "Promenade ombragée sur boulevard",
    "Direct Covered Walkway": "Passerelle piétonne couverte directe",
    "Open Street Walk": "Trottoir de rue ouvert"
  },
  it: {
    "Direct Air-Conditioned Travellator Tunnel": "Tunnel diretto climatizzato con tapis roulant",
    "Shaded Boulevard Walk": "Passeggiata ombreggiata sul viale",
    "Direct Covered Walkway": "Percorso pedonale coperto diretto",
    "Open Street Walk": "Marciapiede stradale aperto"
  },
  tr: {
    "Direct Air-Conditioned Travellator Tunnel": "Doğrudan Klimalı Yürüyen Bant Tüneli",
    "Shaded Boulevard Walk": "Gölgeli Bulvar Yolu",
    "Direct Covered Walkway": "Doğrudan Kapalı Yaya Yolu",
    "Open Street Walk": "Açık Cadde Yürüyüş Yolu"
  },
  hi: {
    "Direct Air-Conditioned Travellator Tunnel": "सीधा वातानुकूलित स्वचालित वॉकवे टनल",
    "Shaded Boulevard Walk": "छायादार बुलेवार्ड वॉक",
    "Direct Covered Walkway": "सीधा कवर्ड पैदल मार्ग",
    "Open Street Walk": "सड़क किनारे खुला फुटपाथ"
  },
  ur: {
    "Direct Air-Conditioned Travellator Tunnel": "براہ راست ایئر کنڈیشنڈ متحرک واک وے ٹنل",
    "Shaded Boulevard Walk": "سایہ دار پام بلیوارڈ واک",
    "Direct Covered Walkway": "براہ راست کورڈ پیدل پاتھ وے",
    "Open Street Walk": "کھلی سڑک کا پیدل راستہ"
  }
};

export const ZERO_THREAT_LABELS_I18N: Record<LanguageCode, string> = {
  en: "Zero horizon obstruction threats (unobstructable open sea/coastal frontline).",
  ru: "Угрозы застройки горизонта отсутствуют (первая береговая линия / открытый залив).",
  ar: "لا توجد مخاطر لحجب الأفق (واجهة بحرية مفتوحة ومحمية قانونياً).",
  zh: "无任何天际线遮挡威胁（不可逾越的永久一线海景与水岸前瞻）。",
  de: "Keine Sichtbehinderungs-Gefahr (unverbaubare offene Küsten- und Meeresfront).",
  fr: "Aucun risque d'obstruction de l'horizon (front de mer ouvert et protégé en permanence).",
  it: "Zero minacce di ostruzione dell'orizzonte (fronte mare aperto permanentemente protetto).",
  tr: "Ufuk engelleme riski yoktur (kesintisiz açık deniz ve kalıcı kıyı cephesi).",
  hi: "क्षितिज पर कोई अवरोध खतरा नहीं (स्थायी रूप से सुरक्षित खुला समुद्र तट)।",
  ur: "افق کی رکاوٹ کا کوئی خطرہ نہیں (مستقل محفوظ کھلا ساحلی اور سمندری فرنٹ)۔"
};

export const BESPOKE_INVESTOR_AUDITS_I18N: Record<string, Partial<Record<LanguageCode, BespokeTowerReality>>> = {
  "burj-khalifa": {
    en: {
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
    ru: {
      viewRadar: {
        riskLevel: "protected",
        status: "Пожизненно защищенный вид (Озеро, Фонтаны и Залив)",
        assessment: "Фронтальный обзор в сторону Дубайских фонтанов, озера Бурдж и Персидского залива навсегда защищен мастер-планом застройки с нулевым риском перекрытия. Верхние ярусы (от 76 этажа) возвышаются над всеми окружающими башнями Даунтауна с панорамным обзором на 360 градусов.",
        protectedOrientations: [
          "Юго-Запад (Фонтан Дубай и озеро Бурдж — 100% защита от застройки)",
          "Северо-Запад (Морской горизонт и закат над скайлайном DIFC)",
          "Юго-Восток (Площадь Дубайской оперы)"
        ],
        threatOrientations: [
          "Восток / Северо-Восток (Ниже 50 этажа плотный массив Даунтауна с башнями Boulevard Point и Address)"
        ]
      },
      solarExposure: {
        optimalAspect: "Северо-Восток (Мягкий утренний свет, прохладный микроклимат)",
        harshAspect: "Юго-Запад (Интенсивное солнце пустыни с 14:00 до 18:30)",
        coolingEnergyImpact: "Умеренное (+15% на ЮЗ фасадах, минимальное на СВ)",
        solarHeatGainRating: "Превосходный (Двойной рефлекторный Low-E с терморазрывом, SHGC 0.20)",
        residentTip: "Выбирайте резиденции на северной стороне для рассеянного дневного света без нагрева; окнам на юго-запад требуются термошторы после 14:00."
      },
      walkability: {
        score: 96,
        category: "Рай для пешехода (Вся инфраструктура рядом)",
        metroStation: "Станция метро Burj Khalifa / Dubai Mall (Красная ветка)",
        metroDistanceMinutes: 4,
        metroAccessType: "Прямой кондиционированный траволаторный тоннель",
        dailyEssentialsOnFoot: "Супермаркет Waitrose, 1200+ магазинов, Дубайская опера и 200+ ресторанов доступны напрямую по крытым кондиционированным переходам."
      }
    },
    ar: {
      viewRadar: {
        riskLevel: "protected",
        status: "إطلالة محمية بشكل دائم (البحيرة، النافورة والخليج)",
        assessment: "الواجهة الأمامية المطلة على نافورة دبي وبحيرة البرج والخليج العربي محمية نهائياً بموجب المخطط الرئيسي مع انعدام أي خطر للحجب. الطوابق العليا (76 وما فوق) تعلو فوق كافة أبراج الداون تاون المحيطة ببانوراما كاملة 360 درجة.",
        protectedOrientations: [
          "الجنوب الغربي (نافورة دبي وبحيرة البرج - غير قابلة للحجب 100%)",
          "الشمال الغربي (أفق البحر وغروب الشمس فوق أبراج مركز دبي المالي)",
          "الجنوب الشرقي (ساحة أوبرا دبي)"
        ],
        threatOrientations: [
          "الشرق / الشمال الشرقي (كثافة عمرانية أدنى من الطابق 50 باتجاه أبراج العنوان وبوليفارد بوينت)"
        ]
      },
      solarExposure: {
        optimalAspect: "الشمال الشرقي (شمس صباحية لطيفة وبيئة معتدلة)",
        harshAspect: "الجنوب الغربي (حرارة شمس بعد الظهر الحارقة 14:00-18:30)",
        coolingEnergyImpact: "معتدل (+15% على الواجهات الجنوبية الغربية، منخفض على الشمالية الشرقية)",
        solarHeatGainRating: "فائق (زجاج مزدوج عاكس منخفض الانبعاثية مع عازل حراري، SHGC 0.20)",
        residentTip: "اختر الوحدات ذات الواجهة الشمالية للاستمتاع بضوء طبيعي دون الحاجة للستائر العازلة؛ بينما تتطلب الواجهات الجنوبية الغربية تشغيل الستائر الحرارية بعد الثانية ظهراً."
      },
      walkability: {
        score: 96,
        category: "جنة للمشاة (كافة الخدمات سيراً على الأقدام)",
        metroStation: "محطة مترو برج خليفة / دبي مول (الخط الأحمر)",
        metroDistanceMinutes: 4,
        metroAccessType: "نفق مكيف مباشر مع ممشى متحرك",
        dailyEssentialsOnFoot: "سوبرماركت ويتروز، أكثر من 1200 متجر تجزئة، أوبرا دبي وأكثر من 200 مطعم ترتبط مباشرة عبر أنفاق مشاة مكيفة."
      }
    },
    zh: {
      viewRadar: {
        riskLevel: "protected",
        status: "永久不可遮挡视野（人工湖、音乐喷泉及海湾天际线）",
        assessment: "面向迪拜音乐喷泉、哈利法塔人工湖及阿拉伯湾的一线朝向受市政总体规划永久保护，遮挡风险为零。76层及以上中高层完全俯瞰周边市中心建筑群，拥有360度绝对视野统驭力。",
        protectedOrientations: [
          "西南朝向（迪拜音乐喷泉与人工湖 - 100%永久不可遮挡）",
          "西北朝向（越过DIFC天际线的海景与落日地平线）",
          "东南朝向（迪拜歌剧院核心艺术广场）"
        ],
        threatOrientations: [
          "东北/东侧（50层以下朝向市中心中密建筑群，正对Boulevard Point与Address塔楼）"
        ]
      },
      solarExposure: {
        optimalAspect: "东北向（清晨柔和朝阳，室内全天清凉宜人）",
        harshAspect: "西南向（午后14:00–18:30强烈的沙漠西晒暴晒）",
        coolingEnergyImpact: "中等（西南向空调能耗上浮15%，东北向维持低负荷）",
        solarHeatGainRating: "极佳（双层断桥中空Low-E镀膜反射玻璃，SHGC 0.20）",
        residentTip: "建议优先选购北向/东北向住宅，享受全天通透漫射光而无需常开遮阳帘；西南向套房需在午后2点后设定自动隔热百叶。"
      },
      walkability: {
        score: 96,
        category: "步行者天堂（生活全配套步行即达）",
        metroStation: "哈利法塔/迪拜商场地铁站（红线）",
        metroDistanceMinutes: 4,
        metroAccessType: "全天候恒温空调自动人行步道连桥",
        dailyEssentialsOnFoot: "Waitrose高端超市、1200余家品牌商户、迪拜歌剧院及200多家餐厅均可通过全封闭恒温自动人行通道直达。"
      }
    },
    de: {
      viewRadar: {
        riskLevel: "protected",
        status: "Dauerhaft unverbaubarer Blick (See, Fontänen & Golf)",
        assessment: "Die Ausrichtung zu den Dubai Fountains, dem Burj Lake und dem Arabischen Golf ist durch Masterplan-Zonierung dauerhaft geschützt. Obere Etagen (ab Ebene 76) überragen alle umliegenden Türme mit uneingeschränkter 360-Grad-Sicht.",
        protectedOrientations: [
          "Südwest (Dubai Fountain & Burj Lake – 100% unverbaubar)",
          "Nordwest (Meer- und Sonnenuntergangshorizont über DIFC)",
          "Südost (Vorplatz des Dubai Opera District)"
        ],
        threatOrientations: [
          "Ost / Nordost (Dichtere Downtown-Bebauung unter Ebene 50 mit Blick auf Nachbartürme)"
        ]
      },
      solarExposure: {
        optimalAspect: "Nordost (Morgensonne, kühles angenehmes Raumklima)",
        harshAspect: "Südwest (Intensive Wüstenhitze von 14:00 bis 18:30 Uhr)",
        coolingEnergyImpact: "Moderat (+15% auf SW-Seiten, sehr gering auf NO)",
        solarHeatGainRating: "Hervorragend (Doppelt verglastes Low-E mit thermischer Trennung, SHGC 0.20)",
        residentTip: "Nordausrichtungen bieten angenehmes diffuses Tageslicht ohne motorisierte Rollos; Südwest-Einheiten erfordern automatisierte Hitzeblenden am Nachmittag."
      },
      walkability: {
        score: 96,
        category: "Fußgänger-Paradies (Alles zu Fuß erreichbar)",
        metroStation: "Burj Khalifa / Dubai Mall Metro Station (Rote Linie)",
        metroDistanceMinutes: 4,
        metroAccessType: "Direkter klimatisierter Fahrsteig-Tunnel",
        dailyEssentialsOnFoot: "Waitrose-Supermarkt, über 1.200 Geschäfte, die Dubai Opera und 200+ Restaurants sind wettergeschützt über klimatisierte Tunnel erreichbar."
      }
    },
    fr: {
      viewRadar: {
        riskLevel: "protected",
        status: "Vue Définitivement Imprenable (Lac, Fontaines & Golfe)",
        assessment: "L'orientation vers la fontaine de Dubaï, le lac Burj et le golfe Persique est sanctuarisée par le plan d'urbanisme sans aucun risque d'obstruction. Les étages supérieurs (76+) dominent l'ensemble de Downtown à 360 degrés.",
        protectedOrientations: [
          "Sud-Ouest (Fontaine de Dubaï & Lac Burj — 100% inconstructible)",
          "Nord-Ouest (Horizon marin et coucher de soleil sur le DIFC)",
          "Sud-Est (Esplanade de l'Opéra de Dubaï)"
        ],
        threatOrientations: [
          "Est / Nord-Est (Sous le 50e étage, vis-à-vis partiel avec les tours du boulevard)"
        ]
      },
      solarExposure: {
        optimalAspect: "Nord-Est (Lumière matinale douce, fraîcheur ambiante)",
        harshAspect: "Sud-Ouest (Chaleur solaire désertique intense de 14h00 à 18h30)",
        coolingEnergyImpact: "Modéré (+15% sur les façades SO, très faible au NE)",
        solarHeatGainRating: "Supérieur (Double vitrage Low-E réflectif avec rupture de pont thermique, SHGC 0.20)",
        residentTip: "Les appartements orientés Nord bénéficient d'une lumière douce sans surchauffe; les unités Sud-Ouest nécessitent des stores occultants thermiques dès 14h."
      },
      walkability: {
        score: 96,
        category: "Paradis pour piétons (Tout à pied)",
        metroStation: "Station de métro Burj Khalifa / Dubai Mall (Ligne Rouge)",
        metroDistanceMinutes: 4,
        metroAccessType: "Tunnel climatisé direct avec tapis roulant",
        dailyEssentialsOnFoot: "Supermarché Waitrose, 1200+ boutiques, Opéra de Dubaï et plus de 200 restaurants directement accessibles via tunnels climatisés."
      }
    },
    it: {
      viewRadar: {
        riskLevel: "protected",
        status: "Vista Permanentemente Libera (Lago, Fontane e Golfo)",
        assessment: "L'orientamento frontale verso la Dubai Fountain, il lago Burj e il Golfo Arabico è protetto in modo permanente dal piano regolatore con rischio zero di ostruzione. I piani alti (livelli 76+) dominano lo skyline a 360 gradi.",
        protectedOrientations: [
          "Sud-Ovest (Fontana di Dubai e Lago Burj - 100% Inostruibile)",
          "Nord-Ovest (Orizzonte marino e tramonto sullo skyline DIFC)",
          "Sud-Est (Piazza dell'Opera di Dubai)"
        ],
        threatOrientations: [
          "Est / Nord-Est (Sotto il livello 50 presenza di torri adiacenti su Downtown Boulevard)"
        ]
      },
      solarExposure: {
        optimalAspect: "Nord-Est (Luce mattutina soffusa, ambiente fresco)",
        harshAspect: "Sud-Ovest (Forte irraggiamento pomeridiano 14:00–18:30)",
        coolingEnergyImpact: "Moderato (+15% sulle facciate SO, basso a NE)",
        solarHeatGainRating: "Superiore (Doppio vetro Low-E riflettente con taglio termico, SHGC 0.20)",
        residentTip: "Gli alloggi esposti a nord godono di luce diffusa senza surriscaldamento; i quadranti a sud-ovest richiedono tende termiche dopo le 14:00."
      },
      walkability: {
        score: 96,
        category: "Paradiso dei pedoni (Tutto a piedi)",
        metroStation: "Stazione Metro Burj Khalifa / Dubai Mall (Linea Rossa)",
        metroDistanceMinutes: 4,
        metroAccessType: "Tunnel diretto climatizzato con tapis roulant",
        dailyEssentialsOnFoot: "Supermercato Waitrose, oltre 1.200 negozi, Dubai Opera e più di 200 ristoranti accessibili tramite tunnel pedonali climatizzati."
      }
    },
    tr: {
      viewRadar: {
        riskLevel: "protected",
        status: "Kalıcı Olarak Açık Manzara (Göl, Fıskiye ve Körfez)",
        assessment: "Dubai Fıskiyesi, Burj Gölü ve Basra Körfezi'ne bakan ön cephe, imar planı gereği sıfır engellenme riskiyle kalıcı olarak korunmaktadır. 76. kat ve üzeri tüm Downtown kulelerini aşarak 360 derece kesintisiz ufuk hakimiyeti sağlar.",
        protectedOrientations: [
          "Güneybatı (Dubai Fıskiyesi ve Burj Gölü - %100 Engellenemez)",
          "Kuzeybatı (DIFC silueti üzerinde deniz ve gün batımı)",
          "Güneydoğu (Dubai Opera Meydanı)"
        ],
        threatOrientations: [
          "Doğu / Kuzeydoğu (50. kat altı Downtown kuleleri ile yakın mesafe)"
        ]
      },
      solarExposure: {
        optimalAspect: "Kuzeydoğu (Sabah güneşi, serin iç ortam)",
        harshAspect: "Güneybatı (14:00–18:30 arası şiddetli çöl öğleden sonra güneşi)",
        coolingEnergyImpact: "Orta (GB cephede +%15, KD cephede düşük)",
        solarHeatGainRating: "Üstün (Termal bariyerli çift camlı yansıtıcı Low-E, SHGC 0.20)",
        residentTip: "Kuzey cepheli daireler gölgelendirmeye ihtiyaç duymadan yumuşak gün ışığı alır; Güneybatı cepheli dairelerde saat 14:00 sonrası otomatik panjur önerilir."
      },
      walkability: {
        score: 96,
        category: "Yaya Cenneti (Tüm ihtiyaçlar yürüme mesafesinde)",
        metroStation: "Burj Khalifa / Dubai Mall Metro İstasyonu (Kırmızı Hat)",
        metroDistanceMinutes: 4,
        metroAccessType: "Doğrudan Klimalı Yürüyen Bant Tüneli",
        dailyEssentialsOnFoot: "Waitrose süpermarket, 1.200+ mağaza, Dubai Operası ve 200+ restoran klimalı kapalı yürüyüş tünelleriyle doğrudan bağlantılıdır."
      }
    },
    hi: {
      viewRadar: {
        riskLevel: "protected",
        status: "स्थायी रूप से सुरक्षित खुला दृश्य (झील, फव्वारा और खाड़ी)",
        assessment: "दुबई फाउंटेन, बुर्ज झील और अरब की खाड़ी की ओर की प्रमुख दिशा मास्टरप्लान द्वारा स्थायी रूप से सुरक्षित है। 76वें स्तर से ऊपर के तल सभी आसपास के डाउनटाउन टावरों से ऊंचे हैं और 360 डिग्री का खुला दृश्य प्रदान करते हैं।",
        protectedOrientations: [
          "दक्षिण-पश्चिम (दुबई फाउंटेन और बुर्ज झील - 100% अबाधित)",
          "उत्तर-पश्चिम (डीआईएफसी स्काईलाइन के ऊपर समुद्र और सूर्यास्त)",
          "दक्षिण-पूर्व (दुबई ओपेरा डिस्ट्रिक्ट प्लाजा)"
        ],
        threatOrientations: [
          "पूर्व / उत्तर-पूर्व (50वें तल से नीचे डाउनटाउन का सघन क्लस्टर)"
        ]
      },
      solarExposure: {
        optimalAspect: "उत्तर-पूर्व (सुबह की कोमल धूप, ठंडा वातावरण)",
        harshAspect: "दक्षिण-पश्चिम (14:00–18:30 की भीषण दोपहर की धूप)",
        coolingEnergyImpact: "मध्यम (दक्षिण-पश्चिम पर +15%, उत्तर-पूर्व पर कम)",
        solarHeatGainRating: "उत्कृष्ट (डबल-ग्लेज़्ड रिफ्लेक्टिव लो-ई, SHGC 0.20)",
        residentTip: "प्राकृतिक प्रकाश के लिए उत्तर दिशा वाले आवास चुनें; दक्षिण-पश्चिम इकाइयों में दोपहर 2 बजे के बाद स्वचालित थर्मल ब्लाइंड्स की आवश्यकता होती है।"
      },
      walkability: {
        score: 96,
        category: "पैदल चलने वालों का स्वर्ग (सभी सुविधाएं पैदल दूरी पर)",
        metroStation: "बुर्ज खलीफा / दुबई मॉल मेट्रो स्टेशन (रेड लाइन)",
        metroDistanceMinutes: 4,
        metroAccessType: "सीधा वातानुकूलित स्वचालित वॉकवे टनल",
        dailyEssentialsOnFoot: "वेटरोज़ सुपरमार्केट, 1,200+ खुदरा स्टोर, दुबई ओपेरा और 200+ रेस्तरां वातानुकूलित इनडोर सुरंगों के माध्यम से सीधे सुलभ हैं।"
      }
    },
    ur: {
      viewRadar: {
        riskLevel: "protected",
        status: "مستقل محفوظ نظارہ (جھیل، فوارہ اور خلیج)",
        assessment: "دبئی فاؤنٹین، برج جھیل اور خلیج عرب کا سامنے والا رخ ماسٹر پلان کے تحت مستقل محفوظ ہے۔ 76ویں منزل سے اوپر کے فلورز ارد گرد کے تمام ٹاورز سے بلند ہیں اور 360 ڈگری کا بلارکاوٹ نظارہ فراہم کرتے ہیں۔",
        protectedOrientations: [
          "جنوب مغرب (دبئی فاؤنٹین اور برج جھیل - 100% محفوظ)",
          "شمال مغرب (مرکز مالیات کے اوپر سمندر اور غروب آفتاب)",
          "جنوب مشرق (دبئی اوپیرا پلازہ)"
        ],
        threatOrientations: [
          "مشرق / شمال مشرق (منزل 50 سے نیچے ڈاون ٹاون کی قریبی عمارتیں)"
        ]
      },
      solarExposure: {
        optimalAspect: "شمال مشرق (صبح کی ہلکی روشنی، خوشگوار ماحول)",
        harshAspect: "جنوب مغرب (دوپہر 2 سے شام 6:30 تک شدید تپش)",
        coolingEnergyImpact: "معتدل (جنوب مغرب پر 15 فیصد زیادہ، شمال مشرق پر کم)",
        solarHeatGainRating: "اعلیٰ ترین (تھرمل انسولیشن کے ساتھ ڈبل گلیزڈ لو ای گلاس، SHGC 0.20)",
        residentTip: "نرم قدرتی روشنی کے لیے شمال کا رخ منتخب کریں؛ جنوب مغربی اپارٹمنٹس میں دوپہر 2 بجے کے بعد تھرمل پردے استعمال کریں۔"
      },
      walkability: {
        score: 96,
        category: "پیدل چلنے والوں کی جنت (تمام سہولیات واکنگ ڈسٹنس پر)",
        metroStation: "برج خلیفہ / دبئی مال میٹرو اسٹیشن (ریڈ لائن)",
        metroDistanceMinutes: 4,
        metroAccessType: "براہ راست ایئر کنڈیشنڈ متحرک واک وے ٹنل",
        dailyEssentialsOnFoot: "ویٹروز سپر مارکیٹ، 1,200 سے زائد دکانیں، دبئی اوپیرا اور 200 سے زائد ریسٹورنٹس مکمل ایئر کنڈیشنڈ انڈور واک ویز سے جڑے ہیں۔"
      }
    }
  },
  "cayan-tower": {
    en: {
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
    ru: {
      viewRadar: {
        riskLevel: "protected",
        status: "Защищенный вид 90° винтовой башни на вход в Марину",
        assessment: "Расположение у самого входа в гавань Дубай Марина и спиральный поворот на 90 градусов обеспечивают большинству квартир открытые виды на Персидский залив и колесо Ain Dubai. Прибрежное зонирование исключает строительство высоток в море перед башней.",
        protectedOrientations: [
          "Северо-Запад (Вход в Марину и открытое море)",
          "Запад (Остров Bluewaters и колесо Ain Dubai)"
        ],
        threatOrientations: [
          "Юго-Восток (Ниже 20 этажа вид на соседний комплекс Marina Heights)"
        ]
      },
      solarExposure: {
        optimalAspect: "Восток / Северо-Восток (Спиральные балконы естественно притеняют гостиные)",
        harshAspect: "Юго-Запад (Верхние уровни улавливают прямой закатный зной)",
        coolingEnergyImpact: "Низкое (-18% за счет самозатенения спирального фасада)",
        solarHeatGainRating: "Превосходный (Титановые солнцезащитные ламели и энергоэффективное остекление)",
        residentTip: "Поворот каждого этажа на 1.2 градуса работает как архитектурный навес: температура в гостиных на 3–4°C ниже обычных стеклянных башен."
      },
      walkability: {
        score: 82,
        category: "Высокая пешеходная доступность",
        metroStation: "Трамвайная станция Marina Towers",
        metroDistanceMinutes: 3,
        metroAccessType: "Затененный променад вдоль бульвара",
        dailyEssentialsOnFoot: "Выход прямо на променад Marina Walk, причалы для яхт, супермаркет Spinneys и рестораны у воды в пределах 2 минут."
      }
    },
    ar: {
      viewRadar: {
        riskLevel: "protected",
        status: "إطلالة محمية لبرج لولبي 90 درجة على مدخل المارينا",
        assessment: "يقع البرج عند مدخل دبي مارينا مباشرة، ويتيح الالتفاف الحلزوني بمقدار 90 درجة لأغلب الشقق الاستمتاع بإطلالات مائية مفتوحة على الخليج العربي وعين دبي. المخطط الساحلي يمنع أي تطوير بحري مستقبلي.",
        protectedOrientations: [
          "الشمال الغربي (مدخل قناة المارينا والبحر المفتوح)",
          "الغرب (جزيرة بلوواترز وعين دبي)"
        ],
        threatOrientations: [
          "الجنوب الشرقي (الطوابق دون 20 تواجه مارينا هايتس)"
        ]
      },
      solarExposure: {
        optimalAspect: "الشرق / الشمال الشرقي (الشرفات الملتوية تظلل غرف المعيشة طبيعياً)",
        harshAspect: "الجنوب الغربي (الالتفاف العلوي يمتص شمس الغروب المباشرة)",
        coolingEnergyImpact: "منخفض (-18% بفضل التظليل الذاتي للأضلاع الحلزونية)",
        solarHeatGainRating: "فائق (شفرات تيتانيوم مدمجة وزجاج عازل للحرارة)",
        residentTip: "دوران كل طابق بمقدار 1.2 درجة يعمل كمظلة معمارية؛ تظل غرف المعيشة أبرد بـ 3 إلى 4 درجات مئوية مقارنة بالأبراج التقليدية."
      },
      walkability: {
        score: 82,
        category: "مناسب جداً للمشي اليومي",
        metroStation: "محطة ترام مارينا تاورز",
        metroDistanceMinutes: 3,
        metroAccessType: "ممشى بوليفارد مظلل",
        dailyEssentialsOnFoot: "خطوات معدودة تفصلك عن ممشى دبي مارينا، مراسي اليخوت، سوبرماركت سبينيس والمقاهي المائية."
      }
    },
    zh: {
      viewRadar: {
        riskLevel: "protected",
        status: "受保护90度扭转游艇港入海口一线景观",
        assessment: "傲立于迪拜游艇港（Dubai Marina）入海口黄金节点，独特的90度螺旋扭转设计使绝大多数户型均能尽收阿拉伯湾与蓝水岛迪拜眼（Ain Dubai）浩瀚水景。海岸线红线规划严禁任何离岸高楼遮挡。",
        protectedOrientations: [
          "西北朝向（游艇港主出海口与一望无际开阔外海）",
          "西侧朝向（蓝水岛 Bluewaters 与迪拜眼巨轮全景）"
        ],
        threatOrientations: [
          "东南向（20层以下低区部分户型与后排Marina Heights对望）"
        ]
      },
      solarExposure: {
        optimalAspect: "东向/东北向（旋转悬挑阳台形成天然自遮阳体系）",
        harshAspect: "西南向（顶层旋转顶角受黄昏西晒光照影响）",
        coolingEnergyImpact: "极低（自遮阳流线型外骨骼降低空调制冷负荷18%）",
        solarHeatGainRating: "极佳（集成式钛合金遮阳鳍片与高系数隔热防晒玻璃）",
        residentTip: "单层1.2度的精准旋转设计兼备建筑遮阳伞功能，室内实测体感温度比同等全平玻璃幕墙低3–4°C。"
      },
      walkability: {
        score: 82,
        category: "高度适宜步行",
        metroStation: "Marina Towers有轨电车站",
        metroDistanceMinutes: 3,
        metroAccessType: "绿荫覆盖林荫大道步行道",
        dailyEssentialsOnFoot: "举步即达Marina Walk滨水大道、私家游艇码头、Spinneys高阶超市与水岸米其林露天餐吧。"
      }
    },
    de: {
      viewRadar: {
        riskLevel: "protected",
        status: "Geschützter 90°-Helix-Blick auf den Marina-Eingang",
        assessment: "Direkt an der Mündung der Dubai Marina gelegen, ermöglicht die 90-Grad-Drehung des Turms den meisten Residenzen freie Sicht auf das Meer und Ain Dubai. Das Küstenbaurecht schließt künftige Hochbauten vor dem Turm aus.",
        protectedOrientations: [
          "Nordwest (Marina-Kanalmündung und offenes Meer)",
          "West (Bluewaters Island & Ain Dubai)"
        ],
        threatOrientations: [
          "Südost (Untere Stockwerke unter Ebene 20 blicken auf Marina Heights)"
        ]
      },
      solarExposure: {
        optimalAspect: "Ost / Nordost (Verdrehte Balkone beschatten Wohnräume natürlich)",
        harshAspect: "Südwest (Obere Drehung nimmt intensive Abendsonne auf)",
        coolingEnergyImpact: "Niedrig (-18% durch helixförmige Selbstbeschattung)",
        solarHeatGainRating: "Hervorragend (Titan-Sonnenschutzlamellen und Low-E)",
        residentTip: "Die 1,2-Grad-Drehung pro Etage wirkt als Sonnenschutz; Wohnbereiche bleiben im Schnitt 3–4°C kühler als klassische Glasfassaden."
      },
      walkability: {
        score: 82,
        category: "Sehr fußgängerfreundlich",
        metroStation: "Marina Towers Tram Station",
        metroDistanceMinutes: 3,
        metroAccessType: "Schattiger Boulevard-Spaziergang",
        dailyEssentialsOnFoot: "Direkter Zugang zum Dubai Marina Walk, Yachthafenliegeplätzen, Spinneys und Ufercafés."
      }
    },
    fr: {
      viewRadar: {
        riskLevel: "protected",
        status: "Vue Protégée Tour Hélicoïdale 90° Entrée de la Marina",
        assessment: "Située à l'embouchure de la marina, la torsion à 90 degrés permet à la plupart des appartements d'offrir une vue dégagée sur le golfe Persique et Ain Dubai. Aucun projet maritime ne peut bloquer l'horizon.",
        protectedOrientations: [
          "Nord-Ouest (Entrée du canal de la marina et pleine mer)",
          "Ouest (Île Bluewaters & grande roue Ain Dubai)"
        ],
        threatOrientations: [
          "Sud-Est (Étages inférieurs sous le niveau 20 orientés vers Marina Heights)"
        ]
      },
      solarExposure: {
        optimalAspect: "Est / Nord-Est (Les balcons en spirale créent une ombre naturelle)",
        harshAspect: "Sud-Ouest (Le sommet en rotation absorbe le soleil couchant)",
        coolingEnergyImpact: "Faible (-18% grâce à l'auto-ombrage de la façade hélicoïdale)",
        solarHeatGainRating: "Supérieur (Lamelles brise-soleil en titane et verre solaire)",
        residentTip: "La rotation de 1,2 degré par dalle agit comme un pare-soleil; les pièces à vivre restent 3 à 4°C plus fraîches que dans les tours vitrées classiques."
      },
      walkability: {
        score: 82,
        category: "Très facile à pied",
        metroStation: "Station de Tramway Marina Towers",
        metroDistanceMinutes: 3,
        metroAccessType: "Promenade ombragée sur boulevard",
        dailyEssentialsOnFoot: "Accès immédiat à la promenade Marina Walk, aux pontons de yachts, à Spinneys et aux terrasses au bord de l'eau."
      }
    },
    it: {
      viewRadar: {
        riskLevel: "protected",
        status: "Vista Protetta Elica 90° Ingresso Marina",
        assessment: "Posizionata all'ingresso di Dubai Marina, la torsione di 90 gradi garantisce visuali aperte sul Golfo Arabico e Ain Dubai. Il piano costiero vieta qualsiasi costruzione alta offshore.",
        protectedOrientations: [
          "Nord-Ovest (Ingresso del canale della Marina e mare aperto)",
          "Ovest (Isola Bluewaters e Ain Dubai)"
        ],
        threatOrientations: [
          "Sud-Est (Piani inferiori sotto il livello 20 verso Marina Heights)"
        ]
      },
      solarExposure: {
        optimalAspect: "Est / Nord-Est (Balconi elicoidali che creano ombra naturale)",
        harshAspect: "Sud-Ovest (Rotazione superiore esposta al calore del tramonto)",
        coolingEnergyImpact: "Basso (-18% grazie all'auto-ombreggiamento di facciata)",
        solarHeatGainRating: "Superiore (Alette frangisole in titanio e vetrate termoriflettenti)",
        residentTip: "La rotazione di 1,2 gradi per piano funge da schermatura solare; i soggiorni risultano più freschi di 3–4°C rispetto ai normali cubi di vetro."
      },
      walkability: {
        score: 82,
        category: "Molto accessibile a piedi",
        metroStation: "Stazione Tram Marina Towers",
        metroDistanceMinutes: 3,
        metroAccessType: "Passeggiata ombreggiata sul viale",
        dailyEssentialsOnFoot: "Accesso diretto a Marina Walk, ormeggi per yacht, supermercato Spinneys e ristoranti sul canale."
      }
    },
    tr: {
      viewRadar: {
        riskLevel: "protected",
        status: "Korumalı 90° Helis Marina Girişi Manzarası",
        assessment: "Dubai Marina'nın ağzında konumlanan 90 derecelik burgu mimari, dairelerin çoğuna Basra Körfezi ve Ain Dubai manzarası sunar. Kıyı şeridi imar koruması gelecekteki yapılaşmayı engeller.",
        protectedOrientations: [
          "Kuzeybatı (Marina girişi ve açık deniz)",
          "Batı (Bluewaters Adası ve Ain Dubai)"
        ],
        threatOrientations: [
          "Güneydoğu (20. kat altı Marina Heights'a bakar)"
        ]
      },
      solarExposure: {
        optimalAspect: "Doğu / Kuzeydoğu (Burgu balkonlar salonları doğal olarak gölgeler)",
        harshAspect: "Güneybatı (Üst dönüş gün batımı sıcaklığını emer)",
        coolingEnergyImpact: "Düşük (Kendi kendini gölgeleyen cephe ile -%18 soğutma yükü)",
        solarHeatGainRating: "Üstün (Titanyum kanatçıklar ve güneş kontrollü camlar)",
        residentTip: "Kat başına 1,2 derecelik dönüş güneş kırıcı görevi görür; yaşam alanları düz cam kulelere kıyasla 3–4°C daha serindir."
      },
      walkability: {
        score: 82,
        category: "Yüksek Yürüme Kolaylığı",
        metroStation: "Marina Towers Tramvay İstasyonu",
        metroDistanceMinutes: 3,
        metroAccessType: "Gölgeli Bulvar Yolu",
        dailyEssentialsOnFoot: "Dubai Marina Walk kordonuna, yat bağlama iskelelerine, Spinneys süpermarkete doğrudan erişim."
      }
    },
    hi: {
      viewRadar: {
        riskLevel: "protected",
        status: "संरक्षित 90° हेलिक्स मरीना प्रवेश द्वार दृश्य",
        assessment: "दुबई मरीना के प्रवेश द्वार पर स्थित, इसका 90 डिग्री का घुमाव अधिकांश इकाइयों को अरब की खाड़ी और ऐन दुबई के खुले पानी के दृश्य प्रदान करता है। तटीय ज़ोनिंग भविष्य में किसी भी निर्माण को रोकती है।",
        protectedOrientations: [
          "उत्तर-पश्चिम (मरीना प्रवेश द्वार और खुला समुद्र)",
          "पश्चिम (ब्लूवॉटर्स द्वीप और ऐन दुबई)"
        ],
        threatOrientations: [
          "दक्षिण-पूर्व (स्तर 20 से नीचे मरीना हाइट्स की ओर मुख)"
        ]
      },
      solarExposure: {
        optimalAspect: "पूर्व / उत्तर-पूर्व (घुमावदार बालकनियां लिविंग रूम को प्राकृतिक छाया देती हैं)",
        harshAspect: "दक्षिण-पश्चिम (ऊपरी घुमाव पर सूर्यास्त की धूप का प्रभाव)",
        coolingEnergyImpact: "कम (स्व-छायांकित मुखौटे के कारण -18%)",
        solarHeatGainRating: "उत्कृष्ट (टाइटेनियम स्क्रीन फिन और सौर-नियंत्रण ग्लेज़िंग)",
        residentTip: "प्रति मंजिल 1.2 डिग्री का घुमाव आर्किटेक्चरल सनशेड की तरह काम करता है; फ्लैट ग्लास बॉक्स की तुलना में कमरे 3–4°C ठंडे रहते हैं।"
      },
      walkability: {
        score: 82,
        category: "अत्यधिक सुगम पैदल क्षेत्र",
        metroStation: "मरीना टावर्स ट्राम स्टेशन",
        metroDistanceMinutes: 3,
        metroAccessType: "छायादार बुलेवार्ड वॉक",
        dailyEssentialsOnFoot: "दुबई मरीना वॉक, यॉट बर्थ, स्पिनिज़ और कैफे तक सीधी पहुंच।"
      }
    },
    ur: {
      viewRadar: {
        riskLevel: "protected",
        status: "محفوظ 90 ڈگری ہیلکس مرینا اینٹرنس ویو",
        assessment: "دبئی مرینا کے دہانے پر واقع، 90 ڈگری کا منفرد موڑ زیادہ تر رہائش گاہوں کو خلیج عرب اور عین دبئی کا کھلا سمندری نظارہ فراہم کرتا ہے۔ ساحلی قوانین آگے نئی تعمیر کی اجازت نہیں دیتے۔",
        protectedOrientations: [
          "شمال مغرب (مرینا داخلی راستہ اور کھلا سمندر)",
          "مغرب (بلو واٹرز آئی لینڈ اور عین دبئی)"
        ],
        threatOrientations: [
          "جنوب مشرق (منزل 20 سے نیچے مرینا ہائٹس کا رخ)"
        ]
      },
      solarExposure: {
        optimalAspect: "مشرق / شمال مشرق (بل کھاتی بالکونیاں قدرتی سایہ فراہم کرتی ہیں)",
        harshAspect: "جنوب مغرب (اوپری منزلوں پر شام کی تپش)",
        coolingEnergyImpact: "کم (سیلف شیڈنگ فساڈ کی بدولت 18 فیصد کم توانائی)",
        solarHeatGainRating: "اعلیٰ (ٹائٹینیم اسکرین اور سولر کنٹرول گلیزنگ)",
        residentTip: "ہر منزل کا 1.2 ڈگری موڑ سن شیڈ کا کام کرتا ہے؛ کمرے عام شیشے کی عمارتوں سے 3 تا 4 ڈگری زیادہ ٹھنڈے رہتے ہیں۔"
      },
      walkability: {
        score: 82,
        category: "انتہائی پیدل رسائی کا حامل",
        metroStation: "مرینا ٹاورز ٹرام اسٹیشن",
        metroDistanceMinutes: 3,
        metroAccessType: "سایہ دار پام بلیوارڈ واک",
        dailyEssentialsOnFoot: "دبئی مرینا واک، یاٹ برتھ، اسپنیس اور ریسٹورنٹس تک 2 سے 3 منٹ میں پیدل رسائی۔"
      }
    }
  },
  "princess-tower": {
    en: {
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
    ru: {
      viewRadar: {
        riskLevel: "low",
        status: "Защищенный вид на первую линию моря и Пальму",
        assessment: "Квартиры с окнами на запад и северо-запад выше 35 этажа выходят прямо на канал Дубай Марина и остров Пальма Джумейра с постоянным морским горизонтом. Восточные квартиры смотрят на плотный высотный кластер Марины.",
        protectedOrientations: [
          "Северо-Запад (Пальма Джумейра и воды Персидского залива)",
          "Запад (Вход в судоходный канал Дубай Марина)"
        ],
        threatOrientations: [
          "Восток (Башни Marina Crown и 23 Marina на дистанции 80 м)",
          "Юг (Локальное перекрытие ракурса башней Marina 101)"
        ]
      },
      solarExposure: {
        optimalAspect: "Север / Северо-Восток (Панорама гавани без слепящего солнца)",
        harshAspect: "Юго-Запад (Прямой нагрев полуденным солнцем со стороны Залива)",
        coolingEnergyImpact: "Стандартное (Применяется тариф мощности Empower)",
        solarHeatGainRating: "Высокий (Двойное тонированное шумозащитное остекление)",
        residentTip: "Северные квартиры имеют идеальный баланс: яркие виды на Пальму Джумейра без перегрева балконной плиты полуденным солнцем."
      },
      walkability: {
        score: 84,
        category: "Высокая пешеходная доступность",
        metroStation: "Трамвайная станция Mina Seyahi (пересадка на метро Sobha Realty)",
        metroDistanceMinutes: 2,
        metroAccessType: "Затененный променад вдоль бульвара",
        dailyEssentialsOnFoot: "Супермаркет Carrefour, набережная Marina Walk, пляжный клуб Barasti и аптеки в пределах 3 минут пешком."
      }
    },
    ar: {
      viewRadar: {
        riskLevel: "low",
        status: "إطلالة محمية على الواجهة البحرية ونخلة جميرا",
        assessment: "الشقق ذات الواجهة الغربية والشمالية الغربية فوق الطابق 35 تطل مباشرة على قناة دبي مارينا نحو نخلة جميرا مع خطوط رؤية مائية دائمة. الوحدات الخلفية المطلة شرقاً تواجه كتلة الأبراج الشاهقة القريبة.",
        protectedOrientations: [
          "الشمال الغربي (نخلة جميرا ومياه الخليج العربي)",
          "الغرب (مدخل قناة دبي مارينا)"
        ],
        threatOrientations: [
          "الشرق (مواجهة أبراج مارينا كراون و23 مارينا على مسافة 80 متراً)",
          "الجنوب (تداخل جزئي للرؤية مع مارينا 101)"
        ]
      },
      solarExposure: {
        optimalAspect: "الشمال / الشمال الشرقي (إطلالات بانورامية على المارينا دون وهج شمسي)",
        harshAspect: "الجنوب الغربي (امتصاص مباشر لحرارة الخليج بعد الظهر)",
        coolingEnergyImpact: "قياسي (تطبق رسوم سعة إمباور)",
        solarHeatGainRating: "مرتفع (زجاج مزدوج مظلل وعازل للصوت)",
        residentTip: "تتمتع المساكن ذات الواجهة الشمالية بأفضل توازن: إطلالات نقية على نخلة جميرا دون سخونة شمس ما بعد الظهر."
      },
      walkability: {
        score: 84,
        category: "مناسب جداً للمشي اليومي",
        metroStation: "محطة ترام الميناء السياحي (تتصل بمترو شوبا العقارية)",
        metroDistanceMinutes: 2,
        metroAccessType: "ممشى بوليفارد مظلل",
        dailyEssentialsOnFoot: "كارفور ماركت، ممشى مارينا ووك المائي، وصيدليات متوفرة خلال دقيقتين إلى 3 دقائق سيراً."
      }
    },
    zh: {
      viewRadar: {
        riskLevel: "low",
        status: "受保护的一线海景与棕榈岛景观",
        assessment: "35层以上西向及西北向公寓直面迪拜游艇港航道与朱美拉棕榈岛，享受不可遮挡的海天景致。东侧后向户型面向玛丽娜超高层密集建筑群，楼间距较为紧凑。",
        protectedOrientations: [
          "西北朝向（朱美拉棕榈岛与阿拉伯湾湛蓝水系）",
          "西侧朝向（迪拜游艇港主出海口）"
        ],
        threatOrientations: [
          "东向（距Marina Crown与23 Marina约80米视线对望）",
          "南向（与Marina 101存在部分局部视线交叠）"
        ]
      },
      solarExposure: {
        optimalAspect: "北向/东北向（尽揽游艇港全景且避免刺眼西晒）",
        harshAspect: "西南向（午后阳光直接暴晒阳台与客厅玻璃）",
        coolingEnergyImpact: "标准（按Empower固定容量费与用电计收）",
        solarHeatGainRating: "高（双层隔音防紫外线遮阳有色镀膜）",
        residentTip: "北向公寓兼备绝佳居住品质：尽收棕榈岛绝美景致，同时避免强烈西晒炙烤阳台结构板。"
      },
      walkability: {
        score: 84,
        category: "高度适宜步行",
        metroStation: "Mina Seyahi有轨电车站（直通Sobha Realty地铁站）",
        metroDistanceMinutes: 2,
        metroAccessType: "绿荫覆盖林荫大道步行道",
        dailyEssentialsOnFoot: "家乐福超市、Marina Walk滨海步道、Barasti沙滩俱乐部及药房步行3分钟内均可达。"
      }
    },
    de: {
      viewRadar: {
        riskLevel: "low",
        status: "Geschützter Blick auf Meer & Palm Jumeirah",
        assessment: "West- und nordwestlich ausgerichtete Wohnungen ab Ebene 35 blicken über den Marina-Kanal direkt auf die Palm Jumeirah. Die rückwärtigen Ost-Einheiten blicken auf den dicht bebauten Marina-Super-Tall-Cluster.",
        protectedOrientations: [
          "Nordwest (Palm Jumeirah & Arabischer Golf)",
          "West (Eingang des Marina-Kanals)"
        ],
        threatOrientations: [
          "Ost (Blickt in 80 m Abstand auf Marina Crown & 23 Marina)",
          "Süd (Teilweise Sichtüberschneidung mit Marina 101)"
        ]
      },
      solarExposure: {
        optimalAspect: "Nord / Nordost (Panoramablick auf die Marina ohne Blendung)",
        harshAspect: "Südwest (Direkte Nachmittagshitze vom Golf)",
        coolingEnergyImpact: "Standard (Empower-Kapazitätsgebühr fällt an)",
        solarHeatGainRating: "Hoch (Doppelt verglaste Akustik-Tönung)",
        residentTip: "Nordresidenzen bieten die beste Balance: klarer Blick auf Palm Jumeirah ohne sengende Nachmittagshitze auf dem Balkon."
      },
      walkability: {
        score: 84,
        category: "Sehr fußgängerfreundlich",
        metroStation: "Mina Seyahi Tram Station (Anbindung an Sobha Realty Metro)",
        metroDistanceMinutes: 2,
        metroAccessType: "Schattiger Boulevard-Spaziergang",
        dailyEssentialsOnFoot: "Carrefour Market, Uferpromenade Marina Walk, Barasti Beach Club und Apotheken in 3 Minuten zu Fuß."
      }
    },
    fr: {
      viewRadar: {
        riskLevel: "low",
        status: "Vue Mer & Palm Jumeirah en Première Ligne Protégée",
        assessment: "Les appartements orientés Ouest et Nord-Ouest au-dessus du 35e étage surplombent le canal de la marina vers Palm Jumeirah. Les unités arrières orientées Est font face au cluster dense des tours de la Marina.",
        protectedOrientations: [
          "Nord-Ouest (Palm Jumeirah & eaux du Golfe)",
          "Ouest (Entrée du chenal de la marina)"
        ],
        threatOrientations: [
          "Est (Face à Marina Crown et 23 Marina à 80 m de distance)",
          "Sud (Chevauchement visuel partiel avec Marina 101)"
        ]
      },
      solarExposure: {
        optimalAspect: "Nord / Nord-Est (Vue panoramique sur la marina sans éblouissement)",
        harshAspect: "Sud-Ouest (Exposition solaire directe de l'après-midi)",
        coolingEnergyImpact: "Standard (Tarification de puissance Empower en vigueur)",
        solarHeatGainRating: "Élevé (Double vitrage acoustique teinté)",
        residentTip: "Les logements exposés Nord offrent l'équilibre parfait: vue magnifique sur Palm Jumeirah sans surchauffe de la dalle de balcon."
      },
      walkability: {
        score: 84,
        category: "Très facile à pied",
        metroStation: "Station de tram Mina Seyahi (liaison métro Sobha Realty)",
        metroDistanceMinutes: 2,
        metroAccessType: "Promenade ombragée sur boulevard",
        dailyEssentialsOnFoot: "Supermarché Carrefour, promenade Marina Walk, club de plage Barasti et pharmacies accessibles en 3 minutes à pied."
      }
    },
    it: {
      viewRadar: {
        riskLevel: "low",
        status: "Vista Protetta sul Mare e Palm Jumeirah",
        assessment: "Gli appartamenti a ovest e nord-ovest oltre il 35° piano guardano direttamente il canale della marina verso Palm Jumeirah. Le unità posteriori a est guardano verso il fitto cluster di grattacieli della Marina.",
        protectedOrientations: [
          "Nord-Ovest (Palm Jumeirah e acque del Golfo)",
          "Ovest (Ingresso del canale della Marina)"
        ],
        threatOrientations: [
          "Est (Affaccia su Marina Crown e 23 Marina a 80m)",
          "Sud (Parziale sovrapposizione visiva con Marina 101)"
        ]
      },
      solarExposure: {
        optimalAspect: "Nord / Nord-Est (Vista panoramica senza riflessi solari)",
        harshAspect: "Sud-Ovest (Calore diretto pomeridiano dal Golfo)",
        coolingEnergyImpact: "Standard (Si applica la tariffa di potenza Empower)",
        solarHeatGainRating: "Alto (Doppio vetro acustico oscurato)",
        residentTip: "Le residenze a nord offrono il miglior equilibrio: vedute suggestive su Palm Jumeirah senza il calore pomeridiano che surriscalda i terrazzi."
      },
      walkability: {
        score: 84,
        category: "Molto accessibile a piedi",
        metroStation: "Stazione Tram Mina Seyahi (collegamento con Metro Sobha)",
        metroDistanceMinutes: 2,
        metroAccessType: "Passeggiata ombreggiata sul viale",
        dailyEssentialsOnFoot: "Supermercato Carrefour, passeggiata Marina Walk, Barasti beach club e farmacie a 3 minuti di cammino."
      }
    },
    tr: {
      viewRadar: {
        riskLevel: "low",
        status: "Korumalı Ön Cephe Deniz ve Palm Manzarası",
        assessment: "35. kat üzerindeki Batı ve Kuzeybatı cepheli daireler doğrudan Dubai Marina kanalı üzerinden Palm Jumeirah'a bakar. Doğuya bakan arka üniteler Marina'nın yoğun gökdelen kümesine bakar.",
        protectedOrientations: [
          "Kuzeybatı (Palm Jumeirah ve Basra Körfezi suları)",
          "Batı (Dubai Marina Kanal Girişi)"
        ],
        threatOrientations: [
          "Doğu (80m mesafede Marina Crown ve 23 Marina)",
          "Güney (Marina 101 ile kısmi açı çakışması)"
        ]
      },
      solarExposure: {
        optimalAspect: "Kuzey / Kuzeydoğu (Göz kamaşması olmadan panoramik Marina manzarası)",
        harshAspect: "Güneybatı (Öğleden sonra doğrudan Körfez sıcaklığı)",
        coolingEnergyImpact: "Standart (Empower kapasite ücreti uygulanır)",
        solarHeatGainRating: "Yüksek (Çift Akustik Renkli Cam)",
        residentTip: "Kuzey cepheli konutlar en iyi dengeye sahiptir: balkonu aşırı ısıtmadan Palm Jumeirah'ın canlı manzarası."
      },
      walkability: {
        score: 84,
        category: "Yüksek Yürüme Kolaylığı",
        metroStation: "Mina Seyahi Tramvay İstasyonu (Sobha Realty Metrosuna bağlı)",
        metroDistanceMinutes: 2,
        metroAccessType: "Gölgeli Bulvar Yolu",
        dailyEssentialsOnFoot: "Carrefour Market, Marina Walk kordonu, Barasti beach club ve eczaneler 3 dakikalık yürüyüş mesafesinde."
      }
    },
    hi: {
      viewRadar: {
        riskLevel: "low",
        status: "सुरक्षित फ्रंटलाइन समुद्र और पाम दृश्य",
        assessment: "स्तर 35 से ऊपर के पश्चिम और उत्तर-पश्चिम मुखी अपार्टमेंट सीधे दुबई मरीना चैनल के पार पाम जुमेराह की ओर देखते हैं। पूर्व की ओर मुख वाले पिछले हिस्से मरीना के घने टावरों का सामना करते हैं।",
        protectedOrientations: [
          "उत्तर-पश्चिम (पाम जुमेराह और अरब की खाड़ी का पानी)",
          "पश्चिम (दुबई मरीना चैनल प्रवेश द्वार)"
        ],
        threatOrientations: [
          "पूर्व (80 मीटर दूरी पर मरीना क्राउन और 23 मरीना)",
          "दक्षिण (मरीना 101 के साथ आंशिक दृश्य ओवरलैप)"
        ]
      },
      solarExposure: {
        optimalAspect: "उत्तर / उत्तर-पूर्व (बिना चकाचौंध के मनोरम मरीना दृश्य)",
        harshAspect: "दक्षिण-पश्चिम (दोपहर की सीधी धूप और गर्मी)",
        coolingEnergyImpact: "मानक (एम्पावर क्षमता शुल्क लागू)",
        solarHeatGainRating: "उच्च (डबल ध्वनिक टिंटेड ग्लेज़िंग)",
        residentTip: "उत्तर मुखी आवास सर्वोत्तम संतुलन का आनंद लेते हैं: बालकनी को गर्म किए बिना पाम जुमेराह का खुला दृश्य।"
      },
      walkability: {
        score: 84,
        category: "अत्यधिक सुगम पैदल क्षेत्र",
        metroStation: "मीना सेयाही ट्राम स्टेशन (शोभा रियल्टी मेट्रो से जुड़ा)",
        metroDistanceMinutes: 2,
        metroAccessType: "छायादार बुलेवार्ड वॉक",
        dailyEssentialsOnFoot: "कैरेफोर मार्केट, मरीना वॉक प्रोमेनेड, बारास्ती बीच क्लब और फार्मेसी 3 मिनट की पैदल दूरी पर।"
      }
    },
    ur: {
      viewRadar: {
        riskLevel: "low",
        status: "محفوظ سامنے کا سمندر اور پام کا نظارہ",
        assessment: "35ویں منزل سے اوپر مغرب اور شمال مغرب کے اپارٹمنٹس دبئی مرینا چینل سے پام جمیرہ کی طرف بلارکاوٹ نظارہ دیتے ہیں۔ مشرقی رخ کے اپارٹمنٹس مرینا کے قریبی بلند ٹاورز کا سامنا کرتے ہیں۔",
        protectedOrientations: [
          "شمال مغرب (پام جمیرہ اور خلیج عرب کے شفاف پانی)",
          "مغرب (دبئی مرینا چینل کا داخلی راستہ)"
        ],
        threatOrientations: [
          "مشرق (80 میٹر کے فاصلے پر مرینا کراؤن اور 23 مرینا)",
          "جنوب (مرینا 101 کے ساتھ جزوی زاویہ)"
        ]
      },
      solarExposure: {
        optimalAspect: "شمال / شمال مشرق (تیز چمک کے بغیر مرینا کا دلکش نظارہ)",
        harshAspect: "جنوب مغرب (دوپہر کی خلیجی دھوپ کی تپش)",
        coolingEnergyImpact: "معیاری (ایم پاور کا طے شدہ چارج لاگو ہوتا ہے)",
        solarHeatGainRating: "اعلیٰ (ڈبل ایکوسٹک ٹنٹڈ شیشہ)",
        residentTip: "شمالی رخ والی رہائش گاہیں سب سے متوازن ہیں: بالکونی سلیب پر تپش کے بغیر پام جمیرہ کا شاندار منظر۔"
      },
      walkability: {
        score: 84,
        category: "انتہائی پیدل رسائی کا حامل",
        metroStation: "مینا سیاحی ٹرام اسٹیشن (شوبھا ریالٹی میٹرو سے منسلک)",
        metroDistanceMinutes: 2,
        metroAccessType: "سایہ دار پام بلیوارڈ واک",
        dailyEssentialsOnFoot: "کیریفور مارکیٹ، مرینا واک واٹر فرنٹ پرومینیڈ، باراستی بیچ کلب اور ادویات کی دکانیں 3 منٹ کی واک پر۔"
      }
    }
  },
  "address-downtown": {
    en: {
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
    ru: {
      viewRadar: {
        riskLevel: "protected",
        status: "100% гарантированный фронтальный вид на Фонтаны",
        assessment: "Первая линия озера Бурдж прямо напротив Бурдж-Халифа. Поскольку акватория озера и танцующих фонтанов не подлежит застройке, фронтальные резиденции обладают бессрочной гарантией сохранения панорамы.",
        protectedOrientations: [
          "Северо-Запад (Прямой вид во всю высоту Бурдж-Халифа и шоу фонтанов — 100% защита)",
          "Запад (Озелененный бульвар Даунтауна)"
        ],
        threatOrientations: [
          "Восток (Тыльная сторона выходит на магистраль Financial Centre Road)"
        ]
      },
      solarExposure: {
        optimalAspect: "Северо-Запад (Вечерняя иллюминация фонтанов на фоне заката)",
        harshAspect: "Юг (Тыльный фасад аккумулирует полуденное тепло)",
        coolingEnergyImpact: "Стандартное (Гостиничный резерв охлаждения)",
        solarHeatGainRating: "Превосходный (Премиальный Low-E стеклопакет коммерческого класса)",
        residentTip: "Несмотря на закатное солнце на северо-западе, вечерние световые шоу на Бурдж-Халифа обеспечивают этой ориентации максимальную арендную премию в Дубае."
      },
      walkability: {
        score: 95,
        category: "Рай для пешехода (Вся инфраструктура рядом)",
        metroStation: "Станция метро Burj Khalifa / Dubai Mall",
        metroDistanceMinutes: 5,
        metroAccessType: "Прямой кондиционированный траволаторный тоннель",
        dailyEssentialsOnFoot: "Соединение кондиционированным мостом с Dubai Mall; рестораны высокой кухни, супермаркеты и спа прямо у порога."
      }
    },
    ar: {
      viewRadar: {
        riskLevel: "protected",
        status: "إطلالة مضمونة 100% بشكل دائم على نافورة دبي",
        assessment: "موقع مباشر في الصف الأول على بحيرة البرج قبالة برج خليفة. ونظراً لاستحالة البناء على البحيرة والنافورة الراقصة، فإن الأجنحة الأمامية مضمونة ضد أي حجب إلى الأبد.",
        protectedOrientations: [
          "الشمال الغربي (برج خليفة بالكامل وعروض النافورة الراقصة - حماية 100%)",
          "الغرب (مساحات بوليفارد داون تاون الخضراء)"
        ],
        threatOrientations: [
          "الشرق (الواجهة الخلفية المطلة على شارع المركز المالي)"
        ]
      },
      solarExposure: {
        optimalAspect: "الشمال الغربي (إضاءات النافورة المسائية مع خلفية الغروب)",
        harshAspect: "الجنوب (الواجهة الخلفية تمتص حرارة منتصف النهار)",
        coolingEnergyImpact: "احتياطي تبريد فندقي قياسي",
        solarHeatGainRating: "فائق (زجاج مزدوج تجاري عازل Low-E)",
        residentTip: "على الرغم من استقبال الشمال الغربي لشمس العصر، إلا أن انعكاسات النافورة وإضاءات البرج تحقق أعلى عائد إيجاري في دبي."
      },
      walkability: {
        score: 95,
        category: "جنة للمشاة (كافة الخدمات سيراً على الأقدام)",
        metroStation: "محطة مترو برج خليفة / دبي مول",
        metroDistanceMinutes: 5,
        metroAccessType: "نفق مكيف مباشر مع ممشى متحرك",
        dailyEssentialsOnFoot: "جسر مكيف يربطك مباشرة بـ دبي مول؛ مطاعم فاخرة، مراكز تسوق وخدمات ترفيهية على بعد خطوات."
      }
    },
    zh: {
      viewRadar: {
        riskLevel: "protected",
        status: "100% 永久不可遮挡音乐喷泉头排绝景",
        assessment: "傲居哈利法塔湖第一排绝佳正席，直面世界最高建筑哈利法塔与标志性音乐喷泉。由于湖面与喷泉水体永久严禁填埋与施工，前向套房享有不可剥夺的永久头排观景权。",
        protectedOrientations: [
          "西北朝向（哈利法塔全塔尖端雄姿与音乐喷泉水幕秀 - 100%永久保护）",
          "西侧朝向（市中心环形林荫大道核心绿意）"
        ],
        threatOrientations: [
          "东向（后立面朝向金融中心路快速干道）"
        ]
      },
      solarExposure: {
        optimalAspect: "西北朝向（享受伴随落日余晖的晚间喷泉水幕光影）",
        harshAspect: "南侧朝向（后立面承受正午较强的热量蓄积）",
        coolingEnergyImpact: "五星级酒店级标准化中央冷源储备",
        solarHeatGainRating: "极佳（商业旗舰级双银Low-E高透低辐射节能中空玻璃）",
        residentTip: "尽管西北朝向在傍晚时分有短暂日照，但每晚哈利法塔的激光秀与音乐喷泉盛景，赋予其全迪拜无可匹敌的超高租金溢价与入住率。"
      },
      walkability: {
        score: 95,
        category: "步行者天堂（生活全配套步行即达）",
        metroStation: "哈利法塔/迪拜商场地铁站",
        metroDistanceMinutes: 5,
        metroAccessType: "全天候恒温空调自动人行步道连桥",
        dailyEssentialsOnFoot: "全封闭恒温天桥无缝直连迪拜商场（Dubai Mall），顶奢餐饮、米其林星厨、精品超市和水疗养生举步即达。"
      }
    },
    de: {
      viewRadar: {
        riskLevel: "protected",
        status: "100% dauerhaft garantierter Blick auf die Fontänen",
        assessment: "Erste Reihe direkt am Burj Lake gegenüber dem Burj Khalifa. Da der See und die Dubai Fountains nicht bebaut werden können, besteht für die Suiten auf Lebenszeit keinerlei Risiko einer Sichtbeeinträchtigung.",
        protectedOrientations: [
          "Nordwest (Direktansicht Burj Khalifa & Tanzende Fontänen – 100% geschützt)",
          "West (Downtown Boulevard Grünflächen)"
        ],
        threatOrientations: [
          "Ost (Rückseite blickt auf die Financial Centre Road)"
        ]
      },
      solarExposure: {
        optimalAspect: "Nordwest (Abendliche Fontänenbeleuchtung mit Sonnenuntergangskulisse)",
        harshAspect: "Süd (Rückfassade nimmt Mittagshitze auf)",
        coolingEnergyImpact: "Standard-Hotel-Kühler-Reserve",
        solarHeatGainRating: "Hervorragend (Low-E-Isolierglaseinheiten in Hotelqualität)",
        residentTip: "Trotz später Nachmittagssonne erzielen die Wasserspiele und Lichtshows des Burj Khalifa auf dieser Seite die höchsten Mietprämien Dubais."
      },
      walkability: {
        score: 95,
        category: "Fußgänger-Paradies (Alles zu Fuß erreichbar)",
        metroStation: "Burj Khalifa / Dubai Mall Metro Station",
        metroDistanceMinutes: 5,
        metroAccessType: "Direkter klimatisierter Fahrsteig-Tunnel",
        dailyEssentialsOnFoot: "Klimatisierte Fußgängerbrücke zur Dubai Mall; Gourmet-Restaurants, Supermärkte und Spas liegen direkt vor der Haustür."
      }
    },
    fr: {
      viewRadar: {
        riskLevel: "protected",
        status: "Vue Définitivement Garantie à 100% sur les Fontaines",
        assessment: "Position de premier rang au bord du lac Burj, en face du Burj Khalifa. Le lac et les fontaines étant inconstructibles, les résidences frontales bénéficient d'une vue dégagée à perpétuité.",
        protectedOrientations: [
          "Nord-Ouest (Flèche du Burj Khalifa et spectacle des fontaines — 100% protégé)",
          "Ouest (Verdure du Downtown Boulevard)"
        ],
        threatOrientations: [
          "Est (Façade arrière face à la voie rapide Financial Centre Road)"
        ]
      },
      solarExposure: {
        optimalAspect: "Nord-Ouest (Spectacle nocturne des fontaines sur fond de coucher de soleil)",
        harshAspect: "Sud (La façade arrière absorbe la chaleur de midi)",
        coolingEnergyImpact: "Réserve de refroidissement hôtelière standard",
        solarHeatGainRating: "Supérieur (Double vitrage isolant Low-E de qualité commerciale)",
        residentTip: "Bien que l'orientation Nord-Ouest capte le soleil couchant, les reflets des fontaines et les illuminations du Burj Khalifa offrent la plus forte rentabilité locative de Dubaï."
      },
      walkability: {
        score: 95,
        category: "Paradis pour piétons (Tout à pied)",
        metroStation: "Station de métro Burj Khalifa / Dubai Mall",
        metroDistanceMinutes: 5,
        metroAccessType: "Tunnel climatisé direct avec tapis roulant",
        dailyEssentialsOnFoot: "Passerelle climatisée menant au Dubai Mall; gastronomie, supermarchés et bien-être au pied de la résidence."
      }
    },
    it: {
      viewRadar: {
        riskLevel: "protected",
        status: "Vista Garantita al 100% sulle Fontane in Prima Fila",
        assessment: "Posizione di prima fila direttamente sul Burj Lake, di fronte al Burj Khalifa. L'inviolabilità del bacino d'acqua garantisce per sempre l'assoluta integrità della vista panoramica frontale.",
        protectedOrientations: [
          "Nord-Ovest (Vista integrale su Burj Khalifa e spettacolo delle fontane - 100% protetto)",
          "Ovest (Verde del viale di Downtown)"
        ],
        threatOrientations: [
          "Est (Posteriore su Financial Centre Road)"
        ]
      },
      solarExposure: {
        optimalAspect: "Nord-Ovest (Illuminazione serale delle fontane al tramonto)",
        harshAspect: "Sud (Facciata posteriore esposta al calore meridiano)",
        coolingEnergyImpact: "Standard alberghiero centralizzato",
        solarHeatGainRating: "Superiore (Vetri isolanti Low-E ad alte prestazioni)",
        residentTip: "Nonostante il sole del tardo pomeriggio, le fontane e i giochi di luce del Burj Khalifa offrono i canoni di affitto più alti di tutta Dubai."
      },
      walkability: {
        score: 95,
        category: "Paradiso dei pedoni (Tutto a piedi)",
        metroStation: "Stazione Metro Burj Khalifa / Dubai Mall",
        metroDistanceMinutes: 5,
        metroAccessType: "Tunnel diretto climatizzato con tapis roulant",
        dailyEssentialsOnFoot: "Collegato da ponte climatizzato al Dubai Mall; ristoranti stellati, alimentari e centri benessere adiacenti."
      }
    },
    tr: {
      viewRadar: {
        riskLevel: "protected",
        status: "%100 Kalıcı Olarak Garantili Ön Sıra Fıskiye Manzarası",
        assessment: "Burj Khalifa'nın karşısındaki Burj Gölü'nün hemen kıyısında ön sıra konumu. Göl ve dans eden fıskiyeler inşaata kapalı olduğundan, ön cephedeki süitler sonsuza kadar kapanmaz manzaraya sahiptir.",
        protectedOrientations: [
          "Kuzeybatı (Burj Khalifa kulesi ve fıskiye şovunun tamamı - %100 korumalı)",
          "Batı (Downtown Bulvarı yeşillikleri)"
        ],
        threatOrientations: [
          "Doğu (Financial Centre Road otoyoluna bakan arka cephe)"
        ]
      },
      solarExposure: {
        optimalAspect: "Kuzeybatı (Gün batımı eşliğinde akşam fıskiye ışıklandırmaları)",
        harshAspect: "Güney (Arka cephe öğle sıcağını emer)",
        coolingEnergyImpact: "Standart Otel Soğutma Rezervi",
        solarHeatGainRating: "Üstün (Ticari sınıf Low-E yalıtımlı çift cam)",
        residentTip: "Kuzeybatı cephe öğleden sonra ışık alsa da, fıskiye ve Burj Khalifa ışık gösterileri Dubai'nin en yüksek kira getirisini sağlar."
      },
      walkability: {
        score: 95,
        category: "Yaya Cenneti (Tüm ihtiyaçlar yürüme mesafesinde)",
        metroStation: "Burj Khalifa / Dubai Mall Metro İstasyonu",
        metroDistanceMinutes: 5,
        metroAccessType: "Doğrudan Klimalı Yürüyen Bant Tüneli",
        dailyEssentialsOnFoot: "Klimalı köprü ile Dubai Mall'a doğrudan bağlantı; gurme restoranlar, süpermarketler ve spor kulüpleri kapınızın önündedir."
      }
    },
    hi: {
      viewRadar: {
        riskLevel: "protected",
        status: "100% स्थायी रूप से गारंटीकृत फाउंटेन फ्रंटलाइन दृश्य",
        assessment: "बुर्ज खलीफा के सामने बुर्ज झील पर पहली पंक्ति में स्थित। झील और डांसिंग फाउंटेन पर निर्माण नहीं किया जा सकता, इसलिए सामने की ओर मुख वाली सुइट्स को हमेशा के लिए सुरक्षित दृश्य मिलता है।",
        protectedOrientations: [
          "उत्तर-पश्चिम (बुर्ज खलीफा का पूरा दृश्य और फाउंटेन शो - 100% सुरक्षित)",
          "पश्चिम (डाउनटाउन बुलेवार्ड हरियाली)"
        ],
        threatOrientations: [
          "पूर्व (फाइनेंशियल सेंटर रोड की ओर पिछला भाग)"
        ]
      },
      solarExposure: {
        optimalAspect: "उत्तर-पश्चिम (सूर्यास्त के साथ शाम का फाउंटेन शो)",
        harshAspect: "दक्षिण (पिछला हिस्सा दोपहर की गर्मी को सोखता है)",
        coolingEnergyImpact: "मानक होटल चिलर रिजर्व",
        solarHeatGainRating: "उत्कृष्ट (वाणिज्यिक ग्रेड लो-ई इंसुलेटेड ग्लास)",
        residentTip: "यद्यपि उत्तर-पश्चिम में दोपहर की धूप आती है, शाम के फाउंटेन शो और बुर्ज खलीफा लाइट शो दुबई का उच्चतम किराया प्रीमियम दिलाते हैं।"
      },
      walkability: {
        score: 95,
        category: "पैदल चलने वालों का स्वर्ग (सभी सुविधाएं पैदल दूरी पर)",
        metroStation: "बुर्ज खलीफा / दुबई मॉल मेट्रो स्टेशन",
        metroDistanceMinutes: 5,
        metroAccessType: "सीधा वातानुकूलित स्वचालित वॉकवे टनल",
        dailyEssentialsOnFoot: "वातानुकूलित पुल द्वारा दुबई मॉल से जुड़ा; लक्जरी डाइनिंग, सुपरमार्केट और वेलनेस सुविधाएं दरवाजे पर।"
      }
    },
    ur: {
      viewRadar: {
        riskLevel: "protected",
        status: "100% مستقل محفوظ سامنے کا فوارہ ویو",
        assessment: "برج جھیل پر برج خلیفہ کے بالکل سامنے پہلی صف کا مقام۔ چونکہ جھیل اور ناچتے فواروں پر تعمیر ناممکن ہے، اس لیے سامنے والے سوئٹس کا نظارہ ہمیشہ کے لیے محفوظ ہے۔",
        protectedOrientations: [
          "شمال مغرب (برج خلیفہ اور دبئی فوارہ شو کا مکمل نظارہ - 100% محفوظ)",
          "مغرب (ڈاون ٹاون بلیوارڈ کی سرسبزی)"
        ],
        threatOrientations: [
          "مشرق (فنانشل سینٹر روڈ کی طرف پچھلا رخ)"
        ]
      },
      solarExposure: {
        optimalAspect: "شمال مغرب (غروب آفتاب کے ساتھ شام کے فواروں کی روشنیاں)",
        harshAspect: "جنوب (پچھلا فساڈ دوپہر کی تپش جذب کرتا ہے)",
        coolingEnergyImpact: "معیاری ہوٹل چلر سسٹم",
        solarHeatGainRating: "اعلیٰ ترین (کمرشل گریڈ لو ای انسولیٹڈ گلاس یونٹس)",
        residentTip: "شمال مغرب میں شام کی تپش کے باوجود، فواروں کے عکس اور برج خلیفہ لائٹ شوز دبئی کا سب سے زیادہ کرایہ پریمیم فراہم کرتے ہیں۔"
      },
      walkability: {
        score: 95,
        category: "پیدل چلنے والوں کی جنت (تمام سہولیات واکنگ ڈسٹنس پر)",
        metroStation: "برج خلیفہ / دبئی مال میٹرو اسٹیشن",
        metroDistanceMinutes: 5,
        metroAccessType: "براہ راست ایئر کنڈیشنڈ متحرک واک وے ٹنل",
        dailyEssentialsOnFoot: "ایئر کنڈیشنڈ پل کے ذریعے دبئی مال سے براہ راست منسلک؛ گروسری، کھانے پینے کے مراکز اور شاپنگ کے تمام مواقع بالکل سامنے۔"
      }
    }
  },
  "one-zaabeel": {
    en: {
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
    ru: {
      viewRadar: {
        riskLevel: "protected",
        status: "Защищенный вид на парк Забиль и королевские резиденции",
        assessment: "Панорама на парк Забиль, дворцовые территории и скайлайн DIFC. Действующий охранный статус королевских территорий гарантирует, что южные и восточные ракурсы никогда не будут застроены небоскребами.",
        protectedOrientations: [
          "Юг / Юго-Восток (Парк Забиль и Dubai Frame — 100% пожизненная защита)",
          "Запад (Скайлайн DIFC и башни Даунтауна)"
        ],
        threatOrientations: [
          "Север (Коммерческая реновация транспортного узла Trade Centre)"
        ]
      },
      solarExposure: {
        optimalAspect: "Юго-Восток (Мягкое утреннее солнце над парком Забиль)",
        harshAspect: "Запад (Интенсивный закат через консоль моста The Link)",
        coolingEnergyImpact: "Низкое (-22% благодаря динамическим фасадным ламелям)",
        solarHeatGainRating: "Превосходный (Тройной энергосберегающий акустический стеклопакет)",
        residentTip: "230-метровая подвесная консоль 'The Link' служит гигантским термобарьером: в жилых резиденциях сохраняется прохлада и абсолютная тишина."
      },
      walkability: {
        score: 89,
        category: "Высокая пешеходная доступность",
        metroStation: "Станция метро Max (Красная ветка)",
        metroDistanceMinutes: 4,
        metroAccessType: "Прямой крытый пешеходный переход",
        dailyEssentialsOnFoot: "Прямой выход к беговым дорожкам парка Забиль, мишленовским ресторанам внутри The Link и Всемирному торговому центру."
      }
    },
    ar: {
      viewRadar: {
        riskLevel: "protected",
        status: "إطلالة محمية على حديقة زعبيل والقصور الملكية",
        assessment: "إطلالة على حديقة زعبيل ومحيط القصور الملكية وأفق مركز دبي المالي العالمي. القيود الصارمة المفروضة على الارتفاعات تضمن بقاء الإطلالات الجنوبية والشرقية مفتوحة إلى الأبد.",
        protectedOrientations: [
          "الجنوب / الجنوب الشرقي (حديقة زعبيل وبرواز دبي - غير قابلة للحجب 100%)",
          "الغرب (أفق مركز دبي المالي وداون تاون)"
        ],
        threatOrientations: [
          "الشمال (إعادة تطوير المنطقة التجارية قرب المركز التجاري)"
        ]
      },
      solarExposure: {
        optimalAspect: "الجنوب الشرقي (شمس صباحية مشرقة فوق حديقة زعبيل)",
        harshAspect: "الغرب (غروب الشمس القوي عبر جسر ذا لينك المعلق)",
        coolingEnergyImpact: "منخفض (-22% مع كاسرات الشمس الديناميكية الذكية)",
        solarHeatGainRating: "فائق (زجاج ثلاثي عازل للصوت والحرارة)",
        residentTip: "يعمل بهو ذا لينك المعلق بطول 230 متراً كحاجز حراري ضخم، مما يحافظ على هدوء استثنائي وبرودة داخلية ممتازة للأجنحة."
      },
      walkability: {
        score: 89,
        category: "مناسب جداً للمشي اليومي",
        metroStation: "محطة مترو ماكس (الخط الأحمر)",
        metroDistanceMinutes: 4,
        metroAccessType: "ممر مشاة مغطى ومباشر",
        dailyEssentialsOnFoot: "وصول مباشر لمضامير الجري في حديقة زعبيل، ومطاعم ميشلان داخل ذا لينك، وعلى بعد دقائق من مركز التجارة العالمي."
      }
    },
    zh: {
      viewRadar: {
        riskLevel: "protected",
        status: "受保护的扎比尔皇家绿地与迪拜相框天际全景",
        assessment: "俯瞰扎比尔公园大片绿洲森林、皇家宫邸与DIFC金融区天际线。严格的皇家保护区限高法令，彻底杜绝了南部与东部视野遭遇任何高层阻隔的可能性。",
        protectedOrientations: [
          "南向/东南向（扎比尔公园广袤林海与迪拜相框 - 100%永久不可遮挡）",
          "西侧朝向（DIFC与市中心摩天剪影）"
        ],
        threatOrientations: [
          "北向（世界贸易中心环岛片区商务再开发项目）"
        ]
      },
      solarExposure: {
        optimalAspect: "东南向（晨曦拂过扎比尔公园，温和清润）",
        harshAspect: "西侧向（透过悬挑空中走廊The Link的夕照热浪）",
        coolingEnergyImpact: "极低（智能动态遮阳百叶降低空调负荷22%）",
        solarHeatGainRating: "极佳（三层中空高性能声学与沙漠强紫外线阻隔屏障）",
        residentTip: "长达230米的重磅悬挑天桥“The Link”构筑了巨大的结构隔热体，使得悬臂套房享有极致的室内静谧度与恒温凉爽体感。"
      },
      walkability: {
        score: 89,
        category: "高度适宜步行",
        metroStation: "Max地铁站（红线）",
        metroDistanceMinutes: 4,
        metroAccessType: "直通式全天候有顶遮阳廊桥",
        dailyEssentialsOnFoot: "直通扎比尔公园慢跑林荫道、The Link内米其林奢华饕餮美食长廊，数分钟即抵世贸中心展览馆。"
      }
    },
    de: {
      viewRadar: {
        riskLevel: "protected",
        status: "Geschützter Zabeel Park & Palastblick",
        assessment: "Blick auf den Zabeel Park, königliche Ländereien und die DIFC-Skyline. Strenge Bauhöhenbeschränkungen für das Schutzgebiet garantieren, dass südliche und östliche Blickachsen unverbaubar bleiben.",
        protectedOrientations: [
          "Süd / Südost (Zabeel Park & Dubai Frame – 100% unverbaubar)",
          "West (DIFC- und Downtown-Skyline)"
        ],
        threatOrientations: [
          "Nord (Gewerbliche Neuentwicklung am Trade Centre)"
        ]
      },
      solarExposure: {
        optimalAspect: "Südost (Morgensonne über dem Zabeel Park)",
        harshAspect: "West (Intensiver Sonnenuntergang durch The Link)",
        coolingEnergyImpact: "Niedrig (-22% dank dynamischer Fassadenlamellen)",
        solarHeatGainRating: "Hervorragend (Dreifach verglaster Akustik- und Sonnenschutz)",
        residentTip: "Die 230 Meter lange schwebende Himmelsbrücke 'The Link' dient als thermische Barriere; Suiten bieten minimale Geräuschentwicklung und Kühle."
      },
      walkability: {
        score: 89,
        category: "Sehr fußgängerfreundlich",
        metroStation: "Max Metro Station (Rote Linie)",
        metroDistanceMinutes: 4,
        metroAccessType: "Direkter überdachter Fußweg",
        dailyEssentialsOnFoot: "Direkter Zugang zu Laufstrecken im Zabeel Park, Michelin-Restaurants in The Link und Nähe zum World Trade Centre."
      }
    },
    fr: {
      viewRadar: {
        riskLevel: "protected",
        status: "Vue Protégée sur le Parc Zabeel & les Palais",
        assessment: "Vue imprenable sur le parc Zabeel, les domaines royaux et la skyline du DIFC. La zone protégée garantit qu'aucune tour ne viendra obstruer les perspectives Sud et Est.",
        protectedOrientations: [
          "Sud / Sud-Est (Parc Zabeel & Dubai Frame — 100% inconstructible)",
          "Ouest (Silhouette du DIFC et de Downtown)"
        ],
        threatOrientations: [
          "Nord (Réaménagement commercial du rond-point du Trade Centre)"
        ]
      },
      solarExposure: {
        optimalAspect: "Sud-Est (Douce lumière matinale sur le parc Zabeel)",
        harshAspect: "Ouest (Coucher de soleil intense à travers The Link)",
        coolingEnergyImpact: "Faible (-22% grâce aux brise-soleil automatisés)",
        solarHeatGainRating: "Supérieur (Triple vitrage acoustique et isolant thermique)",
        residentTip: "La passerelle suspendue 'The Link' de 230 m fait office de bouclier thermique; les résidences restent calmes et fraîches."
      },
      walkability: {
        score: 89,
        category: "Très facile à pied",
        metroStation: "Station de métro Max (Ligne Rouge)",
        metroDistanceMinutes: 4,
        metroAccessType: "Passerelle piétonne couverte directe",
        dailyEssentialsOnFoot: "Accès direct aux pistes du parc Zabeel, restaurants étoilés à l'intérieur de The Link et World Trade Centre."
      }
    },
    it: {
      viewRadar: {
        riskLevel: "protected",
        status: "Vista Protetta Parco Zabeel e Palazzi Reali",
        assessment: "Affaccio panoramico sul Parco Zabeel, residenze reali e skyline del DIFC. Le rigide tutele urbanistiche impediscono costruzioni alte verso sud ed est.",
        protectedOrientations: [
          "Sud / Sud-Est (Verde del Parco Zabeel e Dubai Frame - 100% protetto)",
          "Ovest (Profilo di Downtown e DIFC)"
        ],
        threatOrientations: [
          "Nord (Riqualificazione commerciale nei pressi del Trade Centre)"
        ]
      },
      solarExposure: {
        optimalAspect: "Sud-Est (Luce del mattino su Parco Zabeel)",
        harshAspect: "Ovest (Forte tramonto attraverso la struttura di The Link)",
        coolingEnergyImpact: "Basso (-22% con lamelle frangisole dinamiche)",
        solarHeatGainRating: "Superiore (Triplo vetro acustico e solare)",
        residentTip: "Il ponte sospeso 'The Link' da 230 metri crea un'efficace barriera termica e acustica per le residenze."
      },
      walkability: {
        score: 89,
        category: "Molto accessibile a piedi",
        metroStation: "Stazione Metro Max (Linea Rossa)",
        metroDistanceMinutes: 4,
        metroAccessType: "Percorso pedonale coperto diretto",
        dailyEssentialsOnFoot: "Accesso ai percorsi running di Zabeel Park, ristoranti stellati nel The Link e vicino al Trade Centre."
      }
    },
    tr: {
      viewRadar: {
        riskLevel: "protected",
        status: "Korumalı Zabeel Parkı ve Kraliyet Sarayı Manzarası",
        assessment: "Zabeel Parkı, kraliyet arazileri ve DIFC siluetine bakan geniş manzara. Bölgedeki kat kısıtlamaları güney ve doğu manzaralarının asla kapanmamasını sağlar.",
        protectedOrientations: [
          "Güney / Güneydoğu (Zabeel Parkı ve Dubai Frame - %100 kapanmaz)",
          "Batı (DIFC ve Downtown silueti)"
        ],
        threatOrientations: [
          "Kuzey (Trade Centre kavşağı ticari yenileme alanı)"
        ]
      },
      solarExposure: {
        optimalAspect: "Güneydoğu (Zabeel Parkı üzerinde sabah güneşi)",
        harshAspect: "Batı (The Link konsolu üzerinden güçlü gün batımı)",
        coolingEnergyImpact: "Düşük (Otomatik panjur sistemi ile -%22 soğutma)",
        solarHeatGainRating: "Üstün (Üç camlı yüksek akustik ve güneş bariyeri)",
        residentTip: "230 metrelik 'The Link' köprüsü devasa bir termal kalkan oluşturur; süitlerde serin ve sessiz bir ortam sağlar."
      },
      walkability: {
        score: 89,
        category: "Yüksek Yürüme Kolaylığı",
        metroStation: "Max Metro İstasyonu (Kırmızı Hat)",
        metroDistanceMinutes: 4,
        metroAccessType: "Doğrudan Kapalı Yaya Yolu",
        dailyEssentialsOnFoot: "Zabeel Parkı koşu parkurlarına doğrudan çıkış, The Link içindeki Michelin restoranları ve World Trade Centre yakınlığı."
      }
    },
    hi: {
      viewRadar: {
        riskLevel: "protected",
        status: "संरक्षित ज़ाबील पार्क और रॉयल पैलेस दृश्य",
        assessment: "ज़ाबील पार्क, शाही महल के मैदान और डीआईएफसी स्काईलाइन का विहंगम दृश्य। कड़े निर्माण प्रतिबंध सुनिश्चित करते हैं कि दक्षिणी और पूर्वी दृश्य कभी अवरुद्ध नहीं होंगे।",
        protectedOrientations: [
          "दक्षिण / दक्षिण-पूर्व (ज़ाबील पार्क और दुबई फ्रेम - 100% सुरक्षित)",
          "पश्चिम (डीआईएफसी और डाउनटाउन क्षितिज)"
        ],
        threatOrientations: [
          "उत्तर (ट्रेड सेंटर राउंडअबाउट वाणिज्यिक पुनर्विकास)"
        ]
      },
      solarExposure: {
        optimalAspect: "दक्षिण-पूर्व (ज़ाबील पार्क पर सुबह की धूप)",
        harshAspect: "पश्चिम (द लिंक कैंटिलीवर के माध्यम से सूर्यास्त की गर्मी)",
        coolingEnergyImpact: "कम (स्वचालित डायनामिक लाउवर के साथ -22%)",
        solarHeatGainRating: "उत्कृष्ट (ट्रिपल-ग्लेज़्ड उच्च ध्वनिक और सौर बाधा)",
        residentTip: "230 मीटर लंबा हवा में झूलता 'द लिंक' एक बड़ा थर्मल अवरोध बनाता है; आवास अत्यधिक शांत और ठंडे रहते हैं।"
      },
      walkability: {
        score: 89,
        category: "अत्यधिक सुगम पैदल क्षेत्र",
        metroStation: "मैक्स मेट्रो स्टेशन (रेड लाइन)",
        metroDistanceMinutes: 4,
        metroAccessType: "सीधा कवर्ड पैदल मार्ग",
        dailyEssentialsOnFoot: "ज़ाबील पार्क जॉगिंग ट्रैक, द लिंक के भीतर मिशेलिन रेस्तरां और वर्ल्ड ट्रेड सेंटर तक सीधी पहुंच।"
      }
    },
    ur: {
      viewRadar: {
        riskLevel: "protected",
        status: "محفوظ زعبیل پارک اور رائل پیلس نظارہ",
        assessment: "زعبیل پارک، شاہی محلات اور ڈی آئی ایف سی کے دلکش مناظر۔ شاہی تحفظاتی قوانین کی بدولت جنوبی اور مشرقی مناظر کے آگے کسی نئی بلند عمارت کی تعمیر ناممکن ہے۔",
        protectedOrientations: [
          "جنوب / جنوب مشرق (زعبیل پارک اور دبئی فریم - 100% محفوظ)",
          "مغرب (مرکز مالیات اور ڈاون ٹاون کا اسکائی لائن)"
        ],
        threatOrientations: [
          "شمال (ٹریڈ سینٹر چوک پر ممکنہ کمرشل پروجیکٹ)"
        ]
      },
      solarExposure: {
        optimalAspect: "جنوب مشرق (زعبیل پارک پر صبح کی خوشگوار دھوپ)",
        harshAspect: "مغرب (دی لنک کینٹی لیور سے چھنتی ہوئی تپش)",
        coolingEnergyImpact: "کم (خودکار ڈائنامک فساڈ کے ساتھ 22 فیصد کم لوڈ)",
        solarHeatGainRating: "اعلیٰ ترین (ٹرپل گلیزڈ ایکوسٹک و سولر بیرئیر)",
        residentTip: "230 میٹر طویل معلق برج 'دی لنک' ایک زبردست تھرمل شیلڈ فراہم کرتا ہے جس سے اندر کا درجہ حرارت اور سکون برقرار رہتا ہے۔"
      },
      walkability: {
        score: 89,
        category: "انتہائی پیدل رسائی کا حامل",
        metroStation: "میکس میٹرو اسٹیشن (ریڈ لائن)",
        metroDistanceMinutes: 4,
        metroAccessType: "براہ راست کورڈ پیدل پاتھ وے",
        dailyEssentialsOnFoot: "زعبیل پارک کے واکنگ ٹریکس، دی لنک میں مشیلن اسٹار ریسٹورنٹس اور ورلڈ ٹریڈ سینٹر تک چند منٹوں میں رسائی۔"
      }
    }
  },
  "atlantis-the-royal": {
    en: {
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
    },
    ru: {
      viewRadar: {
        riskLevel: "protected",
        status: "100% неперекрываемый открытый морской горизонт",
        assessment: "Расположение на внешнем полумесяце (Crescent) острова Пальма Джумейра без суши впереди. Северный горизонт выходит в бескрайний Персидский залив, южный — на ветви Пальмы и Марину. Перекрытие физически невозможно.",
        protectedOrientations: [
          "Север (Бескрайний открытый Персидский залив — 100% пожизненная гарантия)",
          "Юг (Панорама ветвей Пальмы Джумейра и скайлайна Дубай Марина)"
        ],
        threatOrientations: []
      },
      solarExposure: {
        optimalAspect: "Север (Постоянный морской бриз, мягкий свет без бликов)",
        harshAspect: "Юг (Интенсивное солнце на террасах скай-бассейнов)",
        coolingEnergyImpact: "Стандартное курортное централизованное охлаждение",
        solarHeatGainRating: "Превосходный (Тройной морской акустический стеклопакет с UV-фильтрами)",
        residentTip: "Северные океанские сьюты дарят вечную прохладу и умиротворение; на южных террасах пентхаусов бассейны инфинити естественно прогреваются солнцем целый день."
      },
      walkability: {
        score: 52,
        category: "Частичная пешеходность (рекомендуется авто)",
        metroStation: "Станция монорельса Atlantis Aquaventure (пересадка на трамвай/метро)",
        metroDistanceMinutes: 3,
        metroAccessType: "Прямой крытый пешеходный переход",
        dailyEssentialsOnFoot: "Приватный пляж, 17 ресторанов от мировых шеф-поваров, премиум спа и бутики прямо на территории курорта; для поездок в город рекомендуется авто."
      }
    },
    ar: {
      viewRadar: {
        riskLevel: "protected",
        status: "أفق بحري مفتوح 100% غير قابل للحجب نهائياً",
        assessment: "يقع الفندق على الهلال الخارجي لنخلة جميرا دون وجود أي يابسة أمامه في البحر. الأفق الشمالي يواجه مياه الخليج العربي المفتوحة، بينما تطل الواجهة الجنوبية على النخلة بالكامل ومارينا دبي.",
        protectedOrientations: [
          "الشمال (مياه الخليج العربي المفتوحة - مضمونة 100% إلى الأبد)",
          "الجنوب (بانوراما سعفات نخلة جميرا وأفق دبي مارينا)"
        ],
        threatOrientations: []
      },
      solarExposure: {
        optimalAspect: "الشمال (نسيم بحري عليل وضوء هادئ دون وهج)",
        harshAspect: "الجنوب (حرارة شمس الظهيرة على مسابح الشرفات)",
        coolingEnergyImpact: "نظام تبريد منتجعات فاخرة",
        solarHeatGainRating: "فائق (زجاج ثلاثي بحري عازل للصوت مع ترشيح للأشعة فوق البنفسجية)",
        residentTip: "الأجنحة الشمالية المطلة على المحيط توفر أجواء هادئة وباردة باستمرار؛ بينما تستفيد أحواض السباحة الخاصة في البنتهاوس الجنوبي من دفء الشمس الطبيعي طوال اليوم."
      },
      walkability: {
        score: 52,
        category: "محدود المشي (يُفضل استخدام سيارة)",
        metroStation: "محطة مونوريل أتلانتس أكوافنتشر (تتصل بالترام والمترو)",
        metroDistanceMinutes: 3,
        metroAccessType: "ممر مشاة مغطى ومباشر",
        dailyEssentialsOnFoot: "شاطئ خاص فائق الفخامة، 17 مطعماً يديرها مشاهير الطهاة، ومتاجر راقية داخل المنتجع؛ يُنصح بسيارة خاصة للتنقل نحو مركز المدينة."
      }
    },
    zh: {
      viewRadar: {
        riskLevel: "protected",
        status: "100% 绝对不可遮挡的一线开阔外海与棕榈岛地平线",
        assessment: "雄踞朱美拉棕榈岛最外圈新月湾外沿，正前方面向万顷碧波，绝无任何陆地或人工岛阻挡。北面直通无垠阿拉伯湾，南面尽揽整个棕榈岛树冠群与玛丽娜天际线，遮挡在地理上完全不可能。",
        protectedOrientations: [
          "北向（浩瀚开阔的阿拉伯湾外海 - 100%永久法定保障）",
          "南向（俯瞰棕榈岛全景枝叶群与迪拜游艇港摩天群轮廓）"
        ],
        threatOrientations: []
      },
      solarExposure: {
        optimalAspect: "北向（全天候舒适海风拂面，采光柔和纯粹无光污染眩光）",
        harshAspect: "南向（朝向棕榈岛的悬空私人泳池露台正午受日照较充沛）",
        coolingEnergyImpact: "超奢度假区最高规格集中冷力储备系统",
        solarHeatGainRating: "极佳（海事级三层中空超静音防盐雾UV过滤特种玻璃）",
        residentTip: "北向面海套房拥有极致静谧恒凉的海洋微气候；南向顶层复式配设的私属无边际天际泳池则借助全天日光实现天然恒温水体加热。"
      },
      walkability: {
        score: 52,
        category: "部分适宜步行（建议私家车或打车）",
        metroStation: "Atlantis Aquaventure单轨电车站（直连电车与红线地铁）",
        metroDistanceMinutes: 3,
        metroAccessType: "直通式全天候有顶遮阳廊桥",
        dailyEssentialsOnFoot: "奢华私人沙滩、17间由全球米其林名厨主理的殿堂餐厅、水疗奢宠中心与高端奢侈品买手店均位于度假城内；往来内陆建议专车接送。"
      }
    },
    de: {
      viewRadar: {
        riskLevel: "protected",
        status: "100% unverbaubarer Blick auf offenes Meer & Palm Jumeirah",
        assessment: "Auf der äußeren Mondsichel der Palm Jumeirah ohne jegliches Land vor der Küste gelegen. Der Nordhorizont blickt auf den endlosen Arabischen Golf, die Südseite überblickt das gesamte Archipel.",
        protectedOrientations: [
          "Nord (Endloser offener Arabischer Golf – 100% geschützt)",
          "Süd (Panorama der Palmenwedel & Marina-Skyline)"
        ],
        threatOrientations: []
      },
      solarExposure: {
        optimalAspect: "Nord (Stetige Meeresbrise, weiches blendfreies Licht)",
        harshAspect: "Süd (Starke Mittagssonne auf den Poolterrassen)",
        coolingEnergyImpact: "Standard-Luxusresort-Distriktsystem",
        solarHeatGainRating: "Hervorragend (Dreifach verglastes Marine-Akustikglas mit UV-Filter)",
        residentTip: "Nordseensuiten bieten ruhige maritime Kühle; Südpenthouses verfügen über private Infinity-Sky-Pools, die durch die Sonne angenehm temperiert werden."
      },
      walkability: {
        score: 52,
        category: "Eingeschränkt fußgängerfreundlich (PKW empfohlen)",
        metroStation: "Atlantis Aquaventure Monorail Station (Anbindung an Tram/Metro)",
        metroDistanceMinutes: 3,
        metroAccessType: "Direkter überdachter Fußweg",
        dailyEssentialsOnFoot: "Erstklassiger Privatstrand, 17 Spitzenrestaurants, Spa und Boutiquen im Resortkomplex; Limousinenservice für das Festland empfohlen."
      }
    },
    fr: {
      viewRadar: {
        riskLevel: "protected",
        status: "Horizon 100% Ouvert et Inconstructible sur la Mer et la Palme",
        assessment: "Situé sur le croissant extérieur de Palm Jumeirah sans aucune terre au large. L'horizon Nord fait face au golfe Persique, le côté Sud embrasse l'ensemble de l'archipel. Toute obstruction est impossible.",
        protectedOrientations: [
          "Nord (Pleine mer du golfe Persique — 100% garanti à perpétuité)",
          "Sud (Panorama complet des frondes de Palm Jumeirah et skyline)"
        ],
        threatOrientations: []
      },
      solarExposure: {
        optimalAspect: "Nord (Brise marine constante et lumière douce sans éblouissement)",
        harshAspect: "Sud (Soleil zénithal sur les terrasses et piscines privées)",
        coolingEnergyImpact: "Système de refroidissement de grand complexe de luxe",
        solarHeatGainRating: "Supérieur (Triple vitrage acoustique marin avec filtres UV)",
        residentTip: "Les suites océan côté Nord profitent d'une fraîcheur marine permanente; les penthouses Sud bénéficient de piscines à débordement naturellement chauffées par le soleil."
      },
      walkability: {
        score: 52,
        category: "Partiellement marchable (véhicule conseillé)",
        metroStation: "Station de monorail Atlantis Aquaventure (liaison Tram/Métro)",
        metroDistanceMinutes: 3,
        metroAccessType: "Passerelle piétonne couverte directe",
        dailyEssentialsOnFoot: "Plage privée d'exception, 17 restaurants de chefs étoilés, spa et boutiques au sein du complexe; chauffeur ou véhicule conseillé pour rejoindre le continent."
      }
    },
    it: {
      viewRadar: {
        riskLevel: "protected",
        status: "Orizzonte Aperto 100% Inostruibile su Mare e Palma",
        assessment: "Sulla mezzaluna esterna di Palm Jumeirah senza terraferma antistante. A nord il Golfo Arabico sconfinato, a sud l'intero arcipelago della Palma e la Marina. Ostruzione fisicamente impossibile.",
        protectedOrientations: [
          "Nord (Golfo Arabico aperto - 100% permanentemente garantito)",
          "Sud (Panorama sulle fronde di Palm Jumeirah e skyline di Marina)"
        ],
        threatOrientations: []
      },
      solarExposure: {
        optimalAspect: "Nord (Brezza marina continua e luce soffusa)",
        harshAspect: "Sud (Sole a picco sulle terrazze e sky pool rivolte alla Palma)",
        coolingEnergyImpact: "Rete di raffreddamento centralizzata da resort di lusso",
        solarHeatGainRating: "Superiore (Triplo vetro acustico marino con protezione UV)",
        residentTip: "Le suite a nord offrono fresco e quiete costante; gli attici a sud hanno piscine a sfioro riscaldate naturalmente dal sole tutto il giorno."
      },
      walkability: {
        score: 52,
        category: "Parzialmente pedonabile (auto consigliata)",
        metroStation: "Stazione Monorotaia Atlantis Aquaventure (collega a Tram/Metro)",
        metroDistanceMinutes: 3,
        metroAccessType: "Percorso pedonale coperto diretto",
        dailyEssentialsOnFoot: "Spiaggia privata esclusiva, 17 ristoranti gourmet, spa e negozi di lusso all'interno del resort; auto con autista consigliata per la terraferma."
      }
    },
    tr: {
      viewRadar: {
        riskLevel: "protected",
        status: "%100 Kapanmaz Açık Deniz ve Palm Ufku",
        assessment: "Palm Jumeirah'ın dış hilalinde, önünde açık denizden başka hiçbir kara parçası bulunmayan konum. Kuzey sonsuz Basra Körfezi'ne, güney ise tüm Palm adasına ve Marina siluetine bakar.",
        protectedOrientations: [
          "Kuzey (Sonsuz açık Basra Körfezi - %100 kalıcı garantili)",
          "Güney (Palm Jumeirah yaprakları ve Dubai Marina silueti)"
        ],
        threatOrientations: []
      },
      solarExposure: {
        optimalAspect: "Kuzey (Sürekli deniz meltemi ve parlamayan yumuşak ışık)",
        harshAspect: "Güney (Palm'a bakan havuzlu teraslarda dik öğle güneşi)",
        coolingEnergyImpact: "Standart Lüks Resort Bölgesel Sistemi",
        solarHeatGainRating: "Üstün (UV filtreli denizcilik sınıfı akustik üçlü cam)",
        residentTip: "Kuzey okyanus süitleri serin ve sakin bir ortam sunar; Güney çatı katlarındaki sonsuzluk havuzları gün boyu güneşle doğal olarak ısınır."
      },
      walkability: {
        score: 52,
        category: "Kısmen Yürünebilir (Araç önerilir)",
        metroStation: "Atlantis Aquaventure Monoray İstasyonu (Tramvay/Metro bağlantılı)",
        metroDistanceMinutes: 3,
        metroAccessType: "Doğrudan Kapalı Yaya Yolu",
        dailyEssentialsOnFoot: "Özel plaj, 17 ünlü şef restoranı, lüks spa ve butikler tesis içindedir; şehir merkezi için araç önerilir."
      }
    },
    hi: {
      viewRadar: {
        riskLevel: "protected",
        status: "100% अबाधित खुला समुद्र और पाम क्षितिज",
        assessment: "पाम जुमेराह के बाहरी क्रिसेंट पर स्थित जहां सामने कोई भूमि नहीं है। उत्तरी क्षितिज अंतहीन अरब खाड़ी का सामना करता है; दक्षिणी पहलू पूरे पाम द्वीपसमूह को देखता है।",
        protectedOrientations: [
          "उत्तर (असीम खुला अरब की खाड़ी - 100% स्थायी रूप से गारंटीकृत)",
          "दक्षिण (पूर्ण पाम जुमेराह पैनोरमा और दुबई मरीना स्काईलाइन)"
        ],
        threatOrientations: []
      },
      solarExposure: {
        optimalAspect: "उत्तर (निरंतर समुद्री हवा और कोमल, चकाचौंध रहित प्रकाश)",
        harshAspect: "दक्षिण (पाम-मुखी स्काई पूल छतों पर दोपहर की तेज धूप)",
        coolingEnergyImpact: "मानक लक्जरी रिज़ॉर्ट जिला प्रणाली",
        solarHeatGainRating: "उत्कृष्ट (यूवी फ़िल्टरिंग के साथ समुद्री ग्रेड ध्वनिक ट्रिपल ग्लेज़िंग)",
        residentTip: "उत्तर मुखी सुइट्स निरंतर शांति और शांत समुद्री परिस्थितियों का अनुभव करते हैं; दक्षिण मुखी पेंटहाउस में निजी स्काई पूल दिन भर की धूप से प्राकृतिक रूप से गर्म होते हैं।"
      },
      walkability: {
        score: 52,
        category: "आंशिक रूप से पैदल सुगम (कार अनुशंसित)",
        metroStation: "अटलांटिस एक्वावेंचर मोनोरेल स्टेशन (ट्राम/मेट्रो से जोड़ता है)",
        metroDistanceMinutes: 3,
        metroAccessType: "सीधा कवर्ड पैदल मार्ग",
        dailyEssentialsOnFoot: "विश्व स्तरीय निजी समुद्र तट, 17 सेलिब्रिटी-शेफ रेस्तरां, स्पा और बुटीक रिज़ॉर्ट के अंदर उपलब्ध हैं।"
      }
    },
    ur: {
      viewRadar: {
        riskLevel: "protected",
        status: "100% بلارکاوٹ کھلا سمندر اور پام افق",
        assessment: "پام جمیرہ کے بیرونی کریسنٹ پر واقع، جس کے سامنے سمندر میں کوئی رکاوٹ نہیں۔ شمالی رخ پر لامتناہی خلیج عرب اور جنوبی رخ پر پام جمیرہ اور مرینا کی پوری اسکائی لائن کا سحر انگیز نظارہ ہے۔",
        protectedOrientations: [
          "شمال (کھلا لامحدود سمندر - 100% مستقل محفوظ)",
          "جنوب (پام جمیرہ کے پتے اور دبئی مرینا کا دلکش منظر)"
        ],
        threatOrientations: []
      },
      solarExposure: {
        optimalAspect: "شمال (مستقل سمندری ہوائیں اور بغیر چمک کے نرم روشنی)",
        harshAspect: "جنوب (پام کی طرف کھلے پول ٹیرسز پر دوپہر کی تیز دھوپ)",
        coolingEnergyImpact: "لگژری ریزورٹ کا خصوصی سینٹرل کولنگ سسٹم",
        solarHeatGainRating: "اعلیٰ ترین (یووی فلٹرز کے ساتھ میرین گریڈ ٹرپل گلیزنگ)",
        residentTip: "شمالی رخ والے اپارٹمنٹس میں خوشگوار سمندری ٹھنڈک رہتی ہے، جبکہ جنوبی پینٹ ہاؤسز کے انفینٹی پولز دھوپ سے قدرتی طور پر گرم رہتے ہیں۔"
      },
      walkability: {
        score: 52,
        category: "کچھ حد تک پیدل رسائی (گاڑی تجویز کی جاتی ہے)",
        metroStation: "اٹلانٹس ایکوا وینچر مونو ریل اسٹیشن (ٹرام اور میٹرو سے منسلک)",
        metroDistanceMinutes: 3,
        metroAccessType: "براہ راست کورڈ پیدل پاتھ وے",
        dailyEssentialsOnFoot: "پرائیویٹ بیچ، 17 عالمی شہرت یافتہ شیف ریسٹورنٹس، سپا اور بوتیک اندر ہی موجود ہیں؛ شہر جانے کے لیے کار تجویز کی جاتی ہے۔"
      }
    }
  }
};

// District View Fallback Data for all 10 languages
export function getLocalizedDistrictViewFallback(
  building: Building,
  lang: LanguageCode,
  labels: { riskProtected: string; riskLow: string; riskModerate: string; riskHigh: string }
): {
  riskLevel: "protected" | "low" | "moderate" | "high";
  status: string;
  assessment: string;
  protectedOrientations: string[];
  threatOrientations: string[];
} {
  const isMegatall = building.heightMeters >= 450;
  const isSupertall = building.heightMeters >= 300 && building.heightMeters < 450;

  if (building.districtSlug === "downtown-dubai") {
    if (isMegatall || building.heightMeters > 350) {
      const assessments: Record<LanguageCode, string> = {
        en: `Standing at an official height of ${building.heightMeters} m, the upper tiers soar clear above Downtown's mid-rise canopy, preserving sovereign views over Burj Khalifa and the Gulf horizon.`,
        ru: `Благодаря высоте ${building.heightMeters} м верхние уровни башни возвышаются над плотным массивом Даунтауна, обеспечивая защищенный 360-градусный обзор на Бурдж-Халифу и Персидский залив.`,
        ar: `بارتفاع رسمي يبلغ ${building.heightMeters} م، تعلو الطوابق العليا فوق الأبراج المتوسطة في داون تاون دبي، مما يحافظ على إطلالات بانورامية سيادية لبرج خليفة وأفق الخليج.`,
        zh: `凭借 ${building.heightMeters} 米的官方物理高度，中高层直插云霄，完全跃过市中心中低密度建筑群，永久俯瞰哈利法塔与海湾天际线。`,
        de: `Mit einer Höhe von ${building.heightMeters} m ragen die oberen Etagen weit über die mittelhohe Bebauung von Downtown hinaus und sichern unverbaubare Blicke auf den Burj Khalifa und den Golf.`,
        fr: `S'élevant à ${building.heightMeters} m, les étages supérieurs dominent Downtown et préservent une vue imprenable sur le Burj Khalifa et le Golfe.`,
        it: `Con un'altezza ufficiale di ${building.heightMeters} m, i livelli superiori svettano sopra il tessuto urbano di Downtown, garantendo viste privilegiate su Burj Khalifa e Golfo.`,
        tr: `${building.heightMeters} metrelik resmi yüksekliği ile üst katlar Downtown kulelerini aşarak Burj Khalifa ve Körfez ufku üzerinde açık manzara sunar.`,
        hi: `${building.heightMeters} मीटर की आधिकारिक ऊंचाई के साथ, ऊपरी स्तर डाउनटाउन के ऊपर उठते हैं, जो बुर्ज खलीफा और खाड़ी के क्षितिज पर उत्कृष्ट दृश्य संरक्षित करते हैं।`,
        ur: `${building.heightMeters} میٹر کی بلندی کے ساتھ، اوپری منزلیں ڈاون ٹاون کی عمارات سے بلند ہو کر برج خلیفہ اور خلیجی افق کا شاندار نظارہ فراہم کرتی ہیں۔`
      };
      const protectedO: Record<LanguageCode, string[]> = {
        en: ["West / North-West (Burj Khalifa & Sea Horizon)", "South (Dubai Canal & Ras Al Khor Sanctuary)"],
        ru: ["Запад / Северо-Запад (Панорама Бурдж-Халифы и залива)", "Юг (Дубайский канал и заповедник Рас-аль-Хор)"],
        ar: ["الغرب / الشمال الغربي (برج خليفة وأفق البحر)", "الجنوب (قناة دبي ومحمية رأس الخور)"],
        zh: ["西向/西北向（哈利法塔与海平线全景）", "南向（迪拜水运运河与拉斯海尔火烈鸟保护区）"],
        de: ["West / Nordwest (Burj Khalifa & Meereshorizont)", "Süd (Dubai-Kanal & Ras Al Khor Schutzgebiet)"],
        fr: ["Ouest / Nord-Ouest (Burj Khalifa & Horizon Marin)", "Sud (Canal de Dubaï & Réserve de Ras Al Khor)"],
        it: ["Ovest / Nord-Ovest (Burj Khalifa e orizzonte marino)", "Sud (Canale di Dubai e Riserva Ras Al Khor)"],
        tr: ["Batı / Kuzeybatı (Burj Khalifa ve Deniz Ufku)", "Güney (Dubai Kanalı ve Ras Al Khor Koruma Alanı)"],
        hi: ["पश्चिम / उत्तर-पश्चिम (बुर्ज खलीफा और समुद्र क्षितिज)", "दक्षिण (दुबई नहर और रस अल खोर अभयारण्य)"],
        ur: ["مغرب / شمال مغرب (برج خلیفہ اور سمندری افق)", "جنوب (دبئی کینال اور راس الخور پناہ گاہ)"]
      };
      const threatO: Record<LanguageCode, string[]> = {
        en: ["East (Internal Downtown mid-rise cluster below level 30)"],
        ru: ["Восток (Внутренние кварталы Даунтауна ниже 30 этажа)"],
        ar: ["الشرق (كثافة داون تاون الداخلية أدنى من الطابق 30)"],
        zh: ["东向（30层以下朝向市中心中密建筑组团）"],
        de: ["Ost (Innerstädtischer Cluster unterhalb von Ebene 30)"],
        fr: ["Est (Cluster intérieur de Downtown sous le niveau 30)"],
        it: ["Est (Cluster interno di Downtown sotto il 30° piano)"],
        tr: ["Doğu (30. katın altındaki Downtown iç kuleleri)"],
        hi: ["पूर्व (30वें स्तर से नीचे डाउनटाउन आंतरिक क्लस्टर)"],
        ur: ["مشرق (منزل 30 سے نیچے ڈاون ٹاون کا اندرونی کلسٹر)"]
      };
      return {
        riskLevel: "protected",
        status: labels.riskProtected,
        assessment: assessments[lang] || assessments.en,
        protectedOrientations: protectedO[lang] || protectedO.en,
        threatOrientations: threatO[lang] || threatO.en
      };
    } else {
      const assessments: Record<LanguageCode, string> = {
        en: "Situated within Downtown's dense urban fabric. Horizon facing open boulevards is protected, but lateral sightlines depend heavily on unit tier selection.",
        ru: "В окружении плотной застройки бульвара Даунтауна. Ракурсы в сторону открытых площадей защищены, однако боковые виды на соседние участки зависят от высоты выбранного этажа.",
        ar: "يقع ضمن النسيج العمراني الكثيف لداون تاون دبي. الإطلالات نحو البوليفارد المفتوح محمية، بينما تعتمد خطوط الرؤية الجانبية على الطابق المختار.",
        zh: "位于迪拜市中心核心密集建筑网格内。朝向城市林荫大道的主采光面受永久保护，但侧翼视线取决于所选户型的具体楼层高度。",
        de: "Eingebettet in das dichte Gefüge von Downtown. Blickachsen zu den Boulevards sind geschützt, seitliche Sichten hängen von der Etagenwahl ab.",
        fr: "Situé au cœur de la densité urbaine de Downtown. La perspective sur le boulevard est préservée, mais les vues latérales dépendent de l'étage.",
        it: "Posizionato nel cuore urbano di Downtown. La vista sul viale è tutelata, mentre le visuali laterali variano in base al piano scelto.",
        tr: "Downtown'ın yoğun kent dokusunda yer alır. Bulvara bakan cepheler korumalıdır, ancak yan açılar seçilen kata bağlıdır.",
        hi: "डाउनटाउन के शहरी क्षेत्र में स्थित। बुलेवार्ड का दृश्य सुरक्षित है, लेकिन पार्श्व दृश्य मंजिल चयन पर निर्भर करते हैं।",
        ur: "ڈاون ٹاون کے مرکزی علاقے میں واقع۔ کھلے بلیوارڈ کا نظارہ محفوظ ہے، جبکہ سائیڈ کا منظر منتخب منزل پر منحصر ہے۔"
      };
      const protectedO: Record<LanguageCode, string[]> = {
        en: ["Boulevard Frontage Aspect"],
        ru: ["Фасад на центральный бульвар"],
        ar: ["واجهة البوليفارد الرئيسية"],
        zh: ["市中心环形林荫大道一线景观面"],
        de: ["Hauptboulevard-Front"],
        fr: ["Façade principale sur le boulevard"],
        it: ["Fronte principale sul viale"],
        tr: ["Bulvar Ön Cephe Görünümü"],
        hi: ["बुलेवार्ड फ्रंटलाइन दृश्य"],
        ur: ["مرکزی بلیوارڈ فرنٹ ویو"]
      };
      const threatO: Record<LanguageCode, string[]> = {
        en: ["Lateral views (Adjacent towers at 60-90m proximity)"],
        ru: ["Боковые ракурсы (соседние высотки на расстоянии 60-90 м)"],
        ar: ["إطلالات جانبية (أبراج مجاورة على بعد 60-90 متراً)"],
        zh: ["侧向视线（60-90米间距内相邻建筑楼座）"],
        de: ["Seitliche Blickachsen (Nachbartürme in 60-90 m Entfernung)"],
        fr: ["Vues latérales (Tours adjacentes à 60-90 m)"],
        it: ["Viste laterali (Torri vicine a 60-90 m di distanza)"],
        tr: ["Yan açılar (60-90 m mesafedeki komşu kuleler)"],
        hi: ["पार्श्व दृश्य (60-90 मीटर निकटता पर आस-पास के टावर)"],
        ur: ["سائیڈ ویوز (60 تا 90 میٹر فاصلے پر قریبی ٹاورز)"]
      };
      return {
        riskLevel: "moderate",
        status: labels.riskModerate,
        assessment: assessments[lang] || assessments.en,
        protectedOrientations: protectedO[lang] || protectedO.en,
        threatOrientations: threatO[lang] || threatO.en
      };
    }
  } else if (building.districtSlug === "dubai-marina") {
    if (building.name.toLowerCase().includes("beach") || building.name.toLowerCase().includes("gate") || isSupertall) {
      const assessments: Record<LanguageCode, string> = {
        en: "Strategic positioning within Dubai Marina guarantees resilient sightlines toward the yacht channel and Palm Jumeirah.",
        ru: "Расположение в первой или второй линии Дубай Марина обеспечивает устойчивый вид на гавань для яхт и остров Пальма Джумейра.",
        ar: "الموقع الاستراتيجي في الصفوف الأولى لدبي مارينا يضمن خطوط رؤية دائمة ومستقرة نحو قناة اليخوت ونخلة جميرا.",
        zh: "地处迪拜游艇港前沿一线/二线战略要位，确保朝向主航道与朱美拉棕榈岛的开阔水景经久不变。",
        de: "Die erstklassige Lage in der Dubai Marina garantiert unverbaubare Sichtachsen zum Yachtkanal und zur Palm Jumeirah.",
        fr: "La situation privilégiée au bord de la marina garantit des perspectives dégagées vers le chenal nautique et Palm Jumeirah.",
        it: "La posizione strategica a Dubai Marina garantisce linee visive stabili verso il canale degli yacht e Palm Jumeirah.",
        tr: "Dubai Marina'daki stratejik konum, yat kanalına ve Palm Jumeirah'a kesintisiz bakış sağlar.",
        hi: "दुबई मरीना में रणनीतिक स्थिति यॉट चैनल और पाम जुमेराह की ओर निरंतर खुला दृश्य सुनिश्चित करती है।",
        ur: "دبئی مرینا میں بہترین لوکیشن یاٹ چینل اور پام جمیرہ کی طرف مستقل شاندار نظارے کی ضمانت دیتی ہے۔"
      };
      const protectedO: Record<LanguageCode, string[]> = {
        en: ["North-West (Palm Jumeirah & Marina Entrance)", "South-West (Yacht basin waterway)"],
        ru: ["Северо-Запад (Пальма Джумейра и вход в Марину)", "Юго-Запад (Водная гладь яхтенного бассейна)"],
        ar: ["الشمال الغربي (نخلة جميرا ومدخل المارينا)", "الجنوب الغربي (قناة حوض اليخوت)"],
        zh: ["西北向（朱美拉棕榈岛与游艇港主出海口）", "西南向（游艇港主泊位内湾阔水）"],
        de: ["Nordwest (Palm Jumeirah & Marina-Eingang)", "Südwest (Yachthafen-Wasserbecken)"],
        fr: ["Nord-Ouest (Palm Jumeirah & Entrée de la Marina)", "Sud-Ouest (Plan d'eau des yachts)"],
        it: ["Nord-Ovest (Palm Jumeirah e ingresso Marina)", "Sud-Ovest (Canale del porto turistico)"],
        tr: ["Kuzeybatı (Palm Jumeirah ve Marina Girişi)", "Güneybatı (Yat havzası su yolu)"],
        hi: ["उत्तर-पश्चिम (पाम जुमेराह और मरीना प्रवेश द्वार)", "दक्षिण-पश्चिम (यॉट बेसिन जलमार्ग)"],
        ur: ["شمال مغرب (پام جمیرہ اور مرینا داخلی راستہ)", "جنوب مغرب (یاٹ بیسن کا خوبصورت پانی)"]
      };
      const threatO: Record<LanguageCode, string[]> = {
        en: ["East (Dense cluster along Sheikh Zayed Road)"],
        ru: ["Восток (Плотная линия башен вдоль Sheikh Zayed Road)"],
        ar: ["الشرق (كثافة الأبراج المحاذية لشارع الشيخ زايد)"],
        zh: ["东向（靠近谢赫扎耶德路的高密摩天塔楼群）"],
        de: ["Ost (Dichter Hochhausgürtel an der Sheikh Zayed Road)"],
        fr: ["Est (Densité le long de Sheikh Zayed Road)"],
        it: ["Est (Fitta cortina lungo Sheikh Zayed Road)"],
        tr: ["Doğu (Sheikh Zayed Road boyunca uzanan yoğun kule hattı)"],
        hi: ["पूर्व (शेख जायद रोड के किनारे सघन टावर क्लस्टर)"],
        ur: ["مشرق (شیخ زاید روڈ پر قریبی اونچے ٹاورز کا جھنڈ)"]
      };
      return {
        riskLevel: "low",
        status: labels.riskLow,
        assessment: assessments[lang] || assessments.en,
        protectedOrientations: protectedO[lang] || protectedO.en,
        threatOrientations: threatO[lang] || threatO.en
      };
    } else {
      const assessments: Record<LanguageCode, string> = {
        en: "Located within Marina's high-density cluster. Units above level 25 are recommended to clear adjacent podiums and maximize water views.",
        ru: "Внутри плотного кластера Марины. Рекомендуются апартаменты выше 25 этажа для гарантированного выхода на водный горизонт.",
        ar: "يقع داخل مجمع الأبراج عالي الكثافة في المارينا. يُنصح بالطوابق فوق 25 لتجاوز مباني البوديوم والاستمتاع بإطلالات مائية كاملة.",
        zh: "位于游艇港高密建筑组团内。强烈建议优选25层以上中高楼层，以完全避开邻近裙楼并实现最佳开阔水景体验。",
        de: "Im dichten Cluster der Marina gelegen. Wohnungen ab Ebene 25 werden empfohlen, um benachbarte Podien zu überragen und Wasserblicke zu sichern.",
        fr: "Situé au sein du cluster dense de la Marina. Les étages au-dessus du niveau 25 sont recommandés pour dégager la vue sur l'eau.",
        it: "Nel denso cluster di Dubai Marina. Si consigliano piani superiori al 25° per superare i podi adiacenti e massimizzare la vista sull'acqua.",
        tr: "Marina'nın yoğun kule bölgesinde yer alır. Komşu podyumları aşmak ve su manzarasını yakalamak için 25. kat üzeri önerilir.",
        hi: "मरीना के घने क्लस्टर के भीतर स्थित। आस-पास के पोडियम से बचने और पानी के दृश्य का आनंद लेने के लिए स्तर 25 से ऊपर की इकाइयों की सिफारिश की जाती है।",
        ur: "مرینا کے پرہجوم کلسٹر میں واقع۔ قریبی پوڈیمز سے اوپر نکلنے اور پانی کا نظارہ حاصل کرنے کے لیے 25ویں منزل سے اوپر اپارٹمنٹ تجویز کیا جاتا ہے۔"
      };
      const protectedO: Record<LanguageCode, string[]> = {
        en: ["Marina Promenade Waterfront Aspect"],
        ru: ["Вид на набережную Марина Променад"],
        ar: ["إطلالة الواجهة المائية لممشى المارينا"],
        zh: ["游艇港亲水滨海长廊一线水景"],
        de: ["Blick auf die Marina-Promenade"],
        fr: ["Perspective sur la promenade de la Marina"],
        it: ["Fronte passeggiata di Dubai Marina"],
        tr: ["Marina Gezinti Yolu Sahil Manzarası"],
        hi: ["मरीना प्रोमेनेड वॉटरफ्रंट दृश्य"],
        ur: ["مرینا واٹر فرنٹ پرومینیڈ کا نظارہ"]
      };
      const threatO: Record<LanguageCode, string[]> = {
        en: ["East/rear facades facing neighboring residential towers"],
        ru: ["Восточные и тыловые фасады на соседние башни"],
        ar: ["الواجهات الشرقية والخلفية المطلة على أبراج سكنية مجاورة"],
        zh: ["东向及后侧立面正对邻近高层住宅楼座"],
        de: ["Östliche und rückwärtige Fassaden blicken auf Nachbartürme"],
        fr: ["Façades arrière et Est face aux résidences voisines"],
        it: ["Facciate posteriori ed orientali verso torri residenziali adiacenti"],
        tr: ["Komşu konut kulelerine bakan doğu/arka cepheler"],
        hi: ["पड़ोसी आवासीय टावरों का सामना करने वाले पूर्वी/पीछे के अग्रभाग"],
        ur: ["مشرقی اور پچھلے فساڈز کا رخ قریبی رہائشی ٹاورز کی طرف"]
      };
      return {
        riskLevel: "moderate",
        status: labels.riskModerate,
        assessment: assessments[lang] || assessments.en,
        protectedOrientations: protectedO[lang] || protectedO.en,
        threatOrientations: threatO[lang] || threatO.en
      };
    }
  } else if (building.districtSlug === "palm-jumeirah") {
    const assessments: Record<LanguageCode, string> = {
      en: "Prime island topography guarantees permanently unblockable panoramic views of the Arabian Gulf or inner frond lagoon. Offshore high-rise construction is strictly prohibited.",
      ru: "Островное расположение на Пальме гарантирует 100% неперекрываемый вид на Персидский залив или внутреннюю лагуну. Строительство новых высоток в море перед фасадом исключено.",
      ar: "الموقع الاستثنائي في جزيرة نخلة جميرا يضمن إطلالات بانورامية محمية بالكامل على الخليج العربي أو اللاغون الداخلي مع حظر تام لأي بناء أمامي في البحر.",
      zh: "朱美拉棕榈岛独特的离岸海岛地理格局，赋予其面向阿拉伯湾与内湾潟湖永久不可阻挡的视野。海上严禁任何高层开发建设。",
      de: "Die exklusive Insellage auf der Palm Jumeirah garantiert dauerhaft unverbaubare Ausblicke auf den Arabischen Golf oder die Lagune.",
      fr: "La topographie insulaire sur Palm Jumeirah garantit des vues imprenables sur le golfe Persique ou le lagon intérieur. Toute construction marine est strictement interdite.",
      it: "La posizione insulare su Palm Jumeirah assicura visuali panoramiche per sempre libere sul Golfo Arabico o sulla laguna interna.",
      tr: "Palm Jumeirah'taki ada konumu, Basra Körfezi veya iç lagüne kalıcı olarak kapanmaz panoramik manzara sağlar.",
      hi: "पाम जुमेराह पर द्वीप की प्रमुख स्थिति अरब की खाड़ी या आंतरिक लैगून के स्थायी रूप से अबाधित दृश्य की गारंटी देती है।",
      ur: "پام جمیرہ کی جزیرہ نما لوکیشن خلیج عرب یا اندرونی لیگون کے 100 فیصد مستقل محفوظ نظارے کی ضامن ہے۔"
    };
    const protectedO: Record<LanguageCode, string[]> = {
      en: ["Open Arabian Gulf (100% Permanently Protected)", "Dubai Mainland Skyline Silhouette"],
      ru: ["Морской горизонт (Персидский залив — навсегда защищен)", "Панорама на материковый скайлайн Дубая"],
      ar: ["مياه الخليج العربي المفتوحة (محمية 100% إلى الأبد)", "أفق البر الرئيسي لمدينة دبي"],
      zh: ["无垠阿拉伯湾海景（100%永久法定保护）", "迪拜陆地大陆摩天天际线剪影"],
      de: ["Offener Arabischer Golf (100% dauerhaft geschützt)", "Skyline-Silhouette des Dubai-Festlands"],
      fr: ["Pleine mer du Golfe (100% protégé en permanence)", "Silhouette urbaine du continent de Dubaï"],
      it: ["Golfo Arabico aperto (100% protetto per sempre)", "Silhouette dello skyline di Dubai"],
      tr: ["Açık Basra Körfezi (%100 Kalıcı Korumalı)", "Dubai Anakara Silueti"],
      hi: ["खुला अरब की खाड़ी (100% स्थायी रूप से सुरक्षित)", "दुबई मेनलैंड स्काईलाइन सिलहूट"],
      ur: ["کھلا خلیج عرب (100 فیصد مستقل محفوظ)", "دبئی مین لینڈ کا خوبصورت اسکائی لائن"]
    };
    return {
      riskLevel: "protected",
      status: labels.riskProtected,
      assessment: assessments[lang] || assessments.en,
      protectedOrientations: protectedO[lang] || protectedO.en,
      threatOrientations: []
    };
  } else {
    // Default district fallback
    const riskLevel = isSupertall ? "low" : "moderate";
    const status = isSupertall ? labels.riskLow : labels.riskModerate;
    const assessments: Record<LanguageCode, string> = {
      en: `Engineered asset of ${building.heightMeters} m in ${building.district}. Street-front orientations along master arterial roads remain protected by municipal zoning bylaws.`,
      ru: `Объект высотой ${building.heightMeters} м в районе ${building.district}. Фасадные ракурсы на главные магистрали и водоемы защищены мастер-планом района.`,
      ar: `برج هندسي بارتفاع ${building.heightMeters} م في ${building.district}. الواجهات الأمامية على الشوارع الرئيسية تظل محمية بموجب المخطط المعتمد.`,
      zh: `位于${building.district}的高标准标杆建筑（高度 ${building.heightMeters} 米）。沿主干道及开阔水岸的朝向受市政法规严格保护。`,
      de: `Architekturprojekt mit ${building.heightMeters} m in ${building.district}. Straßenseitige Ausrichtungen an Hauptverkehrsachsen sind planungsrechtlich geschützt.`,
      fr: `Projet architectural de ${building.heightMeters} m situé à ${building.district}. Les orientations sur les axes majeurs restent protégées par le plan d'urbanisme.`,
      it: `Immobile prestigioso di ${building.heightMeters} m a ${building.district}. I fronti sulle arterie principali sono protetti dalle norme urbanistiche.`,
      tr: `${building.district} bölgesinde ${building.heightMeters} m yüksekliğindeki yapı. Ana caddelere bakan cepheler imar planı ile korunmaktadır.`,
      hi: `${building.district} में ${building.heightMeters} मीटर की ऊंचाई वाला टॉवर। मुख्य सड़कों के किनारे के अग्रभाग नगर नियोजन द्वारा सुरक्षित हैं।`,
      ur: `${building.district} میں ${building.heightMeters} میٹر اونچا پروجیکٹ۔ مرکزی شاہراہوں پر کھلنے والے رخ قانونی طور پر محفوظ ہیں۔`
    };
    const protectedO: Record<LanguageCode, string[]> = {
      en: ["Master Boulevard Frontline Aspect"],
      ru: ["Фронтальный обзор вдоль главной артерии района"],
      ar: ["الواجهة الأمامية للشارع الرئيسي في المنطقة"],
      zh: ["区域核心主干道一线开阔朝向"],
      de: ["Hauptboulevard-Ausrichtung"],
      fr: ["Vue frontale sur le grand boulevard"],
      it: ["Affaccio principale sul viale maestro"],
      tr: ["Ana Bulvar Ön Cephe Görünümü"],
      hi: ["मास्टर बुलेवार्ड फ्रंटलाइन दृश्य"],
      ur: ["علاقے کی مرکزی شاہراہ کا سامنے والا منظر"]
    };
    const threatO: Record<LanguageCode, string[]> = {
      en: ["Internal secondary plots under district phased development"],
      ru: ["Внутренние межквартальные участки будущей застройки"],
      ar: ["قطع أراضٍ داخلية قيد التطوير المرحلي"],
      zh: ["片区二期规划中的次级内街待建地块"],
      de: ["Innere Baugrundstücke künftiger Entwicklungsphasen"],
      fr: ["Parcelles secondaires intérieures en cours de phasage"],
      it: ["Lotti secondari interni in sviluppo futuro"],
      tr: ["Bölgesel aşamalı gelişim kapsamındaki iç parseller"],
      hi: ["जिला चरणबद्ध विकास के तहत आंतरिक माध्यमिक भूखंड"],
      ur: ["مستقبل کے تعمیراتی مراحل کے اندرونی پلاٹس"]
    };
    return {
      riskLevel,
      status,
      assessment: assessments[lang] || assessments.en,
      protectedOrientations: protectedO[lang] || protectedO.en,
      threatOrientations: threatO[lang] || threatO.en
    };
  }
}

// Fallback Sun & Thermal Exposure for all 10 languages
export function getLocalizedSolarExposureFallback(
  building: Building,
  lang: LanguageCode
): SunHeatExposure {
  const isChillerFree = building.operatingSpecs?.chillerBilling === "Chiller-Free" ||
    building.operatingSpecs?.chillerBilling?.toLowerCase().includes("free");

  const coolingImpacts: Record<LanguageCode, { free: string; metered: string }> = {
    en: { free: "Low (Chiller-Free: AC cooling included in service charge)", metered: "Standard (Consumption & capacity tariff applies)" },
    ru: { free: "Низкое (Chiller-Free: кондиционирование включено в сбор)", metered: "Стандартное (Абонентская плата Empower/DEWA)" },
    ar: { free: "منخفض (شامل رسوم التبريد ضمن رسوم الصيانة)", metered: "قياسي (تطبق تعرفة الاستهلاك وسعة التبريد)" },
    zh: { free: "低（免冷气费政策：空调制冷全包在物业费中）", metered: "标准（按用量分摊计费及基础容量费）" },
    de: { free: "Niedrig (Chiller-Free: Kälte in Nebenkosten enthalten)", metered: "Standard (Kapazitäts- und Verbrauchstarif)" },
    fr: { free: "Faible (Climatisation incluse dans les charges de base)", metered: "Standard (Tarif de puissance et consommation)" },
    it: { free: "Basso (Aria condizionata inclusa nelle spese condominiali)", metered: "Standard (Tariffa a consumo e potenza)" },
    tr: { free: "Düşük (Soğutma aidata dahildir)", metered: "Standart (Tüketim ve kapasite tarifesi geçerlidir)" },
    hi: { free: "कम (कूलिंग सेवा शुल्क में शामिल है)", metered: "मानक (खपत और क्षमता शुल्क लागू)" },
    ur: { free: "کم (کولنگ کے اخراجات سروس چارجز میں شامل ہیں)", metered: "معیاری (میٹر کھپت اور طے شدہ ٹیرف لاگو ہوتا ہے)" }
  };

  const optimalAspects: Record<LanguageCode, string> = {
    en: "North-East (Gentle morning sunrise, minimal thermal wall soak)",
    ru: "Северо-Восток (Мягкое утреннее солнце, минимальный нагрев стен)",
    ar: "الشمال الشرقي (شروق صباحي لطيف، وأقل حمل حراري على الجدران)",
    zh: "东北朝向（柔和晨光沐浴，外立面墙体全天极少蓄热）",
    de: "Nordost (Sanfte Morgensonne, minimale thermische Belastung)",
    fr: "Nord-Est (Doux soleil du matin, accumulation thermique minimale)",
    it: "Nord-Est (Sole mattutino mite, minimo accumulo termico)",
    tr: "Kuzeydoğu (Yumuşak sabah güneşi, minimum duvar ısınması)",
    hi: "उत्तर-पूर्व (सुबह का कोमल सूर्योदय, न्यूनतम थर्मल गर्मी)",
    ur: "شمال مشرق (صبح کا نرم سورج، دیواروں پر تپش کا کم ترین بوجھ)"
  };

  const harshAspects: Record<LanguageCode, string> = {
    en: "South-West (Intense desert afternoon solar radiation 14:00–18:00)",
    ru: "Юго-Запад (Беспощадное пустынное солнце с 14:00 до 18:00)",
    ar: "الجنوب الغربي (إشعاع شمسي صحراوي شديد من 14:00 إلى 18:00)",
    zh: "西南朝向（午后14:00–18:00强烈的沙漠高温西晒烘烤）",
    de: "Südwest (Intensive Wüstensonne von 14:00 bis 18:00 Uhr)",
    fr: "Sud-Ouest (Rayonnement solaire désertique intense de 14h00 à 18h00)",
    it: "Sud-Ovest (Forte radiazione solare pomeridiana 14:00–18:00)",
    tr: "Güneybatı (14:00–18:00 arası şiddetli çöl öğleden sonra güneşi)",
    hi: "दक्षिण-पश्चिम (14:00–18:00 के दौरान तीव्र दोपहर का सौर विकिरण)",
    ur: "جنوب مغرب (دوپہر 2 سے شام 6 بجے تک تیز صحرائی دھوپ)"
  };

  const glazingRatings: Record<LanguageCode, string> = {
    en: "High (Double Acoustic Low-E Glazing)",
    ru: "Высокий (Двойной стеклопакет с Low-E напылением)",
    ar: "مرتفع (زجاج مزدوج عازل للصوت ومنخفض الانبعاثية)",
    zh: "高级（双层中空隔音Low-E高阻隔节能镀膜）",
    de: "Hoch (Doppelt verglastes Low-E-Akustikglas)",
    fr: "Élevé (Double vitrage acoustique Low-E)",
    it: "Alto (Doppio vetro acustico Low-E)",
    tr: "Yüksek (Çift Akustik Low-E Cam)",
    hi: "उच्च (डबल ध्वनिक लो-ई ग्लेज़िंग)",
    ur: "اعلیٰ (ڈبل ایکوسٹک لو ای گلیزنگ)"
  };

  const residentTips: Record<LanguageCode, string> = {
    en: "East-facing residences reduce AC power draw by 25–30% in peak summer. West-facing units benefit greatly from automated thermal blackout shading.",
    ru: "Квартиры с ориентацией на восток требуют на 25–30% меньше мощности охлаждения летом. Для западных окон рекомендуется установка плотных термоштор.",
    ar: "الوحدات المطلة شرقاً توفر 25-30% من استهلاك التبريد صيفاً. بينما تستفيد الوحدات الغربية كثيراً من الستائر العازلة الذكية.",
    zh: "东向户型在盛夏盛季可降低空调能耗达 25–30%；西向户型则强烈建议加装自动化防晒隔热遮阳帘。",
    de: "Ost-Wohnungen sparen im Hochsommer 25–30% Kühlenergie. Westlagen profitieren stark von automatisierten Thermorollos.",
    fr: "Les logements à l'Est réduisent la climatisation de 25 à 30% en été. Les unités à l'Ouest nécessitent des stores thermiques automatisés.",
    it: "Le residenze a est riducono i consumi di condizionamento del 25-30% in estate. A ovest sono raccomandate tende termiche oscuranti.",
    tr: "Doğu cepheli daireler yazın klima tüketimini %25–30 azaltır. Batı cepheler için otomatik termal perdeler şiddetle önerilir.",
    hi: "पूर्व मुखी आवास गर्मियों में एसी की बिजली की खपत को 25–30% कम करते हैं। पश्चिम मुखी इकाइयों में थर्मल पर्दे बहुत उपयोगी होते हैं।",
    ur: "مشرق کی طرف کے اپارٹمنٹس گرمیوں میں اے سی کی 25 تا 30 فیصد بجلی بچاتے ہیں۔ مغربی رخ کے لیے تھرمل پردے ضروری ہیں۔"
  };

  const glazingSpec = building.facade?.shgcSolarCoefficient
    ? `${building.facade.glazingType} (SHGC ${building.facade.shgcSolarCoefficient})`
    : (glazingRatings[lang] || glazingRatings.en);

  const coolingText = isChillerFree
    ? (coolingImpacts[lang]?.free || coolingImpacts.en.free)
    : (coolingImpacts[lang]?.metered || coolingImpacts.en.metered);

  return {
    optimalAspect: optimalAspects[lang] || optimalAspects.en,
    harshAspect: harshAspects[lang] || harshAspects.en,
    coolingEnergyImpact: coolingText,
    solarHeatGainRating: glazingSpec,
    residentTip: residentTips[lang] || residentTips.en
  };
}

// Fallback Walkability Data for all 10 languages
export function getLocalizedWalkabilityFallback(
  building: Building,
  lang: LanguageCode
): WalkabilityIndex {
  let walkScore = 75;
  let metroStation = "Dubai Metro Red Line";
  let metroMinutes = 7;
  let metroAccessTypeKey = "Shaded Boulevard Walk";

  const dailyEssentialsMap: Record<string, Record<LanguageCode, string>> = {
    "downtown-dubai": {
      en: "Direct indoor connection to Dubai Mall, Waitrose, and boulevard dining without facing summer heat.",
      ru: "Прямой доступ в Dubai Mall, супермаркет Waitrose и бульвар Downtown без необходимости выходить на жару.",
      ar: "اتصال داخلي مباشر بدبي مول وسوبرماركت ويتروز ومطاعم البوليفارد دون التعرض لحرارة الصيف.",
      zh: "全天候恒温通道直达迪拜商场（Dubai Mall）、Waitrose超市及环形林荫大道高端美食街区。",
      de: "Direkter klimatisierter Zugang zur Dubai Mall, Waitrose und Restaurants ohne Sommerhitze.",
      fr: "Liaison directe climatisée avec le Dubai Mall, Waitrose et les restaurants du boulevard.",
      it: "Accesso diretto climatizzato al Dubai Mall, Waitrose e ristoranti senza affrontare il caldo estivo.",
      tr: "Yaz sıcağına maruz kalmadan Dubai Mall, Waitrose ve bulvar restoranlarına doğrudan kapalı bağlantı.",
      hi: "दुबई मॉल, वेटरोज़ और बुलेवार्ड डाइनिंग से सीधा वातानुकूलित इनडोर कनेक्शन।",
      ur: "دبئی مال، ویٹروز اور بلیوارڈ ریسٹورنٹس تک بغیر گرمی میں نکلے براہ راست انڈور رسائی۔"
    },
    "dubai-marina": {
      en: "Direct access to Marina Walk promenade, 24/7 Carrefour/Spinneys, and JBR beach within easy walking distance.",
      ru: "Набережная Marina Walk, круглосуточные супермаркеты Carrefour/Spinneys и пляж JBR в пешей доступности.",
      ar: "وصول مباشر لممشى المارينا وسوبرماركت كارفور/سبينيس 24/7 وشاطئ جي بي آر سيراً على الأقدام.",
      zh: "直通Marina Walk游艇长廊、24小时营业家乐福/Spinneys超市，JBR海滩短途步行即达。",
      de: "Direkter Zugang zur Marina Walk Promenade, 24/7 Carrefour/Spinneys und JBR Beach zu Fuß.",
      fr: "Accès direct à la promenade Marina Walk, Carrefour/Spinneys 24h/24 et plage de JBR à pied.",
      it: "Accesso diretto a Marina Walk, supermercati Carrefour/Spinneys 24/7 e spiaggia di JBR a piedi.",
      tr: "Marina Walk kordonuna, 24 saat açık Carrefour/Spinneys ve JBR plajına yürüme mesafesinde.",
      hi: "मरीना वॉक प्रोमेनेड, 24/7 कैरेफोर/स्पिनिज़ और जेबीआर बीच तक आसान पैदल दूरी।",
      ur: "مرینا واک، 24 گھنٹے کھلے سپر مارکیٹس اور جے بی آر بیچ تک مختصر پیدل رسائی۔"
    },
    "difc": {
      en: "Covered Gate Avenue pedestrian spine, Michelin-starred dining, and corporate amenities within 2–3 min walk.",
      ru: "Крытая арт-галерея Gate Avenue, рестораны гида Michelin и коворкинги в 2–3 минутах пешком.",
      ar: "ممشى غيت أفينيو المغطى، مطاعم حائزة على نجمة ميشلان، وخدمات الأعمال خلال 2-3 دقائق سيراً.",
      zh: "室内连廊直达Gate Avenue艺术商业长廊、米其林星级餐厅群及高端商务配套（步行2-3分钟）。",
      de: "Überdachte Gate Avenue Flaniermeile, Michelin-Restaurants und Business-Center in 2–3 Min.",
      fr: "Galerie piétonne couverte Gate Avenue, tables étoilées Michelin et services d'affaires à 2–3 min.",
      it: "Galleria pedonale coperta di Gate Avenue, ristoranti Michelin e servizi business a 2–3 minuti.",
      tr: "Kapalı Gate Avenue yaya caddesi, Michelin yıldızlı restoranlar ve iş merkezleri 2–3 dakika mesafede.",
      hi: "कवर्ड गेट एवेन्यू पैदल मार्ग, मिशेलिन रेस्तरां और कॉर्पोरेट सुविधाएं 2-3 मिनट की पैदल दूरी पर।",
      ur: "کورڈ گیٹ ایونیو پاتھ وے، مشیلن ریسٹورنٹس اور کاروباری سہولیات 2 سے 3 منٹ کے فاصلے پر۔"
    },
    "palm-jumeirah": {
      en: "Private beach, resident dining, and gourmet deli in podium; personal vehicle or taxi recommended for mainland trips.",
      ru: "Частный пляж, клубный ресторан и мини-маркет в стилобате; для поездок в город рекомендуется авто или такси.",
      ar: "شاطئ خاص ومطاعم فخمة في المبنى؛ يُنصح بسيارة خاصة أو أجرة للتنقل إلى المدينة.",
      zh: "配设私属沙滩、住户专属海景餐厅与裙楼精品超市；往返迪拜内陆市区建议自驾或搭乘专车。",
      de: "Privatstrand, Club-Restaurant und Feinkost im Podium; PKW/Taxi für Fahrten zum Festland empfohlen.",
      fr: "Plage privée, restaurant et épicerie fine au podium; voiture ou taxi conseillé pour le continent.",
      it: "Spiaggia privata, ristorazione e minimarket nel podio; auto o taxi consigliati per la città.",
      tr: "Özel plaj, restoran ve şarküteri podyumda; şehir merkezi için araç veya taksi önerilir.",
      hi: "निजी समुद्र तट, क्लब रेस्तरां और पोडियम में डेली; शहर की यात्राओं के लिए कार अनुशंसित।",
      ur: "پرائیویٹ بیچ اور کلب ریسٹورنٹ عمارت کے اندر؛ شہر جانے کے لیے کار یا ٹیکسی تجویز کی جاتی ہے۔"
    },
    "business-bay": {
      en: "Dubai Canal promenade, supermarkets, and waterfront wellness clubs within walking reach.",
      ru: "Набережная Dubai Canal, сетевые супермаркеты и фитнес-центры в шаговой доступности.",
      ar: "ممشى قناة دبي المائية ومتاجر التجزئة والأندية الصحية على بعد مسافة سير قصيرة.",
      zh: "直面迪拜水运运河滨水慢跑长廊，生活超市及高端滨水健身会所均在惬意步行圈内。",
      de: "Dubai-Kanal-Promenade, Supermärkte und Wellnessclubs bequem zu Fuß erreichbar.",
      fr: "Promenade du canal de Dubaï, supermarchés et clubs de bien-être accessibles à pied.",
      it: "Passeggiata del Canale di Dubai, supermercati e centri benessere raggiungibili a piedi.",
      tr: "Dubai Kanalı kordonu, süpermarketler ve sağlıklı yaşam kulüpleri yürüme mesafesinde.",
      hi: "दुबई नहर प्रोमेनेड, सुपरमार्केट और वेलनेस क्लब आसान पैदल दूरी के भीतर।",
      ur: "دبئی کینال پرومینیڈ، گروسری اور فٹنس کلبز چند منٹ کے پیدل فاصلے پر۔"
    },
    default: {
      en: "Supermarket, pharmacy, and cafes located within 3–5 min walk.",
      ru: "Супермаркет, аптека и рестораны в пределах 3–5 минут пешком.",
      ar: "سوبرماركت وصيدلية ومقاهٍ متوفرة خلال 3-5 دقائق سيراً على الأقدام.",
      zh: "生活超市、便民药房及精品咖啡馆均在 3–5 分钟步行范围之内。",
      de: "Supermarkt, Apotheke und Cafés in 3–5 Minuten zu Fuß erreichbar.",
      fr: "Supermarché, pharmacie et cafés situés à 3–5 minutes à pied.",
      it: "Supermercato, farmacia e bar situati entro 3–5 minuti a piedi.",
      tr: "Süpermarket, eczane ve kafeler 3–5 dakikalık yürüme mesafesinde.",
      hi: "सुपरमार्केट, फार्मेसी और कैफे 3-5 मिनट की पैदल दूरी पर स्थित हैं।",
      ur: "سپر مارکیٹ، فارمیسی اور کیفے 3 سے 5 منٹ کے پیدل فاصلے پر دستیاب ہیں۔"
    }
  };

  if (building.districtSlug === "downtown-dubai") {
    walkScore = 92;
    metroStation = "Burj Khalifa / Dubai Mall Metro Station";
    metroMinutes = 5;
    metroAccessTypeKey = "Direct Air-Conditioned Travellator Tunnel";
  } else if (building.districtSlug === "dubai-marina") {
    walkScore = 85;
    metroStation = "Sobha Realty / DMCC Metro & Marina Tram";
    metroMinutes = 4;
    metroAccessTypeKey = "Shaded Boulevard Walk";
  } else if (building.districtSlug === "difc") {
    walkScore = 90;
    metroStation = "Financial Centre / Emirates Towers Metro Station";
    metroMinutes = 4;
    metroAccessTypeKey = "Direct Covered Walkway";
  } else if (building.districtSlug === "palm-jumeirah") {
    walkScore = 50;
    metroStation = "Palm Jumeirah Monorail Station";
    metroMinutes = 6;
    metroAccessTypeKey = "Direct Covered Walkway";
  } else if (building.districtSlug === "business-bay") {
    walkScore = 74;
    metroStation = "Business Bay Metro Station";
    metroMinutes = 8;
    metroAccessTypeKey = "Shaded Boulevard Walk";
  } else {
    walkScore = 65;
    metroMinutes = 10;
    metroAccessTypeKey = "Open Street Walk";
  }

  const categoryKey =
    walkScore >= 90
      ? "Walker's Paradise"
      : walkScore >= 70
      ? "Very Walkable"
      : walkScore >= 50
      ? "Somewhat Walkable"
      : "Car-Dependent";

  const localizedCategory = (WALKABILITY_CATEGORIES_I18N[lang] && WALKABILITY_CATEGORIES_I18N[lang][categoryKey]) || categoryKey;
  const localizedAccess = (METRO_ACCESS_TYPES_I18N[lang] && METRO_ACCESS_TYPES_I18N[lang][metroAccessTypeKey]) || metroAccessTypeKey;
  const districtDict = dailyEssentialsMap[building.districtSlug] || dailyEssentialsMap.default;
  const localizedEssentials = districtDict[lang] || districtDict.en;

  return {
    score: walkScore,
    category: localizedCategory as WalkabilityIndex["category"],
    metroStation,
    metroDistanceMinutes: metroMinutes,
    metroAccessType: localizedAccess as WalkabilityIndex["metroAccessType"],
    dailyEssentialsOnFoot: localizedEssentials
  };
}
