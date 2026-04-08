import Image from "next/image";
import type { TeamContent } from "@/lib/types";
import team1 from "@/app/asset/images/team1.webp";
import team2 from "@/app/asset/images/team2.webp";
import team3 from "@/app/asset/images/team3.webp";
import team4 from "@/app/asset/images/team4.webp";
import team5 from "@/app/asset/images/team5.webp";
import team6 from "@/app/asset/images/team6.webp";

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

const TEAM_IMAGE_MAP = {
  "Lon Molika Chau": team1,
  "Sophea Tek": team2,
  "Lymeng PEN": team3,
  "Sophanha Dout": team4,
  "Sharma Kumarilaxmi": team5,
  "Sodalin Thai": team6,
} as const;

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
              const photo = TEAM_IMAGE_MAP[founder.name as keyof typeof TEAM_IMAGE_MAP];
              const hasBio = founder.bio.trim().length > 0;
              const color =
                i === 0
                  ? { bar: "bg-[#6cc51d]", avatar: "bg-[#6cc51d]", role: "text-[#6cc51d]", border: "border-l-[#6cc51d]" }
                  : { bar: "bg-[#1f6fa2]", avatar: "bg-[#1f6fa2]", role: "text-[#1f6fa2]", border: "border-l-[#1f6fa2]" };
              return (
                <div
                  key={founder.name}
                  className="overflow-hidden border border-[#f3f4f6] bg-white"
                >
                  <div className={`h-1.5 w-full ${color.bar}`} />
                  <div className="flex flex-col gap-6 p-6 sm:p-8">
                    {/* Avatar + Name */}
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div
                        className={`relative flex size-16 shrink-0 items-center justify-center overflow-hidden text-white font-black text-[16px] sm:size-20 sm:text-[17.6px] ${color.avatar}`}
                      >
                        {photo ? (
                          <Image
                            src={photo}
                            alt={founder.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        ) : (
                          getInitials(founder.name)
                        )}
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
                    {hasBio && (
                      <div className={`border-l-[3px] ${color.border} pl-5`}>
                        <p className="text-sm italic text-[#6a7282] leading-[1.85]">
                          &quot;{founder.bio}&quot;
                        </p>
                      </div>
                    )}
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
            const photo = TEAM_IMAGE_MAP[member.name as keyof typeof TEAM_IMAGE_MAP];
            const hasBio = member.bio.trim().length > 0;
            const color = CORE_COLORS[i % CORE_COLORS.length];
            return (
              <div
                key={member.name}
                className="overflow-hidden border border-[#f3f4f6] bg-white"
              >
                <div className={`h-1 w-full ${color.bar}`} />
                <div className="p-4 sm:p-5">
                  {/* Avatar */}
                  <div
                    className={`relative flex size-12 items-center justify-center overflow-hidden text-white font-black text-[12px] sm:size-14 sm:text-[13.6px] ${color.avatar}`}
                  >
                    {photo ? (
                      <Image
                        src={photo}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    ) : (
                      getInitials(member.name)
                    )}
                  </div>
                  {/* Name & Role */}
                  <p className="mt-3 font-extrabold text-[13px] text-[#101828] leading-tight sm:text-[14.4px]">
                    {member.name}
                  </p>
                  <p className={`text-[11px] font-bold mt-0.5 sm:text-xs ${color.role}`}>
                    {member.role}
                  </p>
                  {/* Divider */}
                  {hasBio && (
                    <>
                      <div className="my-3 h-px bg-[#f3f4f6]" />
                      {/* Bio / Quote */}
                      <p className="text-[11px] italic text-[#99a1af] leading-[1.75] sm:text-xs">
                        &quot;{member.bio}&quot;
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
