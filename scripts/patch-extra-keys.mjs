import fs from 'fs';

const extraKeys = {
  en: {
    districtDetail: {
      masterplanBadge: "Urban Masterplanning & Architectural DNA",
      masterDeveloperAnalysis: "Master Developer Analysis",
      architecturalPortfolio: "District Architectural Portfolio",
      sqFtPrice: "AED / SQ.FT",
    },
    ttxLabels: {
      specMatrix: "Engineering Specification Matrix",
    }
  },
  ru: {
    districtDetail: {
      masterplanBadge: "Градостроительный мастер-план и архитектурный код",
      masterDeveloperAnalysis: "Анализ главного девелопера",
      architecturalPortfolio: "Архитектурный фонд района",
      sqFtPrice: "AED / кв. фут",
    },
    ttxLabels: {
      specMatrix: "Матрица инженерно-технических характеристик",
    }
  },
  ar: {
    districtDetail: {
      masterplanBadge: "المخطط الرئيسي الحضري والهوية المعمارية",
      masterDeveloperAnalysis: "تحليل المطور الرئيسي",
      architecturalPortfolio: "المحفظة المعمارية للحي",
      sqFtPrice: "درهم / قدم مربع",
    },
    ttxLabels: {
      specMatrix: "مصفوفة المواصفات الهندسية",
    }
  },
  zh: {
    districtDetail: {
      masterplanBadge: "城市总体规划与建筑基因",
      masterDeveloperAnalysis: "主要开发商规划分析",
      architecturalPortfolio: "区域建筑地标资产组合",
      sqFtPrice: "迪拉姆 / 平方英尺",
    },
    ttxLabels: {
      specMatrix: "工程技术规格矩阵",
    }
  },
  de: {
    districtDetail: {
      masterplanBadge: "Städtebaulicher Masterplan & Architektur-DNA",
      masterDeveloperAnalysis: "Analyse des Master-Entwicklers",
      architecturalPortfolio: "Architektonisches Portfolio des Distrikts",
      sqFtPrice: "AED / sq.ft",
    },
    ttxLabels: {
      specMatrix: "Technische Spezifikationsmatrix",
    }
  },
  fr: {
    districtDetail: {
      masterplanBadge: "Masterplan urbain & ADN architectural",
      masterDeveloperAnalysis: "Analyse du promoteur principal",
      architecturalPortfolio: "Portefeuille architectural du quartier",
      sqFtPrice: "AED / pi²",
    },
    ttxLabels: {
      specMatrix: "Matrice des spécifications techniques",
    }
  },
  it: {
    districtDetail: {
      masterplanBadge: "Masterplan urbano e DNA architettonico",
      masterDeveloperAnalysis: "Analisi del master developer",
      architecturalPortfolio: "Portfolio architettonico del distretto",
      sqFtPrice: "AED / sq.ft",
    },
    ttxLabels: {
      specMatrix: "Matrice delle specifiche ingegneristiche",
    }
  },
  tr: {
    districtDetail: {
      masterplanBadge: "Kentsel İmar Planı ve Mimari DNA",
      masterDeveloperAnalysis: "Ana Geliştirici Analizi",
      architecturalPortfolio: "Bölgenin Mimari Portföyü",
      sqFtPrice: "AED / sq.ft",
    },
    ttxLabels: {
      specMatrix: "Mühendislik Teknik Şartname Matrisi",
    }
  },
  hi: {
    districtDetail: {
      masterplanBadge: "शहरी मास्टरप्लानिंग और वास्तुशिल्प डीएनए",
      masterDeveloperAnalysis: "मुख्य डेवलपर विश्लेषण",
      architecturalPortfolio: "जिले का वास्तुशिल्प पोर्टफोलियो",
      sqFtPrice: "AED / वर्ग फुट",
    },
    ttxLabels: {
      specMatrix: "इंजीनियरिंग तकनीकी विनिर्देश मैट्रिक्स",
    }
  },
  ur: {
    districtDetail: {
      masterplanBadge: "شہری ماسٹر پلاننگ اور تعمیراتی شناخت",
      masterDeveloperAnalysis: "مرکزی ڈویلپر کا تجزیہ",
      architecturalPortfolio: "علاقے کا تعمیراتی پورٹ فولیو",
      sqFtPrice: "درہم / مربع فٹ",
    },
    ttxLabels: {
      specMatrix: "تکنیکی انجینئرنگ میٹرکس",
    }
  }
};

// 1. Patch enBase.json and ruDict.json
for (const lang of ['en', 'ru']) {
  const filePath = lang === 'en' ? 'scripts/enBase.json' : 'scripts/ruDict.json';
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  Object.assign(data.districtDetail, extraKeys[lang].districtDetail);
  Object.assign(data.ttxLabels, extraKeys[lang].ttxLabels);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Patched ${filePath}`);
}

// 2. Patch .mjs files in scripts/i18n-data/
for (const lang of ['ar', 'zh', 'de', 'fr', 'it', 'tr', 'hi', 'ur']) {
  const filePath = `scripts/i18n-data/${lang}.mjs`;
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const clean = fileContent.replace(new RegExp(`export const ${lang} = `), 'export default ');
  fs.writeFileSync(`scripts/temp-${lang}.mjs`, clean, 'utf8');
  const mod = (await import(`./temp-${lang}.mjs`)).default;
  fs.unlinkSync(`scripts/temp-${lang}.mjs`);

  Object.assign(mod.districtDetail, extraKeys[lang].districtDetail);
  Object.assign(mod.ttxLabels, extraKeys[lang].ttxLabels);

  const newContent = `export const ${lang} = ${JSON.stringify(mod, null, 2)};\n`;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Patched ${filePath}`);
}

console.log('All 10 language dictionaries successfully patched with new keys!');
