"use client";

import React from "react";
import { LanguageCode } from "@/i18n/languages";

interface CountryFlagProps {
  code: LanguageCode;
  className?: string;
  title?: string;
}

export default function CountryFlag({
  code,
  className = "w-5 h-3.5",
  title,
}: CountryFlagProps) {
  const baseClasses = `inline-block align-middle rounded-[2px] overflow-hidden shrink-0 border border-black/15 shadow-xs ${className}`;

  switch (code) {
    case "en":
      // United Kingdom (Union Jack)
      return (
        <svg
          viewBox="0 0 640 480"
          className={baseClasses}
          role="img"
          aria-label={title || "English / United Kingdom flag"}
        >
          <rect width="640" height="480" fill="#012169" />
          <path
            fill="#FFFFFF"
            d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-179L0 64V0h75z"
          />
          <path
            fill="#C8102E"
            d="m424 281 216 159v40h-25L390 303l34-22zm-183-82L25 40V0h25l225 159-34 22zM640 0v17L448 159l34 22 158-117V0zm-415 321-34-22L25 417v23h25l166-119z"
          />
          <path fill="#FFFFFF" d="M240 0h160v480H240zM0 160h640v160H0z" />
          <path fill="#C8102E" d="M267 0h107v480H267zM0 187h640v107H0z" />
        </svg>
      );

    case "ru":
      // Russian Federation tricolor
      return (
        <svg
          viewBox="0 0 640 480"
          className={baseClasses}
          role="img"
          aria-label={title || "Russian flag"}
        >
          <rect width="640" height="160" fill="#FFFFFF" />
          <rect width="640" height="160" y="160" fill="#0039A6" />
          <rect width="640" height="160" y="320" fill="#D52B1E" />
        </svg>
      );

    case "ar":
      // United Arab Emirates
      return (
        <svg
          viewBox="0 0 640 480"
          className={baseClasses}
          role="img"
          aria-label={title || "UAE flag"}
        >
          <rect width="640" height="160" fill="#00732F" />
          <rect width="640" height="160" y="160" fill="#FFFFFF" />
          <rect width="640" height="160" y="320" fill="#000000" />
          <rect width="180" height="480" fill="#E30613" />
        </svg>
      );

    case "hi":
      // India (Tricolor + Ashoka Chakra)
      return (
        <svg
          viewBox="0 0 640 480"
          className={baseClasses}
          role="img"
          aria-label={title || "India flag"}
        >
          <rect width="640" height="160" fill="#FF9933" />
          <rect width="640" height="160" y="160" fill="#FFFFFF" />
          <rect width="640" height="160" y="320" fill="#128807" />
          <circle cx="320" cy="240" r="48" fill="none" stroke="#000080" strokeWidth="5" />
          <circle cx="320" cy="240" r="10" fill="#000080" />
          {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map((angle) => (
            <line
              key={angle}
              x1="320"
              y1="194"
              x2="320"
              y2="286"
              stroke="#000080"
              strokeWidth="2.5"
              transform={`rotate(${angle} 320 240)`}
            />
          ))}
        </svg>
      );

    case "zh":
      // China
      return (
        <svg
          viewBox="0 0 640 480"
          className={baseClasses}
          role="img"
          aria-label={title || "China flag"}
        >
          <rect width="640" height="480" fill="#DE2910" />
          <polygon
            points="128,45 143,92 192,92 153,121 168,168 128,139 88,168 103,121 64,92 113,92"
            fill="#FFDE00"
          />
          <polygon
            points="235,32 240,48 256,48 243,58 248,74 235,64 222,74 227,58 214,48 230,48"
            fill="#FFDE00"
            transform="rotate(-30 235 53)"
          />
          <polygon
            points="277,80 282,96 298,96 285,106 290,122 277,112 264,122 269,106 256,96 272,96"
            fill="#FFDE00"
            transform="rotate(-8 277 101)"
          />
          <polygon
            points="277,152 282,168 298,168 285,178 290,194 277,184 264,194 269,178 256,168 272,168"
            fill="#FFDE00"
            transform="rotate(16 277 173)"
          />
          <polygon
            points="235,200 240,216 256,216 243,226 248,242 235,232 222,242 227,226 214,216 230,216"
            fill="#FFDE00"
            transform="rotate(38 235 221)"
          />
        </svg>
      );

    case "de":
      // Germany
      return (
        <svg
          viewBox="0 0 640 480"
          className={baseClasses}
          role="img"
          aria-label={title || "Germany flag"}
        >
          <rect width="640" height="160" fill="#000000" />
          <rect width="640" height="160" y="160" fill="#DD0000" />
          <rect width="640" height="160" y="320" fill="#FFCE00" />
        </svg>
      );

    case "fr":
      // France
      return (
        <svg
          viewBox="0 0 640 480"
          className={baseClasses}
          role="img"
          aria-label={title || "France flag"}
        >
          <rect width="213.3" height="480" fill="#002395" />
          <rect x="213.3" width="213.4" height="480" fill="#FFFFFF" />
          <rect x="426.7" width="213.3" height="480" fill="#ED2939" />
        </svg>
      );

    case "ur":
      // Pakistan
      return (
        <svg
          viewBox="0 0 640 480"
          className={baseClasses}
          role="img"
          aria-label={title || "Pakistan flag"}
        >
          <rect width="640" height="480" fill="#01411C" />
          <rect width="160" height="480" fill="#FFFFFF" />
          <circle cx="415" cy="240" r="95" fill="#FFFFFF" />
          <circle cx="440" cy="215" r="86" fill="#01411C" />
          <polygon
            points="420,195 427,217 450,217 431,230 438,252 420,238 402,252 409,230 390,217 413,217"
            fill="#FFFFFF"
            transform="rotate(-28 420 223)"
          />
        </svg>
      );

    case "it":
      // Italy
      return (
        <svg
          viewBox="0 0 640 480"
          className={baseClasses}
          role="img"
          aria-label={title || "Italy flag"}
        >
          <rect width="213.3" height="480" fill="#009246" />
          <rect x="213.3" width="213.4" height="480" fill="#FFFFFF" />
          <rect x="426.7" width="213.3" height="480" fill="#CE2B37" />
        </svg>
      );

    case "tr":
      // Turkey
      return (
        <svg
          viewBox="0 0 640 480"
          className={baseClasses}
          role="img"
          aria-label={title || "Turkey flag"}
        >
          <rect width="640" height="480" fill="#E30A17" />
          <circle cx="270" cy="240" r="120" fill="#FFFFFF" />
          <circle cx="300" cy="240" r="96" fill="#E30A17" />
          <polygon
            points="390,200 401,230 432,230 407,248 416,278 390,260 364,278 373,248 348,230 379,230"
            fill="#FFFFFF"
            transform="rotate(-18 390 240)"
          />
        </svg>
      );

    default:
      return null;
  }
}
