"use client";

import React, { useMemo } from "react";
import { Building } from "@/data/buildings";
import { LanguageCode } from "@/i18n/languages";
import { useLang } from "@/context/LangContext";
import { getBuildingInvestorReality } from "@/data/investorRealityCheck";
import { ZERO_THREAT_LABELS_I18N } from "@/data/localizedInvestorAudits";

interface InvestorRealityAuditProps {
  building: Building;
}

export default function InvestorRealityAudit({ building }: InvestorRealityAuditProps) {
  const { lang, isRtl } = useLang();

  const { viewRadar, solarExposure, walkability, labels } = useMemo(() => {
    return getBuildingInvestorReality(building, lang);
  }, [building, lang]);

  const riskBadgeStyle = useMemo(() => {
    switch (viewRadar.riskLevel) {
      case "protected":
        return {
          bg: "bg-emerald-950/60 border-emerald-500/40 text-emerald-300",
          dot: "bg-emerald-400",
          icon: "🛡️"
        };
      case "low":
        return {
          bg: "bg-teal-950/60 border-teal-500/40 text-teal-300",
          dot: "bg-teal-400",
          icon: "✓"
        };
      case "moderate":
        return {
          bg: "bg-amber-950/60 border-amber-500/40 text-amber-300",
          dot: "bg-amber-400",
          icon: "⚠"
        };
      case "high":
        return {
          bg: "bg-rose-950/60 border-rose-500/40 text-rose-300",
          dot: "bg-rose-400",
          icon: "🚨"
        };
      default:
        return {
          bg: "bg-slate-800 border-slate-700 text-slate-300",
          dot: "bg-slate-400",
          icon: "ℹ"
        };
    }
  }, [viewRadar.riskLevel]);

  const walkScoreColor = useMemo(() => {
    if (walkability.score >= 90) return "text-emerald-400 border-emerald-500/40 bg-emerald-950/40";
    if (walkability.score >= 70) return "text-teal-400 border-teal-500/40 bg-teal-950/40";
    if (walkability.score >= 50) return "text-amber-400 border-amber-500/40 bg-amber-950/40";
    return "text-rose-400 border-rose-500/40 bg-rose-950/40";
  }, [walkability.score]);

  return (
    <section className="rounded-3xl bg-[#090D16] text-white p-6 sm:p-9 border border-[#1E293B] shadow-2xl space-y-8">
      {/* Section Header */}
      <div className="border-b border-white/10 pb-5 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8C6A48]/30 border border-[#8C6A48]/60 text-[#E7D6C4] text-xs font-mono font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
          <span>{labels.sectionBadge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading">
          {labels.sectionTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
          {labels.sectionSubtitle}
        </p>
      </div>

      <div className="space-y-6">
        {/* 1. VIEW BLOCKER RADAR */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-7 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xl sm:text-2xl">📡</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {labels.viewRadarTitle}
                </h3>
                <span className="text-xs text-slate-400">{labels.viewGuaranteeLabel}</span>
              </div>
            </div>

            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-bold tracking-wide ${riskBadgeStyle.bg}`}>
              <span className={`w-2 h-2 rounded-full ${riskBadgeStyle.dot}`} />
              <span>{riskBadgeStyle.icon}</span>
              <span>{viewRadar.status}</span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {viewRadar.assessment}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {/* Protected Horizons */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <span>🛡️</span>
                <span>{labels.protectedOrientations}</span>
              </div>
              <ul className="space-y-2">
                {viewRadar.protectedOrientations.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Potential Threats */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <span>⚠️</span>
                <span>{labels.threatOrientations}</span>
              </div>
              {viewRadar.threatOrientations.length > 0 ? (
                <ul className="space-y-2">
                  {viewRadar.threatOrientations.map((item, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-xs text-slate-400 italic">
                  {ZERO_THREAT_LABELS_I18N[lang] || ZERO_THREAT_LABELS_I18N.en}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2. SUN & THERMAL EXPOSURE */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-7 space-y-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
            <span className="text-xl sm:text-2xl">☀️</span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {labels.solarTitle}
              </h3>
              <span className="text-xs text-slate-400">{labels.coolingImpact}: {solarExposure.coolingEnergyImpact}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Optimal Cool Side */}
            <div className="p-4 rounded-xl bg-sky-950/25 border border-sky-500/20 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                <span>❄️</span>
                <span>{labels.optimalAspect}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {solarExposure.optimalAspect}
              </p>
            </div>

            {/* Harsh Sun Side */}
            <div className="p-4 rounded-xl bg-orange-950/25 border border-orange-500/20 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                <span>🔥</span>
                <span>{labels.harshAspect}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {solarExposure.harshAspect}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-400 font-medium">🔬 {labels.glazingSpec}:</span>
            <span className="text-slate-200 font-bold font-mono">{solarExposure.solarHeatGainRating}</span>
          </div>

          {/* Resident Tip */}
          <div className="p-4 rounded-xl bg-[#8C6A48]/15 border border-[#8C6A48]/35 flex items-start gap-3">
            <span className="text-lg text-amber-300 shrink-0">💡</span>
            <div className="text-xs sm:text-sm text-[#F0E6D8] leading-relaxed">
              <strong className="font-bold text-[#E7D6C4]">{labels.residentTip}: </strong>
              {solarExposure.residentTip}
            </div>
          </div>
        </div>

        {/* 3. WALKABILITY & TRANSIT REALITY */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-7 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xl sm:text-2xl">🚶</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {labels.walkabilityTitle}
                </h3>
                <span className="text-xs text-slate-400">{walkability.category}</span>
              </div>
            </div>

            {/* Walk Score Counter */}
            <div className="flex items-center gap-3">
              <div className={`px-4 py-2 rounded-2xl border text-center ${walkScoreColor}`}>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono leading-none">
                  {walkability.score}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-80 mt-1">
                  / 100
                </div>
              </div>
            </div>
          </div>

          {/* Metro & Infrastructure Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="text-xs text-slate-400 font-medium flex items-center justify-between">
                <span>🚇 {labels.metroStationLabel}</span>
                <span className="text-emerald-400 font-bold font-mono">
                  {walkability.metroDistanceMinutes} {labels.metroMinutesLabel}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                {walkability.metroStation}
              </div>
              <div className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-white/10 text-cyan-300">
                {walkability.metroAccessType}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="text-xs text-slate-400 font-medium">
                🛒 {labels.dailyEssentialsLabel}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {walkability.dailyEssentialsOnFoot}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
