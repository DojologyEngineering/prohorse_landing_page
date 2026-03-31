import type { FeatureItem } from "@/lib/types";

type FeaturesProps = {
  items: FeatureItem[];
};

export function Features({ items }: FeaturesProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20" id="features">
      <p className="text-sm text-primary">WHY CHOOSE US</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight">Built for your convenience</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item) => (
          <article key={item.title} className="rounded-md border p-4">
            <p className="font-medium">{item.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
