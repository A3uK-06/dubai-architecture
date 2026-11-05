import fs from 'fs';
import { ar } from './i18n-data/ar.mjs';
import { zh } from './i18n-data/zh.mjs';
import { de } from './i18n-data/de.mjs';
import { fr } from './i18n-data/fr.mjs';
import { hi } from './i18n-data/hi.mjs';
import { ur } from './i18n-data/ur.mjs';
import { it } from './i18n-data/it.mjs';
import { tr } from './i18n-data/tr.mjs';

const en = JSON.parse(fs.readFileSync('scripts/enBase.json', 'utf8'));
const ru = JSON.parse(fs.readFileSync('scripts/ruDict.json', 'utf8'));

const allLanguages = { en, ru, ar, zh, de, fr, hi, ur, it, tr };

function getFlatKeys(obj, prefix = '') {
  let keys = [];
  for (const k of Object.keys(obj)) {
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      keys.push(...getFlatKeys(obj[k], prefix ? `${prefix}.${k}` : k));
    } else {
      keys.push(prefix ? `${prefix}.${k}` : k);
    }
  }
  return keys;
}

const enKeys = getFlatKeys(en);
console.log(`Total base translation keys: ${enKeys.length}`);

let hasErrors = false;
for (const [langCode, dict] of Object.entries(allLanguages)) {
  const dictKeys = getFlatKeys(dict);
  const missing = enKeys.filter(k => !dictKeys.includes(k));
  const extra = dictKeys.filter(k => !enKeys.includes(k));

  if (missing.length > 0) {
    console.error(`ERROR [${langCode}]: Missing ${missing.length} keys:`, missing);
    hasErrors = true;
  }
  if (extra.length > 0) {
    console.warn(`WARN [${langCode}]: Extra ${extra.length} keys:`, extra);
  }
  console.log(`[${langCode}]: ${dictKeys.length}/${enKeys.length} keys present. (Missing: ${missing.length})`);
}

if (hasErrors) {
  console.error("Validation failed! Fix missing keys before compiling.");
  process.exit(1);
}

