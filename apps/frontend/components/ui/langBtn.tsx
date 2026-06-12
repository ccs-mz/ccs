"use client";

import {Languages} from "lucide-react";
import {useLocale} from "next-intl";
import {createNavigation} from "next-intl/navigation";

const {useRouter, usePathname} = createNavigation();

export default function LangButton() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "pt" ? "en" : "pt";


  return (
    <button
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className="flex relative items-center justify-center cursor-pointer gap-1  rounded-xl p-2 text-xs text-center mx-2 text-foreground "
    >
      <div className=" w-full p-2 backdrop-blur-[0.625rem]  absolute h-full bg-gray-500/50 rounded-full"></div>
      <Languages size={18} className="z-10"/>
      <span className="z-10 text-center">{locale.toUpperCase()}</span>
    </button>
  );
}