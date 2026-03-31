import type { NavbarContent } from "@/lib/types";

type NavbarProps = {
  data: NavbarContent;
};

export function Navbar({ data }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur" id="top">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a className="text-lg font-bold text-brand-black" href="#">
          {data.brand}
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {data.links.map((link) => (
            <a key={link.label} className="text-brand-black/80 hover:text-brand-black" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white" href={data.cta.href}>
          {data.cta.label}
        </a>
      </div>
    </header>
  );
}
