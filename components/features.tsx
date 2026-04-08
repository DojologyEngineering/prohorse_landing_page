import type { FeatureItem } from "@/lib/types";

const ICON_URLS = [
  "/icons/leaf.svg",    // Locally Sourced
  "/icons/shield.svg",  // Quality Assured
  "/icons/flash.svg",   // Fast Delivery
  "/icons/card.svg",    // Secure Payments
  "/icons/headset.svg", // 24/7 Support
];

type FeaturesProps = {
  items: FeatureItem[];
};

export function Features({ items }: FeaturesProps) {
  return (
    <section className="bg-white w-full pt-20" id="features">
      <div className="mx-auto w-full px-6 md:px-14">
        {/* Section Header — centered */}
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full bg-[#f0fce4] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#6cc51d]">
            Why Prohose
          </span>
          <h2 className="mt-4 text-[32px] font-black leading-[1.15] tracking-tight text-[#101828] sm:text-[40px]">
            Built for your convenience
          </h2>
        </div>

        {/* Feature Cards — 1 col mobile, 5 col desktop */}
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col items-center border border-[#f0f0f0] bg-white px-6 py-8 text-center shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] sm:px-4 sm:py-6"
            >
              {/* Icon */}
              <div className="flex size-12 items-center justify-center bg-[#f0fce4]">
                {ICON_URLS[i] ? (
                  <img
                    src={ICON_URLS[i]}
                    alt={item.title}
                    className="size-6"
                  />
                ) : (
                  <span className="text-[#6cc51d] text-xl">✦</span>
                )}
              </div>
              {/* Title */}
              <p className="mt-5 font-extrabold text-[14.72px] text-[#111] leading-snug">
                {item.title}
              </p>
              {/* Description */}
              <p className="mt-2 text-xs text-[#999] leading-[1.625]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mini CTA Banner — stacks vertically on mobile */}
      <div className="mx-auto w-full px-6 md:px-14 mt-14 pb-20">
        <div
          className="flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-10"
          style={{
            background: "linear-gradient(172.454deg, #0d1a0a 0%, #1a3810 100%)",
            minHeight: "144px",
          }}
        >
          <div className="flex flex-col gap-1">
            <p className="text-[22px] font-black text-white leading-tight tracking-tight sm:text-[25.6px]">
              Ready to taste the difference?
            </p>
            <p className="text-[13px] text-white/50 sm:text-[14.4px]">
              Join hundreds of Cambodian families shopping fresh.
            </p>
          </div>
          <a
            href="#"
            className="w-full bg-[#6cc51d] px-7 py-3 text-center text-sm font-bold text-white hover:bg-[#5aad17] transition-colors sm:w-auto sm:shrink-0"
          >
            Start Shopping →
          </a>
        </div>
      </div>
    </section>
  );
}
