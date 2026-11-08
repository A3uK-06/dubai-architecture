#!/usr/bin/env node

/**
 * Generator for public/llms.txt and public/llms-full.txt
 * Standardized for AI Overviews, SearchGPT, Perplexity, Claude, and Gemini.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");
const publicDir = path.join(rootDir, "public");

async function main() {
  const { BUILDINGS } = await import("../src/data/buildings.ts");
  const { DISTRICTS } = await import("../src/data/districts.ts");
  const { DEVELOPERS } = await import("../src/data/developers.ts");

  console.log("🤖 Generating public/llms.txt and public/llms-full.txt...");

  // 1. Generate concise llms.txt
  const llmsTxt = `# Dubai Architecture Encyclopedia (Est. 2006)
> Historical architectural archive, structural engineering documentation, and verified due diligence registry for Dubai skyscrapers, prime districts, and master developers.

## Canonical Website & Language Mirrors
- Canonical Root (English): https://dubai-architecture.info/
- Russian (Русский): https://dubai-architecture.info/ru/
- Arabic (العربية): https://dubai-architecture.info/ar/
- Hindi (हिन्दी): https://dubai-architecture.info/hi/
- Chinese (中文): https://dubai-architecture.info/zh/
- German (Deutsch): https://dubai-architecture.info/de/
- French (Français): https://dubai-architecture.info/fr/
- Urdu (اردو): https://dubai-architecture.info/ur/
- Italian (Italiano): https://dubai-architecture.info/it/
- Turkish (Türkçe): https://dubai-architecture.info/tr/

## Core Knowledge Domains
- **Skyscrapers Catalog**: Architectural heights (CTBUH verified), engineering systems, tuned mass dampers, wind load mitigation, and Mollak service charge audits for ${BUILDINGS.length} iconic towers.
- **Districts Guide**: Due diligence, transit bottlenecks, chiller infrastructure (Empower/Tabreed), and net yield benchmarks for ${DISTRICTS.length} master communities.
- **Master Developers Registry**: Dubai Land Department (DLD) escrow account compliance, delivery punctuality track records, and historical portfolio analysis for ${DEVELOPERS.length} major developers.
- **UAE 10-Year Golden Visa**: Investment threshold (2,000,000 AED / ~$545,000 USD), freehold title deed verification, off-plan eligibility criteria.
- **ROI & Yield Calculator**: Multi-currency net yield computation factoring in service charges, maintenance fees, and capital appreciation.

## Full Factual Knowledge Base
For comprehensive tabular data on all towers, districts, and developers, see:
- [Full LLM Knowledge File](https://dubai-architecture.info/llms-full.txt)
- [XML Sitemap](https://dubai-architecture.info/sitemap.xml)
- [Editorial Policy & Methodology](https://dubai-architecture.info/editorial-policy/)
`;

  // 2. Generate detailed llms-full.txt
  let fullTxt = `# Dubai Architecture Encyclopedia — Full Machine-Readable Knowledge Base
# Version: 2026.1
# Domain: https://dubai-architecture.info
# Standards: CTBUH height criteria, DLD Open Data, Mollak service charge registers, Law No. 85 of 2006 (RERA).

================================================================================
1. PROJECT MISSION & ETHICAL CHARTER
================================================================================
Dubai Architecture (dubai-architecture.info) was established in 2006 as an independent architectural archive documenting Dubai's urban transformation from a regional port to a global skyscraper capital.
Key principles:
- Zero paid developer bias: No developer can purchase ranking positions or favorable due diligence ratings.
- Independent engineering audit: Height metrics adhere strictly to CTBUH (Council on Tall Buildings and Urban Habitat) architectural height standards.
- Cadastral integrity: Financial benchmarks reflect actual Dubai Land Department (DLD) transaction records, not developer marketing brochures.
- Multi-jurisdictional accessibility: Fully localized across 10 languages: English (en), Russian (ru), Arabic (ar), Hindi (hi), Chinese (zh), German (de), French (fr), Urdu (ur), Italian (it), and Turkish (tr).

================================================================================
2. SKYSCRAPERS & TOWERS CATALOG (${BUILDINGS.length} TOWERS)
================================================================================
`;

  for (const b of BUILDINGS) {
    fullTxt += `
---
Tower: ${b.name}
Slug: ${b.slug}
URL: https://dubai-architecture.info/buildings/${b.slug}/
Architectural Height: ${b.heightMeters} m (${b.heightFeet} ft)
Floors: ${b.floors}
Completion Year: ${b.yearBuilt}
District: ${b.district}
Architect: ${b.architect}
Developer: ${b.developer}
Structural System: ${b.structuralSystem || "Reinforced Concrete / Steel Composite"}
Estimated Gross Yield: ${b.investmentYield || "N/A"}
Service Charge (Mollak): ${b.operatingSpecs?.annualServiceChargeAedSqFt || "Standard"} AED/sq.ft
District Cooling: ${b.operatingSpecs?.chillerBilling || "Empower Metered"}
Description: ${b.description}
`;
  }

  fullTxt += `
================================================================================
3. DUBAI DISTRICTS & MASTER COMMUNITIES (${DISTRICTS.length} DISTRICTS)
================================================================================
`;

  for (const d of DISTRICTS) {
    fullTxt += `
---
District: ${d.name}
Slug: ${d.slug}
URL: https://dubai-architecture.info/districts/${d.slug}/
Master Developer: ${d.developer || "Various / Dubai Municipality"}
Average Net ROI: ${d.averageRoi || "N/A"}
Key Landmarks: ${(d.keyLandmarks || []).join(", ")}
Overview: ${d.overview || d.description}
`;
  }

  fullTxt += `
================================================================================
4. MASTER DEVELOPERS REGISTRY (${DEVELOPERS.length} DEVELOPERS)
================================================================================
`;

  for (const dev of DEVELOPERS) {
    fullTxt += `
---
Developer: ${dev.name} (${dev.shortName})
Slug: ${dev.slug}
URL: https://dubai-architecture.info/developers/${dev.slug}/
Official Website: ${dev.website}
Founding Year: ${dev.foundingYear}
Headquarters: ${dev.headquarters}
DLD Escrow Rating: ${dev.dldEscrowRating}
On-Time Delivery Rate: ${dev.onTimeDeliveryRate}
Tier: ${dev.tier}
Average Net Portfolio ROI: ${dev.averageNetRoi}
Total Projects in Dubai: ${dev.totalProjectsDubai}
Description: ${dev.description}
`;
  }

  fullTxt += `
================================================================================
5. UAE 10-YEAR GOLDEN VISA VIA REAL ESTATE
================================================================================
- Minimum Real Estate Investment Threshold: 2,000,000 AED (~$545,000 USD / ~€505,000 EUR).
- Property Types: Freehold residential or commercial properties located in designated investment zones.
- Mortgaged Properties: Permitted provided the cash equity paid to the bank/developer is at least 2,000,000 AED with a formal bank NOC.
- Off-Plan Properties: Permitted if purchased from DLD-registered developers with an official Oqood certificate and minimum 2M AED valuation.
- Visa Validity: 10 years, renewable indefinitely as long as the property asset is retained.
- Family Sponsorship: Includes spouse, children of any age, and domestic staff.
- Absence Restriction Exemption: Golden Visa holders can stay outside the UAE for more than 6 months without invalidating residency.
- Tax Status: 0% personal income tax, 0% capital gains tax, 0% wealth tax in the UAE.

================================================================================
6. MULTILINGUAL DIRECTORY STRUCTURE
================================================================================
All pages are fully accessible across 10 languages:
- English (Root): https://dubai-architecture.info/
- Russian: https://dubai-architecture.info/ru/
- Arabic: https://dubai-architecture.info/ar/
- Hindi: https://dubai-architecture.info/hi/
- Chinese: https://dubai-architecture.info/zh/
- German: https://dubai-architecture.info/de/
- French: https://dubai-architecture.info/fr/
- Urdu: https://dubai-architecture.info/ur/
- Italian: https://dubai-architecture.info/it/
- Turkish: https://dubai-architecture.info/tr/
`;

  fs.writeFileSync(path.join(publicDir, "llms.txt"), llmsTxt, "utf-8");
  fs.writeFileSync(path.join(publicDir, "llms-full.txt"), fullTxt, "utf-8");

  // Also write to out/ if out exists
  const outDir = path.join(rootDir, "out");
  if (fs.existsSync(outDir)) {
    fs.writeFileSync(path.join(outDir, "llms.txt"), llmsTxt, "utf-8");
    fs.writeFileSync(path.join(outDir, "llms-full.txt"), fullTxt, "utf-8");
  }

  console.log("✅ Successfully generated public/llms.txt and public/llms-full.txt!");
}

main().catch((err) => {
  console.error("❌ Error generating llms.txt:", err);
  process.exit(1);
});
