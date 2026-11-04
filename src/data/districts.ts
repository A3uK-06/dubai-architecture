export interface District {
  id: string;
  slug: string;
  name: string;
  developer: string;
  overview: string;
  keyLandmarks: string[];
  averageRoi: string;
  iconicTowersCount: number;
  description: string;
  investmentPros: string[];
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
      "The prestigious center of modern Dubai, home to Burj Khalifa, Dubai Mall, and Dubai Opera. The undisputed epicenter of global ultra-prime luxury real estate.",
    keyLandmarks: ["Burj Khalifa", "Dubai Fountain", "Dubai Mall", "Address Downtown", "Dubai Opera"],
    averageRoi: "6.8% - 8.2%",
    iconicTowersCount: 24,
    description:
      "Master-developed by Emaar Properties, Downtown Dubai represents the pinnacle of urban vertical luxury. The district commands the highest rental yields and capital liquidity in the emirate, sustained by international tourism and prestige headquarters.",
    investmentPros: [
      "Highest capital liquidity and global brand recognition",
      "Prime walkability around Burj Lake and Mohammed Bin Rashid Boulevard",
      "Consistent 7%+ net rental yields driven by luxury short-term leasing",
    ],
  },
  {
    id: "dubai-marina",
    slug: "dubai-marina",
    image: "/images/districts/dubai-marina.jpg",
    name: "Dubai Marina",
    developer: "Emaar Properties / Multiple Developers",
    overview:
      "The world's largest man-made marina canal city. Over 200 residential skyscrapers framing a 3.5 km turquoise waterway lined with luxury yachts.",
    keyLandmarks: ["Cayan Tower", "Marina 101", "Princess Tower", "The Marina Torch", "Sobha Seahaven"],
    averageRoi: "7.5% - 9.2%",
    iconicTowersCount: 38,
    description:
      "Conceived as a Riviera-style waterfront metropolis, Dubai Marina holds one of the highest densities of supertall residential architecture on earth. Constant demand from expatriate professionals and holidaymakers sustains exceptional rental yields.",
    investmentPros: [
      "High tenant occupancy rate year-round (>94%)",
      "Superb metro, tram, and water taxi transit connectivity",
      "Strong dual yield from long-term leases and holiday home operators",
    ],
  },
  {
    id: "difc",
    slug: "difc",
    image: "/images/districts/difc.jpg",
    name: "DIFC & Sheikh Zayed Road",
    developer: "Dubai Holding / Multiple Developers",
    overview:
      "The Middle East's premier financial hub and skyscraper corridor. Features groundbreaking architectural designs by Norman Foster, Hazel Wong, and Nikken Sekkei.",
    keyLandmarks: ["Emirates Towers", "The Index", "One Za'abeel", "Museum of the Future", "The Gate DIFC"],
    averageRoi: "7.0% - 8.5%",
    iconicTowersCount: 30,
    description:
      "The historic business spine of Dubai where architectural innovation began in the late 1990s. Regulated by independent common-law financial courts, DIFC houses multinational banks, Michelin-starred culinary venues, and premium executive residences.",
    investmentPros: [
      "Independent common law jurisdiction and financial regulatory stability",
      "Premium executive corporate tenant base",
      "High capital value appreciation on limited residential plots",
    ],
  },
  {
    id: "palm-jumeirah",
    slug: "palm-jumeirah",
    image: "/images/districts/palm-jumeirah.jpg",
    name: "Palm Jumeirah",
    developer: "Nakheel",
    overview:
      "The world-famous palm tree-shaped archipelago extending into the Arabian Gulf. A global synonym for beachfront super-prime villas and monumental resort towers.",
    keyLandmarks: ["Atlantis The Royal", "Burj Al Arab (adjacent)", "The Palm Tower", "Atlantis The Palm"],
    averageRoi: "8.0% - 10.5%",
    iconicTowersCount: 15,
    description:
      "An engineering marvel visible from space, Palm Jumeirah redefined global ultra-luxury waterfront living. With zero remaining land on the fronds and crescent, existing and new residential towers achieve record capital appreciation.",
    investmentPros: [
      "Strict geographic scarcity driving persistent price appreciation",
      "Top-tier international ultra-high-net-worth (UHNW) investor demographic",
      "Exceptional short-term rental yields in luxury beachfront penthouses",
    ],
  },
  {
    id: "business-bay",
    slug: "business-bay",
    image: "/images/districts/business-bay.jpg",
    name: "Business Bay",
    developer: "Dubai Properties",
    overview:
      "A fast-paced central commercial and high-density residential district situated along the Dubai Water Canal, boasting avant-garde projects by Zaha Hadid and Omniyat.",
    keyLandmarks: ["The Opus by Zaha Hadid", "Canal Crown by DAMAC", "Omniyat The Lana", "Vela by Omniyat"],
    averageRoi: "8.2% - 9.8%",
    iconicTowersCount: 42,
    description:
      "Seamlessly bordering Downtown Dubai, Business Bay has transformed into a vibrant waterfront lifestyle quarter flanking the Dubai Water Canal. Architectural boldness and high ROI make it a favorite for institutional and private investors.",
    investmentPros: [
      "High rental yields (often exceeding 8.5% net)",
      "Continuous expansion of luxury canal promenades and yacht marinas",
      "Direct proximity to Downtown Dubai at a lower entry price point per sq.ft.",
    ],
  },
  {
    id: "jlt",
    slug: "jlt",
    image: "/images/districts/jumeirah-lakes-towers.jpg",
    name: "Jumeirah Lakes Towers (JLT)",
    developer: "DMCC / Nakheel",
    overview:
      "A dynamic mixed-use community organized into 26 alphabetical clusters surrounding four artificial lakes, anchored by Almas Tower.",
    keyLandmarks: ["Almas Tower", "Uptown Tower", "DMCC Headquarters"],
    averageRoi: "8.5% - 10.0%",
    iconicTowersCount: 26,
    description:
      "Home to the Dubai Multi Commodities Centre (DMCC) free zone with over 24,000 registered businesses. The district provides vibrant lakeside dining, parks, and high-yielding residential and commercial properties.",
    investmentPros: [
      "One of the highest net rental yields in Dubai (up to 10%)",
      "Strong commercial workforce driving sustained residential tenant demand",
      "Freehold ownership with direct access to two Dubai Metro stations",
    ],
  },
  {
    id: "creek-harbour",
    slug: "creek-harbour",
    image: "/images/districts/dubai-creek-harbour.jpg",
    name: "Dubai Creek Harbour",
    developer: "Emaar Properties",
    overview:
      "The next-generation smart metropolis of Dubai, twice the size of Downtown Dubai, positioned along historic Dubai Creek and Ras Al Khor flamingo sanctuary.",
    keyLandmarks: ["Dubai Creek Residences", "Address Grand Creek", "Creek Marina"],
    averageRoi: "7.8% - 9.2%",
    iconicTowersCount: 20,
    description:
      "Emaar's master-planned flagship waterfront development focusing on sustainable pedestrian-friendly urban planning, expansive parks, cultural districts, and direct views of the central skyline.",
    investmentPros: [
      "Immense long-term capital appreciation potential as the master community matures",
      "Direct waterfront living adjacent to protected nature reserves",
      "Modern infrastructure, smart-city technology, and new transit lines",
    ],
  },
  {
    id: "jvc",
    slug: "jvc",
    image: "/images/districts/dubai-harbour.jpg",
    name: "Jumeirah Village Circle (JVC)",
    developer: "Nakheel / Multiple Developers",
    overview:
      "Dubai's top residential community for investor rental yields and transactional sales volume, featuring parks, townhouses, and contemporary boutique high-rises.",
    keyLandmarks: ["Five Jumeirah Village", "Circle Mall", "Binghatti House"],
    averageRoi: "9.0% - 11.0%",
    iconicTowersCount: 18,
    description:
      "A master-planned concentric circle community developed by Nakheel, strategically located at the crossroads of Al Khail Road and Sheikh Mohammed Bin Zayed Road. JVC is consistently rated #1 by transaction volume in Dubai.",
    investmentPros: [
      "Consistently highest rental yield ROI in Dubai (9-11% net)",
      "Affordable entry ticket starting from 600,000 AED ($163,000 USD)",
      "High tenant demand from middle and upper-middle income professionals",
    ],
  },
];
