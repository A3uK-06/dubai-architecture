"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLang } from "@/context/LangContext";
import { BUILDINGS } from "@/data/buildings";
import { DISTRICTS } from "@/data/districts";
import PropertyQuizModal from "@/components/PropertyQuizModal";
import { trackEvent } from "@/lib/analytics";

// Featured 6 iconic towers for concise homepage showcase
const FEATURED_TOWER_SLUGS = [
  "burj-khalifa",
  "burj-azizi",
  "emirates-towers",
  "burj-al-arab",
  "cayan-tower",
  "one-zaabeel",
];

// Featured 4 prime districts for concise homepage showcase
const FEATURED_DISTRICT_SLUGS = [
  "downtown-dubai",
  "dubai-marina",
  "palm-jumeirah",
  "difc",
];

export default function Home() {
  const router = useRouter();
  const { t, lang, langInfo, isRtl } = useLang();

  const [searchQuery, setSearchQuery] = useState("");
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizInitialTower, setQuizInitialTower] = useState<string | undefined>();

  const langPrefix = lang === "en" ? "" : `/${lang}`;

  const openQuiz = (towerName?: string) => {
    setQuizInitialTower(towerName);
    setIsQuizOpen(true);
    trackEvent("quiz_open_from_home", { tower: towerName || "general" });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      trackEvent("home_search", { query: searchQuery.trim() });
      router.push(`${langPrefix}/buildings/?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push(`${langPrefix}/buildings/`);
    }
  };

  // Resolve featured items
  const featuredBuildings = FEATURED_TOWER_SLUGS.map((slug) =>
    BUILDINGS.find((b) => b.slug === slug)
  ).filter(Boolean);

  const featuredDistricts = FEATURED_DISTRICT_SLUGS.map((slug) =>
    DISTRICTS.find((d) => d.slug === slug)
  ).filter(Boolean);

  return (
    <div className="flex-1 flex flex-col bg-white text-[#0F172A] transition-colors">
      {/* 1. HERO SECTION: Focused, prestigious & clean */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E2E8F0] bg-gradient-to-b from-[#F8F9FA]/80 to-white">
        {/* Architectural Skyline Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-dubai-skyline.webp"
            alt="Dubai Architectural Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/85 to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            {/* Heritage Badge */}
            <Link
              href={`${langPrefix}/about/`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#CBD5E1] bg-white text-[#0F172A] hover:border-[#8C6A48] hover:text-[#8C6A48] text-xs sm:text-sm font-bold tracking-wide shadow-sm transition-all"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A] animate-pulse" />
              <span>{t.hero.badge}</span>
              <span className="text-[10px] opacity-60">↗</span>
            </Link>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] font-heading leading-[1.15]">
              {t.hero.title}{" "}
              <span className="text-[#8C6A48] block sm:inline">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#475569] max-w-[62ch] font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-2xl mt-2">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <div className={`absolute ${isRtl ? "right-4" : "left-4"} text-[#64748B] pointer-events-none`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.hero.searchPlaceholder}
                  className={`w-full h-[54px] rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] placeholder-[#64748B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all text-sm sm:text-base ${
                    isRtl ? "pr-14 pl-32" : "pl-14 pr-32"
                  }`}
                />
                <button
                  type="submit"
                  className={`absolute ${isRtl ? "left-2" : "right-2"} h-10 px-5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer`}
                >
                  {t.filters.search.replace("...", "")}
                </button>
              </form>
            </div>

            {/* PRIMARY CONVERSION ACTIONS: Quiz + Catalog */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
              <button
                type="button"
                onClick={() => openQuiz()}
                className="px-7 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#8C6A48] hover:bg-[#78593A] text-white transition-all shadow-lg transform hover:scale-[1.02] active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>🏛️</span>
                <span>{lang === "ru" ? "Пройти квиз подбора недвижимости" : "Start Property Advisory Quiz"}</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-mono font-normal">1 мин</span>
              </button>

              <Link
                href={`${langPrefix}/buildings/`}
                className="px-6 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#0F172A] hover:bg-[#1E293B] text-white transition-all shadow-sm cursor-pointer"
              >
                {t.hero.ctaCatalog}
              </Link>

              <Link
                href={`${langPrefix}/districts/`}
                className="px-5 py-4 rounded-xl font-semibold text-sm sm:text-base bg-white hover:bg-[#F8FAFC] text-[#0F172A] border border-[#CBD5E1] transition-all shadow-sm cursor-pointer"
              >
                {t.nav.districts}
              </Link>
            </div>

            {/* Authority Social Proof Bar */}
            <div className="w-full max-w-4xl p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-left mt-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#8C6A48]/10 text-[#8C6A48] flex items-center justify-center shrink-0 text-lg border border-[#8C6A48]/20">
                  🏛️
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A] flex items-center gap-2">
                    <span>
                      {lang === "ru"
                        ? "Институциональный авторитет и цитирования"
                        : "Institutional Heritage & Global Citations"}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F1F5F9] text-[#475569] border border-[#CBD5E1]">
                      EST. 2006
                    </span>
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">
                    {lang === "ru"
                      ? "Около 3 000 внешних ссылок • Цитируется в трудах исследователей Springer Nature, Lund University и Википедии"
                      : "Over 3,000 research citations in Springer Nature, Lund University, and Wikipedia"}
                  </div>
                </div>
              </div>
              <Link
                href={`${langPrefix}/about/`}
                className="shrink-0 text-xs font-bold text-[#8C6A48] hover:text-[#6D5135] underline decoration-dotted underline-offset-4 whitespace-nowrap self-end sm:self-center"
              >
                {lang === "ru" ? "Об архиве →" : "About Archive →"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUIZ TEASER BANNER: Instant engagement block */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-[#8C6A48]/15 text-[#8C6A48] border border-[#8C6A48]/30 uppercase tracking-wider">
                {lang === "ru" ? "Интерактивный подбор объекта" : "Smart Property Matcher"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-heading">
                {lang === "ru"
                  ? "Подберите недвижимость в Дубае под ваш бюджет и цели"
                  : "Find Your Ideal Dubai Property by Budget & Timeline"}
              </h2>
              <p className="text-sm text-[#64748B] max-w-xl">
                {lang === "ru"
                  ? "Укажите тип недвижимости, бюджет в удобной валюте, интересующую площадь и получите персональный реестр свободных лотов от аккредитованных RERA-брокеров."
                  : "Specify property type, preferred currency budget, and layout requirements to receive a verified developer dossier directly."}
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => openQuiz()}
                className="px-8 py-4 rounded-2xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm sm:text-base shadow-md transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 cursor-pointer"
              >
                <span>Начать квиз (1 мин)</span>
                <span>➡️</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE: Top 6 Iconic Skyscrapers (Concise, not 37) */}
      <section id="catalog" className="py-16 md:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#8C6A48] tracking-wider uppercase block">
                {lang === "ru" ? "Архитектурные символы" : "Architectural Landmarks"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-heading mt-1">
                {lang === "ru" ? "Культовые небоскрёбы Дубая" : "Iconic Dubai Skyscrapers"}
              </h2>
            </div>
            <Link
              href={`${langPrefix}/buildings/`}
              className="text-sm font-bold text-[#8C6A48] hover:text-[#78593A] underline decoration-dotted underline-offset-4 flex items-center gap-1.5 self-start sm:self-end"
            >
              <span>{lang === "ru" ? "Смотреть все 37 башен в каталоге" : "View All 37 Towers in Catalog"}</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBuildings.map((building) => {
              if (!building) return null;
              return (
                <div
                  key={building.slug}
                  className="group rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <Link href={`${langPrefix}/buildings/${building.slug}/`} className="relative h-56 w-full block overflow-hidden bg-stone-100">
                    <Image
                      src={building.image}
                      alt={building.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F172A]/85 backdrop-blur-sm text-white text-xs font-mono font-bold px-2.5 py-1 rounded-lg">
                      {building.heightMeters}m • {building.floors} fl
                    </div>
                  </Link>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <div className="text-xs font-bold text-[#8C6A48] uppercase tracking-wider">
                        {building.district}
                      </div>
                      <Link href={`${langPrefix}/buildings/${building.slug}/`} className="block">
                        <h3 className="font-bold text-lg text-[#0F172A] group-hover:text-[#8C6A48] transition-colors leading-snug">
                          {building.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                        {building.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => openQuiz(building.name)}
                        className="text-xs font-bold text-[#0F172A] hover:text-[#8C6A48] underline cursor-pointer"
                      >
                        {lang === "ru" ? "Запросить досье лотов" : "Request Unit Dossier"}
                      </button>
                      <Link
                        href={`${langPrefix}/buildings/${building.slug}/`}
                        className="text-xs font-bold text-[#8C6A48] hover:underline"
                      >
                        {lang === "ru" ? "Подробнее →" : "Read Profile →"}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-center">
            <Link
              href={`${langPrefix}/buildings/`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] font-bold text-sm transition-all"
            >
              <span>{lang === "ru" ? "Открыть полный каталог небоскрёбов (37 башен)" : "Explore Full Skyscrapers Catalog (37 Towers)"}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SHOWCASE: Top 4 Master Communities (Concise) */}
      <section id="districts" className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#8C6A48] tracking-wider uppercase block">
                {lang === "ru" ? "Флагманские локации" : "Prime Investment Hubs"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-heading mt-1">
                {lang === "ru" ? "Ключевые районы Дубая" : "Key Districts of Dubai"}
              </h2>
            </div>
            <Link
              href={`${langPrefix}/districts/`}
              className="text-sm font-bold text-[#8C6A48] hover:text-[#78593A] underline decoration-dotted underline-offset-4 flex items-center gap-1.5 self-start sm:self-end"
            >
              <span>{lang === "ru" ? "Все 14 районов в каталоге" : "View All 14 Districts"}</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredDistricts.map((district) => {
              if (!district) return null;
              return (
                <Link
                  key={district.slug}
                  href={`${langPrefix}/districts/${district.slug}/`}
                  className="group rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative h-44 w-full bg-stone-100 overflow-hidden">
                    <Image
                      src={district.image}
                      alt={district.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="font-bold text-base leading-tight">
                        {district.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                      {district.overview}
                    </p>
                    <span className="text-xs font-bold text-[#8C6A48] group-hover:underline pt-1 block">
                      {lang === "ru" ? "Гид по району →" : "District Guide →"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INVESTOR TOOLS SUITE: 3 Distinct Hub Cards */}
      <section id="calculator" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#8C6A48] tracking-wider uppercase">
              {lang === "ru" ? "Инструменты для инвестора" : "Investor Toolkit"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-heading">
              {lang === "ru" ? "Финансовые и визовые калькуляторы" : "Financial & Residency Analytics"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tool 1: ROI Calculator */}
            <Link
              href={`${langPrefix}/calculator/`}
              className="p-6 rounded-3xl border border-[#E2E8F0] bg-[#FDFBF7] hover:bg-[#F9F5EE] transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl font-bold">
                  🧮
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#8C6A48] transition-colors">
                  {lang === "ru" ? "Калькулятор окупаемости (ROI)" : "Rental Yield & ROI Calculator"}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {lang === "ru"
                    ? "Точный расчет чистой арендной доходности, эксплуатационных сборов (Service Charges) и 5-летнего прироста капитала в 6 валютах."
                    : "Calculate net rental yields, DEWA/cooling service charges, and 5-year capital appreciation across Dubai towers in 6 currencies."}
                </p>
              </div>
              <span className="text-xs font-bold text-[#8C6A48] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>{lang === "ru" ? "Открыть калькулятор" : "Open Calculator"}</span>
                <span>→</span>
              </span>
            </Link>

            {/* Tool 2: Golden Visa Guide */}
            <Link
              href={`${langPrefix}/golden-visa/`}
              className="p-6 rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center text-2xl font-bold">
                  🛂
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#8C6A48] transition-colors">
                  {lang === "ru" ? "Проверка прав на Golden Visa" : "UAE Golden Visa Eligibility"}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {lang === "ru"
                    ? "Требования к инвестициям от 2,000,000 AED для получения 10-летнего ВНЖ ОАЭ для инвестора и всей семьи."
                    : "Official criteria and required equity benchmarks for obtaining a 10-year UAE Investor Golden Visa with family sponsorship."}
                </p>
              </div>
              <span className="text-xs font-bold text-[#8C6A48] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>{lang === "ru" ? "Проверить статус" : "Check Eligibility"}</span>
                <span>→</span>
              </span>
            </Link>

            {/* Tool 3: Developers Registry */}
            <Link
              href={`${langPrefix}/developers/`}
              className="p-6 rounded-3xl border border-[#E2E8F0] bg-[#FDFBF7] hover:bg-[#F9F5EE] transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold">
                  🏗️
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#8C6A48] transition-colors">
                  {lang === "ru" ? "Реестр мастер-девелоперов" : "Master Developers Registry"}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {lang === "ru"
                    ? "Анализ надежности Emaar, Sobha, Nakheel, Meraas, Damac: статистика сдачи проектов, эскроу-счета DLD и пулы квот."
                    : "Track records of tier-1 Dubai master builders: Emaar, Sobha, Nakheel, and Meraas with DLD escrow guarantees."}
                </p>
              </div>
              <span className="text-xs font-bold text-[#8C6A48] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>{lang === "ru" ? "Смотреть застройщиков" : "View Developers"}</span>
                <span>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Property Quiz Modal */}
      <PropertyQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        targetTower={quizInitialTower}
      />
    </div>
  );
}
