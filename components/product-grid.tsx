import type { ProductsContent } from "@/lib/types";

type ProductGridProps = {
  data: ProductsContent;
};

export function ProductGrid({ data }: ProductGridProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20" id="products">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm text-primary">{data.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{data.title}</h2>
        </div>
        <a className="text-sm text-primary" href={data.viewAllHref}>
          View all
        </a>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.items.map((item) => (
          <article key={item.name} className="rounded-md border p-4">
            <p className="font-medium">{item.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.category}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
