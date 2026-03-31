import type { StoryContent } from "@/lib/types";

type StoryProps = {
  data: StoryContent;
};

export function Story({ data }: StoryProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20" id="story">
      <p className="text-sm text-primary">{data.eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight">{data.title}</h2>
      <p className="mt-4 max-w-3xl text-muted-foreground">{data.description}</p>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {data.highlights.map((highlight) => (
          <article key={highlight.title} className="rounded-md border p-4">
            <p className="font-medium">{highlight.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{highlight.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
