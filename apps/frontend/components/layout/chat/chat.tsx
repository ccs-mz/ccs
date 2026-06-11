'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatHeader from "./ChatHeader";
import ChatStatusCard from "./ChatStatusCard";
import ChatModel from "./Chatmodel";

type ChatLayoutProps = {
  isVisible: boolean;
};

export default function ChatLayout({ isVisible }: ChatLayoutProps) {
  const [showModel, setShowModel] = useState(false);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed flex rounded-2xl flex-col h-screen w-screen md:h-[80%] right-6 md:w-1/2 lg:w-1/3 bg-foreground z-60"
        >
          {showModel ? (
            <ChatModel onClose={() => setShowModel(false)} />
          ) : (
            <>
              <div className="expanded">
                <ChatHeader />
              </div>

              <ChatStatusCard onOpenChat={() => setShowModel(true)}/>

            </>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}



    