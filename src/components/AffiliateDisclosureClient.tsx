"use client";

import React from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function AffiliateDisclosureClient() {
  const { lang } = useLang();
  const isRu = lang === "ru";
  const homeUrl = "/";

  if (isRu) {
    return (
      <article className="min-h-screen bg-transparent text-[#0F172A] pb-24">
        {/* Header Banner */}
        <div className="border-b border-[#E2E8F0] bg-[#F1F5F9]/60 pt-12 pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <nav className="flex items-center gap-2 text-xs text-[#78716C] font-semibold">
              <Link href={homeUrl} className="hover:text-[#8C6A48] transition-colors">
                Главная
              </Link>
              <span className="text-[#DDD7CA]">/</span>
              <span className="text-[#1C1917] font-bold">Раскрытие партнерства</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
                Правовое регулирование
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
                Закон Дубая №85 от 2006 года (О брокерах недвижимости)
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
              Официальное раскрытие партнерства и аккредитация RERA
            </h1>
            <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
              В строгом соответствии с требованиями Регулирующего агентства недвижимости Дубая (RERA), Земельного департамента (DLD) и законодательства ОАЭ.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          {/* Article 1 */}
          <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Статья 01 • Институциональный статус
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
                1. Независимый архитектурный каталог и информационный ресурс
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              <strong>Dubai Architecture (dubai-architecture.info)</strong> является независимым архитектурным каталогом и исследовательской платформой, основанной в 2006 году. Мы не являемся застройщиком и не храним средства клиентов.
            </p>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              Все архитектурные анализы, планировки и характеристики зданий публикуются исключительно в исследовательских и информационных целях.
            </p>
          </section>

          {/* Article 2 */}
          <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-5">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Статья 02 • Лицензированные брокеры
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
                2. Аккредитованные брокеры RERA и маршрутизация лидов
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#1C1917]">Лицензированные брокеры RERA</span>
                  <span className="text-xs font-mono bg-[#8C6A48]/10 text-[#8C6A48] px-2 py-0.5 rounded font-bold">Лицензия RERA</span>
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Аккредитованные брокерские агентства высшей категории для русскоязычных и региональных инвесторов. Прямой доступ к закрытым пулам квартир от ведущих девелоперов, эскроу-счетам и беспроцентным рассрочкам.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#1C1917]">Международный партнерский пул</span>
                  <span className="text-xs font-mono bg-[#8C6A48]/10 text-[#8C6A48] px-2 py-0.5 rounded font-bold">Лицензии DLD</span>
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Авторизованные международные брокерские департаменты ОАЭ, обслуживающие зарубежных инвесторов (Европа, США, Азия, страны Залива) на 15+ языках мира.
                </p>
              </div>
            </div>
          </section>

          {/* Article 3 */}
          <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Статья 03 • Защита средств
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
                3. Государственные гарантии эскроу-счетов (Закон №8 от 2007 г.)
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              Все платежи при покупке строящейся недвижимости (off-plan) в Дубае по закону переводятся исключительно на специальный эскроу-счет застройщика, открытый в аккредитованном банке ОАЭ и контролируемый Земельным департаментом Дубая (DLD).
            </p>
          </section>

          {/* Article 4: Data Transfer Consent */}
          <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-5">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Статья 04 • Конфиденциальность данных
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
                4. Согласие на передачу данных брокерам (Закон ОАЭ о PDPL №45 от 2021 г.)
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              Отправляя заявку на архитектурно-инвестиционное досье, подбор планировок или расчет окупаемости, пользователь дает прямое согласие на передачу указанных контактных данных (имя, телефон, WhatsApp, инвестиционные предпочтения) аккредитованным лицензированным брокерским агентствам партнерской сети RERA исключительно в целях предоставления актуальной информации о наличии лотов, ценах и графиках платежей от застройщиков.
            </p>

            <p className="text-xs text-[#78716C] leading-relaxed">
              Данные никогда не передаются нелицензированным третьим лицам и защищены соглашениями о конфиденциальности (NDA) и Федеральным декретом-законом ОАЭ №45 от 2021 года «О защите персональных данных» (PDPL).
            </p>
          </section>
        </div>
      </article>
    );
  }

  // English version
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
            <span className="text-[#1C1917] font-bold">Brokerage Disclosure</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              Regulatory Compliance
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              Law No. 85 of 2006 (Dubai Real Estate Brokers)
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            Accredited Brokerage & Referral Disclosure
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            In compliance with the Real Estate Regulatory Agency (RERA), the Dubai Land Department (DLD), and international consumer protection standards, this notice explains how inquiries and commercial transactions are facilitated.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Article 01 • Institutional Standing
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              1. Independent Architectural Catalog & Information Provider
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            <strong>Dubai Architecture (dubai-architecture.info)</strong> is an independent architectural catalog and technical observatory established in 2006. We are not a direct property developer, mortgage lender, or escrow trustee.
          </p>
        </section>

        <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Article 02 • Licensed Brokerage Network
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              2. Authorized RERA Broker Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#1C1917]">Licensed RERA Brokerages</span>
                <span className="text-xs font-mono bg-[#8C6A48]/10 text-[#8C6A48] px-2 py-0.5 rounded font-bold">RERA Licensed</span>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Accredited premier real estate brokerage advisory desks managing discerning regional and international buyer allocations with direct developer inventory access.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#1C1917]">Accredited Global Brokerage Network</span>
                <span className="text-xs font-mono bg-[#8C6A48]/10 text-[#8C6A48] px-2 py-0.5 rounded font-bold">DLD Certified</span>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Licensed UAE brokerage desks facilitating global transactions, international wire protocols, and developer allocations across 15+ spoken languages.
              </p>
            </div>
          </div>
        </section>

        {/* Article 3: Escrow */}
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Article 03 • Fund Security
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              3. Government Escrow Account Guarantees (Law No. 8 of 2007)
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            All off-plan real estate payments in Dubai are mandatorily disbursed into regulated project-specific escrow accounts maintained at Central Bank-approved financial institutions, supervised by the Dubai Land Department (DLD).
          </p>
        </section>

        {/* Article 4: Data Transfer Consent */}
        <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Article 04 • Privacy & Data Transfer
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              4. Consent to Data Transmission (UAE Federal Decree-Law No. 45 of 2021 / PDPL)
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            By submitting an inquiry for an architectural dossier, floor plan schedule, or financial return assessment, the user explicitly consents to the transmission of submitted contact details (name, phone, WhatsApp, investment parameters) to our accredited RERA brokerage partner network exclusively to facilitate developer unit verification and pricing schedules.
          </p>

          <p className="text-xs text-[#78716C] leading-relaxed">
            Your data is never distributed to unlicensed parties or third-party marketers and is safeguarded under strict non-disclosure obligations (NDA) and the UAE Personal Data Protection Law (PDPL).
          </p>
        </section>
      </div>
    </article>
  );
}
