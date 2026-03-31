import type { TeamContent } from "@/lib/types";

type TeamProps = {
  data: TeamContent;
};

export function Team({ data }: TeamProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20" id="team">
      <p className="text-sm text-primary">{data.eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight">{data.title}</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {data.members.map((member) => (
          <article key={member.name} className="rounded-md border p-4">
            <p className="font-medium">{member.name}</p>
            <p className="text-sm text-primary">{member.role}</p>
            <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
