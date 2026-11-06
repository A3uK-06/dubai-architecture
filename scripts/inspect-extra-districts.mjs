import fs from 'fs';
const d = JSON.parse(fs.readFileSync('scripts/districts-source.json', 'utf8'));

for (const dist of d.slice(10)) {
  console.log(`=== ${dist.slug} ===`);
  console.log('urbanConcept:', dist.urbanConcept);
  console.log('subZones:', JSON.stringify(dist.subZones, null, 2));
  console.log('transitAnalysis:', JSON.stringify(dist.transitAnalysis, null, 2));
  console.log('infrastructureAudit:', JSON.stringify(dist.infrastructureAudit, null, 2));
  console.log('investmentPros:', dist.investmentPros);
  console.log('investmentRisks:', dist.investmentRisks);
}
