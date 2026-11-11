"use client";

import React from "react";
import { useLang } from "@/context/LangContext";
import { METHODOLOGY_I18N } from "@/data/localizedMethodology";

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MethodologyModal({ isOpen, onClose }: MethodologyModalProps) {
  const { lang, isRtl } = useLang();

  if (!isOpen) return null;

  const tM = METHODOLOGY_I18N[lang] || METHODOLOGY_I18N.en;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-[#E5DFD3] shadow-2xl p-6 sm:p-8 text-[#1C1917] ${
          isRtl ? "text-right" : "text-left"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label={tM.closeBtn}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E5DFD3] text-[#78716C] hover:text-[#1C1917] flex items-center justify-center transition-colors cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.2"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-[#E5DFD3] pb-5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold font-mono bg-[#8C6A48]/15 text-[#8C6A48]">
              {tM.badge}
            </span>
            <span className="text-xs text-[#78716C] font-mono">
              {tM.badgeEst}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
            {tM.title}
          </h2>
          <p className="text-xs text-[#57534E] leading-relaxed">
            {tM.subtitle}
          </p>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6 text-xs sm:text-sm text-[#44403C] leading-relaxed">
          {/* Section 1: ROI & Yield Methodology */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] space-y-3">
            <h3 className="font-bold text-base text-[#1C1917] flex items-center gap-2">
              <span>📈</span>
              <span>{tM.sec1Title}</span>
            </h3>
            <p>{tM.sec1Desc}</p>
            <div className="space-y-2 font-mono text-xs bg-white p-3.5 rounded-xl border border-[#DDD7CA]">
              <div className="text-[#8C6A48] font-bold">
                {tM.formulaLabel}
              </div>
              <div className="text-slate-800">
                {tM.formulaText}
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-[#57534E] pt-1">
              <li>
                <strong>{tM.serviceChargesLabel}</strong> {tM.serviceChargesDesc}
              </li>
              <li>
                <strong>{tM.chillerLabel}</strong> {tM.chillerDesc}
              </li>
            </ul>
          </div>

          {/* Section 2: Data Sources */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] space-y-3">
            <h3 className="font-bold text-base text-[#1C1917] flex items-center gap-2">
              <span>🏛️</span>
              <span>{tM.sec2Title}</span>
            </h3>
            <p>{tM.sec2Desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-[#DDD7CA]">
                <div className="font-bold text-[#1C1917]">{tM.dldTitle}</div>
                <div className="text-[#78716C] mt-1">
                  {tM.dldDesc}
                </div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#DDD7CA]">
                <div className="font-bold text-[#1C1917]">{tM.reraTitle}</div>
                <div className="text-[#78716C] mt-1">
                  {tM.reraDesc}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Legal & Brokerage Model */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] space-y-3">
            <h3 className="font-bold text-base text-[#1C1917] flex items-center gap-2">
              <span>🤝</span>
              <span>{tM.sec3Title}</span>
            </h3>
            <p>{tM.sec3Desc1}</p>
            <p>{tM.sec3Desc2}</p>
          </div>

          {/* Section 4: Golden Visa Criteria */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] space-y-3">
            <h3 className="font-bold text-base text-[#1C1917] flex items-center gap-2">
              <span>🇦🇪</span>
              <span>{tM.sec4Title}</span>
            </h3>
            <p>{tM.sec4Desc}</p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-[#E5DFD3] flex items-center justify-between">
          <span className="text-xs text-[#78716C] font-mono">
            {tM.reraRef}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#1C1917] hover:bg-[#8C6A48] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            {tM.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
