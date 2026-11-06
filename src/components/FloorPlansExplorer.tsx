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

export type ArchitecturalStyle =
  | "foster"
  | "som-tripartite"
  | "som-twisted"
  | "zaha-hadid"
  | "automotive"
  | "coastal-resort"
  | "emaar-grand"
  | "highrise-core";

export function getBuildingArchStyle(building: Building): ArchitecturalStyle {
  const bid = building.id.toLowerCase();
  const arch = (building.architectFirm || building.architect || "").toLowerCase();

  if (bid.includes("index") || bid.includes("vela") || bid.includes("creek-waters") || arch.includes("foster")) {
    return "foster";
  }
  if (bid.includes("cayan")) {
    return "som-twisted";
  }
  if (bid.includes("burj-khalifa") || bid.includes("sky-view")) {
    return "som-tripartite";
  }
  if (bid.includes("opus") || arch.includes("zaha hadid")) {
    return "zaha-hadid";
  }
  if (bid.includes("bugatti") || bid.includes("mercedes") || bid.includes("jacob")) {
    return "automotive";
  }
  if (
    bid.includes("burj-al-arab") ||
    bid.includes("atlantis") ||
    bid.includes("one-palm") ||
    bid.includes("palm-tower") ||
    bid.includes("address-beach")
  ) {
    return "coastal-resort";
  }
  if (bid.includes("il-primo") || bid.includes("address-downtown") || bid.includes("creek-residences")) {
    return "emaar-grand";
  }
  return "highrise-core";
}

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
  const archStyle = useMemo(() => getBuildingArchStyle(building), [building]);

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
    concreteFill: isDark ? "#1E293B" : "#E2E8F0",
  };

  // Render Structural Specifics For Each of the 8 Architectural Styles
  const renderTowerStructuralElements = () => {
    switch (archStyle) {
      case "foster":
        return (
          <>
            {/* Foster + Partners Monumental Concrete Shear Buttress Fin (East/West Solar Shield) */}
            <rect
              x="35"
              y="30"
              width="30"
              height="475"
              fill={`url(#concreteHatch-${blueprintTheme})`}
              stroke={themeColors.envelopeStroke}
              strokeWidth="2"
            />
            <text
              x="50"
              y="268"
              fill={themeColors.subMetricFill}
              fontSize="8"
              fontFamily={ARCH_FONT}
              fontWeight="700"
              letterSpacing="0.12em"
              textAnchor="middle"
              transform="rotate(-90 50 268)"
            >
              {labels.svgFosterButtress}
            </text>
            {/* Foster Aerodynamic Brise-Soleil Sunshades on South Facade */}
            <g transform="translate(75, 502)">
              <line x1="0" y1="0" x2="520" y2="0" stroke={themeColors.subMetricFill} strokeWidth="2.5" strokeDasharray="8 4" />
              <text x="260" y="11" fill={themeColors.subMetricFill} fontSize="7" fontFamily={ARCH_FONT} fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
                {labels.svgBriseSoleil}
              </text>
            </g>
          </>
        );

      case "som-tripartite":
        return (
          <>
            {/* SOM Central Hexagonal Core Segment */}
            <polygon
              points="35,160 85,120 85,380 35,340"
              fill={`url(#concreteHatch-${blueprintTheme})`}
              stroke={themeColors.envelopeStroke}
              strokeWidth="2"
            />
            <text
              x="60"
              y="250"
              fill={themeColors.subMetricFill}
              fontSize="7.5"
              fontFamily={ARCH_FONT}
              fontWeight="700"
              letterSpacing="0.1em"
              textAnchor="middle"
              transform="rotate(-90 60 250)"
            >
              {labels.svgSomCore}
            </text>
            {/* SOM Stepped Aerodynamic Setback Lines */}
            <path
              d="M 850 30 L 885 80 L 885 425 L 850 505"
              stroke={themeColors.subMetricFill}
              strokeWidth="2"
              strokeDasharray="6 3"
              fill="none"
            />
          </>
        );

      case "som-twisted":
        return (
          <>
            {/* SOM 90° Rotated Helical Column Points */}
            <g transform="translate(45, 45)">
              <circle cx="0" cy="0" r="10" stroke={themeColors.subMetricFill} strokeWidth="2" fill={themeColors.furnitureFill} />
              <circle cx="0" cy="210" r="10" stroke={themeColors.subMetricFill} strokeWidth="2" fill={themeColors.furnitureFill} />
              <circle cx="0" cy="420" r="10" stroke={themeColors.subMetricFill} strokeWidth="2" fill={themeColors.furnitureFill} />
              <line x1="0" y1="0" x2="15" y2="420" stroke={themeColors.subMetricFill} strokeWidth="1" strokeDasharray="5 3" />
            </g>
            <text
              x="50"
              y="260"
              fill={themeColors.subMetricFill}
              fontSize="7"
              fontFamily={ARCH_FONT}
              fontWeight="700"
              letterSpacing="0.08em"
              textAnchor="middle"
              transform="rotate(-90 50 260)"
            >
              {labels.svgTwistedCol}
            </text>
          </>
        );

      case "zaha-hadid":
        return (
          <>
            {/* ZHA Carved Central Void Organic Curve */}
            <path
              d="M 35 30 Q 110 260 35 505"
              stroke={themeColors.subMetricFill}
              strokeWidth="2.5"
              strokeDasharray="6 3"
              fill={themeColors.metricFill}
              fillOpacity={isDark ? "0.08" : "0.05"}
            />
            <text
              x="62"
              y="268"
              fill={themeColors.subMetricFill}
              fontSize="7.5"
              fontFamily={ARCH_FONT}
              fontWeight="700"
              letterSpacing="0.08em"
              textAnchor="middle"
              transform="rotate(-90 62 268)"
            >
              {labels.svgZahaVoid}
            </text>
          </>
        );

      case "automotive":
        return (
          <>
            {/* Private Car Lift Display Gallery on Left Flank */}
            <rect
              x="35"
              y="160"
              width="45"
              height="180"
              rx="6"
              stroke={themeColors.subMetricFill}
              strokeWidth="1.5"
              fill={themeColors.furnitureFill}
            />
            <text
              x="57"
              y="250"
              fill={themeColors.subMetricFill}
              fontSize="7"
              fontFamily={ARCH_FONT}
              fontWeight="700"
              letterSpacing="0.08em"
              textAnchor="middle"
              transform="rotate(-90 57 250)"
            >
              {labels.svgCarLift}
            </text>
          </>
        );

      case "coastal-resort":
        return (
          <>
            {/* Prime Oceanfront Panoramic Glazing Line along Right Facade */}
            <g transform="translate(865, 30)">
              <line x1="0" y1="0" x2="0" y2="475" stroke={themeColors.metricFill} strokeWidth="3" strokeDasharray="8 4" />
              <text
                x="12"
                y="240"
                fill={themeColors.metricFill}
                fontSize="7"
                fontFamily={ARCH_FONT}
                fontWeight="700"
                letterSpacing="0.1em"
                textAnchor="middle"
                transform="rotate(90 12 240)"
              >
                {labels.svgOceanFront}
              </text>
            </g>
          </>
        );

      case "emaar-grand":
      case "highrise-core":
      default:
        return (
          <>
            {/* Central Elevator & MEP Shaft Core on Left/Center Flank */}
            <rect
              x="35"
              y="180"
              width="35"
              height="145"
              rx="4"
              stroke={themeColors.dimensionLine}
              strokeWidth="1.2"
              fill={themeColors.furnitureFill}
            />
            <text
              x="52"
              y="252"
              fill={themeColors.furnitureText}
              fontSize="7"
              fontFamily={ARCH_FONT}
              fontWeight="700"
              letterSpacing="0.08em"
              textAnchor="middle"
              transform="rotate(-90 52 252)"
            >
              {labels.svgServiceCore}
            </text>
          </>
        );
    }
  };

  // Render Dynamic Typology Schematics (1BR, 2BR, 3BR, Penthouse)
  const renderTypologyContent = (plan: FloorPlan) => {
    const type = plan.blueprintType || "1br";
    const leftOffset = archStyle === "foster" ? 65 : archStyle === "som-tripartite" || archStyle === "automotive" ? 80 : 70;

    switch (type) {
      // ==========================================
      // 1-BEDROOM EXECUTIVE SUITE
      // ==========================================
      case "1br":
        return (
          <>
            {/* 1. Master Bedroom Suite (Top-Left) */}
            <rect x={leftOffset} y="30" width="340" height="270" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 20} y="68" fill={themeColors.titleFill} fontSize="14" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgMasterBed}
            </text>
            <text x={leftOffset + 20} y="88" fill={themeColors.metricFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.38)} SQ.FT • {Math.round(plan.internalAreaSqFt * 0.38 * 0.0929)} M²
            </text>

            {/* King Bed */}
            <g transform={`translate(${leftOffset + 115}, 115)`}>
              <rect x="0" y="0" width="140" height="125" rx="6" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <line x1="70" y1="0" x2="70" y2="125" stroke={themeColors.furnitureStroke} strokeWidth="1" strokeDasharray="4 3" />
              <rect x="14" y="10" width="46" height="24" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="80" y="10" width="46" height="24" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <path d="M 0 50 Q 70 60 140 50" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill="none" />
              <rect x="-30" y="10" width="24" height="30" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureFill} />
              <rect x="146" y="10" width="24" height="30" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureFill} />
            </g>

            {/* Wardrobe */}
            <rect x={leftOffset + 20} y="115" width="55" height="125" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" strokeDasharray="4 3" fill={themeColors.furnitureFill} />
            <text x={leftOffset + 47} y="180" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" letterSpacing="0.08em" textAnchor="middle" transform={`rotate(-90 ${leftOffset + 47} 180)`}>
              {labels.svgWardrobe}
            </text>

            {/* Bedroom Door */}
            <path d={`M ${leftOffset + 300} 300 A 40 40 0 0 1 ${leftOffset + 340} 260`} stroke={themeColors.doorSwing} strokeWidth="1.2" strokeDasharray="4 3" fill="none" />
            <line x1={leftOffset + 300} y1="300" x2={leftOffset + 340} y2="300" stroke={themeColors.doorSwing} strokeWidth="1.8" />

            {/* 2. En-Suite Master Bath (Bottom-Left) */}
            <rect x={leftOffset} y="300" width="340" height="205" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 20} y="330" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgBath}
            </text>
            <text x={leftOffset + 20} y="348" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.12)} SQ.FT • {Math.round(plan.internalAreaSqFt * 0.12 * 0.0929)} M²
            </text>
            <g transform={`translate(${leftOffset + 20}, 365)`}>
              <rect x="0" y="0" width="110" height="55" rx="14" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <ellipse cx="55" cy="27" rx="44" ry="19" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="20" cy="27" r="3" fill={themeColors.metricFill} />
            </g>
            <g transform={`translate(${leftOffset + 150}, 365)`}>
              <rect x="0" y="0" width="165" height="42" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <ellipse cx="40" cy="21" rx="22" ry="13" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <ellipse cx="125" cy="21" rx="22" ry="13" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            <rect x={leftOffset + 200} y="420" width="115" height="50" stroke={themeColors.metricFill} strokeWidth="1.2" strokeDasharray="4 2" fill={themeColors.furnitureAccent} />
            <text x={leftOffset + 257} y="450" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.06em" textAnchor="middle">
              {labels.svgShower}
            </text>

            {/* 3. Kitchen Pavilion (Top-Center) */}
            <rect x={leftOffset + 340} y="30" width="220" height="210" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 360} y="68" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgKitchen}
            </text>
            <text x={leftOffset + 360} y="88" fill={themeColors.subMetricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {plan.roomsBreakdown.kitchenType}
            </text>
            <g transform={`translate(${leftOffset + 360}, 105)`}>
              <rect x="0" y="0" width="165" height="55" rx="5" stroke={themeColors.subMetricFill} strokeWidth="1.4" fill={themeColors.furnitureFill} />
              <circle cx="36" cy="27" r="12" stroke={themeColors.subMetricFill} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="82" cy="27" r="12" stroke={themeColors.subMetricFill} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="128" cy="27" r="9" stroke={themeColors.subMetricFill} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="36" cy="75" r="7" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="82" cy="75" r="7" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="128" cy="75" r="7" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            <text x={leftOffset + 442} y="208" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" letterSpacing="0.06em" textAnchor="middle">
              {labels.svgIsland}
            </text>

            {/* 4. Balcony Loggia (Top-Right) */}
            <rect x={leftOffset + 560} y="30" width="250" height="210" stroke={themeColors.partitionStroke} strokeWidth="2" strokeDasharray="6 4" fill={themeColors.metricFill} fillOpacity={isDark ? "0.05" : "0.08"} />
            <text x={leftOffset + 580} y="68" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgBalcony}
            </text>
            <text x={leftOffset + 580} y="88" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {plan.balconyAreaSqFt} SQ.FT • {Math.round(plan.balconyAreaSqFt * 0.0929)} M²
            </text>
            <g transform={`translate(${leftOffset + 590}, 110)`}>
              <rect x="0" y="0" width="160" height="60" rx="8" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="80" y="35" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" letterSpacing="0.06em" textAnchor="middle">
                {labels.svgLounge}
              </text>
            </g>

            {/* 5. Main Living & Dining (Bottom Right) */}
            <rect x={leftOffset + 340} y="240" width="470" height="265" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 365} y="270" fill={themeColors.titleFill} fontSize="14" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgLiving}
            </text>
            <text x={leftOffset + 365} y="290" fill={themeColors.metricFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.50)} SQ.FT • {plan.ceilingHeightMeters}m {labels.svgCeilingHeight}
            </text>
            <g transform={`translate(${leftOffset + 365}, 320)`}>
              <rect x="15" y="15" width="120" height="60" rx="8" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="75" y="50" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" letterSpacing="0.06em" textAnchor="middle">
                {labels.svgDining}
              </text>
              <rect x="35" y="-2" width="24" height="12" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="90" y="-2" width="24" height="12" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="35" y="80" width="24" height="12" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="90" y="80" width="24" height="12" rx="2" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            <g transform={`translate(${leftOffset + 550}, 310)`}>
              <path d="M 15 0 L 160 0 L 160 115 L 125 115 L 125 38 L 15 38 Z" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="40" y="55" width="70" height="38" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
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
            <rect x={leftOffset} y="30" width="280" height="260" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 15} y="62" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgMasterBed}
            </text>
            <text x={leftOffset + 15} y="80" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.28)} SQ.FT • {labels.enSuiteBadge}
            </text>
            <g transform={`translate(${leftOffset + 105}, 100)`}>
              <rect x="0" y="0" width="125" height="115" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="12" y="8" width="42" height="22" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="70" y="8" width="42" height="22" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <path d="M 0 46 Q 62 54 125 46" stroke={themeColors.furnitureStroke} strokeWidth="1" fill="none" />
            </g>
            <rect x={leftOffset + 15} y="100" width="55" height="115" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" strokeDasharray="3 3" fill={themeColors.furnitureFill} />
            <text x={leftOffset + 42} y="158" fill={themeColors.furnitureText} fontSize="9" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle" transform={`rotate(-90 ${leftOffset + 42} 158)`}>
              {labels.svgWardrobe}
            </text>

            {/* Master Bath (Bottom-Left) */}
            <rect x={leftOffset} y="290" width="280" height="215" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 15} y="318" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgBath}
            </text>
            <g transform={`translate(${leftOffset + 15}, 335)`}>
              <rect x="0" y="0" width="100" height="48" rx="12" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <ellipse cx="50" cy="24" rx="40" ry="17" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            <g transform={`translate(${leftOffset + 130}, 335)`}>
              <rect x="0" y="0" width="140" height="38" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <ellipse cx="35" cy="19" rx="19" ry="11" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <ellipse cx="105" cy="19" rx="19" ry="11" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            <rect x={leftOffset + 150} y="390" width="120" height="48" stroke={themeColors.metricFill} strokeWidth="1" strokeDasharray="4 2" fill={themeColors.furnitureAccent} />
            <text x={leftOffset + 210} y="420" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
              {labels.svgShower}
            </text>

            {/* Foyer & Powder Room (Center-Bottom) */}
            <rect x={leftOffset + 280} y="330" width="170" height="175" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 300} y="358" fill={themeColors.titleFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgFoyer}
            </text>
            <rect x={leftOffset + 300} y="380" width="130" height="65" rx="4" stroke={themeColors.subMetricFill} strokeWidth="1" strokeDasharray="3 3" fill={themeColors.furnitureFill} />
            <text x={leftOffset + 365} y="418" fill={themeColors.subMetricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
              {labels.svgPowderRoom}
            </text>

            {/* Bedroom 2 (Center-Top) */}
            <rect x={leftOffset + 280} y="30" width="240" height="300" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 300} y="62" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgBed2}
            </text>
            <text x={leftOffset + 300} y="80" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.22)} SQ.FT
            </text>
            <g transform={`translate(${leftOffset + 315}, 115)`}>
              <rect x="0" y="0" width="115" height="115" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="12" y="8" width="38" height="22" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="65" y="8" width="38" height="22" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            <rect x={leftOffset + 445} y="115" width="55" height="105" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" strokeDasharray="3 3" fill={themeColors.furnitureFill} />
            <text x={leftOffset + 472} y="168" fill={themeColors.furnitureText} fontSize="9" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle" transform={`rotate(-90 ${leftOffset + 472} 168)`}>
              {labels.svgWardrobe}
            </text>

            {/* Living, Dining & Gourmet Kitchen (Right Side) */}
            <rect x={leftOffset + 520} y="160" width="290" height="345" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 540} y="195" fill={themeColors.titleFill} fontSize="14" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgLiving}
            </text>
            <text x={leftOffset + 540} y="215" fill={themeColors.metricFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.42)} SQ.FT • {labels.cornerDualAspect}
            </text>
            <g transform={`translate(${leftOffset + 540}, 235)`}>
              <rect x="0" y="0" width="135" height="42" rx="4" stroke={themeColors.subMetricFill} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <circle cx="34" cy="21" r="9" stroke={themeColors.subMetricFill} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="68" cy="21" r="9" stroke={themeColors.subMetricFill} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <circle cx="102" cy="21" r="7" stroke={themeColors.subMetricFill} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>
            <g transform={`translate(${leftOffset + 540}, 300)`}>
              <rect x="0" y="0" width="110" height="52" rx="6" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="55" y="30" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                {labels.svgDining}
              </text>
            </g>
            <g transform={`translate(${leftOffset + 660}, 335)`}>
              <path d="M 0 0 L 115 0 L 115 95 L 80 95 L 80 32 L 0 32 Z" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
            </g>

            {/* Wrap-Around Corner Sky Terrace (Top-Right) */}
            <rect x={leftOffset + 520} y="30" width="290" height="130" stroke={themeColors.partitionStroke} strokeWidth="2" strokeDasharray="6 4" fill={themeColors.metricFill} fillOpacity={isDark ? "0.06" : "0.08"} />
            <text x={leftOffset + 540} y="62" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgBalcony}
            </text>
            <text x={leftOffset + 540} y="82" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {plan.balconyAreaSqFt} SQ.FT • {labels.cornerDualAspect}
            </text>
            <g transform={`translate(${leftOffset + 645}, 70)`}>
              <rect x="0" y="0" width="140" height="48" rx="6" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="70" y="28" fill={themeColors.furnitureText} fontSize="9" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
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
            {/* Master Suite (Top-Left) */}
            <rect x={leftOffset} y="30" width="240" height="235" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 15} y="58" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgMasterBed}
            </text>
            <text x={leftOffset + 15} y="76" fill={themeColors.metricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.24)} SQ.FT
            </text>
            <g transform={`translate(${leftOffset + 80}, 90)`}>
              <rect x="0" y="0" width="115" height="110" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="12" y="8" width="38" height="20" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="65" y="8" width="38" height="20" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>

            {/* Bedroom 2 (Bottom-Left) */}
            <rect x={leftOffset} y="265" width="240" height="240" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 15} y="295" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgBed2}
            </text>
            <text x={leftOffset + 15} y="312" fill={themeColors.metricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.16)} SQ.FT
            </text>
            <g transform={`translate(${leftOffset + 80}, 330)`}>
              <rect x="0" y="0" width="110" height="105" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="10" y="8" width="36" height="20" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="62" y="8" width="36" height="20" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>

            {/* Bedroom 3 & Maid Wing (Center-Left) */}
            <rect x={leftOffset + 240} y="30" width="210" height="235" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 260} y="58" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgBed3}
            </text>
            <text x={leftOffset + 260} y="76" fill={themeColors.metricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.15)} SQ.FT
            </text>
            <g transform={`translate(${leftOffset + 280}, 90)`}>
              <rect x="0" y="0" width="105" height="105" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="10" y="8" width="34" height="20" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="58" y="8" width="34" height="20" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>

            {/* Maid's Suite (Center-Bottom) */}
            <rect x={leftOffset + 240} y="265" width="210" height="240" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 260} y="295" fill={themeColors.titleFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgMaid}
            </text>
            <rect x={leftOffset + 260} y="315" width="100" height="55" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureFill} />
            <text x={leftOffset + 310} y="348" fill={themeColors.furnitureText} fontSize="9" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
              {labels.svgStaffBed}
            </text>
            <rect x={leftOffset + 260} y="385" width="170" height="70" rx="4" stroke={themeColors.subMetricFill} strokeWidth="1.2" fill={themeColors.furnitureFill} />
            <text x={leftOffset + 345} y="425" fill={themeColors.subMetricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
              {labels.svgWetKitchen}
            </text>

            {/* Grand Living & Dining Hall (Right) */}
            <rect x={leftOffset + 450} y="150" width="360" height="355" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 475} y="185" fill={themeColors.titleFill} fontSize="14" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgLiving}
            </text>
            <text x={leftOffset + 475} y="205" fill={themeColors.metricFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.45)} SQ.FT • {labels.svgGrandSalon}
            </text>
            <g transform={`translate(${leftOffset + 475}, 225)`}>
              <rect x="0" y="0" width="150" height="48" rx="5" stroke={themeColors.subMetricFill} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="75" y="28" fill={themeColors.subMetricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                {labels.svgIsland}
              </text>
            </g>
            <g transform={`translate(${leftOffset + 475}, 295)`}>
              <rect x="0" y="0" width="135" height="60" rx="6" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="67" y="35" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                {labels.svgDining} ({labels.svgSeats(8)})
              </text>
            </g>
            <g transform={`translate(${leftOffset + 635}, 295)`}>
              <path d="M 0 0 L 140 0 L 140 130 L 100 130 L 100 42 L 0 42 Z" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
            </g>

            {/* Sky Terrace (Top-Right) */}
            <rect x={leftOffset + 450} y="30" width="360" height="120" stroke={themeColors.partitionStroke} strokeWidth="2" strokeDasharray="6 4" fill={themeColors.metricFill} fillOpacity={isDark ? "0.06" : "0.08"} />
            <text x={leftOffset + 475} y="60" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgBalcony}
            </text>
            <text x={leftOffset + 475} y="78" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {plan.balconyAreaSqFt} SQ.FT • 180° {labels.svgBalcony}
            </text>
            <g transform={`translate(${leftOffset + 610}, 65)`}>
              <rect x="0" y="0" width="170" height="45" rx="8" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="85" y="28" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                {labels.svgLounge}
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
            {/* 1. VIP Private Elevator Foyer (Top-Left) */}
            <rect x={leftOffset} y="30" width="280" height="140" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 20} y="62" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.04em">
              {labels.svgFoyer}
            </text>
            <g transform={`translate(${leftOffset + 25}, 75)`}>
              <rect x="0" y="0" width="105" height="50" rx="4" stroke={themeColors.subMetricFill} strokeWidth="1.5" fill={themeColors.furnitureFill} />
              <text x="52" y="30" fill={themeColors.subMetricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="700" textAnchor="middle">
                {labels.svgVipLift} 1
              </text>
              <rect x="125" y="0" width="105" height="50" rx="4" stroke={themeColors.subMetricFill} strokeWidth="1.5" fill={themeColors.furnitureFill} />
              <text x="177" y="30" fill={themeColors.subMetricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="700" textAnchor="middle">
                {labels.svgVipLift} 2
              </text>
            </g>

            {/* 2. Presidential Master Wing & Spa (Bottom-Left: clean vertical wall at leftOffset + 280) */}
            <rect x={leftOffset} y="170" width="280" height="335" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 20} y="200" fill={themeColors.titleFill} fontSize="13" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.04em">
              {labels.svgMasterBed}
            </text>
            <text x={leftOffset + 20} y="218" fill={themeColors.subMetricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600">
              {labels.svgPresidentialWing}
            </text>
            <text x={leftOffset + 20} y="234" fill={themeColors.metricFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600">
              {labels.svgWardrobe} & SPA
            </text>

            <g transform={`translate(${leftOffset + 75}, 245)`}>
              <rect x="0" y="0" width="135" height="120" rx="6" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="15" y="10" width="44" height="22" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="75" y="10" width="44" height="22" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>

            {/* Jacuzzi Spa in Master Wing */}
            <g transform={`translate(${leftOffset + 20}, 385)`}>
              <circle cx="48" cy="48" r="44" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <circle cx="48" cy="48" r="36" stroke={themeColors.metricFill} strokeWidth="1" fill={themeColors.poolWater} fillOpacity={themeColors.poolOpacity} />
              <text x="48" y="52" fill={themeColors.titleFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                {labels.svgJacuzziSpa}
              </text>
            </g>

            {/* 3. Executive Office / Library (Center-Top: runs from leftOffset + 280 to leftOffset + 480) */}
            <rect x={leftOffset + 280} y="30" width="200" height="200" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 300} y="62" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgOffice}
            </text>
            <rect x={leftOffset + 300} y="80" width="130" height="58" rx="6" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
            <text x={leftOffset + 365} y="114" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
              {labels.svgExecutiveDesk}
            </text>

            {/* 4. Guest Sky Suite 2 (Center-Bottom: runs from leftOffset + 280 to leftOffset + 480) */}
            <rect x={leftOffset + 280} y="230" width="200" height="275" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 300} y="260" fill={themeColors.titleFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              {labels.svgBed2}
            </text>
            <g transform={`translate(${leftOffset + 320}, 295)`}>
              <rect x="0" y="0" width="120" height="110" rx="5" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <rect x="14" y="8" width="40" height="20" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
              <rect x="66" y="8" width="40" height="20" rx="3" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureAccent} />
            </g>

            {/* 5. Cantilevered Sky Plunge Pool & Sun Deck (Right-Top: runs from leftOffset + 480 to leftOffset + 810) */}
            <rect x={leftOffset + 480} y="30" width="330" height="150" stroke={themeColors.envelopeStroke} strokeWidth="2" strokeDasharray="6 4" fill={themeColors.metricFill} fillOpacity={isDark ? "0.06" : "0.08"} />
            <text x={leftOffset + 505} y="58" fill={themeColors.subMetricFill} fontSize="12" fontFamily={ARCH_FONT} fontWeight="700">
              🏊 {labels.svgPool}
            </text>
            <g transform={`translate(${leftOffset + 505}, 68)`}>
              <rect x="0" y="0" width="175" height="68" rx="8" stroke={themeColors.poolWater} strokeWidth="2" fill={themeColors.poolWater} fillOpacity={themeColors.poolOpacity} />
              <line x1="20" y1="0" x2="20" y2="68" stroke={themeColors.poolWater} strokeWidth="1" strokeDasharray="3 2" />
              <line x1="40" y1="0" x2="40" y2="68" stroke={themeColors.poolWater} strokeWidth="1" strokeDasharray="3 2" />
              <text x="98" y="39" fill={themeColors.titleFill} fontSize="10" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em" textAnchor="middle">
                {labels.svgInfinityPool}
              </text>
            </g>
            <g transform={`translate(${leftOffset + 695}, 68)`}>
              <rect x="0" y="0" width="40" height="68" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureFill} />
              <rect x="48" y="0" width="40" height="68" rx="4" stroke={themeColors.furnitureStroke} strokeWidth="1" fill={themeColors.furnitureFill} />
            </g>

            {/* 6. Palatial Double-Height Grand Salon & 12-Seat Dining (Right-Bottom: runs from leftOffset + 480 to leftOffset + 810) */}
            <rect x={leftOffset + 480} y="180" width="330" height="325" stroke={themeColors.partitionStroke} strokeWidth="2" fill="none" />
            <text x={leftOffset + 505} y="212" fill={themeColors.titleFill} fontSize="14" fontFamily={ARCH_FONT} fontWeight="700" letterSpacing="0.05em">
              {labels.svgGrandSalon}
            </text>
            <text x={leftOffset + 505} y="232" fill={themeColors.metricFill} fontSize="11" fontFamily={ARCH_FONT} fontWeight="600">
              {Math.round(plan.internalAreaSqFt * 0.48)} SQ.FT • 7m {labels.svgCeilingHeight}
            </text>
            <g transform={`translate(${leftOffset + 505}, 255)`}>
              <rect x="0" y="0" width="155" height="60" rx="8" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
              <text x="77" y="35" fill={themeColors.furnitureText} fontSize="10" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">
                {labels.svgDining} ({labels.svgSeats(12)})
              </text>
            </g>
            <g transform={`translate(${leftOffset + 505}, 335)`}>
              <path d="M 0 0 L 205 0 L 205 110 L 165 110 L 165 40 L 0 40 Z" stroke={themeColors.furnitureStroke} strokeWidth="1.2" fill={themeColors.furnitureFill} />
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
            id={`archGrid-${isLarge ? "lg" : "sm"}-${blueprintTheme}-${activePlan.blueprintType}-${building.id}`}
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
          {/* Concrete Shear Wall Cross-Hatch */}
          <pattern
            id={`concreteHatch-${blueprintTheme}`}
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 10 L 10 0 M 0 0 L 10 10"
              stroke={themeColors.dimensionLine}
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
          </pattern>
        </defs>

        <rect width="920" height="540" fill={themeColors.bg} />
        <rect width="920" height="540" fill={`url(#archGrid-${isLarge ? "lg" : "sm"}-${blueprintTheme}-${activePlan.blueprintType}-${building.id})`} />

        {/* Structural Grid Bubble Markers (1, 2, 3, 4) */}
        <g opacity="0.6">
          <circle cx="35" cy="18" r="8" stroke={themeColors.dimensionLine} strokeWidth="1" fill={themeColors.bg} />
          <text x="35" y="21" fill={themeColors.dimensionText} fontSize="8" fontFamily={ARCH_FONT} fontWeight="700" textAnchor="middle">1</text>
          <circle cx="380" cy="18" r="8" stroke={themeColors.dimensionLine} strokeWidth="1" fill={themeColors.bg} />
          <text x="380" y="21" fill={themeColors.dimensionText} fontSize="8" fontFamily={ARCH_FONT} fontWeight="700" textAnchor="middle">2</text>
          <circle cx="630" cy="18" r="8" stroke={themeColors.dimensionLine} strokeWidth="1" fill={themeColors.bg} />
          <text x="630" y="21" fill={themeColors.dimensionText} fontSize="8" fontFamily={ARCH_FONT} fontWeight="700" textAnchor="middle">3</text>
          <circle cx="885" cy="18" r="8" stroke={themeColors.dimensionLine} strokeWidth="1" fill={themeColors.bg} />
          <text x="885" y="21" fill={themeColors.dimensionText} fontSize="8" fontFamily={ARCH_FONT} fontWeight="700" textAnchor="middle">4</text>
        </g>

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

        {/* Tower-Specific Structural Signature (Foster, SOM, ZHA, Automotive, Waterfront, etc.) */}
        {renderTowerStructuralElements()}

        {/* Dynamic Typology Architecture (1BR, 2BR, 3BR, PENTHOUSE) */}
        {renderTypologyContent(activePlan)}

        {/* Compass Rose (Placed cleanly in dedicated corner with ZERO wall overlap) */}
        <g transform="translate(850, 470)">
          <circle cx="0" cy="0" r="16" stroke={themeColors.compassStroke} strokeWidth="1.2" fill={themeColors.compassBg} />
          <path d="M 0 -11 L 3 0 L 0 3 L -3 0 Z" fill={themeColors.compassStroke} />
          <text x="0" y="-4" fill={themeColors.compassText} fontSize="7" fontFamily={ARCH_FONT} fontWeight="700" textAnchor="middle">
            N
          </text>
        </g>

        {/* Scale Metric Bar (Bottom-Left) */}
        <g transform="translate(75, 485)">
          <line x1="0" y1="0" x2="140" y2="0" stroke={themeColors.dimensionLine} strokeWidth="1.5" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke={themeColors.dimensionLine} strokeWidth="1.5" />
          <line x1="70" y1="-3" x2="70" y2="3" stroke={themeColors.dimensionLine} strokeWidth="1.5" />
          <line x1="140" y1="-4" x2="140" y2="4" stroke={themeColors.dimensionLine} strokeWidth="1.5" />
          <text x="0" y="-6" fill={themeColors.dimensionText} fontSize="9" fontFamily={ARCH_FONT} fontWeight="600">0m</text>
          <text x="70" y="-6" fill={themeColors.dimensionText} fontSize="9" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="middle">2.5m</text>
          <text x="140" y="-6" fill={themeColors.dimensionText} fontSize="9" fontFamily={ARCH_FONT} fontWeight="600" textAnchor="end">5.0m</text>
        </g>

        {/* Dimensional Ticks across bottom width */}
        <g transform="translate(380, 485)">
          <text
            x="120"
            y="-5"
            fill={themeColors.dimensionText}
            fontSize="10"
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

  const getSeriesBadgeText = () => {
    switch (archStyle) {
      case "foster":
        return labels.seriesBadge("Foster + Partners");
      case "som-tripartite":
        return labels.seriesBadge("Skidmore, Owings & Merrill (SOM)");
      case "som-twisted":
        return labels.seriesBadge("SOM Helical Series");
      case "zaha-hadid":
        return labels.seriesBadge("Zaha Hadid Architects");
      case "automotive":
        return labels.seriesBadge(building.architectFirm ? building.architectFirm.split("/")[0].trim() : "High Horology & Automotive");
      case "coastal-resort":
        return labels.seriesBadge(building.architectFirm ? building.architectFirm.split("/")[0].trim() : "Iconic Waterfront");
      case "emaar-grand":
        return labels.seriesBadge("Emaar Luxury Living Collection");
      case "highrise-core":
      default:
        return labels.officialPlanBadge(building.developer);
    }
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
        <div className="text-right self-start sm:self-auto shrink-0 font-sans text-xs">
          <span className="inline-block px-3 py-1.5 rounded-full bg-[#F8F9FA] text-[#64748B] border border-[#E2E8F0] font-semibold">
            {labels.cadRef}: {building.legacyId || building.id}-FP
          </span>
          <div className="text-[11px] text-[#8C6A48] font-bold mt-1">
            {getSeriesBadgeText()}
          </div>
        </div>
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
              <span>{plan.typeTag}</span>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-md font-sans font-bold ${
                  isActive
                    ? "bg-amber-400 text-slate-950"
                    : "bg-white text-[#8C6A48] border border-[#DDD7CA]"
                }`}
              >
                {plan.totalAreaSqFt.toLocaleString()} sq.ft
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

            {/* Print Button */}
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] text-xs font-sans font-semibold transition-all shadow-2xs cursor-pointer"
              title={labels.printBtn(activePlan.typeTag)}
            >
              <span>🖨️</span>
              <span className="hidden sm:inline">{labels.printBtn(activePlan.typeTag)}</span>
            </button>

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

      {/* 1. Full-Width 4 Metric Cards (Spacious, Horizontal & Breathing) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1.5 hover:border-[#8C6A48]/50 transition-colors">
          <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#78716C] flex items-center justify-between">
            <span>{labels.totalArea}</span>
            <span className="text-sm">📐</span>
          </div>
          <div className="text-xl sm:text-2xl font-extrabold font-sans text-[#1C1917]">
            {activePlan.totalAreaSqFt.toLocaleString()} <span className="text-xs font-semibold text-[#78716C]">sq.ft</span>
          </div>
          <div className="text-xs text-[#78716C] font-sans">
            {activePlan.totalAreaSqM} m²
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1.5 hover:border-[#8C6A48]/50 transition-colors">
          <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#78716C] flex items-center justify-between">
            <span>{labels.livingArea}</span>
            <span className="text-sm">🛋️</span>
          </div>
          <div className="text-xl sm:text-2xl font-extrabold font-sans text-[#059669]">
            {activePlan.internalAreaSqFt.toLocaleString()} <span className="text-xs font-semibold text-[#059669]/70">sq.ft</span>
          </div>
          <div className="text-xs text-[#78716C] font-sans">
            {activePlan.efficiencyRatio}
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1.5 hover:border-[#8C6A48]/50 transition-colors">
          <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#78716C] flex items-center justify-between">
            <span>{labels.balconyArea}</span>
            <span className="text-sm">🌅</span>
          </div>
          <div className="text-xl sm:text-2xl font-extrabold font-sans text-[#1C1917]">
            {activePlan.balconyAreaSqFt.toLocaleString()} <span className="text-xs font-semibold text-[#78716C]">sq.ft</span>
          </div>
          <div className="text-xs text-[#78716C] font-sans">
            {Math.round((activePlan.balconyAreaSqFt / activePlan.totalAreaSqFt) * 100)}% {labels.ofTotal}
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1.5 hover:border-[#8C6A48]/50 transition-colors">
          <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#78716C] flex items-center justify-between">
            <span>{labels.clearCeiling}</span>
            <span className="text-sm">📏</span>
          </div>
          <div className="text-xl sm:text-2xl font-extrabold font-sans text-[#8C6A48]">
            {activePlan.ceilingHeightMeters} <span className="text-xs font-semibold text-[#8C6A48]/70">m</span>
          </div>
          <div className="text-xs text-[#78716C] font-sans">
            {labels.floorToCeiling}
          </div>
        </div>
      </div>

      {/* 2. Two Spacious Equal Columns: Left = Unified Room Breakdown, Right = Engineering Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        {/* Room Composition Details (Unified Elegant Architectural Data Sheet) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-4">
          <div className="flex items-center justify-between border-b border-[#DDD7CA] pb-3">
            <span className="font-bold text-[#1C1917] font-sans text-sm sm:text-base flex items-center gap-2">
              <span>📋</span>
              <span>{labels.roomsTitle}</span>
            </span>
            <span className="text-xs font-semibold text-[#8C6A48] bg-white px-3 py-1 rounded-lg border border-[#DDD7CA]">
              {activePlan.typeTag}
            </span>
          </div>

          {/* Unified Architectural Specification List (Full Width Rows - Never Squeezed or Broken) */}
          <div className="divide-y divide-[#DDD7CA]/60 font-sans text-xs sm:text-sm">
            {/* 1. Bedrooms */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-white border border-[#DDD7CA] flex items-center justify-center text-base shrink-0 shadow-2xs">
                  🛏️
                </span>
                <span className="font-medium text-[#475569]">{labels.bedroomsLabel}</span>
              </div>
              <span className="font-bold text-[#0F172A] text-sm sm:text-base bg-white px-3.5 py-1 rounded-lg border border-[#DDD7CA] shadow-2xs">
                {activePlan.roomsBreakdown.bedrooms}
              </span>
            </div>

            {/* 2. Bathrooms */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-white border border-[#DDD7CA] flex items-center justify-center text-base shrink-0 shadow-2xs">
                  🚿
                </span>
                <span className="font-medium text-[#475569]">{labels.bathroomsLabel}</span>
              </div>
              <span className="font-bold text-[#0F172A] text-sm sm:text-base bg-white px-3.5 py-1 rounded-lg border border-[#DDD7CA] shadow-2xs">
                {activePlan.roomsBreakdown.bathrooms}
              </span>
            </div>

            {/* 3. Maid's Quarters / Staff */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-white border border-[#DDD7CA] flex items-center justify-center text-base shrink-0 shadow-2xs">
                  🧹
                </span>
                <span className="font-medium text-[#475569]">{labels.maidRoomLabel}</span>
              </div>
              <span
                className={`text-xs sm:text-sm font-bold px-3 py-1 rounded-lg border shadow-2xs ${
                  activePlan.roomsBreakdown.maidRoom
                    ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                    : "bg-white text-slate-500 border-slate-200"
                }`}
              >
                {activePlan.roomsBreakdown.maidRoom ? labels.yes : labels.no}
              </span>
            </div>

            {/* 4. Guest Powder Room */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-white border border-[#DDD7CA] flex items-center justify-center text-base shrink-0 shadow-2xs">
                  🚽
                </span>
                <span className="font-medium text-[#475569]">{labels.powderRoomLabel}</span>
              </div>
              <span
                className={`text-xs sm:text-sm font-bold px-3 py-1 rounded-lg border shadow-2xs ${
                  activePlan.roomsBreakdown.powderRoom
                    ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                    : "bg-white text-slate-500 border-slate-200"
                }`}
              >
                {activePlan.roomsBreakdown.powderRoom ? labels.yes : labels.no}
              </span>
            </div>

            {/* 5. Kitchen Type */}
            <div className="flex items-start sm:items-center justify-between py-3 gap-4">
              <div className="flex items-center gap-3 shrink-0">
                <span className="w-8 h-8 rounded-lg bg-white border border-[#DDD7CA] flex items-center justify-center text-base shrink-0 shadow-2xs">
                  🍳
                </span>
                <span className="font-medium text-[#475569]">{labels.kitchenTypeLabel}</span>
              </div>
              <span className="font-bold text-[#0F172A] text-right">
                {activePlan.roomsBreakdown.kitchenType}
              </span>
            </div>

            {/* 6. View Horizon */}
            <div className="flex items-start sm:items-center justify-between py-3 gap-4">
              <div className="flex items-center gap-3 shrink-0">
                <span className="w-8 h-8 rounded-lg bg-white border border-[#DDD7CA] flex items-center justify-center text-base shrink-0 shadow-2xs">
                  📍
                </span>
                <span className="font-medium text-[#475569]">{labels.viewAspectLabel}</span>
              </div>
              <span className="font-bold text-[#8C6A48] text-right">
                {activePlan.viewOrientation}
              </span>
            </div>
          </div>
        </div>

        {/* Architectural Features List */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-4 font-sans">
          <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3">
            <span className="font-bold text-[#0F172A] font-sans text-sm sm:text-base flex items-center gap-2">
              <span>🏗️</span>
              <span>{labels.engineeringHighlights}</span>
            </span>
            <span className="text-xs font-semibold text-[#8C6A48] bg-white px-3 py-1 rounded-lg border border-[#DDD7CA]">
              {activePlan.typeTag}
            </span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#57534E]">
            {activePlan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors">
                <span className="w-5 h-5 rounded-full bg-[#8C6A48]/15 text-[#8C6A48] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="leading-relaxed font-medium">{feature}</span>
              </li>
            ))}
          </ul>
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

              {/* Print Button inside Modal */}
              <button
                type="button"
                onClick={() => window.print()}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-bold transition-colors cursor-pointer"
                title={labels.printBtn(activePlan.typeTag)}
              >
                🖨️
              </button>

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
