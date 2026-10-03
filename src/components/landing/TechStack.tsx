"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { techStacks, url } from "@/lib/content";
import { ArrowThin, ChevronRight, Search } from "@/components/icons";

export function TechStack() {
  const [tab, setTab] = useState(0);
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const items = q
    ? techStacks.flatMap((s) => s.items).filter((t) => t.name.toLowerCase().includes(q))
    : techStacks[tab].items;

  return (
    <section className="bg-white pt-[120px] pb-[140px] font-heading">
      <div className="wrap">
        <div className="mb-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div>
            <h2 className="mb-3 max-w-[630px] text-[34px] leading-[1.2] font-semibold tracking-[-0.02em] text-black sm:text-[44px]">
              Yes. We Have Engineers <span className="text-lime-deep">For Every Stack.</span>
            </h2>
            <p className="text-lg leading-[1.5] text-muted sm:text-xl">
              1000+ engineers with expertise in almost every programming language.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-4">
            <label className="flex h-12 max-w-[204px] items-center gap-3 rounded-[30px] border border-[#f0f0f0] bg-[#f0f0f0] px-4 text-[#4b8855]">
              <Search className="size-5 shrink-0" />
              <span className="sr-only">Search stack</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Stack"
                className="w-full min-w-0 bg-transparent text-base text-black outline-none placeholder:text-[#4b8855]"
              />
            </label>
            <a
              href={url("/technologies/")}
              className="group inline-flex h-12 items-center gap-3 rounded-[30px] bg-forest px-5 text-base text-white transition-colors hover:bg-lime hover:text-forest"
            >
              Our Full Stacks
              <ArrowThin className="size-4 text-lime group-hover:text-forest" />
            </a>
          </div>
        </div>

        <div role="tablist" aria-label="Tech categories" className="scroller mb-8 gap-3 md:grid md:grid-cols-7 md:overflow-visible">
          {techStacks.map((s, i) => {
            const active = !q && i === tab;
            return (
              <button
                key={s.tab}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setTab(i);
                  setQuery("");
                }}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-[30px] border px-5 py-3 text-base whitespace-nowrap text-black transition-colors",
                  active ? "border-lime bg-lime" : "border-[#e9e9e9] bg-surface-soft hover:border-lime-deep",
                )}
              >
                <span className={cn("size-[11.6px] shrink-0 rounded-full", active ? "bg-[#3d3d3d]" : "bg-lime-deep")} />
                {s.tab}
              </button>
            );
          })}
        </div>

        <div role="tabpanel" className="flex flex-wrap justify-center gap-3 sm:gap-5">
          {items.map((t) => (
            <div
              key={t.name}
              className="flex size-[150px] flex-col items-center justify-center rounded-[20px] bg-surface-soft p-6 transition-shadow hover:shadow-md sm:size-[190px]"
            >
              <Image src={t.icon} alt="" width={48} height={48} className="mb-3 size-12 object-contain" />
              <span className="flex items-center gap-1.5 text-center text-base text-black">
                {t.name}
                <ChevronRight className="h-2.5 w-[7px] text-[#2c3e50]" />
              </span>
            </div>
          ))}
          {items.length === 0 && <p className="py-10 text-muted">No stack matches “{query}”.</p>}
        </div>
      </div>
    </section>
  );
}
