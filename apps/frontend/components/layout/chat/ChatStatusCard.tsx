'use client';

import { useTranslations } from "next-intl";
type ChatStatusCardProps = {
  onOpenChat?: () => void;
};

export default function ChatStatusCard({ onOpenChat }: ChatStatusCardProps) {

  const t = useTranslations("chatboot");

  return (
    <div className="z-50 flex flex-col justify-end flex-1 w-full p-4 gap-4">
      <div className="flex flex-col gap-3 w-full shadow text-background outline outline-n-container rounded-xl bg-n-background dark:bg-n-solid-2 px-5 py-4">

        <div className="flex flex-col gap-1">
          <div className="font-medium text-n-slate-12">
            {t("away_title")}
          </div>

          <span className="text-n-slate-11">
            {t("away_description")}
          </span>
        </div>

        <button 
        onClick={onOpenChat}
        className="inline-flex cursor-pointer items-center gap-1 font-medium text-n-slate-12" style={{ color: "rgb(69, 92, 233)" }}>
          <span>{t("start_conversation")}</span>
          <i className="i-lucide-chevron-right size-5 mt-px"></i>
        </button>
      </div>
    </div>
  );
}