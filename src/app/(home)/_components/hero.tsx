"use client";

import { Mouse } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollIndicator() {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-75">
      <Mouse className="w-8 h-8 animate-bounce-blink text-gray-500" />
      <span className="mt-2 text-xs text-gray-500 animate-blink">
        Scroll down
      </span>
    </div>
  );
}

export default function Hero() {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setShowIndicator(true);
      } else {
        setShowIndicator(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-xl min-h-[600px] lg:min-h-[750px] gap-8 px-4">
      {/* Judul Hero */}
      <div className="text-[32px] lg:text-[48px] font-bold text-center">
        <h1>
          Raih Peluang untuk <span className="text-yellow-400">Berinovasi</span>{" "}
          dan
        </h1>
        <h1>Wujudkan Karier Impian Menjadi Kenyataan</h1>
      </div>

      {/* Deskripsi Hero */}
      <p className="text-[14px] lg:text-[16px] text-gray-400 text-center">
        Temukan karier impian mu disini!!
      </p>

      {showIndicator && <ScrollIndicator />}
    </div>
  );
}
