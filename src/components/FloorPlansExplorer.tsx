"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Building, FloorPlan, getBuildingFloorPlans } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import { FLOOR_PLAN_LABELS, getLocalizedFloorPlan } from "@/data/floorPlanI18n";

interface FloorPlansExplorerProps {
  building: Building;
  onOpenConsultation?: (planName: string) => void;
}

// Clean, universal modern architectural typography
const ARCH_FONT = "var(--font-inter, 'Manrope', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif)";

export default function FloorPlansExplorer({
  building,
  onOpenConsultation,
}: FloorPlansExplorerProps) {
  const { lang } = useLang();
  const rawPlans = useMemo(() => getBuildingFloorPlans(building), [building]);
  const [activePlanId, setActivePlanId] = useState<string>(rawPlans[0]?.id || "");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [blueprintTheme, setBlueprintTheme] = useState<"dark" | "light">("dark");

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

  const isDark = blueprintTheme === "dark";

  // High-Contrast Palette specifically calibrated for maximum readability & elegance
  const themeColors = {
    bg: isDark ? "#0A121E" : "#FFFFFF",
    gridStroke: isDark ? "#0284C7" : "#CBD5E1",
    gridOpacity: isDark ? "0.14" : "0.55",
    envelopeStroke: isDark ? "#38BDF8" : "#0F172A",
    envelopeFill: isDark ? "#070E18" : "#FAFAFA",
    partitionStroke: isDark ? "#60A5FA" : "#334155",
    doorSwing: isDark ? "#38BDF8" : "#0284C7",
    // Pure, radiant contrast for text — NO MORE MURKY GREY OR UNREADABLE MONOSPACE
    titleFill: isDark ? "#FFFFFF" : "#0F172A",
    metricFill: isDark ? "#38BDF8" : "#0284C7",
    subMetricFill: isDark ? "#FBBF24" : "#B45309",
    furnitureStroke: isDark ? "#64748B" : "#94A3B8",
    furnitureFill: isDark ? "#0F172A" : "#F1F5F9",
    furnitureAccent: isDark ? "#1E293B" : "#E2E8F0",
    furnitureText: isDark ? "#E2E8F0" : "#334155",
    dimensionLine: isDark ? "#94A3B8" : "#475569",
    dimensionText: isDark ? "#F8FAFC" : "#0F172A",
    compassBg: isDark ? "#0F172A" : "#F8FAFC",
    compassStroke: isDark ? "#38BDF8" : "#0F172A",
    compassText: isDark ? "#FFFFFF" : "#0F172A",
    poolWater: isDark ? "#0284C7" : "#38BDF8",
    poolOpacity: isDark ? "0.25" : "0.20",
  };

  // RENDER DYNAMIC TYPOLOGY SCHEMATICS (1BR, 2BR, 3BR, PENTHOUSE)
  const renderTypologyContent = (plan: FloorPlan) => {
    const type = plan.blueprintType || "1br";

    switch (type) {
      // ==========================================
      // 1-BEDROOM EXECUTIVE SUITE
      // ==========================================
      case "1br":
        return (
          <>
            {/* 1. Master Bedroom Suite (Top-Left) */}
            <rect x="35" y="30" width="370" height="280" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="60" y="68" fill={themeColors.titleFill} fontSize="14" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgMasterBed}
            </text>
            <text x="60" y="88" fill={themeColors.metricFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.38)} SQ.FT • {Math.round(plan.internalAreaSqFt * 0.38 * 0.0929)} M²
            </text>

            {/* King Bed */}
            <g transform="translate(155, 120)">
              <rect x="0" y="0" width="145" height="130" rx="6" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <line x1="72" y1="0" x2="72" y2="130" stroke={themeColors.furnitureStroke} strokeWidth="1" strokeDasharray="4 3" />
              <rect x="14" y="10" width="48" height="26" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="82" y="10" width="48" height="26" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <path d="M 0 52 Q 72 62 145 52" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill="none" />
              <rect x="-32" y="10" width="26" height="32" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureFill} />
              <rect x="151" y="10" width="26" height="32" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureFill} />
            </g>

            {/* Wardrobe */}
            <rect x="60" y="120" width="60" height="135" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" strokeDasharray="4 3" fill={themeColors.furnitureFill} />
            <text x="90" y="190" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" letterSpacing="0.08em" textAnchor="middle" transform="rotate(-90 90 190)">
              {labels.svgWardrobe}
            </text>

            {/* Bedroom Door */}
            <path d="M 345 310 A 40 40 0 0 1 385 270" stroke={themeColors.doorSwing} strokeWidth="1.2" strokeDasharray="4 3" fill="none" />
            <line x1="345" y1="310" x2="385" y2="310" stroke={themeColors.doorSwing} strokeWidth="1.8" />

            {/* 2. En-Suite Master Bath (Bottom-Left) */}
            <rect x="35" y="310" width="370" height="195" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="60" y="342" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgBath}
            </text>
            <text x="60" y="360" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.12)} SQ.FT • {Math.round(plan.internalAreaSqFt * 0.12 * 0.0929)} M²
            </text>
            <g transform="translate(60, 380)">
              <rect x="0" y="0" width="115" height="58" rx="14" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <ellipse cx="57" cy="29" rx="46" ry="20" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="20" cy="29" r="3" fill={themeColors.metricFill} />
            </g>
            <g transform="translate(195, 380)">
              <rect x="0" y="0" width="180" height="44" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <ellipse cx="45" cy="22" rx="24" ry="14" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <ellipse cx="135" cy="22" rx="24" ry="14" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            <rect x="250" y="438" width="125" height="54" stroke={themeColors.metricFill} strokeWidth="1.2" strokeDasharray="4 2" fill={themeColors.furnitureAccent} />
            <text x="312" y="470" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.06em" textAnchor="middle">
              {labels.svgShower}
            </text>

            {/* 3. Kitchen Pavilion (Top-Center) */}
            <rect x="405" y="30" width="230" height="220" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="430" y="68" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgKitchen}
            </text>
            <text x="430" y="88" fill={themeColors.subMetricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {plan.roomsBreakdown.kitchenType}
            </text>
            <g transform="translate(430, 110)">
              <rect x="0" y="0" width="170" height="58" rx="5" stroke={themeColors.subMetricFill} strokeWidth="1.4" fill={themeColors.furnitureFill} />
              <circle cx="38" cy="29" r="13" stroke={themeColors.subMetricFill} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="85" cy="29" r="13" stroke={themeColors.subMetricFill} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="132" cy="29" r="10" stroke={themeColors.subMetricFill} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="38" cy="80" r="8" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="85" cy="80" r="8" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="132" cy="80" r="8" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            <text x="515" y="218" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" letterSpacing="0.06em" textAnchor="middle">
              {labels.svgIsland}
            </text>

            {/* 4. Balcony Loggia (Top-Right) */}
            <rect x="635" y="30" width="250" height="220" stroke={themeColors.partitionStroke} strokeWidth="2" strokeDasharray="6 4" fill={themeColors.metricFill} fillOpacity={isDark ? "0.05" : "0.08"} />
            <text x="655" y="68" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgBalcony}
            </text>
            <text x="655" y="88" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {plan.balconyAreaSqFt} SQ.FT • {Math.round(plan.balconyAreaSqFt * 0.0929)} M²
            </text>
            <g transform="translate(660, 115)">
              <rect x="0" y="0" width="160" height="65" rx="8" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="80" y="38" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" letterSpacing="0.06em" textAnchor="middle">
                {labels.svgLounge}
              </text>
            </g>

            {/* 5. Main Living & Dining (Bottom Right) */}
            <rect x="405" y="250" width="480" height="255" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="430" y="280" fill={themeColors.titleFill} fontSize="14" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgLiving}
            </text>
            <text x="430" y="300" fill={themeColors.metricFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.50)} SQ.FT • {plan.ceilingHeightMeters}m {labels.svgCeilingHeight}
            </text>
            <g transform="translate(435, 335)">
              <rect x="15" y="15" width="125" height="65" rx="8" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="77" y="52" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" letterSpacing="0.06em" textAnchor="middle">
                {labels.svgDining}
              </text>
              <rect x="35" y="-2" width="26" height="12" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="95" y="-2" width="26" height="12" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="35" y="85" width="26" height="12" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="95" y="85" width="26" height="12" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            <g transform="translate(630, 325)">
              <path d="M 15 0 L 180 0 L 180 125 L 140 125 L 140 42 L 15 42 Z" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="45" y="60" width="75" height="42" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
          </>
        );

      // ==========================================
      // 2-BEDROOM EXECUTIVE CORNER RESIDENCE
      // ==========================================
      case "2br":
        return (
          <>
            {/* Primary Master Suite (Top-Left) */}
            <rect x="35" y="30" width="310" height="270" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="55" y="65" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgMasterBed}
            </text>
            <text x="55" y="83" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.28)} SQ.FT • EN-SUITE
            </text>
            {/* Master Bed */}
            <g transform="translate(130, 110)">
              <rect x="0" y="0" width="130" height="120" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="12" y="8" width="44" height="24" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="74" y="8" width="44" height="24" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <path d="M 0 48 Q 65 56 130 48" stroke={themeColors.furnitureStroke} strokeWidth="1" fill="none" />
              <rect x="-26" y="8" width="22" height="28" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureFill} />
              <rect x="134" y="8" width="22" height="28" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureFill} />
            </g>
            {/* Dressing Walk-in */}
            <rect x="55" y="110" width="55" height="120" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" strokeDasharray="3 3" fill={themeColors.furnitureFill} />
            <text x="82" y="170" fill={themeColors.furnitureText} fontSize="9" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle" transform="rotate(-90 82 170)">
              {labels.svgWardrobe}
            </text>

            {/* Master Bath (Bottom-Left) */}
            <rect x="35" y="300" width="310" height="205" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="55" y="328" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgBath}
            </text>
            <g transform="translate(55, 345)">
              <rect x="0" y="0" width="105" height="50" rx="12" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <ellipse cx="52" cy="25" rx="42" ry="18" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            <g transform="translate(175, 345)">
              <rect x="0" y="0" width="150" height="40" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <ellipse cx="38" cy="20" rx="20" ry="12" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <ellipse cx="112" cy="20" rx="20" ry="12" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            <rect x="200" y="405" width="125" height="50" stroke={themeColors.metricFill} strokeWidth="1" strokeDasharray="4 2" fill={themeColors.furnitureAccent} />
            <text x="262" y="435" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
              {labels.svgShower}
            </text>

            {/* Foyer & Powder Room (Center-Bottom) */}
            <rect x="345" y="330" width="180" height="175" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="365" y="358" fill={themeColors.titleFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgFoyer}
            </text>
            <rect x="365" y="380" width="140" height="70" rx="4" stroke={themeColors.subMetricFill} strokeWidth="1" strokeDasharray="3 3" fill={themeColors.furnitureFill} />
            <text x="435" y="420" fill={themeColors.subMetricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
              WC / POWDER ROOM
            </text>

            {/* Bedroom 2 (Center-Top) */}
            <rect x="345" y="30" width="250" height="300" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="365" y="65" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgBed2}
            </text>
            <text x="365" y="83" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.22)} SQ.FT
            </text>
            {/* Queen Bed */}
            <g transform="translate(385, 120)">
              <rect x="0" y="0" width="120" height="120" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="12" y="8" width="40" height="24" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="68" y="8" width="40" height="24" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <path d="M 0 45 Q 60 52 120 45" stroke={themeColors.furnitureStroke} strokeWidth="1" fill="none" />
            </g>
            <rect x="520" y="120" width="60" height="110" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" strokeDasharray="3 3" fill={themeColors.furnitureFill} />
            <text x="550" y="175" fill={themeColors.furnitureText} fontSize="9" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle" transform="rotate(-90 550 175)">
              {labels.svgWardrobe}
            </text>

            {/* Living, Dining & Gourmet Kitchen (Right 325px) */}
            <rect x="595" y="160" width="290" height="345" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="615" y="195" fill={themeColors.titleFill} fontSize="14" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgLiving}
            </text>
            <text x="615" y="215" fill={themeColors.metricFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.42)} SQ.FT • CORNER DUAL-ASPECT
            </text>
            {/* Kitchen & Island */}
            <g transform="translate(615, 235)">
              <rect x="0" y="0" width="140" height="45" rx="4" stroke={themeColors.subMetricFill} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <circle cx="35" cy="22" r="10" stroke={themeColors.subMetricFill} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="70" cy="22" r="10" stroke={themeColors.subMetricFill} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="105" cy="22" r="8" stroke={themeColors.subMetricFill} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            {/* Dining Table */}
            <g transform="translate(615, 305)">
              <rect x="0" y="0" width="115" height="55" rx="6" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="57" y="32" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                {labels.svgDining}
              </text>
              <rect x="15" y="-8" width="22" height="8" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="75" y="-8" width="22" height="8" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="15" y="55" width="22" height="8" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="75" y="55" width="22" height="8" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            {/* Corner Sofa */}
            <g transform="translate(740, 340)">
              <path d="M 0 0 L 120 0 L 120 100 L 85 100 L 85 35 L 0 35 Z" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
            </g>

            {/* Wrap-Around Corner Sky Terrace (Top-Right) */}
            <rect x="595" y="30" width="290" height="130" stroke={themeColors.partitionStroke} strokeWidth="2" strokeDasharray="6 4" fill={themeColors.metricFill} fillOpacity={isDark ? "0.06" : "0.08"} />
            <text x="615" y="65" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgBalcony}
            </text>
            <text x="615" y="85" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {plan.balconyAreaSqFt} SQ.FT • CORNER WRAP
            </text>
            <g transform="translate(720, 75)">
              <rect x="0" y="0" width="145" height="50" rx="6" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="72" y="30" fill={themeColors.furnitureText} fontSize="9" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                {labels.svgLounge}
              </text>
            </g>
          </>
        );

      // ==========================================
      // 3-BEDROOM SKY RESIDENCE
      // ==========================================
      case "3br":
        return (
          <>
            {/* Master Presidential Suite (Top-Left 270 x 240) */}
            <rect x="35" y="30" width="265" height="240" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="55" y="60" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgMasterBed}
            </text>
            <text x="55" y="78" fill={themeColors.metricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.24)} SQ.FT
            </text>
            <g transform="translate(100, 95)">
              <rect x="0" y="0" width="120" height="115" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="12" y="8" width="40" height="22" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="68" y="8" width="40" height="22" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>

            {/* Bedroom 2 (Bottom-Left 265 x 235) */}
            <rect x="35" y="270" width="265" height="235" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="55" y="298" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgBed2}
            </text>
            <text x="55" y="315" fill={themeColors.metricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.16)} SQ.FT
            </text>
            <g transform="translate(100, 335)">
              <rect x="0" y="0" width="115" height="110" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="10" y="8" width="38" height="22" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="65" y="8" width="38" height="22" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>

            {/* Bedroom 3 & Maid Wing (Center-Left 230 x 475) */}
            <rect x="300" y="30" width="220" height="240" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="320" y="60" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgBed3}
            </text>
            <text x="320" y="78" fill={themeColors.metricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.15)} SQ.FT
            </text>
            <g transform="translate(340, 95)">
              <rect x="0" y="0" width="110" height="110" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="10" y="8" width="36" height="22" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="62" y="8" width="36" height="22" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>

            {/* Maid's Room & Wet Kitchen (Center-Bottom) */}
            <rect x="300" y="270" width="220" height="235" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="320" y="298" fill={themeColors.titleFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgMaid}
            </text>
            <rect x="320" y="315" width="110" height="60" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureFill} />
            <text x="375" y="350" fill={themeColors.furnitureText} fontSize="9" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
              SINGLE BED + WC
            </text>
            <rect x="320" y="390" width="180" height="75" rx="4" stroke={themeColors.subMetricFill} strokeWidth="1.2" fill={themeColors.furnitureFill} />
            <text x="410" y="430" fill={themeColors.subMetricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
              WET PREP KITCHEN
            </text>

            {/* Grand Living & Formal Dining Hall (Right 365px) */}
            <rect x="520" y="160" width="365" height="345" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="545" y="195" fill={themeColors.titleFill} fontSize="14" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgLiving}
            </text>
            <text x="545" y="215" fill={themeColors.metricFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.45)} SQ.FT • GRAND SALON
            </text>
            {/* Show Kitchen Island */}
            <g transform="translate(545, 235)">
              <rect x="0" y="0" width="160" height="50" rx="5" stroke={themeColors.subMetricFill} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="80" y="30" fill={themeColors.subMetricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                {labels.svgIsland}
              </text>
            </g>
            {/* 8-Seat Dining Table */}
            <g transform="translate(545, 310)">
              <rect x="0" y="0" width="140" height="65" rx="6" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="70" y="38" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                {labels.svgDining} (8 SEATS)
              </text>
            </g>
            {/* Grand Sectional Lounge */}
            <g transform="translate(710, 310)">
              <path d="M 0 0 L 150 0 L 150 140 L 105 140 L 105 45 L 0 45 Z" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
            </g>

            {/* Sky Horizon Terrace (Top-Right) */}
            <rect x="520" y="30" width="365" height="130" stroke={themeColors.partitionStroke} strokeWidth="2" strokeDasharray="6 4" fill={themeColors.metricFill} fillOpacity={isDark ? "0.06" : "0.08"} />
            <text x="545" y="62" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgBalcony}
            </text>
            <text x="545" y="80" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {plan.balconyAreaSqFt} SQ.FT • 180° SKY TERRACE
            </text>
            <g transform="translate(680, 70)">
              <rect x="0" y="0" width="180" height="50" rx="8" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="90" y="30" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                AL-FRESCO SKY LOUNGE
              </text>
            </g>
          </>
        );

      // ==========================================
      // GRAND SKY PENTHOUSE / DUPLEX
      // ==========================================
      case "penthouse":
        return (
          <>
            {/* VIP Private Elevator Foyer (Top-Left 260 x 140) */}
            <rect x="35" y="30" width="260" height="140" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="55" y="60" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgFoyer}
            </text>
            <g transform="translate(55, 75)">
              <rect x="0" y="0" width="90" height="55" rx="4" stroke={themeColors.subMetricFill} strokeWidth="1.5" fill={themeColors.furnitureFill} />
              <text x="45" y="32" fill={themeColors.subMetricFill} fontSize="9" fontFamily={ARCH_FONT} fontWeight="700" textAnchor="middle">
                VIP LIFT 1
              </text>
              <rect x="110" y="0" width="90" height="55" rx="4" stroke={themeColors.subMetricFill} strokeWidth="1.5" fill={themeColors.furnitureFill} />
              <text x="155" y="32" fill={themeColors.subMetricFill} fontSize="9" fontFamily={ARCH_FONT} fontWeight="700" textAnchor="middle">
                VIP LIFT 2
              </text>
            </g>

            {/* Presidential Master Wing (Bottom-Left 310 x 335) */}
            <rect x="35" y="170" width="310" height="335" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="55" y="200" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgMasterBed} • PRESIDENTIAL WING
            </text>
            <text x="55" y="220" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              HIS & HERS DRESSING • SPA SUITE
            </text>
            {/* Super King Bed */}
            <g transform="translate(110, 240)">
              <rect x="0" y="0" width="145" height="130" rx="6" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="15" y="10" width="48" height="26" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="80" y="10" width="48" height="26" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            {/* Jacuzzi Spa Bath */}
            <g transform="translate(55, 395)">
              <circle cx="50" cy="50" r="45" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <circle cx="50" cy="50" r="36" stroke={themeColors.metricFill} strokeWidth="1" fill={themeColors.poolWater} fillOpacity={themeColors.poolOpacity} />
              <text x="50" y="54" fill={themeColors.titleFill} fontSize="9" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                JACUZZI SPA
              </text>
            </g>

            {/* Executive Office & Suite 2 (Center 270px) */}
            <rect x="295" y="30" width="250" height="210" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="315" y="60" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgOffice}
            </text>
            <rect x="315" y="80" width="120" height="60" rx="6" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
            <text x="375" y="115" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
              EXECUTIVE DESK
            </text>

            {/* Guest Sky Suite 2 (Center-Bottom) */}
            <rect x="345" y="240" width="200" height="265" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="365" y="270" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgBed2}
            </text>
            <g transform="translate(375, 310)">
              <rect x="0" y="0" width="120" height="115" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="12" y="8" width="40" height="22" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="68" y="8" width="40" height="22" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>

            {/* Palatial Double-Height Grand Salon & 12-Seat Dining (Right 340px) */}
            <rect x="545" y="190" width="340" height="315" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x="565" y="222" fill={themeColors.titleFill} fontSize="14" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              PALATIAL DOUBLE-HEIGHT SALON
            </text>
            <text x="565" y="242" fill={themeColors.metricFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.48)} SQ.FT • 7M HIGH SOARING CEILING
            </text>
            {/* 12-Seat Dining Table */}
            <g transform="translate(565, 265)">
              <rect x="0" y="0" width="160" height="70" rx="8" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="80" y="40" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                {labels.svgDining} (12 SEATS)
              </text>
            </g>
            {/* Grand Sofa Array */}
            <g transform="translate(565, 360)">
              <path d="M 0 0 L 220 0 L 220 120 L 175 120 L 175 45 L 0 45 Z" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
            </g>

            {/* PRIVATE CANTILEVERED SKY PLUNGE POOL & SUN DECK (Top-Right 340 x 160) */}
            <rect x="545" y="30" width="340" height="160" stroke={themeColors.envelopeStroke} strokeWidth="2" strokeDasharray="6 4" fill={themeColors.metricFill} fillOpacity={isDark ? "0.06" : "0.08"} />
            <text x="565" y="58" fill={themeColors.subMetricFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              🏊 {labels.svgPool}
            </text>
            {/* The Pool Geometry with turquoise water fill */}
            <g transform="translate(565, 70)">
              <rect x="0" y="0" width="190" height="75" rx="8" stroke={themeColors.poolWater} strokeWidth="2" fill={themeColors.poolWater} fillOpacity={themeColors.poolOpacity} />
              {/* Pool Steps */}
              <line x1="20" y1="0" x2="20" y2="75" stroke={themeColors.poolWater} strokeWidth="1" strokeDasharray="3 2" />
              <line x1="40" y1="0" x2="40" y2="75" stroke={themeColors.poolWater} strokeWidth="1" strokeDasharray="3 2" />
              <text x="105" y="42" fill={themeColors.titleFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em" textAnchor="middle">
                INFINITY POOL • 8.5m x 3.5m
              </text>
            </g>
            {/* Sun Loungers */}
            <g transform="translate(775, 70)">
              <rect x="0" y="0" width="45" height="75" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureFill} />
              <rect x="52" y="0" width="45" height="75" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureFill} />
            </g>
          </>
        );
    }
  };

  // Render High-Resolution Architectural Blueprint with Crisp Modern Typography & Zero Enclosing Box Outlines
  const renderBlueprintSvg = (isLarge: boolean = false) => {
    return (
      <svg
        viewBox="0 0 920 540"
        className={`w-full select-none transition-transform duration-200 ${
          isLarge ? "h-full max-h-[82vh]" : "h-auto max-h-[480px]"
        }`}
        style={isLarge ? { transform: `scale(${zoomLevel})` } : undefined}
        fill="none"
      >
        {/* Architectural Drafting Grid */}
        <defs>
          <pattern
            id={`archGrid-${isLarge ? "lg" : "sm"}-${blueprintTheme}-${activePlan.blueprintType}`}
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 30 0 L 0 0 0 30"
              fill="none"
              stroke={themeColors.gridStroke}
              strokeWidth="0.6"
              strokeOpacity={themeColors.gridOpacity}
            />
          </pattern>
        </defs>
        <rect
          width="920"
          height="540"
          fill={themeColors.bg}
        />
        <rect
          width="920"
          height="540"
          fill={`url(#archGrid-${isLarge ? "lg" : "sm"}-${blueprintTheme}-${activePlan.blueprintType})`}
        />

        {/* Outer Heavy Structural Envelope Wall */}
        <rect
          x="35"
          y="30"
          width="850"
          height="475"
          rx="10"
          stroke={themeColors.envelopeStroke}
          strokeWidth="3"
          fill={themeColors.envelopeFill}
        />

        {/* Dynamic Typology Architecture (1BR, 2BR, 3BR, PENTHOUSE) */}
        {renderTypologyContent(activePlan)}

        {/* Compass Rose (Placed cleanly in dedicated bottom-right area with ZERO wall overlap) */}
        <g transform="translate(845, 465)">
          <circle
            cx="0"
            cy="0"
            r="18"
            stroke={themeColors.compassStroke}
            strokeWidth="1.2"
            fill={themeColors.compassBg}
          />
          <path d="M 0 -13 L 4 0 L 0 3 L -4 0 Z" fill={themeColors.compassStroke} />
          <text
            x="0"
            y="-5"
            fill={themeColors.compassText}
            fontSize="8"
            fontFamily={ARCH_FONT}
            fontWeight="700"
            textAnchor="middle"
          >
            N
          </text>
        </g>

        {/* Scale Metric Bar (Bottom-Left, High-Contrast Crisp Lines & Labels) */}
        <g transform="translate(60, 485)">
          <line x1="0" y1="0" x2="160" y2="0" stroke={themeColors.dimensionLine} strokeWidth="1.5" />
          <line x1="0" y1="-5" x2="0" y2="5" stroke={themeColors.dimensionLine} strokeWidth="1.5" />
          <line x1="80" y1="-3" x2="80" y2="3" stroke={themeColors.dimensionLine} strokeWidth="1.5" />
          <line x1="160" y1="-5" x2="160" y2="5" stroke={themeColors.dimensionLine} strokeWidth="1.5" />
          <text x="0" y="-7" fill={themeColors.dimensionText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600">0m</text>
          <text x="80" y="-7" fill={themeColors.dimensionText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">2.5m</text>
          <text x="160" y="-7" fill={themeColors.dimensionText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="end">5.0m</text>
        </g>

        {/* Dimensional Ticks across bottom width */}
        <g transform="translate(420, 485)">
          <text
            x="150"
            y="-6"
            fill={themeColors.dimensionText}
            fontSize="11"
            fontFamily={ARCH_FONT}
            fontWeight="600"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            {labels.svgDimensions}: {Math.round(Math.sqrt(activePlan.totalAreaSqM) * 1.35 * 10) / 10} m × {Math.round(Math.sqrt(activePlan.totalAreaSqM) * 0.75 * 10) / 10} m
          </text>
        </g>
      </svg>
    );
  };

  return (
    <section id="floor-plans" className="rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 lg:p-9 shadow-float-card space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F1F5F9] pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD7CA] text-[#8C6A48] text-xs font-sans font-bold uppercase tracking-wider">
            <span>📐</span>
            <span>{labels.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] font-heading">
            {labels.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] font-sans leading-relaxed max-w-3xl">
            {labels.sectionSubtitle(building.name)}
          </p>
        </div>
        <span className="text-xs font-sans font-semibold px-3 py-1.5 rounded-full bg-[#F8F9FA] text-[#64748B] border border-[#E2E8F0] self-start sm:self-auto shrink-0">
          {labels.cadRef}: {building.legacyId || building.id}-FP
        </span>
      </div>

      {/* Typology Selector Tabs (Clean Modern Sans Typography with breathing room) */}
      <div className="flex flex-wrap gap-2.5 pt-1">
        {plans.map((plan) => {
          const isActive = plan.id === activePlan.id;
          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setActivePlanId(plan.id)}
              className={`px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 cursor-pointer ${
                isActive
                  ? "bg-[#0F172A] text-white shadow-md scale-[1.01]"
                  : "bg-[#FAF8F5] text-[#57534E] hover:bg-[#EFECE4] hover:text-[#1C1917] border border-[#DDD7CA]"
              }`}
            >
              <span>{plan.name}</span>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-md font-sans font-bold ${
                  isActive
                    ? "bg-amber-400 text-slate-950"
                    : "bg-white text-[#8C6A48] border border-[#DDD7CA]"
                }`}
              >
                {plan.totalAreaSqFt} sq.ft
              </span>
            </button>
          );
        })}
      </div>

      {/* Blueprint Drawing Viewport & Controls */}
      <div className="space-y-4">
        {/* Viewport Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F8FAFC] border border-[#E2E8F0] p-3.5 rounded-2xl">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-sans font-bold text-[#0F172A]">
              {activePlan.name} • {labels.scaleLabel}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Theme Switcher: Dark CAD vs White Architectural Paper */}
            <div className="flex rounded-xl bg-white border border-[#CBD5E1] p-0.5 text-xs font-sans font-semibold">
              <button
                type="button"
                onClick={() => setBlueprintTheme("dark")}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  blueprintTheme === "dark"
                    ? "bg-[#0F172A] text-white shadow-xs"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                🌙 {labels.themeDark}
              </button>
              <button
                type="button"
                onClick={() => setBlueprintTheme("light")}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  blueprintTheme === "light"
                    ? "bg-[#0F172A] text-white shadow-xs"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                ☀️ {labels.themeLight}
              </button>
            </div>

            {/* Fullscreen Button */}
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-sans font-semibold transition-all shadow-xs cursor-pointer"
            >
              <span>🔍</span>
              <span>{labels.fullscreenBtn}</span>
            </button>
          </div>
        </div>

        {/* Blueprint Canvas Box */}
        <div
          onClick={() => setIsFullscreen(true)}
          className={`relative rounded-2xl overflow-hidden border cursor-zoom-in transition-all group ${
            blueprintTheme === "dark"
              ? "border-[#1E293B] bg-[#0A121E] shadow-2xl"
              : "border-[#CBD5E1] bg-white shadow-md"
          }`}
          title={labels.clickToEnlarge}
        >
          {renderBlueprintSvg(false)}

          <div className="absolute bottom-3.5 right-3.5 px-3.5 py-2 rounded-xl bg-black/75 backdrop-blur-md text-white text-xs font-sans font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 pointer-events-none">
            <span>🔍</span>
            <span>{labels.clickToEnlarge}</span>
          </div>
        </div>
      </div>

      {/* Specifications & Room Breakdown Cards with Room to Breathe */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1.5">
            <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#78716C]">
              {labels.totalArea}
            </div>
            <div className="text-lg sm:text-xl font-bold font-sans text-[#1C1917]">
              {activePlan.totalAreaSqFt} sq.ft
            </div>
            <div className="text-xs text-[#78716C] font-sans">
              {activePlan.totalAreaSqM} m²
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1.5">
            <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#78716C]">
              {labels.livingArea}
            </div>
            <div className="text-lg sm:text-xl font-bold font-sans text-[#059669]">
              {activePlan.internalAreaSqFt} sq.ft
            </div>
            <div className="text-xs text-[#78716C] font-sans">
              {activePlan.efficiencyRatio}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1.5">
            <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#78716C]">
              {labels.balconyArea}
            </div>
            <div className="text-lg sm:text-xl font-bold font-sans text-[#1C1917]">
              {activePlan.balconyAreaSqFt} sq.ft
            </div>
            <div className="text-xs text-[#78716C] font-sans">
              {Math.round((activePlan.balconyAreaSqFt / activePlan.totalAreaSqFt) * 100)}% {labels.ofTotal}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1.5">
            <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#78716C]">
              {labels.clearCeiling}
            </div>
            <div className="text-lg sm:text-xl font-bold font-sans text-[#8C6A48]">
              {activePlan.ceilingHeightMeters} m
            </div>
            <div className="text-xs text-[#78716C] font-sans">
              {labels.floorToCeiling}
            </div>
          </div>
        </div>

        {/* Room Composition Details */}
        <div className="space-y-4">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-3.5 text-xs sm:text-sm">
            <div className="flex items-center justify-between border-b border-[#DDD7CA] pb-2.5">
              <span className="font-bold text-[#1C1917] font-sans text-sm">
                {labels.roomsTitle}
              </span>
              <span className="text-xs font-sans font-bold text-[#8C6A48] uppercase">
                {activePlan.typeTag}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 font-sans">
              <div className="p-3 bg-white rounded-xl border border-[#EFECE4]">
                <div className="text-xs text-[#78716C]">🛏️ {labels.bedroomsLabel}</div>
                <div className="text-base font-bold text-[#1C1917] mt-0.5">
                  {activePlan.roomsBreakdown.bedrooms}
                </div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#EFECE4]">
                <div className="text-xs text-[#78716C]">🚿 {labels.bathroomsLabel}</div>
                <div className="text-base font-bold text-[#1C1917] mt-0.5">
                  {activePlan.roomsBreakdown.bathrooms}
                </div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#EFECE4]">
                <div className="text-xs text-[#78716C]">🧹 {labels.maidRoomLabel}</div>
                <div className="text-xs font-bold text-[#1C1917] mt-1">
                  {activePlan.roomsBreakdown.maidRoom ? labels.yes : labels.no}
                </div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#EFECE4]">
                <div className="text-xs text-[#78716C]">🚽 {labels.powderRoomLabel}</div>
                <div className="text-xs font-bold text-[#1C1917] mt-1">
                  {activePlan.roomsBreakdown.powderRoom ? labels.yes : labels.no}
                </div>
              </div>
            </div>

            <div className="pt-1 text-[#57534E] font-sans">
              <span className="text-[#78716C] font-medium">{labels.kitchenTypeLabel}:</span>{" "}
              <strong className="text-[#1C1917]">{activePlan.roomsBreakdown.kitchenType}</strong>
            </div>

            <div className="pt-1 text-[#57534E] font-sans">
              <span className="text-[#78716C] font-medium">📍 {labels.viewAspectLabel}:</span>{" "}
              <strong className="text-[#8C6A48]">{activePlan.viewOrientation}</strong>
            </div>
          </div>

          {/* Architectural Features List */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-3 font-sans">
            <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              {labels.engineeringHighlights}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#57534E]">
              {activePlan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#8C6A48]/15 text-[#8C6A48] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FULLSCREEN HIGH-RESOLUTION LIGHTBOX MODAL */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-[#070F1E]/95 backdrop-blur-xl flex flex-col p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Lightbox Navigation Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-2">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                  {activePlan.name}
                </h3>
                <div className="text-xs sm:text-sm font-sans text-cyan-300 font-medium">
                  {activePlan.totalAreaSqFt} SQ.FT ({activePlan.totalAreaSqM} M²) • {labels.scaleLabel}
                </div>
              </div>
            </div>

            {/* Lightbox Controls: Theme + Zoom + Close */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle inside Modal */}
              <div className="flex rounded-lg bg-white/10 p-0.5 text-xs font-sans font-semibold">
                <button
                  type="button"
                  onClick={() => setBlueprintTheme("dark")}
                  className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    blueprintTheme === "dark" ? "bg-white text-slate-950 shadow-xs" : "text-white/70 hover:text-white"
                  }`}
                >
                  🌙 {labels.themeDark}
                </button>
                <button
                  type="button"
                  onClick={() => setBlueprintTheme("light")}
                  className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    blueprintTheme === "light" ? "bg-white text-slate-950 shadow-xs" : "text-white/70 hover:text-white"
                  }`}
                >
                  ☀️ {labels.themeLight}
                </button>
              </div>

              {/* Zoom Buttons */}
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-bold transition-colors cursor-pointer"
                title={labels.zoomIn}
              >
                + {labels.zoomIn}
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-bold transition-colors cursor-pointer"
                title={labels.zoomOut}
              >
                - {labels.zoomOut}
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel(1)}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-bold transition-colors cursor-pointer"
                title={labels.resetZoom}
              >
                {labels.resetZoom}
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => {
                  setIsFullscreen(false);
                  setZoomLevel(1);
                }}
                className="w-10 h-10 rounded-xl bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 flex items-center justify-center font-bold text-lg transition-colors ml-2 cursor-pointer"
                title={labels.closeFullscreen}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Lightbox Canvas Area */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4">
            <div className="w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden border border-white/10">
              {renderBlueprintSvg(true)}
            </div>
          </div>

          {/* Lightbox Footer Bar */}
          <div className="flex justify-between items-center text-xs font-sans text-slate-400 border-t border-white/10 pt-3">
            <span>{building.name} • {labels.cadRef}: {building.legacyId || building.id}-FP</span>
            <span>ESC: {labels.closeFullscreen}</span>
          </div>
        </div>
      )}
    </section>
  );
}
