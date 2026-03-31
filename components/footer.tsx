import type { FooterContent } from "@/lib/types";

type FooterProps = {
  data: FooterContent;
};

export function Footer({ data }: FooterProps) {
  return (
    <footer className="border-t bg-muted/30" id="footer">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <p className="font-semibold">{data.brand}</p>
        <p className="mt-2 text-sm text-muted-foreground">{data.description}</p>
        <nav className="mt-6 flex flex-wrap gap-4 text-sm">
          {data.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
