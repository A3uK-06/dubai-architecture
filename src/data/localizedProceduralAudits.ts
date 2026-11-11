import { LanguageCode } from "@/i18n/languages";
import { ExplosiveBuildingAudit } from "./explosiveAudits";
import { Building } from "./buildings";

interface ProceduralParams {
  elevation: number;
  floodScore: number;
  isStarchitect: boolean;
  starchitectPremium: number;
  apexSway: number;
  goldenTopFloor: number;
  isSupertall: boolean;
  ownerRatio: number;
  socialScore: number;
  isHotelOrMixed: boolean;
  soundDb: number;
}

export function buildLocalizedProceduralAudit(
  building: Building,
  lang: LanguageCode,
  params: ProceduralParams
): ExplosiveBuildingAudit {
  const {
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
  } = params;

  switch (lang) {
    case "ru":
      return {
        floodResilience: {
          score: floodScore,
          elevationMeters: elevation,
          status: elevation >= 4.0 ? "Подиумная защита от затопления (Высокий уровень)" : "Береговой дренажный контур",
          humanVerdict: elevation >= 4.0 
            ? `Паркинг расположен в стилобате на отметке +${elevation} м над уровнем моря. Автомобили на верхних ярусах подиума полностью защищены от подтоплений.`
            : `Въезд в паркинг находится на отметке +${elevation} м. Для владельцев спорткаров с низким клиренсом рекомендуется выбирать парковочные места не ниже 2-го уровня.`,
          substationLevel: elevation >= 4.0 ? "Подиумные технические этажи (Безопасно)" : "Цокольный ярус с гидрозатворами",
          stormProtection: "Автоматические откачивающие насосы и обратные клапаны ливневой канализации",
          engineeringBasis: `Топографическая привязка участка: +${elevation} м MSL.`
        },
        starchitect: {
          tier: isStarchitect ? "Signature Starchitect Asset (Именная архитектура)" : "Prime Architectural Asset (Качественный фонд)",
          architectBrandPremiumPercent: starchitectPremium,
          humanVerdict: isStarchitect 
            ? `Проект от признанного бюро (${building.architectFirm || building.architect}). Силуэт здания узнаваем на открытках Дубая, что сохраняет высокую ликвидность при перепродаже через 15–20 лет.`
            : `Качественная коммерческая архитектура. Стоимость формируется локацией (${building.district}) и качеством отделки, без завышенной переплаты за имя архитектора.`,
          collectorClassification: isStarchitect ? "Высокая архитектурная капитализация" : "Функциональный инвестиционный класс",
          engineeringBasis: `Автор проекта: ${building.architect}. Инженерный надзор международного уровня.`
        },
        windSway: {
          swayDeflectionMm: apexSway,
          dampingSystem: isSupertall ? "Аутригерные пояса и массивное монолитное ядро" : "Монолитная рамно-связевая система",
          humanVerdict: isSupertall
            ? `На этажах выше 60-го при зимних штормовых ветрах возможно едва заметное движение подвесных светильников. Для людей с чувствительным вестибулярным аппаратом рекомендуются этажи до ${goldenTopFloor}-го.`
            : `Здание обладает высокой жесткостью каркаса. Колебания от ветра находятся ниже порога человеческой чувствительности на всех жилых этажах.`,
          goldenFloors: `Этажи с 10 по ${goldenTopFloor} (Зона максимального акустического и статического комфорта)`,
          engineeringBasis: `Расчетный прогиб вершины каркаса: ~${apexSway} мм при нормативном ветре 45 м/с.`
        },
        socialFilter: {
          privacyScore: socialScore,
          ownerOccupierPercent: ownerRatio,
          holidayHomesPolicy: isHotelOrMixed 
            ? "Разрешена краткосрочная аренда (Высокий трафик гостей)"
            : "Регулируется ТСЖ (Преимущественно долгосрочные резиденты)",
          humanVerdict: isHotelOrMixed
            ? "В лобби и у бассейна регулярный поток туристов с чемоданами. Идеально для инвестора с посуточной сдачей под высокий доход, но шумно для семей с детьми."
            : `Более ${ownerRatio}% жильцов — постоянные собственники. Спокойная приватная атмосфера, вежливые постоянные соседи и отсутствие шумных туристических вечеринок.`,
          securityLevel: "Электронный доступ по картам резидента и консьерж-контроль 24/7",
          engineeringBasis: `Статус зонирования DET и внутренний регламент ТСЖ башни.`
        },
        contractorAutopsy: {
          mainContractor: building.mainContractor || "Крупный сертифицированный генподрядчик ОАЭ",
          soundproofingRatingDb: soundDb,
          humanVerdict: soundDb >= 54 
            ? "Отличная звукоизоляция: межквартирные стены обеспечивают тишину, звуки шагов и сантехники соседей не проникают в жилые комнаты."
            : "Стандартная межквартирная звукоизоляция. В тихие ночные часы возможна частичная слышимость мощного напора воды в стояках соседей.",
          pipelineQuality: "Многослойные шумопоглощающие полипропиленовые стояки с виброкомпенсаторами",
          engineeringBasis: `Расчетный индекс изоляции воздушного шума: ~${soundDb} дБ (ASTM E90).`
        },
        livingVerdict: {
          independentVerdictSummary: `Сбалансированный объект в ${building.district} с подтвержденной доходностью ${building.investmentYield} и надежными конструктивными показателями.`,
          strengths: [
            `Престижная локация в ${building.district} с развитой инфраструктурой`,
            `Надежный конструктив (${building.structuralSystem}) с расчетной устойчивостью`,
            isStarchitect ? `Узнаваемый авторский силуэт от ${building.architect}` : `Высокая функциональная ликвидность планировок`
          ],
          pitfalls: [
            isHotelOrMixed ? "Высокая сменяемость гостей из-за популярности краткосрочной аренды" : "Ежегодные сервисные сборы требуют предварительного учета в доходности",
            isSupertall ? `На самых верхних этажах в шторм лифты могут кратковременно снижать скорость` : "В часы пик возможна загрузка районных выездов"
          ],
          idealFor: isHotelOrMixed 
            ? "Инвесторам под посуточную аренду (Holiday Homes) с целью максимизации арендного потока (ROI 8%+)."
            : "Семьям и постоянным резидентам, ценящим стабильность, приватность и комфорт повседневной жизни.",
          notRecommendedFor: isHotelOrMixed
            ? "Покупателям, ищущим тихий уединенный закрытый клуб без посторонних людей."
            : "Инвесторам, рассчитывающим на бесконтрольную агрессивную субаренду туристам."
        }
      };

    case "ar":
      return {
        floodResilience: {
          score: floodScore,
          elevationMeters: elevation,
          status: elevation >= 4.0 ? "حماية البوديوم المرتفع من السيول (مستوى عالٍ)" : "شبكة تصريف ساحلية محيطية",
          humanVerdict: elevation >= 4.0 
            ? `مواقف السيارات تقع داخل البوديوم المرتفع على منسوب +${elevation}م فوق سطح البحر، مما يضمن حماية تامة للسيارات من أي تجمع للمياه.`
            : `منسوب مدخل السيارات يقع على ارتفاع +${elevation}م عن سطح البحر. لأصحاب السيارات الرياضية فائقة الانخفاض يُنصح بالاصطفاف في الطابق الثاني أو أعلى.`,
          substationLevel: elevation >= 4.0 ? "طوابق الخدمات في البوديوم (آمنة تماماً)" : "طابق ميزانين مع حواجز مائية",
          stormProtection: "مضخات سحب أوتوماتيكية عالية القدرة وصمامات لمنع الارتداد",
          engineeringBasis: `المنسوب الطبوغرافي للأرض: +${elevation}م فوق سطح البحر.`
        },
        starchitect: {
          tier: isStarchitect ? "أصل معماري يحمل توقيعاً عالمياً" : "عقار استثماري من الفئة الممتازة",
          architectBrandPremiumPercent: starchitectPremium,
          humanVerdict: isStarchitect 
            ? `تصميم من مكتب هندسي شهير (${building.architectFirm || building.architect}). واجهة مميزة تحفظ القيمة وسهولة إعادة البيع بعد 15–20 عاماً.`
            : `هندسة معمارية راقية تعتمد على الموقع المميز (${building.district}) وجودة التنفيذ دون كلفة إضافية لاسم المعماري.`,
          collectorClassification: isStarchitect ? "أصل معماري ذو قيمة علامة تجارية عالية" : "فئة استثمارية تشغيلية متميزة",
          engineeringBasis: `تصميم: ${building.architect} مع إشراف هندسي عالمي.`
        },
        windSway: {
          swayDeflectionMm: apexSway,
          dampingSystem: isSupertall ? "أحزمة كابولية ونواة خرسانية مدعمة" : "إطار خرساني مسلح بجدران قص متينة",
          humanVerdict: isSupertall
            ? `في الطوابق فوق الـ 60 قد تُلاحظ حركة خفيفة لثريات الإنارة أثناء العواصف الشتوية. يُنصح أصحاب الحساسية لاختيار طوابق أدنى من ${goldenTopFloor}.`
            : `يتمتع المبنى بصلابة إنشائية ممتازة، وتبقى حركة الرياح دون أي إحساس بشري في كافة الطوابق السكنية.`,
          goldenFloors: `الطوابق من 10 إلى ${goldenTopFloor} (منطقة الراحة السكونية والصوتية المثالية)`,
          engineeringBasis: `أقصى إزاحة لقمة البرج: ~${apexSway} ملم عند سرعة رياح تصميمية 45 م/ث.`
        },
        socialFilter: {
          privacyScore: socialScore,
          ownerOccupierPercent: ownerRatio,
          holidayHomesPolicy: isHotelOrMixed 
            ? "الإيجار قصير الأجل متاح (حركة نزلاء نشطة)"
            : "منظم بلائحة الملاك (أغلبية ساحقة من السكان الدائمين)",
          humanVerdict: isHotelOrMixed
            ? "حركة نشطة للحقائب والسياح في الردهة ومرافق المسبح. مناسب جداً للمستثمرين لتحقيق أعلى عائد يومي، ولكنه أقل هدوءاً للعائلات."
            : `أكثر من ${ownerRatio}% من الوحدات يشغلها ملاك دائمون. بيئة سكنية راقية وهادئة تخلو من صخب الحفلات العشوائية.`,
          securityLevel: "دخول إلكتروني ببطاقات ذكية وحراسة أمنية 24/7",
          engineeringBasis: `وفق لوائح دائرة السياحة DET ونظام اتحاد الملاك المسجل.`
        },
        contractorAutopsy: {
          mainContractor: building.mainContractor || "مقاول رئيسي معتمد فئة أولى في الإمارات",
          soundproofingRatingDb: soundDb,
          humanVerdict: soundDb >= 54 
            ? "عزل صوتي فائق: جدران فاصلة ممتازة تعزل أصوات الأقدام والسباكة تماماً عن غرف المعيشة."
            : "عزل صوتي سكني قياسي. في أوقات الليل الهادئة قد يُسمع تدفق المياه القوي في بعض مواسير الصرف.",
          pipelineQuality: "أنابيب بولي بروبيلين متعددة الطبقات لامتصاص الضوضاء مع موانع اهتزاز",
          engineeringBasis: `معامل عزل الصوت الحائطي: ~${soundDb} ديسيبل (ASTM E90).`
        },
        livingVerdict: {
          independentVerdictSummary: `أصل عقاري متوازن في ${building.district} بعائد استثماري متوقع ${building.investmentYield} ومؤشرات إنشائية قوية.`,
          strengths: [
            `موقع استراتيجي في قلب ${building.district} مع قرب كامل من كافة الخدمات`,
            `هيكل إنشائي صلب ومتين (${building.structuralSystem}) يدوم لعقود`,
            isStarchitect ? `بصمة معمارية أيقونية من تصميم ${building.architect}` : `كفاءة تخطيط داخلي واستغلال مساحات عالي`
          ],
          pitfalls: [
            isHotelOrMixed ? "حركة نزلاء أعلى في المداخل بسبب نشاط التأجير السياحي" : "رسوم الصيانة السنوية تتطلب احتساباً دقيقاً في صافي العائد",
            isSupertall ? "قد تهدأ سرعة المصاعد جزئياً لفترات وجيزة أثناء العواصف الشديدة" : "احتمال ازدحام مروري عند مخارج المنطقة في ساعات الذروة"
          ],
          idealFor: isHotelOrMixed 
            ? "المستثمرين الراغبين في تعظيم العائد الإيجاري (ROI 8%+) عبر بيوت العطلات اليومية."
            : "العائلات والمقيمين الدائمين الباحثين عن الهدوء والخصوصية ومجتمع سكني متجانس.",
          notRecommendedFor: isHotelOrMixed
            ? "الباحثين عن مجمع مغلق فائق الهدوء بلا أي حركة سياحية."
            : "المستثمرين الراغبين في تشغيل تأجير سياحي مكثف في برج يغلب عليه الملاك الدائمون."
        }
      };

    case "zh":
      return {
        floodResilience: {
          score: floodScore,
          elevationMeters: elevation,
          status: elevation >= 4.0 ? "高位裙楼防汛屏障（高安全等级）" : "滨海周边排水防御网",
          humanVerdict: elevation >= 4.0 
            ? `车库位于标高+${elevation}米的高位裙楼内。停放于裙楼车位的车辆在极端暴雨中可免受任何浸水风险。`
            : `车辆主入口标高为+${elevation}米 MSL。对于底盘极低的超级跑车，建议优先停放于2层或更高的车位。`,
          substationLevel: elevation >= 4.0 ? "裙楼设备夹层（远离浸水区）" : "带防汛水闸的夹层机房",
          stormProtection: "大功率强排自动潜水泵及防倒灌止回阀",
          engineeringBasis: `地块绝对高程基准面：+${elevation}米 MSL。`
        },
        starchitect: {
          tier: isStarchitect ? "大师级署名地标资产（Signature Asset）" : "核心地段优质建筑资产（Prime Tier）",
          architectBrandPremiumPercent: starchitectPremium,
          humanVerdict: isStarchitect 
            ? `由国际知名大师团队（${building.architectFirm || building.architect}）亲笔执笔。天际线辨识度高，确保15–20年后的转手流动性与溢价。`
            : `高品质商业建筑。售价紧密依托核心地段（${building.district}）与实用空间，无额外虚高品牌溢价。`,
          collectorClassification: isStarchitect ? "高建筑品牌溢价资产" : "稳健实用投资资产",
          engineeringBasis: `主案设计：${building.architect}，全套国际工程监理。`
        },
        windSway: {
          swayDeflectionMm: apexSway,
          dampingSystem: isSupertall ? "伸臂桁架结合超强钢筋混凝土核心筒" : "整体现浇抗震剪力墙结构",
          humanVerdict: isSupertall
            ? `冬季风暴极端天气下，60层以上可能会有轻微吊灯摆动。体质敏感者建议选购低于${goldenTopFloor}层的户型。`
            : `建筑具备极高的横向刚度。在所有住宅楼层，风载位移均远低于人体感知极限。`,
          goldenFloors: `第10层至第${goldenTopFloor}层（体感完全静止的最佳居住区间）`,
          engineeringBasis: `设计基准风速45米/秒下，塔尖位移估算：~${apexSway}毫米。`
        },
        socialFilter: {
          privacyScore: socialScore,
          ownerOccupierPercent: ownerRatio,
          holidayHomesPolicy: isHotelOrMixed 
            ? "允许短租民宿（访客流动较频繁）"
            : "受业主委员会严格监管（常住业主占主导）",
          humanVerdict: isHotelOrMixed
            ? "大堂与泳池区域有稳定的旅行箱与游客流动。非常适合追求超高短期现金流的投资者，但家庭自住私密性略逊。"
            : `超过${ownerRatio}%的单位为长期常住业主与高管。圈层纯粹安静，邻里礼貌，杜绝随机派对扰民。`,
          securityLevel: "智能门禁卡系统与24小时大堂前台安保",
          engineeringBasis: `受迪拜旅游局（DET）短租规范与大厦注册业主公约监管。`
        },
        contractorAutopsy: {
          mainContractor: building.mainContractor || "阿联酋一级资质认证总包工程商",
          soundproofingRatingDb: soundDb,
          humanVerdict: soundDb >= 54 
            ? "优异的户间隔音：分户墙彻底吸收空气声，邻居家脚步与卫浴冲水声不会穿透进起居区。"
            : "标准户间隔音水平。夜间极安静时，管道井内的高压水流可能会有轻微可闻声。",
          pipelineQuality: "多层声学阻尼聚丙烯消音管与防震支吊架",
          engineeringBasis: `分户墙隔声等级（STC）：~${soundDb}分贝（ASTM E90标准）。`
        },
        livingVerdict: {
          independentVerdictSummary: `位于${building.district}的核心核验资产，预计回报率${building.investmentYield}，具备稳健的工程底盘。`,
          strengths: [
            `${building.district}核心黄金地段，下楼即达成熟商业与交通`,
            `扎实的抗风抗震结构（${building.structuralSystem}），资产历久弥新`,
            isStarchitect ? `知名大师（${building.architect}）定制天际线轮廓` : `户型空间得房率与实用性极佳`
          ],
          pitfalls: [
            isHotelOrMixed ? "短租民宿较多，大堂电梯高峰期流动率高" : "年度物业服务费需在测算净收益时审慎计入",
            isSupertall ? "极端大风天气下超高速电梯可能短暂降速保护" : "早晚高峰期区域主干道可能面临短暂缓行"
          ],
          idealFor: isHotelOrMixed 
            ? "追求短期高租金收益率（ROI 8%+）的民宿与服务式公寓投资者。"
            : "注重家庭安宁、邻里素质与长期高品质日常生活的自住买家。",
          notRecommendedFor: isHotelOrMixed
            ? "追求完全与世隔绝、排斥任何游客进出的纯私人圈层买家。"
            : "企图在业主自住主导大楼内进行高频群租的违规投资人。"
        }
      };

    case "de":
      return {
        floodResilience: {
          score: floodScore,
          elevationMeters: elevation,
          status: elevation >= 4.0 ? "Erhöhter Podium-Schutz (Hohe Sicherheit)" : "Küstenseitiges Perimeter-Drainagesystem",
          humanVerdict: elevation >= 4.0 
            ? `Das Parkhaus liegt im erhöhten Podium auf +${elevation}m über dem Meeresspiegel. Fahrzeuge auf den oberen Decks sind optimal vor Starkregen geschützt.`
            : `Die Zufahrt liegt auf +${elevation}m MSL. Für Sportwagen mit sehr geringer Bodenfreiheit wird das Parken ab Ebene 2 empfohlen.`,
          substationLevel: elevation >= 4.0 ? "Technikgeschosse im Podium (Sicher)" : "Mezzanine mit Flutschutz-Barrieren",
          stormProtection: "Automatische Hochleistungs-Tauchpumpen und Rückstauverschlüsse",
          engineeringBasis: `Topografische Geländehöhe: +${elevation}m MSL.`
        },
        starchitect: {
          tier: isStarchitect ? "Signature Stararchitekten-Objekt" : "Erstklassiges Immobilien-Asset",
          architectBrandPremiumPercent: starchitectPremium,
          humanVerdict: isStarchitect 
            ? `Entworfen vom renommierten Architekturbüro (${building.architectFirm || building.architect}). Hohe Wiedererkennbarkeit sichert Werterhalt und Wiederverkaufswert in 15–20 Jahren.`
            : `Hochwertige Geschäftsarchitektur. Der Preis spiegelt die erstklassige Lage (${building.district}) und den Raumzuschnitt wider, ohne Markenaufschlag.`,
          collectorClassification: isStarchitect ? "Hohe architektonische Markenprägung" : "Solides Rendite- und Wohnobjekt",
          engineeringBasis: `Architekt: ${building.architect} mit internationaler Bauüberwachung.`
        },
        windSway: {
          swayDeflectionMm: apexSway,
          dampingSystem: isSupertall ? "Outrigger-Trägersystem und massiver Stahlbetonkern" : "Massives Stahlbeton-Wandscheibensystem",
          humanVerdict: isSupertall
            ? `Ab Etage 60 kann bei heftigen Winterstürmen eine minimale Bewegung von Pendelleuchten auftreten. Empfindliche Personen wählen bevorzugt Etagen unterhalb von ${goldenTopFloor}.`
            : `Sehr verwindungssteifes Tragwerk. Windbedingte Auslenkungen liegen auf allen Wohnetagen weit unterhalb der menschlichen Wahrnehmungsschwelle.`,
          goldenFloors: `Etagen 10 bis ${goldenTopFloor} (Optimaler vibrationsfreier Wohnbereich)`,
          engineeringBasis: `Maximale rechnerische Auslenkung der Spitze: ~${apexSway} mm bei 45 m/s Windlast.`
        },
        socialFilter: {
          privacyScore: socialScore,
          ownerOccupierPercent: ownerRatio,
          holidayHomesPolicy: isHotelOrMixed 
            ? "Ferienvermietung zulässig (höhere Gästefrequenz)"
            : "WEG-reguliert (überwiegend Dauereigentümer)",
          humanVerdict: isHotelOrMixed
            ? "Reger Gästeverkehr in Lobby und Poolbereich. Sehr attraktiv für Kurzzeitvermieter mit Spitzenrenditen, jedoch lebhafter für Familien."
            : `Über ${ownerRatio}% der Wohnungen werden von Dauereigentümern bewohnt. Ruhige, gepflegte Atmosphäre mit verlässlicher Nachbarschaft.`,
          securityLevel: "Elektronische Schlüsselkarten und 24/7 besetzte Rezeption",
          engineeringBasis: `Konform mit DET-Tourismusrichtlinien und eingetragener Gemeinschaftsordnung.`
        },
        contractorAutopsy: {
          mainContractor: building.mainContractor || "Klasse-A zertifizierter VAE-Generalunternehmer",
          soundproofingRatingDb: soundDb,
          humanVerdict: soundDb >= 54 
            ? "Hervorragende Schalldämmung: Trennwände schirmen Luftschall gründlich ab; Tritt- und Installationsgeräusche dringen nicht in Wohnräume."
            : "Solide Standardschalldämmung. In sehr ruhigen Nachtstunden kann Druckwasser in den Schächten leise wahrnehmbar sein.",
          pipelineQuality: "Schallgedämmte Mehrschicht-Verbundrohre mit Schwingungsentkopplung",
          engineeringBasis: `Schalldämmmaß der Wohnungstrennwände: ~${soundDb} dB (ASTM E90).`
        },
        livingVerdict: {
          independentVerdictSummary: `Solides Anlageobjekt in ${building.district} mit prognostizierter Rendite von ${building.investmentYield} und stabiler Bausubstanz.`,
          strengths: [
            `Top-Adresse in ${building.district} mit optimaler Infrastruktur`,
            `Belastbare Tragwerksplanung (${building.structuralSystem}) für langfristige Beständigkeit`,
            isStarchitect ? `Prägnante Silhouette von ${building.architect}` : `Sehr effiziente Grundrisse ohne Flächenverlust`
          ],
          pitfalls: [
            isHotelOrMixed ? "Lebhafterer Durchgangsverkehr durch Ferienwohnungsbetrieb" : "Jährliche Servicegebühren müssen in die Nettorendite einkalkuliert werden",
            isSupertall ? "Hochgeschwindigkeitsaufzüge können bei Starkwind gedrosselt werden" : "Verkehrsspitzen an den Quartierszufahrten zu Stoßzeiten möglich"
          ],
          idealFor: isHotelOrMixed 
            ? "Investoren mit Fokus auf maximale Mietrendite (ROI 8%+) durch professionelle Ferienvermietung."
            : "Familien und Eigennutzer, die Wert auf Ruhe, Privatsphäre und ein verlässliches Wohnumfeld legen.",
          notRecommendedFor: isHotelOrMixed
            ? "Käufer, die eine völlig abgeschirmte Wohnanlage ohne jeglichen Tourismus suchen."
            : "Investoren, die aggressive Kurzzeitvermietung in einem eigentümergeprägten Turm planen."
        }
      };

    case "fr":
      return {
        floodResilience: {
          score: floodScore,
          elevationMeters: elevation,
          status: elevation >= 4.0 ? "Protection par Podium Surélevé (Niveau Élevé)" : "Réseau de Drainage Périphérique Côtier",
          humanVerdict: elevation >= 4.0 
            ? `Le parking est situé dans le podium à +${elevation}m au-dessus du niveau de la mer. Les véhicules stationnés sont intégralement protégés des inondations.`
            : `L'accès véhicule est calé à +${elevation}m MSL. Pour les supercars à très faible garde au sol, un stationnement au 2e niveau ou supérieur est recommandé.`,
          substationLevel: elevation >= 4.0 ? "Niveaux Techniques en Podium (Sécurisé)" : "Mezzanine avec Barrières Anti-Crue",
          stormProtection: "Pompes de relevage automatiques haute capacité et clapets anti-retour",
          engineeringBasis: `Cote altimétrique du terrain : +${elevation}m MSL.`
        },
        starchitect: {
          tier: isStarchitect ? "Actif Signé par un Grand Nom de l'Architecture" : "Actif Immobilier de Premier Ordre",
          architectBrandPremiumPercent: starchitectPremium,
          humanVerdict: isStarchitect 
            ? `Signé par l'agence de renommée internationale (${building.architectFirm || building.architect}). Silhouette emblématique garantissant liquidité et cote patrimoniale à 15–20 ans.`
            : `Architecture commerciale de grande qualité. La valeur découle de l'emplacement (${building.district}) et de la rationalité des plans sans surcoût de marque.`,
          collectorClassification: isStarchitect ? "Forte Valeur Patrimoniale de Marque" : "Actif d'Investissement Pratique et Pérenne",
          engineeringBasis: `Architecte : ${building.architect} sous supervision technique internationale.`
        },
        windSway: {
          swayDeflectionMm: apexSway,
          dampingSystem: isSupertall ? "Ceintures de stabilisateurs et noyau en béton armé massif" : "Structure rigide en refends de béton armé",
          humanVerdict: isSupertall
            ? `Au-delà du 60e étage, un léger mouvement des luminaires suspendus peut survenir lors des tempêtes hivernales. Les personnes sensibles privilégieront les étages sous le ${goldenTopFloor}e.`
            : `Excellente rigidité structurale. Les oscillations induites par le vent restent très inférieures aux seuils de perception humaine sur tous les étages résidentiels.`,
          goldenFloors: `Étages 10 à ${goldenTopFloor} (Zone de confort vibratoire et acoustique optimal)`,
          engineeringBasis: `Déplacement maximal calculé au sommet : ~${apexSway} mm sous rafales de 45 m/s.`
        },
        socialFilter: {
          privacyScore: socialScore,
          ownerOccupierPercent: ownerRatio,
          holidayHomesPolicy: isHotelOrMixed 
            ? "Locations saisonnières autorisées (flux de voyageurs actif)"
            : "Règlement de copropriété strict (résidents permanents majoritaires)",
          humanVerdict: isHotelOrMixed
            ? "Fréquentation régulière de valises et de vacanciers dans le hall et aux abords de la piscine. Idéal pour un investisseur en quête de rendement locatif élevé."
            : `Plus de ${ownerRatio}% des appartements sont occupés par des résidents permanents. Ambiance calme et feutrée avec un voisinage courtois.`,
          securityLevel: "Contrôle d'accès par badge sécurisé et conciergerie 24/7",
          engineeringBasis: `Conforme aux agréments DET et au règlement de copropriété enregistré.`
        },
        contractorAutopsy: {
          mainContractor: building.mainContractor || "Entreprise générale agréée de Rang 1 aux Émirats",
          soundproofingRatingDb: soundDb,
          humanVerdict: soundDb >= 54 
            ? "Excellente isolation phonique : les cloisons mitoyennes absorbent parfaitement les bruits aériens et les bruits d'eau."
            : "Isolation acoustique standard de bonne facture. Dans le silence nocturne, les écoulements d'eau sous pression peuvent être légèrement perceptibles.",
          pipelineQuality: "Canalisations multicouches antibruit avec colliers antivibratiles",
          engineeringBasis: `Indice d'affaiblissement acoustique des cloisons : ~${soundDb} dB (ASTM E90).`
        },
        livingVerdict: {
          independentVerdictSummary: `Actif immobilier solide à ${building.district} offrant un rendement estimé à ${building.investmentYield} et une structure irréprochable.`,
          strengths: [
            `Emplacement stratégique au cœur de ${building.district} proche de toutes commodités`,
            `Conception structurale pérenne (${building.structuralSystem}) garantissant la durabilité`,
            isStarchitect ? `Silhouette reconnue signée ${building.architect}` : `Excellente habitabilité et optimisation des surfaces`
          ],
          pitfalls: [
            isHotelOrMixed ? "Rotation plus fréquente de voyageurs liée aux meublés touristiques" : "Charges de copropriété annuelles à intégrer rigoureusement dans le calcul de rentabilité",
            isSupertall ? "Les ascenseurs ultrarapides peuvent réduire temporairement leur vitesse par grand vent" : "Ralentissements possibles aux accès du quartier aux heures d'affluence"
          ],
          idealFor: isHotelOrMixed 
            ? "Investisseurs visant un flux de trésorerie locatif maximal (ROI 8%+) en location courte durée."
            : "Familles et propriétaires occupants recherchant quiétude, confort quotidien et communauté stable.",
          notRecommendedFor: isHotelOrMixed
            ? "Acheteurs en quête d'une résidence ultra-privée fermée à tout tourisme."
            : "Bailleurs souhaitant exploiter de la sous-location intensive dans une tour à vocation résidentielle."
        }
      };

    case "it":
      return {
        floodResilience: {
          score: floodScore,
          elevationMeters: elevation,
          status: elevation >= 4.0 ? "Protezione su Podio Rialzato (Livello Elevato)" : "Rete di Drenaggio Perimetrale Costiera",
          humanVerdict: elevation >= 4.0 
            ? `Il parcheggio è inserito nel podio sopraelevato a +${elevation}m sul livello del mare. I veicoli sui ponti superiori sono totalmente al sicuro da allagamenti.`
            : `L'accesso carrabile è a quota +${elevation}m MSL. Per le supercar con assetto molto ribassato si raccomanda la sosta dal 2° livello in su.`,
          substationLevel: elevation >= 4.0 ? "Piani Tecnici nel Podio (Sicuro)" : "Mezzanino con Paratie Antiallagamento",
          stormProtection: "Pompe sommergibili automatiche ad alta portata e valvole di non ritorno",
          engineeringBasis: `Quota topografica del terreno: +${elevation}m MSL.`
        },
        starchitect: {
          tier: isStarchitect ? "Asset con Firma Architettonica di Rilievo" : "Asset Residenziale di Primo Livello",
          architectBrandPremiumPercent: starchitectPremium,
          humanVerdict: isStarchitect 
            ? `Firmato da uno studio di fama internazionale (${building.architectFirm || building.architect}). Profilo iconico che tutela la liquidità e la rivendita a 15–20 anni.`
            : `Architettura di pregio. Il valore è determinato dalla posizione eccellente (${building.district}) e dalla funzionalità degli spazi, senza sovrapprezzo per il brand.`,
          collectorClassification: isStarchitect ? "Elevata Capitalizzazione del Marchio Architettonico" : "Fascia d'Investimento Concreta e Redditizia",
          engineeringBasis: `Progettista: ${building.architect} con collaudo ingegneristico internazionale.`
        },
        windSway: {
          swayDeflectionMm: apexSway,
          dampingSystem: isSupertall ? "Travature outrigger e nucleo massiccio in calcestruzzo armato" : "Telaio rigido con pareti di taglio in calcestruzzo",
          humanVerdict: isSupertall
            ? `Sopra il 60° piano, durante le forti tempeste invernali, può verificarsi una lieve oscillazione dei lampadari. Si consigliano piani inferiori al ${goldenTopFloor}° a chi è sensibile al movimento.`
            : `Struttura ad alta rigidità. Le oscillazioni indotte dal vento rimangono ampiamente al di sotto della soglia di percezione umana su tutti i piani.`,
          goldenFloors: `Piani dal 10 al ${goldenTopFloor} (Fascia di massimo comfort statico e acustico)`,
          engineeringBasis: `Spostamento massimo calcolato in sommità: ~${apexSway} mm con vento a 45 m/s.`
        },
        socialFilter: {
          privacyScore: socialScore,
          ownerOccupierPercent: ownerRatio,
          holidayHomesPolicy: isHotelOrMixed 
            ? "Affitti brevi turistici consentiti (movimento frequente)"
            : "Regolamentato dal condominio (prevalenza di residenti stabili)",
          humanVerdict: isHotelOrMixed
            ? "Transito costante di valigie e turisti nella hall e nell'area piscina. Ideale per investitori che cercano la massima rendita da locazione breve."
            : `Oltre il ${ownerRatio}% degli alloggi è occupato da proprietari stabili. Ambiente tranquillo, ordinato e con vicini riservati.`,
          securityLevel: "Accesso con badge elettronico e portineria attiva 24/7",
          engineeringBasis: `In accordo con le normative DET e il regolamento condominiale registrato.`
        },
        contractorAutopsy: {
          mainContractor: building.mainContractor || "General contractor certificato di Classe A negli EAU",
          soundproofingRatingDb: soundDb,
          humanVerdict: soundDb >= 54 
            ? "Isolamento acustico di alto livello: le pareti divisorie isolano completamente i rumori aerei e di calpestio dei vicini."
            : "Buon isolamento acustico standard. Nel silenzio della notte, l'acqua ad alta pressione nei condotti può risultare debolmente percettibile.",
          pipelineQuality: "Tubazioni multistrato insonorizzate con raccordi antivibranti",
          engineeringBasis: `Classe di isolamento acustico delle pareti: ~${soundDb} dB (ASTM E90).`
        },
        livingVerdict: {
          independentVerdictSummary: `Un asset equilibrato a ${building.district} con rendimento stimato del ${building.investmentYield} e ottimi parametri costruttivi.`,
          strengths: [
            `Indirizzo prestigioso a ${building.district} con accesso immediato a tutti i servizi`,
            `Ingegneria strutturale solida (${building.structuralSystem}) a garanzia di longevità`,
            isStarchitect ? `Silhouette inconfondibile firmata da ${building.architect}` : `Distribuzione interna degli spazi efficiente ed elegante`
          ],
          pitfalls: [
            isHotelOrMixed ? "Maggiore rotazione di ospiti per via delle locazioni turistiche" : "Spese condominiali annuali da conteggiare accuratamente nel rendimento netto",
            isSupertall ? "Gli ascensori veloci possono ridurre momentaneamente la velocità in caso di raffiche estreme" : "Possibili rallentamenti viari agli accessi del quartiere nelle ore di punta"
          ],
          idealFor: isHotelOrMixed 
            ? "Investitori interessati a massimizzare i flussi di cassa (ROI 8%+) tramite case vacanza gestite."
            : "Famiglie e residenti alla ricerca di privacy, quiete e un contesto abitativo stabile.",
          notRecommendedFor: isHotelOrMixed
            ? "Chi cerca un'oasi residenziale totalmente isolata da qualsiasi presenza turistica."
            : "Chi intende avviare un'attività di affitto breve intensivo in un edificio a prevalenza residenziale."
        }
      };

    case "tr":
      return {
        floodResilience: {
          score: floodScore,
          elevationMeters: elevation,
          status: elevation >= 4.0 ? "Yükseltilmiş Podyum Koruması (Yüksek Seviye)" : "Kıyı Çevresel Drenaj Hattı",
          humanVerdict: elevation >= 4.0 
            ? `Otopark deniz seviyesinden +${elevation}m yüksekteki podyumda yer alır. Üst katlardaki araçlar ani su baskınlarına karşı tam korumalıdır.`
            : `Araç giriş kotu +${elevation}m MSL seviyesindedir. Alçak şasili süper spor araçlar için 2. kat ve üzeri park yerleri önerilir.`,
          substationLevel: elevation >= 4.0 ? "Podyum Tesisat Katları (Güvenli)" : "Su Baskını Bariyerli Asma Kat",
          stormProtection: "Otomatik yüksek kapasiteli tahliye pompaları ve geri tepme önleyici valfler",
          engineeringBasis: `Topografik zemin kotu: +${elevation}m MSL.`
        },
        starchitect: {
          tier: isStarchitect ? "Yıldız Mimar İmzalı Prestijli Varlık" : "Birinci Sınıf Nitelikli Konut Varlığı",
          architectBrandPremiumPercent: starchitectPremium,
          humanVerdict: isStarchitect 
            ? `Dünyaca ünlü mimarlık ofisi (${building.architectFirm || building.architect}) imzalı. İkonik siluet, 15–20 yıl sonra dahi yüksek satış likiditesi sağlar.`
            : `Yüksek nitelikli ticari mimari. Fiyatlandırma mimar marka priminden ziyade konuma (${building.district}) ve mekan kalitesine dayanır.`,
          collectorClassification: isStarchitect ? "Yüksek Mimari Marka Değeri" : "İşlevsel ve Güçlü Yatırım Sınıfı",
          engineeringBasis: `Tasarım: ${building.architect}, uluslararası yapı denetimi.`
        },
        windSway: {
          swayDeflectionMm: apexSway,
          dampingSystem: isSupertall ? "Outrigger kuşakları ve masif betonarme çekirdek" : "Monolitik betonarme perde duvar sistemi",
          humanVerdict: isSupertall
            ? `60. katın üzerindeki dairelerde kış fırtınalarında avizelerde hafif hareket görülebilir. Sallantıya duyarlı kişilerin ${goldenTopFloor}. kat altını tercih etmesi önerilir.`
            : `Yüksek gövde rijitliği sayesinde rüzgar salınımı tüm katlarda insan algılama sınırlarının çok altında kalır.`,
          goldenFloors: `10 ile ${goldenTopFloor}. Katlar Arası (Titreşimsiz en konforlu yaşam bölgesi)`,
          engineeringBasis: `45 m/s tasarım rüzgarında tepe noktası esneme tahmini: ~${apexSway} mm.`
        },
        socialFilter: {
          privacyScore: socialScore,
          ownerOccupierPercent: ownerRatio,
          holidayHomesPolicy: isHotelOrMixed 
            ? "Günlük kiralamaya uygun (yüksek misafir sirkülasyonu)"
            : "Site yönetimi kurallarına tabi (büyük çoğunlukla yerleşik ev sahipleri)",
          humanVerdict: isHotelOrMixed
            ? "Lobi ve havuz alanında sürekli bavul ve turist hareketliliği vardır. Yüksek günlük getiri isteyen yatırımcılar için idealdir."
            : `Dairelerin %${ownerRatio}'inden fazlasında daimi mülk sahipleri yaşar. Sakin, saygın ve düzenli bir aile ortamı sunar.`,
          securityLevel: "Elektronik kartlı geçiş ve 24 saat resepsiyon güvenliği",
          engineeringBasis: `DET turizm düzenlemeleri ve tescilli bina yönetim planına uygundur.`
        },
        contractorAutopsy: {
          mainContractor: building.mainContractor || "BAE 1. Sınıf Yetkili Ana Yüklenici Firma",
          soundproofingRatingDb: soundDb,
          humanVerdict: soundDb >= 54 
            ? "Kusursuz ses yalıtımı: Daireler arası duvarlar komşu seslerini ve sıhhi tesisat gürültüsünü yaşam alanlarından tamamen izole eder."
            : "Standart daireler arası ses yalıtımı. Gece saatlerinde tesisat şaftlarındaki yüksek basınçlı su akışı hafifçe duyulabilir.",
          pipelineQuality: "Titreşim önleyicili çok katmanlı akustik polipropilen borular",
          engineeringBasis: `Daireler arası ses yalıtım sınıfı: ~${soundDb} dB (ASTM E90 standardı).`
        },
        livingVerdict: {
          independentVerdictSummary: `${building.district} bölgesinde tahmini %${building.investmentYield} getirili, güçlü yapısal temellere sahip güvenilir bir mülk.`,
          strengths: [
            `${building.district} lokasyonunda tüm sosyal olanaklara ve ulaşıma doğrudan erişim`,
            `Uzun ömürlü ve dayanıklı yapısal mühendislik (${building.structuralSystem})`,
            isStarchitect ? `${building.architect} imzalı seçkin kule silueti` : `Yüksek kullanım verimliliğine sahip daire planları`
          ],
          pitfalls: [
            isHotelOrMixed ? "Günlük kiralama hareketliliği nedeniyle lobide daha yoğun sirkülasyon" : "Yıllık aidat bedellerinin net getiri hesaplamasında dikkatle dikkate alınması gerekir",
            isSupertall ? "Fırtınalı havalarda hızlı asansörler güvenlik amacıyla hızlarını geçici olarak düşürebilir" : "İş çıkış saatlerinde bölge ana arterlerinde kısa süreli yoğunluk yaşanabilir"
          ],
          idealFor: isHotelOrMixed 
            ? "Kısa dönemli turizm kiralamalarıyla maksimum nakit akışı (%8+ ROI) hedefleyen yatırımcılar."
            : "Huzurlu, güvenli ve saygın bir topluluk içinde kalıcı yaşam arayan aileler ve ev sahipleri.",
          notRecommendedFor: isHotelOrMixed
            ? "Her türlü turist hareketliliğinden tamamen izole, sakin bir özel yaşam arayanlar."
            : "Yerleşik ailelerin ağırlıkta olduğu bir binada yoğun kısa dönemli kiralama yapmak isteyenler."
        }
      };

    case "hi":
      return {
        floodResilience: {
          score: floodScore,
          elevationMeters: elevation,
          status: elevation >= 4.0 ? "ऊंचा पोडियम सुरक्षा स्तर (उच्च सुरक्षा)" : "तटीय परिधि जल निकासी नेटवर्क",
          humanVerdict: elevation >= 4.0 
            ? `पार्किंग समुद्र तल से +${elevation} मीटर ऊंचे पोडियम में स्थित है। पोडियम में खड़ी कारें जलभराव से पूरी तरह सुरक्षित रहती हैं।`
            : `वाहन प्रवेश स्तर समुद्र तल से +${elevation} मीटर ऊंचाई पर है। कम ग्राउंड क्लीयरेंस वाली सुपरकार्स के लिए दूसरी मंजिल या उससे ऊपर पार्क करने की सलाह दी जाती है।`,
          substationLevel: elevation >= 4.0 ? "पोडियम तकनीकी तल (पूरी तरह सुरक्षित)" : "बाढ़ बाधाओं वाला मेजेनाइन स्तर",
          stormProtection: "स्वचालित भारी जल निकासी पंप और बैकफ़्लो अवरोधक",
          engineeringBasis: `स्थलाकृतिक भूमि संदर्भ: +${elevation} मीटर MSL।`
        },
        starchitect: {
          tier: isStarchitect ? "प्रसिद्ध स्टार आर्किटेक्ट हस्ताक्षर संपत्ति" : "उत्कृष्ट गुणवत्ता वाली प्राइम संपत्ति",
          architectBrandPremiumPercent: starchitectPremium,
          humanVerdict: isStarchitect 
            ? `विश्व-प्रसिद्ध आर्किटेक्चर फर्म (${building.architectFirm || building.architect}) द्वारा डिजाइन किया गया। प्रतिष्ठित रूपरेखा 15-20 वर्षों तक पुनर्विक्रय मूल्य सुरक्षित रखती है।`
            : `उच्च गुणवत्ता वाला वाणिज्यिक वास्तुशिल्प। मूल्य निर्धारण ब्रांड प्रीमियम के बजाय स्थान (${building.district}) और लेआउट पर आधारित है।`,
          collectorClassification: isStarchitect ? "उच्च वास्तुशिल्प ब्रांड मूल्य" : "कार्यात्मक मजबूत निवेश वर्ग",
          engineeringBasis: `डिजाइनर: ${building.architect}, अंतरराष्ट्रीय इंजीनियरिंग पर्यवेक्षण।`
        },
        windSway: {
          swayDeflectionMm: apexSway,
          dampingSystem: isSupertall ? "आउटट्रिगर ट्रस और प्रबलित कंक्रीट कोर" : "मोनोलिथिक कंक्रीट शीयर वॉल फ्रेम",
          humanVerdict: isSupertall
            ? `60वीं मंजिल से ऊपर सर्दियों की तेज हवाओं में झूमर में मामूली हलचल हो सकती है। संवेदनशील लोग ${goldenTopFloor}वीं मंजिल से नीचे चुन सकते हैं।`
            : `मजबूत संरचनात्मक फ्रेम के कारण हवा का कंपन सभी आवासीय मंजिलों पर इंसानी अहसास की सीमा से काफी नीचे रहता है।`,
          goldenFloors: `मंजिल 10 से ${goldenTopFloor} (कंपन-मुक्त सर्वोत्तम आवासीय क्षेत्र)`,
          engineeringBasis: `45 मीटर/सेकंड डिजाइन हवा में शीर्ष विचलन: ~${apexSway} मिमी।`
        },
        socialFilter: {
          privacyScore: socialScore,
          ownerOccupierPercent: ownerRatio,
          holidayHomesPolicy: isHotelOrMixed 
            ? "दैनिक अवकाश किराये की अनुमति (सैलानियों की आवाजाही)"
            : "सोसाइटी नियमों द्वारा विनियमित (मुख्य रूप से स्थायी निवासी)",
          humanVerdict: isHotelOrMixed
            ? "लॉबी और पूल क्षेत्र में पर्यटकों और सूटकेस की नियमित आवाजाही रहती है। अधिकतम अल्पकालिक किराये के लिए उत्तम, लेकिन पारिवारिक शांति कम।"
            : `${ownerRatio}% से अधिक इकाइयों में स्थायी मालिक रहते हैं। शांत और सुसंस्कृत वातावरण जहां अनियंत्रित पार्टियों का शोर नहीं होता।`,
          securityLevel: "इलेक्ट्रॉनिक स्मार्ट कार्ड एक्सेस और 24/7 लॉबी सुरक्षा",
          engineeringBasis: `दुबई DET पर्यटन नियमों और पंजीकृत सोसाइटी उप-नियमों के तहत विनियमित।`
        },
        contractorAutopsy: {
          mainContractor: building.mainContractor || "संयुक्त अरब अमीरात की ग्रेड-ए प्रमाणित ठेकेदार कंपनी",
          soundproofingRatingDb: soundDb,
          humanVerdict: soundDb >= 54 
            ? "उत्कृष्ट ध्वनिरोधी क्षमता: दीवारें पड़ोसियों की बातचीत और बाथरूम की आवाज को कमरों में आने से रोकती हैं।"
            : "मानक आवासीय ध्वनिरोधी। देर रात के सन्नाटे में प्लंबिंग पाइपों में बहते पानी की हल्की आवाज सुनाई दे सकती है।",
          pipelineQuality: "ध्वनि-अवशोषक बहुस्तरीय पॉलीप्रोपाइलीन पाइप और कंपन-रोधी तकनीक",
          engineeringBasis: `दीवारों का ध्वनि इन्सुलेशन स्तर: ~${soundDb} dB (ASTM E90)।`
        },
        livingVerdict: {
          independentVerdictSummary: `${building.district} में अनुमानित ${building.investmentYield} रिटर्न और मजबूत इंजीनियरिंग गुणवत्ता वाली सत्यापित संपत्ति।`,
          strengths: [
            `${building.district} के प्रमुख केंद्र में सभी सुविधाओं तक सीधी पहुंच`,
            `मजबूत संरचनात्मक निर्माण (${building.structuralSystem}) जो दशकों तक टिकाऊ है`,
            isStarchitect ? `${building.architect} द्वारा डिजाइन की गई विशिष्ट रूपरेखा` : `कुशल और उपयोगी इनडोर लेआउट`
          ],
          pitfalls: [
            isHotelOrMixed ? "हॉलिडे होम गतिविधियों के कारण लॉबी में अधिक सैलानियों का आवागमन" : "वार्षिक रखरखाव शुल्क को शुद्ध आय की गणना में शामिल किया जाना चाहिए",
            isSupertall ? "तेज तूफानी हवाओं के दौरान हाई-स्पीड लिफ्टों की गति अस्थायी रूप से धीमी हो सकती है" : "व्यस्त समय में क्षेत्र के निकास मार्गों पर यातायात धीमा हो सकता है"
          ],
          idealFor: isHotelOrMixed 
            ? "अल्पकालिक छुट्टियों के किराये (ROI 8%+) के माध्यम से अधिकतम आय चाहने वाले निवेशक।"
            : "परिवार और स्थायी निवासी जो गोपनीयता, शांति और एक स्थिर आवासीय वातावरण चाहते हैं।",
          notRecommendedFor: isHotelOrMixed
            ? "पर्यटकों की आवाजाही से पूरी तरह मुक्त, अत्यंत शांत निजी माहौल चाहने वाले खरीदार।"
            : "स्थायी परिवारों के प्रभुत्व वाले टॉवर में अत्यधिक आक्रामक दैनिक किराये चलाने वाले लोग।"
        }
      };

    case "ur":
      return {
        floodResilience: {
          score: floodScore,
          elevationMeters: elevation,
          status: elevation >= 4.0 ? "بلند پوڈیم حفاظتی نظام (اعلیٰ سطح)" : "ساحلی حفاظتی ڈرینج سرکٹ",
          humanVerdict: elevation >= 4.0 
            ? `پارکنگ سطح سمندر سے +${elevation} میٹر بلند پوڈیم پر واقع ہے۔ پوڈیم ڈیک پر کھڑی گاڑیاں بارش اور سیلابی پانی سے مکمل محفوظ رہتی ہیں۔`
            : `گاڑیوں کا داخلی راستہ سطح سمندر سے +${elevation} میٹر بلندی پر ہے۔ کم گراؤنڈ کلیئرنس والی اسپورٹس کارز کے لیے لیول 2 یا اوپر پارکنگ تجویز کی جاتی ہے۔`,
          substationLevel: elevation >= 4.0 ? "پوڈیم تکنیکی فلورز (مکمل محفوظ)" : "سیلابی رکاوٹوں کے ساتھ میزانین لیول",
          stormProtection: "خودکار ہیوی ڈیوٹی نکاسی آب پمپس اور بیک فلو والوز",
          engineeringBasis: `جغرافیائی زمینی بلندی کا پیمانہ: +${elevation} میٹر MSL۔`
        },
        starchitect: {
          tier: isStarchitect ? "عالمی شہرت یافتہ معمار کا دستخط شدہ اثاثہ" : "اعلیٰ معیار کا پرائم انویسٹمنٹ اثاثہ",
          architectBrandPremiumPercent: starchitectPremium,
          humanVerdict: isStarchitect 
            ? `عالمی شہرت یافتہ فرم (${building.architectFirm || building.architect}) کا ڈیزائن۔ منفرد بناوٹ جو 15 سے 20 سال بعد بھی دوبارہ فروخت میں زبردست قیمت دلاتی ہے۔`
            : `اعلیٰ درجے کا کمرشل آرکیٹیکچر۔ قیمت کا تعین برانڈ پریمیم کے بجائے شاندار لوکیشن (${building.district}) اور کشادہ لے آؤٹ پر ہے۔`,
          collectorClassification: isStarchitect ? "اعلیٰ آرکیٹیکچرل برانڈ ویلیو" : "مستحکم اور منافع بخش سرمایہ کاری",
          engineeringBasis: `معمار: ${building.architect}، عالمی انجینئرنگ نگرانی۔`
        },
        windSway: {
          swayDeflectionMm: apexSway,
          dampingSystem: isSupertall ? "آؤٹ رگر ٹرسز اور مضبوط کنکریٹ کور" : "مونو لیتھک کنکریٹ شیئر وال سسٹم",
          humanVerdict: isSupertall
            ? `60 ویں منزل سے اوپر شدید سردیوں کے جھکڑوں میں فانوس میں معمولی جنبش ہو سکتی ہے۔ حساس افراد ${goldenTopFloor} ویں منزل سے نیچے کا انتخاب کریں۔`
            : `مضبوط ساخت کے باعث تمام رہائشی فلورز پر ہوا کا جھٹکا انسانی احساس کی حد سے بہت نیچے رہتا ہے۔`,
          goldenFloors: `فلورز 10 تا ${goldenTopFloor} (جھٹکوں سے پاک بہترین رہائشی زون)`,
          engineeringBasis: `45 میٹر فی سیکنڈ ہوا میں متوقع زیادہ سے زیادہ جھکاؤ: ~${apexSway} ملی میٹر۔`
        },
        socialFilter: {
          privacyScore: socialScore,
          ownerOccupierPercent: ownerRatio,
          holidayHomesPolicy: isHotelOrMixed 
            ? "ہالیڈے ہومز کی اجازت (سیاحوں کی کثرت)"
            : "سوسائٹی پالیسی کے تحت منظم (زیادہ تر مستقل رہائشی)",
          humanVerdict: isHotelOrMixed
            ? "لابی اور پول پر سیاحوں کا رش رہتا ہے۔ شارٹ ٹرم کرائے سے زیادہ آمدنی کے لیے بہترین ہے لیکن فیملیز کے لیے پرسکون نہیں۔"
            : `${ownerRatio}% سے زائد اپارٹمنٹس مستقل مالکان کے زیر رہائش ہیں۔ پرسکون، مہذب اور خاندانی ماحول۔`,
          securityLevel: "الیکٹرانک اسمارٹ کارڈ انٹری اور 24 گھنٹے سیکیورٹی",
          engineeringBasis: `دبئی ٹورازم DET کے ضوابط اور رجسٹرڈ سوسائٹی قوانین کے تحت۔`
        },
        contractorAutopsy: {
          mainContractor: building.mainContractor || "یو اے ای کی گریڈ اے سرٹیفائیڈ کنٹریکٹر فرم",
          soundproofingRatingDb: soundDb,
          humanVerdict: soundDb >= 54 
            ? "شاندار ساؤنڈ پروفنگ: پارٹیشن دیواریں پڑوسیوں کی آوازوں اور پائپوں کے شور کو کمروں میں آنے نہیں دیتیں۔"
            : "معیاری ساؤنڈ پروفنگ۔ رات کے سناٹے میں سینیٹری پائپوں میں پانی کا بہاؤ مدہم سنائی دے سکتا ہے۔",
          pipelineQuality: "کثیر التہہ آواز جذب کرنے والے پائپس اور وائبریشن کپلرز",
          engineeringBasis: `ساؤنڈ آئسولیشن ریٹنگ: ~${soundDb} dB (ASTM E90 معیار)۔`
        },
        livingVerdict: {
          independentVerdictSummary: `${building.district} میں متوقع ${building.investmentYield} کرایہ منافع کے ساتھ ایک مستحکم اور بااعتماد پراپرٹی۔`,
          strengths: [
            `${building.district} کی مرکزی جگہ پر تمام سہولیات تک فوری رسائی`,
            `مستحکم اور پائیدار انجینئرنگ ساخت (${building.structuralSystem})`,
            isStarchitect ? `${building.architect} کا بنایا ہوا خوبصورت ڈیزائن` : `بہترین اور کشادہ اندرونی لے آؤٹ`
          ],
          pitfalls: [
            isHotelOrMixed ? "سیاحوں کی آمد و رفت کی وجہ سے لابی میں نسبتاً زیادہ رش" : "خالص منافع نکالتے وقت سالانہ مینٹیننس چارجز کا احتساب ضروری ہے",
            isSupertall ? "تیز طوفان میں لفٹوں کی رفتار عارضی طور پر دھیمی کی جا سکتی ہے" : "رش کے اوقات میں علاقے کے راستوں پر سست ٹریفک ممکن ہے"
          ],
          idealFor: isHotelOrMixed 
            ? "روزانہ یا ہفتہ وار شارٹ ٹرم کرایوں (ROI 8%+) سے زیادہ منافع کے خواہشمند سرمایہ کار۔"
            : "فیملیز اور مستقل رہائشی جو سکون، پرائیویسی اور باوقار ماحول کو ترجیح دیتے ہیں۔",
          notRecommendedFor: isHotelOrMixed
            ? "سیاحتی شور شرابے سے دور مکمل الگ تھلگ پرائیویٹ زندگی چاہنے والے خریدار۔"
            : "خاندانی عمارت میں ہنگامہ خیز شارٹ ٹرم سیاحتی کرایہ داری چلانے والے افراد۔"
        }
      };

    default: // English
      return {
        floodResilience: {
          score: floodScore,
          elevationMeters: elevation,
          status: elevation >= 4.0 ? "Elevated Podium Defense (Flood-Resistant)" : "Coastal Perimeter Drainage",
          humanVerdict: elevation >= 4.0
            ? `Parking is located within an elevated podium at +${elevation}m above sea level. Vehicles on podium decks are fully protected from flash flooding.`
            : `Vehicle entrance datum is at +${elevation}m MSL. For exotic supercars with low ground clearance, parking on Level 2 or higher is recommended.`,
          substationLevel: elevation >= 4.0 ? "Podium Plant Levels (Safe)" : "Mezzanine with flood barriers",
          stormProtection: "Heavy-duty automatic sump pumps and backflow preventers",
          engineeringBasis: `Topographical ground datum: +${elevation}m MSL.`
        },
        starchitect: {
          tier: isStarchitect ? "Signature Starchitect Asset" : "Prime Architectural Asset",
          architectBrandPremiumPercent: starchitectPremium,
          humanVerdict: isStarchitect
            ? `Authored by world-renowned firm ${building.architectFirm || building.architect}. Recognizable skyline profile preserving liquidity and resale demand 15–20 years out.`
            : `High-quality commercial architecture. Pricing reflects prime location (${building.district}) and spatial layout rather than starchitect branding surcharges.`,
          collectorClassification: isStarchitect ? "High Architectural Brand Equity" : "Functional Prime Investment Tier",
          engineeringBasis: `Designed by ${building.architect} with international structural verification.`
        },
        windSway: {
          swayDeflectionMm: apexSway,
          dampingSystem: isSupertall ? "Outrigger Truss System & Reinforced Concrete Core" : "Monolithic Shear Wall Frame",
          humanVerdict: isSupertall
            ? `On levels above 60, subtle chandelier movement may occur during severe winter gales. Residents sensitive to motion are advised to target levels below ${goldenTopFloor}.`
            : `Stiff lateral structural frame. Wind-induced deflection remains well below human perception thresholds across all residential floors.`,
          goldenFloors: `Floors 10 to ${goldenTopFloor} (Optimal vibration-free living zone)`,
          engineeringBasis: `Peak apex lateral deflection: ~${apexSway} mm under design wind loads (45 m/s).`
        },
        socialFilter: {
          privacyScore: socialScore,
          ownerOccupierPercent: ownerRatio,
          holidayHomesPolicy: isHotelOrMixed
            ? "Holiday Homes Permitted (High Guest Traffic)"
            : "Regulated HOA Bylaws (Predominantly Long-Term Residents)",
          humanVerdict: isHotelOrMixed
            ? "Lobby and pool areas experience steady tourist and suitcase turnover. Ideal for high-yielding short-term rental investors, but less quiet for permanent family living."
            : `Over ${ownerRatio}% of units are occupied by long-term owners and executives. Calm, residential ambiance with polite permanent neighbors.`,
          securityLevel: "Electronic keycard access with 24/7 lobby concierge supervision",
          engineeringBasis: `Regulated under Dubai DET holiday homes zoning and registered building HOA bylaws.`
        },
        contractorAutopsy: {
          mainContractor: building.mainContractor || "Grade-A Certified UAE Contractor",
          soundproofingRatingDb: soundDb,
          humanVerdict: soundDb >= 54
            ? "Excellent acoustic isolation: Party walls dampen airborne sound thoroughly; neighboring plumbing and footsteps do not disturb living areas."
            : "Standard inter-unit soundproofing. In quiet night hours, high-pressure water flow through plumbing shafts may be slightly audible.",
          pipelineQuality: "Multi-layer acoustic polypropylene pipework with vibration decouplers",
          engineeringBasis: `Acoustic partition sound transmission class: ~${soundDb} dB (ASTM E90).`
        },
        livingVerdict: {
          independentVerdictSummary: `A verified asset in ${building.district} delivering an estimated ${building.investmentYield} yield with solid structural fundamentals.`,
          strengths: [
            `Prime address within ${building.district} with direct access to amenities`,
            `Solid lateral engineering (${building.structuralSystem}) ensuring longevity`,
            isStarchitect ? `Distinguished architectural silhouette by ${building.architect}` : `High net-to-gross layout efficiency`
          ],
          pitfalls: [
            isHotelOrMixed ? "Higher lobby turnover due to holiday home guest activity" : "Annual service charges should be carefully calculated into net ROI",
            isSupertall ? "High-speed lifts may temporarily throttle speeds during peak gale conditions" : "District access bottlenecks may occur during peak rush hours"
          ],
          idealFor: isHotelOrMixed
            ? "Investors seeking maximum rental cash flow (ROI 8%+) via managed short-term holiday homes."
            : "Families and long-term owners looking for privacy, stable community, and day-to-day comfort.",
          notRecommendedFor: isHotelOrMixed
            ? "Buyers looking for a secluded, quiet private enclave with zero tourist presence."
            : "Investors intending to operate high-intensity tourist turnover in an owner-dominated tower."
        }
      };
  }
}
