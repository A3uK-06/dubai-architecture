import React from "react";
import type { Metadata } from "next";
import PropertyQuizStandalone from "@/components/PropertyQuizStandalone";
import { getSeoAlternates } from "@/lib/seoAlternates";

export const metadata: Metadata = {
  title: "Подбор недвижимости в Дубае | Инвестиции, ВНЖ, первичный и вторичный рынок",
  description:
    "Пройдите интерактивный квиз за 1 минуту: подберите небоскреб или резиденцию в Дубае по вашему бюджету, целям инвестиций и валюте. Официальные пулы застройщиков и RERA-брокеров.",
  alternates: getSeoAlternates("/quiz/"),
  openGraph: {
    title: "Подбор недвижимости в Дубае | Квиз Dubai Architecture",
    description: "Персональная спецификация объектов в Дубае по бюджету, валюте и целям инвестиций.",
    url: "https://dubai-architecture.info/quiz/",
    siteName: "Dubai Architecture",
    type: "website",
    images: [
      {
        url: "https://dubai-architecture.info/images/hero-dubai-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Property Quiz",
      },
    ],
  },
};

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <PropertyQuizStandalone />
      </div>
    </div>
  );
}