// Generate the TypeScript file with TranslationDictionary interface and TRANSLATIONS record
const tsContent = `import { LanguageCode } from "./languages";

export interface TranslationDictionary {
  siteTitle: string;
  siteSubtitle: string;
  tagline: string;
  nav: {
    home: string;
    catalog: string;
    districts: string;
    calculator: string;
    goldenVisa: string;
    archive: string;
    contactBroker: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
    ctaCatalog: string;
    ctaInvestment: string;
    statsYears: string;
    statsTowers: string;
    statsRoi: string;
    statsDistricts: string;
    downloadGuideBtn: string;
    statusBarText: string;
    activeLanguage: string;
  };
  filters: {
    allDistricts: string;
    allHeights: string;
    allArchitects: string;
    search: string;
    sortBy: string;
    heightDesc: string;
    yearDesc: string;
    popularity: string;
  };
  catalog: {
    title: string;
    subtitle: string;
    masterpieces: string;
    allTypes: string;
    type: string;
    types: {
      all: string;
      residential: string;
      commercial: string;
      hotel: string;
      mixedUse: string;
      cultural: string;
    };
    heightOptions: {
      all: string;
      megatall: string;
      supertall: string;
      highrise: string;
    };
    sortOptions: {
      height: string;
      year: string;
      popularity: string;
      yield: string;
    };
    estRentalYield: string;
    underConstruction: string;
    showing: string;
    buildings: string;
    filteredBy: string;
    noMatch: string;
    clearSearch: string;
    resetFilters: string;
    resetAllFilters: string;
    startingPriceLabel: string;
  };
  buildingCard: {
    height: string;
    floors: string;
    year: string;
    architect: string;
    developer: string;
    district: string;
    viewDetails: string;
    inquireUnits: string;
    residential: string;
    commercial: string;
    hotel: string;
    mixedUse: string;
    exploreDistrict: string;
    districtLocationLabel: string;
    exploreDistrictInfrastructure: string;
  };
  districts: {
    badge: string;
    title: string;
    subtitle: string;
    towersCount: string;
    keyLandmarks: string;
    exploreDistrict: string;
    masterDeveloper: string;
    averageYield: string;
    investPros: string;
  };
  investmentBanner: {
    title: string;
    subtitle: string;
    ctaText: string;
    requestUnits: string;
    downloadCatalog: string;
    badge: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    propertyPrice: string;
    rentalYield: string;
    serviceCharge: string;
    estimatedGross: string;
    estimatedNet: string;
    netRoi: string;
    annualNetProfit: string;
    currency: string;
    disclaimer: string;
    badge: string;
    selectCurrency: string;
    conservative: string;
    dubaiAvg: string;
    shortTermHigh: string;
    lowMaintenance: string;
    ultraLuxury: string;
    annualProjections: string;
    zeroTax: string;
    netRoiSub: string;
    maintenanceCharges: string;
    fiveYearReturn: string;
    perYear: string;
    goldenVisaQualified: string;
    goldenVisaQualifiedDesc: string;
    goldenVisaNeed: string;
    inquireCalculationCta: string;
    instantMatchDesc: string;
    whatsappConsultation: string;
  };
  goldenVisa: {
    title: string;
    badge: string;
    subtitle: string;
    thresholdNotice: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
    checkEligibility: string;
  };
  goldenVisaWidget: {
    badge: string;
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    qBudget: string;
    optUnder2m: string;
    optUnder2mDesc: string;
    opt2mTo5m: string;
    opt2mTo5mDesc: string;
    opt5mPlus: string;
    opt5mPlusDesc: string;
    qReadiness: string;
    optOffPlan: string;
    optReady: string;
    optMortgage: string;
    qFamily: string;
    optIndividual: string;
    optFamily: string;
    optParents: string;
    resultEligible: string;
    resultStandard: string;
    resultDescEligible: string;
    resultDescStandard: string;
    formName: string;
    formPhone: string;
    submitBtn: string;
    submittedTitle: string;
    submittedDesc: string;
    back: string;
    next: string;
    routedTo: string;
    submitting: string;
    confidentialNotice: string;
  };
  leadModal: {
    modalBadge: string;
    defaultTitle: string;
    defaultSubtitle: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    budgetLabel: string;
    submitBtn: string;
    instantDelivery: string;
    successTitle: string;
    successDesc: string;
    openWhatsApp: string;
    close: string;
    submitting: string;
  };
  ttxLabels: {
    title: string;
    verifiedBadge: string;
    engineeringTeam: string;
    contractorLabel: string;
    structuralEngineerLabel: string;
    mepEngineerLabel: string;
    transitIntegration: string;
    geotechnical: string;
    pilesCount: string;
    pileDepth: string;
    pileDiameter: string;
    raftThickness: string;
    bedrock: string;
    windStructural: string;
    lateralSystem: string;
    vortexDamping: string;
    maxApexSway: string;
    concreteStrength: string;
    facadeGlazing: string;
    glazingSpec: string;
    shgc: string;
    uValue: string;
    bmu: string;
    cleaningCycle: string;
    verticalTransport: string;
    elevatorMfg: string;
    elevatorsTotal: string;
    maxSpeed: string;
    zoningStrategy: string;
    peakWait: string;
    operatingClimate: string;
    coolingProvider: string;
    chillerBilling: string;
    serviceCharge: string;
    reraNotice: string;
    acoustic: string;
    acousticDesc: string;
    ceilingHeight: string;
    layoutEfficiency: string;
    columnImpact: string;
    netGross: string;
    balconies: string;
    units: string;
    meters: string;
    speedUnit: string;
    chillerLabel: string;
    officialBrochureNotice: string;
    exploreOtherTowers: string;
  };
  buildingDetail: {
    breadcrumbHome: string;
    breadcrumbCatalog: string;
    storeys: string;
    built: string;
    archiveId: string;
    architectLabel: string;
    developerLabel: string;
    districtLabel: string;
    estRentalYield: string;
    unitsFrom: string;
    historyTitle: string;
    historyNote: string;
    highlightsTitle: string;
    ttxTitle: string;
    officialHeight: string;
    totalFloors: string;
    aboveGroundLevels: string;
    yearCompleted: string;
    buildingType: string;
    structuralSystem: string;
    verifiedAllocation: string;
    investIn: string;
    investSubtitle: string;
    entryPriceAed: string;
    entryPriceUsd: string;
    projectedYield: string;
    goldenVisaEligible: string;
    goldenVisaEligibleValue: string;
    inquireWhatsApp: string;
    requestFloorplans: string;
    reraNotice: string;
    moreTowersIn: string;
    districtBannerBadge: string;
    districtBannerTitle: string;
    districtBannerDesc: string;
    districtBannerButton: string;
    districtLocationLabel: string;
    exploreDistrictCta: string;
    contractorLabel: string;
    structuralEngineerLabel: string;
    mepEngineerLabel: string;
  };
  districtDetail: {
    breadcrumbHome: string;
    breadcrumbDistricts: string;
    masterDeveloper: string;
    towersCount: string;
    avgRentalYield: string;
    districtOverview: string;
    districtHighlights: string;
    districtInvestment: string;
    iconicTowersInDistrict: string;
    inquireDistrictUnits: string;
    inquireWhatsApp: string;
    masterplanTitle: string;
    subzonesTitle: string;
    subzonesSubtitle: string;
    transitTitle: string;
    transitSubtitle: string;
    infrastructureTitle: string;
    infrastructureSubtitle: string;
    prosTitle: string;
    risksTitle: string;
    zoneLabel: string;
    avgPriceLabel: string;
    bestForLabel: string;
    highwayAccessLabel: string;
    bottlenecksLabel: string;
    publicTransitLabel: string;
    walkabilityLabel: string;
    chillerLabel: string;
    stormwaterLabel: string;
    serviceChargesLabel: string;
    occupancyLabel: string;
    tenantProfileLabel: string;
    defaultRisk1: string;
    defaultRisk2: string;
    contactDistrictBroker: string;
  };
  whatsapp: {
    buttonText: string;
    tooltip: string;
    defaultMessage: string;
  };
  footer: {
    description: string;
    linksTitle: string;
    legalTitle: string;
    disclaimer: string;
    rightsReserved: string;
    historicalArchiveNote: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: ${JSON.stringify(en, null, 2)},
  ru: ${JSON.stringify(ru, null, 2)},
  ar: ${JSON.stringify(ar, null, 2)},
  zh: ${JSON.stringify(zh, null, 2)},
  de: ${JSON.stringify(de, null, 2)},
  fr: ${JSON.stringify(fr, null, 2)},
  hi: ${JSON.stringify(hi, null, 2)},
  ur: ${JSON.stringify(ur, null, 2)},
  it: ${JSON.stringify(it, null, 2)},
  tr: ${JSON.stringify(tr, null, 2)},
};
`;

fs.writeFileSync('src/i18n/translations.ts', tsContent, 'utf8');
console.log('Successfully wrote src/i18n/translations.ts with 10 COMPLETE languages!');
