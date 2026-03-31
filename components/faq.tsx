import type { FaqItem } from "@/lib/types";

type FaqProps = {
  items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20" id="faq">
      <p className="text-sm text-primary">FAQ</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight">Common questions</h2>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <article key={item.question} className="rounded-md border p-4">
            <p className="font-medium">{item.question}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
