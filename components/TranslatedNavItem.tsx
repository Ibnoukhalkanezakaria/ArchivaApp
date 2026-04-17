"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';

export default function TranslatedNavItem({ icon, labelKey, count, active = false, href }: any) {
  const { t } = useLanguage();
  const label = t(labelKey);

  return (
    <Link href={href || "#"} className={`relative w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${active ? "bg-white shadow-[0_4px_15px_rgb(0,0,0,0.03)] border border-[#F1F1F1]" : "border border-transparent hover:bg-white hover:shadow-sm"}`}>
      <div className={`flex flex-1 items-center gap-3 ${active ? "text-[#1C1C1C]" : "text-gray-500 group-hover:text-[#1C1C1C]"}`}>
         <div className={active ? "text-[#FE5729]" : "text-gray-400 group-hover:text-[#FE5729] transition-colors"}>{icon}</div>
         <span className="text-[13px] font-bold truncate">{label}</span>
      </div>
      {count !== undefined && count > 0 && (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${active ? "bg-[#FE5729] text-white" : "bg-[#F1F1F1] text-gray-500"}`}>
          {count}
        </span>
      )}
    </Link>
  );
}
