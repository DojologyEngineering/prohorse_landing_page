"use client";

import { useState } from "react";
import type { ProductsContent } from "@/lib/types";

const PRODUCT_IMAGES: Record<string, string> = {
  "Mixed Greens": "/images/img6.webp",
  "Fresh Melon": "/images/img7.webp",
  "Pink Guava": "/images/img8.webp",
  "Fresh Guava": "/images/img9.webp",
  "Cambodian Mango": "/images/cambodian-mango.png",
  "Sweet Watermelon": "/images/sweet-watermelon.png",
  "Dragon Fruit": "/images/Dragon-Fruit.png",
  "Jasmine Rice": "/images/Jasmine-Rice.png",
};

const CATEGORIES = ["All", "Vegetables", "Fruits", "Groceries"] as const;
type Category = (typeof CATEGORIES)[number];

type ProductGridProps = {
  data: ProductsContent;
};

export function ProductGrid({ data }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredItems =
    activeCategory === "All"
      ? data.items
      : data.items.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-[#f8faf8] w-full py-20" id="products">
      <div className="mx-auto w-full px-6 md:px-14">
        {/* Header — stacks on mobile, side-by-side on desktop */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#f0fce4] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#6cc51d]">
              {data.eyebrow}
            </span>
            <h2 className="mt-2 text-[32px] font-black leading-[1.15] tracking-tight text-[#101828] sm:text-[40px]">
              {data.title}
            </h2>
            {/* View All sits below title on mobile */}
            <a
              href={data.viewAllHref}
              className="mt-1 inline-block text-sm font-bold text-[#6cc51d] hover:underline sm:hidden"
            >
              View All →
            </a>
          </div>
          {/* View All at right on desktop */}
          <a
            href={data.viewAllHref}
            className="hidden shrink-0 text-sm font-bold text-[#6cc51d] hover:underline sm:inline-block"
          >
            View All →
          </a>
        </div>

        {/* Category Filters — wrap on mobile */}
        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-none px-5 py-2 text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-[#6cc51d] text-white"
                  : "border border-[#e5e7eb] bg-white text-[#666] hover:bg-[#f0fce4]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid — 2 cols on mobile, 4 on desktop */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <article
              key={item.name}
              className="flex flex-col overflow-hidden border border-[#f0f0f0] bg-white shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)]"
            >
              <div className="relative h-[150px] w-full overflow-hidden sm:h-[200px]">
                {PRODUCT_IMAGES[item.name] ? (
                  <img
                    src={PRODUCT_IMAGES[item.name]}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#f0fce4]">
                    <span className="text-4xl">🌿</span>
                  </div>
                )}
              </div>
              <div className="flex h-12 items-center px-3 sm:h-14 sm:px-4">
                <p className="font-bold text-[13px] text-[#101828] leading-snug sm:text-[14.72px]">
                  {item.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
