"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Building, getBuildingFloorPlans } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import { FLOOR_PLAN_LABELS, getLocalizedFloorPlan } from "@/data/floorPlanI18n";

interface FloorPlansExplorerProps {
  building: Building;
  onOpenConsultation?: (planName: string) => void;
}

export default function FloorPlansExplorer({
  building,
  onOpenConsultation,
}: FloorPlansExplorerProps) {
  const { lang, isRtl } = useLang();
  const rawPlans = useMemo(() => getBuildingFloorPlans(building), [building]);
  const [activePlanId, setActivePlanId] = useState<string>(rawPlans[0]?.id || "");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const labels = FLOOR_PLAN_LABELS[lang] || FLOOR_PLAN_LABELS.en;

  const plans = useMemo(() => {
    return rawPlans.map((p) => getLocalizedFloorPlan(p, lang, building.name));
  }, [rawPlans, lang, building.name]);

  const activePlan = plans.find((p) => p.id === activePlanId) || plans[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
        setZoomLevel(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  if (!activePlan) return null;

  // Render Clean CAD Blueprint SVG with ZERO Text Overlaps
  const renderBlueprintSvg = (isLarge: boolean = false) => {
    return (
      <svg
        viewBox="0 0 920 540"
        className={`w-full select-none transition-transform duration-200 ${
          isLarge ? "h-full max-h-[80vh]" : "h-auto max-h-[460px]"
        }`}
        style={isLarge ? { transform: `scale(${zoomLevel})` } : undefined}
        fill="none"
        stroke="currentColor"
      >
        {/* Architectural Grid Background */}
        <defs>
          <pattern id={`cadGrid-${isLarge ? "lg" : "sm"}`} width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#0284C7" strokeWidth="0.5" strokeOpacity="0.15" />
          </pattern>
        </defs>
        <rect width="920" height="540" fill={`url(#cadGrid-${isLarge ? "lg" : "sm"})`} />

        {/* Outer Heavy Structural Envelope Wall */}
        <rect
          x="30"
          y="30"
          width="860"
          height="480"
          rx="12"
          stroke="#38BDF8"
          strokeWidth="3.5"
          fill="#0F172A"
          fillOpacity="0.85"
        />

        {/* 1. MASTER BEDROOM SUITE (Top-Left) */}
        <rect x="30" y="30" width="370" height="280" stroke="#38BDF8" strokeWidth="2" fill="none" />
        
        {/* Master Bedroom Header Label Box (Non-overlapping) */}
        <rect x="50" y="48" width="260" height="30" rx="6" fill="#0B1E38" stroke="#0284C7" strokeWidth="1" />
        <text x="65" y="68" fill="#FFFFFF" fontSize="12" fontFamily="monospace" fontWeight="bold">
          {labels.svgMasterBed}
        </text>
        <text x="235" y="68" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold">
          {Math.round(activePlan.internalAreaSqFt * 0.38)} sq.ft
        </text>

        {/* King Bed Furniture (Placed cleanly below header box, no text overlap) */}
        <g transform="translate(140, 110)">
          {/* Bed Base */}
          <rect x="0" y="0" width="150" height="135" rx="5" stroke="#475569" strokeWidth="1.5" fill="#1E293B" />
          <line x1="75" y1="0" x2="75" y2="135" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
          {/* Pillows */}
          <rect x="15" y="10" width="50" height="28" rx="4" stroke="#64748B" strokeWidth="1.2" fill="#0F172A" />
          <rect x="85" y="10" width="50" height="28" rx="4" stroke="#64748B" strokeWidth="1.2" fill="#0F172A" />
          {/* Duvet Fold */}
          <path d="M 0 50 Q 75 60 150 50" stroke="#475569" strokeWidth="1.5" fill="none" />
          {/* Nightstands */}
          <rect x="-35" y="10" width="28" height="32" rx="3" stroke="#475569" strokeWidth="1.2" fill="#1E293B" />
          <rect x="157" y="10" width="28" height="32" rx="3" stroke="#475569" strokeWidth="1.2" fill="#1E293B" />
        </g>

        {/* Master Walk-in Dressing Wardrobe */}
        <rect x="50" y="110" width="65" height="135" rx="4" stroke="#334155" strokeWidth="1.2" strokeDasharray="4 3" fill="#1E293B" fillOpacity="0.6" />
        <text x="82" y="180" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 82 180)">
          WARDROBE
        </text>

        {/* Door Swing into Master Bed */}
        <path d="M 340 310 A 40 40 0 0 1 380 270" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
        <line x1="340" y1="310" x2="380" y2="310" stroke="#38BDF8" strokeWidth="2" />


        {/* 2. EN-SUITE MASTER BATHROOM (Bottom-Left) */}
        <rect x="30" y="310" width="370" height="200" stroke="#38BDF8" strokeWidth="2" fill="none" />
        
        {/* Bathroom Header Label Box */}
        <rect x="50" y="325" width="220" height="28" rx="6" fill="#0B1E38" stroke="#0284C7" strokeWidth="1" />
        <text x="65" y="344" fill="#38BDF8" fontSize="12" fontFamily="monospace" fontWeight="bold">
          {labels.svgBath}
        </text>

        {/* Bathtub (Cleanly positioned on left) */}
        <g transform="translate(50, 375)">
          <rect x="0" y="0" width="120" height="60" rx="15" stroke="#64748B" strokeWidth="1.5" fill="#1E293B" />
          <ellipse cx="60" cy="30" rx="48" ry="20" stroke="#475569" strokeWidth="1" fill="#0F172A" />
          <circle cx="20" cy="30" r="3" fill="#38BDF8" />
        </g>

        {/* Double Vanity Counter (Cleanly positioned on right) */}
        <g transform="translate(195, 375)">
          <rect x="0" y="0" width="180" height="45" rx="4" stroke="#64748B" strokeWidth="1.5" fill="#1E293B" />
          {/* Sink 1 */}
          <ellipse cx="45" cy="22" rx="24" ry="14" stroke="#475569" strokeWidth="1" fill="#0F172A" />
          {/* Sink 2 */}
          <ellipse cx="135" cy="22" rx="24" ry="14" stroke="#475569" strokeWidth="1" fill="#0F172A" />
        </g>

        {/* Walk-in Shower Glass Enclosure */}
        <rect x="250" y="440" width="125" height="55" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="3 2" fill="#0284C7" fillOpacity="0.1" />
        <text x="312" y="472" fill="#38BDF8" fontSize="10" fontFamily="monospace" textAnchor="middle">SHOWER</text>


        {/* 3. KITCHEN PAVILION (Top-Center) */}
        <rect x="400" y="30" width="230" height="220" stroke="#38BDF8" strokeWidth="2" fill="none" />
        
        {/* Kitchen Header Label Box */}
        <rect x="420" y="48" width="170" height="28" rx="6" fill="#2E1C05" stroke="#D97706" strokeWidth="1" />
        <text x="435" y="67" fill="#F59E0B" fontSize="12" fontFamily="monospace" fontWeight="bold">
          {labels.svgKitchen}
        </text>

        {/* European Cooking Island & Breakfast Bar */}
        <g transform="translate(430, 95)">
          <rect x="0" y="0" width="170" height="60" rx="5" stroke="#D97706" strokeWidth="1.5" fill="#1E293B" />
          {/* Induction Cooktop Burners */}
          <circle cx="40" cy="30" r="14" stroke="#F59E0B" strokeWidth="1.2" fill="#0F172A" />
          <circle cx="85" cy="30" r="14" stroke="#F59E0B" strokeWidth="1.2" fill="#0F172A" />
          <circle cx="130" cy="30" r="10" stroke="#F59E0B" strokeWidth="1.2" fill="#0F172A" />
          {/* Bar Stools */}
          <circle cx="35" cy="85" r="9" stroke="#64748B" strokeWidth="1.2" fill="#1E293B" />
          <circle cx="85" cy="85" r="9" stroke="#64748B" strokeWidth="1.2" fill="#1E293B" />
          <circle cx="135" cy="85" r="9" stroke="#64748B" strokeWidth="1.2" fill="#1E293B" />
        </g>
        <text x="515" y="215" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">
          ISLAND BREAKFAST BAR
        </text>


        {/* 4. BALCONY LOGGIA / SKY TERRACE (Top-Right) */}
        <rect
          x="630"
          y="30"
          width="260"
          height="220"
          stroke="#38BDF8"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          fill="#38BDF8"
          fillOpacity="0.08"
        />
        {/* Balcony Header Badge */}
        <rect x="650" y="48" width="220" height="30" rx="6" fill="#0B1E38" stroke="#38BDF8" strokeWidth="1" />
        <text x="760" y="68" fill="#38BDF8" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          {labels.svgBalcony} • {activePlan.balconyAreaSqFt} SQ.FT
        </text>

        {/* Outdoor Terrace Lounge Furniture (Zero overlap) */}
        <g transform="translate(680, 110)">
          <rect x="0" y="0" width="160" height="70" rx="8" stroke="#38BDF8" strokeWidth="1.5" fill="#1E293B" />
          <text x="80" y="40" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">
            AL FRESCO LOUNGE
          </text>
        </g>


        {/* 5. MAIN LIVING & FORMAL DINING (Center & Bottom-Right) */}
        <rect x="400" y="250" width="490" height="260" stroke="#38BDF8" strokeWidth="2" fill="none" />
        
        {/* Living Room Header Label Box */}
        <rect x="420" y="270" width="340" height="30" rx="6" fill="#0B1E38" stroke="#0284C7" strokeWidth="1" />
        <text x="435" y="290" fill="#FFFFFF" fontSize="13" fontFamily="monospace" fontWeight="bold">
          {labels.svgLiving}
        </text>
        <text x="670" y="290" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold">
          {activePlan.ceilingHeightMeters}m {labels.svgCeilingHeight}
        </text>

        {/* Dining Suite (Center Left of Living Room) */}
        <g transform="translate(435, 330)">
          {/* Dining Table */}
          <rect x="15" y="15" width="130" height="65" rx="10" stroke="#64748B" strokeWidth="1.5" fill="#1E293B" />
          <text x="80" y="52" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">
            DINING TABLE
          </text>
          {/* Chairs */}
          <rect x="35" y="-2" width="28" height="12" rx="2" stroke="#64748B" strokeWidth="1" fill="#0F172A" />
          <rect x="95" y="-2" width="28" height="12" rx="2" stroke="#64748B" strokeWidth="1" fill="#0F172A" />
          <rect x="35" y="85" width="28" height="12" rx="2" stroke="#64748B" strokeWidth="1" fill="#0F172A" />
          <rect x="95" y="85" width="28" height="12" rx="2" stroke="#64748B" strokeWidth="1" fill="#0F172A" />
        </g>

        {/* Sectional Sofa & Media Lounge (Right of Living Room) */}
        <g transform="translate(635, 325)">
          <path
            d="M 20 0 L 200 0 L 200 130 L 155 130 L 155 45 L 20 45 Z"
            stroke="#64748B"
            strokeWidth="1.5"
            fill="#1E293B"
          />
          {/* Coffee Table */}
          <rect x="55" y="65" width="75" height="45" rx="6" stroke="#475569" strokeWidth="1.2" fill="#0F172A" />
          <text x="92" y="92" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle">
            COFFEE TABLE
          </text>
        </g>


        {/* Compass Rose (Top Right) */}
        <g transform="translate(850, 70)">
          <circle cx="0" cy="0" r="22" stroke="#0284C7" strokeWidth="1.2" fill="#0F172A" />
          <path d="M 0 -18 L 5 0 L 0 5 L -5 0 Z" fill="#38BDF8" />
          <text x="0" y="-8" fill="#FFFFFF" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">N</text>
        </g>

        {/* Dimension Scale Bar (Bottom Left) */}
        <g transform="translate(50, 500)">
          <line x1="0" y1="0" x2="160" y2="0" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="80" y1="-3" x2="80" y2="3" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="160" y1="-5" x2="160" y2="5" stroke="#94A3B8" strokeWidth="1.5" />
          <text x="0" y="-8" fill="#94A3B8" fontSize="9" fontFamily="monospace">0m</text>
          <text x="80" y="-8" fill="#94A3B8" fontSize="9" fontFamily="monospace">2.5m</text>
          <text x="160" y="-8" fill="#94A3B8" fontSize="9" fontFamily="monospace">5.0m</text>
        </g>

        {/* Dimensional Ticks across bottom width */}
        <g transform="translate(420, 502)">
          <text x="150" y="-4" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">
            {labels.svgDimensions}: {Math.round(Math.sqrt(activePlan.totalAreaSqM) * 1.35 * 10) / 10} m x {Math.round(Math.sqrt(activePlan.totalAreaSqM) * 0.75 * 10) / 10} m
          </text>
        </g>
      </svg>
    );
  };

  return (
    <section id="floor-plans" className="rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-float-card space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F1F5F9] pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD7CA] text-[#8C6A48] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span>📐</span>
            <span>{labels.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] font-heading">
            {labels.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1">
            {labels.sectionSubtitle(building.name)}
          </p>
        </div>
        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#F8F9FA] text-[#64748B] border border-[#E2E8F0] self-start sm:self-auto">
          {labels.cadRef}: {building.legacyId || building.id}-FP
        </span>
      </div>

      {/* Typology Selector Tabs (Fully localized across all 10 languages) */}
      <div className="flex flex-wrap gap-2.5 pt-1">
        {plans.map((plan) => {
          const isActive = plan.id === activePlan.id;
          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setActivePlanId(plan.id)}
              className={`px-4 py-3 rounded-2xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                isActive
                  ? "bg-[#0F172A] text-white shadow-md scale-102"
                  : "bg-[#F8F9FA] text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
              }`}
            >
              <span>{plan.typeTag}</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-md font-semibold ${isActive ? "bg-white/20 text-white" : "bg-black/5 text-[#64748B]"}`}>
                {plan.totalAreaSqFt} sq.ft
              </span>
            </button>
          );
        })}
      </div>

      {/* FULL-WIDTH ARCHITECTURAL BLUEPRINT HERO VIEWPORT (Fixing "МЕЛКО!") */}
      <div className="rounded-3xl bg-[#0B132B] border-2 border-[#1E293B] p-5 sm:p-8 text-white relative overflow-hidden shadow-2xl group">
        {/* Top Control Bar with Fullscreen trigger */}
        <div className="flex flex-wrap justify-between items-center gap-3 border-b border-white/10 pb-4 mb-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{labels.blueprintTitle}</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-white mt-0.5 font-heading">
              {activePlan.name}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Fullscreen Button */}
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>🔍</span>
              <span>{labels.fullscreenBtn}</span>
            </button>
          </div>
        </div>

        {/* Blueprint Clickable Area */}
        <div
          onClick={() => setIsFullscreen(true)}
          className="cursor-pointer relative flex items-center justify-center py-2"
          title={labels.clickToEnlarge}
        >
          {renderBlueprintSvg(false)}

          {/* Hover Hint Overlay */}
          <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center pointer-events-none">
            <span className="px-4 py-2 rounded-xl bg-[#0F172A]/90 border border-cyan-400/50 text-cyan-300 font-mono text-xs font-bold shadow-lg backdrop-blur-sm">
              🔍 {labels.clickToEnlarge}
            </span>
          </div>
        </div>

        {/* Blueprint Footer Stamp */}
        <div className="flex flex-wrap justify-between items-center text-[11px] font-mono text-slate-400 border-t border-white/10 pt-4 mt-2 gap-2">
          <span>{labels.scaleLabel}</span>
          <span className="text-cyan-400 font-bold">{activePlan.efficiencyRatio}</span>
        </div>
      </div>

      {/* METRIC SPECIFICATIONS & ROOM PROGRAM CARDS (Full Width Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        {/* Left Column: 4 Key Metrics */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3 text-xs">
          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
            <div className="text-[#64748B] font-medium">{labels.totalArea}</div>
            <div className="text-2xl font-bold font-mono text-[#0F172A]">{activePlan.totalAreaSqFt} sq.ft</div>
            <div className="text-xs text-[#8C6A48] font-mono font-semibold">{activePlan.totalAreaSqM} m²</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
            <div className="text-[#64748B] font-medium">{labels.livingArea}</div>
            <div className="text-2xl font-bold font-mono text-[#059669]">{activePlan.internalAreaSqFt} sq.ft</div>
            <div className="text-xs text-[#64748B] font-mono">{activePlan.efficiencyRatio}</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
            <div className="text-[#64748B] font-medium">{labels.balconyArea}</div>
            <div className="text-xl font-bold font-mono text-[#0F172A]">{activePlan.balconyAreaSqFt} sq.ft</div>
            <div className="text-xs text-[#64748B] font-mono">
              {Math.round((activePlan.balconyAreaSqFt / activePlan.totalAreaSqFt) * 100)}% {labels.ofTotal}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
            <div className="text-[#64748B] font-medium">{labels.clearCeiling}</div>
            <div className="text-xl font-bold font-mono text-[#8C6A48]">{activePlan.ceilingHeightMeters} m</div>
            <div className="text-xs text-[#64748B] font-mono">{labels.floorToCeiling}</div>
          </div>

          {/* Print Layout Button */}
          <div className="col-span-2 pt-2">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.print();
                }
              }}
              className="w-full py-3 px-4 rounded-xl border border-[#DDD7CA] hover:bg-[#FAF8F5] text-xs font-bold text-[#8C6A48] transition-colors flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>🖨️</span>
              <span>{labels.printBtn(activePlan.typeTag)}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Rooms Specification & Features */}
        <div className="lg:col-span-7 space-y-4">
          {/* Rooms and Ergonomics Breakdown */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-3.5 text-xs">
            <div className="font-bold text-[#1C1917] flex items-center justify-between border-b border-[#EFECE4] pb-2.5">
              <span className="text-sm font-heading">{labels.roomsTitle}</span>
              <span className="text-xs font-mono text-[#8C6A48] font-bold">TYPE: {activePlan.typeTag}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[#57534E]">
              <div className="p-2.5 bg-white rounded-xl border border-[#EFECE4]">
                <div className="text-[#78716C]">{labels.bedroomsLabel}</div>
                <div className="text-base font-bold text-[#1C1917] mt-0.5">{activePlan.roomsBreakdown.bedrooms}</div>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-[#EFECE4]">
                <div className="text-[#78716C]">{labels.bathroomsLabel}</div>
                <div className="text-base font-bold text-[#1C1917] mt-0.5">{activePlan.roomsBreakdown.bathrooms}</div>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-[#EFECE4]">
                <div className="text-[#78716C]">{labels.maidRoomLabel}</div>
                <div className="text-xs font-bold text-[#1C1917] mt-1">
                  {activePlan.roomsBreakdown.maidRoom ? labels.yes : labels.no}
                </div>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-[#EFECE4]">
                <div className="text-[#78716C]">{labels.powderRoomLabel}</div>
                <div className="text-xs font-bold text-[#1C1917] mt-1">
                  {activePlan.roomsBreakdown.powderRoom ? labels.yes : labels.no}
                </div>
              </div>
            </div>

            <div className="pt-1 text-[#57534E]">
              <span className="text-[#78716C] font-medium">{labels.kitchenTypeLabel}:</span>{" "}
              <strong className="text-[#1C1917]">{activePlan.roomsBreakdown.kitchenType}</strong>
            </div>

            <div className="pt-1 text-[#57534E]">
              <span className="text-[#78716C] font-medium">📍 {labels.viewAspectLabel}:</span>{" "}
              <strong className="text-[#8C6A48]">{activePlan.viewOrientation}</strong>
            </div>
          </div>

          {/* Architectural Features List */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              {labels.engineeringHighlights}
            </div>
            <ul className="space-y-2 text-xs text-[#57534E]">
              {activePlan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#8C6A48]/15 text-[#8C6A48] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FULLSCREEN CAD LIGHTBOX MODAL */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-[#0B132B]/95 backdrop-blur-xl flex flex-col p-4 sm:p-8 animate-in fade-in duration-200">
          {/* Lightbox Navigation Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                  {activePlan.name}
                </h3>
                <div className="text-xs font-mono text-cyan-300">
                  {activePlan.totalAreaSqFt} SQ.FT ({activePlan.totalAreaSqM} M²) • {labels.scaleLabel}
                </div>
              </div>
            </div>

            {/* Lightbox Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
                title={labels.zoomIn}
              >
                + {labels.zoomIn}
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
                title={labels.zoomOut}
              >
                - {labels.zoomOut}
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel(1)}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
                title={labels.resetZoom}
              >
                {labels.resetZoom}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsFullscreen(false);
                  setZoomLevel(1);
                }}
                className="w-9 h-9 rounded-xl bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 flex items-center justify-center font-bold text-base transition-colors ml-2 cursor-pointer"
                title={labels.closeFullscreen}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Lightbox Canvas Area */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-4">
            <div className="w-full max-w-6xl">
              {renderBlueprintSvg(true)}
            </div>
          </div>

          {/* Lightbox Footer Bar */}
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-t border-white/10 pt-3">
            <span>{building.name} • {labels.cadRef}: {building.legacyId || building.id}-FP</span>
            <span>ESC: {labels.closeFullscreen}</span>
          </div>
        </div>
      )}
    </section>
  );
}
