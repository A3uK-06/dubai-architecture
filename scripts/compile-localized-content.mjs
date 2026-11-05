import fs from 'fs';
import * as zh from './loc-data/zh.mjs';
import * as de from './loc-data/de.mjs';
import * as fr from './loc-data/fr.mjs';
import * as it from './loc-data/it.mjs';
import * as tr from './loc-data/tr.mjs';
import * as hi from './loc-data/hi.mjs';
import * as ur from './loc-data/ur.mjs';
import * as ruAr from './parsed-ru-ar.mjs';

const outPath = 'src/data/localizedContent.ts';

let code = `import { Building } from "./buildings";
import { District } from "./districts";
import { LanguageCode } from "../i18n/languages";

export interface LocalizedBuildingData {
  name: string;
  architect?: string;
  developer?: string;
  district: string;
  type: string;
  description: string;
  architecturalHighlights: string[];
  historicalNote?: string;
  structuralSystem?: string;
}

export interface LocalizedDistrictData {
  name: string;
  developer?: string;
  overview: string;
  description: string;
  keyLandmarks: string[];
  investmentPros: string[];
}
`;

function serializeRecord(varName, typeName, obj) {
  return `\nexport const ${varName}: Record<string, ${typeName}> = ${JSON.stringify(obj, null, 2)};\n`;
}

code += serializeRecord('LOCALIZED_BUILDINGS_RU', 'LocalizedBuildingData', ruAr.LOCALIZED_BUILDINGS_RU);
code += serializeRecord('LOCALIZED_BUILDINGS_AR', 'LocalizedBuildingData', ruAr.LOCALIZED_BUILDINGS_AR);
code += serializeRecord('LOCALIZED_BUILDINGS_ZH', 'LocalizedBuildingData', zh.BUILDINGS_ZH);
code += serializeRecord('LOCALIZED_BUILDINGS_DE', 'LocalizedBuildingData', de.BUILDINGS_DE);
code += serializeRecord('LOCALIZED_BUILDINGS_FR', 'LocalizedBuildingData', fr.BUILDINGS_FR);
code += serializeRecord('LOCALIZED_BUILDINGS_IT', 'LocalizedBuildingData', it.BUILDINGS_IT);
code += serializeRecord('LOCALIZED_BUILDINGS_TR', 'LocalizedBuildingData', tr.BUILDINGS_TR);
code += serializeRecord('LOCALIZED_BUILDINGS_HI', 'LocalizedBuildingData', hi.BUILDINGS_HI);
code += serializeRecord('LOCALIZED_BUILDINGS_UR', 'LocalizedBuildingData', ur.BUILDINGS_UR);

code += serializeRecord('LOCALIZED_DISTRICTS_RU', 'LocalizedDistrictData', ruAr.LOCALIZED_DISTRICTS_RU);
code += serializeRecord('LOCALIZED_DISTRICTS_AR', 'LocalizedDistrictData', ruAr.LOCALIZED_DISTRICTS_AR);
code += serializeRecord('LOCALIZED_DISTRICTS_ZH', 'LocalizedDistrictData', zh.DISTRICTS_ZH);
code += serializeRecord('LOCALIZED_DISTRICTS_DE', 'LocalizedDistrictData', de.DISTRICTS_DE);
code += serializeRecord('LOCALIZED_DISTRICTS_FR', 'LocalizedDistrictData', fr.DISTRICTS_FR);
code += serializeRecord('LOCALIZED_DISTRICTS_IT', 'LocalizedDistrictData', it.DISTRICTS_IT);
code += serializeRecord('LOCALIZED_DISTRICTS_TR', 'LocalizedDistrictData', tr.DISTRICTS_TR);
code += serializeRecord('LOCALIZED_DISTRICTS_HI', 'LocalizedDistrictData', hi.DISTRICTS_HI);
code += serializeRecord('LOCALIZED_DISTRICTS_UR', 'LocalizedDistrictData', ur.DISTRICTS_UR);

