import type { FooterContent } from "@/lib/types";
import Image from "next/image";
import { FiFacebook, FiLinkedin  } from "react-icons/fi";
import { PiTelegramLogoBold } from "react-icons/pi";

type FooterProps = {
  data: FooterContent;
};

const SOCIAL_ICON_CLASS = "h-[18px] w-[18px]";
const CONTACT_ICON_CLASS = "h-[15px] w-[15px]";

const socialIconMap = {
  facebook: FiFacebook,
  linkedin: FiLinkedin,
  telegram: PiTelegramLogoBold,
} as const;

const contactIconMap = {
  linkedin: FiLinkedin,
  facebook: FiFacebook,
  telegram: PiTelegramLogoBold,
} as const;

export function Footer({ data }: FooterProps) {
  const brandLabel = data.brand.replace(/\.+$/, "");

  return (
    <footer className="bg-[#0D1A0A] text-white" id="footer">
      <div className="mx-auto w-full px-6 md:px-14 pb-5 pt-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_0.8fr_0.6fr]">
          <section>
            <a className="inline-flex items-center gap-2" href="#">
              <Image src="/1logo.svg" alt="Prohose logo" width={32} height={32} />
              <span className="inline-flex items-end gap-0.5 text-[19px] font-black leading-none tracking-[-0.01em]">
                <span>{brandLabel}</span>
                <span className="mb-0.5 inline-block h-1 w-1 bg-brand-green" />
              </span>
            </a>
            <p className="mt-7 max-w-100 text-[14px] font-normal leading-[1.62] text-white/45">
              {data.description}
            </p>
            <div className="mt-7 flex gap-3">
              {data.socials.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/90 transition hover:bg-white/20"
                    href={social.href}
                  >
                    <Icon className={SOCIAL_ICON_CLASS} />
                  </a>
                );
              })}
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
              {data.contacts.map((contact) => {
                const Icon = contactIconMap[contact.icon];
                return (
                  <li key={contact.label}>
                    <a
                      className="inline-flex items-center gap-3 text-[14px] font-normal leading-[1.42] text-white/50 hover:text-white/80"
                      href={contact.href}
                    >
                      <span className="text-brand-green">
                        <Icon className={CONTACT_ICON_CLASS} />
                      </span>
                      <span>{contact.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5">
          <div className="flex flex-col items-center gap-2 text-[12px] font-normal text-white/25 md:flex-row md:justify-between md:pb-6">
            <p>{data.copyright}</p>
            <a
              className="underline decoration-current underline-offset-4 transition hover:text-white/70"
              href={data.poweredByHref}
            >
              {data.poweredBy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
