import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import type { CtaContent } from "@/lib/types";
import ctaMobile from "@/app/asset/images/cta_mobile.webp";
import ctaWeb from "@/app/asset/images/cta_web.webp";

type CtaBannerProps = {
  data: CtaContent;
};

export function CtaBanner({ data }: CtaBannerProps) {
  const imageAlt = "Fresh vegetables in a basket";

  return (
    <section className="bg-brand-light py-14 md:py-16" id="cta">
      <div className="mx-auto w-full px-6 md:px-14">
        <div className="relative w-full overflow-hidden rounded-none border border-black/10">
          <div className="relative h-[512px] md:h-[332px]">
            <Image alt={imageAlt} className="hidden object-cover md:block" fill src={ctaWeb} />
            <Image alt={imageAlt} className="object-cover md:hidden" fill src={ctaMobile} />

            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(13,26,10,0.92)_6.17%,rgba(13,26,10,0.75)_54.38%,rgba(13,26,10,0.3)_93.83%)]" />

            <div className="relative z-10 flex h-full max-w-[530px] flex-col justify-center px-10 py-8">
              <h2 className="text-[41px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
                {data.title}
              </h2>
              <p className="mt-5 text-[13px] leading-[1.5] text-white/60 md:text-[14px]">{data.description}</p>
              <div className="mt-7 flex flex-col gap-3 md:flex-row md:items-center">
                <a
                  className="inline-flex h-12 items-center justify-center gap-2 bg-brand-green px-8 text-[14px] font-semibold text-white"
                  href={data.primaryCta.href}
                >
                  <FiShoppingBag className="h-4 w-4" />
                  {data.primaryCta.label}
                </a>
                <a
                  className="inline-flex h-12 items-center justify-center border border-white/25 bg-white/6 px-8 text-[14px] font-semibold text-white backdrop-blur-[1px]"
                  href={data.secondaryCta.href}
                >
                  Follow on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
