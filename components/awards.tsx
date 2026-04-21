import Image from "next/image";
import type { AwardsContent } from "@/lib/types";
import awardOne from "@/app/asset/images/img3.webp";
import awardTwo from "@/app/asset/images/image2.webp";
import awardThree from "@/app/asset/images/image3.webp";
import awardFour from "@/app/asset/images/image4.webp";
import flowerIcon from "@/app/asset/images/🌱.png";

type AwardsProps = {
  data: AwardsContent;
};

const AWARD_IMAGE_SETS = [
  [awardOne, awardThree],
  [awardTwo, awardFour],
];
const ACCENTS = ["#F9A825", "#1F6FA2"];

export function Awards({ data }: AwardsProps) {
  return (
    <section className="w-full bg-white py-20" id="awards">
      <div className="mx-auto w-full px-6 md:px-14">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-[#f0fce4] px-3 py-1 text-xs font-bold uppercase tracking-[0.28em] text-[#6cc51d]">
            {data.eyebrow}
          </span>
          <h2 className="mt-4 text-[32px] font-black leading-[1.1] tracking-tight text-[#101828] sm:text-[40px]">
            {data.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#98a2b3] sm:text-[15px]">
            {data.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {data.items.map((item, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            const images = AWARD_IMAGE_SETS[index % AWARD_IMAGE_SETS.length];

            return (
              <article
                key={item.title}
                className="flex h-full flex-col overflow-hidden border border-[#eef2f6] bg-white shadow-[0_1px_0_rgba(16,24,40,0.02)]"
              >
                <div className="h-1.5 w-full" style={{ backgroundColor: accent }} />
                <div className="relative h-[230px] bg-[#f8fafc] sm:h-[260px]">
                  <Image
                    src={images[0]}
                    alt={item.imageAlt}
                    fill
                    className="award-image-fade object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <Image
                    src={images[1]}
                    alt={`${item.imageAlt} alternate view`}
                    fill
                    className="award-image-fade award-image-fade-delay object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div>
                    <h3 className="text-[18px] font-extrabold leading-[1.25] text-[#101828] sm:text-[20px]">
                      {item.title}
                    </h3>
                    <p
                      className="mt-2 text-sm font-semibold"
                      style={{ color: accent }}
                    >
                      {item.label}
                    </p>
                    <div className="mt-4 h-px w-full bg-[#eef2f6]" />
                    <p className="mt-5 text-sm leading-7 text-[#667085]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 h-[2px] w-10" style={{ backgroundColor: accent }} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-md border border-[#eef2f6] bg-[#f8faf8] px-6 py-5 sm:px-8">
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#f0fce4] text-[18px] leading-none text-[#6cc51d]">
              <Image
                src={flowerIcon}
                alt="Flower icon"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
            </div>
            <p className="text-sm leading-7 text-[#667085]">
              {data.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}