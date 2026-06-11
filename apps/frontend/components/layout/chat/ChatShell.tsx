'use client';

import { useState } from "react";
import ChatLayout from "./chat";
import ButtonChat from "@/components/ui/BtnChat";

export default function ChatShell() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <ChatLayout isVisible={chatOpen} />
      <ButtonChat isOpen={chatOpen} onToggle={() => setChatOpen((value) => !value)} />
    </>
  );
}
