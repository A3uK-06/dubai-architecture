import { Building } from "./buildings";
import { LanguageCode } from "../i18n/languages";
import { LATERAL_SYSTEMS_I18N } from "./localizedLateralSystems";

// Complete Russian technical translations dictionary for building passports
export const TECH_TERMS_RU: Record<string, string> = {
  "Dense calcarenite and gypsiferous sandstone with cathodic corrosion protection": "Плотный калькаренит и гипсоносный песчаник с катодной антикоррозионной защитой",
  "Fractured calcisiltite and siltstone with high-capacity friction piles": "Трещиноватый кальцисильтит и алевролит с висячими сваями повышенной несущей способности",
  "Dense marine sediment bedrock with hydraulic sea-barrier diaphragm wall": "Плотный коренной морской осадочный пласт с противофильтрационной гидробарьерной стеной в грунте",
  "Dense coastal calcarenite along the Marina canal wall": "Плотный прибрежный калькаренит вдоль подпорной стены канала Марина",
  "Dense calcarenite with seismic isolation bearings": "Плотный калькаренит с сейсмоизолирующими опорными частями",
  "Dense calcarenite strata with lateral earth-retaining diaphragm walls": "Пласты плотного калькаренита с боковыми удерживающими стенами в грунте",
  "Compacted marine sand fill resting on sound marine limestone": "Уплотненный морской песчаный грунт, опирающийся на монолитный морской известняк",
  "Dense calcarenite along the Marina northern canal line": "Плотный калькаренит вдоль северной береговой линии канала Марина",
  "Calcarenite bedrock with socketed high-capacity friction piles": "Коренной калькаренит с заделанными сваями трения высокой несущей способности",
  "Dense calcarenite sandstone": "Плотный калькаренитовый песчаник",
  "Dense calcisiltite marine bedrock": "Плотный морской коренной кальцисильтит",
  "Dense calcarenite bedrock": "Плотный коренной калькаренит",
  "Dense calcarenite with lateral seismic retaining walls": "Плотный калькаренит с боковыми сейсмостойкими подпорными стенами",
  "Deep marine calcarenite bedrock socketed at extreme pressures": "Глубокий морской калькаренит с анкерованием свай при экстремальных давлениях",
  "Dense calcarenite strata near Marina canal": "Слои плотного калькаренита вблизи канала Марина",
  "Dense coastal calcarenite with high-capacity friction piles": "Плотный прибрежный калькаренит с высокопрочными сваями трения",
  "Dense calcarenite bedrock with zero settlement monitoring": "Коренной калькаренит с геодезическим мониторингом нулевой осадки",
  "Dense calcarenite adjacent to Dubai Water Canal": "Плотный калькаренит, примыкающий к Дубайскому водному каналу",
  "Dense calcarenite marine bedrock": "Морской коренной плотный калькаренит",
  "Dense coastal calcarenite with deep marine cathodic protection": "Плотный прибрежный калькаренит с глубоководной катодной защитой свай",
  "Compacted sand fill over solid marine limestone": "Уплотненная песчаная подушка поверх монолитного морского известняка",
  "Dense inland calcarenite and mudstone": "Плотный материковый калькаренит и аргиллит",
  "Dense calcarenite along Dubai Water Canal": "Плотный калькаренит вдоль Дубайского водного канала",
  "Dense marine sediment bedrock with cathodic corrosion protection": "Коренной морской осадочный пласт с активной катодной защитой от коррозии",
  "Dense calcarenite bedrock with zero settlement foundation engineering": "Коренной калькаренит с инженерией фундамента для компенсации неравномерных осадок",
  "Dense calcarenitic / silty sandstone with calcisiltite seams": "Плотный калькаренит и илистый песчаник с прослойками кальцисильтита",
  "Marine limestone and cemented sandstone": "Морской известняк и окремненный песчаник",
  "Solid calcarenite and coastal sandstone": "Монолитный калькаренит и прибрежный песчаник",
  "3.7 m solid reinforced concrete": "3.7 м монолитный железобетонный ростверк",
  "2.8 m": "2.8 м монолитный железобетонный ростверк",
  "Offshore artificial island secured with hollow concrete armor units": "Искусственный остров с защитой фасонными бетонными тетраподами-волноломами",
  "3.2 m reinforced concrete mat": "3.2 м монолитная железобетонная фундаментная плита",
  "2.4 m": "2.4 м монолитная железобетонная плита",
  "3.5 m dual foundation mats flanking the highway tunnel": "3.5 м парные фундаментные плиты по обе стороны автодорожного тоннеля",
  "2.6 m coastal mat slab": "2.6 м прибрежная фундаментная плита",
  "3.2 m": "3.2 м монолитная плита",
  "3.4 m": "3.4 м монолитный ростверк",
  "3.0 m": "3.0 м железобетонная плита",
  "4.2 m solid reinforced concrete mat": "4.2 м сплошная монолитная железобетонная плита",
  "3.8 m reinforced concrete slab": "3.8 м монолитная железобетонная плита",
  "2.5 m": "2.5 м монолитная плита",
  "2.6 m": "2.6 м монолитная плита",
  "2.2 m": "2.2 м монолитная плита",
  "3.2 m dual foundation slabs": "3.2 м двойные фундаментные плиты",
  "Hexagonal concrete core buttressed by three wing walls extending to perimeter columns": "Шестиугольное бетонное ядро с тремя контрфорсными крыльями, выходящими к периметральным колоннам",
  "Composite core wall system with perimeter triangular steel rakers": "Композитное центральное ядро жесткости с периметральными треугольными стальными раскосами",
  "Massive external steel truss exoskeleton (": "Массивный внешний стальной решетчатый экзоскелет с диагональными связями",
  "Massive external steel truss exoskeleton": "Массивный внешний стальной решетчатый экзоскелет с диагональными связями",
  "Cylindrical slip-formed central core with post-tensioned flat floor slabs": "Цилиндрическое скользящее центральное ядро с преднапряженными безбалочными перекрытиями",
  "Spatial steel diagrid framework with parametric node connections": "Пространственный стальной диагрид (сетчатая оболочка) с параметрическими узловыми соединениями",
  "Coupled twin-tower system tied structurally through the rigid cantilever box truss": "Спаренная двухбашенная система, объединенная жесткой пространственной консольной фермой (The Link)",
  "Stepped concrete core blocks tied via composite horizontal sky bridges": "Ступенчатые железобетонные блоки, объединенные композитными горизонтальными скай-мостами",
  "High-strength concrete central core tied with outriggers at plant floors 30, 60, and 90": "Высокопрочное центральное железобетонное ядро с аутригерами на технических этажах 30, 60 и 90",
  "Concrete shear core with perimeter mega-columns and four outrigger plant levels": "Железобетонное ядро жесткости с периметральными мегаколоннами и четырьмя аутригерными поясами",
  "Concrete core walls with shear outriggers at plant levels": "Железобетонные стены ядра с аутригерными диафрагмами на технических этажах",
  "Twin-lobed elliptical concrete core wall system": "Двухлепестковое эллиптическое железобетонное ядро жесткости",
  "Four massive tapered concrete shear walls at north/south edges functioning as monumental buttresses": "Четыре массивные сужающиеся диафрагмы жесткости на торцах, работающие как монументальные контрфорсы",
  "Concrete shear core with outriggers tying the perimeter twisting frame": "Железобетонное ядро жесткости с аутригерами, связывающими спирально закрученный периметр",
  "Mega-core with belt trusses and 4 mechanical outrigger levels": "Мега-ядро жесткости с поясными фермами и 4 уровнями технических аутригеров",
  "Concrete shear core with structural steel transfer trusses spanning the atrium void": "Железобетонное ядро жесткости со стальными перераспределительными фермами через атриумную пустоту",
  "Mega-core wall with three tiers of steel outrigger trusses": "Мощное ядро жесткости с тремя ярусами стальных аутригерных ферм",
  "High-rigidity concrete central core with perimeter structural outriggers": "Сверхжесткое центральное ядро с периметральными конструктивными аутригерами",
  "Dual concrete core towers tied structurally across the three-storey bridge truss": "Двойные башни с собственными ядрами, объединенные трехэтажной мостовой фермой",
  "High-performance concrete core wall with structural outriggers": "Высокопрочное ядро жесткости с системой конструктивных аутригеров",
  "Rigid central shear core with aerodynamic curved aerodynamic corners": "Жесткое центральное ядро жесткости со скругленными аэродинамическими углами",
  "Central shear core with cantilevered rooftop pool slab": "Центральное ядро жесткости с консольной плитой панорамного бассейна на крыше",
  "Cylindrical slipformed central core wall system": "Цилиндрическое ядро жесткости, возведенное в скользящей опалубке",
  "Rigid concrete shear core with outriggers": "Жесткое железобетонное ядро жесткости с аутригерными связями",
  "Concrete core walls with flat floor slab construction": "Монолитные стены ядра жесткости с плоскими безбалочными плитами перекрытия",
  "Coupled twin concrete cores tied by the rigid 3-storey steel Sky Bridge": "Спаренные монолитные ядра, жестко объединенные 3-этажным стальным мостом Sky Bridge",
  "Rigid central shear core with aerodynamic continuous elliptical wrapping": "Жесткое центральное ядро жесткости с непрерывной обтекаемой эллиптической формой",
  "Aerodynamic stepping (26 spiral setbacks) disrupts vortex shedding; zero mechanical TMD required": "Ступенчатая форма (26 спиральных уступов) дезорганизует вихревые потоки; механический демпфер TMD не требуется",
  "Triangular geometry naturally sheds wind across diagonal apexes": "Треугольная геометрия естественным образом рассеивает ветровые потоки вдоль вершин",
  "Tuned mass liquid sloshing dampers installed inside the upper mast": "Жидкостные демпферы гашения колебаний, установленные внутри верхней шпилевой мачты",
  "Helical geometry fundamentally disrupts wind vortex shedding by breaking wind currents": "Спиралевидная геометрия полностью разрушает ветровые вихри, исключая резонансные колебания",
  "Torus void relieves aerodynamic drag forces by allowing wind through the center": "Тороидальная пустота снижает лобовое аэродинамическое сопротивление, свободно пропуская ветер",
  "Tuned mass dampers (TMD) installed at the cantilever tip to suppress foot-traffic harmonics": "Инерционные демпферы (TMD) на консоли The Link для подавления пешеходных и ветровых гармоник",
  "Permeable voids between blocks allow sea breezes to pass freely, eliminating drag": "Проницаемые проёмы между ступенчатыми блоками пропускают морской бриз, устраняя парусность",
  "Tuned liquid column damper at level 98 to limit acceleration": "Жидкостный колонный демпфер на 98-м этаже для ограничения динамических ускорений",
  "Tuned mass damper at level 99": "Инерционный маятниковый демпфер (TMD) на 99-м этаже",
  "Stepped pyramid massing sheds wind loads diagonally": "Ступенчатый пирамидальный объем рассеивает ветровые нагрузки по диагонали",
  "Aerodynamic tapered diamond edges minimize wind turbulence": "Аэродинамически скошенные ромбовидные грани минимизируют ветровую турбулентность",
  "Solid end walls resist crosswinds; central aero-voids relieve buffeting": "Массивные глухие торцы воспринимают боковой ветер; центральные аэродинамические проемы гасят пульсации",
  "Twisting contrapposto geometry diffuses wind load pressures across all 4 faces": "Спиральная контрапостная геометрия плавно перераспределяет ветровое давление по всем четырем граням",
  "Dual tuned mass dampers (TMD) installed at level 101": "Два спаренных инерционных демпфера массы (TMD) на 101-м этаже",
  "Central aerodynamic void allows cross-winds to pass freely through the upper tower": "Центральная аэродинамическая пустота свободно пропускает сквозные ветры через верхний ярус",
  "Tuned mass damper (TMD) housed behind the monumental clock face": "Инерционный маятниковый демпфер (TMD), скрытый за монументальным часовым циферблатом",
  "Tapered stepped corners soften vortex shedding": "Скошенные ступенчатые углы смягчают срыв вихревых потоков",
  "Central aerodynamic void relieves wind pressure across the structure": "Центральная биоморфная пустота снимает ветровое давление со всей конструкции",
  "Faceted chamfered corners break wind vortices and suppress buffeting": "Граненые скошенные углы разрушают ветровые вихри и подавляют бафтинг",
  "Curved prow facade channels sea winds gracefully with minimal lateral deflection": "Изогнутый форштевневый фасад плавно направляет морские ветры с минимальным отклонением вершины",
  "Tapered aerodynamic profile reduces crosswind accelerations": "Сужающийся аэродинамический профиль снижает поперечные ветровые ускорения",
  "Circular spiral massing naturally diffuses and cancels vortex shedding forces": "Круглый спиральный объем естественно рассеивает и гасит силы срыва вихрей",
  "Low aerodynamic profile and stepped balconies eliminate severe wind turbulence": "Умеренный высотный профиль и террасные балконы исключают ветровую турбулентность",
  "Low aerodynamic drag profile along the protected creek basin": "Аэродинамический профиль с низким коэффициентом сопротивления в тихой бухте Крик",
  "Tuned mass liquid dampers installed within the Sky Bridge floor trusses": "Жидкостные демпферы колебаний, встроенные в несущие фермы моста Sky Bridge",
  "Tapered curved teardrop geometry naturally streamlines Gulf wind forces": "Каплевидная аэродинамическая форма плавно обтекается ветрами Залива",
  "C80 Self-Compacting Concrete (up to floor 127), C60 up to floor 156": "Самоуплотняющийся бетон C80 (до 127 этажа), C60 до 156 этажа",
  "Grade 60 and 70 high-durability microsilica concrete": "Высокопрочный бетон классов B60 и B70 с микрокремнеземом",
  "Marine-grade sulfate-resistant C60/70 concrete": "Сульфатостойкий гидротехнический бетон C60/70 морского класса",
  "C70 high-strength concrete": "Высокопрочный бетон класса C70",
  "High-grade foundation concrete with structural steel superstructure": "Высокомарочный фундаментный бетон в сочетании со стальным суперкаркасом",
  "C80 high-strength concrete": "Высокопрочный монолитный бетон C80",
  "Marine-grade C60 concrete with cathodic protection": "Бетон C60 морского класса с активной катодной защитой арматуры",
  "C80 concrete in lower core, stepping to C50 at the crown": "Бетон C80 в нижней части ядра с переходом на C50 в оголовке",
  "C80 concrete": "Высокопрочный бетон C80",
  "C70 concrete": "Монолитный бетон класса C70",
  "High-density C80 architectural exposed concrete": "Высокоплотный архитектурный лицевой бетон C80",
  "C80 self-compacting concrete": "Самоуплотняющийся бетон C80",
  "C90 and C100 advanced high-performance concrete": "Сверхпрочный высокотехнологичный бетон классов C90 и C100",
  "C75 high-strength concrete": "Высокопрочный бетон класса C75",
  "C85 high-durability concrete": "Высокопрочный долговечный бетон класса C85",
  "C75 concrete": "Монолитный бетон класса C75",
  "C70 marine-grade concrete": "Морской сульфатостойкий бетон C70",
  "C65 concrete": "Монолитный бетон класса C65",
  "Double-glazed Low-E with silver coating, textured stainless steel spandrels": "Двухкамерный Low-E стеклопакет с серебряным напылением и текстурированными панелями из нержавеющей стали",
  "Copper-tinted reflective double glazing with silver anodized aluminum panels": "Светоотражающие стеклопакеты с медным тонированием и анодированные алюминиевые панели",
  "PTFE Teflon-coated woven glass-fiber fabric atrium wall + solar reflective glass": "Двухслойное мембранное полотно DuPont PTFE Teflon и структурное солнцезащитное стекло",
  "Curved double-glazed Low-E glass with exterior architectural titanium-finish louvers": "Гнутые двухкамерные Low-E стеклопакеты с внешними титановыми солнцезащитными ламелями",
  "Molded triple-glazed insulating units cut into Arabic calligraphy shapes": "Формованные трехкамерные стеклопакеты сложной формы в контуре арабской каллиграфии",
  "Low-iron double-glazed curtain wall with solar acoustic interlayers": "Осветленный Low-Iron фасад с солнцезащитными и шумоизоляционными триплекс-прослойками",
  "Triple-laminated acoustic low-E glass with natural Italian travertine cladding": "Трехслойный ламинированный акустический Low-E триплекс с облицовкой натуральным итальянским травертином",
  "Double-glazed reflective curtain wall with composite aluminum cladding": "Двухкамерный зеркальный модульный фасад с алюминиевыми композитными панелями",
  "Double-glazed reflective unitized curtain wall with anodized aluminum trims": "Модульный солнцезащитный фасад с анодированными алюминиевыми профилями",
  "Double-glazed Low-E unitized glass with fire-rated A2 mineral-core composite panels": "Модульные Low-E стеклопакеты с огнестойкими композитными панелями класса А2",
  "Silver-reflective double glazed Low-E curtain wall": "Светоотражающий модульный Low-E фасад с серебристым металлизированным слоем",
  "Deeply recessed double-glazed Low-E south facade with integrated horizontal sunshades": "Заглубленный южный Low-E фасад с интегрированными горизонтальными солнцезащитными козырьками",
  "Triple-glazed Low-E units with angled glazed ceramic louvers tuned to solar angles": "Трехкамерные Low-E стеклопакеты с наклонными керамическими ламелями под угол падения солнечных лучей",
  "Acoustic triple-glazed Low-E unitized curtain wall with champagne gold accents": "Акустический трехкамерный Low-E модульный фасад с акцентами цвета шампанского золота",
  "Double-glazed acoustic Low-E curtain wall with integrated silver thermal coatings": "Двухкамерный акустический Low-E витраж с серебряным теплоотражающим барьером",
  "Custom tinted triple-glazed Low-E glass with polished bronze metallic ribs": "Тонированные трехкамерные Low-E стеклопакеты с ребрами из полированной бронзы",
  "Floor-to-ceiling acoustic Low-E triple glazing with natural stone cladding": "Панорамное акустическое Low-E остекление в три слоя с отделкой натуральным камнем",
  "Digitally printed dot-matrix Low-E glass with 3D hot-bent insulated void panels": "Low-E стекло с матричной шелкографией и 3D моллированными термоизолированными панелями",
  "Triangular unitized double-glazed Low-E reflective curtain wall": "Треугольный модульный двухкамерный Low-E фасад с зеркальным эффектом",
  "Acoustic marine double-glazed Low-E glass with marine-grade anti-corrosive powder coating": "Морские акустические двухкамерные Low-E стеклопакеты с антикоррозийным порошковым напылением",
  "Double-glazed acoustic Low-E glass with metallic decorative spandrels": "Двухкамерный акустический Low-E витраж с металлическими декоративными поясами",
  "Reflective double-glazed Low-E glass with exterior waterproof tiled cantilever balconies": "Светоотражающие Low-E стеклопакеты с гидроизолированными консольными террасами",
  "Floor-to-ceiling ultra-clear low-iron acoustic Low-E glass with motorized sliding panels": "Сверхпрозрачное осветленное Low-Iron панорамное остекление с моторизованными раздвижными секциями",
  "Double-glazed Low-E unitized glass with acoustic interlayers": "Двухкамерные модульные Low-E стеклопакеты с акустической звукопоглощающей пленкой",
  "Double-glazed Low-E unitized curtain wall with external silver louvers": "Модульный двухкамерный Low-E витраж с наружными серебристыми ламелями",
  "BIPV (Building-Integrated Photovoltaic) triple-glazed Low-E smart glass": "Интегрированное фотоэлектрическое умное стекло BIPV с тройным стеклопакетом Low-E",
  "18 track-mounted Building Maintenance Units (BMUs) housed in concealed wall recesses": "18 рельсовых фасадных люлек (BMU) в скрытых настенных нишах",
  "Rooftop gantry cranes with telescoping booms": "Крышные портальные краны с телескопическими стрелами",
  "Concealed track lines and custom rope-access anchors": "Скрытые направляющие рельсы и точки сертифицированного промышленного альпинизма",
  "Twin articulated BMU arms on roof tracks adapting to twisted facade contours": "Спаренные шарнирные стрелы BMU на крышных путях, огибающие закрученный фасад",
  "Rope-access custom magnetic track crawlers": "Роботизированные магнитные гусеничные платформы и альпинистские анкеры",
  "Automated traversing BMUs on roof parapets and under The Link floor soffit": "Автоматические краны BMU на парапетах крыши и на нижней плоскости консоли The Link",
  "Articulated boom cranes on penthouse sky terraces": "Шарнирные стреловые краны на террасах пентхаусов",
  "Perimeter monorail BMU system beneath the dome": "Периметральная монорельсовая система BMU под купольной частью",
  "Rooftop boom cranes anchored beneath the crown pinnacle": "Крышные стреловые краны, закрепленные под шпилем короны",
  "Rooftop BMU telescopic cranes on circular tracks": "Телескопические краны BMU на кольцевых крышных путях",
  "Concealed track-mounted BMU units in rooftop spire": "Скрытые рельсовые установки BMU внутри конструкции шпиля",
  "Gantry cranes traveling along the top horizontal parapet beam": "Портальные краны, перемещающиеся по верхней балке парапета",
  "Concealed articulated BMU tracks between vertical ceramic fins": "Скрытые шарнирные направляющие BMU в пазах между керамическими ламелями",
  "Robotic high-speed tracked BMUs stored inside the crystal crown": "Роботизированные высокоскоростные рельсовые BMU, скрытые внутри кристаллической короны",
  "Rooftop gantry and atrium interior travelling cradles": "Крышный портал и внутренние самоходные люльки для обслуживания атриума",
  "Concealed clocktower gantry cranes and perimeter tracks": "Скрытые портальные краны за башней с часами и кольцевые рельсовые пути",
  "Rooftop telescoping boom cranes on continuous track rails": "Телескопические стреловые краны на замкнутом рельсовом контуре крыши",
  "Custom traversing cradles following the 3D organic curve of the central void": "Специальные люльки, повторяющие 3D-изгиб центральной органической пустоты",
  "Rooftop retractable BMU cranes with rotating telescopic arms": "Крышные выдвижные краны BMU с полноповоротными телескопическими стрелами",
  "Perimeter track-mounted BMUs hidden in the rooftop superstructure": "Периметральные рельсовые BMU, спрятанные в надстройке крыши",
  "Rooftop monorail BMU system traversing the perimeter": "Крышная монорельсовая система BMU по всему внешнему контуру",
  "Articulated boom cranes adapting to the rotational stepped facade": "Шарнирные крановые стрелы, адаптированные к ступенчатому вращению этажей",
  "Concealed rooftop track cranes": "Скрытые крышные рельсовые краны",
  "Rooftop monorail BMU systems": "Крышные монорельсовые фасадные комплексы",
  "Rooftop telescopic cranes and under-bridge traversal tracks": "Телескопические крышные стрелы и подмостовые траверсные пути",
  "Automated robotic crawler systems traversing curved facade seams": "Автоматические роботизированные скалолазные комплексы по швам криволинейного фасада",
  "90-120 days for a full exterior wash cycle": "90–120 дней на полный цикл мойки фасада",
  "60 days": "60 дней",
  "Continuous maintenance": "Непрерывный цикл обслуживания",
  "75 days": "75 дней",
  "30 days continuous": "30 дней (непрерывно)",
  "45 days": "45 дней",
  "90 days": "90 дней",
  "50 days": "50 дней",
  "Express shuttles to sky lobbies at Levels 43, 76, and 123 serving local zones": "Экспресс-шаттлы до скай-лобби на 43, 76 и 123 этажах, обслуживающие локальные ярусы",
  "Panoramic glass lifts facing SZR plus high-speed commercial banks": "Панорамные стеклянные лифты с видом на Sheikh Zayed Road и скоростные офисные группы",
  "Express glass panoramic lifts racing up the exterior to Al Muntaha": "Скоростные панорамные стеклянные лифты наружного скольжения в ресторан Al Muntaha",
  "Central core elevator banks serving low, mid, and high residential sectors": "Лифтовые группы центрального ядра, раздельно обслуживающие нижний, средний и высокий секторы",
  "Cylindrical glass observation elevators in central atrium": "Цилиндрические стеклянные обзорные капсулы в центральном атриуме",
  "Dedicated express shuttles direct to The Link podium at Level 24": "Выделенные экспресс-шаттлы прямо на консольный подиум The Link на 24-м этаже",
  "Private elevators opening directly inside residential foyer vestibules": "Приватные лифты с персональным выходом прямо в холл каждой квартиры",
  "Zoned into low-rise (1-50) and high-rise (51-97) express banks": "Зонирование на низкую (1–50 этажи) и высокую (51–97 этажи) скоростные группы",
  "Segregated hotel lifts vs high-rise residential express corridors": "Раздельные лифтовые шахты для отеля и скоростных коридоров жилых резиденций",
  "Express hotel passenger elevators + separate serviced residence banks": "Экспресс-лифты для гостей отеля плюс отдельные изолированные группы для резиденций",
  "Four distinct vertical zones with destination dispatch": "Четыре независимые вертикальные зоны с интеллектуальным распределением вызовов",
  "Double-deck express shuttles direct to Level 30 Sky Lobby": "Двухпалубные экспресс-шаттлы прямо на уровень 30 (Sky Lobby)",
  "Ultra-fast destination dispatch with dedicated Mandarin Oriental banks": "Сверхскоростные лифты с интеллектуальным вызовом и выделенными группами отеля Mandarin Oriental",
  "Ultra-high-speed express shuttles serving sky lounges and private penthouse lifts": "Сверхскоростные шаттлы в скай-лаунжи и персональные лифты для высотных пентхаусов",
  "Express glass observation lifts ascending the open-air atrium": "Скоростные стеклянные смотровые лифты, поднимающиеся вдоль открытого вертикального атриума",
  "Four distinct vertical elevator zones with smart destination dispatch": "Четыре независимые вертикальные зоны с интеллектуальным выбором этажа",
  "Dedicated private biometric elevators opening directly into residence vestibules": "Приватные лифты с биометрическим доступом, открывающиеся в индивидуальные вестибюли",
  "Dedicated hotel lifts and private residential access cores": "Выделенные лифты отеля и изолированные приватные ядра доступа для жильцов",
  "Double-deck shuttles to the mid-tower sky lounge with destination control": "Двухпалубные лифты в высотный скай-лаунж с системой предварительного назначения этажей",
  "Smart biometric destination control with private penthouse elevators": "Умный биометрический контроль назначения с приватными лифтами для пентхаусов",
  "Segregated banks for St. Regis guests, residents, and public observation visitors": "Раздельные группы для гостей отеля St. Regis, резидентов и посетителей смотровой площадки",
  "Central core elevator bank with destination dispatch": "Центральная группа лифтов ядра с системой оптимизации пассажиропотока",
  "Private biometric elevators opening directly into private residence galleries": "Приватные биометрические лифты с прямым входом в индивидуальные картинные галереи квартир",
  "High-speed residential elevator banks serving each pair of towers": "Скоростные жилые лифтовые группы, обслуживающие каждую пару башен",
  "Dedicated hotel shuttles, luxury residence banks, and public Sky Views elevators": "Выделенные шаттлы отеля, группы люксовых апартаментов и обзорные лифты аттракциона Sky Views",
  "Ultra-fast passenger lifts plus dedicated vehicular sky elevator": "Сверхскоростные пассажирские лифты плюс выделенный автомобильный скай-лифт для суперкаров",
  "< 45 seconds average": "< 45 секунд в среднем",
  "< 35 seconds": "< 35 секунд",
  "< 25 seconds": "< 25 секунд (мгновенная подача)",
  "< 40 seconds": "< 40 секунд",
  "< 30 seconds": "< 30 секунд",
  "< 50 seconds": "< 50 секунд",
  "< 45 seconds": "< 45 секунд",
  "< 20 seconds (virtually zero waiting)": "< 20 секунд (практически нулевое ожидание)",
  "< 15 seconds": "< 15 секунд (мгновенный вызов)",
  "Empower District Cooling": "Центральное районное охлаждение Empower",
  "Dedicated onsite water-cooled absorption chillers": "Собственные высокоэффективные водоохлаждаемые чиллеры комплекса",
  "High-efficiency thermal storage district cooling": "Энергоэффективная районная сеть с аккумуляцией холода",
  "Empower Palm District Cooling": "Централизованная сеть Palm District Cooling (Empower)",
  "Palma District Cooling": "Районное охлаждение Palma District Cooling",
  "Palma / Empower District Cooling": "Централизованное охлаждение Palma / Empower",
  "High-efficiency district cooling network": "Энергоэффективная централизованная сеть районного охлаждения",
  "DEWA Centralized High-Efficiency Chiller System": "Централизованная чиллерная система DEWA повышенной эффективности",
  "Emaar District Cooling": "Централизованное районное охлаждение Emaar District Cooling",
  "Chiller-Free": "Бесплатный чиллер (Chiller-Free)",
  "Consumption-Billed (Empower)": "Оплата по счетчику (Empower)",
  "DEWA Direct": "Прямой счет DEWA",
  "STC 54 dB (dual decoupled acoustic walls between residences)": "STC 54 дБ (двойные акустически развязанные перегородки между квартирами)",
  "STC 50 dB": "STC 50 дБ (высокая шумоизоляция)",
  "STC 58 dB (extreme presidential suite sound insulation)": "STC 58 дБ (усиленная шумоизоляция уровня президентских сьютов)",
  "STC 52 dB": "STC 52 дБ",
  "STC 56 dB": "STC 56 дБ",
  "STC 58 dB": "STC 58 дБ (уровень тишины люкс-класса)",
  "STC 54 dB": "STC 54 дБ",
  "STC 55 dB": "STC 55 дБ (премиальный акустический комфорт)",
  "STC 60 dB (studio-grade acoustic isolation between mansions)": "STC 60 дБ (студийный уровень акустической изоляции)",
  "STC 60 dB (maximum acoustic privacy)": "STC 60 дБ (максимальная акустическая приватность)",
  "Minimal (Open Spans)": "Минимальное (Свободные пролеты без колонн)",
  "Moderate (Perimeter Columns)": "Умеренное (Колонны строго по периметру)",
  "Complex (Curved/Inclined Facade)": "Инженерное (Наклонные колонны криволинейного фасада)",
  "Enclosed sunroom loggias on mid-floors; high-altitude observation decks": "Остекленные теплые лоджии на средних этажах; смотровые террасы на высотных ярусах",
  "Commercial sealed glass facade without external balconies": "Герметичный коммерческий стеклянный фасад без открытых балконов",
  "All-suite 2-storey duplexes with private butler and panoramic floor-to-ceiling glass": "Двухуровневые сьюты с приватным дворецким и панорамным остеклением от пола до потолка",
  "Recessed cantilevered balconies following the 1.2° rotational curve": "Заглубленные консольные террасы, повторяющие поворот здания на 1.2° на этаж",
  "Viewing deck overlooking SZR through the calligraphy void": "Смотровая палуба с видом на Sheikh Zayed Road сквозь каллиграфическую пустоту",
  "Duplex sky residences with floor-to-ceiling glass panoramic corners": "Двухуровневые высотные резиденции с панорамными стеклянными углами во всю высоту",
  "Massive landscaped private sky terraces with integrated private pools": "Огромные приватные террасы с ландшафтным садом и встроенными бассейнами",
  "Wind-protected recessed balconies up to level 60": "Ветрозащищенные заглубленные лоджии до 60-го этажа",
  "Enclosed glass balconies with sliding windows": "Закрытые стеклянные балконы с раздвижными створками",
  "Deep outdoor viewing terraces with direct front-row fountain views": "Глубокие открытые террасы первого ряда прямо перед светомузыкальными фонтанами",
  "Commercial office floorplates with column-free perimeter glass": "Офисные этажи свободной планировки с непрерывным остеклением без колонн",
  "Sheltered loggia-style sky balconies protected from Gulf winds": "Уютные высотные лоджии, надежно защищенные от ветров Залива",
  "Pocket sky gardens with vertical greenery and skyline cross-breezes": "Встроенные скай-сады с вертикальным озеленением и естественным продувом",
  "Cantilevered private plunge pools and heated sky jacuzzis": "Консольные приватные бассейны-инфинити и подогреваемые высотные джакузи",
  "Frameless glass hotel suite balconies with direct sea views": "Безрамные стеклянные балконы гостиничных сьютов с прямым видом на открытое море",
  "Wind-sheltered deep cantilevered terraces with panoramic Palm views": "Глубокие ветрозащитные консольные террасы с круговой панорамой острова Пальм Джумейра",
  "Massive wraparound corner terraces capable of hosting 50+ guests": "Грандиозные угловые опоясывающие террасы вместимостью более 50 гостей",
  "Frameless floor-to-ceiling glass viewing corridors overlooking the void": "Безрамные панорамные коридоры с остеклением в пол и видом на органическую пустоту",
  "Floor-to-ceiling glass panoramic corners with skyline and lake views": "Панорамные угловые витражи от пола до потолка с видами на озера и скайлайн",
  "Expansive curved nautical balconies with seamless frameless glass balustrades": "Просторные изогнутые морские балконы с бесшовными стеклянными ограждениями",
  "Floor-to-ceiling glass viewing bay windows overlooking the Palm Fronds": "Панорамные эркерные окна в пол с видами на ветви острова Пальм Джумейра",
  "Massive outdoor sky terraces with private temperature-controlled plunge pools": "Огромные открытые террасы с индивидуальными подогреваемыми бассейнами",
  "Expansive multi-tiered outdoor garden terraces with private swimming pools": "Многоуровневые открытые террасы-сады с собственными плавательными бассейнами",
  "Deep glass-railed balconies with direct marina and skyline panoramas": "Глубокие балконы со стеклянными ограждениями и прямым видом на яхтенную марину и горизонт",
  "Corner viewing balconies with direct Burj Khalifa fountain views": "Угловые видовые балконы с прямым обзором на Бурдж-Халифа и фонтаны",
  "Expansive curved aerodynamic private viewing decks with integrated plunge pools": "Широкие обтекаемые приватные смотровые палубы со встроенными бассейнами",
  "Connected via climatized metro link to Dubai Mall & Burj Khalifa/Dubai Mall Metro Station": "Прямой кондиционированный траволаторный переход в Dubai Mall и на станцию метро Burj Khalifa/Dubai Mall",
  "Direct metro air-conditioned bridge to Emirates Towers Metro Station & DIFC gate": "Прямой крытый кондиционированный мост к станции метро Emirates Towers и галерее Gate District DIFC",
  "Private causeway connection to Jumeirah Beach Road and Madinat Jumeirah": "Собственная насыпная дамба с мостом к Jumeirah Beach Road и курорту Madinat Jumeirah",
  "Direct exit to Marina Walk and Dubai Tram Marina Towers station": "Прямой выход на променад Marina Walk и к станции дубайского трамвая Marina Towers",
  "Direct 212-meter pedestrian skybridge to Emirates Towers Metro Station": "Прямой 212-метровый пешеходный надземный мост к станции метро Emirates Towers",
  "Elevated skyway bridge link to Dubai World Trade Centre & Max Metro Station": "Крытый надземный мост к Центру международной торговли DWTC и станции метро Max",
  "Connected to Palm Jumeirah Monorail Crescent loop": "Прямой доступ к кольцевой монорельсовой дороге Palm Jumeirah Monorail на полумесяце",
  "Direct front-row frontage on Al Sufouh Tram Line & Marina Walk": "Первая линия вдоль трамвайной ветки Al Sufouh и набережной Marina Walk",
  "Fast egress via King Salman Bin Abdulaziz Al Saud St": "Мгновенный выезд на скоростную магистраль King Salman Bin Abdulaziz Al Saud St",
  "Direct enclosed skybridge to Dubai Mall Fashion Avenue": "Прямой крытый кондиционированный мост в галерею моды Fashion Avenue торгового центра Dubai Mall",
  "Centrally positioned on JLT East Lake with direct footbridges to DMCC Metro Station": "Расположение на берегу восточного озера JLT с пешеходными мостами к станции метро DMCC",
  "Direct internal airbridge connection to DIFC Gate Avenue concourse": "Прямой внутренний кондиционированный мост в торговую галерею Gate Avenue DIFC",
  "Direct frontage on Sheikh Zayed Road with direct pedestrian access to Financial Centre Metro": "Первая линия шоссе шейха Заеда с прямым пешеходным выходом к метро Financial Centre",
  "Direct access to Al Khail Road and Business Bay water canal water taxis": "Прямой выезд на Al Khail Road и к причалу водных такси Дубайского канала",
  "Located adjacent to Marina Walk and Dubai Marina Tram station": "Расположена непосредственно у набережной Marina Walk и остановки трамвая Dubai Marina",
  "Positioned on Marina North corridor with swift access to Sheikh Zayed Road E11": "Северный коридор Марины с быстрейшим бессветофорным выездом на шоссе шейха Заеда (E11)",
  "Prime address directly opposite Dubai Opera on Mohammed Bin Rashid Boulevard": "Премиальный адрес на бульваре шейха Мохаммеда прямо напротив Дубайской Оперы",
  "Direct frontage on Al A'amal Street with quick link to Business Bay Metro": "Прямой фасад на улицу Al A'amal с быстрым доступом к станции метро Business Bay",
  "Central anchor of Uptown Dubai with direct highway ramps to First Al Khail St": "Центральная доминанта района Uptown Dubai с прямыми эстакадами на Первую улицу Аль-Хайл",
  "Frontline position on Dubai Harbour Marina Boulevard with yacht berths": "Первая линия набережной марины Dubai Harbour с причалами для суперяхт",
  "Integrated with Nakheel Mall and direct covered bridge to Palm Monorail": "Интеграция с торговым комплексом Nakheel Mall и крытый мост к станции монорельса",
  "Immediate vehicular egress to Al Khail Road (E44) and Hessa Street (D61)": "Мгновенный автомобильный выезд на магистраль Al Khail Road (E44) и улицу Hessa (D61)",
  "Direct private marina berth on Marasi Bay canal with water limousine transit": "Собственные частные причалы в заливе Marasi Bay с сервисом водных лимузинов",
  "Frontline promenade position on Creek Marina with RTA water taxi station": "Первая линия променада Creek Marina с причалом водных такси RTA",
  "Enclosed air-conditioned travelator bridge directly into Burj Khalifa/Dubai Mall Metro": "Крытый кондиционированный траволаторный мост прямо на станцию метро Burj Khalifa / Dubai Mall",
  "Situated on Mohammed Bin Rashid Boulevard within 4 minutes walking distance to Dubai Mall": "Расположение на бульваре Мохаммеда Бин Рашида в 4 минутах пешком от Dubai Mall"
};

