"use client";

import React from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const LanguageSwitcher = ({ scrolled }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="text-white">
      <button
        onClick={toggleLanguage}
        className={`${
          scrolled
            ? "bg-[#000000e4] py-3 px-5 hover:bg-[#000000a8]"
            : "bg-[#FFFFFF1A] px-4 py-2 hover:bg-[#FFFFFF30]"
        } text-[12px] rounded-full transition-colors flex items-center gap-2`}
      >

        {locale === "en" ? (
          <>
            <span>العربية</span>
            <span>🇸🇦</span>
          </>
        ) : (
          <>
            <span>English</span>
            <span>🇬🇧</span>
          </>
        )}

      </button>
    </div>
  );
};

export default LanguageSwitcher;