code += `\nexport const DISTRICT_LOCALIZED_NAMES: Record<string, Partial<Record<LanguageCode, string>>> = ${JSON.stringify(ruAr.DISTRICT_LOCALIZED_NAMES, null, 2)};\n`;

code += `
export const LOCALIZED_BUILDINGS: Partial<Record<LanguageCode, Record<string, LocalizedBuildingData>>> = {
  ru: LOCALIZED_BUILDINGS_RU,
  ar: LOCALIZED_BUILDINGS_AR,
  zh: LOCALIZED_BUILDINGS_ZH,
  de: LOCALIZED_BUILDINGS_DE,
  fr: LOCALIZED_BUILDINGS_FR,
  it: LOCALIZED_BUILDINGS_IT,
  tr: LOCALIZED_BUILDINGS_TR,
  hi: LOCALIZED_BUILDINGS_HI,
  ur: LOCALIZED_BUILDINGS_UR,
};

export const LOCALIZED_DISTRICTS: Partial<Record<LanguageCode, Record<string, LocalizedDistrictData>>> = {
  ru: LOCALIZED_DISTRICTS_RU,
  ar: LOCALIZED_DISTRICTS_AR,
  zh: LOCALIZED_DISTRICTS_ZH,
  de: LOCALIZED_DISTRICTS_DE,
  fr: LOCALIZED_DISTRICTS_FR,
  it: LOCALIZED_DISTRICTS_IT,
  tr: LOCALIZED_DISTRICTS_TR,
  hi: LOCALIZED_DISTRICTS_HI,
  ur: LOCALIZED_DISTRICTS_UR,
};

/**
 * Returns a localized copy of a Building based on the selected language.
 */
export function getLocalizedBuilding(building: Building, lang: LanguageCode): Building {
  const langDict = LOCALIZED_BUILDINGS[lang];
  const loc: LocalizedBuildingData | undefined = langDict
    ? langDict[building.id] || langDict[building.slug]
    : undefined;

  const districtNameOverride = DISTRICT_LOCALIZED_NAMES[building.districtSlug]?.[lang];

  if (loc) {
    return {
      ...building,
      name: loc.name || building.name,
      architect: loc.architect || building.architect,
      developer: loc.developer || building.developer,
      district: districtNameOverride || loc.district || building.district,
      type: (loc.type as any) || building.type,
      description: loc.description || building.description,
      architecturalHighlights: loc.architecturalHighlights || building.architecturalHighlights,
      historicalNote: loc.historicalNote || building.historicalNote,
      structuralSystem: loc.structuralSystem || building.structuralSystem,
    };
  }

  if (districtNameOverride) {
    return {
      ...building,
      district: districtNameOverride,
    };
  }

  return building;
}

/**
 * Returns a localized copy of a District based on the selected language.
 */
export function getLocalizedDistrict(district: District, lang: LanguageCode): District {
  const langDict = LOCALIZED_DISTRICTS[lang];
  const loc: LocalizedDistrictData | undefined = langDict
    ? langDict[district.id] || langDict[district.slug]
    : undefined;

  const districtNameOverride = DISTRICT_LOCALIZED_NAMES[district.slug]?.[lang];

  if (loc) {
    return {
      ...district,
      name: districtNameOverride || loc.name || district.name,
      developer: loc.developer || district.developer,
      overview: loc.overview || district.overview,
      description: loc.description || district.description,
      keyLandmarks: loc.keyLandmarks || district.keyLandmarks,
      investmentPros: loc.investmentPros || district.investmentPros,
    };
  }

  if (districtNameOverride) {
    return {
      ...district,
      name: districtNameOverride,
    };
  }

  return district;
}
`;

fs.writeFileSync(outPath, code, 'utf-8');
console.log('Successfully generated ' + outPath + ' with all 10 languages supported!');
