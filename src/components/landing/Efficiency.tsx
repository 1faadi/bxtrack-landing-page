import Image from "next/image";
import { features, team, url } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";
import { Lottie } from "./Lottie";

export function Efficiency() {
  return (
    <>
      <section className="bg-white py-[100px]">
        <div className="wrap">
          <h2 className="mx-auto mb-5 flex flex-col items-center gap-1 text-center text-[34px] leading-[1.2] font-semibold tracking-[-0.02em] text-black sm:text-[44px]">
            Efficiency Is The Only <span className="text-[#78dc38]">Metric That Matters</span>
          </h2>
          <p className="mb-[70px] text-center font-heading text-lg text-muted capitalize sm:text-xl">
            In 2026, teams don’t compete on ideas. They compete on how fast you ship.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-start gap-[31px]">
                <div className="flex size-[72px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#78dc38] p-3.5">
                  <Lottie src={f.lottie} className="size-full" />
                </div>
                <div className="flex flex-col gap-4 lg:gap-8">
                  <h3 className="text-xl leading-[1.3] font-semibold tracking-[-0.01em] text-black">{f.title}</h3>
                  <p className="font-heading text-base leading-[1.5] text-[#6f6e70]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pt-10 pb-[158px]">
        <div className="wrap">
          <div className="mb-[90px] grid grid-cols-2 items-start gap-x-6 gap-y-14 pt-12 sm:grid-cols-3 lg:flex lg:justify-between">
            {team.map((m) => (
              <div key={m.role} className="group flex min-w-0 flex-1 cursor-pointer flex-col items-center">
                <div className="relative flex aspect-square w-full items-end justify-center overflow-visible rounded-[6.85px] transition-[border-radius] duration-400 group-hover:rounded-full">
                  <Image
                    src={m.bg}
                    alt=""
                    fill
                    sizes="240px"
                    className="rounded-[inherit] object-cover"
                  />
                  <Image
                    src={m.photo}
                    alt={m.role}
                    width={240}
                    height={312}
                    className="absolute bottom-0 left-1/2 h-auto max-h-[130%] w-full max-w-full -translate-x-1/2 object-contain object-bottom"
                  />
                </div>
                <h3 className="mt-4 text-center font-heading text-lg leading-[27px] font-semibold tracking-[-0.02em] text-black sm:text-xl xl:text-[22px] xl:whitespace-nowrap">
                  {m.role}
                </h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href={url("/hire-remote-developers/")}
              className="group inline-flex items-center justify-center gap-[18px] rounded-full bg-forest-deep px-8 py-5 font-heading text-lg leading-none font-semibold text-white transition hover:-translate-y-px hover:bg-lime hover:text-forest-deep sm:px-10 sm:text-[22.81px]"
            >
              Let’s Assemble Your Team
              <ArrowUpRight className="size-3 text-lime group-hover:text-forest-deep" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
