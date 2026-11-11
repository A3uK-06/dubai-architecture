"use client";

import React, { useMemo } from "react";
import { Building } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import { getBuildingExplosiveAudit } from "@/data/explosiveAudits";

interface ExplosiveInvestorAuditProps {
  building: Building;
}

export default function ExplosiveInvestorAudit({ building }: ExplosiveInvestorAuditProps) {
  const { lang, isRtl } = useLang();

  const { audit, labels } = useMemo(() => {
    return getBuildingExplosiveAudit(building, lang);
  }, [building, lang]);

  return (
    <section className="rounded-3xl bg-[#090D16] text-white p-6 sm:p-9 border border-[#1E293B] shadow-2xl space-y-8 print:border-slate-300 print:bg-white print:text-black print:p-0 print:shadow-none">
      {/* Section Header */}
      <div className="border-b border-white/10 pb-5 space-y-2 print:border-slate-300">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8C6A48]/30 border border-[#8C6A48]/60 text-[#E7D6C4] text-xs font-mono font-bold uppercase tracking-wider print:border-slate-400 print:text-slate-800 print:bg-slate-100">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse print:hidden" />
          <span>{labels.mainBadge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading print:text-black">
          {labels.mainTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl print:text-slate-600">
          {labels.mainSubtitle}
        </p>
      </div>

      {/* 5 DEEP FACTOR CARDS */}
      <div className="grid grid-cols-1 gap-6">
        
        {/* FACTOR 1: FLOOD & RAIN RESILIENCE */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-7 space-y-4 print:border-slate-300 print:bg-slate-50 break-inside-avoid">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 print:border-slate-300">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🌧️</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight print:text-black">
                  {labels.floodTitle}
                </h3>
                <span className="text-xs text-slate-400 print:text-slate-600">
                  {labels.floodSupercarSafety}: <strong className="text-slate-200 print:text-black">{audit.floodResilience.status}</strong>
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/40 bg-sky-950/40 text-sky-300 text-xs font-mono font-bold print:border-slate-400 print:text-black print:bg-white">
              <span>🛡️ {labels.floodScoreLabel}:</span>
              <span className="text-sm font-extrabold text-white print:text-black">{audit.floodResilience.score}/100</span>
            </div>
          </div>

          {/* Human-Readable Verdict */}
          <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed print:bg-white print:border-slate-300 print:text-black">
            <div className="font-bold text-sky-400 mb-1 flex items-center gap-1.5 print:text-sky-800">
              <span>🚗</span>
              <span>Вердикт для владельца авто и спорткаров:</span>
            </div>
            {audit.floodResilience.humanVerdict}
          </div>

          {/* Technical Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 print:border-slate-300 print:bg-white">
              <span className="text-slate-400 block print:text-slate-600">⚡ {labels.floodSubstationLabel}:</span>
              <span className="text-slate-200 font-semibold print:text-black">{audit.floodResilience.substationLevel}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 print:border-slate-300 print:bg-white">
              <span className="text-slate-400 block print:text-slate-600">🌊 Дренаж и насосы:</span>
              <span className="text-slate-200 font-semibold print:text-black">{audit.floodResilience.stormProtection}</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 italic pt-1 print:text-slate-500">
            🔬 {labels.floodEngineeringNotice} {audit.floodResilience.engineeringBasis}
          </div>
        </div>

        {/* FACTOR 2: STARCHITECT & TROPHY ASSET */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-7 space-y-4 print:border-slate-300 print:bg-slate-50 break-inside-avoid">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 print:border-slate-300">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🏛️</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight print:text-black">
                  {labels.starchitectTitle}
                </h3>
                <span className="text-xs text-slate-400 print:text-slate-600">
                  {labels.starchitectTrophyStatus}: <strong className="text-amber-300 print:text-amber-800">{audit.starchitect.tier}</strong>
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-950/40 text-amber-300 text-xs font-mono font-bold print:border-slate-400 print:text-black print:bg-white">
              <span>✨ {labels.starchitectPremiumLabel}:</span>
              <span className="text-sm font-extrabold text-amber-200 print:text-black">+{audit.starchitect.architectBrandPremiumPercent}%</span>
            </div>
          </div>

          {/* Human-Readable Verdict */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed print:bg-white print:border-slate-300 print:text-black">
            <div className="font-bold text-amber-400 mb-1 flex items-center gap-1.5 print:text-amber-800">
              <span>📈</span>
              <span>{labels.starchitectLiquidityHorizon}:</span>
            </div>
            {audit.starchitect.humanVerdict}
          </div>

          <div className="text-[11px] text-slate-400 italic pt-1 print:text-slate-500">
            🔬 {labels.starchitectEngineeringNotice} {audit.starchitect.engineeringBasis}
          </div>
        </div>

        {/* FACTOR 3: WIND SWAY & HIGH-FLOOR ACOUSTICS */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-7 space-y-4 print:border-slate-300 print:bg-slate-50 break-inside-avoid">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 print:border-slate-300">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🌪️</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight print:text-black">
                  {labels.windSwayTitle}
                </h3>
                <span className="text-xs text-slate-400 print:text-slate-600">
                  Гаситель колебаний: <strong className="text-teal-300 print:text-teal-800">{audit.windSway.dampingSystem}</strong>
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/40 text-teal-300 text-xs font-mono font-bold print:border-slate-400 print:text-black print:bg-white">
              <span>📐 {labels.windSwayDeflectionLabel}:</span>
              <span className="text-sm font-extrabold text-white print:text-black">~{audit.windSway.swayDeflectionMm} мм</span>
            </div>
          </div>

          {/* Human-Readable Verdict */}
          <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed print:bg-white print:border-slate-300 print:text-black">
            <div className="font-bold text-teal-400 mb-1 flex items-center gap-1.5 print:text-teal-800">
              <span>🛌</span>
              <span>{labels.windSwayComfortVerdict}:</span>
            </div>
            {audit.windSway.humanVerdict}
          </div>

          {/* Golden Living Floors */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs print:border-slate-300 print:bg-white">
            <span className="text-lg">🎯</span>
            <div>
              <span className="text-slate-400 block print:text-slate-600 font-medium">{labels.windSwayGoldenFloorsLabel}:</span>
              <strong className="text-white print:text-black font-semibold">{audit.windSway.goldenFloors}</strong>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 italic pt-1 print:text-slate-500">
            🔬 {labels.windSwayEngineeringNotice} {audit.windSway.engineeringBasis}
          </div>
        </div>

        {/* FACTOR 4: SOCIAL FILTER & AIRBNB RADAR */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-7 space-y-4 print:border-slate-300 print:bg-slate-50 break-inside-avoid">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 print:border-slate-300">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🛡️</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight print:text-black">
                  {labels.socialTitle}
                </h3>
                <span className="text-xs text-slate-400 print:text-slate-600">
                  Политика субаренды: <strong className="text-slate-200 print:text-black">{audit.socialFilter.holidayHomesPolicy}</strong>
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/40 bg-purple-950/40 text-purple-300 text-xs font-mono font-bold print:border-slate-400 print:text-black print:bg-white">
              <span>👥 {labels.socialOwnerRatioLabel}:</span>
              <span className="text-sm font-extrabold text-white print:text-black">{audit.socialFilter.ownerOccupierPercent}%</span>
            </div>
          </div>

          {/* Human-Readable Verdict */}
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed print:bg-white print:border-slate-300 print:text-black">
            <div className="font-bold text-purple-400 mb-1 flex items-center gap-1.5 print:text-purple-800">
              <span>🧳</span>
              <span>{labels.socialLuggageTrafficVerdict}:</span>
            </div>
            {audit.socialFilter.humanVerdict}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 print:border-slate-300 print:bg-white">
              <span className="text-slate-400 block print:text-slate-600">🔐 Пропускной режим охраны:</span>
              <span className="text-slate-200 font-semibold print:text-black">{audit.socialFilter.securityLevel}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 print:border-slate-300 print:bg-white">
              <span className="text-slate-400 block print:text-slate-600">🏛️ {labels.socialScoreLabel}:</span>
              <span className="text-emerald-400 font-bold font-mono print:text-emerald-800">{audit.socialFilter.privacyScore}/100</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 italic pt-1 print:text-slate-500">
            🔬 {labels.socialEngineeringNotice} {audit.socialFilter.engineeringBasis}
          </div>
        </div>

        {/* FACTOR 5: CONTRACTOR & QUALITY AUTOPSY */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-7 space-y-4 print:border-slate-300 print:bg-slate-50 break-inside-avoid">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 print:border-slate-300">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🔬</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight print:text-black">
                  {labels.contractorTitle}
                </h3>
                <span className="text-xs text-slate-400 print:text-slate-600">
                  Генподрядчик: <strong className="text-slate-200 print:text-black">{audit.contractorAutopsy.mainContractor}</strong>
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/40 bg-indigo-950/40 text-indigo-300 text-xs font-mono font-bold print:border-slate-400 print:text-black print:bg-white">
              <span>🔇 {labels.contractorAcousticScoreLabel}:</span>
              <span className="text-sm font-extrabold text-white print:text-black">{audit.contractorAutopsy.soundproofingRatingDb} dB</span>
            </div>
          </div>

          {/* Human-Readable Verdict */}
          <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed print:bg-white print:border-slate-300 print:text-black">
            <div className="font-bold text-indigo-400 mb-1 flex items-center gap-1.5 print:text-indigo-800">
              <span>👂</span>
              <span>{labels.contractorNoiseVerdict}:</span>
            </div>
            {audit.contractorAutopsy.humanVerdict}
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs print:border-slate-300 print:bg-white">
            <span className="text-slate-400 block print:text-slate-600 font-medium">🚰 {labels.contractorPipelineLabel}:</span>
            <span className="text-slate-200 font-semibold print:text-black">{audit.contractorAutopsy.pipelineQuality}</span>
          </div>

          <div className="text-[11px] text-slate-400 italic pt-1 print:text-slate-500">
            🔬 {labels.contractorEngineeringNotice} {audit.contractorAutopsy.engineeringBasis}
          </div>
        </div>

      </div>

      {/* TWO-TIER EXECUTIVE LIVING VERDICT: PROS, CONS, & TARGET BUYER PROFILE */}
      <div className="rounded-2xl bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#1E293B] border-2 border-[#8C6A48]/50 p-6 sm:p-8 space-y-6 print:border-slate-400 print:bg-white print:p-4 break-inside-avoid shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 print:border-slate-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8C6A48]/30 border border-[#8C6A48]/50 text-[#CBB292] text-xs font-mono font-bold uppercase tracking-wider mb-2 print:text-black print:border-slate-400 print:bg-slate-100">
              <span>⚖️</span>
              <span>{labels.verdictBadge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-heading print:text-black">
              {labels.verdictTitle}
            </h3>
          </div>
          <span className="text-xs font-mono text-[#E7D6C4] bg-[#8C6A48]/20 px-3 py-1.5 rounded-lg border border-[#8C6A48]/40 print:text-slate-700 print:border-slate-300 print:bg-white">
            {building.name} • {building.district}
          </span>
        </div>

        {/* Honest Executive Summary */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm sm:text-base text-slate-100 leading-relaxed font-medium print:bg-slate-50 print:border-slate-300 print:text-black">
          {audit.livingVerdict.independentVerdictSummary}
        </div>

        {/* Side-by-Side Strengths and Pitfalls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Strengths */}
          <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3 print:bg-white print:border-slate-300">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs sm:text-sm uppercase tracking-wide print:text-emerald-800">
              <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs">✓</span>
              <span>{labels.strengthsTitle}</span>
            </div>
            <ul className="space-y-2.5">
              {audit.livingVerdict.strengths.map((item, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5 leading-relaxed print:text-slate-800">
                  <span className="text-emerald-400 font-bold mt-0.5 print:text-emerald-700">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pitfalls & Trade-offs */}
          <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-3 print:bg-white print:border-slate-300">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs sm:text-sm uppercase tracking-wide print:text-rose-800">
              <span className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-xs">⚠</span>
              <span>{labels.pitfallsTitle}</span>
            </div>
            <ul className="space-y-2.5">
              {audit.livingVerdict.pitfalls.map((item, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5 leading-relaxed print:text-slate-800">
                  <span className="text-rose-400 font-bold mt-0.5 print:text-rose-700">⚠</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Target Profile Match: Ideal vs Avoid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Ideal For */}
          <div className="p-4 rounded-xl bg-[#8C6A48]/15 border border-[#8C6A48]/40 space-y-1.5 print:bg-white print:border-slate-300">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E7D6C4] print:text-amber-900 flex items-center gap-1.5">
              <span>🎯</span>
              <span>{labels.idealForLabel}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 print:text-slate-800 leading-relaxed">
              {audit.livingVerdict.idealFor}
            </p>
          </div>

          {/* Not Recommended For */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1.5 print:bg-white print:border-slate-300">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-300 print:text-rose-900 flex items-center gap-1.5">
              <span>⚠️</span>
              <span>{labels.notRecommendedForLabel}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {audit.livingVerdict.notRecommendedFor}
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="text-[11px] text-slate-400 leading-relaxed text-center pt-2 border-t border-white/10 print:text-slate-500 print:border-slate-300">
          ⚖️ {labels.legalNotice}
        </div>
      </div>
    </section>
  );
}
