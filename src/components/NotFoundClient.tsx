"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BUILDINGS } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import { LanguageCode } from "@/i18n/languages";

const NOT_FOUND_TEXT: Record<LanguageCode, {
  archiveNotice: string;
  title: string;
  description: string;
  popularTowers: string;
  returnHome: string;
  redirecting: string;
  urlDetected: string;
  redirectingToProfile: string;
  clickIfNotRedirected: string;
}> = {
  en: {
    archiveNotice: "Historical Archive Notice",
    title: "Architectural Landmark Not Found",
    description: "The skyscraper profile or historical page you requested may have evolved or been relocated in our updated encyclopedia.",
    popularTowers: "Popular Historical Towers:",
    returnHome: "Return to Encyclopedia Home",
    redirecting: "Redirecting to catalog in",
    urlDetected: "Historical Architectural URL Detected",
    redirectingToProfile: "Redirecting you to the updated architectural profile for",
    clickIfNotRedirected: "Click here if you are not redirected automatically",
  },
  ru: {
    archiveNotice: "Уведомление исторического архива",
    title: "Архитектурный объект не найден",
    description: "Запрошенный профиль небоскреба или историческая страница могли измениться или быть перенесены в нашей обновленной энциклопедии.",
    popularTowers: "Популярные исторические башни:",
    returnHome: "Вернуться на главную страницу энциклопедии",
    redirecting: "Перенаправление в каталог через",
    urlDetected: "Обнаружен исторический URL объекта",
    redirectingToProfile: "Перенаправляем вас на обновленный архитектурный паспорт объекта",
    clickIfNotRedirected: "Нажмите здесь, если перенаправление не произошло автоматически",
  },
  ar: {
    archiveNotice: "إشعار الأرشيف التاريخي",
    title: "المعلم المعماري غير موجود",
    description: "قد يكون ملف ناطحة السحاب أو الصفحة التاريخية المطلوبة قد تم نقله أو تحديثه في موسوعتنا.",
    popularTowers: "أبراج تاريخية بارزة:",
    returnHome: "العودة إلى الصفحة الرئيسية للموسوعة",
    redirecting: "جارٍ إعادة التوجيه إلى الكتالوج خلال",
    urlDetected: "تم التعرف على رابط معماري تاريخي",
    redirectingToProfile: "جارٍ تحويلك إلى الملف المعماري المحدث لـ",
    clickIfNotRedirected: "انقر هنا إذا لم يتم تحويلك تلقائيًا",
  },
  zh: {
    archiveNotice: "历史档案通知",
    title: "未找到建筑地标",
    description: "您请求的摩天大楼资料或历史页面可能在我们更新的百科全书中进行了调整或迁移。",
    popularTowers: "热门历史地标大厦：",
    returnHome: "返回百科全书首页",
    redirecting: "秒后自动跳转至目录",
    urlDetected: "检测到历史建筑网址",
    redirectingToProfile: "正在将您重定向至更新的建筑档案：",
    clickIfNotRedirected: "若未自动跳转请点击此处",
  },
  de: {
    archiveNotice: "Hinweis aus dem historischen Archiv",
    title: "Architektonisches Bauwerk nicht gefunden",
    description: "Das angeforderte Profil oder die historische Seite wurde möglicherweise in unserer Enzyklopädie aktualisiert oder verschoben.",
    popularTowers: "Beliebte historische Türme:",
    returnHome: "Zurück zur Enzyklopädie-Startseite",
    redirecting: "Weiterleitung zum Katalog in",
    urlDetected: "Historische Architektur-URL erkannt",
    redirectingToProfile: "Sie werden zum aktualisierten Architekturprofil weitergeleitet für",
    clickIfNotRedirected: "Klicken Sie hier, falls keine automatische Weiterleitung erfolgt",
  },
  fr: {
    archiveNotice: "Notice de l'archive historique",
    title: "Monument architectural introuvable",
    description: "La fiche du gratte-ciel ou la page historique demandée a peut-être été modifiée ou déplacée dans notre encyclopédie.",
    popularTowers: "Tours historiques populaires :",
    returnHome: "Retour à l'accueil de l'encyclopédie",
    redirecting: "Redirection vers le catalogue dans",
    urlDetected: "URL architecturale historique détectée",
    redirectingToProfile: "Redirection en cours vers la fiche architecturale mise à jour de",
    clickIfNotRedirected: "Cliquez ici si la redirection n'est pas automatique",
  },
  hi: {
    archiveNotice: "ऐतिहासिक संग्रह सूचना",
    title: "वास्तुशिल्प लैंडमार्क नहीं मिला",
    description: "आपके द्वारा अनुरोधित गगनचुंबी इमारत की प्रोफाइल या ऐतिहासिक पृष्ठ हमारे विश्वकोश में स्थानांतरित कर दिया गया हो सकता है।",
    popularTowers: "लोकप्रिय ऐतिहासिक टावर:",
    returnHome: "विश्वकोश के मुख्य पृष्ठ पर लौटें",
    redirecting: "कैटलॉग पर पुनर्निर्देशन में",
    urlDetected: "ऐतिहासिक वास्तुशिल्प URL का पता चला",
    redirectingToProfile: "आपको अद्यतन वास्तुशिल्प प्रोफ़ाइल पर पुनर्निर्देशित किया जा रहा है:",
    clickIfNotRedirected: "यदि आप स्वचालित रूप से पुनर्निर्देशित नहीं होते हैं तो यहां क्लिक करें",
  },
  ur: {
    archiveNotice: "تاریخی آرکائیو کا نوٹس",
    title: "تعمیراتی لینڈمارک نہیں ملا",
    description: "آپ کے مطلوبہ فلک بوس ٹاور کی معلومات یا تاریخی صفحہ ہمارے نئے انسائیکلوپیڈیا میں منتقل کر دیا گیا ہے۔",
    popularTowers: "مشہور تاریخی ٹاورز:",
    returnHome: "انسائیکلوپیڈیا کے ہوم پیج پر واپس جائیں",
    redirecting: "کیٹلاگ پر منتقلی بذریعہ",
    urlDetected: "تاریخی تعمیراتی لنک کی شناخت ہوئی",
    redirectingToProfile: "آپ کو اس کے نئے تعمیراتی پروفائل پر منتقل کیا جا رہا ہے:",
    clickIfNotRedirected: "اگر خودکار منتقلی نہ ہو تو یہاں کلک کریں",
  },
  it: {
    archiveNotice: "Avviso dell'archivio storico",
    title: "Monumento architettonico non trovato",
    description: "Il profilo del grattacielo o la pagina storica richiesta potrebbero essere stati aggiornati o spostati nella nostra enciclopedia.",
    popularTowers: "Torri storiche popolari:",
    returnHome: "Torna alla home dell'enciclopedia",
    redirecting: "Reindirizzamento al catalogo tra",
    urlDetected: "URL architettonico storico rilevato",
    redirectingToProfile: "Reindirizzamento al profilo architettonico aggiornato per",
    clickIfNotRedirected: "Clicca qui se non vieni reindirizzato automaticamente",
  },
  tr: {
    archiveNotice: "Tarihi Arşiv Bildirimi",
    title: "Mimari Yapı Bulunamadı",
    description: "Aradığınız gökdelen profili veya tarihi sayfa güncellenen ansiklopedimizde taşınmış veya güncellenmiş olabilir.",
    popularTowers: "Popüler Tarihi Kuleler:",
    returnHome: "Ansiklopedi Ana Sayfasına Dön",
    redirecting: "Kataloğa yönlendiriliyor:",
    urlDetected: "Tarihi Mimari URL Tespit Edildi",
    redirectingToProfile: "Güncellenmiş mimari profile yönlendiriliyorsunuz:",
    clickIfNotRedirected: "Otomatik yönlendirilmediyseniz buraya tıklayın",
  },
};

