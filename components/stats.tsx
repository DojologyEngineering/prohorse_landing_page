import type { StatItem } from "@/lib/types";

type StatsProps = {
  items: StatItem[];
};

export function Stats({ items }: StatsProps) {
  return (
    <section className="bg-white border-b border-gray-200" id="stats">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => (
            <article
              key={item.label}
              className="flex flex-col items-start px-8 py-4"
            >
              <p className="text-4xl font-extrabold text-[#6CC51D] tracking-tight">
                {item.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
