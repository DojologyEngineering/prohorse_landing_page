import type { TeamContent } from "@/lib/types";

type TeamProps = {
  data: TeamContent;
};

// Color accent per card index for core team
const CORE_COLORS = [
  { bar: "bg-[#6cc51d]", avatar: "bg-[#6cc51d]", role: "text-[#6cc51d]" },
  { bar: "bg-[#f9a825]", avatar: "bg-[#f9a825]", role: "text-[#f9a825]" },
  { bar: "bg-[#1f6fa2]", avatar: "bg-[#1f6fa2]", role: "text-[#1f6fa2]" },
  { bar: "bg-[#6cc51d]", avatar: "bg-[#6cc51d]", role: "text-[#6cc51d]" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function Team({ data }: TeamProps) {
  const founders = data.founders ?? [];
  const coreMembers = data.members ?? [];

  return (
    <section className="bg-[#f8faf8] w-full py-20" id="team">
      <div className="mx-auto w-full px-6 md:px-14">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-[#f0fce4] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#6cc51d]">
            {data.eyebrow}
          </span>
          <h2 className="mt-4 text-[32px] font-black leading-[1.1] tracking-tight text-[#101828] sm:text-[40px]">
            {data.title}
          </h2>
        </div>

        {/* Founder Cards — 1 col on mobile, 2 cols on desktop */}
        {founders.length > 0 && (
          <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-2 md:gap-8">
            {founders.map((founder, i) => {
              const color =
                i === 0
                  ? { bar: "bg-[#6cc51d]", avatar: "bg-[#6cc51d]", role: "text-[#6cc51d]", border: "border-l-[#6cc51d]", quote: "text-[#6cc51d]" }
                  : { bar: "bg-[#1f6fa2]", avatar: "bg-[#1f6fa2]", role: "text-[#1f6fa2]", border: "border-l-[#1f6fa2]", quote: "text-[#1f6fa2]" };
              return (
                <div
                  key={founder.name}
                  className="overflow-hidden border border-[#f3f4f6] bg-white"
                >
                  <div className={`h-[6px] w-full ${color.bar}`} />
                  <div className="flex flex-col gap-6 p-6 sm:p-8">
                    {/* Avatar + Name */}
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div
                        className={`flex size-14 shrink-0 items-center justify-center text-white font-black text-[16px] sm:size-16 sm:text-[17.6px] ${color.avatar}`}
                      >
                        {getInitials(founder.name)}
                      </div>
                      <div>
                        <p className="font-extrabold text-[15px] text-[#101828] leading-tight sm:text-[16.8px]">
                          {founder.name}
                        </p>
                        <p className={`text-xs font-bold mt-0.5 ${color.role}`}>
                          {founder.role}
                        </p>
                      </div>
                    </div>
                    {/* Quote */}
                    <div className={`relative border-l-[3px] ${color.border} pl-5`}>
                      <span
                        className={`absolute -left-[9px] -top-3 text-[36px] font-normal ${color.quote} opacity-25 leading-none select-none`}
                      >
                        &quot;
                      </span>
                      <p className="text-sm text-[#6a7282] leading-[1.85]">
                        {founder.bio}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Core Team Divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-[#e5e7eb]" />
          <span className="rounded-sm bg-[#e8f3fb] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1f6fa2]">
            Core Team
          </span>
          <div className="flex-1 h-px bg-[#e5e7eb]" />
        </div>

        {/* Core Team Grid — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {coreMembers.map((member, i) => {
            const color = CORE_COLORS[i % CORE_COLORS.length];
            return (
              <div
                key={member.name}
                className="overflow-hidden border border-[#f3f4f6] bg-white"
              >
                <div className={`h-[4px] w-full ${color.bar}`} />
                <div className="p-4 sm:p-5">
                  {/* Avatar */}
                  <div
                    className={`flex size-10 items-center justify-center text-white font-black text-[12px] sm:size-12 sm:text-[13.6px] ${color.avatar}`}
                  >
                    {getInitials(member.name)}
                  </div>
                  {/* Name & Role */}
                  <p className="mt-3 font-extrabold text-[13px] text-[#101828] leading-tight sm:text-[14.4px]">
                    {member.name}
                  </p>
                  <p className={`text-[11px] font-bold mt-0.5 sm:text-xs ${color.role}`}>
                    {member.role}
                  </p>
                  {/* Divider */}
                  <div className="my-3 h-px bg-[#f3f4f6]" />
                  {/* Bio / Quote */}
                  <p className="text-[11px] italic text-[#99a1af] leading-[1.75] sm:text-xs">
                    &quot;{member.bio}&quot;
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
