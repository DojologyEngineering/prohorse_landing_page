import type { StoryContent } from "@/lib/types";
import Image from "next/image";
import storyImg from "@/app/asset/images/Container1.svg";

type StoryProps = {
  data: StoryContent;
};

export function Story({ data }: StoryProps) {
  return (
    <section className="bg-white flex items-center" id="story">
      <div className="mx-auto w-full px-6 md:px-14 flex flex-col md:flex-row gap-16 lg:gap-24 w-full items-center">
        {/* Left: Image */}
        <div className="flex-1 w-full relative">
          <div className="w-full relative aspect-[1.1] md:aspect-square">
            <Image
              src={storyImg}
              alt="Our Story"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 w-full max-w-xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center rounded-full bg-[#F0FCE4] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#6CC51D] mb-6">
            {data.eyebrow}
          </div>

          <h2 className="mb-6 text-5xl md:text-[48px] leading-[1.15] font-black text-[#1F2937] tracking-tight">
            Born from a love for <br />
            <span className="text-[#6CC51D]">local flavors</span>
            <span className="ml-[3px] inline-block pl-1 h-[11px] w-[11px] bg-[#101828]" />
          </h2>

          <p className="mb-10 text-[16px] text-[#99A1AF] leading-[1.8]">
            {data.description}
          </p>

          <div className="flex flex-col gap-4">
            {data.highlights.map((highlight, index) => {
              const bgClass =
                index === 0
                  ? "bg-[#F5FBF0] text-[#54A80A]"
                  : index === 1
                    ? "bg-[#EFF5F9] text-[#196594]"
                    : "bg-[#FFF8EF] text-[#E29D29]";

              return (
                <div
                  key={highlight.title}
                  className="flex items-center gap-8 border border-[#F3F4F6] p-4 bg-white"
                >
                  <div
                    className={`flex h-[56px] w-[64px] shrink-0 items-center justify-center text-[15px] font-black tracking-wide ${bgClass}`}
                  >
                    {highlight.title}
                  </div>
                  <div className="text-[18px] font-semibold text-[#364153]">
                    {highlight.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
