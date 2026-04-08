import type { HeroContent } from "@/lib/types";
import Image from "next/image";
import heroBg from "@/app/asset/images/Hero.svg";
import Icon from "@/app/asset/icons/icon-asset";
import container from "@/app/asset/images/Container.svg";

type HeroProps = {
  data: HeroContent;
};

export function Hero({ data }: HeroProps) {
  return (
    <section
      className="w-full min-h-screen flex items-center"
      id="hero"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="mx-auto w-full px-6 md:px-14 flex items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 border border-[#6CC51D]/50 bg-[#6CC51D]/15 px-4 py-1 text-[12px] font-light text-[#8AE635]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#8AE635]" />
            Cambodia&apos;s Fresh Grocery Platform
          </div>

          <h1 className="mt-5 text-6xl md:text-[72px] font-black leading-[1.05] tracking-tight text-white">
            Farm-fresh <br />
            <span className="text-[#6CC51D]">groceries</span> <br />
            delivered to you
            <span className="ml-[3px] inline-block pl-1 h-[13px] w-[13px] bg-brand-green" />
          </h1>

          <p className="mt-5 text-[17px] text-white/70 leading-relaxed max-w-lg font-light">
            Locally sourced from Cambodian farmers. Safe, fresh and at your door
            — fast
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center gap-3 rounded-none bg-[#6CC51D] px-8 py-3.5 text-[15px] font-medium text-white hover:bg-[#5aad16] transition-colors"
              href={data.primaryCta.href}
            >
              <Icon name="bag" />
              {data.primaryCta.label}
              <Icon name="arrowRight" />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-none border border-white/20 bg-transparent px-8 py-3.5 text-[15px] font-medium text-white/90 hover:bg-white/5 transition-colors"
              href={data.secondaryCta.href}
            >
              {data.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="hidden md:flex flex-1 justify-end">
          <Image
            src={container}
            alt="Hero"
            className="w-full max-w-[580px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
