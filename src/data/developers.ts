export interface Developer {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  foundingYear: number;
  headquarters: string;
  tier: "Tier-1 Master Developer" | "Ultra-Luxury Boutique" | "Institutional Sovereign";
  dldEscrowRating: "AAA (Government Backed)" | "AAA (Prime Track Record)" | "AA+ (High Reliability)";
  onTimeDeliveryRate: string;
  description: string;
  highlights: string[];
  totalProjectsDubai: number;
  averageNetRoi: string;
  startingPriceAed: string;
  website: string;
}

export const DEVELOPERS: Developer[] = [
  {
    id: "DEV-EMAAR",
    slug: "emaar",
    name: "Emaar Properties",
    shortName: "Emaar",
    foundingYear: 1997,
    headquarters: "Downtown Dubai, UAE",
    tier: "Tier-1 Master Developer",
    dldEscrowRating: "AAA (Government Backed)",
    onTimeDeliveryRate: "97.4%",
    description:
      "Public joint-stock master developer responsible for creating Downtown Dubai, Burj Khalifa, Dubai Marina, and Dubai Creek Harbour. The undisputed global benchmark for master-community infrastructure and liquidity.",
    highlights: [
      "Creator of Downtown Dubai and the world's tallest tower (Burj Khalifa)",
      "Pioneered freehold foreign property ownership in the UAE",
      "Over 105,000 residential units delivered across the globe since 2002",
      "Highest resale liquidity and bank mortgage approval rate in the Middle East",
    ],
    totalProjectsDubai: 68,
    averageNetRoi: "6.8%",
    startingPriceAed: "2,200,000 AED",
    website: "https://www.emaar.com/",
  },
  {
    id: "DEV-SOBHA",
    slug: "sobha",
    name: "Sobha Realty",
    shortName: "Sobha",
    foundingYear: 1976,
    headquarters: "Sobha Hartland, MBR City, Dubai",
    tier: "Tier-1 Master Developer",
    dldEscrowRating: "AAA (Prime Track Record)",
    onTimeDeliveryRate: "98.6%",
    description:
      "Renowned for revolutionary in-house backward integration: Sobha manufactures its own structural joinery, German double glazing, electrical networks, and architectural finishes, eliminating contractor subcontractor flaws.",
    highlights: [
      "Proprietary backward-integration model with zero third-party outsourcing",
      "Signature master-community: Sobha Hartland (8 million sq.ft freehold enclave)",
      "Iconic high-rise engineering: Sobha SeaHaven in Dubai Harbour",
      "Strict German and Austrian structural tolerance benchmarks",
    ],
    totalProjectsDubai: 24,
    averageNetRoi: "7.4%",
    startingPriceAed: "1,850,000 AED",
    website: "https://www.sobharealty.com/",
  },
  {
    id: "DEV-NAKHEEL",
    slug: "nakheel",
    name: "Nakheel",
    shortName: "Nakheel",
    foundingYear: 2000,
    headquarters: "Palm Jumeirah, Dubai",
    tier: "Institutional Sovereign",
    dldEscrowRating: "AAA (Government Backed)",
    onTimeDeliveryRate: "95.2%",
    description:
      "Dubai Government sovereign entity that reshaped the world's coastlines through the construction of Palm Jumeirah, Palm Jebel Ali, and the Dubai Islands, adding over 300 kilometers to Dubai's natural coastline.",
    highlights: [
      "Master developer of Palm Jumeirah and the 50-storey Palm Tower",
      "Re-launch of mega-infrastructure project Palm Jebel Ali (twice the size of Palm Jumeirah)",
      "Unrivalled waterfront landbank control across the Arabian Gulf",
      "Direct municipal and infrastructure sovereign backing via Dubai Holding",
    ],
    totalProjectsDubai: 38,
    averageNetRoi: "6.4%",
    startingPriceAed: "2,900,000 AED",
    website: "https://www.nakheel.com/",
  },
  {
    id: "DEV-OMNIYAT",
    slug: "omniyat",
    name: "Omniyat Properties",
    shortName: "Omniyat",
    foundingYear: 2005,
    headquarters: "Omniyat One, Business Bay, Dubai",
    tier: "Ultra-Luxury Boutique",
    dldEscrowRating: "AAA (Prime Track Record)",
    onTimeDeliveryRate: "94.8%",
    description:
      "Dubai's pre-eminent architectural art developer. Omniyat collaborates exclusively with global Pritzker Prize laureates (Zaha Hadid Architects, Foster + Partners) and ultra-luxury hospitality flags including Dorchester Collection.",
    highlights: [
      "Masterwork: The Opus by Zaha Hadid with revolutionary interconnected void cube",
      "Exclusive Dorchester Collection branded residences (One Palm, The Lana Residences, VELA)",
      "Ultra-low density layouts with private elevator foyers and superyacht berths",
      "Holds multiple record penthouse transactions on Palm Jumeirah exceeding 250M AED",
    ],
    totalProjectsDubai: 16,
    averageNetRoi: "6.1%",
    startingPriceAed: "7,500,000 AED",
    website: "https://www.omniyat.com/",
  },
  {
    id: "DEV-BINGHATTI",
    slug: "binghatti",
    name: "Binghatti Developers",
    shortName: "Binghatti",
    foundingYear: 2008,
    headquarters: "DIFC / Business Bay, Dubai",
    tier: "Tier-1 Master Developer",
    dldEscrowRating: "AA+ (High Reliability)",
    onTimeDeliveryRate: "99.1%",
    description:
      "Pioneer of automotive and horological branded mega-skyscrapers. Binghatti is currently erecting Burj Binghatti Jacob & Co Residences (aiming to be the world's tallest residential hyper-tower), Mercedes-Benz Places, and Bugatti Residences.",
    highlights: [
      "Global partnerships with Bugatti, Mercedes-Benz, and Jacob & Co",
      "Industry-leading structural delivery speed across Business Bay and Downtown",
      "Distinctive architectural DNA characterized by angular cantilevered balconies",
      "High capital appreciation velocity among international younger HNWIs",
    ],
    totalProjectsDubai: 45,
    averageNetRoi: "7.9%",
    startingPriceAed: "1,600,000 AED",
    website: "https://www.binghatti.com/",
  },
  {
    id: "DEV-MERAAS",
    slug: "meraas",
    name: "Meraas",
    shortName: "Meraas",
    foundingYear: 2007,
    headquarters: "Dubai Holding Headquarters, Dubai",
    tier: "Institutional Sovereign",
    dldEscrowRating: "AAA (Government Backed)",
    onTimeDeliveryRate: "96.5%",
    description:
      "Subsidiary of Dubai Holding focused on urban lifestyle master-destinations. Creator of City Walk, Bluewaters Island (home to Ain Dubai), Port de La Mer, and Bulgari Residences on Jumeira Bay Island.",
    highlights: [
      "Curator of Dubai's most exclusive billionaire addresses (Bulgari Island, Bluewaters)",
      "Pedestrian-first urban design philosophies (Central Park at City Walk)",
      "Direct municipal and government infrastructure integration",
      "Premium European-style low-to-mid rise architectural aesthetics",
    ],
    totalProjectsDubai: 28,
    averageNetRoi: "6.5%",
    startingPriceAed: "2,600,000 AED",
    website: "https://www.meraas.com/",
  },
  {
    id: "DEV-ICD",
    slug: "icd",
    name: "Investment Corporation of Dubai (ICD)",
    shortName: "ICD",
    foundingYear: 2006,
    headquarters: "DIFC, Dubai",
    tier: "Institutional Sovereign",
    dldEscrowRating: "AAA (Government Backed)",
    onTimeDeliveryRate: "98.0%",
    description:
      "The sovereign wealth fund of the Government of Dubai. Direct developer and owner of strategic national engineering marvels including One Za'abeel (home to The Link, the world's longest cantilever) and Atlantis The Royal.",
    highlights: [
      "Owner and master entity behind Atlantis The Royal and One Za'abeel",
      "Engineered 'The Link' — 230-meter suspended skybridge hoisted across a 6-lane highway",
      "Sovereign institutional capital security backing every development",
      "Hosts world-renowned Michelin-starred chef concepts and ultra-luxury suites",
    ],
    totalProjectsDubai: 12,
    averageNetRoi: "6.0%",
    startingPriceAed: "4,500,000 AED",
    website: "https://www.icd.gov.ae/",
  },
  {
    id: "DEV-DMCC",
    slug: "dmcc",
    name: "Dubai Multi Commodities Centre (DMCC)",
    shortName: "DMCC",
    foundingYear: 2002,
    headquarters: "Almas Tower, JLT, Dubai",
    tier: "Institutional Sovereign",
    dldEscrowRating: "AAA (Government Backed)",
    onTimeDeliveryRate: "97.8%",
    description:
      "Government authority and master developer behind Jumeirah Lakes Towers (JLT) and the new Uptown Dubai district. Developer of the iconic Almas Tower and the 340-meter LEED Gold Uptown Tower.",
    highlights: [
      "Master authority of Jumeirah Lakes Towers (over 80 high-rise towers)",
      "Developer of Uptown Dubai district featuring Grade A commercial and SO/ Uptown Residences",
      "World's leading free zone authority for 9 consecutive years (Financial Times fDi)",
      "Direct diamond and gold vault institutional infrastructure integrated into building basements",
    ],
    totalProjectsDubai: 15,
    averageNetRoi: "7.6%",
    startingPriceAed: "1,750,000 AED",
    website: "https://www.dmcc.ae/",
  },
  {
    id: "DEV-HABTOOR",
    slug: "al-habtoor",
    name: "Al Habtoor Group",
    shortName: "Al Habtoor",
    foundingYear: 1970,
    headquarters: "Al Habtoor City, Sheikh Zayed Road, Dubai",
    tier: "Tier-1 Master Developer",
    dldEscrowRating: "AAA (Prime Track Record)",
    onTimeDeliveryRate: "96.0%",
    description:
      "One of the UAE's most established multi-billion dollar conglomerates. Currently constructing Habtoor Tower on Sheikh Zayed Road, set to be one of the largest and most innovative residential towers in the world.",
    highlights: [
      "Over 50 years of continuous construction and hospitality leadership in the UAE",
      "Creator of Al Habtoor City canal-front mega-complex on Sheikh Zayed Road",
      "Pioneering top-down deep foundation construction technology in residential supertalls",
      "Fully debt-free conglomerate balance sheet offering high investor security",
    ],
    totalProjectsDubai: 14,
    averageNetRoi: "7.2%",
    startingPriceAed: "2,100,000 AED",
    website: "https://www.habtoor.com/",
  },
  {
    id: "DEV-DUBAI-HOLDING",
    slug: "dubai-holding",
    name: "Dubai Holding / Jumeirah Group",
    shortName: "Dubai Holding",
    foundingYear: 2004,
    headquarters: "DIFC / Jumeirah, Dubai",
    tier: "Institutional Sovereign",
    dldEscrowRating: "AAA (Government Backed)",
    onTimeDeliveryRate: "98.5%",
    description:
      "Global sovereign investment conglomerate managing a multi-billion dollar portfolio across 13 countries. Developer and custodian of iconic UAE landmarks including Burj Al Arab Jumeirah, Emirates Towers, and Madinat Jumeirah Living.",
    highlights: [
      "Created the architectural icon of modern Dubai: Burj Al Arab (1999)",
      "Developer of Emirates Towers (twin landmark that pioneered Sheikh Zayed Road)",
      "Developer of Madinat Jumeirah Living — prime freehold enclave opposite Burj Al Arab",
      "Direct municipal and government sovereign parent entity of Nakheel and Meraas",
    ],
    totalProjectsDubai: 32,
    averageNetRoi: "6.3%",
    startingPriceAed: "2,800,000 AED",
    website: "https://dubaiholding.com/",
  },
];

export function getDeveloperBySlug(slug: string): Developer | undefined {
  return DEVELOPERS.find((d) => d.slug.toLowerCase() === slug.toLowerCase());
}

export function getDeveloperForBuilding(developerName: string): Developer | undefined {
  const lower = developerName.toLowerCase();
  if (lower.includes("emaar")) return getDeveloperBySlug("emaar");
  if (lower.includes("sobha")) return getDeveloperBySlug("sobha");
  if (lower.includes("nakheel")) return getDeveloperBySlug("nakheel");
  if (lower.includes("omniyat")) return getDeveloperBySlug("omniyat");
  if (lower.includes("binghatti")) return getDeveloperBySlug("binghatti");
  if (lower.includes("meraas")) return getDeveloperBySlug("meraas");
  if (lower.includes("icd") || lower.includes("investment corporation of dubai")) return getDeveloperBySlug("icd");
  if (lower.includes("dmcc")) return getDeveloperBySlug("dmcc");
  if (lower.includes("habtoor")) return getDeveloperBySlug("al-habtoor");
  if (lower.includes("jumeirah") || lower.includes("dubai holding")) return getDeveloperBySlug("dubai-holding");
  return undefined;
}
