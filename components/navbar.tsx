import type { NavbarContent } from "@/lib/types";
import Icon from "@/app/asset/icons/icon-asset";
import Image from "next/image";
import logo from "@/app/asset/images/1logo.svg";

type NavbarProps = {
  data: NavbarContent;
};

export function Navbar({ data }: NavbarProps) {
  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{ backgroundColor: "#0E1A0A" }}
      id="top"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-2 py-4">
        <a className="text-lg font-bold text-[#FFFFFF] flex items-center gap-2" href="#">
          <Image src={logo} alt="Prohorse Logo" width={32} height={32} />
          <div>
            {data.brand}
            <span style={{ color: '#6CC51D' }}>.</span>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {data.links.map((link) => (
            <a
              key={link.label}
              className="text-[#FFFFFF] hover:text-brand-black"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="bg-brand-green px-5 py-2 text-sm font-semibold text-white flex items-center gap-3"
          href={data.cta.href}
        >
          {/* Shopping bag icon */}
          <Icon name="bag" />
          {data.cta.label}
        </a>
      </div>
    </header>
  );
}
