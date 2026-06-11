'use client';

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus, Mic, Send } from "lucide-react";

type ChatModelProps = {
  onClose?: () => void;
};

export default function ChatModel({ onClose }: ChatModelProps) {
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

  const t = useTranslations("chatboot");

  return (

        <div className="relative flex flex-col h-full w-full text-background">

 
            <div className="shadow-[0_10px_15px_-16px_rgba(50,50,93,0.08),0_4px_6px_-8px_rgba(50,50,93,0.04)]">
                <header className="flex justify-between w-full p-4 bg-n-background gap-2">

                <div className="flex items-center gap-3">

                    <button
                      type="button"
                      onClick={onClose}
                      className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition"
                    >
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <path
                          d="M15.53 4.22a.75.75 0 0 1 0 1.06L8.81 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25a.75.75 0 0 1 1.06 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <Image
                    width={110}
                    height={36}
                    src={isDark ? "/ccslogoDark.svg" : "/ccslogoligth.svg"}
                    alt="Logo"
                    />

                    <div className="flex flex-col leading-tight">
                    <span className="text-sm font-medium text-n-slate-12">
                        CCS AI
                    </span>
                    <span className="text-xs text-n-slate-11">
                        {t("modelBio")}
                    </span>
                    </div>

                </div>
                </header>
            </div>

    
            <div className="flex flex-col flex-1 overflow-hidden bg-n-slate-2 dark:bg-n-solid-1">
                <div className="flex-1 overflow-auto">
                <div className="conversation--container light-scheme">
                    <div className="conversation-wrap" />
                </div>
                </div>


                <footer className="p-4 mb-4">

                <div className="flex items-end gap-2 bg-n-background rounded-xl px-3 py-2 shadow-sm border border-black/5 dark:border-white/10">


                    <label className="cursor-pointer p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition">
                    <Plus size={20} />
                    <input
                        type="file"
                        className="hidden"
                        accept="image/*,audio/*,video/*,.pdf,.csv,.json"
                    />
                    </label>

                    <textarea
                    placeholder="Type your message..."
                    rows={1}
                    className="flex-1 resize-none bg-transparent outline-none text-sm px-1 py-2 max-h-28"
                    />


                    <button className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition">
                    <Mic size={20} />
                    </button>


                    <button className="p-2 rounded-lg bg-primary text-black hover:bg-primary/90 transition">
                    <Send size={20} />
                    </button>

                </div>

                </footer>
            </div>
        </div>

    );
}