export default function NotFoundClient() {
  const { lang } = useLang();
  const txt = NOT_FOUND_TEXT[lang] || NOT_FOUND_TEXT.en;

  const [redirectingTo, setRedirectingTo] = useState<string | null>(null);
  const [redirectName, setRedirectName] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const path = window.location.pathname.toLowerCase();

    // SPAM QUARANTINE: Never redirect historical casino/lottery spam (404 hard stop)
    if (/togel|slot|judi|casino|poker|gacor|bandar|sbobet/i.test(path)) {
      return;
    }

    // Check against legacy patterns or building names
    for (const building of BUILDINGS) {
      if (
        (building.legacyId && path.includes(building.legacyId.toLowerCase())) ||
        path.includes(building.slug) ||
        path.includes(building.id)
      ) {
        setTimeout(() => {
          setRedirectingTo(`/buildings/${building.slug}/`);
          setRedirectName(building.name);
        }, 0);
        window.location.replace(`/buildings/${building.slug}/`);
        return;
      }
    }

    // Additional historical keyword matches
    if (path.includes("khalifa") || path.includes("burj-dubai")) {
      setTimeout(() => {
        setRedirectingTo("/buildings/burj-khalifa/");
        setRedirectName("Burj Khalifa");
      }, 0);
      window.location.replace("/buildings/burj-khalifa/");
      return;
    }
    if (path.includes("emirates")) {
      setTimeout(() => {
        setRedirectingTo("/buildings/emirates-towers/");
        setRedirectName("Emirates Towers");
      }, 0);
      window.location.replace("/buildings/emirates-towers/");
      return;
    }
    if (path.includes("arab") || path.includes("jumeirah-hotel")) {
      setTimeout(() => {
        setRedirectingTo("/buildings/burj-al-arab/");
        setRedirectName("Burj Al Arab");
      }, 0);
      window.location.replace("/buildings/burj-al-arab/");
      return;
    }

    // Start auto countdown to homepage/catalog
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.replace("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-zinc-950 text-zinc-100">
      <div className="max-w-xl w-full text-center space-y-6 p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-2xl">
        {redirectingTo ? (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center animate-spin">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">
              {txt.urlDetected}
            </h1>
            <p className="text-zinc-400 text-sm">
              {txt.redirectingToProfile}{" "}
              <span className="text-amber-400 font-semibold">{redirectName}</span>...
            </p>
            <Link
              href={redirectingTo}
              className="inline-block mt-2 text-sm text-amber-400 hover:underline font-mono"
            >
              {txt.clickIfNotRedirected}
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              {txt.archiveNotice}
            </div>
            <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              404
            </div>
            <h1 className="text-2xl font-bold text-white">
              {txt.title}
            </h1>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto">
              {txt.description}
            </p>

            {/* Quick links to top towers */}
            <div className="pt-2 text-left bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80">
              <div className="text-xs uppercase font-semibold tracking-wider text-zinc-400 mb-2">
                {txt.popularTowers}
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {BUILDINGS.slice(0, 4).map((b) => (
                  <Link
                    key={b.id}
                    href={`/buildings/${b.slug}/`}
                    className="p-2 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-amber-400 transition-colors flex items-center justify-between"
                  >
                    <span className="truncate">{b.name}</span>
                    <span className="text-zinc-500 text-[10px] ml-1">{b.heightMeters}m</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20"
              >
                {txt.returnHome}
              </Link>
            </div>

            <div className="text-xs text-zinc-500">
              {txt.redirecting}{" "}
              <span className="text-amber-400 font-mono font-bold">{countdown}</span>s...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
