"use client";

import { useState } from "react";
import type { NavbarContent } from "@/lib/types";
import Icon from "@/app/asset/icons/icon-asset";
import Image from "next/image";
import logo from "@/app/asset/images/1logo.svg";

type NavbarProps = {
  data: NavbarContent;
};

export function Navbar({ data }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b border-[#0E1A0A]"
      style={{ backgroundColor: "#0E1A0A" }}
      id="top"
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-2 py-4">
        <a
          className="text-lg font-bold text-[#FFFFFF] flex items-center gap-2"
          href="#"
        >
          <Image src={logo} alt="Prohorse Logo" width={32} height={32} />
          <div>
            {data.brand}
            <span style={{ color: "#6CC51D" }}>.</span>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {data.links.map((link) => (
            <a
              key={link.label}
              className="text-[#FFFFFF] hover:text-brand-green"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            className="hidden md:flex bg-brand-green px-5 py-2 text-sm font-medium text-white items-center gap-3 hover:bg-[#5aad16] transition-colors"
            href={data.cta.href}
          >
            {/* Shopping bag icon */}
            <Icon name="bag" />
            {data.cta.label}
          </a>
          <button 
            className="flex md:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={isOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0E1A0A] shadow-xl transition-all duration-300 ease-in-out grid ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 border-t border-[#1a2d13]"
            : "grid-rows-[0fr] opacity-0 border-transparent pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col px-4 pt-4 pb-6 gap-4">
            {data.links.map((link) => (
              <a
                key={link.label}
                className="text-[#FFFFFF] text-sm font-medium hover:text-[#6CC51D] px-2 py-2"
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
