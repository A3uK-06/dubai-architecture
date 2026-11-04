export interface DistrictSubZone {
  name: string;
  character: string;
  pricePerSqFtAed: string;
  bestFor: string;
}

export interface DistrictTransitAnalysis {
  highwayAccess: string;
  rushHourBottleneck: string;
  publicTransit: string;
  walkabilityScore: "High (Pedestrian Boulevards)" | "Moderate (Within clusters only)" | "Car-Dependent";
}

export interface DistrictInfrastructureAudit {
  chillerType: string;
  stormwaterResilience: string;
  serviceChargeRangeAed: string;
  occupancyRate: string;
  targetTenantProfile: string;
}

export interface District {
  id: string;
  slug: string;
  name: string;
  developer: string;
  overview: string;
  urbanConcept: string;
  keyLandmarks: string[];
  averageRoi: string;
  iconicTowersCount: number;
  description: string;
  subZones: DistrictSubZone[];
  transitAnalysis: DistrictTransitAnalysis;
  infrastructureAudit: DistrictInfrastructureAudit;
  investmentPros: string[];
  investmentRisks: string[];
  image: string;
}

export const DISTRICTS: District[] = [
  {
    id: "downtown-dubai",
    slug: "downtown-dubai",
    image: "/images/districts/downtown-dubai.jpg",
    name: "Downtown Dubai",
    developer: "Emaar Properties",
    overview:
      "The prestigious epicenter of modern Dubai, master-planned around the 500-acre Burj Complex. The undisputed global focal point for prime capital preservation and trophy skyscraper ownership.",
    urbanConcept:
      "Engineered by Emaar as a high-density, pedestrian-scaled superblock. Radial urban geometry emanates from the 30-acre artificial Burj Lake. Ringed by the 3.5 km Mohammed Bin Rashid Boulevard, the masterplan integrates 30,000 residences with global retail (Dubai Mall) and performing arts (Dubai Opera), achieving unprecedented urban density while preserving panoramic sightlines to Burj Khalifa.",
    keyLandmarks: [
      "Burj Khalifa (828 m)",
      "Dubai Opera (Janus Rostock / Atkins)",
      "Dubai Mall & Lake Promenade",
      "Address Downtown & Address Sky View",
      "Il Primo (Opera District)",
    ],
    averageRoi: "6.5% - 7.8%",
    iconicTowersCount: 32,
    description:
      "Downtown Dubai commands the highest prestige premium in the Middle East. While gross rental yields sit slightly below secondary districts, capital liquidity is peerless: trophy assets on the Boulevard and in the Opera District trade with instant liquidity among international UHNW families, sustaining consistent value appreciation.",
    subZones: [
      {
        name: "Opera District",
        character: "Cultural ultra-prime enclaves with direct fountains and Burj vistas; low supply, expansive floorplates.",
        pricePerSqFtAed: "3,800 - 6,500 AED/sq.ft",
        bestFor: "Generational wealth preservation and ultra-luxury owner-occupiers.",
      },
      {
        name: "MBR Boulevard Ring",
        character: "Vibrant pedestrian strip lined with high-end dining, boutique hotels, and Emaar mid-to-high rises.",
        pricePerSqFtAed: "2,400 - 3,500 AED/sq.ft",
        bestFor: "Short-term luxury holiday lets (Airbnb) with maximum year-round occupancy.",
      },
      {
        name: "Old Town & South Ridge",
        character: "Low-rise traditional Arabic vernacular architecture and quieter residential towers south of the lake.",
        pricePerSqFtAed: "1,900 - 2,600 AED/sq.ft",
        bestFor: "Long-term corporate family rentals seeking quietness within walking distance to Downtown.",
      },
    ],
    transitAnalysis: {
      highwayAccess: "Direct access to Sheikh Zayed Road (E11), Financial Centre Road (D71), and Al Asayel Street.",
      rushHourBottleneck: "Heavy congestion on Financial Centre Road flyovers and Dubai Mall parking approach ramps between 18:00 and 21:00.",
      publicTransit: "Burj Khalifa / Dubai Mall Metro Station (Red Line) with an 820m air-conditioned travellator direct to the mall.",
      walkabilityScore: "High (Pedestrian Boulevards)",
    },
    infrastructureAudit: {
      chillerType: "Empower District Cooling (Mandatory; consumption billed to tenants or owners).",
      stormwaterResilience: "High: Underground gravity-fed stormwater culverts connected directly to Dubai Water Canal.",
      serviceChargeRangeAed: "22 - 58 AED / sq.ft (Burj Khalifa: ~55 AED/sq.ft; Emaar standard: ~24 AED/sq.ft).",
      occupancyRate: "93% - 96% sustained annual average.",
      targetTenantProfile: "C-suite executives, financial directors, international holidaymakers, and ultra-high-net-worth individuals.",
    },
    investmentPros: [
      "Globally recognized trophy brand ensuring swift exit liquidity in any market cycle.",
      "Strict geographic containment: zero remaining greenfield land plots around the lake.",
      "Exceptionally resilient short-term holiday rental demand fueled by Dubai Mall visitors.",
    ],
    investmentRisks: [
      "Elevated service charges (up to 55+ AED/sq.ft in landmark towers) erode net yields for passive investors.",
      "Weekend traffic bottlenecks around Mohammed Bin Rashid Boulevard during fountain shows.",
    ],
  },
  {
    id: "dubai-marina",
    slug: "dubai-marina",
    image: "/images/districts/dubai-marina.jpg",
    name: "Dubai Marina",
    developer: "Emaar Properties / Multiple Private Developers",
    overview:
      "The world's largest purpose-built man-made marina canal city. Over 200 residential skyscrapers clustered along a 3.5 km turquoise waterway accommodating 500+ luxury berths.",
    urbanConcept:
      "Excavated from coastal desert and flooded with Arabian Gulf seawater in 2003, Dubai Marina is an engineering marvel designed by HOK Canada. The urban canyon is flanked by a 7 km continuous pedestrian promenade (Marina Walk). High-density supertall residential clusters are organized along two parallel relief arteries: Al Marsa Street and Marina Promenade.",
    keyLandmarks: [
      "Cayan Tower (306 m, 90° helical twist)",
      "Marina 101 (425 m, second tallest in Dubai)",
      "Princess Tower (413 m)",
      "Dubai Marina Mall & Pier 7",
      "Address Dubai Marina (JW Marriott Marina)",
    ],
    averageRoi: "7.4% - 9.0%",
    iconicTowersCount: 42,
    description:
      "Dubai Marina represents the beating heart of Dubai's vertical expat lifestyle. Its dual rental market (long-term multinational corporate tenants + holiday home tourists attracted by JBR beach connectivity) creates the deepest and most resilient tenant pool in the emirate.",
    subZones: [
      {
        name: "Tallest Block / North Marina",
        character: "The hyper-dense cluster of 300m+ supertalls (Cayan, Princess, 101, Torch) near Marina Gate.",
        pricePerSqFtAed: "1,600 - 2,800 AED/sq.ft",
        bestFor: "Young professionals, nightlife, and high-turnover short-term rentals.",
      },
      {
        name: "South Marina & Promenade",
        character: "Mature Emaar original towers (Marina Promenades, Al Majara) with wider water frontages.",
        pricePerSqFtAed: "1,900 - 3,200 AED/sq.ft",
        bestFor: "Long-term family stability and lower building maintenance issues.",
      },
      {
        name: "Marina Gate & Yacht Club Enclave",
        character: "Prime waterfront plots commanding the highest square-foot rates in the entire district.",
        pricePerSqFtAed: "2,600 - 4,200 AED/sq.ft",
        bestFor: "Premium capital appreciation and luxury waterfront duplexes.",
      },
    ],
    transitAnalysis: {
      highwayAccess: "Direct interchanges with Sheikh Zayed Road (Interchange 5 & 5A) and King Salman Bin Abdulaziz Al Saud St.",
      rushHourBottleneck: "Al Seba Street exit and JBR cross-bridges suffer severe evening gridlock; single-lane exits to SZR.",
      publicTransit: "Two Dubai Metro stations (Sobha Realty & DMCC) fully integrated with the Dubai Tram network circulating through Marina and JBR.",
      walkabilityScore: "High (Pedestrian Boulevards)",
    },
    infrastructureAudit: {
      chillerType: "Mixed: Empower / Tabreed in master developments; independent chiller systems in older private towers.",
      stormwaterResilience: "High: Natural direct seawater gravity outflow to the open canal basin.",
      serviceChargeRangeAed: "14 - 28 AED / sq.ft (Emaar original clusters: ~18 AED; private towers: ~15-22 AED).",
      occupancyRate: "94% - 97% year-round.",
      targetTenantProfile: "European and Western expats, tech and finance executives, holiday beachgoers, and yacht owners.",
    },
    investmentPros: [
      "Perpetual tenant demand driven by world-class beach, dining, and marina infrastructure.",
      "Excellent multi-modal public transit (Metro + Tram + Water Ferry) rare in Gulf cities.",
      "High net rental yield consistency across 1-bedroom and 2-bedroom configurations.",
    ],
    investmentRisks: [
      "Significant quality variance between tier-1 developers (Emaar, Select Group) and private legacy developers from 2006-2008.",
      "Challenging vehicle ingress/egress during Friday and Saturday evenings around JBR bridges.",
    ],
  },
  {
    id: "difc",
    slug: "difc",
    image: "/images/districts/difc.jpg",
    name: "DIFC & Sheikh Zayed Road",
    developer: "DIFC Authority / Dubai Holding",
    overview:
      "The Middle East's premier global financial center and historic architectural spine. An independent common-law financial free zone home to over 40,000 corporate professionals.",
    urbanConcept:
      "Structured along an urban pedestrian spine called 'Gate Avenue', connecting the iconic Gate Building (Gensler) through Foster + Partners' The Index Tower to Central Park Towers. DIFC functions under an independent English common-law judiciary with its own courts and regulatory authority (DFSA), creating unique legal security for property and corporate assets.",
    keyLandmarks: [
      "Emirates Towers (354 m, Hazel Wong)",
      "The Index Tower (328 m, Foster + Partners)",
      "Museum of the Future (77 m, Killa Design)",
      "One Za'abeel & The Link (Nikken Sekkei)",
      "The Gate Building (Gensler)",
    ],
    averageRoi: "7.0% - 8.6%",
    iconicTowersCount: 28,
    description:
      "DIFC is the Wall Street and Mayfair of Dubai combined. High-bracket executives, international law partners, hedge fund managers, and investment bankers reside here, creating ultra-stable corporate tenancies with near-zero default rates and Michelin-starred culinary culture right at the doorstep.",
    subZones: [
      {
        name: "Gate District & Gate Village",
        character: "The financial core: art galleries, private wealth banks, Christie's, and Zuma / LPM fine dining.",
        pricePerSqFtAed: "3,200 - 5,500 AED/sq.ft",
        bestFor: "Corporate trophy offices and elite executive pied-à-terres.",
      },
      {
        name: "Gate Avenue & Index Precinct",
        character: "Contemporary residential towers integrated with an air-conditioned luxury retail concourse.",
        pricePerSqFtAed: "2,200 - 3,600 AED/sq.ft",
        bestFor: "High-earning single professionals and institutional long-term leasing.",
      },
      {
        name: "Za'abeel Gateway (One Za'abeel)",
        character: "Cantilevered luxury landmark district at the northern boundary overlooking Za'abeel Park.",
        pricePerSqFtAed: "3,500 - 6,000 AED/sq.ft",
        bestFor: "Branded ultra-prime residences (One&Only) with skyline panoramas.",
      },
    ],
    transitAnalysis: {
      highwayAccess: "Flanks Sheikh Zayed Road (E11) with seamless backroad access to Al Mustaqbal Street and Al Majlis Street.",
      rushHourBottleneck: "Trade Centre Roundabout and Financial Centre Road underpasses during morning peak (08:30-09:30).",
      publicTransit: "Two dedicated Dubai Metro Red Line stations: Financial Centre and Emirates Towers.",
      walkabilityScore: "High (Pedestrian Boulevards)",
    },
    infrastructureAudit: {
      chillerType: "Empower District Cooling with dedicated backup chilling plants.",
      stormwaterResilience: "High: Modern elevated road grading and direct high-capacity sub-surface stormwater lines.",
      serviceChargeRangeAed: "20 - 35 AED / sq.ft.",
      occupancyRate: "95% - 98% (highest corporate retention in the UAE).",
      targetTenantProfile: "Investment bankers, corporate partners, hedge fund principals, and international arbitration lawyers.",
    },
    investmentPros: [
      "Freehold real estate within an English common-law regulatory jurisdiction.",
      "Highest corporate tenant profile with dependable institutional rent payments.",
      "Strict geographic scarcity: virtually zero unbuilt residential plots remaining inside DIFC core.",
    ],
    investmentRisks: [
      "High purchase price per square foot limits yield compression below 6.5% on smaller units.",
      "Limited dedicated green parklands compared to suburban master communities.",
    ],
  },
  {
    id: "palm-jumeirah",
    slug: "palm-jumeirah",
    image: "/images/districts/palm-jumeirah.jpg",
    name: "Palm Jumeirah",
    developer: "Nakheel",
    overview:
      "The world-renowned palm tree-shaped archipelago extending 5 kilometers into the Arabian Gulf. A global synonym for beachfront villas, private marinas, and landmark resort supertowers.",
    urbanConcept:
      "Engineered through vibro-compaction of 94 million cubic meters of marine sand and 7 million tons of quarried Hajar mountain rock. The masterplan comprises a central 2 km Trunk, 16 residential Fronds, and an 11 km breakwater Crescent connected via a 6-lane sub-sea vehicular tunnel. Adds 78 kilometers of private beachfront to Dubai's coastline.",
    keyLandmarks: [
      "Atlantis The Royal (KPF / WET Design)",
      "Burj Al Arab (adjacent Jumeirah coastline)",
      "The Palm Tower & AURA Skypool (240 m)",
      "Atlantis, The Palm",
      "One Palm by Omniyat (SOMA Architects)",
    ],
    averageRoi: "7.8% - 10.2%",
    iconicTowersCount: 18,
    description:
      "Palm Jumeirah is the undisputed global capital of waterfront ultra-prime real estate. Land on the island is completely exhausted, creating an absolute physical supply cap. Consequently, luxury apartments in landmark towers like Atlantis The Royal and The Palm Tower command world-record price appreciations and astronomical short-term holiday rates.",
    subZones: [
      {
        name: "The Crescent (Breakwater)",
        character: "Resort palaces, 5-star branded residences (Atlantis The Royal, One&Only, W Residences) and private beach clubs.",
        pricePerSqFtAed: "4,500 - 11,000 AED/sq.ft",
        bestFor: "Global billionaires, branded lifestyle suites, and trophy asset collections.",
      },
      {
        name: "The Trunk (Central Spine)",
        character: "High-density luxury apartment buildings (Marina Residences, Shoreline, The Palm Tower) with retail hubs (Nakheel Mall).",
        pricePerSqFtAed: "2,200 - 4,000 AED/sq.ft",
        bestFor: "Liquid holiday-let investments and high rental yield apartments with private beach club access.",
      },
      {
        name: "The Fronds (A to N)",
        character: "Gated, secure villa corridors ending in private beaches. Zero commercial traffic.",
        pricePerSqFtAed: "4,000 - 9,500 AED/sq.ft",
        bestFor: "Ultra-private primary residences and custom architectural beachfront mansions.",
      },
    ],
    transitAnalysis: {
      highwayAccess: "Connected to King Salman Bin Abdulaziz Al Saud St via an elevated gateway bridge; Crescent reached through the subsea tunnel.",
      rushHourBottleneck: "Trunk gateway bottleneck on weekends and during evening resort peak hours; single vehicular artery on and off the island.",
      publicTransit: "Palm Monorail running from Gateway Station down the Trunk to Nakheel Mall, The Pointe, and Atlantis Aquaventure.",
      walkabilityScore: "Moderate (Within clusters only)",
    },
    infrastructureAudit: {
      chillerType: "Empower (Palm District Cooling) serving Trunk and Crescent infrastructure.",
      stormwaterResilience: "High: Immediate gravity discharge into open Gulf waters with active pumping stations.",
      serviceChargeRangeAed: "16 - 45 AED / sq.ft (Shoreline: ~16 AED; Luxury Crescent: ~38-45 AED).",
      occupancyRate: "92% - 95% (peaking at 98% in winter luxury tourism season).",
      targetTenantProfile: "Global HNWI tourists, European family wealth, crypto founders, and celebrity lifestyle tenants.",
    },
    investmentPros: [
      "Absolute geographic supply cap: zero new plots can physically be created on the original Palm.",
      "World's most recognizable luxury address, driving immense daily holiday-let rates ($800 - $5,000+/night).",
      "Exceptional capital appreciation momentum on high-floor waterfront penthouses.",
    ],
    investmentRisks: [
      "Single vehicular gateway bridge causes weekend ingress/egress delays.",
      "High salinity marine air accelerates exterior MEP and balcony finish maintenance requirements.",
    ],
  },
  {
    id: "business-bay",
    slug: "business-bay",
    image: "/images/districts/business-bay.jpg",
    name: "Business Bay",
    developer: "Dubai Properties / Multiple Independent Developers",
    overview:
      "Dubai's rapid-growth central commercial and residential corridor flanking the Dubai Water Canal. An architectural testing ground for avant-garde designs by Zaha Hadid, Foster + Partners, and de GRISOGONO.",
    urbanConcept:
      "Conceived as Dubai's secondary central business district, Business Bay underwent a profound transformation in 2016 when the Dubai Water Canal was carved through its center, connecting Business Bay Creek to the Arabian Gulf. It now functions as a vibrant mixed-use waterfront district characterized by high-density vertical living, luxury canal-front promenades, and boutique commercial headquarters.",
    keyLandmarks: [
      "The Opus by Zaha Hadid (Sculpted void cube)",
      "Burj Binghatti Jacob & Co Residences (557 m)",
      "The Lana by Omniyat (Foster + Partners)",
      "Canal Crown by DAMAC & de GRISOGONO",
      "Executive Towers & Bay Avenue",
    ],
    averageRoi: "8.2% - 9.8%",
    iconicTowersCount: 46,
    description:
      "Business Bay offers the sweet spot for yield-seeking investors. Bordering Downtown Dubai without the full 'Burj Lake' price premium, it captures the spillover corporate workforce from Downtown and DIFC while delivering significantly higher net rental returns (often 8.5%+ net).",
    subZones: [
      {
        name: "Marasi Marina & Canal Promenade",
        character: "Prime waterfront boardwalk featuring floating villas, five-star hotels (The Lana), and ultra-luxury penthouses.",
        pricePerSqFtAed: "2,200 - 4,500 AED/sq.ft",
        bestFor: "Luxury waterfront living and branded residences with water taxi connections.",
      },
      {
        name: "Al Asayel & Downtown Border",
        character: "High-density residential towers offering direct walking access to Downtown Dubai and Dubai Mall.",
        pricePerSqFtAed: "1,700 - 2,600 AED/sq.ft",
        bestFor: "High-yield studio and 1-bedroom apartments targeted at young downtown corporate workers.",
      },
      {
        name: "Al Khail Road Corridor",
        character: "Rapidly expanding southern fringe with newer, value-priced developments and open skyline views.",
        pricePerSqFtAed: "1,400 - 2,000 AED/sq.ft",
        bestFor: "Maximum rental yield percentage and low entry ticket prices.",
      },
    ],
    transitAnalysis: {
      highwayAccess: "Strategic positioning between Sheikh Zayed Road (E11) and Al Khail Road (E44); multiple bridges across the Canal.",
      rushHourBottleneck: "Al Sa'ada Street and Business Bay crossing bridges experience heavy slowdowns between 17:30 and 19:30.",
      publicTransit: "Business Bay Metro Station (Red Line) plus RTA Dubai Water Canal Marine Transport stations.",
      walkabilityScore: "Moderate (Within clusters only)",
    },
    infrastructureAudit: {
      chillerType: "Empower District Cooling across most master sectors; select standalone chiller towers.",
      stormwaterResilience: "High: Gravity stormwater drainage direct to the 3.2 km Dubai Water Canal.",
      serviceChargeRangeAed: "14 - 26 AED / sq.ft (very competitive compared to Downtown's 35-55 AED).",
      occupancyRate: "94% - 96% year-round.",
      targetTenantProfile: "Fintech professionals, regional managers, creative directors, and business consultancy teams.",
    },
    investmentPros: [
      "Significantly lower entry price per square foot than Downtown Dubai with comparable tenant quality.",
      "Lower service charges enhance net cash-flow yields (regularly exceeding 8.5% net).",
      "Expanding presence of super-prime branded residences (The Lana, Jacob & Co, Bugatti Residences).",
    ],
    investmentRisks: [
      "Density of simultaneous construction sites along the southern canal perimeter.",
      "Internal street navigation can be confusing due to one-way service loops.",
    ],
  },
  {
    id: "creek-harbour",
    slug: "creek-harbour",
    image: "/images/districts/dubai-creek-harbour.jpg",
    name: "Dubai Creek Harbour",
    developer: "Emaar Properties",
    overview:
      "Dubai's next-generation smart metropolis, master-planned at twice the physical footprint of Downtown Dubai along historic Dubai Creek and the Ras Al Khor wildlife reserve.",
    urbanConcept:
      "Emaar's master-planned flagship for sustainable, pedestrian-first 21st-century urbanism. Built around Creek Marina and Central Park, the masterplan incorporates 700,000 m² of parks, 6 km of waterfront promenades, and strict environmental zoning to protect the adjacent 10,000-bird Ras Al Khor flamingo wetland sanctuary.",
    keyLandmarks: [
      "Dubai Creek Residences (Flagship marina towers)",
      "Address Grand Creek Harbour",
      "Creek Marina & Yacht Club",
      "Ras Al Khor Wildlife Sanctuary",
      "Creek Tower Observation Plaza",
    ],
    averageRoi: "7.6% - 9.1%",
    iconicTowersCount: 24,
    description:
      "Dubai Creek Harbour represents the premier long-term capital growth play in the UAE. As infrastructure matures, the district is evolving into a cleaner, greener, and more pedestrian-friendly alternative to Downtown, attracting international families and tech-forward executives.",
    subZones: [
      {
        name: "Creek Island (The Core)",
        character: "Fully completed waterfront island with luxury marina, 5-star Address hotels, and vibrant promenade dining.",
        pricePerSqFtAed: "1,900 - 2,800 AED/sq.ft",
        bestFor: "Immediate rental income generation and turnkey waterfront expat living.",
      },
      {
        name: "Creek Beach (Waterfront Urban Beach)",
        character: "Pedestrian-only low-to-mid rise district wrapped around a 700-meter artificial white sand lagoon beach.",
        pricePerSqFtAed: "1,750 - 2,400 AED/sq.ft",
        bestFor: "Family tenants and holidaymakers seeking resort tranquility without island traffic.",
      },
      {
        name: "Parklands & Gateway Precinct",
        character: "Towers bordering the massive Central Park with panoramic views back toward Downtown's skyline.",
        pricePerSqFtAed: "1,600 - 2,200 AED/sq.ft",
        bestFor: "Long-term capital growth as future transit connections complete.",
      },
    ],
    transitAnalysis: {
      highwayAccess: "Exceptional access: direct flyovers to Ras Al Khor Road (E44) and Nad Al Sheba Road (D67). 10 mins to DXB Airport.",
      rushHourBottleneck: "Minimal current bottlenecks due to wide 6-lane gateway bridges; slight delay at Ras Al Khor interchange.",
      publicTransit: "RTA Water Taxis operating to Festival City; planned Dubai Metro Blue Line station currently under development.",
      walkabilityScore: "High (Pedestrian Boulevards)",
    },
    infrastructureAudit: {
      chillerType: "High-efficiency centralized District Cooling plants managed by Emaar.",
      stormwaterResilience: "State-of-the-art: brand-new master infrastructure with dedicated high-volume pump stations to Creek.",
      serviceChargeRangeAed: "16 - 24 AED / sq.ft.",
      occupancyRate: "93% - 95%.",
      targetTenantProfile: "Aviation executives (close to DXB), creative entrepreneurs, sustainability-conscious expats, and young families.",
    },
    investmentPros: [
      "100% master-developed by Emaar Properties, guaranteeing unified architectural quality and estate maintenance.",
      "Tremendous capital upside when the Dubai Metro Blue Line commences operation.",
      "Just 10 minutes drive from Dubai International Airport (DXB).",
    ],
    investmentRisks: [
      "Currently lacks direct Metro connectivity until the Blue Line station opens.",
      "Phased master community construction means ongoing development in outer perimeter zones.",
    ],
  },
  {
    id: "jlt",
    slug: "jlt",
    image: "/images/districts/jumeirah-lakes-towers.jpg",
    name: "Jumeirah Lakes Towers (JLT)",
    developer: "DMCC / Nakheel",
    overview:
      "A dynamic mixed-use high-rise community organized into 26 alphabetical clusters around four artificial lakes, anchored by the DMCC Free Zone and Almas Tower.",
    urbanConcept:
      "Designed as a cluster-based urban hierarchy with 26 clusters (A to Z), each containing three high-rise towers. Clusters share a sunken ring road for subterranean deliveries and parking, keeping the ground-level lake promenades and parks entirely pedestrianized and family-friendly.",
    keyLandmarks: [
      "Almas Tower (360 m, DMCC Diamond Exchange)",
      "Uptown Tower (340 m, Adrian Smith + Gordon Gill)",
      "JLT Central Park (55,000 m² green park)",
      "Armada Towers & Cluster P Dining Strip",
    ],
    averageRoi: "8.5% - 10.0%",
    iconicTowersCount: 26,
    description:
      "JLT is one of Dubai's most consistent net rental yield generators. Home to DMCC (the world's leading commodity trade free zone with 24,000+ registered corporations), the district possesses an organic captive tenant pool of employees who prioritize living within walking distance of their offices and metro stations.",
    subZones: [
      {
        name: "Uptown Dubai (Cluster A / Southern Node)",
        character: "The ultra-prime high-tech extension featuring Uptown Tower, 5-star SO/ Hotel, and Grade-A commercial spaces.",
        pricePerSqFtAed: "1,800 - 2,800 AED/sq.ft",
        bestFor: "Capital appreciation and multinational corporate tenants.",
      },
      {
        name: "Lake Front & Central Park Clusters (J, K, L, O, P)",
        character: "Direct access to JLT Central Park, international schools, dog parks, and award-winning artisan eateries.",
        pricePerSqFtAed: "1,250 - 1,800 AED/sq.ft",
        bestFor: "Long-term expat families and steady, low-vacancy residential tenancies.",
      },
      {
        name: "Metro-Adjacent Clusters (C, D, S, T)",
        character: "Direct pedestrian footbridge links into DMCC and Sobha Realty Metro Stations.",
        pricePerSqFtAed: "1,200 - 1,650 AED/sq.ft",
        bestFor: "Maximum rental yields (up to 9.5% net) on compact studio and 1-bed apartments.",
      },
    ],
    transitAnalysis: {
      highwayAccess: "Direct access to Sheikh Zayed Road (E11) and seamless back-route connections to First Al Khail St and JBR bridges.",
      rushHourBottleneck: "Internal subterranean ring road encounters delays at cluster ingress roundabouts between 17:45 and 18:45.",
      publicTransit: "Two dedicated Dubai Metro stations (DMCC and Sobha Realty) connected directly by pedestrian bridges.",
      walkabilityScore: "High (Pedestrian Boulevards)",
    },
    infrastructureAudit: {
      chillerType: "Palma / Empower District Cooling.",
      stormwaterResilience: "High: Natural overflow basins through the interconnected lake reservoirs.",
      serviceChargeRangeAed: "13 - 22 AED / sq.ft (highly cost-effective for landlords).",
      occupancyRate: "95% - 98% (among the highest residential occupancies in Dubai).",
      targetTenantProfile: "DMCC traders, IT and software developers, consulting analysts, and young expatriate couples.",
    },
    investmentPros: [
      "Consistently yields 8.5% to 10% net returns due to low service charges and high occupancy.",
      "Captive workforce tenant demand from 24,000+ businesses registered within DMCC.",
      "Two operational metro stations provide true car-free commuting capability.",
    ],
    investmentRisks: [
      "Architecture of older 2007-2009 towers varies widely in lobby and elevator maintenance.",
      "Underground cluster ring-road requires navigation familiarity for delivery and visitors.",
    ],
  },
  {
    id: "jvc",
    slug: "jvc",
    image: "/images/districts/dubai-harbour.jpg",
    name: "Jumeirah Village Circle (JVC)",
    developer: "Nakheel / Multiple Independent Developers",
    overview:
      "Dubai's highest-volume residential investment community, consistently ranking #1 by monthly sales transactions. Features over 30 landscaped community parks, townhouses, and boutique high-rises.",
    urbanConcept:
      "Master-planned by Nakheel with an innovative concentric circular geometry surrounding a 500,000 sq.ft retail center (Circle Mall). Positioned at the strategic crossroads of Al Khail Road and Sheikh Mohammed Bin Zayed Road, allowing 15-20 minute vehicular reach to both Downtown and the Marina.",
    keyLandmarks: [
      "Five Jumeirah Village (248 m, spiral architecture)",
      "Circle Mall & Community Rooftop",
      "Binghatti House & Binghatti Amber",
      "Halfa Park and Community Circle Gardens",
    ],
    averageRoi: "9.0% - 11.2%",
    iconicTowersCount: 20,
    description:
      "JVC is the undisputed workhorse of Dubai real estate investment. It delivers the highest net rental yields in the entire city (9% to 11%+) driven by an immense tenant base of mid-management professionals seeking contemporary apartments at reasonable rents.",
    subZones: [
      {
        name: "District 10 to 14 (Near Circle Mall)",
        character: "The prime residential sector within 3 minutes walking distance to retail, supermarkets, and healthcare.",
        pricePerSqFtAed: "950 - 1,400 AED/sq.ft",
        bestFor: "Highest rental liquidity and rapid tenant re-letting.",
      },
      {
        name: "Al Khail Road Frontage (Districts 15 & 16)",
        character: "Towers with unobstructed skyline vistas and fastest vehicular egress toward Downtown.",
        pricePerSqFtAed: "1,050 - 1,500 AED/sq.ft",
        bestFor: "Short-term rentals and tenants commuting daily to Business Bay.",
      },
      {
        name: "Central Townhouse & Villa Enclaves",
        character: "Low-rise 2-3 storey gated townhouse corridors around local community parks.",
        pricePerSqFtAed: "850 - 1,200 AED/sq.ft",
        bestFor: "Family tenants seeking gardens and pet-friendly surroundings.",
      },
    ],
    transitAnalysis: {
      highwayAccess: "Strategic triangulated access: Al Khail Road (E44), Hessa Street (D61), and Sheikh Mohammed Bin Zayed Road (E311).",
      rushHourBottleneck: "Hessa Street exit ramps historically experience severe bottlenecks during morning and evening rush hours (currently undergoing major RTA widening upgrades).",
      publicTransit: "RTA feeder buses (J01) connecting to Mall of the Emirates Metro; planned future metro expansion route.",
      walkabilityScore: "Moderate (Within clusters only)",
    },
    infrastructureAudit: {
      chillerType: "Predominantly Chiller-Free (DEWA individual split/VRF systems), a huge selling point for tenants!",
      stormwaterResilience: "Moderate: Nakheel and RTA have upgraded municipal drainage following recent historic rainfall events.",
      serviceChargeRangeAed: "10 - 16 AED / sq.ft (exceptionally low, maximizing landlord net profit).",
      occupancyRate: "95% - 98%.",
      targetTenantProfile: "Corporate middle-management, aviation flight crews, healthcare staff, and young starter families.",
    },
    investmentPros: [
      "Top-tier net rental yields: 9% to 11%+ net ROI is standard, surpassing most global cities.",
      "Accessible entry capital: high-quality studio apartments starting from $160,000 USD (600,000 AED).",
      "Predominance of 'Chiller-Free' buildings reduces tenant friction and guarantees rapid re-leasing.",
    ],
    investmentRisks: [
      "Hessa Street bottleneck during peak commute hours (RTA road expansion actively mitigating this).",
      "High density of multiple concurrent private developers requires selective developer vetting.",
    ],
  },
  {
    id: "dubai-hills",
    slug: "dubai-hills",
    image: "/images/districts/downtown-dubai.jpg",
    name: "Dubai Hills Estate",
    developer: "Emaar Properties / Meraas",
    overview:
      "The green heart of modern Dubai. An 11-million square meter master-planned luxury golf and parkland metropolis surrounding an 18-hole championship golf course.",
    urbanConcept:
      "Designed as a tranquil urban oasis combining championship golf course fairways with high-density mid-to-high-rise apartment belts (Park Heights, Collective) and luxury villa communities (Hills Grove). Features the 180,000 m² Dubai Hills Park and the 2-million sq.ft Dubai Hills Mall.",
    keyLandmarks: [
      "Dubai Hills Mall & The Storm Coaster",
      "Dubai Hills Golf Club & 18-hole Championship Course",
      "Dubai Hills Park (longest park in any residential community)",
      "King's College Hospital London (Dubai Hills)",
    ],
    averageRoi: "7.2% - 8.5%",
    iconicTowersCount: 16,
    description:
      "Dubai Hills Estate is widely considered Emaar's finest master-planned community of the post-2015 era. It commands extraordinary tenant retention due to world-class British international schools (GEMS Wellington, Brighton College) and unparalleled parkland lifestyle.",
    subZones: [
      {
        name: "Dubai Hills Park & Boulevard Ring",
        character: "Mid-to-high-rise residential towers (Acacia, Mulberry, Park Ridge) directly fronting the massive central park.",
        pricePerSqFtAed: "1,750 - 2,500 AED/sq.ft",
        bestFor: "High-income expat families with children attending on-site international schools.",
      },
      {
        name: "Dubai Hills Mall Precinct",
        character: "Modern lifestyle apartments (Collective, Park Heights) within walking distance to high-end retail and dining.",
        pricePerSqFtAed: "1,600 - 2,200 AED/sq.ft",
        bestFor: "Liquid, compact apartments with high young-professional rental turnover.",
      },
      {
        name: "Golf Place & Fairways",
        character: "Ultra-luxury mansions and villas fronting the championship fairways with Downtown skyline views.",
        pricePerSqFtAed: "2,800 - 5,500 AED/sq.ft",
        bestFor: "HNWI families and golf enthusiasts seeking long-term primary homes.",
      },
    ],
    transitAnalysis: {
      highwayAccess: "Unrivalled arterial access between Al Khail Road (E44) and Umm Suqeim Street (D63). 15 mins to both Downtown and Marina.",
      rushHourBottleneck: "Minimal bottlenecks; exceptionally wide 4-to-6 lane internal boulevard design with multiple expressway exits.",
      publicTransit: "Planned future Dubai Metro line station adjacent to Dubai Hills Mall; current RTA feeder buses.",
      walkabilityScore: "High (Pedestrian Boulevards)",
    },
    infrastructureAudit: {
      chillerType: "Emaar District Cooling plants.",
      stormwaterResilience: "Very High: State-of-the-art master infrastructure with vast natural golf course retention lakes.",
      serviceChargeRangeAed: "15 - 22 AED / sq.ft.",
      occupancyRate: "96% - 98% (lowest tenant turnover in Dubai).",
      targetTenantProfile: "Senior corporate directors, doctors, expat families, and business owners.",
    },
    investmentPros: [
      "Exceptional tenant retention: average family tenancy exceeds 3.5 years, minimizing vacancy voids.",
      "On-site King's College Hospital and top-tier British international schools create immense family demand.",
      "Pristine golf course views command strong capital appreciation on secondary market resales.",
    ],
    investmentRisks: [
      "Premium pricing per square foot compared to secondary suburban alternatives.",
      "Upcoming metro station is still in the engineering pipeline (residents currently rely on cars/taxis).",
    ],
  },
  {
    id: "dubai-harbour",
    slug: "dubai-harbour",
    image: "/images/districts/dubai-harbour.jpg",
    name: "Dubai Harbour & Emaar Beachfront",
    developer: "Shamash Holdings / Emaar Properties",
    overview:
      "Dubai's premier maritime tourism and superyacht lifestyle capital, featuring the largest marina in the Middle East (700 berths) and the exclusive gated island community of Emaar Beachfront.",
    urbanConcept:
      "A 20-million sq.ft waterfront development jutting into the Arabian Gulf between Dubai Marina and Palm Jumeirah. Includes two cutting-edge cruise terminals capable of handling 1.2 million passengers annually, world-class superyacht slips, and Emaar Beachfront: a private gated island with 1.5 km of pristine white sandy beach accessible only to residents.",
    keyLandmarks: [
      "Dubai Harbour Yacht Club & Superyacht Marina",
      "Dubai Cruise Terminal",
      "Sobha Seahaven (338 m superyacht tower)",
      "Grand Bleu Tower by Elie Saab (Emaar Beachfront)",
      "Dubai Lighthouse (planned 135 m architectural beacon)",
    ],
    averageRoi: "7.8% - 9.5%",
    iconicTowersCount: 15,
    description:
      "Dubai Harbour represents the pinnacle of modern beachfront island living. Emaar Beachfront provides the only location in Dubai where residents enjoy true Miami-style private beach access directly below their skyscraper lobby while maintaining 5-minute road connectivity to Dubai Marina.",
    subZones: [
      {
        name: "Emaar Beachfront (Gated Island)",
        character: "Exclusive private-access residential island with 27 luxury towers and 1.5 km of private white sand beach.",
        pricePerSqFtAed: "3,200 - 6,000 AED/sq.ft",
        bestFor: "Miami-style beachfront living and high-revenue luxury holiday-let portfolios.",
      },
      {
        name: "Dubai Harbour Marina Waterfront",
        character: "Superyacht marina promenade, world-class waterfront restaurants, and branded architectural towers (Sobha Seahaven).",
        pricePerSqFtAed: "2,800 - 5,200 AED/sq.ft",
        bestFor: "Maritime enthusiasts, yacht owners, and high-net-worth investors.",
      },
    ],
    transitAnalysis: {
      highwayAccess: "Direct elevated bridge access connecting directly from King Salman Bin Abdulaziz Al Saud St; new dedicated bridge to Sheikh Zayed Road under construction.",
      rushHourBottleneck: "Weekend cruise ship passenger transfers can create brief morning ingress delays at terminal gates.",
      publicTransit: "Integrated with Dubai Harbour Marina ferry routes; monorail connectivity to Palm Jumeirah planned.",
      walkabilityScore: "High (Pedestrian Boulevards)",
    },
    infrastructureAudit: {
      chillerType: "High-efficiency district cooling network.",
      stormwaterResilience: "Maximum: Island topography engineered above sea level with direct marine stormwater outfalls.",
      serviceChargeRangeAed: "22 - 36 AED / sq.ft.",
      occupancyRate: "93% - 96%.",
      targetTenantProfile: "International lifestyle jetsetters, yacht captains, crypto and venture capital partners, and luxury vacationers.",
    },
    investmentPros: [
      "Only private residential beach community physically connected to Dubai Marina.",
      "Surging luxury holiday rental revenue during Dubai's peak October-May winter tourism season.",
      "Home to the largest superyacht marina in the MENA region, attracting global yachting wealth.",
    ],
    investmentRisks: [
      "High capital entry threshold compared to standard mainland residential apartments.",
      "Active ongoing infrastructure completion on marina berths and hospitality zones.",
    ],
  },
];
