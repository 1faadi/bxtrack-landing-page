"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";
import { useScroller } from "@/hooks/use-scroller";
import { ArrowUpRight } from "@/components/icons";
import { SliderArrows } from "./SliderArrows";
import { ProjectVisual } from "@/components/projects/ProjectVisual";

function ViewAll({ className }: { className?: string }) {
  return (
    <Link
      href="/portfolio"
      className={cn(
        "group inline-flex items-center justify-center gap-[18px] rounded-[30px] bg-forest px-7 py-3.5 font-heading text-base font-semibold text-white transition hover:-translate-y-px hover:bg-lime hover:text-forest-deep",
        className,
      )}
    >
      See all projects
      <ArrowUpRight className="size-3 text-lime-deep group-hover:text-forest-deep" />
    </Link>
  );
}

export function CaseStudies() {
  const { ref, prev, next } = useScroller();

  return (
    <section className="bg-white pt-[120px]">
      <div className="wrap">
        <div className="mb-14 flex flex-wrap items-start justify-between gap-6 sm:mb-20">
          <h2 className="max-w-[600px] text-[34px] leading-[1.1] font-semibold tracking-[-0.02em] text-black sm:text-[44px] sm:leading-[47px]">
            AI products we&apos;ve designed, built and shipped
          </h2>
          <p className="max-w-[263px] font-heading text-lg leading-[1.5] text-muted sm:text-xl">
            Agents, retrieval and optimisation, running in real products.
          </p>
          <div className="hidden items-center gap-4 md:flex">
            <ViewAll />
            <SliderArrows onPrev={prev} onNext={next} />
          </div>
        </div>

        <div ref={ref} className="scroller gap-4">
          {projects.map((c) => (
            <Link
              key={c.slug}
              href={`/portfolio/${c.slug}`}
              className="group block w-[88%] rounded-[20px] border border-[rgba(189,255,179,0.2)] bg-surface p-6 md:w-[calc((100%-16px)/2)]"
            >
              <div className="mb-[30px] flex items-start justify-between gap-4">
                <p className="font-heading text-2xl leading-[1.3] font-semibold text-black sm:text-[30px]">{c.name}</p>
                <span className="pt-1.5 font-heading text-base font-semibold whitespace-nowrap text-[#727272] sm:text-lg">{c.category}</span>
              </div>
              <ProjectVisual
                visual={c.visual}
                sizes="(min-width: 768px) 600px, 88vw"
                className="rounded-2xl"
              />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-6 md:hidden">
          <SliderArrows onPrev={prev} onNext={next} />
          <ViewAll className="w-full" />
        </div>
      </div>
    </section>
  );
}
