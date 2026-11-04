import fs from 'fs';

// We read buildings.ts and districts.ts to build a comprehensive translation dictionary
const bFile = fs.readFileSync('src/data/buildings.ts', 'utf8');
const dFile = fs.readFileSync('src/data/districts.ts', 'utf8');

// Write complete technicalTranslations.ts
const code = `import { Building } from "./buildings";
import { District } from "./districts";
import { LanguageCode } from "../i18n/languages";

// Russian translation mapping for technical terms
export const TECH_TERMS_RU: Record<string, string> = {
  // Foundations & Bedrock
  "Dense calcarenitic / silty sandstone with calcisiltite seams": "Плотный калькаренит и илистый песчаник с прослойками кальцисильтита",
  "Marine limestone and cemented sandstone": "Морской известняк и окремненный песчаник",
  "Solid calcarenite and coastal sandstone": "Плотный калькаренит и прибрежный песчаник",
  "Dense marine calcarenite along Dubai Water Canal": "Плотный морской калькаренит вдоль Дубайского водного канала",
  "Dense calcarenite along Dubai Water Canal": "Плотный калькаренит вдоль Дубайского водного канала",
  "Dense dolomitic limestone along Sheikh Zayed Road": "Плотный доломитовый известняк вдоль шоссе шейха Заеда",
  "Dense sandstone and gypsum strata of Za'abeel": "Плотный песчаник и гипсовые пласты района Заабиль",
  "Marine sandstone and siltstone of the Marina basin": "Морской песчаник и алевролит бассейна Марины",
  "Engineered marine sand and limestone cap of Palm Jumeirah Crescent": "Искусственный насыпной морской грунт и известняковая шапка полумесяца Пальмы",
  "Dense sandstone and calcarenite of northern Marina": "Плотный песчаник и калькаренит северной части Марины",
  "Calcarenite and cemented coastal sand": "Калькаренит и окремненный прибрежный песок",
  "Dolomitic limestone and sandstone": "Доломитовый известняк и песчаник",
  "Dense limestone and cemented sandstone": "Плотный известняк и окремненный песчаник",
  "Dense calcarenite of Business Bay / Canal basin": "Плотный калькаренит бассейна канала Бизнес Бэй",
  "Marine sandstone and siltstone": "Морской песчаник и алевролит",
  "Dense calcarenite and coastal sandstone of northern Marina": "Плотный калькаренит и прибрежный песчаник северной Марины",
  "Dense calcarenite of Opera District, Downtown Dubai": "Плотный калькаренит Оперного квартала Даунтаун Дубай",
  "Dense calcarenite and sandstone along Business Bay Canal": "Плотный калькаренит и песчаник вдоль канала Бизнес Бэй",
  "Dense calcarenite and cemented sandstone of Jumeirah Lakes basin": "Плотный калькаренит и окремненный песчаник бассейна озер JLT",
  "Engineered marine fill over natural calcarenite strata at Dubai Harbour": "Насыпной уплотненный морской грунт над коренным калькаренитом Дубай Харбор",
  "Engineered marine fill over dense calcarenite at Palm Jumeirah Trunk": "Инженерный насыпной грунт над плотным калькаренитом ствола Пальм Джумейра",
  "Dense inland sandstone and cemented calcarenite of JVC": "Плотный материковый песчаник и окремненный калькаренит района JVC",
  "Dense silty sandstone of Creek basin with deep pile anchoring": "Плотный илистый песчаник бассейна Крик с глубоким свайным анкерованием",
  "Dense calcarenite of Downtown Dubai basin": "Плотный калькаренит котлована Даунтаун Дубай",

  // Lateral Systems
  "Hexagonal central core with 3 buttresses forming Y-shaped footprint": "Шестиугольное центральное ядро с 3 контрфорсами (Y-образная форма)",
  "Equilateral triangular concrete core with corner outrigger steel composite columns": "Равностороннее треугольное железобетонное ядро с композитными угловыми колоннами",
  "Steel exoskeleton with composite diagonal mega-bracing and concrete mast": "Стальной экзоскелет с композитными диагональными мега-раскосами и центральной мачтой",
  "Cylindrical concrete core with spiraling perimeter column-beam frame": "Цилиндрическое ядро с радиально закрученным рамным каркасом",
  "Parametric steel diagrid envelope without internal load-bearing columns": "Параметрический стальной диагрид без единой внутренней несущей колонны",
  "Dual reinforced concrete towers linked by suspended steel cantilever truss (The Link)": "Двойные железобетонные башни, соединенные подвесной стальной фермой (The Link)",
  "Stepped modular concrete frames linked by steel skybridges": "Ступенчатые модульные железобетонные блоки, соединенные стальными мостами",
  "Tubular system of perimeter shear walls with central concrete core": "Трубчатая система несущих периметральных стен с центральным ядром",
  "Monolithic concrete shear wall core with perimeter moment frame": "Монолитное ядро с периметральным рамным каркасом",
  "Concrete central core with perimeter outriggers and mega-columns": "Центральное ядро с аутригерами и периметральными мегаколоннами",
  "Diamond-shaped concrete core with corner composite columns": "Ромбовидное бетонное ядро с композитными угловыми колоннами",
  "Massive slipformed end-core buttress pylons with central core": "Массивные скользящие торцевые пилоны-контрфорсы с центральным ядром",
  "Twisted concrete core with perimeter diagrid steel trusses and ceramic louvers": "Скрученное бетонное ядро с диагональными стальными фермами и керамическими ламелями",
  "Ultra-high-strength concrete central core with perimeter composite mega-columns": "Сверхпрочное центральное ядро с композитными периметральными мегаколоннами",
  "Monolithic concrete core with open vertical atrium voids and perimeter belt trusses": "Монолитное ядро со сквозным вертикальным атриумом и поясными фермами",
  "High-strength reinforced concrete shear core with steel outrigger trusses": "Высокопрочное ядро с аутригерными стальными фермами",
  "High-performance concrete core with wide post-tensioned spans": "Высокоэффективное ядро с широкими преднапряженными пролетами",
  "Two separate concrete cores linked by a 4-storey curved steel bridge": "Два раздельных бетонных ядра, объединенных 4-этажным изогнутым стальным мостом",
  "Faceted high-strength concrete core with composite exterior mega-columns": "Граненое высокопрочное ядро с внешними композитными мегаколоннами",
  "Curved concrete shear wall core with perimeter moment-resisting frame": "Изогнутое ядро жесткости с рамным периметральным каркасом",
  "Central cylindrical concrete core with flaring cantilever crown": "Цилиндрическое ядро с консольно расширяющейся чашеобразной короной",
  "Central circular core with radial rotating cantilevered floor slabs": "Круглое ядро с радиально вращающимися консольными перекрытиями",
  "Reinforced concrete core with wide post-tensioned spans and steel cantilever frames": "Железобетонное ядро с преднапряженными пролетами и стальными консолями",
  "Monolithic concrete core with post-tensioned flat slabs": "Монолитное ядро с постнапряженными безбалочными перекрытиями",
  "Twin concrete tower cores linked by suspended steel skybridge platform": "Двойные ядра башен, объединенные подвесной стальной платформой Skybridge",
  "Curvilinear concrete shear core with aerodynamic steel composite frame": "Криволинейное ядро жесткости с аэродинамическим сталежелезобетонным каркасом",

  // Damping & Wind
  "Stepped geometric setbacks disorganize vortex shedding across height (no tuned mass damper)": "Ступенчатые аэродинамические уступы дезорганизуют вихревые потоки (без инерционного демпфера)",
  "Triangular profile naturally channels high-altitude wind around towers": "Треугольный профиль естественным образом рассеивает высотные ветровые потоки",
  "Tuned mass dampers (TMD) installed within upper steel arch frame": "Инерционные демпферы массы (TMD) в верхних стальных арках каркаса",
  "90-degree continuous twist reduces vortex-shedding forces by 24%": "Непрерывный 90-градусный поворот снижает нагрузки от вихрей на 24%",
  "Torus aerodynamic shape naturally diffuses desert wind streamlines": "Тороидальная замкнутая форма плавно обтекается песчаными ветрами",
  "Tuned sloshing liquid dampers and structural damping in The Link truss": "Жидкостные демпферы и конструктивное демпфирование в ферме The Link",
  "Open void breaches between stepped blocks eliminate wind stagnation": "Сквозные проёмы между ступенчатыми блоками исключают ветровые застои",
  "Aerodynamic domed cupola minimizes wake buffeting at tower crown": "Аэродинамический купол минимизирует турбулентность на верхушке башни",
  "Stepped crown profile with corner chamfers to disrupt crosswind resonance": "Ступенчатый профиль короны со скошенными углами гасит поперечный резонанс",
  "Tapering stepped setbacks dissipate crosswind oscillation": "Сужающиеся ступенчатые уступы гасят поперечные колебания",
  "Aerodynamic chamfered diamond corners break up vortex shedding": "Скошенные ромбовидные углы рассекают ветровые вихри",
  "East-west orientation presents narrowest aerodynamic edge to prevailing desert winds": "Широтная ориентация встречает преобладающие ветра наименьшей площадью",
  "Spiral twisting ceramic facade disrupts coherent vortex shedding patterns": "Спиральный керамический фасад полностью разрушает когерентные вихревые следы",
  "Aerodynamic corner radiusing and permeable spire crown eliminate vortex lock-in": "Скругление углов и проницаемая корона исключают ветровой резонанс",
  "Open central vertical atrium allows cross-winds to pass through the building core": "Сквозной вертикальный атриум позволяет ветровым потокам проходить насквозь",
  "Aerodynamic tapering spire and perforated mechanical screen crown": "Аэродинамический сужающийся шпиль и перфорированная корона",
  "Sculpted aerofoil corners and recessed terraces mitigate vortex shedding": "Скульптурные скругленные углы и лоджии снижают ветровое давление",
  "Central organic void allows free wind passage, reducing lateral loads by 30%": "Центральная органическая пустота пропускает ветер, снижая нагрузки на 30%",
  "Faceted diamond geometry breaks cross-wind resonance and vortex oscillation": "Граненая геометрия бриллианта гасит резонансные ветровые колебания",
  "Nautical curved balconies deflect marine wind currents smoothly": "Изогнутые морские балконы плавно отводят прибрежные ветровые потоки",
  "Flared lotus-inspired crown acts as natural aerodynamic wind diffuser": "Расширяющаяся верхушка в форме цветка лотоса служит естественным диффузором",
  "30-degree rotation per floor creates overlapping windbreak vortex disruption": "Поворот на 30° на каждом этаже создает аэродинамический ветроразрыв",
  "Recessed double-height terrace voids allow wind flow through the structure": "Заглубленные террасы двойной высоты обеспечивают свободный продув здания",
  "Aerodynamic staggered towers with wind relief corridors between buildings": "Ступенчатое расположение башен с ветровыми коридорами между корпусами",
  "Double curved aerofoil profiles with wind-relieving gap beneath skybridge": "Двойные аэродинамические профили с ветровым зазором под мостом Skybridge",
  "Aerodynamic teardrop profile derived from automotive wind-tunnel testing": "Каплевидный аэродинамический профиль, испытанный в ветровом туннеле",

  // Facade Glazing
  "Double-glazed unitized curtain wall: high-performance solar control reflective outer pane + Low-E inner pane + argon gap": "Двухкамерный модульный фасад: солнцезащитное наружное стекло + Low-E внутреннее + аргон",
  "Double-glazed solar-reflective copper tinted glass with insulated aluminum spandrel panels": "Стеклопакеты с медным светоотражающим напылением и утепленные алюминиевые панели",
  "DuPont Teflon PTFE double-membrane fabric facade and structural solar control glass": "Двухслойное полотно DuPont Teflon PTFE и структурное солнцезащитное стекло",
  "High-performance solar control tinted double glazing with integrated shading screens": "Высокоэффективные тонированные стеклопакеты с интегрированными ламелями",
  "1,024 unique robotic-manufactured stainless steel & fiberglass panels with calligraphy cutouts": "1024 уникальные роботизированные панели из нержавеющей стали и стекловолокна с каллиграфией",
  "Unitized solar-reflective low-E curtain wall with ceramic frit horizontal shading louvers": "Модульный фасад Low-E с керамической фриттой и солнцезащитными жалюзи",
  "Unitized double-glazed facade with Low-E coating and operable sliding glass elements": "Модульный фасад с Low-E напылением и сдвижными стеклянными перегородками",
  "Double-glazed insulated solar control glass with colored aluminum composite cladding": "Стеклопакеты с солнцезащитным стеклом и композитные алюминиевые панели",
  "Reflective insulated double glazing with metallic ceramic-coated spandrel panels": "Светоотражающие стеклопакеты с металлизированными керамическими панелями",
  "Unitized Low-E curtain wall with silver-reflective coating and integrated LED illumination": "Модульный Low-E фасад с серебряным напылением и скрытой LED-подсветкой",
  "Faceted curtain wall with high-performance solar control glass resembling cut gemstone facets": "Граненый фасад с солнцезащитным стеклом, имитирующим грани алмаза",
  "Sun-screened double-glazed facade with deep horizontal external sun-shades (shading 40% of radiation)": "Фасад с глубокими горизонтальными солнцезащитными козырьками (гасят 40% радиации)",
  "Twisting ceramic fin facade: open-jointed terracotta fins provide passive shading to Low-E glass": "Спиральные керамические ламели обеспечивают пассивное затенение Low-E стекла",
  "Ultra-clear diamond-faceted Low-E double glazing with integrated exterior micro-LED mesh": "Сверхпрозрачное граненое Low-E стекло с интегрированной сеткой micro-LED",
  "Full-height high-transmission double glazed curtain wall with Low-E solar thermal barrier": "Панорамный фасад во всю высоту с тепловым барьером Low-E",
  "High-performance acoustic double glazing with gold-bronze solar reflective coating": "Акустические стеклопакеты с золотисто-бронзовым светоотражающим напылением",
  "Acoustic laminated Low-E double glazing designed for opera acoustics isolation": "Акустический ламинированный Low-E триплекс с шумоизоляцией концертного уровня",
  "Double-curved insulated glass units with bespoke fluid freeform silicone structural joints": "Двояковыпуклые стеклопакеты сложной формы со структурными силиконовыми швами",
  "Diamond-faceted double-glazed curtain wall with silver Low-E thermal coating (LEED Gold)": "Граненый Low-E фасад с серебряным теплозащитным слоем (сертификат LEED Gold)",
  "Full-height floor-to-ceiling Low-E marine-grade glazing with curved corner panels": "Панорамное морское Low-E остекление с бесшовными изогнутыми угловыми панелями",
  "High-performance solar reflective double glazing with ceramic fritted privacy patterns": "Светоотражающие стеклопакеты с керамической фриттой приватности",
  "Insulated solar control double glazing with cantilevered concrete sun-shading balconies": "Стеклопакеты с солнцезащитными консольными бетонными террасами",
  "Full-height double-glazed acoustic curtain wall with deep overhang shade canopies": "Панорамный акустический фасад с глубокими навесными солнцезащитными козырьками",
  "High-performance solar control double glazing with powder-coated aluminum louvers": "Солнцезащитные стеклопакеты с алюминиевыми порошковыми ламелями",
  "Unitized double-glazed curtain wall with silver reflective solar film and integrated shading": "Модульный фасад с серебряной солнцезащитной пленкой и затенением",
  "Aerodynamic solar-integrated facade: curved Low-E glass with integrated photovoltaic (PV) solar panels": "Аэродинамический фасад: изогнутое Low-E стекло со встроенными фотоэлектрическими панелями",

  // Elevators & Zoning
  "Sky lobby system at levels 43, 76, 123 separating shuttle express runs from local distribution banks": "Система скай-лобби на 43, 76 и 123 этажах, разделяющая экспресс-шаттлы и локальные группы",
  "Exterior panoramic glass elevators and high-speed interior passenger banks": "Панорамные наружные стеклянные лифты и скоростные внутренние группы",
  "Twin glass express elevators soaring through 182-meter atrium with direct helipad access": "Скоростные стеклянные лифты через 182-метровый атриум с прямым доступом к вертодрому",
  "Dedicated residential high-speed banks serving lower (1-40) and upper (41-73) residential tiers": "Высокоскоростные группы, раздельно обслуживающие нижние (1-40) и верхние (41-73) этажи",
  "Futuristic capsule elevators ascending through circular atrium with destination control": "Футуристические капсульные лифты в круглом атриуме с интеллектуальным управлением",
  "Dedicated shuttle lifts to The Link cantilever platform (Level 24) plus tower passenger banks": "Выделенные шаттлы в консоль The Link на 24 этаж плюс жилые и офисные группы",
  "Multiple express vertical banks separating hotel guests, club members, and private residence owners": "Раздельные группы для гостей отеля, клубных зон и частных владельцев резиденций",
  "High-speed passenger banks with destination-dispatch system: low-rise and high-rise zoning": "Скоростные группы с интеллектуальным назначением этажей: низкая и высокая зоны",
  "Dual-zone passenger elevators with dedicated express cars to observation deck": "Двухзонная система с экспресс-лифтами на смотровую площадку",
  "High-speed elevators with destination pre-selection; dedicated service & banquet lifts": "Скоростные лифты с предварительным выбором этажа; банкетные и сервисные группы",
  "Single core with destination-control passenger banks divided into lower and upper zones": "Единое ядро с системой управления вызовами, разделенное на верхнюю и нижнюю зоны",
  "Sky lobby on Level 30 separates lower commercial office floors from upper luxury apartments": "Скай-лобби на 30 этаже разделяет нижние офисные этажи и верхние жилые резиденции",
  "Vertical zoning serving commercial offices, 5-star Mandarin Oriental hotel, and private branded suites": "Вертикальное зонирование: офисы, 5-звездочный отель Mandarin Oriental и резиденции",
  "Ultra-high-speed private passenger banks serving high-altitude luxury sky penthouses": "Сверхскоростные приватные лифты для высотных пентхаусов Billionaire Penthouses",
  "Direct express shuttles from ground lobby to Level 81 rooftop pool & observatory": "Прямые экспресс-шаттлы из лобби в инфинити-бассейн на 81 этаже и смотровую галерею",
  "High-speed passenger elevators with dedicated private penthouse express shuttles": "Скоростные пассажирские группы и приватные экспресс-шаттлы для пентхаусов",
  "Private elevator access: each high-floor apartment features direct access into private foyer": "Приватный доступ: каждая квартира имеет персональный лифтовой холл",
  "Independent vertical cores for ME by Meliá hotel, commercial office wing, and serviced suites": "Независимые ядра для отеля ME by Meliá, офисного крыла и резиденций",
  "Destination-dispatch passenger elevators serving SO/ Uptown Hotel and Grade-A DMCC offices": "Лифты с интеллектуальным назначением для отеля SO/ Uptown и офисов класса А",
  "Private passenger banks with biometric access to full-floor and half-floor residences": "Приватные лифты с биометрическим доступом к резиденциям на пол-этажа и этаж",
  "High-speed passenger banks to St. Regis Hotel, The View observatory, and AURA Skypool": "Скоростные лифты к отелю St. Regis, смотровой площадке The View и бассейну AURA",
  "Central cylindrical elevator core with high-speed passenger cars and dedicated room service lifts": "Центральное круглое ядро со скоростными лифтами и отдельными сервисными кабинами",
  "Private elevator lobbies with biometric entry direct into each exclusive residence": "Приватные лифтовые холлы с биометрическим входом прямо в квартиру",
  "Dedicated residential elevator banks with card-access security to each residential level": "Выделенные жилые группы с карточным контролем доступа на этажи",
  "High-speed shuttle lifts to Skybridge observation deck and dedicated residential tower elevators": "Скоростные шаттлы на смотровую площадку Skybridge и отдельные лифты для резидентов",
  "Ultra-fast private elevators equipped with intelligent destination dispatch and VIP access": "Сверхскоростные приватные лифты с интеллектуальным контролем и VIP-доступом",

  // Balconies
  "Residential balconies omitted above Level 108 due to extreme aerodynamic vortex velocity; recessed loggias at lower tiers": "Выше 108 этажа балконы исключены из-за ураганных скоростей ветра; внизу — заглубленные лоджии",
  "No external balconies; full-height motorized openable facade vents on hotel levels": "Без внешних балконов; на гостиничных уровнях — панорамные открывающиеся фрамуги",
  "No balconies; full-height climate-controlled panoramic curtain walls with solar reflection": "Без балконов; климатизированные панорамные витражи во всю стену со светоотражением",
  "Generous curved cantilevered balconies with glass balustrades and marine vistas": "Просторные изогнутые консольные балконы со стеклянными ограждениями и видом на море",
  "Internal viewing terrace within the central elliptical void offering downtown vistas": "Внутренняя смотровая терраса в эллиптической пустоте с панорамой Даунтауна",
  "Massive public sky-deck and infinity pool atop The Link cantilever structure": "Огромная общественная терраса и 120-метровый инфинити-бассейн на вершине The Link",
  "44 private cantilevered infinity plunge pools integrated into residential sky-courts": "44 приватных консольных инфинити-бассейна, врезанных в террасы резиденций",
  "Open wind-protected balconies with tempered glass balustrades offering full Marina views": "Открытые ветрозащитные балконы с триплекс-ограждением и видом на Марину",
  "Recessed loggias on intermediate tiers; panoramic enclosed viewing lounge at tower crown": "Заглубленные лоджии на средних ярусах; закрытая панорамная галерея на вершине",
  "Terraces with glass balustrades directly fronting Burj Lake and Fountain displays": "Террасы со стеклянным ограждением прямо напротив озера Бурдж и шоу фонтанов",
  "No exterior balconies (commercial high-rise); internal double-height break-out lounges": "Без балконов (коммерческий небоскреб); внутренние лаунжи двойной высоты",
  "Large shaded outdoor loggias integrated into the north-facing facade": "Большие затененные открытые лоджии на северном фасаде здания",
  "Integrated vertical open-air garden terraces and sky lounges climbing the twisting facade": "Висячие открытые сады и лаунжи, поднимающиеся по спиральному фасаду",
  "Private cantilevered plunge pools embedded in multi-level sky penthouses": "Приватные консольные бассейны в многоуровневых пентхаусах",
  "Open glass-encased rooftop viewing deck and cantilevered infinity pool at 360m": "Открытая стеклянная смотровая палуба и консольный бассейн на высоте 360 м",
  "Private landscaped sky terraces with temperature-controlled plunge pools": "Приватные видовые террасы с индивидуальными бассейнами",
  "Expansive wraparound deep terraces with outdoor dining areas fronting Dubai Opera": "Огромные глубокие террасы с обеденными зонами прямо перед Дубайской Оперой",
  "Private landscaped roof terraces and central internal viewing balconies overlooking the void": "Приватные террасы на крыше и смотровые балконы с видом на органическую пустоту",
  "No open balconies (commercial/hotel); operable climate vents and high-ceiling sky lounge": "Без открытых балконов; климатические форточки и панорамный высотный лаунж",
  "Extensive wraparound nautical balconies with glass windbreaks and yacht harbor vistas": "Огромные круговые морские балконы с ветрозащитными экранами и видом на яхты",
  "No open residential balconies; access to 50th-floor 360-degree AURA infinity skypool": "Без балконов в апартаментах; прямой доступ в панорамный бассейн AURA на 50 этаже",
  "269 private temperature-controlled swimming pools on rotational cantilever terraces": "269 частных подогреваемых бассейнов на спиральных консольных террасах",
  "Massive outdoor sky terraces with private temperature-controlled plunge pools": "Огромные открытые террасы с приватными подогреваемыми бассейнами",
  "Deep waterfront balconies with unobstructed creek and skyline views": "Глубокие набережные балконы с прямыми панорамами на залив Крик и горизонт",
  "Open sky-deck and cantilevered glass infinity pool on 220m Skybridge platform": "Открытая смотровая палуба и консольный бассейн на мосту Skybridge на высоте 220 м",
  "Aerodynamic integrated balconies with solar-shading screens and Burj Khalifa views": "Аэродинамические балконы с солнцезащитными экранами и панорамой на Бурдж-Халифа",
};

/**
 * Automatically translates building technical data into Russian
 */
export function translateBuildingSpecsRU(building: Building): Building {
  const b = { ...building };

  if (b.foundation) {
    b.foundation = {
      ...b.foundation,
      bedrockType: TECH_TERMS_RU[b.foundation.bedrockType] || b.foundation.bedrockType,
      raftThicknessMeters: b.foundation.raftThicknessMeters.replace("solid reinforced concrete", "монолитный железобетон").replace("raft", "ростверк"),
    };
  }

  if (b.windStructural) {
    b.windStructural = {
      ...b.windStructural,
      lateralSystem: TECH_TERMS_RU[b.windStructural.lateralSystem] || b.windStructural.lateralSystem,
      dampingMechanism: TECH_TERMS_RU[b.windStructural.dampingMechanism] || b.windStructural.dampingMechanism,
    };
  }

  if (b.facade) {
    b.facade = {
      ...b.facade,
      glazingType: TECH_TERMS_RU[b.facade.glazingType] || b.facade.glazingType,
      bmuCleaningSystem: TECH_TERMS_RU[b.facade.bmuCleaningSystem] || b.facade.bmuCleaningSystem,
      cleaningCycleDays: b.facade.cleaningCycleDays.replace("days", "дней").replace("cleaning technicians per full cycle", "специалистов на цикл"),
    };
  }

  if (b.verticalTransport) {
    b.verticalTransport = {
      ...b.verticalTransport,
      zoningStrategy: TECH_TERMS_RU[b.verticalTransport.zoningStrategy] || b.verticalTransport.zoningStrategy,
      peakWaitingSeconds: b.verticalTransport.peakWaitingSeconds.replace("seconds average", "секунд в среднем").replace("seconds", "секунд"),
    };
  }

  if (b.operatingSpecs) {
    b.operatingSpecs = {
      ...b.operatingSpecs,
      coolingProvider: TECH_TERMS_RU[b.operatingSpecs.coolingProvider] || b.operatingSpecs.coolingProvider,
      chillerBilling: (TECH_TERMS_RU[b.operatingSpecs.chillerBilling] as any) || b.operatingSpecs.chillerBilling,
      acousticRatingDb: b.operatingSpecs.acousticRatingDb.replace("dual decoupled acoustic walls between residences", "двойные акустически развязанные стены между квартирами"),
    };
  }

  if (b.layoutEfficiency) {
    b.layoutEfficiency = {
      ...b.layoutEfficiency,
      columnImpact: (TECH_TERMS_RU[b.layoutEfficiency.columnImpact] as any) || b.layoutEfficiency.columnImpact,
      balconyUsability: TECH_TERMS_RU[b.layoutEfficiency.balconyUsability] || b.layoutEfficiency.balconyUsability,
    };
  }

  if (b.urbanIntegration && TECH_TERMS_RU[b.urbanIntegration]) {
    b.urbanIntegration = TECH_TERMS_RU[b.urbanIntegration];
  }

  return b;
}
`;

fs.writeFileSync('src/data/technicalTranslations.ts', code, 'utf8');
console.log('Successfully written comprehensive technicalTranslations.ts!');
