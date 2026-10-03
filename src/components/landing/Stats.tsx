import Image from "next/image";
import { cn } from "@/lib/utils";
import { stats, trustLogos } from "@/lib/content";
import { Marquee } from "./Marquee";

export function Stats() {
  return (
    <section className="relative isolate mt-20 overflow-hidden bg-[linear-gradient(#0d0d0d,#1a1a1a)] px-0 py-[88px] text-center sm:px-[60px]">
      <Image src="/images/Rectangle_40234_6ca78a8eee.webp" alt="" fill sizes="100vw" className="-z-10 object-cover" />
      <div className="wrap flex flex-col items-center gap-[60px]">
        <h2 className="text-[32px] leading-none font-semibold tracking-[-0.02em] text-white sm:text-[45px]">
          Built On Trust - Backed By Proof
        </h2>
        <dl className="grid w-full max-w-[1200px] grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={cn("flex flex-col items-start border-[#c7c7c7] px-4 sm:px-6", i % 2 === 1 && "border-l", i === 2 && "lg:border-l")}
            >
              <dt className="mb-4 text-left font-mono text-sm leading-[1.2] tracking-[-0.02em] text-white uppercase sm:text-lg">
                {s.label}
              </dt>
              <dd className="flex flex-wrap items-baseline gap-2 text-lime">
                <span className="font-heading text-[40px] leading-none font-bold tracking-[-0.02em] whitespace-nowrap sm:text-[66.8px] sm:leading-[68.8px]">
                  {s.value}
                </span>
                {s.unit && (
                  <span className="font-heading text-lg font-bold tracking-[-0.02em] uppercase sm:text-[30.54px]">{s.unit}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <Marquee className="mt-[60px]">
        {trustLogos.map((logo) => (
          <div key={logo.src} className="flex items-center py-3">
            <span className="mx-6 size-1.5 shrink-0 rounded-full bg-lime-deep" />
            <Image src={logo.src} alt={logo.alt} width={160} height={40} className="h-10 w-auto max-w-40 object-contain opacity-90" />
            <span className="w-6" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
