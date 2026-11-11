"use client";

import React from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function EditorialPolicyClient() {
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
              <span className="text-[#1C1917] font-bold">Редакционная политика</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
                Стандарты E-E-A-T
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
                Независимый аудит • Без платных рекламных статей
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
              Редакционная политика и стандарты технической верификации
            </h1>
            <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
              Как Dubai Architecture сохраняет полную независимость архитектурной экспертизы от коммерческих интересов агентств недвижимости и девелоперов.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          {/* Section 1: Independence */}
          <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Стандарт 01 • Беспристрастность
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
                1. Полное разделение редакции и коммерческих запросов
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              Ни один девелопер (будь то Emaar, Nakheel, DAMAC, Sobha или частные консорциумы) не может купить рейтинг башни, удалить объективные замечания жильцов или повлиять на наш <strong>Независимый технический аудит</strong>.
            </p>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              Каждое досье башни составляется архитектурными экспертами. Если в здании медленные лифты с очередями в утренний час пик, слабая межквартирная шумоизоляция или грабительские счета за чиллеры (кондиционирование), эти факты открыто публикуются в досье.
            </p>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed font-mono">
              <strong>Ключевой принцип:</strong> &ldquo;Эстетическая красота фасада не оправдывает инженерные и эксплуатационные огрехи. Честная архитектурная критика обязана служить жильцу и инвестору.&rdquo;
            </div>
          </section>

          {/* Section 2: Verification Sources */}
          <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-5">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Стандарт 02 • Протоколы проверки
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
                2. Первичные источники данных и иерархия проверки фактов
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#44403C]">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
                <strong className="text-[#1C1917] text-sm block">1. Архитектурная высота и этажность</strong>
                <p className="text-[#57534E]">
                  Сверяется с официальными критериями Совета по высотным зданиям (CTBUH) и строительными разрешениями муниципалитета Дубая.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
                <strong className="text-[#1C1917] text-sm block">2. Кадастровый статус и реестр сделок</strong>
                <p className="text-[#57534E]">
                  Загружается напрямую из открытых реестров Земельного департамента Дубая (DLD), фиксируя реальные суммы договоров купли-продажи и официальный индекс аренды RERA.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
                <strong className="text-[#1C1917] text-sm block">3. Коммунальные сборы (Service Charges) и Mollak</strong>
                <p className="text-[#57534E]">
                  Проверяются по согласованным бюджетам в государственной электронной системе Mollak.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Corrections */}
          <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Стандарт 03 • Право на ответ
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
                3. Поправки, замечания инженеров и пересмотр данных
              </h2>
            </div>

            <p className="text-sm text-[#44403C] leading-relaxed">
              Мы приветствуем технические замечания от инженеров-конструкторов, архитекторов и управляющих компаний. Если у вас есть заверенная муниципальная документация, свидетельствующая о расхождении, мы внесем исправления в карточку объекта.
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
            <span className="text-[#1C1917] font-bold">Editorial Policy</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              E-E-A-T Editorial Guidelines
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              Independent Due Diligence • Zero Paid Promotions
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            Editorial Policy & Technical Fact-Checking Standards
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            How Dubai Architecture maintains strict independence between technical architectural assessments and real estate brokerage inquiries, ensuring unvarnished engineering truths.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Standard 01 • Impartiality
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              1. Complete Separation of Editorial Content and Brokerage Affiliation
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            Under our charter, no property developer (whether Emaar, Nakheel, DAMAC, Sobha, or private consortia) can purchase an editorial rating, delete unfavorable resident metrics, or modify our <strong>Independent Technical Audit</strong>.
          </p>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            Every building profile is drafted by architectural and structural analysts. If a tower suffers from notorious lift wait times during morning rush hours, inferior acoustic dampening between party walls, or excessive Mollak chiller capacity charges, these factors are prominently published in the tower&apos;s public dossier.
          </p>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed font-mono">
            <strong>Key Principle:</strong> &ldquo;A building&apos;s aesthetic prestige does not excuse mechanical, logistical, or financial deficiency. True architectural criticism must serve the occupant and investor.&rdquo;
          </div>
        </section>

        <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Standard 02 • Verification Protocols
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              2. Data Verification & Primary Source Hierarchy
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#44403C]">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
              <strong className="text-[#1C1917] text-sm block">1. Structural Height & Storeys</strong>
              <p className="text-[#57534E]">
                Verified against Council on Tall Buildings and Urban Habitat (CTBUH) technical criteria (Height to Architectural Top) and municipal building permits.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
              <strong className="text-[#1C1917] text-sm block">2. Cadastral Status & Transaction Ledger</strong>
              <p className="text-[#57534E]">
                Extracted directly from open data feeds published by the Dubai Land Department (DLD), verifying true contract sales value, mortgage registrations, and historical rental index ceilings.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
              <strong className="text-[#1C1917] text-sm block">3. HOA Service Fees & Mollak Audits</strong>
              <p className="text-[#57534E]">
                Cross-referenced with RERA-approved annual budgets within the Mollak electronic escrow and management system.
              </p>
            </div>
          </div>
        </section>

        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Standard 03 • Corrections & Inquiries
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              3. Corrections, Right of Reply & Technical Revisions
            </h2>
          </div>

          <p className="text-sm text-[#44403C] leading-relaxed">
            We welcome technical corrections from master structural engineers, architects, geotechnical consultants, and verified Owners&apos; Association Management Companies (OAMCs).
          </p>

          <p className="text-sm text-[#44403C] leading-relaxed">
            If you represent a project engineering team or have verified municipal documentation indicating a factual discrepancy, please submit verified documentation to our research desk.
          </p>
        </section>
      </div>
    </article>
  );
}
