'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";


export default function ChatHeader() {
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof document === "undefined") return false;
        return document.documentElement.classList.contains("dark");
    });

    useEffect(() => {
        const target = document.documentElement;
        const obs = new MutationObserver(() => {
            setIsDark(target.classList.contains("dark"));
        });
        obs.observe(target, { attributes: true, attributeFilter: ["class"] });
        return () => obs.disconnect();
    }, []);

    const t = useTranslations("chatboot")
  return (
    <header className=" pt-6 pb-4 px-5 relative text-background box-border w-full bg-transparent">
      <div className="flex items-start justify-between">
        <Image
            width={120}
            height={40}
            src={isDark ?  "/ccslogoDark.svg" : "/ccslogoligth.svg" }
            alt="Avatar"
        />

        <button className="button transparent compact md:hidden">
          ✕
        </button>
      </div>

      <h2 className="mt-4 text-2xl mb-1.5 font-medium text-n-slate-12">
        {t("hello")}
      </h2>

      <p className="text-lg leading-normal text-n-slate-11">
        {t("h1")}
      </p>
    </header>
  );
}