import { BuildingAuditReview } from "@/data/buildings";
import { LanguageCode } from "@/i18n/languages";

export interface TowerCustomAuditTranslations {
  [towerId: string]: {
    [lang in LanguageCode]?: BuildingAuditReview;
  };
}

export const CUSTOM_TOWER_AUDITS: TowerCustomAuditTranslations = {
  "burj-khalifa": {
    en: {
      honestVerdict: "Burj Khalifa remains the world's most recognizable trophy address, offering unmatched global prestige and sovereign exit liquidity. However, from a pure rental yield perspective, it is weighed down by Dubai's highest service charges (~55.8 AED/sq.ft) and mandatory sky lobby elevator transfers for upper residences.",
      strengths: [
        "Unrivaled global brand power ensuring instantaneous liquidity and UHNW prestige.",
        "Buttressed core engineering virtually eliminates perceptible high-altitude sway during Gulf storms.",
        "Direct private pedestrian tunnel connectivity into Dubai Mall and Armani Hotel amenities."
      ],
      pitfallsAndWeaknesses: [
        "Extreme annual service charges (55.8 AED/sq.ft) dilute net rental yields to ~4.8% - 5.5%.",
        "Residents on levels 44-75 and 77-108 must transfer at sky lobby interchanges, adding transit time.",
        "Window cleaning cycle takes up to 90-120 days, meaning exterior glazing can accumulate sand film between passes.",
        "Downtown Dubai New Year's Eve and weekend boulevard traffic creates significant road gridlock."
      ],
      airbnbHolidayHomesPolicy: "Restricted by HOA: Short-term holiday lets permitted only through licensed Armani or specialized boutique operators, subject to strict building security vetting.",
      guestParkingReality: "Valet service via Armani Hotel entrance; limited dedicated visitor self-parking bays.",
      soundproofingRating: "Excellent (STC 54 dB dual decoupled masonry walls; virtually silent above level 40).",
      elevatorPeakWaitReality: "30-55 sec at ground express shuttles; sky lobby local lift transfers add 1-2 min during 8:30-9:30 AM.",
      hiddenOperatingCosts: "High Empower capacity demand fees (~2,500-4,000 AED/year base charge) payable regardless of AC usage."
    },
    ru: {
      honestVerdict: "Бурдж-Халифа остается самым узнаваемым трофейным адресом планеты с непревзойденным престижем и высочайшей ликвидностью перепродажи. Однако с точки зрения арендной доходности объект отягощен максимальными сервисными сборами в Дубае (~55.8 AED/кв. фут) и обязательными пересадками на лифтовых скай-лобби для верхних этажей.",
      strengths: [
        "Абсолютная узнаваемость глобального бренда, гарантирующая мгновенную ликвидность среди ультра-богатых покупателей.",
        "Уникальное трехлучевое ядро (buttressed core) полностью гасит колебания башни при ветровых бурях Персидского залива.",
        "Прямой приватный пешеходный тоннель в торгово-развлекательный центр Dubai Mall и сервисы Armani Hotel."
      ],
      pitfallsAndWeaknesses: [
        "Рекордные сервисные сборы (55.8 AED/кв. фут) снижают чистую арендную доходность до 4.8% - 5.5% годовых.",
        "Жителям этажей 44-75 и 77-108 необходимо делать пересадку на лифтовых узлах скай-лобби, что увеличивает время подъема.",
        "Полный цикл мойки фасада занимает 90-120 дней, поэтому внешнее остекление может покрываться песчаным налетом между проходами люлек.",
        "В дни новогодних праздников и по выходным трафик на бульваре Даунтауна парализуется многочасовыми пробками."
      ],
      airbnbHolidayHomesPolicy: "Ограничено ТСЖ: посуточная аренда разрешена только через сертифицированных операторов Armani или бутик-агентства с проверкой службы безопасности.",
      guestParkingReality: "Валет-паркинг через вход отеля Armani; количество бесплатных гостевых мест строго ограничено.",
      soundproofingRating: "Превосходная (STC 54 дБ, двойные виброразвязанные стены; абсолютная тишина выше 40-го этажа).",
      elevatorPeakWaitReality: "30-55 сек на экспресс-шаттлах; пересадка на скай-лобби добавляет 1-2 мин в утренний пик (8:30-9:30).",
      hiddenOperatingCosts: "Высокая абонентская плата за мощность охлаждения Empower (~2,500-4,000 AED/год) начисляется вне зависимости от расхода холода."
    },
    ar: {
      honestVerdict: "يظل برج خليفة العنوان الأكثر شهرة في العالم، حيث يقدم هيبة عالمية لا تضاهى وسيولة تخارج استثنائية. ومع ذلك، من منظور العائد الصافي، يتأثر المبنى بأعلى رسوم خدمات في دبي (~55.8 درهم/قدم²) والتحويلات الإلزامية عبر بهو السماء (Sky Lobby) للطوابق العليا.",
      strengths: [
        "قوة علامة تجارية عالمية منقطعة النظير تضمن سيولة بيع فورية ومكانة مرموقة للغاية.",
        "هندسة النواة المدعمة ثلاثية المحاور تلغي تماماً أي اهتزازات محسوسة أثناء عواصف الخليج.",
        "نفق مشاة خاص ومباشر يصل البناية بـ دبي مول ومرافق فندق أرماني."
      ],
      pitfallsAndWeaknesses: [
        "رسوم الخدمات السنوية الباهظة (55.8 درهم/قدم²) تخفض صافي العائد الإيجاري إلى ما بين 4.8% و 5.5%.",
        "يتعين على قاطني الطوابق 44-75 و 77-108 التبديل بين المصاعد عند بهو السماء، مما يضيف وقتاً للرحلة.",
        "تستغرق دورة تنظيف الواجهات الزجاجية الخارجية 90-120 يوماً، مما يسبب تراكم طبقة غبار رملية بين الدورات.",
        "تتسبب احتفالات رأس السنة وعطلات نهاية الأسبوع في داون تاون دبي باختناقات مرورية حادة على البوليفارد."
      ],
      airbnbHolidayHomesPolicy: "مقيد من اتحاد الملاك: يُسمح بالتأجير قصير الأجل فقط من خلال مشغلي أرماني المعتمدين مع تدقيق أمني مشدد.",
      guestParkingReality: "خدمة صف السيارات (فاليه) عبر مدخل فندق أرماني، مع مواقف ذاتية محدودة جداً للزوار.",
      soundproofingRating: "ممتاز (STC 54 ديسيبل بجدران مزدوجة مفصولة؛ هدوء شبه مطلق فوق الطابق الأربعين).",
      elevatorPeakWaitReality: "30-55 ثانية في المصاعد المكوكية السريعة؛ والتبديل في بهو السماء يضيف دقيقة إلى دقيقتين في الذروة الصباحية.",
      hiddenOperatingCosts: "رسوم سعة التبريد لشركة إمباور مرتفعة (2,500-4,000 درهم سنوياً كرسوم أساسية) تدفع بشكل إلزامي."
    },
    zh: {
      honestVerdict: "哈利法塔（Burj Khalifa）依然是全球最负盛名的地标物业，具备卓越的国际声誉与无与伦比的高端退出流动性。然而从纯租金收益角度看，高达 55.8 AED/平方英尺的迪拜最高物业费以及中高层住户必须在空中大堂换乘电梯的要求，在一定程度上压缩了净收益率与日常便捷度。",
      strengths: [
        "无可匹敌的全球顶级品牌号召力，保障超高净值买家群体的即时交易流动性。",
        "独特的支撑核心筒工程架构（Buttressed Core），在强季风与海湾风暴中几乎完全消除了高空晃动体感。",
        "配备直通迪拜商场（Dubai Mall）及阿玛尼酒店奢华配套的私属全天候冷气地下连廊。"
      ],
      pitfallsAndWeaknesses: [
        "高昂的年度物业费（55.8 AED/平方英尺）将实际净租金回报率摊薄至约 4.8% - 5.5%。",
        "44-75 层及 77-108 层的住户必须在空中换乘大堂换梯，高峰期增加了垂直出行耗时。",
        "整栋大楼外立面清洗周期长达 90-120 天，两轮高空作业间隙外立面玻璃容易积附沙漠浮尘。",
        "市中心每逢跨年夜、重大节庆及周末晚间，环形林荫大道容易出现严重交通拥堵。"
      ],
      airbnbHolidayHomesPolicy: "业主委员会严格管制：仅允许通过阿玛尼官方指定或特许精品管理商运营短租度假屋，且须经严密安保背景审查。",
      guestParkingReality: "主要通过阿玛尼酒店入口提供代客泊车（Valet）服务；住户访客自主停车位极其有限。",
      soundproofingRating: "极佳（STC 54 分贝双层声学解耦墙体；40层以上室内完全静谧）。",
      elevatorPeakWaitReality: "首层高速穿梭电梯候梯 30-55 秒；早高峰（8:30-9:30）空中大堂换乘需额外耗时 1-2 分钟。",
      hiddenOperatingCosts: "高额的 Empower 集中供冷基础容量维护费（每年约 2,500-4,000 迪拉姆固定支出），与实际用电量脱钩。"
    },
    de: {
      honestVerdict: "Der Burj Khalifa bleibt die weltweit renommierteste Trophy-Adresse mit unübertroffenem globalem Prestige und erstklassiger Wiederverkaufsliquidität. Aus reiner Mietrenditeperspektive wird die Immobilie jedoch durch die höchsten Servicegebühren Dubais (~55,8 AED/sq.ft) und obligatorische Sky-Lobby-Aufzugwechsel belastet.",
      strengths: [
        "Unerreichte globale Strahlkraft für unmittelbare Liquidität bei Ultra-High-Net-Worth-Käufern.",
        "Strebepfeiler-Kernstruktur (Buttressed Core) eliminiert spürbare Schwankungen bei Stürmen.",
        "Direkter privater Fußgängertunnel zur Dubai Mall und den Annehmlichkeiten des Armani Hotels."
      ],
      pitfallsAndWeaknesses: [
        "Extreme Servicegebühren (55,8 AED/sq.ft) reduzieren die Netto-Mietrendite auf ca. 4,8% - 5,5%.",
        "Bewohner der Etagen 44-75 und 77-108 müssen an Sky-Lobbies umsteigen, was Transferzeit kostet.",
        "Der Fensterreinigungszyklus dauert 90-120 Tage; Scheiben können zwischen den Durchgängen Sand ansetzen.",
        "Silvester und Wochenenden führen auf dem Downtown Boulevard zu erheblichen Verkehrsstaus."
      ],
      airbnbHolidayHomesPolicy: "Eingeschränkt durch HOA: Kurzzeitvermietung nur über lizenzierte Armani- oder Boutique-Betreiber mit strenger Sicherheitsprüfung gestattet.",
      guestParkingReality: "Valet-Service über den Eingang des Armani Hotels; begrenzte Besucher-Selbstparker-Plätze.",
      soundproofingRating: "Hervorragend (STC 54 dB, schallentkoppelte Doppelwände; oberhalb Stockwerk 40 nahezu lautlos).",
      elevatorPeakWaitReality: "30-55 Sek. an Express-Shuttles; Sky-Lobby-Umstieg addiert morgens (8:30-9:30) 1-2 Min.",
      hiddenOperatingCosts: "Hohe Empower-Bereitstellungsgebühren (~2.500-4.000 AED/Jahr feste Grundgebühr) unabhängig vom tatsächlichen Verbrauch."
    },
    fr: {
      honestVerdict: "Le Burj Khalifa demeure l'adresse la plus emblématique au monde, conférant un prestige planétaire inégalé et une excellente liquidité patrimoniale. Toutefois, en termes de rendement locatif pur, il est pénalisé par les charges de copropriété les plus élevées de Dubaï (~55,8 AED/pi²) et des transferts d'ascenseur obligatoires via sky lobby.",
      strengths: [
        "Notoriété mondiale absolue garantissant une liquidité immédiate auprès des acquéreurs fortunés.",
        "Ingénierie du noyau à contreforts éliminant pratiquement tout balancement perceptible lors des tempêtes.",
        "Tunnel piétonnier climatisé privé reliant directement le Dubai Mall et les services de l'Armani Hotel."
      ],
      pitfallsAndWeaknesses: [
        "Charges annuelles très élevées (55,8 AED/pi²), compressant le rendement net entre 4,8% et 5,5%.",
        "Les résidents des étages 44-75 et 77-108 doivent changer d'ascenseur au sky lobby, allongeant le trajet.",
        "Cycle de nettoyage des vitres de 90 à 120 jours ; le vitrage extérieur peut accumuler du sable entre deux passages.",
        "Circulation saturée sur le boulevard de Downtown lors du réveillon et des week-ends."
      ],
      airbnbHolidayHomesPolicy: "Restreint par la copropriété : location saisonnière réservée aux opérateurs agréés Armani sous contrôle de sécurité rigoureux.",
      guestParkingReality: "Service voiturier via l'entrée Armani Hotel ; places visiteurs libres limitées.",
      soundproofingRating: "Excellente (STC 54 dB, cloisons doubles découplées ; silence quasi total au-delà de l'étage 40).",
      elevatorPeakWaitReality: "30-55 s pour les navettes express ; la correspondance au sky lobby ajoute 1-2 min le matin.",
      hiddenOperatingCosts: "Frais de capacité de climatisation Empower élevés (~2 500-4 000 AED/an) dus quel que soit l'usage."
    },
    it: {
      honestVerdict: "Il Burj Khalifa rimane l'indirizzo trophy più prestigioso al mondo, offrendo uno status ineguagliabile e un'ottima liquidità di rivendita. Tuttavia, sotto il profilo della pura redditività locativa, risente delle spese condominiali più alte di Dubai (~55,8 AED/sq.ft) e del cambio ascensore obbligatorio tramite sky lobby per i piani alti.",
      strengths: [
        "Brand globale imbattibile che assicura liquidità immediata tra acquirenti ultra-facoltosi.",
        "Ingegneria del nucleo a contrafforti che azzera qualsiasi oscillazione percepibile durante le tempeste.",
        "Tunnel pedonale privato diretto verso il Dubai Mall e i servizi dell'Armani Hotel."
      ],
      pitfallsAndWeaknesses: [
        "Spese di gestione straordinarie (55,8 AED/sq.ft) che riducono il rendimento netto al 4,8% - 5,5%.",
        "I residenti dei piani 44-75 e 77-108 devono effettuare il cambio ascensore alla sky lobby.",
        "Ciclo di lavaggio vetrate di 90-120 giorni: polvere e sabbia possono depositarsi tra un passaggio e l'altro.",
        "Traffico del weekend e notte di Capodanno a Downtown provocano forti congestioni stradali."
      ],
      airbnbHolidayHomesPolicy: "Regolamentato: affitti brevi consentiti solo tramite operatori autorizzati Armani e previa verifica di sicurezza.",
      guestParkingReality: "Servizio car valet tramite l'ingresso dell'Armani Hotel; stalli per visitatori indipendenti limitati.",
      soundproofingRating: "Eccellente (STC 54 dB con pareti doppie disaccoppiate; silenzio assoluto sopra il piano 40).",
      elevatorPeakWaitReality: "30-55 sec per le navette express; il cambio alla sky lobby aggiunge 1-2 min nell'ora di punta mattutina.",
      hiddenOperatingCosts: "Elevati costi di capacità fissa Empower (~2.500-4.000 AED/anno) dovuti indipendentemente dall'utilizzo."
    },
    tr: {
      honestVerdict: "Burj Khalifa, dünyanın en prestijli simge adresi olmaya devam ederek eşsiz bir küresel saygınlık ve çıkış likiditesi sunar. Ancak saf kira getirisi açısından, Dubai'nin en yüksek aidatları (~55.8 AED/sq.ft) ve üst katlar için zorunlu sky lobby asansör aktarmaları nedeniyle net getiri baskılanmaktadır.",
      strengths: [
        "Ultra zengin alıcılar nezdinde anında likidite sağlayan rakipsiz küresel marka gücü.",
        "Üç kollu payandalı çekirdek (buttressed core) mühendisliği, fırtınalarda yüksek irtifa salınımını yok eder.",
        "Dubai Mall alışveriş merkezine ve Armani Hotel olanaklarına doğrudan özel klimalı yaya tüneli."
      ],
      pitfallsAndWeaknesses: [
        "Yüksek yıllık aidat masrafları (55.8 AED/sq.ft) net kira getirisini %4.8 - %5.5 bandına düşürmektedir.",
        "44-75 ve 77-108. kat sakinleri sky lobby aktarma katlarında asansör değiştirmek zorundadır.",
        "Dış cephe cam yıkama döngüsü 90-120 gün sürmektedir; sepetler arasında camlarda çöl tozu birikebilir.",
        "Downtown Dubai'de yılbaşı gecesi ve hafta sonları bulvar trafiğinde ciddi kilitlenmeler yaşanır."
      ],
      airbnbHolidayHomesPolicy: "Bina yönetimi tarafından kısıtlıdır: Kısa dönem tatil kiralama yalnızca lisanslı Armani veya butik acenteler aracılığıyla, sıkı güvenlik denetimiyle yapılabilir.",
      guestParkingReality: "Armani Hotel girişi üzerinden vale hizmeti; misafirler için ayrılmış bağımsız otopark yeri sınırlıdır.",
      soundproofingRating: "Kusursuz (STC 54 dB çift yalıtımlı duvarlar; 40. katın üzerinde mutlak sessizlik).",
      elevatorPeakWaitReality: "Zemin kat ekspres asansörlerinde 30-55 saniye; sky lobby aktarması sabah yoğun saatlerde 1-2 dakika ekler.",
      hiddenOperatingCosts: "Kullanımdan bağımsız olarak ödenen yüksek Empower kapasite güvence bedeli (~2.500-4.000 AED/yıl)."
    },
    hi: {
      honestVerdict: "बुर्ज खलीफा दुनिया का सबसे प्रतिष्ठित ट्रॉफी पता बना हुआ है, जो अद्वितीय वैश्विक प्रतिष्ठा और उत्कृष्ट निकास तरलता प्रदान करता है। हालांकि, शुद्ध किराये की उपज के दृष्टिकोण से, यह दुबई के उच्चतम सेवा शुल्क (~55.8 AED/वर्ग फुट) और ऊपरी मंजिलों के लिए अनिवार्य स्काई लॉबी लिफ्ट ट्रांसफर से प्रभावित है।",
      strengths: [
        "अतुलनीय वैश्विक ब्रांड शक्ति जो अत्यधिक धनी खरीदारों के बीच तत्काल तरलता सुनिश्चित करती है।",
        "बटरेस्ड कोर इंजीनियरिंग खाड़ी के तूफानों के दौरान ऊंचाई पर होने वाले कंपन को समाप्त करती है।",
        "दुबई मॉल और अरमानी होटल की सुविधाओं के लिए सीधा निजी पैदल वातानुकूलित सुरंग संपर्क।"
      ],
      pitfallsAndWeaknesses: [
        "अत्यधिक वार्षिक सेवा शुल्क (55.8 AED/वर्ग फुट) शुद्ध किराये की उपज को घटाकर ~4.8% - 5.5% कर देता है।",
        "44-75 और 77-108 मंजिलों के निवासियों को स्काई लॉबी में लिफ्ट बदलनी पड़ती है, जिससे यात्रा समय बढ़ता है।",
        "खिड़की सफाई चक्र 90-120 दिनों का है, जिसका अर्थ है कि सफाई दौरों के बीच बाहरी शीशों पर रेत जमा हो सकती है।",
        "डाउनटाउन दुबई में नए साल की पूर्व संध्या और सप्ताहांत पर बुलेवार्ड में भारी ट्रैफिक जाम होता है।"
      ],
      airbnbHolidayHomesPolicy: "एचओए द्वारा प्रतिबंधित: अल्पकालिक किराये की अनुमति केवल लाइसेंस प्राप्त अरमानी या बुटीक ऑपरेटरों के माध्यम से सख्त सुरक्षा जांच के बाद है।",
      guestParkingReality: "अरमानी होटल प्रवेश द्वार के माध्यम से वैलेट सेवा; आगंतुकों के लिए सीमित समर्पित पार्किंग बे।",
      soundproofingRating: "उत्कृष्ट (एसटीसी 54 डीबी डबल डीकूपल्ड दीवारें; 40वीं मंजिल के ऊपर बिल्कुल शांत वातावरण)।",
      elevatorPeakWaitReality: "ग्राउंड एक्सप्रेस शटल पर 30-55 सेकंड; सुबह 8:30-9:30 बजे स्काई लॉबी ट्रांसफर में 1-2 मिनट अतिरिक्त लगते हैं।",
      hiddenOperatingCosts: "उच्च एम्पावर क्षमता मांग शुल्क (~2,500-4,000 AED/वर्ष आधार शुल्क) एसी उपयोग के बावजूद देय है।"
    },
    ur: {
      honestVerdict: "برج خلیفہ دنیا کا سب سے معتبر اور قابل شناخت پتہ ہے، جو بے مثال عالمی وقار اور زبردست کیپٹل لیکویڈیٹی فراہم کرتا ہے۔ تاہم، خالص کرائے کے منافع کے لحاظ سے، یہ دبئی کے سب سے زیادہ سروس چارجز (~55.8 درہم فی مربع فٹ) اور بالائی رہائش گاہوں کے لیے اسکائی لابی لفٹ ٹرانسفر کی وجہ سے کچھ متاثر ہوتا ہے۔",
      strengths: [
        "بے مثال عالمی برانڈ ویلیو جو فوری فروخت کی لیکویڈیٹی اور امراء میں خصوصی وقار کی ضمانت دیتی ہے۔",
        "بٹریسڈ کور انجینئرنگ خلیجی طوفانوں کے دوران اونچائی پر عمارت کے جھولنے کے احساس کو ختم کر دیتی ہے۔",
        "دبئی مال اور ارمانی ہوٹل کی سہولیات تک براہ راست نجی ایئر کنڈیشنڈ پیدل ٹنل رابطہ۔"
      ],
      pitfallsAndWeaknesses: [
        "انتہائی زیادہ سالانہ سروس چارجز (55.8 درہم فی مربع فٹ) خالص کرائے کے منافع کو کم کر کے 4.8% تا 5.5% کر دیتے ہیں۔",
        "منزل 44 تا 75 اور 77 تا 108 کے رہائشیوں کو اسکائی لابی میں لفٹ بدلنی پڑتی ہے، جس سے وقت زیادہ لگتا ہے۔",
        "کھڑکیوں کی صفائی کا مکمل چکر 90 تا 120 دن لیتا ہے، یعنی دو صفائیوں کے درمیان ریت جم سکتی ہے۔",
        "ڈاؤن ٹاؤن دبئی میں نئے سال کی رات اور اختتام ہفتہ پر بلیوارڈ پر شدید ٹریفک جام دیکھنے میں آتا ہے۔"
      ],
      airbnbHolidayHomesPolicy: "انتظامیہ کی طرف سے سخت پابندی: مختصر مدت کے لیے کرایہ پر دینا صرف لائسنس یافتہ ارمانی یا خصوصی آپریٹرز کے ذریعے سخت سیکیورٹی جانچ کے بعد ہی ممکن ہے۔",
      guestParkingReality: "ارمانی ہوٹل کے راستے ویلٹ سروس؛ مہمانوں کی خود کار پارکنگ کے لیے محدود جگہیں دستیاب ہیں۔",
      soundproofingRating: "شاندار (STC 54 dB ڈبل ڈی کپلڈ دیواریں؛ 40 ویں منزل سے اوپر مکمل خاموشی)۔",
      elevatorPeakWaitReality: "ایکسپریس شٹلز پر 30 تا 55 سیکنڈ؛ صبح کے رش میں اسکائی لابی ٹرانسفر میں 1 تا 2 منٹ اضافی لگتے ہیں۔",
      hiddenOperatingCosts: "ایم پاور کے زیادہ کیپیسٹی چارجز (تقریباً 2,500 تا 4,000 درہم سالانہ فکسڈ چارجز) ایئر کنڈیشن کے استعمال کے بغیر بھی واجب الادا ہیں۔"
    }
  },
  "mercedes-benz-places": {
    en: {
      honestVerdict: "A futuristic hyper-luxury statement blending automotive aerodynamics with skyline architecture. The inclusion of private vehicular lifts and high-altitude plunge pools creates peerless novelty and high ultra-luxury short-term yields, though specialised mechanics entail above-average annual maintenance reserve charges.",
      strengths: [
        "First-of-its-kind Mercedes-Benz architectural design language with solar-integrated smart facade.",
        "Incomparable unobstructed Downtown panoramic views facing Burj Khalifa.",
        "Private plunge pool and smart home automation integrated directly into every residence."
      ],
      pitfallsAndWeaknesses: [
        "Service charge is at the upper end of Downtown/Business Bay spectrum (~38 AED/sq.ft).",
        "Curved aerodynamic balconies require periodic window-washing robotics maintenance.",
        "Delivery scheduled for late 2026; capital commitment required prior to handover."
      ],
      airbnbHolidayHomesPolicy: "Permitted with luxury boutique management; targeted at UHNW automotive and executive visitors.",
      guestParkingReality: "Full VIP valet service with dedicated basement visitor bays and EV fast-charging.",
      soundproofingRating: "STC 58 dB (Triple-glazed acoustic laminate; zero Sheikh Zayed Road intrusion).",
      elevatorPeakWaitReality: "< 30 seconds with destination-dispatch high-speed Otis lifts.",
      hiddenOperatingCosts: "Higher annual chiller capacity charges and private pool mechanical servicing."
    },
    ru: {
      honestVerdict: "Футуристический манифест гипер-роскоши, объединяющий автомобильную аэродинамику Mercedes-Benz с высотной архитектурой. Наличие персональных автомобильных лифтов и видовых бассейнов создает уникальный статус и высокую доходность в премиальной аренде, хотя сложная механика требует повышенных взносов в фонд обслуживания.",
      strengths: [
        "Первый в мире архитектурный проект под брендом Mercedes-Benz с фотоэлектрическим 'умным' фасадом.",
        "Непревзойденные панорамные виды на Burj Khalifa и сверкающий центр Даунтауна.",
        "Индивидуальный инфинити-бассейн и система автоматизации 'умный дом' в каждой резиденции."
      ],
      pitfallsAndWeaknesses: [
        "Сервисные сборы находятся на верхней границе цен для Даунтауна и Business Bay (~38 AED/кв. фут).",
        "Изогнутые аэродинамические балконы требуют регулярного обслуживания роботизированных систем мойки остекления.",
        "Завершение строительства запланировано на конец 2026 года; требуется фиксация капитала на этапе стройки."
      ],
      airbnbHolidayHomesPolicy: "Разрешена посуточная аренда через премиальные бутик-управляющие компании для топ-менеджеров и автоэнтузиастов.",
      guestParkingReality: "VIP-валет сервис, гостевые места на подземном паркинге и станции ультрабыстрой зарядки электромобилей.",
      soundproofingRating: "STC 58 дБ (Тройной триплекс с акустической пленкой; полное отсутствие шума шоссе шейха Зайда).",
      elevatorPeakWaitReality: "< 30 секунд благодаря скоростным лифтам Otis с интеллектуальным распределением вызовов.",
      hiddenOperatingCosts: "Повышенная ставка за мощность кондиционирования и ежегодная сервисная калибровка насосов частных бассейнов."
    },
    ar: {
      honestVerdict: "بيان معماري فائق الفخامة يدمج بين الديناميكا الهوائية للسيارات وهندسة ناطحات السحاب. يوفر إدراج مصاعد السيارات الخاصة والمسابح المعلقة عوائد إيجارية استثنائية ونخبوية منقطعة النظير، على الرغم من أن التجهيزات الميكانيكية المتطورة تفرض رسوم صيانة دورية أعلى من المتوسط.",
      strengths: [
        "أول لغة تصميم معمارية من نوعها مستوحاة من مرسيدس-بنز مع واجهة ذكية مدمجة بالطاقة الشمسية.",
        "إطلالات بانورامية مفتوحة ومباشرة على برج خليفة وأفق داون تاون دبي.",
        "مسبح خاص وتقنيات المنازل الذكية مدمجة في كل شقة سكنية."
      ],
      pitfallsAndWeaknesses: [
        "رسوم الخدمات تعتبر في الفئة العليا لداون تاون والخليج التجاري (~38 درهم/قدم²).",
        "تتطلب الشرفات المنحنية صيانة دورية لروبوتات تنظيف النوافذ الهوائية.",
        "التسليم مقرر أواخر عام 2026؛ مما يتطلب التزاماً برأس المال قبل إتمام التسليم."
      ],
      airbnbHolidayHomesPolicy: "مسموح به بإدارة بوتيك فاخرة تستهدف زوار الأعمال ورواد فعاليات السيارات الفارهة.",
      guestParkingReality: "خدمة صف سيارات VIP متكاملة مع مواقف مخصصة للزوار ومحطات شحن فائق للسيارات الكهربائية.",
      soundproofingRating: "STC 58 ديسيبل (زجاج ثلاثي الطبقات؛ حجب تام لضوضاء شارع الشيخ زايد).",
      elevatorPeakWaitReality: "أقل من 30 ثانية بفضل مصاعد أوتيس الذكية فائقة السرعة.",
      hiddenOperatingCosts: "رسوم أعلى لسعة تبريد المناطق وصيانة المضخات والمعدات الميكانيكية للمسابح الخاصة."
    },
    zh: {
      honestVerdict: "将汽车流体动力学与未来主义天际线完美融合的超奢地标。专属超级跑车入户电梯与高空私人悬臂泳池带来无可替代的稀缺性与超高短租溢价，但专属液压及高空水系机械体系也意味着高于区域均值的年度设备维保基金。",
      strengths: [
        "全球首座梅赛德斯-奔驰（Mercedes-Benz）品牌超级住宅，配备太阳能光伏一体化智能幕墙。",
        "正对哈利法塔无遮挡全景，尽揽市中心绝美天际线。",
        "每套住宅均独家配备私人悬挑冷水泳池与深度集成的顶级全屋智能家居系统。"
      ],
      pitfallsAndWeaknesses: [
        "物业费处于市中心及商务湾上限水平（约 38 AED/平方英尺）。",
        "大曲率流线型气动外阳台需要专业外墙爬索机器人定期进行特种保洁维保。",
        "预计交付时间为 2026 年底，在项目正式竣工交房前需锁定大额投资资金。"
      ],
      airbnbHolidayHomesPolicy: "允许通过特许奢华精品托管机构开展高端短租，面向全球超跑车主与跨国高管人群。",
      guestParkingReality: "全天候 VIP 代客泊车服务，配备专属地下访客车位与超级快速充电桩设施。",
      soundproofingRating: "STC 58 分贝（三层夹胶特种隔音玻璃；彻底隔绝谢赫扎耶德路任何主干道噪音）。",
      elevatorPeakWaitReality: "搭载 Otis 目的地派梯系统的超高速电梯，平均候梯时间小于 30 秒。",
      hiddenOperatingCosts: "较高的夏季集中制冷备用负荷费与高空私人泳池水力过滤系统的年度维保专项提存。"
    },
    de: {
      honestVerdict: "Ein futuristisches Luxus-Statement, das Fahrzeug-Aerodynamik mit Skyline-Architektur verbindet. Private Fahrzeug-Aufzüge und Infinity-Pools bieten einzigartige Exklusivität und erstklassige Kurzzeit-Mietrenditen, erfordern aber überdurchschnittliche Rücklagen für Spezialtechnik.",
      strengths: [
        "Weltweit erste Mercedes-Benz-Architektur mit solarintegrierter intelligenter Fassade.",
        "Unverbauter Panoramablick auf den Burj Khalifa und die Downtown-Skyline.",
        "Privater Pool und integrierte Smart-Home-Technologie in jeder einzelnen Residenz."
      ],
      pitfallsAndWeaknesses: [
        "Servicegebühren am oberen Ende des Downtown/Business Bay Spektrums (~38 AED/sq.ft).",
        "Aerodynamisch geschwungene Balkone erfordern regelmäßige Wartung der Fensterputzrobotik.",
        "Übergabe für Ende 2026 geplant; Kapitalbindung vor Fertigstellung erforderlich.",
      ],
      airbnbHolidayHomesPolicy: "Erlaubt über Luxus-Boutique-Verwalter; maßgeschneidert für anspruchsvolle Geschäftsreisende.",
      guestParkingReality: "VIP-Valet-Service mit Tiefgaragenstellplätzen für Besucher und EV-Schnellladestationen.",
      soundproofingRating: "STC 58 dB (Dreifach verglastes Akustiklaminat; kein Lärm von der Sheikh Zayed Road).",
      elevatorPeakWaitReality: "< 30 Sekunden dank intelligenter Hochgeschwindigkeitsaufzüge von Otis.",
      hiddenOperatingCosts: "Höhere Fernkälte-Kapazitätsgebühren und Wartungskosten für private Pools."
    },
    fr: {
      honestVerdict: "Une prouesse hyper-luxueuse alliant aérodynamisme automobile et architecture verticale. Les ascenseurs pour voitures privées et les piscines suspendues créent une valeur locative exceptionnelle, même si ces équipements sophistiqués impliquent des frais d'entretien supérieurs à la moyenne.",
      strengths: [
        "Première signature architecturale Mercedes-Benz avec façade solaire intelligente.",
        "Vues panoramiques imprenables sur le Burj Khalifa et le centre de Dubaï.",
        "Piscine privée et domotique intégrées au sein de chaque résidence."
      ],
      pitfallsAndWeaknesses: [
        "Charges dans la fourchette haute de Downtown et Business Bay (~38 AED/pi²).",
        "Les balcons profilés nécessitent une maintenance régulière des systèmes robotisés de nettoyage.",
        "Livraison prévue fin 2026 ; engagement de capital requis en phase de chantier."
      ],
      airbnbHolidayHomesPolicy: "Autorisé via conciergerie de luxe pour une clientèle d'affaires et de collectionneurs.",
      guestParkingReality: "Service voiturier VIP complet, stationnement visiteurs en sous-sol et bornes de recharge rapide.",
      soundproofingRating: "STC 58 dB (Triple vitrage acoustique laminé ; insonorisation absolue face à Sheikh Zayed Road).",
      elevatorPeakWaitReality: "< 30 secondes avec ascenseurs rapides Otis à sélection de destination.",
      hiddenOperatingCosts: "Frais de climatisation urbaine plus élevés et révision mécanique des piscines privées."
    },
    it: {
      honestVerdict: "Una dichiarazione futuristica di iper-lusso che unisce l'aerodinamica automobilistica all'architettura verticale. Gli ascensori per supercar e le piscine a sfioro private generano rendite eccezionali, sebbene la sofisticata meccanica richieda maggiori riserve di manutenzione.",
      strengths: [
        "Prima architettura residenziale firmata Mercedes-Benz con facciata fotovoltaica intelligente.",
        "Vista panoramica mozzafiato e senza ostacoli sul Burj Khalifa.",
        "Piscina privata e domotica all'avanguardia integrate in ciascuna residenza."
      ],
      pitfallsAndWeaknesses: [
        "Spese condominiali nella fascia alta di Downtown/Business Bay (~38 AED/sq.ft).",
        "I balconi sagomati richiedono manutenzione periodica dei robot per la pulizia vetri.",
        "Consegna prevista per fine 2026; impegno di capitale richiesto prima del rogito."
      ],
      airbnbHolidayHomesPolicy: "Consentito con gestione concierge di lusso per dirigenti e collezionisti esigenti.",
      guestParkingReality: "Servizio car valet VIP con colonnine di ricarica rapida e parcheggio visitatori interrato.",
      soundproofingRating: "STC 58 dB (Triplo vetro acustico laminato; nessun rumore da Sheikh Zayed Road).",
      elevatorPeakWaitReality: "< 30 secondi con ascensori Otis ad alta velocità e smistamento intelligente.",
      hiddenOperatingCosts: "Costi di capacità termica più alti e collaudi periodici degli impianti piscina."
    },
    tr: {
      honestVerdict: "Otomotiv aerodinamiğini gökdelen mimarisiyle harmanlayan fütüristik bir hiper-lüks başyapıt. Özel araç asansörleri ve yüksek irtifa sonsuzluk havuzları benzersiz bir ayrıcalık ve yüksek kısa dönem kira getirisi sunarken, özel mekanik altyapı ortalama üstü bakım rezervi gerektirir.",
      strengths: [
        "Güneş enerjisi entegreli akıllı cepheye sahip ilk Mercedes-Benz mimari projesi.",
        "Burj Khalifa'ya bakan kesintisiz ve benzersiz Downtown panoraması.",
        "Her daireye doğrudan entegre edilmiş özel havuz ve akıllı ev otomasyonu."
      ],
      pitfallsAndWeaknesses: [
        "Aidat bedelleri Downtown/Business Bay bölgesinin üst sınırındadır (~38 AED/sq.ft).",
        "Kavisli aerodinamik balkonlar robotik cam yıkama sistemlerinin düzenli bakımını gerektirir.",
        "Teslim tarihi 2026 sonu olarak planlanmıştır; devir öncesi sermaye bağlamayı gerektirir."
      ],
      airbnbHolidayHomesPolicy: "Lüks butik yönetim firmaları aracılığıyla izin verilmektedir; elit iş ve turizm profiline yöneliktir.",
      guestParkingReality: "Elektrikli araç hızlı şarj ünitelerine sahip tam VIP vale ve misafir otoparkı.",
      soundproofingRating: "STC 58 dB (Üç katmanlı akustik lamine cam; Sheikh Zayed Road gürültüsü tamamen engellenir).",
      elevatorPeakWaitReality: "Otis akıllı yönlendirmeli hızlı asansörlerle 30 saniyenin altında bekleme.",
      hiddenOperatingCosts: "Daha yüksek bölge soğutma kapasite ücretleri ve özel havuz mekanik bakım payı."
    },
    hi: {
      honestVerdict: "एक भविष्यवादी हाइपर-लक्जरी परियोजना जो ऑटोमोटिव एरोडायनामिक्स को गगनचुंबी वास्तुकला के साथ जोड़ती है। निजी वाहन लिफ्ट और निजी प्लंज पूल अद्वितीय आकर्षण और उच्च अल्पकालिक प्रतिफल प्रदान करते हैं, हालांकि विशेष उपकरणों के लिए औसत से अधिक रखरखाव की आवश्यकता होती है।",
      strengths: [
        "सौर-एकीकृत स्मार्ट अग्रभाग के साथ अपनी तरह का पहला मर्सिडीज-बेंज वास्तुशिल्प डिजाइन।",
        "बुर्ज खलीफा की ओर देखने वाला अतुलनीय और निर्बाध डाउनटाउन मनोरम दृश्य।",
        "प्रत्येक निवास में सीधे एकीकृत निजी प्लंज पूल और स्मार्ट होम ऑटोमेशन।"
      ],
      pitfallsAndWeaknesses: [
        "सेवा शुल्क डाउनटाउन/बिजनेस बे श्रेणी के ऊपरी स्तर पर है (~38 AED/वर्ग फुट)।",
        "घुमावदार बालकनियों को रोबोटिक खिड़की सफाई प्रणालियों के नियमित रखरखाव की आवश्यकता होती है।",
        "हैंडओवर 2026 के अंत में निर्धारित है; पूरा होने से पहले पूंजी निवेश की आवश्यकता है।"
      ],
      airbnbHolidayHomesPolicy: "लक्जरी बुटीक प्रबंधन के माध्यम से अनुमति; शीर्ष व्यवसायियों और वैश्विक पर्यटकों के लिए आदर्श।",
      guestParkingReality: "समर्पित बेसमेंट विज़िटर बे और ईवी फास्ट-चार्जिंग के साथ पूर्ण वीआईपी वैलेट सेवा।",
      soundproofingRating: "एसटीसी 58 डीबी (ट्रिपल-ग्लेज़्ड ध्वनिक लैमिनेट; राजमार्ग के शोर से पूर्ण सुरक्षा)।",
      elevatorPeakWaitReality: "हाई-स्पीड ओटिस लिफ्ट के साथ 30 सेकंड से कम प्रतीक्षा समय।",
      hiddenOperatingCosts: "उच्च चिलर क्षमता शुल्क और निजी पूल उपकरणों के आवधिक रखरखाव खर्च।"
    },
    ur: {
      honestVerdict: "ایک جدید ترین ہائپر لگژری عمارت جو مرسڈیز بینز آٹوموٹو ڈیزائن کو اسکائی لائن آرکیٹیکچر کے ساتھ یکجا کرتی ہے۔ اپارٹمنٹ کے اندر کار لفٹ اور ذاتی سوئمنگ پولز بے مثال کشش اور شاندار کرایہ منافع فراہم کرتے ہیں، تاہم خصوصی ہائیڈرولکس کے باعث مینٹیننس فیس معمول سے زیادہ ہے۔",
      strengths: [
        "شمسی پینلز سے آراستہ اسمارٹ فساڈ کے ساتھ اپنی نوعیت کا پہلا مرسڈیز بینز رہائشی شاہکار۔",
        "برج خلیفہ اور ڈاؤن ٹاؤن کے سامنے بلا روک ٹوک پینورامک نظارے۔",
        "ہر اپارٹمنٹ میں ذاتی پلنج پول اور مکمل اسمارٹ ہوم سسٹم کی تنصیب۔"
      ],
      pitfallsAndWeaknesses: [
        "سروس چارجز ڈاؤن ٹاؤن اور بزنس بے کے بالائی زمرے میں آتے ہیں (~38 درہم فی مربع فٹ)۔",
        "خمیدہ ایروڈائنامک بالکونیوں کے لیے روبوٹک ونڈو واشنگ سسٹمز کی باقاعدہ دیکھ بھال ضروری ہے۔",
        "تکمیل 2026 کے اواخر میں شیڈول ہے؛ تکمیل سے قبل سرمائے کی وابستگی درکار ہے۔"
      ],
      airbnbHolidayHomesPolicy: "پرتعیش بوتیک مینجمنٹ کے ذریعے شارٹ ٹرم رینٹل کی اجازت ہے جو بین الاقوامی امراء کے لیے موزوں ہے۔",
      guestParkingReality: "مہمانوں کے لیے زیر زمین پارکنگ اور الیکٹرک چارجنگ کے ساتھ مکمل وی آئی پی ویلٹ سروس۔",
      soundproofingRating: "STC 58 dB (ٹرپل گلیزڈ صوتی گلاس؛ شیخ زاید روڈ کا شور مکمل طور پر غائب)۔",
      elevatorPeakWaitReality: "اوٹیس اسمارٹ ڈسپیچ لفٹوں کے ساتھ 30 سیکنڈ سے بھی کم انتظار کا وقت۔",
      hiddenOperatingCosts: "ڈسٹرکٹ کولنگ کے زیادہ فکسڈ چارجز اور ذاتی پول پمپ سسٹمز کی سالانہ سروسنگ۔"
    }
  },
  "bugatti-residences": {
    en: {
      honestVerdict: "A true collector's trophy asset with immense brand scarcity. The private car elevators and Riviera aesthetic attract global ultra-high-net-worth petrolheads and trophy collectors. Capital appreciation and short-term event yields (F1, Dubai World Cup) are exceptionally high, though operational expenses reflect specialized hydraulic and pool infrastructure.",
      strengths: [
        "Unprecedented novelty of private in-unit supercar display garages.",
        "Prime canal-front position with panoramic Burj Khalifa and water vistas.",
        "Very limited total inventory of 182 units ensuring exclusive supply."
      ],
      pitfallsAndWeaknesses: [
        "High annual service charge (~36 AED/sq.ft) due to specialized vehicular elevator maintenance.",
        "During high-volume evening arrivals, vehicular lift waiting times can exceed 3-4 minutes.",
        "Business Bay Marasi Drive experiences commuter traffic delays between 18:00 and 19:30."
      ],
      airbnbHolidayHomesPolicy: "Permitted via VIP boutique concierge services; extreme peak nightly rates during major Dubai events.",
      guestParkingReality: "Dedicated VIP valet service with supercar display concourse in the main lobby.",
      soundproofingRating: "STC 57 dB (Heavy structural dampening prevents lift shaft vibrations from entering living areas).",
      elevatorPeakWaitReality: "< 25 sec for passenger lifts; ~90 sec turnaround cycle for automotive elevator.",
      hiddenOperatingCosts: "Private pool and hydraulic lift annual maintenance levies added to standard service fees."
    },
    ru: {
      honestVerdict: "Подлинный трофейный актив коллекционного уровня с исключительной брендовой ценностью. Персональные автомобильные лифты и эстетика Французской Ривьеры привлекают мировых коллекционеров и супербогатых автолюбителей. Потенциал роста стоимости и доходность во время крупных событий (F1, World Cup) максимальны, однако операционные затраты отражают наличие сложной гидравлики.",
      strengths: [
        "Беспрецедентная возможность парковать суперкар прямо в гостиной пентхауса.",
        "Первая линия Дубайского водного канала с прямыми панорамами на Burj Khalifa.",
        "Эксклюзивный лимитированный пул всего из 182 резиденций, исключающий перенасыщение рынка."
      ],
      pitfallsAndWeaknesses: [
        "Высокие ежегодные сервисные сборы (~36 AED/кв. фут) из-за обслуживания гидравлических автоподъемников.",
        "В вечерние часы ожидания автомобильного лифта может доходить до 3-4 минут при одновременном заезде нескольких резидентов.",
        "На набережной Marasi Drive в Business Bay возможны заторы в вечерний час пик с 18:00 до 19:30."
      ],
      airbnbHolidayHomesPolicy: "Разрешено через аккредитованные VIP-консьерж сервисы; рекордные суточные ставки в период ключевых выставок и Гран-при.",
      guestParkingReality: "Эксклюзивный валет-паркинг с парадной зоной экспозиции суперкаров в центральном лобби.",
      soundproofingRating: "STC 57 дБ (Тяжелые виброизоляционные демпферы изолируют жилые зоны от шахт автолифтов).",
      elevatorPeakWaitReality: "< 25 сек для пассажирских кабин; около 90 сек цикл подачи автомобильного лифта.",
      hiddenOperatingCosts: "Специальные взносы на сертифицированное обслуживание гидравлических автомобильных подъемников."
    },
    ar: {
      honestVerdict: "أصل استثماري ونخبوي فريد لهواة جمع التحف مع ندرة استثنائية للعلامة التجارية. تجذب مصاعد السيارات الخاصة وجماليات الريفييرا الفرنسية أصحاب الثروات الفائقة. يحقق المبنى عوائد خيالية خلال الفعاليات الكبرى، على الرغم من أن تكاليف التشغيل تعكس البنية التحتية الهيدروليكية المعقدة.",
      strengths: [
        "ميزة غير مسبوقة لعرض السيارات الخارقة داخل كراجات زجاجية مدمجة بالصالات السكنية.",
        "موقع متميز مباشرة على واجهة قناة دبي المائية مع إطلالات بانورامية على برج خليفة.",
        "معروض حصري محدود للغاية يبلغ 182 وحدة سكنية فقط مما يضمن ندرة مستمرة."
      ],
      pitfallsAndWeaknesses: [
        "رسوم خدمات سنوية مرتفعة (~36 درهم/قدم²) نظراً لصيانة مصاعد السيارات التخصصية.",
        "خلال فترات الوصول المسائية المتزامنة، قد يتجاوز وقت انتظار مصعد المركبات 3-4 دقائق.",
        "يشهد شارع مراسي درايف في الخليج التجاري ازدحاماً مرورياً بين 18:00 و 19:30."
      ],
      airbnbHolidayHomesPolicy: "مسموح به عبر خدمات الكونسيرج الفاخرة؛ أسعار إيجار يومية قياسية خلال الفعاليات الكبرى.",
      guestParkingReality: "خدمة صف سيارات VIP مخصصة مع ساحة استعراض للسيارات الفارهة في الردهة الرئيسية.",
      soundproofingRating: "STC 57 ديسيبل (عزل إنشائي متطور يمنع اهتزازات مصاعد السيارات من الوصول لغرف النوم).",
      elevatorPeakWaitReality: "أقل من 25 ثانية لمصاعد الركاب؛ ودورة تقارب 90 ثانية لمصعد السيارات.",
      hiddenOperatingCosts: "رسوم صيانة ميكانيكية إضافية للمصاعد الهيدروليكية وأنظمة المسابح الخاصة."
    },
    zh: {
      honestVerdict: "具备极致品牌稀缺性的全球顶级藏家艺术资产。私人专属超跑入户电梯与法国蔚蓝海岸设计语言深深吸引着全球超级富豪与跑车收藏家。资本增值潜力及重大国际赛事（F1、迪拜赛马世界杯）期间的短租回报极其可观，但高端水利与液压设备维保费用亦高于普通豪宅。",
      strengths: [
        "行业首创将顶级超级跑车作为室内艺术品停放于私享客厅的尊贵体验。",
        "雄踞迪拜水运运河头排正席，拥有哈利法塔与壮丽水系的极致全景天际线。",
        "全球限量仅 182 席奢华定制住宅，严格把控供应上限，保障长久稀缺性。"
      ],
      pitfallsAndWeaknesses: [
        "由于特种汽车高速提升电梯的严苛维保要求，年度物业费较高（约 36 AED/平方英尺）。",
        "傍晚多位住户集中归家高峰时段，车辆垂直升降等待时间可能达 3-4 分钟。",
        "商务湾 Marasi Drive 运河路段在 18:00 至 19:30 晚高峰存在一定车行缓行。"
      ],
      airbnbHolidayHomesPolicy: "支持通过授权的顶级贵宾礼宾机构运营奢华短租，重大国际峰会与赛事期间日租金收益极具爆发力。",
      guestParkingReality: "配备超跑专属迎宾展示落客区的全天候 VIP 代客泊车服务。",
      soundproofingRating: "STC 57 分贝（重型结构减震抗噪阻尼层，杜绝垂直车梯井道震动传入居住区）。",
      elevatorPeakWaitReality: "客用高速电梯等待时间小于 25 秒；车辆垂直升降往返运行周期约为 90 秒。",
      hiddenOperatingCosts: "私属恒温泳池与特种重型液压提升系统的专属年度维保专项提存。"
    },
    de: {
      honestVerdict: "Ein echtes Sammler-Trophy-Asset von immenser Markenseltenheit. Die privaten Autoaufzüge und die Riviera-Ästhetik sprechen weltweite Milliardäre an. Wertsteigerungspotenzial und Event-Mietrenditen (F1, Dubai World Cup) sind überragend, wobei die Betriebskosten die Spezialhydraulik widerspiegeln.",
      strengths: [
        "Spektakuläre private Fahrzeug-Präsentationsgaragen direkt in der Wohnung.",
        "Beste Lage direkt am Dubai-Kanal mit freiem Blick auf den Burj Khalifa.",
        "Strikte Limitierung auf nur 182 Einheiten sichert dauerhafte Exklusivität."
      ],
      pitfallsAndWeaknesses: [
        "Hohe jährliche Servicegebühren (~36 AED/sq.ft) wegen Wartung der Auto-Aufzüge.",
        "Bei gleichzeitigem Eintreffen mehrerer Bewohner abends Wartezeiten von 3-4 Min. am Pkw-Lift.",
        "Der Marasi Drive in Business Bay hat zwischen 18:00 und 19:30 Uhr erhöhtes Verkehrsaufkommen."
      ],
      airbnbHolidayHomesPolicy: "Über VIP-Concierge-Verwalter erlaubt; extreme Spitzenpreise während Großveranstaltungen.",
      guestParkingReality: "VIP-Valet-Service mit Supercar-Showroom-Zone in der Hauptlobby.",
      soundproofingRating: "STC 57 dB (Schwere Schwingungsdämpfung schirmt Aufzugsschächte von Wohnräumen ab).",
      elevatorPeakWaitReality: "< 25 Sek. für Personenlifte; ca. 90 Sek. Umlaufzyklus für den Pkw-Lift.",
      hiddenOperatingCosts: "Sonderumlagen für private Pools und Hydraulikwartung zusätzlich zu Basiskosten."
    },
    fr: {
      honestVerdict: "Un actif patrimonial d'exception pour collectionneurs doté d'une rareté de marque absolue. Les ascenseurs pour supercars et l'esthétique Côte d'Azur séduisent les grandes fortunes mondiales. La plus-value et les rendements locatifs lors des grands événements sont exceptionnels.",
      strengths: [
        "Concept avant-gardiste de garage vitré privé directement intégré au salon.",
        "Position de premier plan en bord de canal avec vues panoramiques sur le Burj Khalifa.",
        "Collection ultra-exclusive de seulement 182 résidences préservant la valeur à long terme."
      ],
      pitfallsAndWeaknesses: [
        "Charges annuelles élevées (~36 AED/pi²) en raison de l'entretien des monte-voitures.",
        "En heure de pointe du soir, l'attente pour l'ascenseur pour véhicules peut atteindre 3-4 minutes.",
        "Le boulevard Marasi Drive à Business Bay subit des ralentissements entre 18h00 et 19h30."
      ],
      airbnbHolidayHomesPolicy: "Autorisé via conciergerie VIP ; tarifs à la nuitée records lors des temps forts dubaïotes.",
      guestParkingReality: "Voiturier VIP avec esplanade d'exposition pour supercars dans le hall d'accueil.",
      soundproofingRating: "STC 57 dB (Amortissement structurel lourd isolant parfaitement les gaines d'ascenseur).",
      elevatorPeakWaitReality: "< 25 s pour les ascenseurs passagers ; rotation de ~90 s pour le monte-charge automobile.",
      hiddenOperatingCosts: "Provisions d'entretien technique dédiées aux piscines et vérins hydrauliques."
    },
    it: {
      honestVerdict: "Un vero trofeo per collezionisti con una straordinaria desiderabilità di marchio. Gli ascensori per auto private e lo stile Riviera attirano miliardari e appassionati di motori. Rivalutazione e rendimenti durante i grandi eventi (F1, World Cup) sono al vertice, con costi operativi adeguati alla sofisticata idraulica.",
      strengths: [
        "Novità esclusiva del garage privato a vista integrato direttamente nel living.",
        "Posizione privilegiata fronte canale con vista aperta su Burj Khalifa e acque di Dubai.",
        "Disponibilità limitata a sole 182 residenze, a tutela dell'esclusività dell'offerta."
      ],
      pitfallsAndWeaknesses: [
        "Spese condominiali elevate (~36 AED/sq.ft) per la manutenzione degli ascensori per veicoli.",
        "Negli orari di rientro serale l'attesa per l'ascensore auto può salire a 3-4 minuti.",
        "Marasi Drive a Business Bay registra traffico intenso tra le 18:00 e le 19:30."
      ],
      airbnbHolidayHomesPolicy: "Consentito tramite concierge di lusso; tariffe notturne record durante gli eventi di gala a Dubai.",
      guestParkingReality: "Servizio car valet VIP dedicato con lounge espositiva per supercar nella hall.",
      soundproofingRating: "STC 57 dB (Isolamento strutturale rinforzato per azzerare le vibrazioni dei vani ascensore).",
      elevatorPeakWaitReality: "< 25 sec per ascensori passeggeri; ciclo di circa 90 sec per l'ascensore auto.",
      hiddenOperatingCosts: "Contributi per la manutenzione periodica di piscine e montacarichi idraulici."
    },
    tr: {
      honestVerdict: "Büyük bir marka prestijine sahip gerçek bir koleksiyonluk simge varlık. Özel araç asansörleri ve Fransız Riviera estetiği, küresel ultra zengin profilini cezbeder. Sermaye artışı ve Formula 1 gibi büyük etkinliklerdeki kısa dönem getirisi olağanüstüdür, ancak işletme giderleri hidrolik altyapıyı yansıtır.",
      strengths: [
        "Süper lüks otomobillerin salonda sergilenmesine olanak tanıyan özel araç asansörleri.",
        "Dubai Su Kanalı kıyısında, Burj Khalifa ve su manzarasına hakim ön cephe konumu.",
        "Yalnızca 182 adet ile sınırlandırılmış son derece seçkin ve arzı kısıtlı portföy."
      ],
      pitfallsAndWeaknesses: [
        "Özel araç asansörlerinin karmaşık bakımı nedeniyle yüksek yıllık aidat (~36 AED/sq.ft).",
        "Akşam aynı anda gelen araç sayısına bağlı olarak araç asansörü bekleme süresi 3-4 dakikayı bulabilir.",
        "Business Bay Marasi Drive üzerinde 18:00-19:30 saatleri arasında trafik yoğunluğu oluşur."
      ],
      airbnbHolidayHomesPolicy: "VIP butik konsiyerj şirketleri üzerinden izin verilir; Dubai'nin büyük etkinliklerinde rekor gecelik fiyatlar.",
      guestParkingReality: "Ana lobide süper otomobil sergileme alanına sahip özel VIP vale servisi.",
      soundproofingRating: "STC 57 dB (Ağır yapısal sönümleyiciler asansör şaft titreşimlerinin yaşam alanına girmesini önler).",
      elevatorPeakWaitReality: "Yolcu asansörlerinde < 25 saniye; araç asansöründe yaklaşık 90 saniyelik çevrim süresi.",
      hiddenOperatingCosts: "Standart aidata eklenen özel havuz ve hidrolik asansör yıllık bakım fonu payı."
    },
    hi: {
      honestVerdict: "अत्यधिक ब्रांड दुर्लभता के साथ एक सच्चा कलेक्टर ट्रॉफी एसेट। निजी कार लिफ्ट और रिवेरा सौंदर्य वैश्विक अति-उच्च-निवल-मूल्य वाले कार उत्साही लोगों को आकर्षित करते हैं। पूंजीगत लाभ और प्रमुख आयोजनों (F1, विश्व कप) के दौरान अल्पकालिक उपज असाधारण है, हालांकि परिचालन व्यय जटिल हाइड्रोलिक सिस्टम को दर्शाते हैं।",
      strengths: [
        "लिविंग रूम के अंदर निजी सुपरकार डिस्प्ले गैरेज की अभूतपूर्व सुविधा।",
        "बुर्ज खलीफा और पानी के मनोरम दृश्यों के साथ मुख्य नहर-सामने की स्थिति।",
        "केवल 182 इकाइयों की सीमित कुल सूची जो दीर्घकालिक विशिष्टता सुनिश्चित करती है।"
      ],
      pitfallsAndWeaknesses: [
        "विशेष वाहन लिफ्ट रखरखाव के कारण उच्च वार्षिक सेवा शुल्क (~36 AED/वर्ग फुट)।",
        "शाम के आगमन के दौरान, वाहन लिफ्ट प्रतीक्षा समय 3-4 मिनट से अधिक हो सकता है।",
        "बिजनेस बे मरासी ड्राइव शाम 18:00 और 19:30 के बीच यातायात धीमापन का अनुभव करता है।"
      ],
      airbnbHolidayHomesPolicy: "वीआईपी कंसीयज सेवाओं के माध्यम से अनुमति; दुबई के प्रमुख आयोजनों के दौरान रिकॉर्ड दैनिक दरें।",
      guestParkingReality: "मुख्य लॉबी में सुपरकार डिस्प्ले कॉनकोर्स के साथ समर्पित वीआईपी वैलेट सेवा।",
      soundproofingRating: "एसटीसी 57 डीबी (भारी संरचनात्मक इन्सुलेशन लिफ्ट शाफ्ट कंपन को रहने वाले क्षेत्रों में प्रवेश करने से रोकता है)।",
      elevatorPeakWaitReality: "यात्री लिफ्ट के लिए < 25 सेकंड; ऑटोमोटिव लिफ्ट के लिए ~90 सेकंड टर्नअराउंड चक्र।",
      hiddenOperatingCosts: "मानक सेवा शुल्क में जोड़े गए निजी पूल और हाइड्रोलिक लिफ्ट रखरखाव शुल्क।"
    },
    ur: {
      honestVerdict: "ایک حقیقی کلیکٹرز ٹرافی اثاثہ جس میں برانڈ کی بے پناہ قدر شامل ہے۔ ذاتی کار لفٹ اور فرانسیسی رویرا کا ڈیزائن بین الاقوامی ارب پتیوں کو اپنی جانب راغب کرتا ہے۔ بڑی تقریبات (F1، ورلڈ کپ) کے دوران کیپٹل ویلیو اور مختصر مدتی کرائے کا منافع غیر معمولی ہے، تاہم آپریشنل اخراجات زیادہ ہیں۔",
      strengths: [
        "اپارٹمنٹ کے اندر سپر کار پارکنگ اور نمائش کی بے مثال جدید سہولت۔",
        "دبئی واٹر کینال کے بالکل سامنے اور برج خلیفہ کے وسیع پینورامک نظارے۔",
        "صرف 182 یونٹس پر مشتمل انتہائی نایاب اور پرتعیش انوینٹری۔"
      ],
      pitfallsAndWeaknesses: [
        "گاڑیوں کی خصوصی لفٹ کی دیکھ بھال کی وجہ سے زیادہ سالانہ سروس چارجز (~36 درہم فی مربع فٹ)۔",
        "شام کے وقت کئی گاڑیوں کی بیک وقت آمد پر کار لفٹ کا انتظار 3 تا 4 منٹ تک بڑھ سکتا ہے۔",
        "بزنس بے مراسی ڈرائیو پر شام 6:00 سے 7:30 بجے کے درمیان ٹریفک جام کا سامنا کرنا پڑتا ہے۔",
      ],
      airbnbHolidayHomesPolicy: "وی آئی پی کنسیرج سروسز کے ذریعے اجازت ہے؛ دبئی کے بڑے ایونٹس کے دوران ریکارڈ یومیہ کرائے وصول ہوتے ہیں۔",
      guestParkingReality: "مین لابی میں سپر کار ڈسپلے ہال کے ساتھ خصوصی وی آئی پی ویلٹ سروس۔",
      soundproofingRating: "STC 57 dB (ساختی وائبریشن پروفنگ کار لفٹ کے ارتعاش کو بیڈ رومز تک نہیں پہنچنے دیتی)۔",
      elevatorPeakWaitReality: "مسافر لفٹ کے لیے 25 سیکنڈ سے کم؛ آٹوموٹو لفٹ کا ایک چکر تقریباً 90 سیکنڈ لیتا ہے۔",
      hiddenOperatingCosts: "ذاتی سوئمنگ پول اور ہائیڈرولک لفٹ کے سالانہ مینٹیننس فنڈ کے چارجز۔"
    }
  },
  "habtoor-tower": {
    en: {
      honestVerdict: "An engineering colossus providing unmatched price-per-square-foot value on Sheikh Zayed Road. The 3-tier amenity decks and canal-side position deliver strong rental liquidity. However, buyers must factor in the sheer density of 1,700+ units, which will generate heavy communal usage and busy peak elevator hours.",
      strengths: [
        "Unrivalled amenity package: multiple infinity pools, padel courts, and direct canal promenade access.",
        "Competitive entry price compared to neighboring Downtown Emaar towers.",
        "Deep 2.2m foundation piles ensure world-class seismic and structural integrity."
      ],
      pitfallsAndWeaknesses: [
        "High density (1,700+ units) creates potential elevator waiting during 8:00-9:00 AM rush.",
        "Western balconies overlook Sheikh Zayed Road; minor ambient traffic hum during open balcony hours.",
        "Al Habtoor City highway ingress ramps experience brief congestion during evening rush."
      ],
      airbnbHolidayHomesPolicy: "Fully permitted with in-house holiday home management; very strong tenant demand.",
      guestParkingReality: "Substantial 6-level podium with 200+ dedicated visitor and valet parking spots.",
      soundproofingRating: "STC 55 dB (High-spec acoustic glass effectively insulates Sheikh Zayed Road noise).",
      elevatorPeakWaitReality: "35-50 seconds with 18 Otis destination-controlled lifts.",
      hiddenOperatingCosts: "Empower capacity fee applies; otherwise very reasonable service charges (~21 AED/sq.ft)."
    },
    ru: {
      honestVerdict: "Инженерный колосс, предлагающий лучшее соотношение цены за квадратный фут на Sheikh Zayed Road. 3-уровневые зоны отдыха и расположение на набережной канала обеспечивают высокую ликвидность аренды. Однако инвесторам важно учитывать плотность в 1,700+ апартаментов, создающую высокую нагрузку на общественные зоны и лифты в часы пик.",
      strengths: [
        "Непревзойденный пул удобств: несколько инфинити-бассейнов, падел-корты и прямой выход на променад канала.",
        "Привлекательная цена входа по сравнению с соседними башнями Emaar в Даунтауне.",
        "Глубокие буронабивные сваи диаметром 2.2 м гарантируют эталонную сейсмическую и конструктивную надежность."
      ],
      pitfallsAndWeaknesses: [
        "Высокая плотность (более 1,700 квартир) может создавать очереди к лифтам в утренний пик (8:00-9:00).",
        "Западные балконы выходят на Sheikh Zayed Road; при открытых дверях слышен фоновый гул шоссе.",
        "Съезды с трассы в Al Habtoor City испытывают локальное затруднение движения в вечерние часы."
      ],
      airbnbHolidayHomesPolicy: "Полностью разрешена; собственная управляющая компания для краткосрочной аренды с высоким круглогодичным спросом.",
      guestParkingReality: "Просторный 6-уровневый подиум с более чем 200 выделенными гостевыми местами и валет-сервисом.",
      soundproofingRating: "STC 55 дБ (Специальное акустическое остекление эффективно глушит шум магистрали E11).",
      elevatorPeakWaitReality: "35-50 секунд благодаря 18 скоростным лифтам Otis с предварительным выбором этажа.",
      hiddenOperatingCosts: "Стандартный сбор за мощность Empower; в остальном умеренные сервисные сборы (~21 AED/кв. фут)."
    },
    ar: {
      honestVerdict: "صرح هندسي عملاق يوفر قيمة تنافسية لا تضاهى لسعر القدم المربع على شارع الشيخ زايد. توفر طوابق المرافق الثلاثة والموقع على القناة المائية سيولة إيجارية قوية. ومع ذلك، يجب على المشترين مراعاة الكثافة العالية (أكثر من 1700 وحدة) وتأثيرها على فترات انتظار المصاعد.",
      strengths: [
        "باقة مرافق استثنائية: مسابح لا متناهية متعددة، وملاعب بادل، ووصول مباشر لممشى القناة.",
        "سعر دخول تنافسي ومجدٍ مقارنة بأبراج إعمار المجاورة في داون تاون دبي.",
        "أوتاد خرسانية ضخمة بعمق وقطر 2.2 م تضمن أعلى معايير السلامة الزلزالية والاستقرار الإنشائي."
      ],
      pitfallsAndWeaknesses: [
        "الكثافة العالية (1700+ شقة) قد تسبب انتظاراً إضافياً للمصاعد خلال ذروة الصباح (8:00-9:00).",
        "تطل الشرفات الغربية على شارع الشيخ زايد؛ مما يسبب هديراً خفيفاً لحركة السير عند فتح النوافذ.",
        "تشهد منافذ الدخول من الطريق السريع إلى الحبتور سيتي ازدحاماً مؤقتاً في المساء."
      ],
      airbnbHolidayHomesPolicy: "مسموح بالكامل مع إدارة مدمجة لبيوت العطلات؛ طلب إيجاري متواصل وقوي.",
      guestParkingReality: "مبنى بوديوم واسع من 6 طوابق يضم أكثر من 200 موقف مخصص للزوار وخدمة صف السيارات.",
      soundproofingRating: "STC 55 ديسيبل (زجاج عازل للصوت عالي الكفاءة يحجب ضوضاء شارع الشيخ زايد بفعالية).",
      elevatorPeakWaitReality: "35-50 ثانية عبر 18 مصعداً ذكياً فائق السرعة من أوتيس.",
      hiddenOperatingCosts: "تُطبق رسوم سعة تبريد إمباور؛ عدا ذلك تعتبر رسوم الصيانة معتدلة (~21 درهم/قدم²)."
    },
    zh: {
      honestVerdict: "谢赫扎耶德路（Sheikh Zayed Road）沿线极具单价性价比的超高层工程巨作。三层全维度奢华度假配套与直面运河的绝佳区位保障了强劲的租赁流动性。但买家需客观考量全楼 1,700 余套住宅的高密度体量在早晚高峰期对公共电梯与设施带来的使用压力。",
      strengths: [
        "无与伦比的综合配套：多个空中无边际泳池、板网球场（Padel）以及直通运河滨水步道的便捷通道。",
        "相较于市中心邻近的伊玛尔（Emaar）同类塔楼，具备极具竞争力的低门槛入市门槛。",
        "直径达 2.2 米的超深桩基工程，确立了全球一流水准的抗震抗风与地基刚度标准。"
      ],
      pitfallsAndWeaknesses: [
        "1,700 多套高密度住宅体量，在早高峰（8:00-9:00）可能导致电梯排队等待。",
        "西向阳台正对谢赫扎耶德主干道，开窗通风时存在一定的背景车流低频噪音。",
        "晚间返程高峰期间，由主干道驶入阿尔哈布图尔城（Al Habtoor City）的匝道容易出现阶段性缓行。"
      ],
      airbnbHolidayHomesPolicy: "完全允许短租民宿经营，大厦配有原厂专业度假屋托管服务，常年维持旺盛承租需求。",
      guestParkingReality: "拥有 6 层宽敞裙楼停车楼，提供超过 200 个专属访客车位及全天候代客泊车服务。",
      soundproofingRating: "STC 55 分贝（高规格特种隔音中空玻璃，关窗状态下深度阻断 E11 主干道行车噪音）。",
      elevatorPeakWaitReality: "配备 18 部 Otis 智能目的楼层控制高速电梯，平均候梯时间 35-50 秒。",
      hiddenOperatingCosts: "需缴纳 Empower 集中供冷基础容量费；除此之外整体基础物业费较为亲民（约 21 AED/平方英尺）。"
    },
    de: {
      honestVerdict: "Ein Ingenieurskoloss mit hervorragendem Preis-pro-Quadratfuß-Verhältnis an der Sheikh Zayed Road. Drei Annehmlichkeitsetagen und die Lage am Kanal bieten starke Mietliquidität. Käufer müssen jedoch die Dichte von über 1.700 Einheiten und die Auslastung in Spitzenzeiten berücksichtigen.",
      strengths: [
        "Umfangreiches Ausstattungspaket: mehrere Infinity-Pools, Padel-Courts und Kanalpromenade.",
        "Sehr wettbewerbsfähiger Einstiegspreis im Vergleich zu Downtown Emaar-Türmen.",
        "Tiefe 2,2-m-Fundamentpfähle gewährleisten erstklassige strukturelle Integrität."
      ],
      pitfallsAndWeaknesses: [
        "Hohe Dichte (1.700+ Einheiten) erzeugt morgens (8:00-9:00 Uhr) Aufzug-Wartezeiten.",
        "Westbalkone blicken auf die Sheikh Zayed Road; hörbares Rauschen bei geöffnetem Fenster.",
        "Zufahrtsrampen von der Autobahn nach Al Habtoor City abends zeitweise stauanfällig."
      ],
      airbnbHolidayHomesPolicy: "Vollständig erlaubt mit hauseigener Ferienwohnungsverwaltung; kontinuierlich hohe Nachfrage.",
      guestParkingReality: "Großes 6-stöckiges Podium mit über 200 Besucher- und Valet-Parkplätzen.",
      soundproofingRating: "STC 55 dB (Hochwertiges Akustikglas dämpft den Verkehrslärm der Sheikh Zayed Road wirksam ab).",
      elevatorPeakWaitReality: "35-50 Sekunden mit 18 zielgesteuerten Hochgeschwindigkeitsaufzügen von Otis.",
      hiddenOperatingCosts: "Empower-Kapazitätsgebühr fällt an; ansonsten sehr moderate Servicegebühren (~21 AED/sq.ft)."
    },
    fr: {
      honestVerdict: "Un colosse d'ingénierie offrant un rapport qualité-prix au pied carré imbattable sur Sheikh Zayed Road. Ses 3 niveaux d'équipements et son accès au canal assurent une forte liquidité locative. Les acquéreurs doivent cependant composer avec la densité de 1 700 unités et ses effets sur les flux d'ascenseurs.",
      strengths: [
        "Ensemble d'équipements d'exception : multiples piscines à débordement, terrains de padel et promenade.",
        "Prix d'acquisition très compétitif comparé aux tours Emaar voisines de Downtown.",
        "Pieux de fondation profonds de 2,2 m garantissant une stabilité structurale de premier plan."
      ],
      pitfallsAndWeaknesses: [
        "La densité importante (1 700+ lots) engendre de l'attente aux ascenseurs le matin (8h-9h).",
        "Les balcons ouest surplombent Sheikh Zayed Road ; léger bruit de fond lorsque les baies sont ouvertes.",
        "Les bretelles d'accès depuis l'autoroute vers Al Habtoor City saturent brièvement le soir."
      ],
      airbnbHolidayHomesPolicy: "Entièrement autorisé avec conciergerie intégrée ; forte demande continue de la part des locataires.",
      guestParkingReality: "Vaste podium de 6 étages comptant plus de 200 places visiteurs et service voiturier.",
      soundproofingRating: "STC 55 dB (Vitrage acoustique haute performance atténuant efficacement les bruits routiers).",
      elevatorPeakWaitReality: "35-50 secondes grâce à 18 ascenseurs rapides Otis à manœuvre prédictive.",
      hiddenOperatingCosts: "Frais de capacité Empower requis ; charges d'exploitation par ailleurs très raisonnables (~21 AED/pi²)."
    },
    it: {
      honestVerdict: "Un colosso ingegneristico con un rapporto qualità-prezzo al metro quadro straordinario lungo Sheikh Zayed Road. I 3 piani dedicati ai servizi e la posizione sul canale assicurano un'eccellente redditività. Tuttavia, l'elevata densità di 1.700+ unità genera un utilizzo intensivo degli ascensori.",
      strengths: [
        "Servizi imbattibili: piscine a sfioro su più livelli, campi da padel e accesso diretto alla passeggiata sul canale.",
        "Prezzo di ingresso competitivo rispetto alle torri Emaar di Downtown.",
        "Pali di fondazione da 2,2 m di diametro che offrono una tenuta sismica e strutturale ai vertici mondiali."
      ],
      pitfallsAndWeaknesses: [
        "L'elevata densità (1.700+ appartamenti) comporta possibili attese agli ascensori tra le 8:00 e le 9:00.",
        "I balconi a ovest affacciano su Sheikh Zayed Road, con lieve rumore di fondo a finestre aperte.",
        "Le rampe di accesso autostradali ad Al Habtoor City subiscono rallentamenti nelle ore serali."
      ],
      airbnbHolidayHomesPolicy: "Totalmente consentito con gestione short-term interna; domanda di locazione molto solida.",
      guestParkingReality: "Ampio podio a 6 livelli con oltre 200 stalli dedicati a visitatori e servizio car valet.",
      soundproofingRating: "STC 55 dB (Vetro acustico ad alte prestazioni che scherma efficacemente il traffico autostradale).",
      elevatorPeakWaitReality: "35-50 secondi con 18 ascensori intelligenti Otis a controllo di destinazione.",
      hiddenOperatingCosts: "Tariffa di capacità Empower applicata; per il resto spese di gestione contenute (~21 AED/sq.ft)."
    },
    tr: {
      honestVerdict: "Sheikh Zayed Road üzerinde metrekare başına rakipsiz bir değer sunan mühendislik devi. 3 katlı sosyal tesis alanı ve kanal cephesi güçlü kira likiditesi sağlar. Ancak yatırımcılar, 1.700'den fazla dairenin yoğun ortak kullanım ve asansör trafiği yaratacağını hesaba katmalıdır.",
      strengths: [
        "Eşsiz sosyal olanaklar: çoklu sonsuzluk havuzları, padel kortları ve doğrudan kanal kordonuna çıkış.",
        "Komşu Downtown Emaar kulelerine kıyasla oldukça rekabetçi giriş fiyatı.",
        "2.2 metrelik derin temel kazıkları dünya standardında sismik ve yapısal bütünlük sağlar."
      ],
      pitfallsAndWeaknesses: [
        "1.700'ü aşkın ünitenin getirdiği yoğunluk, sabah 8:00-9:00 saatlerinde asansör beklemesine yol açabilir.",
        "Batı cepheli balkonlar Sheikh Zayed Road'a bakar; balkon kapısı açıkken hafif trafik uğultusu duyulur.",
        "Al Habtoor City otoyol giriş bağlantılarında akşam saatlerinde kısa süreli yoğunluk yaşanır."
      ],
      airbnbHolidayHomesPolicy: "Bina içi tatil evi yönetim sistemiyle tamamen serbesttir; kesintisiz kiracı talebi vardır.",
      guestParkingReality: "200'den fazla ayrılmış misafir yeri ve vale hizmeti sunan 6 katlı geniş podyum otoparkı.",
      soundproofingRating: "STC 55 dB (Özel akustik cam cephe, Sheikh Zayed Road otoyol gürültüsünü etkili şekilde izole eder).",
      elevatorPeakWaitReality: "18 adet Otis akıllı hedef kontrollü asansör ile 35-50 saniye bekleme süresi.",
      hiddenOperatingCosts: "Empower kapasite ücreti uygulanır; bunun haricinde aidat bedelleri oldukça makuldür (~21 AED/sq.ft)."
    },
    hi: {
      honestVerdict: "शेख जायद रोड पर अद्वितीय मूल्य-प्रति-वर्ग-फुट प्रदान करने वाला एक इंजीनियरिंग चमत्कार। 3-स्तरीय सुविधा डेक और नहर किनारे की स्थिति मजबूत किराये की तरलता प्रदान करती है। हालांकि, खरीदारों को 1,700+ इकाइयों के उच्च घनत्व को ध्यान में रखना चाहिए, जो व्यस्त समय में लिफ्ट उपयोग को बढ़ाता है।",
      strengths: [
        "अतुलनीय सुविधा पैकेज: कई इन्फिनिटी पूल, पैडेल कोर्ट और सीधी नहर सैरगाह पहुंच।",
        "पड़ोसी डाउनटाउन एम्मार टावरों की तुलना में प्रतिस्पर्धी प्रवेश मूल्य।",
        "गहरे 2.2 मीटर नींव के खंभे विश्व स्तरीय भूकंपीय और संरचनात्मक अखंडता सुनिश्चित करते हैं।"
      ],
      pitfallsAndWeaknesses: [
        "उच्च घनत्व (1,700+ इकाइयां) सुबह 8:00-9:00 बजे की भीड़ के दौरान लिफ्ट प्रतीक्षा का कारण बन सकता है।",
        "पश्चिमी बालकनियां शेख जायद रोड की ओर खुलती हैं; बालकनी खुली होने पर हल्का यातायात शोर सुनाई देता है।",
        "अल हबटूर सिटी हाईवे प्रवेश रैंप शाम की भीड़ के दौरान संक्षिप्त भीड़ का अनुभव करते हैं।"
      ],
      airbnbHolidayHomesPolicy: "इन-हाउस हॉलिडे होम प्रबंधन के साथ पूरी तरह से अनुमति; बहुत मजबूत किरायेदार मांग।",
      guestParkingReality: "200+ समर्पित विज़िटर और वैलेट पार्किंग स्पॉट के साथ पर्याप्त 6-स्तरीय पोडियम।",
      soundproofingRating: "एसटीसी 55 डीबी (उच्च-विशिष्ट ध्वनिक ग्लास राजमार्ग के शोर को प्रभावी ढंग से अलग करता है)।",
      elevatorPeakWaitReality: "18 ओटिस गंतव्य-नियंत्रित लिफ्टों के साथ 35-50 सेकंड।",
      hiddenOperatingCosts: "एम्पावर क्षमता शुल्क लागू होता है; अन्यथा बहुत उचित सेवा शुल्क (~21 AED/वर्ग फुट)।"
    },
    ur: {
      honestVerdict: "شیخ زاید روڈ پر فی مربع فٹ بہترین قیمت فراہم کرنے والا ایک انجینئرنگ کا شاہکار۔ 3 منزلہ تفریحی ڈیک اور نہر کے کنارے موجودگی شاندار کرایہ منافع دیتی ہے۔ تاہم خریداروں کو 1700 سے زائد اپارٹمنٹس کے ہجوم اور لفٹ کے رش کو مدنظر رکھنا چاہیے۔",
      strengths: [
        "بے مثال تفریحی سہولیات: متعدد انفینٹی پولز، پیڈل کورٹس اور واٹر کینال پرومینیڈ تک براہ راست رسائی۔",
        "ڈاؤن ٹاؤن کے دیگر اعمار ٹاورز کے مقابلے میں مناسب اور مسابقتی قیمت۔",
        "2.2 میٹر چوڑے گہرے فاؤنڈیشن پائلز بہترین زلزلہ پروف ساختی مضبوطی فراہم کرتے ہیں۔"
      ],
      pitfallsAndWeaknesses: [
        "1,700 سے زائد اپارٹمنٹس کی وجہ سے صبح 8:00 سے 9:00 بجے کے رش میں لفٹ کا انتظار کرنا پڑ سکتا ہے۔",
        "مغربی بالکونیاں شیخ زاید روڈ کے سامنے ہیں؛ بالکونی کا دروازہ کھلا رکھنے پر ٹریفک کا مدہم شور آتا ہے۔",
        "شام کے وقت ہائی وے سے الحبتور سٹی میں داخل ہونے والے راستوں پر عارضی رش ہوتا ہے۔"
      ],
      airbnbHolidayHomesPolicy: "ہالیڈے ہومز مینجمنٹ کے ساتھ شارٹ ٹرم رینٹل کی مکمل اجازت؛ کرایہ داروں کی مستحکم مانگ۔",
      guestParkingReality: "6 منزلہ وسیع پوڈیم جس میں مہمانوں کے لیے 200 سے زائد پارکنگ اور ویلٹ کی سہولت موجود ہے۔",
      soundproofingRating: "STC 55 dB (اعلیٰ معیار کا صوتی شیشہ ہائی وے کے شور کو اندر آنے سے روکتا ہے)۔",
      elevatorPeakWaitReality: "اوٹیس کے 18 تیز رفتار اسمارٹ لفٹوں کے ساتھ 35 تا 50 سیکنڈ۔",
      hiddenOperatingCosts: "ایم پاور کیپیسٹی چارجز لاگو ہوتے ہیں؛ بصورت دیگر سروس فیس معقول ہے (~21 درہم فی مربع فٹ)۔"
    }
  },
  "address-beach-resort": {
    en: {
      honestVerdict: "The undisputed crown of JBR. Generates the highest short-term holiday rental ADRs (Average Daily Rates) in coastal Dubai due to the world-famous rooftop pool and beachfront access. However, JBR weekend traffic is notoriously congested, and rooftop pool access during peak hours requires advance booking.",
      strengths: [
        "Record-holding 294 m rooftop infinity pool with world-renowned photo appeal.",
        "True private beach access with full sun loungers, towel service, and seaside dining.",
        "Address 5-star brand sustains exceptional 80%+ year-round occupancy."
      ],
      pitfallsAndWeaknesses: [
        "JBR The Walk experiences heavy weekend traffic congestion from Thursday to Saturday night.",
        "Strict pool access restrictions: resident guests must register in advance during high season.",
        "Service charges of ~32.5 AED/sq.ft are above standard Dubai Marina averages."
      ],
      airbnbHolidayHomesPolicy: "Fully permitted in residential tower; exceptional short-term holiday yields ($400-$1,200/night in winter).",
      guestParkingReality: "Full 24/7 valet service; visitor self-parking is restricted and requires valet token.",
      soundproofingRating: "STC 56 dB (Exceptional marine-grade acoustic glass; waves are audible, traffic is blocked).",
      elevatorPeakWaitReality: "< 35 seconds with dedicated high-speed shuttles to the skybridge.",
      hiddenOperatingCosts: "Chiller-free billing offsets higher HOA maintenance charges for skybridge pool structure."
    },
    ru: {
      honestVerdict: "Бесспорная жемчужина района JBR. Генерирует самые высокие средние суточные ставки (ADR) в прибрежном Дубае благодаря всемирно известному панорамному бассейну на крыше и собственному пляжу. Однако трафик в JBR по выходным сильно затруднен, а доступ к верхнему бассейну в пиковые часы требует предварительной брони.",
      strengths: [
        "Рекордный инфинити-бассейн на высоте 294 м, внесенный в Книгу рекордов Гиннесса, с колоссальным вирусным фотопотенциалом.",
        "Собственный закрытый пляж с шезлонгами, полотенцами и ресторанным сервисом на берегу.",
        "Премиальный 5-звездочный бренд Address обеспечивает среднегодовую заполняемость свыше 80%."
      ],
      pitfallsAndWeaknesses: [
        "Променад The Walk в JBR испытывает хронические дорожные пробки с вечера четверга по субботу.",
        "Строгий регламент посещения бассейна на крыше: гостей резидентов необходимо регистрировать заранее.",
        "Сервисные сборы (~32.5 AED/кв. фут) превышают средние показатели по Дубай Марине."
      ],
      airbnbHolidayHomesPolicy: "Полностью разрешена в жилой башне; рекордная посуточная доходность ($400-$1,200/ночь в зимний сезон).",
      guestParkingReality: "Круглосуточный валет-паркинг 24/7; самостоятельная парковка гостей ограничена и требует валет-талона.",
      soundproofingRating: "STC 56 дБ (Морской триплекс исключительного качества; слышен мягкий шум прибоя, звуки улицы заблокированы).",
      elevatorPeakWaitReality: "< 35 секунд благодаря скоростным лифтам-экспрессам на скайбридж.",
      hiddenOperatingCosts: "Охлаждение включено (Chiller-Free), что компенсирует повышенный взнос на обслуживание конструкций бассейна."
    },
    ar: {
      honestVerdict: "الدرة المتوجة لمنطقة جميرا بيتش ريزيدنس (JBR). يحقق أعلى متوسط سعر يومي لتأجير العطلات (ADR) في ساحل دبي بفضل المسبح المعلق الأشهر عالمياً والوصول المباشر للشاطئ. ومع ذلك، يعاني الممشى من ازدحام مروري ملحوظ في عطلة نهاية الأسبوع.",
      strengths: [
        "مسبح لا متناهي على ارتفاع 294 متراً مسجل في غينيس للأرقام القياسية بجاذبية تصوير عالمية.",
        "وصول خاص وحصري لشاطئ البحر مع كراسي استرخاء وخدمات ضيافة شاطئية متكاملة.",
        "علامة العنوان (Address) الفندقية من فئة 5 نجوم تحافظ على معدل إشغال يتجاوز 80% طوال العام."
      ],
      pitfallsAndWeaknesses: [
        "يشهد ممشى (The Walk JBR) اختناقات مرورية حادة من مساء الخميس حتى ليل السبت.",
        "شروط صارمة لاستخدام المسبح العلوي: يلزم حجز ضيوف السكان مسبقاً خلال مواسم الذروة.",
        "رسوم الخدمات البالغة ~32.5 درهم/قدم² أعلى من المعدل المعتاد في دبي مارينا."
      ],
      airbnbHolidayHomesPolicy: "مسموح بالكامل في البرج السكني؛ عوائد تأجير عطلات استثنائية (400-1200 دولار لليلة في الشتاء).",
      guestParkingReality: "خدمة صف سيارات (فاليه) على مدار 24 ساعة؛ المواقف الذاتية للزوار مقيدة ببطاقات الفاليه.",
      soundproofingRating: "STC 56 ديسيبل (زجاج عازل بحري فائق؛ أمواج البحر مسموعة بهدوء وضجيج المركبات محجوب).",
      elevatorPeakWaitReality: "أقل من 35 ثانية بمصاعد سريعة مخصصة للربط مع الجسر المعلق.",
      hiddenOperatingCosts: "التبريد مشمول بالخدمات الأساسية (Chiller-Free) مما يعوض تكاليف صيانة المسبح المعلق."
    },
    zh: {
      honestVerdict: "JBR 海滨区无可争议的皇冠明珠。凭借荣获吉尼斯世界纪录的顶层无边际泳池与尊享私属沙滩，常年保持迪拜海滨度假物业最高平均日租金（ADR）。但 JBR 步行街周末交通拥堵常态化，且顶层网红泳池在高峰季须提前预约方可入场。",
      strengths: [
        "高达 294 米的吉尼斯世界纪录全球最高户外无边泳池，具备无与伦比的国际社媒流量溢价。",
        "真正的私属白沙滩直通权益，尊享豪华日光浴躺椅、毛巾服务及海滨露天餐饮礼遇。",
        "伊玛尔（Emaar）旗舰 Address 奢华五星级品牌赋能，常年维持 80% 以上的高位出租率。"
      ],
      pitfallsAndWeaknesses: [
        "JBR The Walk 海滨步道在周四至周六晚间高峰期车辆进出严重拥堵。",
        "高空泳池管理制度严格：旺季期间业主访客必须提前报备预约，限流进入。",
        "年度物业费（约 32.5 AED/平方英尺）明显高于迪拜游艇港普通住宅均价。"
      ],
      airbnbHolidayHomesPolicy: "住宅塔楼全面允许合规民宿运营；冬季旺季日租金可达 400-1,200 美元/晚，现金流回报极佳。",
      guestParkingReality: "24 小时全天候代客泊车（Valet）服务；访客自主地面停车受限，需凭代客泊车凭证入场。",
      soundproofingRating: "STC 56 分贝（顶配海事级特种隔音夹胶中空玻璃；室内仅闻舒缓海浪声，全面隔绝车流嘈杂）。",
      elevatorPeakWaitReality: "配备直通空中连桥的专属高速穿梭梯，候梯时长小于 35 秒。",
      hiddenOperatingCosts: "空调冷气费已全额免除（Chiller-Free），平衡了天桥高空钢结构泳池所产生的高额公摊维保。"
    },
    de: {
      honestVerdict: "Die unbestrittene Krone von JBR. Erzielt dank des weltberühmten Rooftop-Pools und Strandzugangs die höchsten Ferienvermietungspreise (ADR) an Dubais Küste. Der Wochenendverkehr in JBR ist jedoch berüchtigt, und der Zugang zum Infinity-Pool erfordert zu Spitzenzeiten eine Voranmeldung.",
      strengths: [
        "Rekordverdächtiger 294-m-Rooftop-Infinity-Pool (Guinness-Buch) mit unvergleichlicher Strahlkraft.",
        "Echter privater Strandzugang mit Liegestühlen, Handtuchservice und Strandgastronomie.",
        "Address 5-Sterne-Marke sichert eine ganzjährige Auslastung von über 80%."
      ],
      pitfallsAndWeaknesses: [
        "JBR The Walk leidet von Donnerstag- bis Samstagnacht unter starken Verkehrsstaus.",
        "Strenge Pool-Zutrittsregeln: Gäste von Bewohnern müssen in der Hochsaison vorab registriert werden.",
        "Servicegebühren von ~32,5 AED/sq.ft liegen über dem Durchschnitt der Dubai Marina."
      ],
      airbnbHolidayHomesPolicy: "Im Wohnturm voll erlaubt; exzellente Renditen in der Ferienvermietung ($400-$1.200/Nacht im Winter).",
      guestParkingReality: "24/7 Valet-Service; Selbstparkerplätze für Besucher sind streng reglementiert.",
      soundproofingRating: "STC 56 dB (Hervorragendes Akustikglas in Marinequalität; Meeresrauschen hörbar, Straßenlärm blockiert).",
      elevatorPeakWaitReality: "< 35 Sekunden dank eigener Express-Aufzüge zur Skybridge.",
      hiddenOperatingCosts: "Chiller-Free Abrechnung federt die höheren Instandhaltungsgebühren für den Skybridge-Pool ab."
    },
    fr: {
      honestVerdict: "Le joyau incontesté de JBR. Il affiche les tarifs journaliers moyens (ADR) les plus élevés du littoral dubaïote grâce à sa piscine à débordement suspendue et son accès direct à la plage. La circulation du week-end à JBR est toutefois dense, et la piscine sur le toit exige une réservation en haute saison.",
      strengths: [
        "Piscine à débordement à 294 m homologuée au Guinness World Records, offrant un attrait visuel mondial.",
        "Accès direct à une plage privée avec transats, service de serviettes et restauration en bord de mer.",
        "La signature 5 étoiles Address maintient un taux d'occupation supérieur à 80% à l'année."
      ],
      pitfallsAndWeaknesses: [
        "L'artère The Walk de JBR subit d'importantes congestions du jeudi au samedi soir.",
        "Accès piscine très encadré : les invités des résidents doivent être pré-enregistrés en période de pointe.",
        "Les charges de ~32,5 AED/pi² sont supérieures à la moyenne de Dubai Marina."
      ],
      airbnbHolidayHomesPolicy: "Totalement autorisé dans la tour résidentielle ; rentabilités saisonnières exceptionnelles (400$-1 200$/nuit en hiver).",
      guestParkingReality: "Service voiturier disponible 24h/24 ; stationnement libre visiteurs restreint.",
      soundproofingRating: "STC 56 dB (Verre acoustique de qualité marine ; bercé par les vagues, circulation bloquée).",
      elevatorPeakWaitReality: "< 35 secondes grâce à des navettes rapides réservées à la passerelle sommitale.",
      hiddenOperatingCosts: "Formule Chiller-Free compensant les frais d'entretien accrus liés au bassin suspendu."
    },
    it: {
      honestVerdict: "La corona indiscussa di JBR. Raggiunge le tariffe giornaliere medie (ADR) più elevate della costa di Dubai grazie alla celebre infinity pool sul tetto e all'accesso diretto alla spiaggia. Il traffico del weekend a JBR è tuttavia intenso, e l'accesso alla piscina panoramica richiede la prenotazione in alta stagione.",
      strengths: [
        "Piscina a sfioro a 294 m da Guinness dei primati con fascino fotografico globale.",
        "Vero accesso alla spiaggia privata con lettini, teli mare e ristorazione sul lungomare.",
        "Il brand Address 5 stelle garantisce un'occupazione media annua superiore all'80%."
      ],
      pitfallsAndWeaknesses: [
        "The Walk a JBR risente di forte traffico da giovedì a sabato sera.",
        "Accesso alla piscina regolamentato: gli ospiti dei residenti devono prenotare nei periodi di punta.",
        "Spese condominiali di ~32,5 AED/sq.ft superiori alla media di Dubai Marina."
      ],
      airbnbHolidayHomesPolicy: "Pienamente consentito nella torre residenziale; eccezionali rendimenti per affitti brevi (400$-1.200$/notte d'inverno).",
      guestParkingReality: "Servizio car valet attivo 24/7; parcheggio visitatori autonomo soggetto a limitazioni.",
      soundproofingRating: "STC 56 dB (Vetro acustico marino; onde del mare percepibili, rumore stradale completamente bloccato).",
      elevatorPeakWaitReality: "< 35 secondi con navette dedicate ad alta velocità verso lo skybridge.",
      hiddenOperatingCosts: "Condizionamento incluso (Chiller-Free) che compensa le maggiori spese per la struttura della piscina."
    },
    tr: {
      honestVerdict: "JBR'ın tartışmasız zirvesi. Dünyaca ünlü çatı katı sonsuzluk havuzu ve özel plaj erişimi sayesinde sahil şeridinde en yüksek ortalama günlük tatil kiralaması (ADR) getirisine sahiptir. Ancak JBR'ın hafta sonu trafiği yoğundur ve çatı havuzu yoğun saatlerde önceden rezervasyon gerektirir.",
      strengths: [
        "294 metre yükseklikte Guinness Rekorlar Kitabı'na giren dünyaca ünlü çatı sonsuzluk havuzu.",
        "Şezlong, havlu servisi ve sahil restoranları ile tam donanımlı özel plaj erişimi.",
        "Address 5 yıldızlı otel markası yıl boyunca %80'in üzerinde yüksek doluluk sağlar."
      ],
      pitfallsAndWeaknesses: [
        "JBR The Walk bölgesi perşembeden cumartesi gecesine kadar yoğun trafik sıkışıklığı yaşar.",
        "Çatı havuzuna sıkı erişim kuralları: Sakinlerin misafirleri yoğun sezonda önceden kaydolmalıdır.",
        "32.5 AED/sq.ft civarındaki aidat bedelleri Dubai Marina standartlarının üzerindedir."
      ],
      airbnbHolidayHomesPolicy: "Konut kulesinde tamamen serbesttir; kış aylarında gecelik 400-1.200 $ arası olağanüstü kısa dönem getirisi.",
      guestParkingReality: "Tam 24/7 vale hizmeti; misafirler için bağımsız otopark kısıtlıdır ve vale fişi gerektirir.",
      soundproofingRating: "STC 56 dB (Üst düzey deniz sınıfı akustik cam; dalgalar duyulabilir, araç gürültüsü tamamen kesilir).",
      elevatorPeakWaitReality: "Skybridge'e çıkan özel hızlı asansörlerle 35 saniyenin altında bekleme.",
      hiddenOperatingCosts: "Klima tüketiminin aidata dahil olması (Chiller-Free), havuz yapısı bakım masraflarını dengeler."
    },
    hi: {
      honestVerdict: "जेबीआर का निर्विवाद मुकुट। विश्व प्रसिद्ध रूफटॉप पूल और समुद्र तट तक सीधी पहुंच के कारण तटीय दुबई में उच्चतम अल्पकालिक अवकाश किराया (एडीआर) उत्पन्न करता है। हालांकि, जेबीआर सप्ताहांत यातायात भारी होता है, और व्यस्त घंटों के दौरान रूफटॉप पूल तक पहुंच के लिए अग्रिम बुकिंग की आवश्यकता होती है।",
      strengths: [
        "रिकॉर्ड धारक 294 मीटर रूफटॉप इन्फिनिटी पूल जो विश्व प्रसिद्ध फोटो अपील प्रदान करता है।",
        "सन लाउंजर, तौलिया सेवा और समुद्र तटीय भोजन के साथ वास्तविक निजी समुद्र तट पहुंच।",
        "एड्रेस 5-स्टार ब्रांड साल भर 80%+ की असाधारण अधिभोग दर बनाए रखता है।"
      ],
      pitfallsAndWeaknesses: [
        "जेबीआर द वॉक गुरुवार से शनिवार रात तक भारी सप्ताहांत यातायात भीड़ का अनुभव करता है।",
        "सख्त पूल पहुंच प्रतिबंध: चरम मौसम के दौरान निवासी मेहमानों को पहले से पंजीकरण कराना होगा।",
        "~32.5 AED/वर्ग फुट का सेवा शुल्क सामान्य दुबई मरीना औसत से अधिक है।"
      ],
      airbnbHolidayHomesPolicy: "आवासीय टावर में पूरी तरह से अनुमति; सर्दियों में असाधारण अल्पकालिक अवकाश उपज ($400-$1,200/रात)।",
      guestParkingReality: "पूर्ण 24/7 वैलेट सेवा; आगंतुक स्व-पार्किंग प्रतिबंधित है और इसके लिए वैलेट टोकन की आवश्यकता होती है।",
      soundproofingRating: "एसटीसी 56 डीबी (असाधारण समुद्री-ग्रेड ध्वनिक ग्लास; लहरें सुनाई देती हैं, यातायात अवरुद्ध है)।",
      elevatorPeakWaitReality: "स्काईब्रिज के लिए समर्पित हाई-स्पीड शटल के साथ < 35 सेकंड।",
      hiddenOperatingCosts: "चिलर-मुक्त बिलिंग स्काईब्रिज पूल संरचना के लिए उच्च रखरखाव शुल्क की भरपाई करती है।"
    },
    ur: {
      honestVerdict: "جے بی آر کا بے تاج بادشاہ۔ دنیا کے مشہور روف ٹاپ انفینٹی پول اور ساحل سمندر تک براہ راست رسائی کی بدولت ساحلی دبئی میں سب سے زیادہ یومیہ کرایہ حاصل کرتا ہے۔ تاہم اختتام ہفتہ پر جے بی آر میں ٹریفک جام عام ہے اور پول پر جانے کے لیے پیشگی بکنگ ضروری ہے۔",
      strengths: [
        "294 میٹر اونچائی پر گنیز ریکارڈ یافتہ روف ٹاپ انفینٹی پول جو عالمی شہرت کا حامل ہے۔",
        "مکمل سہولیات، لاؤنجرز اور ڈائننگ کے ساتھ پرائیویٹ بیچ تک براہ راست رسائی۔",
        "ایڈریس 5 اسٹار برانڈ سال بھر 80 فیصد سے زیادہ بکنگ کو یقینی بناتا ہے۔"
      ],
      pitfallsAndWeaknesses: [
        "جے بی آر دی واک پر جمعرات سے ہفتے کی رات تک شدید ٹریفک جام رہتا ہے۔",
        "چھت پر موجود پول کے لیے سخت قواعد: رش کے سیزن میں رہائشیوں کے مہمانوں کی پیشگی بکنگ لازمی ہے۔",
        "سروس چارجز (~32.5 درہم فی مربع فٹ) دبئی مرینا کے اوسط سے زیادہ ہیں۔"
      ],
      airbnbHolidayHomesPolicy: "رہائشی ٹاور میں مکمل اجازت؛ سردیوں میں شاندار شارٹ ٹرم منافع (400 تا 1200 ڈالر فی رات)۔",
      guestParkingReality: "24 گھنٹے ویلٹ سروس؛ مہمانوں کے لیے سیلف پارکنگ محدود ہے اور ویلٹ ٹوکن درکار ہوتا ہے۔",
      soundproofingRating: "STC 56 dB (اعلیٰ درجے کا صوتی شیشہ؛ لہروں کی مدہم آواز سنائی دیتی ہے مگر سڑک کا شور مکمل غائب رہتا ہے)۔",
      elevatorPeakWaitReality: "اسکائی برج جانے والی تیز رفتار ایکسپریس لفٹوں کے ساتھ 35 سیکنڈ سے بھی کم۔",
      hiddenOperatingCosts: "چلر فری سسٹم برج پول اسٹرکچر کے اضافی مینٹیننس چارجز کو متوازن کرتا ہے۔"
    }
  },
  "one-palm-omniyat": {
    en: {
      honestVerdict: "The gold standard of boutique ultra-prime living on Palm Jumeirah. With only 94 residences, privacy and white-glove service from Dorchester Collection are unmatched. Ideal for generational wealth preservation, though strictly non-suitable for short-term rental investors as holiday lets are prohibited.",
      strengths: [
        "Uncompromising Dorchester Collection hospitality and private boat jetty.",
        "Private elevator foyer for virtually every residence ensuring total celebrity privacy.",
        "Unrivalled 100 m private beachfront with Dubai Marina skyline views."
      ],
      pitfallsAndWeaknesses: [
        "Extreme capital barrier to entry with resale starting above 24M AED.",
        "High annual service charge (~42 AED/sq.ft) to maintain Dorchester standards.",
        "Short-term Airbnb rentals are strictly prohibited by building bylaws."
      ],
      airbnbHolidayHomesPolicy: "Strictly Prohibited by HOA; pristine residential sanctuary and quietness enforced.",
      guestParkingReality: "Generous private basement parking with dedicated valet and EV fast charging for every residence.",
      soundproofingRating: "STC 60 dB (German Schuco acoustic glass; virtually dead silent living quarters).",
      elevatorPeakWaitReality: "Zero wait (< 15 seconds); private dedicated elevator banks.",
      hiddenOperatingCosts: "Premium Dorchester management surcharge included in service fees; private pool maintenance."
    },
    ru: {
      honestVerdict: "Золотой стандарт ультра-элитной клубной жизни на Palm Jumeirah. Всего 94 резиденции с безупречным консьерж-сервисом от легендарной Dorchester Collection. Идеальный выбор для сохранения семейного капитала, но абсолютно не подходит для краткосрочной аренды — субаренда строго запрещена уставом дома.",
      strengths: [
        "Бескомпромиссный сервис мирового уровня Dorchester Collection и собственный причал для яхт.",
        "Персональный лифтовой холл практически в каждой резиденции для полной конфиденциальности.",
        "100 метров частного песчаного пляжа с панорамами на сверкающие башни Дубай Марины."
      ],
      pitfallsAndWeaknesses: [
        "Чрезвычайно высокий порог входа на вторичном рынке — цены стартуют от 24 млн AED.",
        "Высокие ежегодные эксплуатационные сборы (~42 AED/кв. фут) для поддержания стандартов Dorchester.",
        "Посуточная аренда (Airbnb) категорически запрещена правилами кондоминиума."
      ],
      airbnbHolidayHomesPolicy: "Строго запрещено ТСЖ; соблюдается статус приватного клубного святилища и абсолютной тишины.",
      guestParkingReality: "Просторный подземный паркинг, персональный валет и станции быстрой зарядки для каждого резидента.",
      soundproofingRating: "STC 60 дБ (Немецкие звукоизоляционные системы Schuco; эталонная тишина в апартаментах).",
      elevatorPeakWaitReality: "Нулевое ожидание (< 15 секунд) благодаря индивидуальным лифтовым узлам.",
      hiddenOperatingCosts: "Надбавка за премиальное управление Dorchester заложена в сервисные сборы; обслуживание частных бассейнов."
    },
    ar: {
      honestVerdict: "المعيار الذهبي للحياة فائقة الفخامة في نخلة جميرا. مع 94 وحدة سكنية فقط، توفر خدمات مجموعة دورتشستر كوليكشن العالمية خصوصية مطلقة. يعتبر العقار ملاذاً مثالياً لحفظ الثروات العائلية، ولكنه غير مناسب للتأجير قصير الأجل نظراً لحظر تأجير العطلات في المبنى.",
      strengths: [
        "خدمات ضيافة عالمية المستوى من دورتشستر كوليكشن ومرسى يخوت خاص للمقيمين.",
        "ردهة مصعد خاصة لكل شقة تقريباً مما يوفر خصوصية تامة للشخصيات المرموقة.",
        "شاطئ رملي خاص بطول 100 متر مع إطلالات بانورامية خلابة على أفق دبي مارينا."
      ],
      pitfallsAndWeaknesses: [
        "حاجز مالي مرتفع جداً لدخول السوق حيث تبدأ أسعار إعادة البيع من 24 مليون درهم.",
        "رسوم صيانة سنوية عالية (~42 درهم/قدم²) للحفاظ على معايير دورتشستر العالمية.",
        "يُحظر التأجير اليومي قصير الأجل (Airbnb) حظراً تاماً بموجب اللائحة الداخلية للبناية."
      ],
      airbnbHolidayHomesPolicy: "محظور تماماً من اتحاد الملاك؛ للحفاظ على الهدوء والسكينة والخصوصية النخبوية.",
      guestParkingReality: "مواقف سفلية رحبة مع خدمة صف سيارات متكاملة ومحطات شحن سريع للسيارات الكهربائية.",
      soundproofingRating: "STC 60 ديسيبل (أنظمة زجاج شوكو الألمانية؛ هدوء مطلق في غرف المعيشة والنوم).",
      elevatorPeakWaitReality: "انتظار شبه منعدم (أقل من 15 ثانية) بفضل المصاعد المخصصة لكل شقة.",
      hiddenOperatingCosts: "رسوم إدارة دورتشستر النخبوية مشمولة في الرسوم السنوية؛ صيانة دورية للمسابح الخاصة."
    },
    zh: {
      honestVerdict: "朱美拉棕榈岛（Palm Jumeirah）低密超奢私人府邸的黄金标杆。全楼仅限量规划 94 套大平层府邸，由享誉百年的多切斯特精选酒店集团（Dorchester Collection）提供全天候管家服务。是家族代际财富传承的顶级护城河，但因公约严禁任何短租民宿，完全不适合高周转投资客。",
      strengths: [
        "享誉全球的多切斯特精选顶级私人管家款待礼遇与私属游艇码头停靠泊位。",
        "近乎全户型配备私属专属入户电梯厅，确保名人名流的绝对私密与安全隔离。",
        "长达 100 米的私属纯白沙滩，正对游艇港璀璨壮丽的城市天际线。"
      ],
      pitfallsAndWeaknesses: [
        "极高的资本入市准入门槛，二手转售门槛起点超过 2,400 万迪拉姆。",
        "为维持多切斯特极致水准，年度基础物业费高达约 42 AED/平方英尺。",
        "大厦业主委员会章程明确明令严禁任何形式的短期民宿（Airbnb）分租出租。"
      ],
      airbnbHolidayHomesPolicy: "业主委员会明令严禁短租，坚决捍卫纯粹住宅圣地的至高静谧与圈层纯粹度。",
      guestParkingReality: "奢华地下专属私家车库，为每户配备专属代客泊车与大功率快速充电桩。",
      soundproofingRating: "STC 60 分贝（德国顶级旭格 Schuco 声学隔音系统，室内达到近乎绝对真空的静音表现）。",
      elevatorPeakWaitReality: "零候梯等待（小于 15 秒），尊享专属独立私家入户电梯组。",
      hiddenOperatingCosts: "年度物业费中内含多切斯特奢华品牌管理溢价，另附私人露台温控泳池的专项维护费。"
    },
    de: {
      honestVerdict: "Der Goldstandard für ultra-exklusives Wohnen auf der Palm Jumeirah. Mit nur 94 Residenzen sind Privatsphäre und der White-Glove-Service der Dorchester Collection unübertroffen. Ideal zur Vermögenserhaltung, jedoch ungeeignet für Kurzzeitvermieter, da Ferienvermietung untersagt ist.",
      strengths: [
        "Kompromisslose Gastfreundschaft der Dorchester Collection und privater Bootsanleger.",
        "Privates Aufzugsfoyer für nahezu jede Einheit garantiert absolute Diskretion.",
        "100 m privater Sandstrand mit unverbaubarem Blick auf die Skyline der Dubai Marina."
      ],
      pitfallsAndWeaknesses: [
        "Extrem hohe Einstiegshürde mit Wiederverkaufspreisen ab über 24 Mio. AED.",
        "Hohe jährliche Servicegebühren (~42 AED/sq.ft) zur Wahrung der Dorchester-Standards.",
        "Kurzzeitvermietungen (Airbnb) sind laut Hausordnung strikt verboten."
      ],
      airbnbHolidayHomesPolicy: "Von der HOA strikt untersagt; absolute Ruhe und exklusiver Rückzugsort werden gewährleistet.",
      guestParkingReality: "Großzügige Tiefgaragenplätze mit dediziertem Valet-Service und EV-Schnellladern.",
      soundproofingRating: "STC 60 dB (Deutsches Schüco-Akustikglas; nahezu vollkommene Stille im Wohnbereich).",
      elevatorPeakWaitReality: "Keine Wartezeit (< 15 Sekunden) durch private, separate Aufzugsgruppen.",
      hiddenOperatingCosts: "Premium-Managementaufschlag von Dorchester in den Gebühren enthalten; private Poolwartung."
    },
    fr: {
      honestVerdict: "La référence absolue du très grand luxe résidentiel sur Palm Jumeirah. Avec 94 appartements seulement, l'intimité et le service Dorchester Collection sont inégalés. Idéal pour la préservation patrimoniale, mais inadapté aux investisseurs saisonniers car la sous-location y est bannie.",
      strengths: [
        "Excellence hôtelière Dorchester Collection et ponton d'amarrage privé pour yachts.",
        "Palier d'ascenseur privatif pour presque chaque unité, assurant une discrétion absolue.",
        "Plage de sable blanc privée de 100 mètres face à la skyline de Dubai Marina."
      ],
      pitfallsAndWeaknesses: [
        "Barrière financière très élevée, les reventes débutant au-delà de 24 millions d'AED.",
        "Charges annuelles importantes (~42 AED/pi²) pour financer les prestations Dorchester.",
        "La location courte durée type Airbnb est strictement prohibée par le règlement de copropriété."
      ],
      airbnbHolidayHomesPolicy: "Strictement interdit par le syndicat ; sanctuaire résidentiel et quiétude totale protégés.",
      guestParkingReality: "Sous-sol spacieux avec voiturier attitré et bornes de recharge rapide pour chaque lot.",
      soundproofingRating: "STC 60 dB (Châssis et vitrages allemands Schüco ; insonorisation d'un calme absolu).",
      elevatorPeakWaitReality: "Attente nulle (< 15 secondes) grâce aux batteries d'ascenseurs privatifs.",
      hiddenOperatingCosts: "Surtaxe de gestion hôtelière Dorchester incluse dans les charges ; entretien des bassins privatifs."
    },
    it: {
      honestVerdict: "Il punto di riferimento per l'abitare ultra-prime a Palm Jumeirah. Con appena 94 residenze, la privacy e i servizi Dorchester Collection sono senza pari. Perfetto per la tutela dei patrimoni familiari, ma inadatto a chi punta su affitti brevi poiché vietati dal regolamento.",
      strengths: [
        "Ospitalità Dorchester Collection senza compromessi e pontile privato per imbarcazioni.",
        "Foyer con ascensore privato per quasi ogni residenza a tutela della massima riservatezza.",
        "100 metri di spiaggia privata incontaminata con vista panoramica su Dubai Marina."
      ],
      pitfallsAndWeaknesses: [
        "Soglia di ingresso elevatissima sul mercato secondario, con prezzi sopra i 24 milioni di AED.",
        "Spese di gestione considerevoli (~42 AED/sq.ft) per mantenere gli standard Dorchester.",
        "Gli affitti brevi stile Airbnb sono categoricamente vietati dal regolamento di condominio."
      ],
      airbnbHolidayHomesPolicy: "Rigorosamente vietato dal regolamento; oasi di totale riservatezza e silenzio.",
      guestParkingReality: "Generoso parcheggio sotterraneo con car valet riservato e colonnine veloci per ciascuna dimora.",
      soundproofingRating: "STC 60 dB (Sistemi di vetrata tedeschi Schüco; silenzio assoluto all'interno degli appartamenti).",
      elevatorPeakWaitReality: "Attesa nulla (< 15 secondi) grazie a batterie di ascensori private.",
      hiddenOperatingCosts: "Sovrapprezzo di gestione Dorchester compreso nelle quote ordinarie; manutenzione piscine private."
    },
    tr: {
      honestVerdict: "Palm Jumeirah'da butik ultra-lüks yaşamın altın standardı. Yalnızca 94 rezidansı ile Dorchester Collection'ın sunduğu mahremiyet ve beyaz eldivenli hizmet rakipsizdir. Kuşaklararası servet koruması için idealdir; ancak tatil amaçlı kısa dönem kiralama yasak olduğundan bu yatırımcılara uygun değildir.",
      strengths: [
        "Ödünsüz Dorchester Collection misafirperverliği ve özel yat iskelesi.",
        "Neredeyse her rezidans için tam ünlüler düzeyinde gizlilik sağlayan özel asansör holü.",
        "Dubai Marina manzaralı 100 metrelik eşsiz özel kumsal plaj."
      ],
      pitfallsAndWeaknesses: [
        "İkinci elde 24 milyon AED'nin üzerinde başlayan son derece yüksek sermaye giriş barajı.",
        "Dorchester standartlarını korumak için yüksek yıllık aidat bedeli (~42 AED/sq.ft).",
        "Airbnb ve kısa dönem tatil kiralamaları bina kuralları gereği kesinlikle yasaktır."
      ],
      airbnbHolidayHomesPolicy: "Bina yönetimi tarafından kesinlikle yasaklanmıştır; mutlak huzur ve mahremiyet korunur.",
      guestParkingReality: "Her konut için özel vale ve elektrikli hızlı şarj istasyonlarına sahip geniş kapalı otopark.",
      soundproofingRating: "STC 60 dB (Alman Schüco akustik cam; yaşam alanlarında adeta mutlak sessizlik).",
      elevatorPeakWaitReality: "Sıfır bekleme süresi (< 15 saniye); özel tahsisli asansör şaftları.",
      hiddenOperatingCosts: "Aidatlara dahil Dorchester yönetim bedeli ve özel havuzların periyodik mekanik bakımı."
    },
    hi: {
      honestVerdict: "पाम जुमेराह पर बुटीक अल्ट्रा-प्राइम लिविंग का स्वर्ण मानक। केवल 94 आवासों के साथ, डोरचेस्टर कलेक्शन की गोपनीयता और सफेद दस्ताने वाली सेवा बेजोड़ है। पीढ़ीगत धन संरक्षण के लिए आदर्श, हालांकि अल्पकालिक किराये के निवेशकों के लिए बिल्कुल अनुपयुक्त क्योंकि अवकाश गृह किराए पर देना प्रतिबंधित है।",
      strengths: [
        "डोरचेस्टर कलेक्शन का अद्वितीय आतिथ्य और निजी नाव जेट्टी।",
        "वस्तुतः प्रत्येक निवास के लिए निजी लिफ्ट फ़ोयर जो पूर्ण गोपनीयता सुनिश्चित करता है।",
        "दुबई मरीना स्काईलाइन दृश्यों के साथ 100 मीटर का अद्वितीय निजी समुद्र तट।"
      ],
      pitfallsAndWeaknesses: [
        "24M AED से ऊपर शुरू होने वाले पुनर्विक्रय के साथ अत्यधिक पूंजी बाधा।",
        "डोरचेस्टर मानकों को बनाए रखने के लिए उच्च वार्षिक सेवा शुल्क (~42 AED/वर्ग फुट)।",
        "भवन उप-नियमों द्वारा अल्पकालिक एयरबीएनबी किराए पर पूरी तरह से प्रतिबंध है।"
      ],
      airbnbHolidayHomesPolicy: "एचओए द्वारा सख्त वर्जित; प्राचीन आवासीय शांति और शांति लागू की गई।",
      guestParkingReality: "प्रत्येक निवास के लिए समर्पित वैलेट और ईवी फास्ट चार्जिंग के साथ उदार निजी बेसमेंट पार्किंग।",
      soundproofingRating: "एसटीसी 60 डीबी (जर्मन शुकू ध्वनिक ग्लास; वस्तुतः बिल्कुल शांत रहने का कमरा)।",
      elevatorPeakWaitReality: "शून्य प्रतीक्षा (< 15 सेकंड); निजी समर्पित लिफ्ट बैंक।",
      hiddenOperatingCosts: "सेवा शुल्क में शामिल प्रीमियम डोरचेस्टर प्रबंधन अधिभार; निजी पूल रखरखाव।"
    },
    ur: {
      honestVerdict: "پام جمیرہ پر پرتعیش اور باوقار رہائش کا اعلیٰ ترین معیار۔ صرف 94 پرائیویٹ پینٹ ہاؤسز کے ساتھ ڈورچسٹر کلیکشن کی ذاتی خدمات لاجواب ہیں۔ خاندانی دولت کے محفوظ اثاثے کے لیے بہترین انتخاب ہے، البتہ شارٹ ٹرم رینٹل کے سرمایہ کاروں کے لیے غیر موزوں ہے کیونکہ عارضی کرایہ داری ممنوع ہے۔",
      strengths: [
        "ڈورچسٹر کلیکشن کی شاندار مہمان نوازی اور ذاتی پرائیویٹ یاٹ جیٹی۔",
        "ہر اپارٹمنٹ کے لیے الگ نجی لفٹ ہال جو مکمل رازداری کی ضمانت دیتا ہے۔",
        "دبئی مرینا اسکائی لائن کے دلکش نظاروں کے ساتھ 100 میٹر طویل نجی ساحل سمندر۔"
      ],
      pitfallsAndWeaknesses: [
        "سرمایہ کاری کے لیے بہت بھاری رقم درکار ہے، ری سیل پر قیمتیں 24 ملین درہم سے شروع ہوتی ہیں۔",
        "ڈورچسٹر کے اعلیٰ معیار کو برقرار رکھنے کے لیے سالانہ سروس چارجز (~42 درہم فی مربع فٹ) زیادہ ہیں۔",
        "بلڈنگ کے اصول و ضوابط کے تحت ایئر بی این بی اور شارٹ ٹرم کرایہ داری پر مکمل پابندی عائد ہے۔"
      ],
      airbnbHolidayHomesPolicy: "انتظامیہ کی طرف سے سختی سے ممنوع؛ عمارت میں انتہائی پرسکون اور خاموش ماحول برقرار رکھا جاتا ہے۔",
      guestParkingReality: "ہر رہائش کے لیے وسیع زیر زمین پارکنگ، مخصوص ویلٹ اور الیکٹرک فاسٹ چارجرز۔",
      soundproofingRating: "STC 60 dB (جرمن شوکو صوتی شیشہ؛ اپارٹمنٹ کے اندر مکمل اور لاجواب خاموشی)۔",
      elevatorPeakWaitReality: "انتظار کا وقت صفر (< 15 سیکنڈ)؛ ہر رہائش کے لیے الگ ذاتی لفٹ۔",
      hiddenOperatingCosts: "ڈورچسٹر برانڈ فیس سروس چارجز میں شامل ہے؛ ذاتی پولز کی مینٹیننس کے اضافی اخراجات۔"
    }
  },
  "sobha-hartland-waves": {
    en: {
      honestVerdict: "One of the most rational, defect-free real estate investments in Dubai. Sobha's complete in-house construction eliminates subcontractor flaws, ensuring high durability and low maintenance costs. Heavy tenant demand from international school families guarantees near-zero vacancy.",
      strengths: [
        "Unmatched German-standard build quality with zero contractor subcontracting.",
        "Captive rental pool from parents of students at adjacent North London Collegiate School.",
        "Reasonable service charges (~19.5 AED/sq.ft) yielding healthy 7.6%+ net returns."
      ],
      pitfallsAndWeaknesses: [
        "Surrounding MBR City sectors are still undergoing infrastructure construction.",
        "Metro access requires a 7-minute taxi or feeder bus ride to Creek Metro Station.",
        "Lagoon promenade attracts local families during weekend mornings."
      ],
      airbnbHolidayHomesPolicy: "Permitted; popular with visiting school parents and medical consultants.",
      guestParkingReality: "Dedicated covered resident parking with accessible surface visitor bays.",
      soundproofingRating: "STC 53 dB (Solid acoustic insulation; very peaceful natural surroundings).",
      elevatorPeakWaitReality: "< 25 seconds with 4 Schindler elevators.",
      hiddenOperatingCosts: "Standard Empower district cooling tariffs apply; very predictable operational overheads."
    },
    ru: {
      honestVerdict: "Одна из самых рациональных и надежных инвестиций в недвижимость Дубая. Собственное строительное подразделение Sobha полностью исключает субподрядчиков, обеспечивая образцовое немецкое качество и минимальные затраты на ремонт. Постоянный спрос со стороны семей учеников международных школ гарантирует околонулевой простой.",
      strengths: [
        "Безупречное качество строительства по немецким стандартам без привлечения сторонних субподрядчиков.",
        "Гарантированный платежеспособный арендный пул: родители учеников элитной North London Collegiate School.",
        "Умеренные эксплуатационные сборы (~19.5 AED/кв. фут), обеспечивающие чистую доходность от 7.6% годовых."
      ],
      pitfallsAndWeaknesses: [
        "Соседние кварталы MBR City все еще находятся в стадии активного строительства инфраструктуры.",
        "До ближайшей станции метро (Creek) требуется 7 минут на такси или шаттл-басе.",
        "Набережная лагуны привлекает семьи с детьми по утрам в выходные дни."
      ],
      airbnbHolidayHomesPolicy: "Разрешена; высокий спрос со стороны родителей школьников, экспатов и медицинских специалистов.",
      guestParkingReality: "Выделенный крытый паркинг для резидентов и открытые гостевые парковочные места.",
      soundproofingRating: "STC 53 дБ (Качественная звукоизоляция фасадов; тихий зеленый оазис вдали от магистралей).",
      elevatorPeakWaitReality: "< 25 секунд благодаря 4 скоростным лифтам Schindler.",
      hiddenOperatingCosts: "Стандартные тарифы Empower на районное охлаждение; крайне предсказуемые эксплуатационные расходы."
    },
    ar: {
      honestVerdict: "واحدة من أكثر الاستثمارات العقارية عقلانية وخلوّاً من العيوب في دبي. يضمن البناء الذاتي المتكامل لشركة شوبا دون مقاولين فرعيين جودة متناهية ومصاريف صيانة منخفضة. يضمن الطلب المستمر من عائلات المدارس الدولية المجاورة معدل إشغال شبه كامل.",
      strengths: [
        "جودة بناء لا تضاهى بمعايير ألمانية دون الاستعانة بأي مقاولين من الباطن.",
        "قاعدة مستأجرين مضمونة من أولياء أمور طلبة مدرسة نورث لندن كوليدجيت المجاورة.",
        "رسوم صيانة معتدلة جداً (~19.5 درهم/قدم²) تحقق عوائد صافية ممتازة تتجاوز 7.6%."
      ],
      pitfallsAndWeaknesses: [
        "لا تزال بعض القطاعات المجاورة في مدينة محمد بن راشد تشهد أعمال تطوير للبنية التحتية.",
        "يتطلب الوصول إلى المترو ركوب تاكسي أو حافلة لمدة 7 دقائق إلى محطة مترو الخور.",
        "يجذب ممشى البحيرة العائلات خلال فترات الصباح في عطلات نهاية الأسبوع."
      ],
      airbnbHolidayHomesPolicy: "مسموح به؛ يحظى بإقبال من أولياء الأمور الزائرين والاستشاريين الطبيين.",
      guestParkingReality: "مواقف مغطاة ومخصصة للسكان مع توفر مواقف سطحية رحبة للزوار.",
      soundproofingRating: "STC 53 ديسيبل (عزل صوتي متين وبيئة طبيعية هادئة ومريحة للغاية).",
      elevatorPeakWaitReality: "أقل من 25 ثانية مع 4 مصاعد حديثة وسريعة من شيندلر.",
      hiddenOperatingCosts: "تطبق تعرفة إمباور القياسية لتبريد المناطق؛ وتعتبر التكاليف التشغيلية متوقعة ومستقرة."
    },
    zh: {
      honestVerdict: "迪拜最理性、工程质量口碑最扎实的硬核资产之一。首创（Sobha）坚持由自家产业工人全流程直营建造，杜绝分包转包施工隐患，极大地保障了建筑耐久度并降低了后续维保成本。背靠顶级国际名校庞大的陪读家庭长租客群，常年近乎零空置率。",
      strengths: [
        "严苛对标德国工业标准的超凡建筑品质，全链条自主施工无第三方转包。",
        "紧邻北伦敦大学学院（NLCS）等顶级名校，坐拥高素质高净值家长长租生力军。",
        "物业费适中公道（约 19.5 AED/平方英尺），实际可稳定录得 7.6% 以上的优异净回报率。"
      ],
      pitfallsAndWeaknesses: [
        "美丹（MBR City）周边部分地块的整体市政交通配套目前仍处于逐步施工建设阶段。",
        "搭乘地铁出行需乘坐 7 分钟出租车或社区穿梭接驳巴士前往迪拜河地铁站（Creek）。",
        "人工水系泻湖滨水步道在周末上午会有较多周边家庭在此休闲散步。"
      ],
      airbnbHolidayHomesPolicy: "允许短租；特别受海外探校家长、跨国讲学教授与医疗顾问群体的青睐。",
      guestParkingReality: "配备专属室内业主停车位以及易于寻找的充裕地面访客专用车位。",
      soundproofingRating: "STC 53 分贝（高密闭性声学隔音屏障；环抱绿植公园，整体声环境极为清幽静谧）。",
      elevatorPeakWaitReality: "配置 4 部 Schindler 高速原厂电梯，平均候梯等待时间小于 25 秒。",
      hiddenOperatingCosts: "按标准 Empower 区域供冷资费结算，整体日常运营支出透明且高度可预期。"
    },
    de: {
      honestVerdict: "Eine der rationalsten und mangelfreiesten Immobilieninvestitionen in Dubai. Sobhas vollständiger Verzicht auf Subunternehmer garantiert deutsche Bauqualität und niedrige Instandhaltungskosten. Die hohe Nachfrage von Familien internationaler Schulen sichert nahezu Vollvermietung.",
      strengths: [
        "Unübertroffene deutsche Bauqualität durch vollständige In-House-Errichtung ohne Fremdfirmen.",
        "Gesicherter Mieterpool durch Eltern der benachbarten renommierten North London Collegiate School.",
        "Faire Servicegebühren (~19,5 AED/sq.ft) mit gesunder Nettorendite von über 7,6%."
      ],
      pitfallsAndWeaknesses: [
        "Umliegende MBR City Sektoren befinden sich teilweise noch in der Infrastrukturentwicklung.",
        "Metro-Anbindung erfordert 7 Minuten Taxifahrt zur Creek Metro Station.",
        "Die Lagunenpromenade zieht am Wochenende vormittags Familien an."
      ],
      airbnbHolidayHomesPolicy: "Erlaubt; beliebt bei Gasteltern, Medizinern und internationalen Beratern.",
      guestParkingReality: "Feste überdachte Anwohnerparkplätze und gut zugängliche Besucherparkplätze.",
      soundproofingRating: "STC 53 dB (Solide Schalldämmung; sehr friedliche, grüne Umgebung).",
      elevatorPeakWaitReality: "< 25 Sekunden mit 4 modernen Schindler-Aufzügen.",
      hiddenOperatingCosts: "Standard-Fernkältetarife von Empower; sehr transparente und planbare Betriebskosten."
    },
    fr: {
      honestVerdict: "L'un des investissements immobiliers les plus fiables et rigoureux de Dubaï. La construction 100 % intégrée de Sobha élimine les défauts de sous-traitance, assurant une durabilité remarquable et des charges d'entretien faibles. La forte demande des familles d'écoles internationales garantit une vacance locative minimale.",
      strengths: [
        "Qualité de construction aux normes allemandes sans recours à la sous-traitance.",
        "Bassin locatif captif issu des familles d'élèves de la prestigieuse North London Collegiate School.",
        "Charges modérées (~19,5 AED/pi²) offrant un rendement locatif net supérieur à 7,6 %."
      ],
      pitfallsAndWeaknesses: [
        "Les secteurs voisins de MBR City poursuivent le développement de leurs infrastructures.",
        "L'accès au métro nécessite 7 minutes en taxi ou navette jusqu'à la station Creek.",
        "La promenade du lagon est fréquentée par les familles le week-end en matinée."
      ],
      airbnbHolidayHomesPolicy: "Autorisé ; recherché par les parents d'élèves en visite et consultants.",
      guestParkingReality: "Stationnement résidentiel couvert dédié et places visiteurs en surface pratiques.",
      soundproofingRating: "STC 53 dB (Excellente isolation phonique ; cadre naturel particulièrement calme).",
      elevatorPeakWaitReality: "< 25 secondes grâce à 4 ascenseurs Schindler performants.",
      hiddenOperatingCosts: "Tarification de climatisation Empower standard ; frais d'exploitation très prévisibles."
    },
    it: {
      honestVerdict: "Uno degli investimenti più razionali ed esenti da difetti a Dubai. La costruzione interamente in-house di Sobha azzera le criticità dei subappalti, assicurando massima durabilità e spese di manutenzione minime. La domanda delle famiglie delle scuole internazionali garantisce uno sfitto prossimo allo zero.",
      strengths: [
        "Qualità costruttiva di livello tedesco senza alcun ricorso a subappaltatori terzi.",
        "Bacino di locatari garantito dai genitori degli allievi della North London Collegiate School.",
        "Spese condominiali contenute (~19,5 AED/sq.ft) per una solida redditività netta del 7,6%+."
      ],
      pitfallsAndWeaknesses: [
        "Alcuni settori limitrofi di MBR City sono tuttora interessati da lavori infrastrutturali.",
        "Il collegamento alla metropolitana richiede 7 minuti di taxi verso la stazione Creek Metro.",
        "La passeggiata della laguna attrae famiglie residenti nei fine settimana.",
      ],
      airbnbHolidayHomesPolicy: "Consentito; ideale per genitori in visita, medici e consulenti d'affari.",
      guestParkingReality: "Parcheggio residenti coperto e stalli dedicati agli ospiti in superficie ben accessibili.",
      soundproofingRating: "STC 53 dB (Solido isolamento acustico; contesto verde e rilassante).",
      elevatorPeakWaitReality: "< 25 secondi con 4 moderni ascensori Schindler.",
      hiddenOperatingCosts: "Tariffe standard del teleriscaldamento Empower; costi operativi estremamente prevedibili."
    },
    tr: {
      honestVerdict: "Dubai'deki en rasyonel ve kusursuz gayrimenkul yatırımlarından biri. Sobha'nın hiçbir taşeron kullanmadan tamamen kendi bünyesinde inşa etmesi, Alman standartlarında dayanıklılık ve düşük bakım masrafı sağlar. Bitişikteki uluslararası okul ailelerinin yüksek talebi sıfıra yakın boşluk oranını garanti eder.",
      strengths: [
        "Taşeron kullanılmadan gerçekleştirilen eşsiz Alman standartlarında inşaat kalitesi.",
        "Bitişikteki North London Collegiate School öğrenci velilerinden oluşan hazır kiracı profili.",
        "Yıllık %7.6'nın üzerinde net getiri sağlayan makul aidat bedelleri (~19.5 AED/sq.ft)."
      ],
      pitfallsAndWeaknesses: [
        "MBR City'nin çevre bölgelerinde altyapı geliştirme çalışmaları devam etmektedir.",
        "Metroya ulaşım için Creek Metro İstasyonu'na 7 dakikalık taksi yolculuğu gereklidir.",
        "Lagün kordonu hafta sonu sabah saatlerinde çevre ailelerin uğrak noktasıdır."
      ],
      airbnbHolidayHomesPolicy: "Serbesttir; şehri ziyaret eden okul velileri ve sağlık danışmanları tarafından çok talep görür.",
      guestParkingReality: "Tahsis edilmiş kapalı konut otoparkı ve zemin seviyesinde misafir park alanları.",
      soundproofingRating: "STC 53 dB (Güçlü akustik yalıtım; doğayla iç içe, huzurlu bir çevre).",
      elevatorPeakWaitReality: "4 adet yüksek hızlı Schindler asansör ile 25 saniyenin altında bekleme.",
      hiddenOperatingCosts: "Standart Empower bölge soğutma tarifesi uygulanır; işletme giderleri son derece şeffaf ve öngörülebilirdir."
    },
    hi: {
      honestVerdict: "दुबई में सबसे तर्कसंगत, दोष-मुक्त अचल संपत्ति निवेशों में से एक। सोभा का पूर्ण इन-हाउस निर्माण उप-ठेकेदार की खामियों को समाप्त करता है, जिससे उच्च स्थायित्व और कम रखरखाव लागत सुनिश्चित होती है। अंतरराष्ट्रीय स्कूल के परिवारों से भारी किरायेदार मांग लगभग शून्य रिक्ति की गारंटी देती है।",
      strengths: [
        "शून्य ठेकेदार उप-ठेकेदारी के साथ बेजोड़ जर्मन-मानक निर्माण गुणवत्ता।",
        "निकटवर्ती नॉर्थ लंदन कॉलेजिएट स्कूल के छात्रों के माता-पिता से निश्चित किरायेदार पूल।",
        "उचित सेवा शुल्क (~19.5 AED/वर्ग फुट) जिससे स्वस्थ 7.6%+ शुद्ध रिटर्न मिलता है।"
      ],
      pitfallsAndWeaknesses: [
        "आसपास के एमबीआर सिटी क्षेत्रों में अभी भी बुनियादी ढांचे का निर्माण चल रहा है।",
        "मेट्रो पहुंच के लिए क्रीक मेट्रो स्टेशन तक 7 मिनट की टैक्सी या फीडर बस की आवश्यकता होती है।",
        "लैगून सैरगाह सप्ताहांत की सुबह स्थानीय परिवारों को आकर्षित करता है।"
      ],
      airbnbHolidayHomesPolicy: "अनुमति; स्कूल के माता-पिता और चिकित्सा सलाहकारों के बीच लोकप्रिय।",
      guestParkingReality: "सुलभ सतह आगंतुक बे के साथ समर्पित कवर निवासी पार्किंग।",
      soundproofingRating: "एसटीसी 53 डीबी (ठोस ध्वनिक इन्सुलेशन; बहुत शांतिपूर्ण प्राकृतिक परिवेश)।",
      elevatorPeakWaitReality: "4 शिंडलर लिफ्टों के साथ < 25 सेकंड।",
      hiddenOperatingCosts: "मानक एम्पावर डिस्ट्रिक्ट कूलिंग टैरिफ लागू होते हैं; बहुत अनुमानित परिचालन खर्च।"
    },
    ur: {
      honestVerdict: "دبئی میں سب سے حقیقت پسندانہ اور نقائص سے پاک پراپرٹی سرمایہ کاری۔ شوبھا کی اپنی تعمیراتی ٹیم بغیر کسی سب کنٹریکٹر کے جرمن معیار کی مضبوطی اور کم مینٹیننس اخراجات کو یقینی بناتی ہے۔ قریبی انٹرنیشنل اسکول کے خاندانوں کی جانب سے کرائے کی زبردست مانگ خالی رہنے کے امکان کو ختم کر دیتی ہے۔",
      strengths: [
        "بغیر کسی سب کنٹریکٹر کے مکمل طور پر جرمن معیار کی شاندار تعمیر۔",
        "نارتھ لندن کالجیٹ اسکول کے طلباء کے والدین کی صورت میں مستقل اور قابل اعتماد کرایہ دار۔",
        "انتہائی مناسب سروس چارجز (~19.5 درہم فی مربع فٹ) جو 7.6 فیصد سے زائد خالص منافع دیتے ہیں۔"
      ],
      pitfallsAndWeaknesses: [
        "ایم بی آر سٹی کے قریبی سیکٹرز میں ابھی کچھ بنیادی ڈھانچے کی تعمیر جاری ہے۔",
        "میٹرو تک جانے کے لیے کریک میٹرو اسٹیشن تک 7 منٹ کی ٹیکسی یا شٹل بس درکار ہوتی ہے۔",
        "ہفتے کی صبح جھیل کے کنارے بنے پرومینیڈ پر خاندانوں کی کچھ چہل پہل رہتی ہے۔"
      ],
      airbnbHolidayHomesPolicy: "اجازت ہے؛ اسکول کے وزٹنگ والدین اور کنسلٹنٹس میں کافی مقبول ہے۔",
      guestParkingReality: "رہائشیوں کے لیے مخصوص کورڈ پارکنگ اور مہمانوں کے لیے کھلی پارکنگ کی وافر سہولت۔",
      soundproofingRating: "STC 53 dB (بہترین صوتی تنصیبات؛ قدرتی اور مکمل پرامن ماحول)۔",
      elevatorPeakWaitReality: "شینڈلر کے 4 لفٹوں کے ساتھ 25 سیکنڈ سے بھی کم۔",
      hiddenOperatingCosts: "ایم پاور کے عام ضلعی چارجز لاگو ہوتے ہیں؛ ماہانہ اخراجات مکمل طور پر شفاف اور متوقع ہیں۔"
    }
  },
  "creek-waters": {
    en: {
      honestVerdict: "The architectural peak of Creek Island. Significantly refined floorplans and balcony proportions compared to early Creek developments, with a world-class cantilevered infinity pool. An ideal balance of capital appreciation and blue-chip tenant demand in Dubai's premier car-free island masterplan.",
      strengths: [
        "Unbeatable Creek Island waterfront position with permanent skyline panoramas.",
        "Car-free island urban design: steps from Creek Marina, yacht club, and Central Park.",
        "Emaar masterplan execution with strong liquidity and long-term resale security."
      ],
      pitfallsAndWeaknesses: [
        "Broad Dubai Creek Harbour masterplan remains under ongoing construction through 2028.",
        "Driving to Downtown Dubai requires crossing the Ras Al Khor corridor (12-15 min).",
        "Empower district cooling charges are billed based on consumption plus quarterly capacity tariffs."
      ],
      airbnbHolidayHomesPolicy: "Permitted; high demand from European tourists seeking waterfront living near Downtown.",
      guestParkingReality: "Dedicated podium resident bays with ample Creek Marina public parking garages.",
      soundproofingRating: "STC 54 dB (Peaceful maritime acoustic environment; zero highway noise).",
      elevatorPeakWaitReality: "< 30 seconds with 6 high-speed Otis elevators.",
      hiddenOperatingCosts: "Standard Empower cooling demand charges (~1,400 AED/quarter base charge)."
    },
    ru: {
      honestVerdict: "Архитектурная вершина острова Creek Island. Значительно улучшенные планировки и пропорции балконов по сравнению с первыми очередями Creek, с видовым консольным бассейном мирового уровня. Идеальный баланс роста капитала и спроса со стороны респектабельных арендаторов в флагманском пешеходном районе Дубая.",
      strengths: [
        "Непревзойденное расположение на первой линии набережной острова с вечной панорамой на горизонт Дубая.",
        "Пешеходная урбанистическая концепция острова: в нескольких шагах от марины для яхт, яхт-клуба и Central Park.",
        "Безупречная реализация мастер-плана от Emaar с высокой ликвидностью и защитой капитала."
      ],
      pitfallsAndWeaknesses: [
        "Генеральный план Dubai Creek Harbour продолжает развиваться и застраиваться до 2028 года.",
        "Поездка на автомобиле до Downtown Dubai занимает 12-15 минут через транспортный коридор Ras Al Khor.",
        "Счета за охлаждение Empower формируются из фактического расхода плюс обязательной платы за мощность."
      ],
      airbnbHolidayHomesPolicy: "Разрешена; высокий спрос со стороны европейских туристов, ценящих курортный образ жизни у воды.",
      guestParkingReality: "Выделенные места на паркинге подиума для жильцов и просторные общественные паркинги у Creek Marina.",
      soundproofingRating: "STC 54 дБ (Умиротворяющая морская акустическая среда; полное отсутствие шума автострад).",
      elevatorPeakWaitReality: "< 30 секунд благодаря 6 скоростным лифтам Otis.",
      hiddenOperatingCosts: "Стандартные квартальные платежи за мощность Empower (~1,400 AED/квартал)."
    },
    ar: {
      honestVerdict: "الذروة المعمارية لجزيرة كريك آيلاند. تتميز بمخططات طوابق وشرفات متطورة ومدروسة للغاية مقارنة بالمراحل الأولى، مع مسبح كابولي لا متناهي عالمي المستوى. يمثل توازناً مثالياً بين نمو رأس المال والطلب الإيجاري النخبوي في أرقى بيئة جزرية خالية من السيارات في دبي.",
      strengths: [
        "موقع مائي فريد في جزيرة الخور مع إطلالات أفقية دائمة لا يمكن حجبها على داون تاون دبي.",
        "تصميم حضري للمشاة خالٍ من حركة السيارات: خطوات من مارينا الخور ونادي اليخوت والحديقة المركزية.",
        "تنفيذ استثنائي لمخطط إعمار يضمن سيولة إعادة بيع سريعة وأماناً استثمارياً طويل الأمد."
      ],
      pitfallsAndWeaknesses: [
        "لا يزال المخطط الرئيسي العام لميناء خور دبي يشهد أعمال تطوير مستمرة حتى عام 2028.",
        "تتطلب القيادة إلى وسط مدينة دبي عبور محور رأس الخور (12-15 دقيقة).",
        "تُحتسب فواتير تبريد إمباور بناءً على الاستهلاك الفعلي مضافاً إليها تعرفة السعة الفصلية."
      ],
      airbnbHolidayHomesPolicy: "مسموح به؛ طلب مرتفع من السياح الأوروبيين الراغبين في حياة ساحلية راقية قريبة من الداون تاون.",
      guestParkingReality: "مواقف مخصصة للسكان في البوديوم مع وفرة مواقف السيارات العامة في مارينا الخور.",
      soundproofingRating: "STC 54 ديسيبل (بيئة صوتية بحرية هادئة ومنعزلة تماماً عن ضوضاء الطرق السريعة).",
      elevatorPeakWaitReality: "أقل من 30 ثانية مع 6 مصاعد أوتيس ذكية فائقة السرعة.",
      hiddenOperatingCosts: "رسوم سعة التبريد الربع سنوية لشركة إمباور (~1400 درهم كرسوم أساسية كل ربع سنة)."
    },
    zh: {
      honestVerdict: "迪拜云溪岛（Creek Island）的当代建筑巅峰之作。相较于云溪港早期期房，其户型开间与景观阳台进深比例得到了极大的优化迭代，并配有极富视觉冲击力的悬挑高空无边际泳池。是迪拜无车岛慢行城市规划中兼具长远资本增值与蓝筹租客吸引力的典范资产。",
      strengths: [
        "独享云溪岛一线水运滨水绝佳席位，永久无遮挡纵览哈利法塔璀璨天际线。",
        "绿色低碳无车化岛屿规划：步行数步即达游艇码头（Creek Marina）、游艇俱乐部与中央中央公园绿地。",
        "伊玛尔（Emaar）旗舰级造城执行力，资产二手转售流动性高，财富避险属性突出。"
      ],
      pitfallsAndWeaknesses: [
        "迪拜云溪港（Dubai Creek Harbour）整体宏大宏伟蓝图预计将持续施工扩建至 2028 年前后。",
        "驾车前往市中心哈利法塔商圈需经由 Ras Al Khor 快速走廊（车程约 12-15 分钟）。",
        "Empower 集中供冷系统按实际计量电量外加每季度固定的基础容量备用金双轨计费。"
      ],
      airbnbHolidayHomesPolicy: "完全允许短租民宿；极受青睐于水岸静谧度假同时又贴近市中心商业配套的欧美旅客群体欢迎。",
      guestParkingReality: "群楼裙房专属业主车位，并配有可无缝连通的云溪游艇码头大型公共地下停车楼。",
      soundproofingRating: "STC 54 分贝（舒缓宁谧的水域声学环境；室内零高速干道噪音干扰）。",
      elevatorPeakWaitReality: "配备 6 部 Otis 原厂高速电梯，平均候梯时间小于 30 秒。",
      hiddenOperatingCosts: "常规 Empower 集中供冷容量基本费（每季度约 1,400 迪拉姆固定支出）。"
    },
    de: {
      honestVerdict: "Der architektonische Höhepunkt von Creek Island. Deutlich optimierte Grundrisse und Balkonproportionen im Vergleich zu früheren Creek-Bauten, mit spektakulärem freitragendem Infinity-Pool. Eine perfekte Balance aus Wertsteigerung und erstklassiger Mieter-Nachfrage auf Dubais autofreier Vorzeigeinsel.",
      strengths: [
        "Unschlagbare Wasserlage auf Creek Island mit dauerhaftem Skyline-Blick.",
        "Autofreies Inselkonzept: wenige Schritte zu Creek Marina, Yachtclub und Central Park.",
        "Emaar-Masterplan-Ausführung mit exzellenter Wiederverkaufsliquidität und Sicherheit."
      ],
      pitfallsAndWeaknesses: [
        "Der umfassende Dubai Creek Harbour Masterplan wird bis 2028 weiter ausgebaut.",
        "Die Fahrt nach Downtown Dubai dauert über den Ras Al Khor Korridor ca. 12-15 Minuten.",
        "Empower-Kühlgebühren setzen sich aus Verbrauch und vierteljährlichen Kapazitätstarifen zusammen."
      ],
      airbnbHolidayHomesPolicy: "Erlaubt; sehr gefragt bei europäischen Urlaubern, die maritimes Wohnen nahe Downtown schätzen.",
      guestParkingReality: "Eigene Podiumsparkplätze für Bewohner und ausreichend öffentliche Parkhäuser an der Creek Marina.",
      soundproofingRating: "STC 54 dB (Friedliche maritime Akustik; keinerlei Autobahn- oder Schnellstraßenlärm).",
      elevatorPeakWaitReality: "< 30 Sekunden mit 6 Hochgeschwindigkeitsaufzügen von Otis.",
      hiddenOperatingCosts: "Standardmäßige Empower-Fernkälte-Kapazitätsgebühr (~1.400 AED/Quartal Grundgebühr)."
    },
    fr: {
      honestVerdict: "L'apogée architectural de Creek Island. Des plans et des proportions de terrasses nettement plus aboutis que les premiers développements de Creek, avec une piscine à débordement suspendue d'exception. Un équilibre parfait entre valorisation du capital et demande de locataires premium au cœur d'une île piétonne.",
      strengths: [
        "Emplacement front de mer inégalé sur Creek Island avec vues dégagées sur la skyline.",
        "Conception urbaine sans voiture : à deux pas de la marina de Creek, du yacht-club et de Central Park.",
        "Excellence d'exécution d'Emaar garantissant une forte liquidité à la revente."
      ],
      pitfallsAndWeaknesses: [
        "Le masterplan global de Dubai Creek Harbour demeure en développement actif jusqu'en 2028.",
        "Le trajet en voiture vers Downtown Dubai nécessite de traverser Ras Al Khor (12-15 min).",
        "La climatisation Empower est facturée à la consommation plus une redevance trimestrielle de capacité."
      ],
      airbnbHolidayHomesPolicy: "Autorisé ; plébiscité par les touristes européens en quête d'art de vivre au bord de l'eau.",
      guestParkingReality: "Emplacements résidents en podium et vastes parkings publics à la marina de Creek.",
      soundproofingRating: "STC 54 dB (Ambiance maritime paisible ; absence totale de nuisances routières).",
      elevatorPeakWaitReality: "< 30 secondes grâce à 6 ascenseurs Otis ultra-rapides.",
      hiddenOperatingCosts: "Frais de capacité Empower standards (environ 1 400 AED/trimestre de base)."
    },
    it: {
      honestVerdict: "Il vertice architettonico di Creek Island. Planimetrie e proporzioni dei terrazzi notevolmente perfezionate rispetto alle prime fasi di Creek, arricchite da una spettacolare infinity pool a sbalzo. L'equilibrio perfetto tra rivalutazione del capitale e solidità della domanda locativa.",
      strengths: [
        "Posizione fronte mare impareggiabile a Creek Island con panorama permanente sulla skyline.",
        "Design urbano car-free: a pochi passi dalla Creek Marina, dallo yacht club e dal Central Park.",
        "Realizzazione del masterplan Emaar con alta liquidità e sicurezza di rivendita nel tempo."
      ],
      pitfallsAndWeaknesses: [
        "Il grande piano di sviluppo di Dubai Creek Harbour resterà in espansione fino al 2028.",
        "Raggiungere Downtown Dubai in auto richiede di percorrere il corridoio di Ras Al Khor (12-15 min).",
        "La climatizzazione Empower prevede addebito a consumo oltre alla tariffa trimestrale di capacità."
      ],
      airbnbHolidayHomesPolicy: "Consentito; molto richiesto da turisti internazionali che cercano una residenza marina vicina a Downtown.",
      guestParkingReality: "Posti auto riservati nel podio e ampi garage pubblici nei pressi della Creek Marina.",
      soundproofingRating: "STC 54 dB (Contesto acustico marittimo rilassante; nessun rumore autostradale).",
      elevatorPeakWaitReality: "< 30 secondi con 6 ascensori Otis ad alta velocità.",
      hiddenOperatingCosts: "Costi di capacità fissa Empower (circa 1.400 AED/trimestre di quota base)."
    },
    tr: {
      honestVerdict: "Creek Island'ın mimari zirvesi. Erken dönem Creek projelerine kıyasla belirgin şekilde geliştirilmiş kat planları ve balkon oranları ile dünya standartlarında konsol sonsuzluk havuzuna sahiptir. Dubai'nin araç trafiğinden arındırılmış ada master planında sermaye artışı ve elit kiracı talebinin ideal dengesidir.",
      strengths: [
        "Creek Island su kenarında, kalıcı silüet panoramasına sahip eşsiz ön cephe konumu.",
        "Araçsız ada şehircilik tasarımı: Creek Marina, yat kulübü ve Central Park'a birkaç adım mesafede.",
        "Güçlü yeniden satış likiditesi ve uzun vadeli sermaye güvencesi sunan Emaar kalitesi."
      ],
      pitfallsAndWeaknesses: [
        "Dubai Creek Harbour ana master planı 2028 yılına kadar aktif inşaat ve gelişim sürecindedir.",
        "Downtown Dubai'ye araçla sürüş Ras Al Khor koridoru üzerinden yaklaşık 12-15 dakika sürer.",
        "Empower bölge soğutma bedelleri gerçek tüketime ek olarak üç aylık sabit kapasite tarifesini içerir."
      ],
      airbnbHolidayHomesPolicy: "Serbesttir; Downtown'a yakın sahil yaşamı arayan Avrupalı turistlerden çok yüksek talep görür.",
      guestParkingReality: "Podyumda ayrılmış sakin otopark alanları ve Creek Marina'da geniş halka açık otoparklar.",
      soundproofingRating: "STC 54 dB (Huzurlu deniz kenarı akustik ortamı; otoyol gürültüsü tamamen sıfırdır).",
      elevatorPeakWaitReality: "6 adet yüksek hızlı Otis asansör ile 30 saniyenin altında bekleme.",
      hiddenOperatingCosts: "Standart Empower soğutma kapasite ücretleri (~1.400 AED/çeyrek baz bedeli)."
    },
    hi: {
      honestVerdict: "क्रीक द्वीप का वास्तुशिल्प शिखर। विश्व स्तरीय कैंटिलीवर इन्फिनिटी पूल के साथ शुरुआती क्रीक विकास की तुलना में काफी परिष्कृत फ्लोरप्लान और बालकनी अनुपात। दुबई के प्रमुख कार-मुक्त द्वीप मास्टरप्लान में पूंजीगत प्रशंसा और ब्लू-चिप किरायेदार मांग का एक आदर्श संतुलन।",
      strengths: [
        "स्थायी स्काईलाइन पैनोरमा के साथ अपराजेय क्रीक द्वीप वाटरफ्रंट स्थिति।",
        "कार-मुक्त द्वीप शहरी डिजाइन: क्रीक मरीना, यॉट क्लब और सेंट्रल पार्क से कुछ कदम दूर।",
        "मजबूत तरलता और दीर्घकालिक पुनर्विक्रय सुरक्षा के साथ एम्मार मास्टरप्लान निष्पादन।"
      ],
      pitfallsAndWeaknesses: [
        "व्यापक दुबई क्रीक हार्बर मास्टरप्लान 2028 तक निर्माणाधीन है।",
        "डाउनटाउन दुबई तक गाड़ी चलाने के लिए रास अल खोर गलियारे (12-15 मिनट) को पार करना पड़ता है।",
        "एम्पावर डिस्ट्रिक्ट कूलिंग शुल्क खपत प्लस त्रैमासिक क्षमता टैरिफ के आधार पर बिल किया जाता है।"
      ],
      airbnbHolidayHomesPolicy: "अनुमति; डाउनटाउन के पास वाटरफ्रंट लिविंग की मांग करने वाले पर्यटकों की उच्च मांग।",
      guestParkingReality: "पर्याप्त क्रीक मरीना सार्वजनिक पार्किंग गैरेज के साथ समर्पित पोडियम निवासी बे।",
      soundproofingRating: "एसटीसी 54 डीबी (शांतिपूर्ण समुद्री ध्वनिक वातावरण; शून्य राजमार्ग शोर)।",
      elevatorPeakWaitReality: "6 हाई-स्पीड ओटिस लिफ्ट के साथ < 30 सेकंड।",
      hiddenOperatingCosts: "मानक एम्पावर कूलिंग मांग शुल्क (~1,400 AED/तिमाही आधार शुल्क)।"
    },
    ur: {
      honestVerdict: "کریک آئی لینڈ کا عمارتی شاہکار۔ ابتدائی فیزز کے مقابلے میں کشادہ فلور پلانز اور معیاری بالکونیاں، مع ورلڈ کلاس کینٹی لیورڈ انفینٹی پول۔ دبئی کے کار فری آئی لینڈ ماسٹر پلان میں منافع اور بہترین کرائے داروں کے لیے ایک مثالی سرمایہ کاری۔",
      strengths: [
        "کریک آئی لینڈ پر دلکش واٹر فرنٹ پوزیشن جہاں سے دبئی اسکائی لائن کا کبھی نہ رکنے والا نظارہ ملتا ہے۔",
        "گاڑیوں کے بغیر پرسکون پیدل آئی لینڈ: کریک مرینا، یاٹ کلب اور سینٹرل پارک تک چند قدموں کا فاصلہ۔",
        "اعمار کی شاندار تعمیر جو آسان ری سیل اور طویل مدتی سرمایہ کاری کے تحفظ کی ضامن ہے۔"
      ],
      pitfallsAndWeaknesses: [
        "دبئی کریک ہاربر کا بڑا ماسٹر پلان 2028 تک مرحلہ وار تکمیل کے عمل میں ہے۔",
        "ڈاؤن ٹاؤن دبئی جانے کے لیے راس الخور شاہراہ سے گزرنا پڑتا ہے (تقریباً 12 تا 15 منٹ)۔",
        "ایم پاور کے کولنگ چارجز استعمال اور سہ ماہی کیپیسٹی ٹیرف کی بنیاد پر بل کیے جاتے ہیں۔"
      ],
      airbnbHolidayHomesPolicy: "اجازت ہے؛ ڈاؤن ٹاؤن کے قریب ساحلی رہائش پسند کرنے والے بین الاقوامی سیاحوں میں مقبول۔",
      guestParkingReality: "پوڈیم میں مخصوص رہائشی پارکنگ کے ساتھ کریک مرینا کی کشادہ پبلک پارکنگ۔",
      soundproofingRating: "STC 54 dB (سمندر کی پرسکون فضا؛ ہائی وے اور ٹریفک کا شور بالکل صفر)۔",
      elevatorPeakWaitReality: "اوٹیس کے 6 تیز رفتار لفٹوں کے ساتھ 30 سیکنڈ سے کم۔",
      hiddenOperatingCosts: "ایم پاور کولنگ کے عام چارجز (تقریباً 1,400 درہم فی سہ ماہی بیس چارج)۔"
    }
  }
};
