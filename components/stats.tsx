import type { StatItem } from "@/lib/types";

type StatsProps = {
  items: StatItem[];
};

export function Stats({ items }: StatsProps) {
  return (
    <section className="border-y bg-muted/30" id="stats">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
        {items.map((item) => (
          <article key={item.label}>
            <p className="text-2xl font-semibold">{item.value}</p>
            <p className="text-sm text-muted-foreground">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
