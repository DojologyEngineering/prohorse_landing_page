import type { CtaContent } from "@/lib/types";

type CtaBannerProps = {
  data: CtaContent;
};

export function CtaBanner({ data }: CtaBannerProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20" id="cta">
      <div className="rounded-md border bg-muted/40 p-8">
        <h2 className="text-3xl font-semibold tracking-tight">{data.title}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{data.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-md bg-primary px-4 py-2 text-primary-foreground" href={data.primaryCta.href}>
            {data.primaryCta.label}
          </a>
          <a className="rounded-md border px-4 py-2" href={data.secondaryCta.href}>
            {data.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
