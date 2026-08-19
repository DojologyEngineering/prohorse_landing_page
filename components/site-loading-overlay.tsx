"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/app/asset/images/1logo.svg";

export function SiteLoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hideOverlay = () => {
      window.setTimeout(() => setIsVisible(false), 450);
    };

    if (document.readyState === "complete") {
      hideOverlay();
      return;
    }

    window.addEventListener("load", hideOverlay, { once: true });

    return () => {
      window.removeEventListener("load", hideOverlay);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(108,197,29,0.18),_transparent_42%),linear-gradient(180deg,_#071003_0%,_#0e1a0a_55%,_#132412_100%)] px-6 text-center text-white transition-opacity duration-500 ease-out"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="flex max-w-sm flex-col items-center gap-6">
        <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white shadow-2xl shadow-black/20">
          <Image
            src={logo}
            alt="Prohose Logo"
            width={112}
            height={112}
            priority
            className="h-full w-full scale-85 rounded-full object-contain"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full border-4 border-white/15 border-t-[#6CC51D] animate-spin" />
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8AE635]">
              Loading Prohose
            </p>
            <p className="whitespace-nowrap text-[clamp(1.15rem,2vw,1.75rem)] font-black leading-none">
              Fresh groceries are on the way
            </p>
            <p className="whitespace-nowrap text-[clamp(0.65rem,0.85vw,0.875rem)] text-white/70">
              Preparing the storefront and bringing in the latest offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}