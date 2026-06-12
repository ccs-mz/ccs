'use client';

import { BiSolidMessageRounded } from "react-icons/bi";
import { X } from "lucide-react";

type ButtonChatProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function ButtonChat({ isOpen, onToggle }: ButtonChatProps) {


    return (
        <button
          onClick={onToggle}
          className="fixed bottom-4 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gray-500 text-amber-50 transition hover:bg-gray-600"
        >
          {isOpen ? <X size={40} /> : <BiSolidMessageRounded size={40} />}
        </button>
    );
}
