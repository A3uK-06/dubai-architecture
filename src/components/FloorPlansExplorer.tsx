"use client";

import React, { useState } from "react";
import { Building, FloorPlan, getBuildingFloorPlans } from "@/data/buildings";
import { useLang } from "@/context/LangContext";

interface FloorPlansExplorerProps {
  building: Building;
  onOpenConsultation?: (planName: string) => void;
}

export default function FloorPlansExplorer({
  building,
  onOpenConsultation,
}: FloorPlansExplorerProps) {
  const { lang } = useLang();
  const plans = getBuildingFloorPlans(building);
  const [activePlanId, setActivePlanId] = useState<string>(plans[0]?.id || "");

  const activePlan = plans.find((p) => p.id === activePlanId) || plans[0];

  if (!activePlan) return null;

  return (
    <section id="floor-plans" className="rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-float-card space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F1F5F9] pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD7CA] text-[#8C6A48] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span>📐</span>
            <span>{lang === "ru" ? "Архитектурные планировки и ТЭП" : "Architectural Typologies & Floor Plans"}</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] font-heading">
            {lang === "ru" ? "Атлас планировочных решений" : "Floor Plans & Living Typologies"}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1">
            {lang === "ru"
              ? `Официальные типоразмеры, экспликация помещений и полезная площадь в ${building.name}.`
              : `Official unit dimensions, room breakdown, and net-to-gross living efficiency in ${building.name}.`}
          </p>
        </div>
        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#F8F9FA] text-[#64748B] border border-[#E2E8F0] self-start sm:self-auto">
          CAD Ref: {building.legacyId || building.id}-FP
        </span>
      </div>

      {/* Typology Selector Tabs */}
      <div className="flex flex-wrap gap-2 pt-1">
        {plans.map((plan) => {
          const isActive = plan.id === activePlan.id;
          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setActivePlanId(plan.id)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                isActive
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "bg-[#F8F9FA] text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
              }`}
            >
              <span>{plan.typeTag}</span>
              <span className={`text-[11px] px-1.5 py-0.5 rounded-md ${isActive ? "bg-white/20 text-white" : "bg-black/5 text-[#64748B]"}`}>
                {plan.totalAreaSqFt} sq.ft
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Floor Plan Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
        {/* Left Column: Interactive Architectural Blueprint (Vector CAD Schematic) */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0F172A] border border-[#334155] p-5 sm:p-7 text-white flex flex-col justify-between relative overflow-hidden shadow-inner">
          {/* Subtle Blueprint Grid Pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#38BDF8 1px, transparent 1px), linear-gradient(90deg, #38BDF8 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Blueprint Title & Compass */}
          <div className="relative z-10 flex justify-between items-start border-b border-white/10 pb-3 mb-4">
            <div>
              <div className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                {lang === "ru" ? "Архитектурная схема CAD" : "Architectural Blueprint Schematic"}
              </div>
              <div className="text-base font-bold text-white mt-0.5">{activePlan.name}</div>
            </div>
            {/* North Compass */}
            <div className="w-10 h-10 rounded-full border border-cyan-500/40 flex flex-col items-center justify-center font-mono text-[10px] text-cyan-300">
              <span className="font-extrabold text-cyan-400">▲</span>
              <span>N</span>
            </div>
          </div>

          {/* Dynamic SVG Blueprint Drawing */}
          <div className="relative z-10 w-full py-4 flex items-center justify-center">
            <svg
              viewBox="0 0 500 340"
              className="w-full h-auto max-h-[320px] select-none"
              fill="none"
              stroke="currentColor"
            >
              {/* Outer Wall Boundary with Heavy Stroke */}
              <rect x="20" y="20" width="460" height="290" rx="8" stroke="#38BDF8" strokeWidth="3" fill="#0284C7" fillOpacity="0.05" />

              {/* Balcony / Terrace Outcrop */}
              <rect x="330" y="20" width="150" height="130" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 3" fill="#38BDF8" fillOpacity="0.1" />
              <text x="405" y="85" fill="#38BDF8" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                {lang === "ru" ? "ТЕРРАСА / ЛОДЖИЯ" : "BALCONY LOGGIA"}
              </text>
              <text x="405" y="102" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                {activePlan.balconyAreaSqFt} SQ.FT
              </text>

              {/* Master Bedroom Suite */}
              <rect x="20" y="20" width="180" height="170" stroke="#38BDF8" strokeWidth="2" fill="none" />
              <text x="110" y="95" fill="#FFFFFF" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                {lang === "ru" ? "СПАЛЬНЯ MASTER" : "MASTER BEDROOM"}
              </text>
              {/* King Bed Graphic */}
              <rect x="65" y="40" width="90" height="75" stroke="#64748B" strokeWidth="1.5" rx="3" fill="#1E293B" />
              <line x1="110" y1="40" x2="110" y2="75" stroke="#64748B" strokeWidth="1" />
              <rect x="75" y="45" width="30" height="18" rx="2" stroke="#94A3B8" strokeWidth="1" />
              <rect x="115" y="45" width="30" height="18" rx="2" stroke="#94A3B8" strokeWidth="1" />

              {/* En-suite Bath */}
              <rect x="20" y="190" width="180" height="120" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
              <text x="110" y="245" fill="#38BDF8" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                {lang === "ru" ? "ВАННАЯ EN-SUITE" : "EN-SUITE BATH"}
              </text>
              {/* Bathtub */}
              <rect x="35" y="210" width="60" height="35" rx="10" stroke="#64748B" strokeWidth="1" fill="#1E293B" />
              {/* Vanity */}
              <rect x="110" y="210" width="75" height="25" stroke="#64748B" strokeWidth="1" fill="#1E293B" />

              {/* Main Living & Dining Hall */}
              <rect x="200" y="150" width="280" height="160" stroke="#38BDF8" strokeWidth="2" fill="none" />
              <text x="340" y="225" fill="#FFFFFF" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                {lang === "ru" ? "ГОСТИНАЯ И СТОЛОВАЯ" : "LIVING & DINING PAVILION"}
              </text>
              <text x="340" y="245" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                {activePlan.ceilingHeightMeters}m {lang === "ru" ? "ВЫСОТА ПОТОЛКА" : "CLEAR CEILING"}
              </text>
              {/* Dining Table */}
              <ellipse cx="270" cy="235" rx="35" ry="25" stroke="#64748B" strokeWidth="1.5" fill="#1E293B" />

              {/* Kitchen Island */}
              <rect x="200" y="20" width="130" height="130" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
              <rect x="220" y="55" width="90" height="40" stroke="#F59E0B" strokeWidth="1.5" rx="3" fill="#1E293B" />
              <text x="265" y="78" fill="#F59E0B" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                {lang === "ru" ? "КУХНЯ" : "KITCHEN"}
              </text>

              {/* Dimension Ticks (CAD style) */}
              <line x1="20" y1="325" x2="480" y2="325" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="20" cy="325" r="2.5" fill="#38BDF8" />
              <circle cx="480" cy="325" r="2.5" fill="#38BDF8" />
              <text x="250" y="338" fill="#94A3B8" fontSize="9" fontFamily="monospace" textAnchor="middle">
                {Math.round(Math.sqrt(activePlan.totalAreaSqM) * 1.35 * 10) / 10} m x {Math.round(Math.sqrt(activePlan.totalAreaSqM) * 0.75 * 10) / 10} m
              </text>
            </svg>
          </div>

          {/* Blueprint Footer Stamp */}
          <div className="relative z-10 flex flex-wrap justify-between items-center text-[10px] font-mono text-slate-400 border-t border-white/10 pt-3 mt-2 gap-2">
            <span>SCALE 1:100 • VERIFIED DLD / RERA METRICS</span>
            <span className="text-cyan-400 font-bold">{activePlan.efficiencyRatio}</span>
          </div>
        </div>

        {/* Right Column: Detailed Metric Passport & Rooms Breakdown */}
        <div className="lg:col-span-5 space-y-4">
          {/* Key Area Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0]">
              <div className="text-[#64748B] font-medium">{lang === "ru" ? "Общая площадь" : "Total Built-Up Area"}</div>
              <div className="text-xl font-bold font-mono text-[#0F172A] mt-1">{activePlan.totalAreaSqFt} sq.ft</div>
              <div className="text-[11px] text-[#8C6A48] font-mono font-semibold">{activePlan.totalAreaSqM} m²</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0]">
              <div className="text-[#64748B] font-medium">{lang === "ru" ? "Жилая площадь (Net)" : "Internal Living Area"}</div>
              <div className="text-xl font-bold font-mono text-[#059669] mt-1">{activePlan.internalAreaSqFt} sq.ft</div>
              <div className="text-[11px] text-[#64748B] font-mono">{activePlan.efficiencyRatio}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0]">
              <div className="text-[#64748B] font-medium">{lang === "ru" ? "Балкон / Лоджия" : "Balcony Space"}</div>
              <div className="text-lg font-bold font-mono text-[#0F172A] mt-1">{activePlan.balconyAreaSqFt} sq.ft</div>
              <div className="text-[11px] text-[#64748B] font-mono">{Math.round((activePlan.balconyAreaSqFt / activePlan.totalAreaSqFt) * 100)}% of total</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0]">
              <div className="text-[#64748B] font-medium">{lang === "ru" ? "Чистая высота" : "Clear Ceiling Height"}</div>
              <div className="text-lg font-bold font-mono text-[#8C6A48] mt-1">{activePlan.ceilingHeightMeters} m</div>
              <div className="text-[11px] text-[#64748B] font-mono">Floor-to-ceiling glass</div>
            </div>
          </div>

          {/* Rooms and Ergonomics Breakdown */}
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-3 text-xs">
            <div className="font-bold text-[#1C1917] flex items-center justify-between border-b border-[#EFECE4] pb-2">
              <span>{lang === "ru" ? "Экспликация и планировочный состав" : "Layout Specification & Rooms"}</span>
              <span className="text-[11px] font-mono text-[#8C6A48] font-bold">TYPE: {activePlan.typeTag}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[#57534E]">
              <div>🛏️ {lang === "ru" ? "Спален" : "Bedrooms"}: <strong className="text-[#1C1917]">{activePlan.roomsBreakdown.bedrooms}</strong></div>
              <div>🚿 {lang === "ru" ? "Санузлов" : "Bathrooms"}: <strong className="text-[#1C1917]">{activePlan.roomsBreakdown.bathrooms}</strong></div>
              <div>🧹 {lang === "ru" ? "Комната горничной" : "Maid's Room"}: <strong className="text-[#1C1917]">{activePlan.roomsBreakdown.maidRoom ? (lang === "ru" ? "Да (En-suite)" : "Yes (En-suite)") : (lang === "ru" ? "Нет" : "No")}</strong></div>
              <div>🚽 {lang === "ru" ? "Гостевой WC" : "Powder Room"}: <strong className="text-[#1C1917]">{activePlan.roomsBreakdown.powderRoom ? (lang === "ru" ? "Да" : "Yes") : (lang === "ru" ? "Нет" : "No")}</strong></div>
            </div>

            <div className="pt-1 text-[#57534E]">
              <span className="text-[#78716C]">{lang === "ru" ? "Тип кухни:" : "Kitchen Type:"}</span>{" "}
              <strong className="text-[#1C1917]">{activePlan.roomsBreakdown.kitchenType}</strong>
            </div>

            <div className="pt-1 text-[#57534E]">
              <span className="text-[#78716C]">📍 {lang === "ru" ? "Видовой горизонт:" : "View Aspect:"}</span>{" "}
              <strong className="text-[#8C6A48]">{activePlan.viewOrientation}</strong>
            </div>
          </div>

          {/* Architectural Features List */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              {lang === "ru" ? "Конструктивные преимущества" : "Engineering Highlights"}
            </div>
            <ul className="space-y-1.5 text-xs text-[#57534E]">
              {activePlan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#8C6A48] font-bold mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Print / Inquire Action */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.print();
                }
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-[#DDD7CA] hover:bg-[#FAF8F5] text-xs font-bold text-[#8C6A48] transition-colors flex items-center justify-center gap-2"
            >
              <span>🖨️</span>
              <span>{lang === "ru" ? `Распечатать чертеж: ${activePlan.typeTag}` : `Print Blueprint Specification: ${activePlan.typeTag}`}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
