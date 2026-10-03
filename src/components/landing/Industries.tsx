"use client";

import Image from "next/image";
import { industries } from "@/lib/content";
import { useScroller } from "@/hooks/use-scroller";
import { ArrowUpRight } from "@/components/icons";
import { SliderArrows } from "./SliderArrows";

export function Industries() {
  const { ref, prev, next } = useScroller();

  return (
    <section className="bg-white pb-[117px]">
      <div className="wrap">
        <div className="mb-[58px] flex flex-wrap items-start justify-between gap-3">
          <h2 className="max-w-[590px] flex-1 basis-[320px] text-[32px] leading-[1.1] font-semibold tracking-[-0.02em] text-forest sm:text-[42px]">
            Domain-Ready Engineers <span className="block text-lime-deep">Across Every Industry</span>
          </h2>
          <div className="flex flex-1 basis-[320px] items-start gap-3 lg:max-w-[680px]">
            <p className="max-w-[536px] flex-1 font-heading text-lg leading-[1.5] text-muted sm:text-xl">
              Our remote developers come pre-loaded with your industry’s skillset so you can go straight to shipping
              within days.
            </p>
            <SliderArrows onPrev={prev} onNext={next} className="hidden md:flex" />
          </div>
        </div>

        <div ref={ref} className="scroller gap-3">
          {industries.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group relative isolate flex h-[540px] w-[300px] flex-col overflow-hidden rounded-[10px] px-[34px] py-9"
            >
              <Image
                src={card.bg}
                alt=""
                fill
                sizes="300px"
                className="-z-20 object-cover transition-transform duration-400 group-hover:scale-[1.2]"
              />
              <span className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.15)_35%,rgba(0,0,0,0.05)_60%,transparent)]" />
              <span className="flex flex-col gap-3.5 text-white">
                <h3 className="text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]">{card.title}</h3>
                <span className="max-w-[280px] font-heading text-sm leading-[1.45] opacity-95">{card.desc}</span>
                <span className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-white px-[22px] py-2.5 font-heading text-[11px] font-semibold text-forest transition group-hover:-translate-y-px group-hover:bg-lime">
                  Learn More
                  <ArrowUpRight className="size-[9px]" />
                </span>
              </span>
            </a>
          ))}
        </div>

        <SliderArrows onPrev={prev} onNext={next} className="mt-8 justify-center md:hidden" />
      </div>
    </section>
  );
}
