import fs from 'fs';

const content = fs.readFileSync('src/data/localizedContent.ts', 'utf8');

const langs = ['ru', 'ar', 'zh', 'de', 'fr', 'it', 'tr', 'hi', 'ur'];

for (const lang of langs) {
  const upper = lang.toUpperCase();
  const distRegex = new RegExp(`export const LOCALIZED_DISTRICTS_${upper}: Record<string, LocalizedDistrictData> = (\\{[\\s\\S]*?\\n\\};)`);
  const match = content.match(distRegex);
  if (match) {
    const data = eval('(' + match[1].replace(/;\s*$/, '') + ')');
    const hasUrban = Object.values(data).filter(d => !!d.urbanConcept).length;
    const hasSubzones = Object.values(data).filter(d => !!d.subZones).length;
    const hasTransit = Object.values(data).filter(d => !!d.transitAnalysis).length;
    const hasInfra = Object.values(data).filter(d => !!d.infrastructureAudit).length;
    const hasRisks = Object.values(data).filter(d => !!d.investmentRisks).length;
    console.log(`Lang ${lang}: districts=${Object.keys(data).length}, urbanConcept=${hasUrban}, subzones=${hasSubzones}, transit=${hasTransit}, infra=${hasInfra}, risks=${hasRisks}`);
  } else {
    console.log(`Lang ${lang}: NOT FOUND`);
  }
}
