import type { HeroContent } from "@/lib/types";

type HeroProps = {
  data: HeroContent;
};

export function Hero({ data }: HeroProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20" id="hero">
      <p className="text-sm text-muted-foreground">{data.eyebrow}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">{data.title}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{data.description}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a className="rounded-md bg-primary px-4 py-2 text-primary-foreground" href={data.primaryCta.href}>
          {data.primaryCta.label}
        </a>
        <a className="rounded-md border px-4 py-2" href={data.secondaryCta.href}>
          {data.secondaryCta.label}
        </a>
      </div>
    </section>
  );
}
