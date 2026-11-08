"use client";

import React from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function AboutClient() {
  const { lang } = useLang();
  const isRu = lang === "ru";

  if (isRu) {
    return (
      <article className="min-h-screen bg-transparent text-[#0F172A] pb-24">
        {/* Header Banner */}
        <div className="border-b border-[#E2E8F0] bg-[#F1F5F9]/60 pt-12 pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <nav className="flex items-center gap-2 text-xs text-[#78716C] font-semibold">
              <Link href="/ru/" className="hover:text-[#8C6A48] transition-colors">
                Главная
              </Link>
              <span className="text-[#DDD7CA]">/</span>
              <span className="text-[#1C1917] font-bold">О проекте</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
                Институциональное наследие
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
                ОСН. В 2006 ГОДУ • Цифровой архитектурный альманах
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
              Об архитектурном историческом архиве Dubai Architecture
            </h1>
            <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
              Непрерывная оцифровка небоскребов Дубая с 2006 года: строгая инженерная экспертиза, кадастровая сверка транзакций DLD и независимый аудит премиальной недвижимости ОАЭ.
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          {/* Chapter 1: Archive Heritage */}
          <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-4">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Глава 01 • Наследие архива
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
                1. Летопись эволюции Дубая: с 2006 года до эпохи мега-высоток
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              Основанный в 2006 году, проект <strong>Dubai Architecture (dubai-architecture.info)</strong> изначально создавался как открытая цифровая летопись в момент, когда Дубай только начинал свое превращение в мировую столицу высотного строительства. Когда первые монолитные сваи забивались в фундамент Бурдж-Халифа (тогда известного как Burj Dubai), наш архив уже документировал высоту перекрытий, аэродинамические испытания и инженерные инновации Sheikh Zayed Road и Dubai Marina.
            </p>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              За почти два десятилетия мы проследили трансформацию дубайской архитектуры от изолированных постмодернистских башен до целостных биоклиматических мастер-сообществ, инженерных консолей One Za&apos;abeel и футуристических параметрических форм Museum of the Future. Сегодня этот исторический архив служит институциональным фундаментом для инвесторов, инженеров и покупателей недвижимости.
            </p>
          </section>

          {/* Chapter 2: Editorial Mission */}
          <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-4">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Глава 02 • Редакционная миссия
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
                2. Почему мы не рекламная доска объявлений и не риелторский портал
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              Интернет переполнен рекламными агентскими сайтами с одинаковыми глянцевыми рендерами, завышенными обещаниями арендной доходности 12% годовых и полным сокрытием коммунальных расходов на кондиционирование (чиллеры) и эксплуатационных сборов Mollak HOA.
            </p>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              <strong>Dubai Architecture руководствуется принципиально иным стандартом:</strong>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA] space-y-2">
                <span className="text-xs font-mono font-bold text-[#8C6A48] uppercase">Инженерная честность</span>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Мы открыто фиксируем недостатки планировок: несущие колонны посреди комнат, узкие балконы, время ожидания скоростных лифтов в утренний час-пик и шумоизоляцию между апартаментами.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA] space-y-2">
                <span className="text-xs font-mono font-bold text-[#8C6A48] uppercase">Кадастровая точность</span>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Все цифры цен за квадратный фут и история сделок верифицируются через открытые реестры Земельного департамента Дубая (DLD), а не маркетинговые прайс-листы застройщиков.
                </p>
              </div>
            </div>
          </section>

          {/* Chapter 3: Primary Sources */}
          <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-4">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Глава 03 • Источники данных
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
                3. Первичные источники информации и институциональные реестры
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
                <span className="text-xs font-bold text-[#1C1917]">CTBUH Skyscraper Center</span>
                <p className="text-xs text-[#78716C]">
                  Международный совет по высотным зданиям: проверка архитектурной высоты, типа шпиля и конструктивных систем.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
                <span className="text-xs font-bold text-[#1C1917]">Dubai Land Department (DLD)</span>
                <p className="text-xs text-[#78716C]">
                  Официальный кадастровый реестр сделок купли-продажи, регистраций ипотеки и эскроу-счетов строящихся объектов.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
                <span className="text-xs font-bold text-[#1C1917]">Mollak & RERA System</span>
                <p className="text-xs text-[#78716C]">
                  Электронная система согласования ежегодных бюджетов обслуживания кондоминиумов и тарифов управляющих компаний.
                </p>
              </div>
            </div>
          </section>

          {/* Chapter 4: Institutional Partnership */}
          <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-4">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Глава 04 • Партнерская модель
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
                4. Прозрачность монетизации и лицензированные брокеры
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              Мы не взимаем скрытых платежей с инвесторов и покупателей. Монетизация проекта осуществляется по официальным институциональным реферальным соглашениям в соответствии с Законом ОАЭ №85 от 2006 года через аккредитованных брокеров RERA:
            </p>

            <ul className="list-disc pl-5 text-xs sm:text-sm text-[#57534E] space-y-2">
              <li>
                <strong>Metropolitan Premium Properties</strong> — международный департамент для инвесторов со всего мира (европейские, азиатские и англоязычные запросы).
              </li>
              <li>
                <strong>Whitewill Dubai</strong> — премиальный брокер для русскоязычных клиентов из РФ и стран СНГ.
              </li>
            </ul>
          </section>
        </div>
      </article>
    );
  }

  // English Version (Default)
  return (
    <article className="min-h-screen bg-transparent text-[#0F172A] pb-24">
      {/* Header Banner */}
      <div className="border-b border-[#E2E8F0] bg-[#F1F5F9]/60 pt-12 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex items-center gap-2 text-xs text-[#78716C] font-semibold">
            <Link href="/" className="hover:text-[#8C6A48] transition-colors">
              Home
            </Link>
            <span className="text-[#DDD7CA]">/</span>
            <span className="text-[#1C1917] font-bold">About Us</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              Institutional Heritage
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              EST. 2006 • Digital Architectural Almanac
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            About the Dubai Architecture Historical Archive
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            Documenting the engineering evolution, urban geometry, and architectural mastery of Dubai since 2006. An independent, research-grade skyscraper encyclopaedia with open cadastral cross-validation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-4">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Chapter 01 • Heritage
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              1. The Historical Archive (2006 to Present)
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            Established in 2006, <strong>Dubai-Architecture.info</strong> began as a digital registry chronicling the unprecedented transformation of Dubai from a regional trade port into the undisputed skyscraper capital of the world. As foundation piles were driven for the Burj Khalifa (then Burj Dubai), our records commenced tracking technical heights, structural typologies, and master architects shaping Sheikh Zayed Road and Dubai Marina.
          </p>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            Over nearly two decades, the archive has catalogued the complete arc of Gulf skyscraper engineering: from early postmodern towers to advanced diagrid steel tubes, twisting aerodynamic forms (Cayan Tower), and cantilever engineering marvels (One Za&apos;abeel).
          </p>
        </section>

        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-4">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Chapter 02 • Editorial Mission
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              2. Why We Are Not a &ldquo;Listing Aggregator&rdquo; or &ldquo;Bridge Portal&rdquo;
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            The Dubai real estate web is saturated with superficial marketing portals that display generic renderings, speculative prices, and inflated rental yield claims (often promising 10–12% without factoring in Mollak HOA fees or chiller capacity tariffs).
          </p>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            <strong>Dubai Architecture operates on a fundamentally different standard:</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA] space-y-2">
              <span className="text-xs font-mono font-bold text-[#8C6A48] uppercase">Architectural Due Diligence</span>
              <p className="text-xs text-[#57534E] leading-relaxed">
                We inspect party-wall acoustic dampening, lift wait times, elevator bank zoning, facade thermal efficiency, and true floorplan column intrusions.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA] space-y-2">
              <span className="text-xs font-mono font-bold text-[#8C6A48] uppercase">DLD Cadastral Verification</span>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Every transaction reference, price per square foot, and rental yield index is cross-referenced with open government land registry databases.
              </p>
            </div>
          </div>
        </section>

        <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-4">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Chapter 03 • Data Verification
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              3. Primary Engineering & Cadastral Data Sources
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
              <span className="text-xs font-bold text-[#1C1917]">CTBUH Skyscraper Center</span>
              <p className="text-xs text-[#78716C]">
                Official structural heights, spire metrics, and engineering typologies.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
              <span className="text-xs font-bold text-[#1C1917]">Dubai Land Department (DLD)</span>
              <p className="text-xs text-[#78716C]">
                Open-data transaction ledgers, mortgage registrations, and escrow accounts.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
              <span className="text-xs font-bold text-[#1C1917]">Mollak HOA System</span>
              <p className="text-xs text-[#78716C]">
                Approved service fees, chiller capacity charges, and reserve fund audits.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
