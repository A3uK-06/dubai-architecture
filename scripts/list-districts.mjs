import { DISTRICTS } from '../src/data/districts.ts';

console.log('Total districts:', DISTRICTS.length);
for (const d of DISTRICTS) {
  console.log({
    slug: d.slug,
    name: d.name,
    hasUrban: Boolean(d.urbanConcept),
    subZonesCount: d.subZones?.length || 0,
    hasTransit: Boolean(d.transitAnalysis),
    hasInfra: Boolean(d.infrastructureAudit),
    risksCount: d.investmentRisks?.length || 0,
  });
}
