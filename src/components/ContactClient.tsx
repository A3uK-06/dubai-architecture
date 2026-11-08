"use client";

import React from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function ContactClient() {
  const { lang } = useLang();
  const isRu = lang === "ru";

  const homeUrl = isRu ? "/ru/" : "/";
  const calcUrl = isRu ? "/ru/calculator/" : "/calculator/";

  return (
    <article className="min-h-screen bg-transparent text-[#0F172A] pb-24">
      {/* Header Banner */}
      <div className="border-b border-[#E2E8F0] bg-[#F1F5F9]/60 pt-12 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex items-center gap-2 text-xs text-[#78716C] font-semibold">
            <Link href={homeUrl} className="hover:text-[#8C6A48] transition-colors">
              {isRu ? "Главная" : "Home"}
            </Link>
            <span className="text-[#DDD7CA]">/</span>
            <span className="text-[#1C1917] font-bold">{isRu ? "Контакты" : "Contact"}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              {isRu ? "Официальные коммуникации" : "Institutional Communications"}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              {isRu ? "Редакционный отдел и служба консьержа" : "Editorial Desk & Research Office"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            {isRu ? "Контакты редакции и исследовательского бюро" : "Contact Dubai Architecture"}
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            {isRu
              ? "Свяжитесь с нашим архитектурным исследовательским отделом, отправьте техническую документацию по проектам или обратитесь к брокерам по подбору недвижимости в ОАЭ."
              : "Reach out to our architectural research desk, submit project documentation, or connect with senior property advisory specialists in the United Arab Emirates."}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Research & Editorial Desk */}
          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                {isRu ? "Редакция и инженерия" : "Editorial & Engineering"}
              </span>
              <h2 className="text-xl font-bold text-[#1C1917] mt-1">
                {isRu ? "Архитектурно-исследовательский отдел" : "Architectural Research Desk"}
              </h2>
            </div>

            <p className="text-sm text-[#57534E] leading-relaxed">
              {isRu
                ? "Для инженеров-конструкторов, архитекторов, фотографов и аналитиков: передача CAD-моделей, геодезических данных и технических поправок к профилям башен:"
                : "For structural engineers, architectural studios, photographers, and academic researchers submitting CAD models, geotechnical records, or corrections to building profiles:"}
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-[#DDD7CA]">
                <div className="text-[#78716C]">{isRu ? "Электронная почта редакции" : "Editorial Email"}</div>
                <div className="text-sm font-bold text-[#1C1917] mt-0.5">press@dubai-architecture.info</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#DDD7CA]">
                <div className="text-[#78716C]">{isRu ? "Реестровый номер архива" : "Historical Archive Registry"}</div>
                <div className="text-sm font-bold text-[#1C1917] mt-0.5">DUB-ARCH-EST-2006</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#DDD7CA]">
                <div className="text-[#78716C]">{isRu ? "Юрисдикция кадастра" : "Cadastral Jurisdiction"}</div>
                <div className="text-sm font-bold text-[#1C1917] mt-0.5">Dubai, United Arab Emirates (DIFC / Downtown)</div>
              </div>
            </div>
          </div>

          {/* Acquisition & Brokerage Support */}
          <div className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-5">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                {isRu ? "Инвестиции и консьерж-сервис" : "Acquisitions & Advisory"}
              </span>
              <h2 className="text-xl font-bold text-[#1C1917] mt-1">
                {isRu ? "Подбор апартаментов и Golden Visa" : "Property Concierge & Allocations"}
              </h2>
            </div>

            <p className="text-sm text-[#57534E] leading-relaxed">
              {isRu
                ? "Для частных инвесторов и покупателей, подбирающих пентхаусы, видовые этажи в знаковых башнях или объекты под резидентскую визу Golden Visa (от 2 млн AED):"
                : "For private investors, family offices, and residents seeking off-market penthouses, high-floor residential allocations, or Golden Visa eligible investments:"}
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={
                  isRu
                    ? "https://wa.me/971500000000?text=Здравствуйте,%20пишу%20вам%20с%20портала%20Dubai-Architecture.info"
                    : "https://wa.me/971500000000?text=Hello%2C%20I%20am%20inquiring%20through%20Dubai-Architecture.info"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#2D6A4F] hover:bg-[#1E4D38] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>💬</span>
                <span>{isRu ? "Консьерж в WhatsApp (Русский / English)" : "Direct WhatsApp Concierge"}</span>
              </a>

              <Link
                href={calcUrl}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>📊</span>
                <span>{isRu ? "Мультивалютный калькулятор ROI" : "Open Multi-Currency ROI Calculator"}</span>
              </Link>

              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] text-xs text-[#78716C] leading-relaxed">
                {isRu
                  ? "Заявки клиентов передаются лицензированным партнерам RERA: Whitewill (для РФ и СНГ) и Metropolitan Premium Properties (международный отдел)."
                  : "Client allocations handled exclusively by accredited RERA brokerage partners: Metropolitan Premium Properties & Whitewill."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
