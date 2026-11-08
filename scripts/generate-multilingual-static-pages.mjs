#!/usr/bin/env node

/**
 * Multilingual Static Pages Generator for GitHub Pages SEO
 * 
 * Generates crawlable, static HTML pages in language subdirectories:
 * (/ru/, /ar/, /hi/, /zh/, /de/, /fr/, /ur/, /it/, /tr/)
 * with localized <title>, <meta description>, <html lang="..." dir="...">, canonical tags,
 * and pre-hydrated localized text content.
 * 
 * Ensures search engines (Google, Yandex, Bing, Baidu) and AI Overviews index
 * all language queries for Dubai real estate and architecture.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");
const outDir = path.join(rootDir, "out");

const TARGET_LANGS = [
  { code: "ru", name: "Russian", dir: "ltr" },
  { code: "ar", name: "Arabic", dir: "rtl" },
  { code: "hi", name: "Hindi", dir: "ltr" },
  { code: "zh", name: "Chinese", dir: "ltr" },
  { code: "de", name: "German", dir: "ltr" },
  { code: "fr", name: "French", dir: "ltr" },
  { code: "ur", name: "Urdu", dir: "rtl" },
  { code: "it", name: "Italian", dir: "ltr" },
  { code: "tr", name: "Turkish", dir: "ltr" },
];

const STATIC_ROUTE_SEO = {
  ru: {
    "": {
      title: "Архитектура Дубая | Энциклопедия небоскребов и инвестиций с 2006 года",
      description: "Исторический архитектурный архив небоскребов Дубая с 2006 года. Инженерные шедевры, ТТХ башен и инвестиции в недвижимость ОАЭ.",
    },
    about: {
      title: "Об архитектурном архиве Дубая | Осн. в 2006 году — Dubai Architecture",
      description: "История создания, редакционная миссия и методология независимого инженерного аудита небоскребов Дубая с 2006 года.",
    },
    developers: {
      title: "Застройщики Дубая | Реестр девелоперов, эскроу-рейтинги DLD и проекты",
      description: "Полный справочник ведущих девелоперов Дубая (Emaar, Sobha, Nakheel, Omniyat, Binghatti). Проверка сдачи в срок и эскроу-счетов DLD.",
    },
    contact: {
      title: "Контакты редакции и исследовательского бюро | Dubai Architecture",
      description: "Контакты редакции архива Dubai Architecture, передача CAD-документации и служба подбора аккредитованной недвижимости.",
    },
    "editorial-policy": {
      title: "Редакционная политика и стандарты независимого аудита | Dubai Architecture",
      description: "Стандарты фактчекинга, защита от коммерческого влияния застройщиков и методология независимого технического аудита башен.",
    },
    "affiliate-disclosure": {
      title: "Официальное раскрытие партнерства и брокерской аккредитации RERA",
      description: "Официальное уведомление об аккредитованных брокерах (Metropolitan & Whitewill), соответствии Закону №85 от 2006 г. и гарантиях эскроу-счетов.",
    },
    calculator: {
      title: "Мультивалютный калькулятор доходности недвижимости Дубая (ROI & Yield)",
      description: "Расчет чистой арендной доходности с учетом сборов за охлаждение (чиллеры) и эксплуатационных платежей Mollak в AED, USD, EUR, RUB.",
    },
    "golden-visa": {
      title: "Золотая виза ОАЭ (Golden Visa на 10 лет) при покупке недвижимости в Дубае",
      description: "Условия получения 10-летней резидентской визы инвестора в ОАЭ при покупке недвижимости от 2 000 000 AED.",
    },
  },
  ar: {
    "": {
      title: "معمارية دبي | موسوعة ناطحات السحاب والاستثمار منذ 2006",
      description: "الأرشيف المعماري التاريخي لناطحات السحاب في دبي منذ عام 2006. روائع الهندسة المعمارية وفرص الاستثمار العقاري الفاخر.",
    },
    about: {
      title: "عن أرشيف معمارية دبي | تأسس عام 2006",
      description: "تاريخ الأرشيف، الرؤية التحريرية ومنهجية التدقيق الهندسي لناطحات السحاب في دبي.",
    },
    developers: {
      title: "المطورون العقاريون في دبي | تصنيفات الضمان DLD والمشاريع",
      description: "دليل كبار المطورين العقاريين في دبي (إعمار، شوبا، نخيل، أمنيات). سجلات التسليم في الوقت المحدد وحسابات الضمان.",
    },
    calculator: {
      title: "حاسبة العائد الاستثماري للعقارات في دبي (ROI & Yield)",
      description: "احسب صافي العائد الإيجاري ورسوم الخدمات ونمو رأس المال لأبراج دبي.",
    },
    "golden-visa": {
      title: "تأشيرة الإقامة الذهبية في الإمارات عبر الاستثمار العقاري",
      description: "دليل التأشيرة الذهبية لمدة 10 سنوات عند شراء عقار بقيمة تبدأ من 2,000,000 درهم.",
    },
  },
  hi: {
    "": {
      title: "दुबई वास्तुकला | 2006 से गगनचुंबी इमारतों और रियल एस्टेट का विश्वकोश",
      description: "दुबई के प्रतिष्ठित स्काईलाइन और इंजीनियरिंग चमत्कारों का आधिकारिक संग्रह। निवेश रिटर्न और लक्जरी संपत्तियों का विश्लेषण।",
    },
    developers: {
      title: "दुबई के शीर्ष डेवलपर्स | DLD एस्क्रो रेटिंग और प्रोजेक्ट्स",
      description: "दुबई के प्रमुख डेवलपर्स (Emaar, Sobha, Nakheel) की विश्वसनीयता, समय पर डिलीवरी और निवेश रिटर्न।",
    },
    calculator: {
      title: "दुबई रियल एस्टेट ROI और रेंटल यील्ड कैलकुलेटर",
      description: "दुबई के टावरों के लिए शुद्ध रेंटल यील्ड, रखरखाव शुल्क और पूंजीगत वृद्धि की गणना करें।",
    },
    "golden-visa": {
      title: "दुबई में संपत्ति खरीदकर यूएई 10-वर्षीय गोल्डन वीजा प्राप्त करें",
      description: "2,000,000 एईडी से अचल संपत्ति में निवेश करके यूएई गोल्डन वीजा प्राप्त करने के नियम।",
    },
  },
  zh: {
    "": {
      title: "迪拜建筑与摩天大楼百科 (始于2006) | 豪华房地产投资",
      description: "记录迪拜天际线与工程奇迹的历史档案。全面解析摩天大楼结构与迪拜黄金签证房地产投资机遇。",
    },
    developers: {
      title: "迪拜顶级开发商指南 | DLD托管评级与交付记录",
      description: "埃玛尔 (Emaar)、首霸 (Sobha) 等迪拜主要开发商独立尽职调查报告与项目名录。",
    },
    calculator: {
      title: "迪拜房地产投资回报率 (ROI) 计算器",
      description: "精准计算迪拜高端住宅公寓净租金收益率、物业维护费及五年资本增值。",
    },
    "golden-visa": {
      title: "阿联酋10年黄金签证置业申请指南",
      description: "购买200万迪拉姆及以上迪拜永久产权房产，申请阿联酋长期居留签证详细条件。",
    },
  },
  de: {
    "": {
      title: "Dubai Architektur | Wolkenkratzer & Immobilien Enzyklopädie seit 2006",
      description: "Das historische Architekturarchiv der Wolkenkratzer Dubais seit 2006. Ingenieur-Meisterwerke und Luxusimmobilien-Investitionen.",
    },
    developers: {
      title: "Top Bauträger in Dubai | DLD-Treuhand-Ratings & Portfolio",
      description: "Umfassender Leitfaden zu Dubais führenden Master-Entwicklern (Emaar, Sobha, Nakheel). Liefertreue und Renditen.",
    },
    calculator: {
      title: "Dubai Immobilien Renditerechner (ROI & Mietrendite)",
      description: "Berechnen Sie Netto-Mietrendite, Servicegebühren und Wertsteigerung für Immobilien in Dubai.",
    },
    "golden-visa": {
      title: "VAE Golden Visa durch Immobilienkauf (10 Jahre)",
      description: "Leitfaden für das 10-jährige Goldene Visum der VAE durch Immobilieninvestitionen ab 2.000.000 AED.",
    },
  },
  fr: {
    "": {
      title: "Architecture de Dubaï | Encyclopédie des Gratte-ciel depuis 2006",
      description: "L'archive architecturale historique des gratte-ciel de Dubaï depuis 2006. Chefs-d'œuvre d'ingénierie et investissements de luxe.",
    },
    developers: {
      title: "Promoteurs Immobiliers à Dubaï | Notations DLD & Projets",
      description: "Guide complet des promoteurs majeurs à Dubaï (Emaar, Sobha, Nakheel). Historique de livraison et comptes séquestres DLD.",
    },
    calculator: {
      title: "Calculateur de Rendement Locatif Dubaï (ROI & Yield)",
      description: "Calculez le rendement locatif net, les charges de copropriété et la plus-value à Dubaï.",
    },
    "golden-visa": {
      title: "Golden Visa Émirats par l'Immobilier (10 Ans)",
      description: "Guide complet du Golden Visa de 10 ans aux Émirats Arabes Unis dès 2 000 000 AED d'investissement.",
    },
  },
  ur: {
    "": {
      title: "دبئی فن تعمیر | 2006 سے فلک بوس عمارات اور رئیل اسٹیٹ انسائیکلوپیڈیا",
      description: "دبئی کی فلک بوس عمارتوں اور تاریخی فن تعمیر کا مکمل دستاویزی آرکائیو اور رئیل اسٹیٹ سرمایہ کاری گائیڈ۔",
    },
    developers: {
      title: "دبئی کے بہترین ڈویلپرز | DLD ایسکرو ریٹنگ اور منصوبے",
      description: "اعمار، شوبھا اور دیگر نمایاں ڈویلپرز کے منصوبے، وقت پر ترسیل اور رئیل اسٹیٹ سرمایہ کاری۔",
    },
    calculator: {
      title: "دبئی رئیل اسٹیٹ منافع اور کرایہ کیلکولیٹر (ROI)",
      description: "دبئی کی عمارتوں میں خالص کرایہ کی آمدنی اور منافع کا تخمینہ لگائیں۔",
    },
    "golden-visa": {
      title: "دبئی رئیل اسٹیٹ کے ذریعے یو اے ای 10 سالہ گولڈن ویزا گائیڈ",
      description: "20 لاکھ درہم کی جائیداد کی خریداری پر 10 سالہ گولڈن ویزا حاصل کرنے کے قوانین۔",
    },
  },
  it: {
    "": {
      title: "Architettura di Dubai | Enciclopedia Grattacieli e Immobili dal 2006",
      description: "L'archivio architettonico storico dei grattacieli di Dubai dal 2006. Capolavori ingegneristici e investimenti di lusso.",
    },
    developers: {
      title: "Sviluppatori Immobiliari a Dubai | Rating DLD e Progetti",
      description: "Guida ai principali master developer di Dubai (Emaar, Sobha, Nakheel). Affidabilità e rendimenti netti.",
    },
    calculator: {
      title: "Calcolatore Rendimento Immobiliare Dubai (ROI & Yield)",
      description: "Calcola il rendimento netto da locazione, le spese di servizio e l'apprezzamento a Dubai.",
    },
    "golden-visa": {
      title: "Golden Visa EAU 10 Anni tramite Investimento Immobiliare",
      description: "Guida ai requisiti per il Golden Visa negli Emirati Arabi Uniti a partire da 2.000.000 AED.",
    },
  },
  tr: {
    "": {
      title: "Dubai Mimarisi | 2006'dan Beri Gökdelenler ve Gayrimenkul Ansiklopedisi",
      description: "2006'dan bu yana Dubai gökdelenlerinin tarihi mimari arşivi. Mühendislik şaheserleri ve lüks gayrimenkul yatırımları.",
    },
    developers: {
      title: "Dubai'nin En İyi Gayrimenkul Geliştiricileri | DLD Derecelendirmeleri",
      description: "Emaar, Sobha, Nakheel ve Dubai'nin önde gelen geliştiricilerinin teslimat oranları ve projeleri.",
    },
    calculator: {
      title: "Dubai Gayrimenkul Getiri Hesaplayıcı (ROI & Kira Getirisi)",
      description: "Dubai kuleleri için net kira getirisi, aidat giderleri ve 5 yıllık sermaye kazancı hesabı.",
    },
    "golden-visa": {
      title: "Gayrimenkul ile 10 Yıllık BAE Golden Visa Rehberi",
      description: "2.000.000 AED ve üzeri gayrimenkul yatırımıyla 10 yıllık BAE Golden Visa alma şartları.",
    },
  },
};

async function main() {
  if (!fs.existsSync(outDir)) {
    console.error("❌ 'out' directory not found. Please run 'next build' first.");
    process.exit(1);
  }

  console.log(`🌍 Starting Multilingual Static Pages Generation for ALL ${TARGET_LANGS.length} Non-Default Languages...`);

  // Import project data
  const { BUILDINGS } = await import("../src/data/buildings.ts");
  const { DISTRICTS } = await import("../src/data/districts.ts");
  const { DEVELOPERS } = await import("../src/data/developers.ts");
  const locContent = await import("../src/data/localizedContent.ts");

  const staticRoutes = [
    "",
    "buildings",
    "districts",
    "developers",
    "calculator",
    "golden-visa",
    "methodology",
    "about",
    "contact",
    "editorial-policy",
    "affiliate-disclosure",
  ];

  let generatedPagesCount = 0;

  for (const lang of TARGET_LANGS) {
    const langCode = lang.code;

    // 1. Process Static Pages
    for (const route of staticRoutes) {
      const srcHtmlPath = route === "" 
        ? path.join(outDir, "index.html") 
        : path.join(outDir, route, "index.html");

      if (!fs.existsSync(srcHtmlPath)) continue;

      let html = fs.readFileSync(srcHtmlPath, "utf-8");

      // Replace html lang & dir
      html = html.replace(/<html[^>]*>/, `<html lang="${langCode}" dir="${lang.dir}">`);

      // Pre-inject localStorage so React hydrates instantly in this language
      const langScript = `<script>try{localStorage.setItem('dubai_arch_lang','${langCode}');document.documentElement.lang='${langCode}';document.documentElement.dir='${lang.dir}';}catch(e){}</script>`;
      html = html.replace("<head>", `<head>${langScript}`);

      // Update canonical
      const targetCanonical = `https://dubai-architecture.info/${langCode}/${route ? route + "/" : ""}`;
      html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${targetCanonical}">`);

      // Localized title & description if available
      const staticSeo = STATIC_ROUTE_SEO[langCode]?.[route];
      if (staticSeo?.title) {
        html = html.replace(/<title>.*?<\/title>/, `<title>${staticSeo.title}</title>`);
      }
      if (staticSeo?.description) {
        html = html.replace(/<meta name="description" content=".*?"\/>/, `<meta name="description" content="${staticSeo.description.replace(/"/g, '&quot;')}" />`);
      }

      // Write destination
      const destDir = route === "" 
        ? path.join(outDir, langCode) 
        : path.join(outDir, langCode, route);

      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(path.join(destDir, "index.html"), html, "utf-8");
      generatedPagesCount++;
    }

    // 2. Process Buildings
    const buildingsDictName = `LOCALIZED_BUILDINGS_${langCode.toUpperCase()}`;
    const locBuildings = locContent[buildingsDictName] || {};

    for (const b of BUILDINGS) {
      const srcHtmlPath = path.join(outDir, "buildings", b.slug, "index.html");
      if (!fs.existsSync(srcHtmlPath)) continue;

      let html = fs.readFileSync(srcHtmlPath, "utf-8");
      const loc = locBuildings[b.slug] || {};

      html = html.replace(/<html[^>]*>/, `<html lang="${langCode}" dir="${lang.dir}">`);
      const langScript = `<script>try{localStorage.setItem('dubai_arch_lang','${langCode}');document.documentElement.lang='${langCode}';document.documentElement.dir='${lang.dir}';}catch(e){}</script>`;
      html = html.replace("<head>", `<head>${langScript}`);

      // Canonical
      const targetCanonical = `https://dubai-architecture.info/${langCode}/buildings/${b.slug}/`;
      html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${targetCanonical}">`);

      // Localized title & description if available
      if (loc.name) {
        const localizedTitle = `${loc.name} (${b.heightMeters}m) — Dubai Architecture & Investment`;
        html = html.replace(/<title>.*?<\/title>/, `<title>${localizedTitle}</title>`);
      }
      if (loc.description) {
        html = html.replace(/<meta name="description" content=".*?"\/>/, `<meta name="description" content="${loc.description.replace(/"/g, '&quot;')}" />`);
      }

      const destDir = path.join(outDir, langCode, "buildings", b.slug);
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(path.join(destDir, "index.html"), html, "utf-8");
      generatedPagesCount++;
    }

    // 3. Process Districts
    const districtsDictName = `LOCALIZED_DISTRICTS_${langCode.toUpperCase()}`;
    const locDistricts = locContent[districtsDictName] || {};

    for (const d of DISTRICTS) {
      const srcHtmlPath = path.join(outDir, "districts", d.slug, "index.html");
      if (!fs.existsSync(srcHtmlPath)) continue;

      let html = fs.readFileSync(srcHtmlPath, "utf-8");
      const loc = locDistricts[d.slug] || {};

      html = html.replace(/<html[^>]*>/, `<html lang="${langCode}" dir="${lang.dir}">`);
      const langScript = `<script>try{localStorage.setItem('dubai_arch_lang','${langCode}');document.documentElement.lang='${langCode}';document.documentElement.dir='${lang.dir}';}catch(e){}</script>`;
      html = html.replace("<head>", `<head>${langScript}`);

      const targetCanonical = `https://dubai-architecture.info/${langCode}/districts/${d.slug}/`;
      html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${targetCanonical}">`);

      if (loc.name) {
        const localizedTitle = `${loc.name} — Dubai Districts Architecture & Yields`;
        html = html.replace(/<title>.*?<\/title>/, `<title>${localizedTitle}</title>`);
      }

      const destDir = path.join(outDir, langCode, "districts", d.slug);
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(path.join(destDir, "index.html"), html, "utf-8");
      generatedPagesCount++;
    }

    // 4. Process Developers
    for (const dev of DEVELOPERS) {
      const srcHtmlPath = path.join(outDir, "developers", dev.slug, "index.html");
      if (!fs.existsSync(srcHtmlPath)) continue;

      let html = fs.readFileSync(srcHtmlPath, "utf-8");

      html = html.replace(/<html[^>]*>/, `<html lang="${langCode}" dir="${lang.dir}">`);
      const langScript = `<script>try{localStorage.setItem('dubai_arch_lang','${langCode}');document.documentElement.lang='${langCode}';document.documentElement.dir='${lang.dir}';}catch(e){}</script>`;
      html = html.replace("<head>", `<head>${langScript}`);

      const targetCanonical = `https://dubai-architecture.info/${langCode}/developers/${dev.slug}/`;
      html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${targetCanonical}">`);

      const destDir = path.join(outDir, langCode, "developers", dev.slug);
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(path.join(destDir, "index.html"), html, "utf-8");
      generatedPagesCount++;
    }
  }

  // 5. Append all localized URLs to out/sitemap.xml if exists and not already present
  const sitemapPath = path.join(outDir, "sitemap.xml");
  if (fs.existsSync(sitemapPath)) {
    console.log("🗺️ Checking multilingual URLs in out/sitemap.xml...");
    let sitemapXml = fs.readFileSync(sitemapPath, "utf-8");
    const today = new Date().toISOString().split("T")[0];
    const extraUrlsXml = [];

    for (const lang of TARGET_LANGS) {
      for (const route of staticRoutes) {
        const locUrl = `https://dubai-architecture.info/${lang.code}/${route ? route + "/" : ""}`;
        if (!sitemapXml.includes(`<loc>${locUrl}</loc>`)) {
          extraUrlsXml.push(`  <url>\n    <loc>${locUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`);
        }
      }
      for (const b of BUILDINGS) {
        const locUrl = `https://dubai-architecture.info/${lang.code}/buildings/${b.slug}/`;
        if (!sitemapXml.includes(`<loc>${locUrl}</loc>`)) {
          extraUrlsXml.push(`  <url>\n    <loc>${locUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`);
        }
      }
      for (const d of DISTRICTS) {
        const locUrl = `https://dubai-architecture.info/${lang.code}/districts/${d.slug}/`;
        if (!sitemapXml.includes(`<loc>${locUrl}</loc>`)) {
          extraUrlsXml.push(`  <url>\n    <loc>${locUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`);
        }
      }
      for (const dev of DEVELOPERS) {
        const locUrl = `https://dubai-architecture.info/${lang.code}/developers/${dev.slug}/`;
        if (!sitemapXml.includes(`<loc>${locUrl}</loc>`)) {
          extraUrlsXml.push(`  <url>\n    <loc>${locUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`);
        }
      }
    }

    if (extraUrlsXml.length > 0) {
      sitemapXml = sitemapXml.replace("</urlset>", extraUrlsXml.join("\n") + "\n</urlset>");
      fs.writeFileSync(sitemapPath, sitemapXml, "utf-8");
      console.log(`🗺️ Added ${extraUrlsXml.length} localized URLs into out/sitemap.xml!`);
    } else {
      console.log("🗺️ All localized URLs already indexed in out/sitemap.xml.");
    }
  }

  console.log(`✅ Successfully generated ${generatedPagesCount} static multilingual HTML pages across ${TARGET_LANGS.length} languages!`);
}

main().catch((err) => {
  console.error("❌ Error in multilingual generator:", err);
  process.exit(1);
});
