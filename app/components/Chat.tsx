'use client'

import { useState } from "react";
import { LuBotMessageSquare } from "react-icons/lu";

export default function Chat() {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed -bottom-40 right-0">

      <div className="shadow-2xl z-50 fixed bottom-30 right-5 border-4 border-neutral-500">
        {show && 
          <iframe
            className="h-150 w-96"
            src="https://oman-chat.vercel.app/"
            title="ai chat "
          ></iframe>
        }
      </div>
      <button 
        className="text-3xl cursor-pointer p-5 rounded-full bg-neutral-800 text-gray-100 absolute bottom-50 right-10 shadow z-40"
        onClick={() => setShow(!show)}><LuBotMessageSquare /></button>
    </div>
  );
}
