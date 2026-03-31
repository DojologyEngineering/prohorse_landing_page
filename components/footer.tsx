import type { FooterContent } from "@/lib/types";
import { FiFacebook, FiGlobe } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { LuLeaf } from "react-icons/lu";

type FooterProps = {
  data: FooterContent;
};

function SocialIcon({ icon }: { icon: "facebook" | "globe" }) {
  if (icon === "facebook") return <FiFacebook className="h-[18px] w-[18px]" />;
  return <FiGlobe className="h-[18px] w-[18px]" />;
}

function ContactIcon({ icon }: { icon: "map-pin" | "globe" | "facebook" }) {
  if (icon === "map-pin") return <GrLocation className="h-[15px] w-[15px]" />;
  if (icon === "facebook") return <FiFacebook className="h-[15px] w-[15px]" />;
  return <FiGlobe className="h-[15px] w-[15px]" />;
}

export function Footer({ data }: FooterProps) {
  const brandLabel = data.brand.replace(/\.+$/, "");

  return (
    <footer className="bg-[#0D1A0A] text-white" id="footer">
      <div className="mx-auto w-full px-6 md:px-14 pb-5 pt-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_0.8fr_0.6fr]">
          <section>
            <a className="inline-flex items-center gap-3" href="#">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-brand-black">
                <LuLeaf className="h-[22px] w-[22px] text-white" />
              </span>
              <span className="inline-flex items-end gap-0.5 text-[19px] font-black leading-none tracking-[-0.01em]">
                <span>{brandLabel}</span>
                <span className="mb-[2px] inline-block h-[4px] w-[4px] bg-brand-green" />
              </span>
            </a>
            <p className="mt-7 max-w-[400px] text-[14px] font-normal leading-[1.62] text-white/45">
              {data.description}
            </p>
            <div className="mt-7 flex gap-3">
              {data.socials.map((social) => (
                <a
                  key={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/90 transition hover:bg-white/20"
                  href={social.href}
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-[12px] font-medium tracking-[0.08em] text-white/30">{data.navTitle}</h3>
            <nav className="mt-6 flex flex-col gap-3.5 text-[14px] font-normal leading-[1.42] text-white/50">
              {data.links.map((link) => (
                <a key={link.label} className="transition hover:text-white/80" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </section>

          <section>
            <h3 className="text-[12px] font-medium tracking-[0.08em] text-white/30">{data.contactTitle}</h3>
            <ul className="mt-6 space-y-4">
              {data.contacts.map((contact) => (
                <li key={contact.label}>
                  <a
                    className="inline-flex items-center gap-3 text-[14px] font-normal leading-[1.42] text-white/50 hover:text-white/80"
                    href={contact.href}
                  >
                    <span className="text-brand-green">
                      <ContactIcon icon={contact.icon} />
                    </span>
                    <span>{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-2 md:pb-6 *:text-[12px] font-normal text-white/25 md:flex-row md:items-center md:justify-between">
            <p>{data.copyright}</p>
            <a className="hover:text-white/70" href={data.poweredByHref}>
              {data.poweredBy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
