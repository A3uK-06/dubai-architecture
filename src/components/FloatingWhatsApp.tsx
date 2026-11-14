"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { getAttributionData } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";
import LeadModal from "@/components/LeadModal";

export default function FloatingWhatsApp() {
  const { t, isRtl, lang } = useLang();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use configured WhatsApp number or fallback to modal concierge if none is set
  const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const hasRealWhatsApp = Boolean(envNumber && envNumber !== "971500000000");

  const getWhatsAppUrl = () => {
    const attr = getAttributionData();
    let message = t.whatsapp.defaultMessage;

    if (attr.utm_source) {
      message += ` [Ref: ${attr.utm_source}${attr.utm_campaign ? ` / ${attr.utm_campaign}` : ""}]`;
    }

    return `https://wa.me/${envNumber || "971500000000"}?text=${encodeURIComponent(message)}`;
  };

  const handleClick = (e: React.MouseEvent) => {
    trackEvent("generate_lead", {
      channel: hasRealWhatsApp ? "whatsapp" : "concierge_modal",
      location: typeof window !== "undefined" ? window.location.pathname : "unknown",
    });

    if (!hasRealWhatsApp) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const tooltipHeadline = ({
    en: "Private Advisory Desk (Licensed RERA Brokers)",
    ru: "Консьерж-сервис (Лицензированные брокеры RERA)",
    ar: "مكتب الاستشارات العقارية الخاصة (وسطاء معتمدون من RERA)",
    zh: "专属置业顾问中心（RERA 官方持牌经纪网络）",
    de: "Private Kundenberatung (Lizenzierte RERA-Makler)",
    fr: "Bureau de Conseil Privé (Courtiers Agréés RERA)",
    it: "Desk di Consulenza Privata (Broker Autorizzati RERA)",
    tr: "Özel Danışmanlık Masası (Lisanslı RERA Brokerları)",
    hi: "निजी सलाहकार डेस्क (लाइसेंस प्राप्त रेरा ब्रोकर)",
    ur: "پرائیویٹ ایڈوائزری ڈیسک (ریرا لائسنس یافتہ بروکرز)",
  }[lang] || "Private Advisory Desk (Licensed RERA Brokers)");

  const tooltipText = ({
    en: "Request official developer dossiers, floor plans & payment plans",
    ru: "Запрос проектных досье, планировок и доступных квот у девелоперов",
    ar: "طلب الملفات الرسمية للمشاريع، والمخططات، وخطط السداد المعتمدة",
    zh: "获取开发商官方项目档案、高清户型图及分期付款方案",
    de: "Offizielle Bauträger-Dossiers, Grundrisse & Zahlungspläne anfordern",
    fr: "Demandez les dossiers promoteurs, plans d'étages et échéanciers",
    it: "Richiedi dossier ufficiali, planimetrie e piani di pagamento",
    tr: "Resmi geliştirici dosyaları, kat planları ve ödeme planlarını talep edin",
    hi: "आधिकारिक डेवलपर डोजियर, फ्लोर प्लान और भुगतान योजनाओं का अनुरोध करें",
    ur: "سرکاری ڈویلپر ڈوزیئرز، فلور پلانز اور ادائیگی کے شیڈول کی درخواست کریں",
  }[lang] || "Request official developer dossiers, floor plans & payment plans");

  const conciergeBtnLabel = ({
    en: "Private Concierge",
    ru: "Консьерж-сервис",
    ar: "خدمة الكونسيرج",
    zh: "置业礼宾服务",
    de: "Privater Concierge",
    fr: "Conciergerie Privée",
    it: "Concierge Privato",
    tr: "Özel Danışman",
    hi: "निजी कंसीयज",
    ur: "پرائیویٹ دربان سروس",
  }[lang] || "Private Concierge");

  const modalTitle = ({
    en: "Private Advisory: Project Dossiers & Unit Access",
    ru: "Консьерж-сервис: Досье и планировки",
    ar: "خدمة الاستشارات الخاصة: ملفات المشاريع والوحدات المتاحة",
    zh: "专属置业礼宾服务：官方项目档案与房源锁定",
    de: "Private Beratung: Projektdossiers & Einheiten-Zugang",
    fr: "Conseil Privé : Dossiers de Projet et Disponibilités",
    it: "Consulenza Privata: Dossier di Progetto e Accesso alle Unità",
    tr: "Özel Danışmanlık: Proje Dosyaları ve Daire Tahsisleri",
    hi: "निजी सलाह: परियोजना डोजियर एवं संपत्ति पहुंच",
    ur: "نجی مشاورتی سروس: پروجیکٹ ڈوزیئرز اور یونٹس تک رسائی",
  }[lang] || "Private Advisory: Project Dossiers & Unit Access");

  const modalSubtitle = ({
    en: "Request official developer floor plans, project brochures and verified payment schedules via licensed UAE brokerage partners (accredited RERA network).",
    ru: "Запросите официальные презентации застройщиков, планы этажей и расчет доходности от аккредитованной партнерской сети брокеров RERA.",
    ar: "اطلب المخططات الرسمية، وكتيبات المشاريع، وجداول السداد المعتمدة عبر شبكة وسطاء RERA المرخصين في الإمارات.",
    zh: "通过阿联酋官方持牌经纪合作网络（RERA 官方监管），获取开发商一手户型图册、楼盘说明书与官方核准分期方案。",
    de: "Fordern Sie offizielle Grundrisse, Projektbroschüren und geprüfte Zahlungspläne über lizenzierte Maklerpartner der VAE an.",
    fr: "Recevez les plans officiels, brochures de projet et échéanciers validés auprès de nos courtiers partenaires agréés aux Émirats.",
    it: "Richiedi planimetrie ufficiali, brochure di progetto e piani di pagamento verificati tramite i broker partner autorizzati negli Emirati.",
    tr: "Lisanslı BAE broker ortakları aracılığıyla resmi geliştirici kat planları, proje broşürleri ve onaylı ödeme planlarını talep edin.",
    hi: "यूएई के लाइसेंस प्राप्त ब्रोकरेज भागीदारों के माध्यम से आधिकारिक डेवलपर फ्लोर प्लान, प्रोजेक्ट ब्रोशर और सत्यापित भुगतान योजनाओं का अनुरोध करें।",
    ur: "متحدہ عرب امارات کے لائسنس یافتہ بروکر پارٹنرز کے ذریعے ڈویلپرز کے تصدیق شدہ فلور پلانز، معلوماتی کتابچے اور ادائیگی کے شیڈول حاصل کریں۔",
  }[lang] || "Request official developer floor plans, project brochures and verified payment schedules via licensed UAE brokerage partners.");

  return (
    <>
      <div
        className={`fixed bottom-6 ${
          isRtl ? "left-6" : "right-6"
        } z-40 flex items-center group print:hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Discreet Tooltip */}
        {isHovered && (
          <div
            className={`hidden sm:block absolute ${
              isRtl ? "left-14" : "right-14"
            } bg-white border border-[#E5DFD3] text-[#1C1917] text-xs px-3.5 py-2 rounded-xl shadow-medium-tint whitespace-nowrap backdrop-blur-md animate-fade-in`}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8C6A48] animate-pulse" />
              <span className="font-bold text-[#8C6A48]">
                {tooltipHeadline}
              </span>
            </div>
            <p className="text-[11px] text-[#78716C] mt-0.5">
              {tooltipText}
            </p>
          </div>
        )}

        {/* Elegant Luxury Button */}
        <a
          href={hasRealWhatsApp ? getWhatsAppUrl() : "#"}
          target={hasRealWhatsApp ? "_blank" : undefined}
          rel={hasRealWhatsApp ? "noopener noreferrer" : undefined}
          onClick={handleClick}
          aria-label="Private Advisory Concierge"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1C1917]/95 hover:bg-[#292524] text-white text-xs sm:text-sm font-semibold shadow-xl border border-[#8C6A48]/50 hover:border-[#8C6A48] backdrop-blur-md transition-all transform hover:scale-105 active:scale-95"
        >
          <span className="text-base text-amber-400">🏛️</span>
          <span className="hidden sm:inline font-mono tracking-wide text-stone-200">
            {conciergeBtnLabel}
          </span>
        </a>
      </div>

      {/* Concierge Modal Fallback */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        subtitle={modalSubtitle}
      />
    </>
  );
}
