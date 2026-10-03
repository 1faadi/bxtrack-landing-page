"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { specializations, url } from "@/lib/content";
import { ArrowThin, ChevronDown } from "@/components/icons";

function SpecializationSelect({ value, onChange }: { value: string | null; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div ref={ref} className={cn("relative min-w-[280px] flex-1 sm:max-w-[400px]", open && "z-50")}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        className={cn(
          "flex min-h-14 w-full items-center justify-between pr-8 pl-4 text-left shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition",
          open ? "rounded-t-lg bg-[#9ee263]" : "rounded-lg border border-black/10 bg-white",
        )}
      >
        <span
          className={cn(
            "flex-1 py-3.5 font-heading text-[17.28px] leading-[21px] font-semibold",
            value || open ? "text-[#33413b]" : "text-[#898989]",
          )}
        >
          {value ?? "Choose Specialization"}
        </span>
        <span className="mr-7 h-12 w-0.5 shrink-0 bg-[#676767]" />
        <ChevronDown className={cn("w-3.5 text-[#676767] transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute inset-x-0 top-full max-h-48 overflow-y-auto rounded-b-lg bg-white text-left shadow-[0_4px_12px_rgba(0,0,0,0.15)] [scrollbar-color:#9ee263_#d3d3d3] [scrollbar-width:thin]"
        >
          {specializations.map((s) => (
            <li key={s} role="option" aria-selected={s === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(s);
                  setOpen(false);
                }}
                className="flex min-h-12 w-full items-center border-b border-black/5 px-4 py-3.5 text-base text-[#33413b] transition-colors last:border-0 hover:bg-[#f5f5f5]"
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Hero() {
  const [choice, setChoice] = useState<string | null>(null);

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-forest-ink lg:min-h-[1050px]">
      <Image
        src="/images/Rectangle_1_ca6adcc304.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/Rectangle_1_ca6adcc304.png"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex items-center px-[15px] py-[60px] text-center text-white">
        <div className="mx-auto flex w-full max-w-[1066px] flex-col items-center pt-16">
          <div className="mb-[33px] flex w-full items-center justify-center gap-4">
            <span className="hidden h-0.5 w-[100px] shrink-0 bg-white/80 sm:block" />
            <div className="flex shrink-0 items-center">
              {[1, 2, 3, 4, 5].map((n, i) => (
                <Image
                  key={n}
                  src={`/images/hero-avatar-${n}.png`}
                  alt={`Trusted client ${n}`}
                  width={40}
                  height={40}
                  className={cn("size-10 rounded-full bg-white/10 object-cover", i > 0 && "-ml-4")}
                />
              ))}
            </div>
            <div className="flex shrink-0 flex-col items-start gap-2 whitespace-nowrap">
              <Image src="/images/stars.svg" alt="5 stars" width={74} height={14} className="h-auto w-[74px]" />
              <span className="font-heading text-[11.61px] leading-none">Trusted By 2000+ Clients</span>
            </div>
            <span className="hidden h-0.5 w-[100px] shrink-0 bg-white/80 sm:block" />
          </div>

          <h1 className="mx-auto mb-[23px] max-w-[600px] text-[40px] leading-none font-semibold tracking-[-0.02em] sm:text-[56px]">
            Scale Your Team With <span className="text-lime">AI-Native Engineers</span>
          </h1>
          <p className="mx-auto mb-[52px] max-w-[600px] px-5 font-heading text-lg leading-[27.74px] tracking-[-0.02em] text-white/90 sm:text-xl">
            Domain expert remote developers vetted and matched to your team, stack and workflow in 24 hours.
          </p>

          <div className="flex w-full flex-wrap items-center justify-center gap-3">
            <SpecializationSelect value={choice} onChange={setChoice} />
            <a
              href={url("/contact-us/")}
              className="inline-flex items-center gap-2 rounded-lg border-[1.74px] border-lime-soft bg-lime px-6 py-3.5 text-base font-semibold whitespace-nowrap text-forest transition hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-lime"
            >
              Hire Now
              <ArrowThin className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