/**
 * Automatically translates building technical specifications into Russian
 */
export function translateBuildingSpecsRU(building: Building): Building {
  const b = { ...building };

  if (b.foundation) {
    b.foundation = {
      ...b.foundation,
      bedrockType: TECH_TERMS_RU[b.foundation.bedrockType] || b.foundation.bedrockType,
      raftThicknessMeters: TECH_TERMS_RU[b.foundation.raftThicknessMeters] || b.foundation.raftThicknessMeters
        .replace("solid reinforced concrete", "монолитный железобетон")
        .replace("raft", "ростверк")
        .replace("reinforced concrete slab", "монолитная железобетонная плита")
        .replace("reinforced concrete mat", "монолитная фундаментная плита"),
    };
  }

  if (b.windStructural) {
    b.windStructural = {
      ...b.windStructural,
      lateralSystem: TECH_TERMS_RU[b.windStructural.lateralSystem] || b.windStructural.lateralSystem,
      dampingMechanism: TECH_TERMS_RU[b.windStructural.dampingMechanism] || b.windStructural.dampingMechanism,
      concreteStrengthGrade: TECH_TERMS_RU[b.windStructural.concreteStrengthGrade] || b.windStructural.concreteStrengthGrade,
    };
  }

  if (b.facade) {
    b.facade = {
      ...b.facade,
      glazingType: TECH_TERMS_RU[b.facade.glazingType] || b.facade.glazingType,
      bmuCleaningSystem: TECH_TERMS_RU[b.facade.bmuCleaningSystem] || b.facade.bmuCleaningSystem,
      cleaningCycleDays: TECH_TERMS_RU[b.facade.cleaningCycleDays] || b.facade.cleaningCycleDays
        .replace("days for a full exterior wash cycle", "дней на полный цикл мойки")
        .replace("days continuous", "дней (непрерывно)")
        .replace("days", "дней"),
    };
  }

  if (b.verticalTransport) {
    b.verticalTransport = {
      ...b.verticalTransport,
      zoningStrategy: TECH_TERMS_RU[b.verticalTransport.zoningStrategy] || b.verticalTransport.zoningStrategy,
      peakWaitingSeconds: TECH_TERMS_RU[b.verticalTransport.peakWaitingSeconds] || b.verticalTransport.peakWaitingSeconds
        .replace("seconds average", "секунд в среднем")
        .replace("seconds", "секунд"),
    };
  }

  if (b.operatingSpecs) {
    b.operatingSpecs = {
      ...b.operatingSpecs,
      coolingProvider: TECH_TERMS_RU[b.operatingSpecs.coolingProvider] || b.operatingSpecs.coolingProvider,
      chillerBilling: (TECH_TERMS_RU[b.operatingSpecs.chillerBilling] as any) || b.operatingSpecs.chillerBilling,
      acousticRatingDb: TECH_TERMS_RU[b.operatingSpecs.acousticRatingDb] || b.operatingSpecs.acousticRatingDb
        .replace("dual decoupled acoustic walls between residences", "двойные акустически развязанные стены между квартирами"),
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


export const COMMON_TERMS: Record<LanguageCode, Record<string, string>> = {
  en: {},
  ru: {
    "Chiller-Free (included in base service charge)": "Включено в сервисный сбор (Chiller-Free)",
    "Consumption-Metered (Empower sub-metering)": "Оплата по счетчику (Empower)",
    "Zero Column Intrusion (perimeter post-tensioned spans)": "Нулевое вторжение колонн (постнапряженные пролеты)",
    "Peripheral Columns (minimal wall intrusion)": "Периметральные колонны (минимальное влияние)",
    "Internal Column Intrusion": "Внутренние колонны",
    "High (deep wind-shielded recessed cantilever balconies)": "Высокая (глубокие ветрозащитные консольные терراсы)",
    "Medium (narrow aerodynamic balconies)": "Средняя (узкие аэродинамические балконы)",
    "None (fully sealed climate-controlled facade)": "Отсутствуют (сплошной климатический фасад)",
    "High (panoramic open-air glass terraces)": "Высокая (панорамные открытые стеклянные террасы)",
    "Direct air-conditioned pedestrian bridge to Dubai Mall & Burj Khalifa Metro": "Прямой кондиционированный мост в Dubai Mall и метро Burj Khalifa",
    "Direct walking connection to DIFC Gate Avenue concourse": "Прямой пешеходный переход в галерею Gate Avenue (DIFC)",
    "Integrated marina promenade access with private mooring berths": "Прямой выход на променад марины с приватными причалами для яхт",
    "Direct covered footbridge connecting to Sheikh Zayed Road metro line": "Крытый надземный переход к красной линии метро на Sheikh Zayed Road"
  },
  de: {
    "Chiller-Free (included in base service charge)": "Im Grundservice enthalten (Chiller-Free)",
    "Consumption-Metered (Empower sub-metering)": "Verbrauchsabhängig (Empower-Zähler)",
    "Zero Column Intrusion (perimeter post-tensioned spans)": "Keine störenden Säulen (vorgespannte Decken)",
    "Peripheral Columns (minimal wall intrusion)": "Periphere Stützen (minimale Raumbeeinträchtigung)",
    "Internal Column Intrusion": "Innenstützen",
    "High (deep wind-shielded recessed cantilever balconies)": "Hoch (windgeschützte, tiefe Kragarmbalkone)",
    "Medium (narrow aerodynamic balconies)": "Mittel (schmale aerodynamische Balkone)",
    "None (fully sealed climate-controlled facade)": "Keine (vollständig versiegelte Klimafassade)",
    "High (panoramic open-air glass terraces)": "Hoch (panoramische Freiluft-Glasterrassen)",
    "Direct air-conditioned pedestrian bridge to Dubai Mall & Burj Khalifa Metro": "Direkte klimatisierte Fußgängerbrücke zur Dubai Mall & Metro Burj Khalifa",
    "Direct walking connection to DIFC Gate Avenue concourse": "Direkte Fußgängerverbindung zur DIFC Gate Avenue",
    "Integrated marina promenade access with private mooring berths": "Integrierter Zugang zur Marina-Promenade mit privaten Liegeplätzen",
    "Direct covered footbridge connecting to Sheikh Zayed Road metro line": "Direkte überdachte Fußgängerbrücke zur Metro Sheikh Zayed Road"
  },
  fr: {
    "Chiller-Free (included in base service charge)": "Inclus dans les charges (Chiller-Free)",
    "Consumption-Metered (Empower sub-metering)": "Facturé à la consommation (Compteur Empower)",
    "Zero Column Intrusion (perimeter post-tensioned spans)": "Aucun poteau encombrant (dalles précontraintes)",
    "Peripheral Columns (minimal wall intrusion)": "Poteaux périphériques (impact minimal)",
    "Internal Column Intrusion": "Poteaux intérieurs",
    "High (deep wind-shielded recessed cantilever balconies)": "Élevée (balcons en porte-à-faux abrités du vent)",
    "Medium (narrow aerodynamic balconies)": "Moyenne (balcons aérodynamiques étroits)",
    "None (fully sealed climate-controlled facade)": "Aucun (façade entièrement étanche et climatisée)",
    "High (panoramic open-air glass terraces)": "Élevée (terrasses panoramiques vitrées en plein air)",
    "Direct air-conditioned pedestrian bridge to Dubai Mall & Burj Khalifa Metro": "Passerelle piétonne climatisée directe vers le Dubai Mall & métro Burj Khalifa",
    "Direct walking connection to DIFC Gate Avenue concourse": "Liaison piétonne directe avec l'esplanade Gate Avenue du DIFC",
    "Integrated marina promenade access with private mooring berths": "Accès direct à la promenade de la marina avec anneaux d'amarrage privés",
    "Direct covered footbridge connecting to Sheikh Zayed Road metro line": "Passerelle couverte directe vers la ligne de métro Sheikh Zayed Road"
  },
  ar: {
    "Chiller-Free (included in base service charge)": "مشمول في رسوم الصيانة (خالٍ من رسوم التبريد)",
    "Consumption-Metered (Empower sub-metering)": "حسب الاستهلاك الفعلي (عداد إمباور)",
    "Zero Column Intrusion (perimeter post-tensioned spans)": "انعدام الأعمدة الداخلية (امتدادات مسبقة الإجهاد)",
    "Peripheral Columns (minimal wall intrusion)": "أعمدة محيطية (تأثير جداري طفيف)",
    "Internal Column Intrusion": "أعمدة داخلية",
    "High (deep wind-shielded recessed cantilever balconies)": "عالية (شرفات كابولية غائرة ومحمية من الرياح)",
    "Medium (narrow aerodynamic balconies)": "متوسطة (شرفات انسيابية ضيقة)",
    "None (fully sealed climate-controlled facade)": "لا توجد (واجهة زجاجية معزولة ومكيفة بالكامل)",
    "High (panoramic open-air glass terraces)": "عالية (شرفات زجاجية بانورامية مفتوحة)",
    "Direct air-conditioned pedestrian bridge to Dubai Mall & Burj Khalifa Metro": "جسر مشاة مكيف ومباشر إلى دبي مول ومترو برج خليفة",
    "Direct walking connection to DIFC Gate Avenue concourse": "ممشى مباشر إلى ممشى جيت أفينيو في مركز دبي المالي",
    "Integrated marina promenade access with private mooring berths": "اتصال مباشر بممشى المارينا مع مراسٍ خاصة لليخوت",
    "Direct covered footbridge connecting to Sheikh Zayed Road metro line": "جسر مشاة مغطى ومباشر إلى محطة مترو شارع الشيخ زايد"
  },
  it: {
    "Chiller-Free (included in base service charge)": "Incluso nelle spese condominiali (Chiller-Free)",
    "Consumption-Metered (Empower sub-metering)": "A consumo effettivo (Contatore Empower)",
    "Zero Column Intrusion (perimeter post-tensioned spans)": "Zero colonne interne (campate post-tese)",
    "Peripheral Columns (minimal wall intrusion)": "Colonne perimetrali (impatto minimo)",
    "Internal Column Intrusion": "Colonne interne",
    "High (deep wind-shielded recessed cantilever balconies)": "Alta (balconi a sbalzo incassati e riparati dal vento)",
    "Medium (narrow aerodynamic balconies)": "Media (balconi aerodinamici stretti)",
    "None (fully sealed climate-controlled facade)": "Nessuno (facciata interamente sigillata e climatizzata)",
    "High (panoramic open-air glass terraces)": "Alta (terrazze panoramiche in cristallo all'aperto)",
    "Direct air-conditioned pedestrian bridge to Dubai Mall & Burj Khalifa Metro": "Ponte pedonale climatizzato diretto per Dubai Mall e Metro Burj Khalifa",
    "Direct walking connection to DIFC Gate Avenue concourse": "Collegamento pedonale diretto con la galleria Gate Avenue del DIFC",
    "Integrated marina promenade access with private mooring berths": "Accesso diretto alla passeggiata della marina con ormeggi privati",
    "Direct covered footbridge connecting to Sheikh Zayed Road metro line": "Passerella coperta diretta alla linea metropolitana di Sheikh Zayed Road"
  },
  tr: {
    "Chiller-Free (included in base service charge)": "Aidat dahili (Chiller-Free)",
    "Consumption-Metered (Empower sub-metering)": "Tüketime göre sayaçlı (Empower)",
    "Zero Column Intrusion (perimeter post-tensioned spans)": "Sıfır kolon engeli (ardgermeli açıklıklar)",
    "Peripheral Columns (minimal wall intrusion)": "Çevresel kolonlar (minimum alan kaybı)",
    "Internal Column Intrusion": "İç kolonlar",
    "High (deep wind-shielded recessed cantilever balconies)": "Yüksek (rüzgar korumalı derin konsol balkonlar)",
    "Medium (narrow aerodynamic balconies)": "Orta (dar aerodinamik balkonlar)",
    "None (fully sealed climate-controlled facade)": "Yok (tamamen yalıtımlı iklim kontrollü cephe)",
    "High (panoramic open-air glass terraces)": "Yüksek (panoramik açık hava cam teraslar)",
    "Direct air-conditioned pedestrian bridge to Dubai Mall & Burj Khalifa Metro": "Dubai Mall ve Burj Khalifa Metrosu'na klimalı doğrudan yaya köprüsü",
    "Direct walking connection to DIFC Gate Avenue concourse": "DIFC Gate Avenue kordonuna doğrudan yürüyüş bağlantısı",
    "Integrated marina promenade access with private mooring berths": "Özel yat bağlama iskeleli marina kordonuna doğrudan çıkış",
    "Direct covered footbridge connecting to Sheikh Zayed Road metro line": "Sheikh Zayed Road metro hattına kapalı doğrudan yaya köprüsü"
  },
  zh: {
    "Chiller-Free (included in base service charge)": "包含在基础物管费中 (Chiller-Free)",
    "Consumption-Metered (Empower sub-metering)": "按实际用量分户计费 (Empower)",
    "Zero Column Intrusion (perimeter post-tensioned spans)": "无柱通透大平层 (后张拉预应力跨度)",
    "Peripheral Columns (minimal wall intrusion)": "外围立柱 (极少侵占室内有效空间)",
    "Internal Column Intrusion": "内部承重柱",
    "High (deep wind-shielded recessed cantilever balconies)": "极高 (深凹嵌入式防风外挑景观阳台)",
    "Medium (narrow aerodynamic balconies)": "中等 (狭长流线型防风阳台)",
    "None (fully sealed climate-controlled facade)": "无阳台 (全封闭恒温恒湿幕墙体系)",
    "High (panoramic open-air glass terraces)": "极高 (全景观露天玻璃露台)",
    "Direct air-conditioned pedestrian bridge to Dubai Mall & Burj Khalifa Metro": "直通迪拜商场 (Dubai Mall) 与哈利法塔地铁站的全封闭冷气连桥",
    "Direct walking connection to DIFC Gate Avenue concourse": "直达迪拜国际金融中心 (DIFC) Gate Avenue 商业长廊步行通道",
    "Integrated marina promenade access with private mooring berths": "直通游艇码头滨水长廊并配有私属游艇泊位",
    "Direct covered footbridge connecting to Sheikh Zayed Road metro line": "直通谢赫扎耶德路地铁站的全遮阳有顶天桥"
  },
  hi: {
    "Chiller-Free (included in base service charge)": "सेवा शुल्क में शामिल (Chiller-Free)",
    "Consumption-Metered (Empower sub-metering)": "मीटर खपत अनुसार (Empower)",
    "Zero Column Intrusion (perimeter post-tensioned spans)": "बिना किसी आंतरिक खंभे के (पोस्ट-टेंशन स्पैन)",
    "Peripheral Columns (minimal wall intrusion)": "परिधीय खंभे (न्यूनतम प्रभाव)",
    "Internal Column Intrusion": "आंतरिक खंभे",
    "High (deep wind-shielded recessed cantilever balconies)": "उच्च (गहरी हवा-सुरक्षित बालकनी)",
    "Medium (narrow aerodynamic balconies)": "मध्यम (संकीर्ण एरोडायनामिक बालकनी)",
    "None (fully sealed climate-controlled facade)": "कोई नहीं (पूरी तरह से सीलबंद मुखौटा)",
    "High (panoramic open-air glass terraces)": "उच्च (पैन प्राचीन ओपन-एयर ग्लास छत)",
    "Direct air-conditioned pedestrian bridge to Dubai Mall & Burj Khalifa Metro": "दुबई मॉल और बुर्ज खलीफा मेट्रो के लिए सीधा वातानुकूलित पैदल पुल",
    "Direct walking connection to DIFC Gate Avenue concourse": "डीआईएफसी गेट एवेन्यू से सीधा पैदल संपर्क",
    "Integrated marina promenade access with private mooring berths": "निजी नौका बर्थ के साथ मरीना प्रोमेनेड तक सीधी पहुंच",
    "Direct covered footbridge connecting to Sheikh Zayed Road metro line": "शेख जायद रोड मेट्रो लाइन से सीधा कवर्ड फुटब्रिज"
  },
  ur: {
    "Chiller-Free (included in base service charge)": "سروس چارجز میں شامل (چلر فری)",
    "Consumption-Metered (Empower sub-metering)": "میٹر ریڈنگ کے مطابق (ایم پاور)",
    "Zero Column Intrusion (perimeter post-tensioned spans)": "کالموں سے پاک کشادہ فرش (پوسٹ ٹینشن فلیٹ سلیب)",
    "Peripheral Columns (minimal wall intrusion)": "بیرونی کالم (کم از کم رکاوٹ)",
    "Internal Column Intrusion": "اندرونی کالم",
    "High (deep wind-shielded recessed cantilever balconies)": "اعلیٰ (ہوا سے محفوظ کشادہ گہری بالکونیاں)",
    "Medium (narrow aerodynamic balconies)": "درمیانی (پتلی ایروڈائنامک بالکونیاں)",
    "None (fully sealed climate-controlled facade)": "کوئی نہیں (مکمل طور پر سیل شدہ انڈور کلائمیٹ فساڈ)",
    "High (panoramic open-air glass terraces)": "اعلیٰ (پینورامک اوپن ایئر گلاس ٹیرسز)",
    "Direct air-conditioned pedestrian bridge to Dubai Mall & Burj Khalifa Metro": "دبئی مال اور برج خلیفہ میٹرو کے لیے براہ راست ایئر کنڈیشنڈ پیدل پل",
    "Direct walking connection to DIFC Gate Avenue concourse": "ڈی آئی ایف سی گیٹ ایونیو کونکورس سے براہ راست پیدل رابطہ",
    "Integrated marina promenade access with private mooring berths": "نجی یاٹ برتھوں کے ساتھ مرینا پرومینیڈ تک براہ راست رسائی",
    "Direct covered footbridge connecting to Sheikh Zayed Road metro line": "شیخ زاید روڈ میٹرو لائن سے براہ راست کورڈ پیدل پل"
  }
};

/**
 * Universal translator for building specifications across all supported languages
 */
export function translateBuildingSpecs(building: Building, lang: LanguageCode): Building {
  if (lang === "en") return building;
  if (lang === "ru") return translateBuildingSpecsRU(building);

  const dict = COMMON_TERMS[lang];
  if (!dict) return building;

  const b = { ...building };

  if (b.operatingSpecs) {
    b.operatingSpecs = {
      ...b.operatingSpecs,
      chillerBilling: (dict[b.operatingSpecs.chillerBilling] || b.operatingSpecs.chillerBilling) as any,
    };
  }

  if (b.layoutEfficiency) {
    b.layoutEfficiency = {
      ...b.layoutEfficiency,
      columnImpact: (dict[b.layoutEfficiency.columnImpact] || b.layoutEfficiency.columnImpact) as any,
      balconyUsability: dict[b.layoutEfficiency.balconyUsability] || b.layoutEfficiency.balconyUsability,
    };
  }

  if (b.urbanIntegration && dict[b.urbanIntegration]) {
    b.urbanIntegration = dict[b.urbanIntegration];
  }

  if (b.windStructural && b.windStructural.lateralSystem) {
    const latI18n = LATERAL_SYSTEMS_I18N[b.windStructural.lateralSystem];
    if (latI18n && latI18n[lang]) {
      b.windStructural = {
        ...b.windStructural,
        lateralSystem: latI18n[lang]!,
      };
    }
  }

  // Localize cleaning cycle days text
  if (b.facade && b.facade.cleaningCycleDays) {
    let cycle = b.facade.cleaningCycleDays;
    if (lang === "de") {
      cycle = cycle.replace("days for a full exterior wash cycle", "Tage für einen vollen Waschzyklus").replace("days continuous", "Tage (kontinuierlich)").replace("days", "Tage");
    } else if (lang === "fr") {
      cycle = cycle.replace("days for a full exterior wash cycle", "jours pour un cycle de lavage complet").replace("days continuous", "jours (en continu)").replace("days", "jours");
    } else if (lang === "ar") {
      cycle = cycle.replace("days for a full exterior wash cycle", "يوماً لدورة غسيل كاملة للواجهة").replace("days continuous", "يوماً (بشكل مستمر)").replace("days", "يوماً");
    } else if (lang === "it") {
      cycle = cycle.replace("days for a full exterior wash cycle", "giorni per un ciclo di lavaggio completo").replace("days continuous", "giorni (continuo)").replace("days", "giorni");
    } else if (lang === "tr") {
      cycle = cycle.replace("days for a full exterior wash cycle", "gün (tam dış cephe yıkama döngüsü)").replace("days continuous", "gün (kesintisiz)").replace("days", "gün");
    } else if (lang === "zh") {
      cycle = cycle.replace("days for a full exterior wash cycle", "天完成一次完整外立面清洗周期").replace("days continuous", "天 (持续作业)").replace("days", "天");
    } else if (lang === "hi") {
      cycle = cycle.replace("days for a full exterior wash cycle", "दिन (पूर्ण बाहरी धुलाई चक्र)").replace("days continuous", "दिन (लगातार)").replace("days", "दिन");
    } else if (lang === "ur") {
      cycle = cycle.replace("days for a full exterior wash cycle", "دن (مکمل بیرونی واش سائیکل)").replace("days continuous", "دن (مسلسل)").replace("days", "دن");
    }
    b.facade = { ...b.facade, cleaningCycleDays: cycle };
  }

  // Localize peak waiting seconds text
  if (b.verticalTransport && b.verticalTransport.peakWaitingSeconds) {
    let wait = b.verticalTransport.peakWaitingSeconds;
    if (lang === "de") {
      wait = wait.replace("seconds average", "Sekunden im Durchschnitt").replace("seconds", "Sekunden");
    } else if (lang === "fr") {
      wait = wait.replace("seconds average", "secondes en moyenne").replace("seconds", "secondes");
    } else if (lang === "ar") {
      wait = wait.replace("seconds average", "ثانية في المتوسط").replace("seconds", "ثانية");
    } else if (lang === "it") {
      wait = wait.replace("seconds average", "secondi in media").replace("seconds", "secondi");
    } else if (lang === "tr") {
      wait = wait.replace("seconds average", "saniye ortalama").replace("seconds", "saniye");
    } else if (lang === "zh") {
      wait = wait.replace("seconds average", "秒 (高峰期平均候梯时间)").replace("seconds", "秒");
    } else if (lang === "hi") {
      wait = wait.replace("seconds average", "सेकंड औसत").replace("seconds", "सेकंड");
    } else if (lang === "ur") {
      wait = wait.replace("seconds average", "سیکنڈ اوسطاً").replace("seconds", "سیکنڈ");
    }
    b.verticalTransport = { ...b.verticalTransport, peakWaitingSeconds: wait };
  }

  return b;
}
