"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { isOwnerExcluded, setOwnerExclusion } from "@/lib/ownerExclusion";

function subscribeGhost(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("dubai-ghost-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("dubai-ghost-change", callback);
  };
}

export default function GhostClient() {
  const isGhost = useSyncExternalStore(
    subscribeGhost,
    () => isOwnerExcluded(),
    () => null
  );
  const [message, setMessage] = useState<string | null>(null);

  const handleEnableGhost = () => {
    setOwnerExclusion(true);
    window.dispatchEvent(new Event("dubai-ghost-change"));
    setMessage("✅ Режим невидимки успешно активирован на 10 лет! Записан физический cookie-файл + LocalStorage.");
    setTimeout(() => setMessage(null), 6000);
  };

  const handleDisableGhost = () => {
    setOwnerExclusion(false);
    window.dispatchEvent(new Event("dubai-ghost-change"));
    setMessage("⚠️ Режим невидимки выключен. Теперь ваши визиты будут фиксироваться счетчиком.");
    setTimeout(() => setMessage(null), 6000);
  };

  return (
    <main className="min-h-screen bg-[#0F172A] text-zinc-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl">
            🛡️
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">
              Ghost Mode (Режим Владельца)
            </h1>
            <p className="text-xs text-zinc-400">
              Dubai Architecture — Защита от накрутки визитов владельца
            </p>
          </div>
        </div>

        {/* Status Card */}
        <div
          className={`p-5 rounded-2xl border mb-6 transition-all ${
            isGhost
              ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-200"
              : "bg-amber-950/40 border-amber-500/40 text-amber-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{isGhost ? "🕶️" : "👁️"}</span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider opacity-80">
                Текущий статус устройства:
              </div>
              <div className="text-base font-bold">
                {isGhost === null
                  ? "Проверка..."
                  : isGhost
                  ? "ВЫ ПОЛНОСТЬЮ НЕВИДИМЫ ДЛЯ АНАЛИТИКИ ✅"
                  : "ОТСЛЕЖИВАНИЕ ВКЛЮЧЕНО (Обычный посетитель) ⚠️"}
              </div>
            </div>
          </div>
          <p className="text-xs mt-3 opacity-90 leading-relaxed">
            {isGhost
              ? "Все скрипты Google Analytics 4, GTM и Microsoft Clarity полностью заблокированы для этого браузера. Клик по кнопкам, переходы по башням и лиды не отправляют данные в отчеты."
              : "Скрипты аналитики работают в стандартном режиме и фиксируют ваши переходы в отчетах."}
          </p>
        </div>

        {message && (
          <div className="mb-6 p-4 rounded-xl bg-amber-500 text-zinc-950 text-xs font-bold animate-fade-in shadow-lg">
            {message}
          </div>
        )}

        {/* How it works */}
        <div className="bg-zinc-800/50 border border-zinc-750 rounded-2xl p-4 text-xs text-zinc-300 space-y-2 mb-6">
          <div className="font-bold text-zinc-100 flex items-center gap-2">
            <span>🌐</span> Как работает иммунитет к VPN?
          </div>
          <p className="text-zinc-400 leading-relaxed">
            Обычные фильтры по IP-адресу перестают работать, как только вы включаете VPN или переключаетесь между мобильным интернетом и Wi-Fi.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Здесь используется <strong>постоянный файл-куки (Persistent Cookie на 10 лет) + LocalStorage</strong> прямо на этом устройстве. Браузер помнит этот ключ независимо от страны VPN (ОАЭ, США, Нидерланды и т.д.).
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleEnableGhost}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🛡️</span>
            <span>Включить невидимку на этом устройстве (Скрыть меня)</span>
          </button>

          <button
            type="button"
            onClick={handleDisableGhost}
            className="w-full py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs active:scale-98 transition-all flex items-center justify-center gap-2 border border-zinc-700 cursor-pointer"
          >
            <span>👁️</span>
            <span>Выключить (Включить отслеживание для теста)</span>
          </button>

          <Link
            href="/"
            className="w-full mt-2 py-3 px-4 rounded-xl bg-transparent hover:bg-zinc-800/50 text-zinc-400 hover:text-white font-medium text-xs transition-colors flex items-center justify-center gap-2 text-center"
          >
            &larr; Вернуться на главную страницу Dubai Architecture
          </Link>
        </div>
      </div>
    </main>
  );
}
