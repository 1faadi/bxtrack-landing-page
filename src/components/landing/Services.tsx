"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { services, url } from "@/lib/content";
import { ArrowThin, Plus } from "@/components/icons";

function ViewAll({ className }: { className?: string }) {
  return (
    <a
      href={url("/software-development-services/")}
      className={cn(
        "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-heading text-base font-semibold whitespace-nowrap text-white transition hover:-translate-y-0.5 hover:bg-lime hover:text-forest",
        className,
      )}
    >
      View All Services
      <ArrowThin className="size-4 text-lime group-hover:text-forest" />
    </a>
  );
}

export function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white font-heading">
      <div className="wrap mb-[66px] flex flex-wrap items-start justify-between gap-6">
        <h2 className="text-[34px] leading-[1.1] font-semibold tracking-[-0.02em] text-black sm:text-[44px] sm:leading-[47px]">
          <span className="text-lime-deep">Services</span> We Offer
        </h2>
        <p className="max-w-[260px] text-lg leading-7 tracking-[-0.02em] text-muted sm:text-xl">
          From strategy to delivery. Engineering that works.
        </p>
        <ViewAll className="hidden md:inline-flex" />
      </div>

      <div className="flex flex-col">
        {services.map((s, i) => {
          const isOpen = open === i;
          const id = `service-${i}`;
          return (
            <div
              key={s.title}
              className="relative border-b border-line before:absolute before:inset-x-0 before:bottom-0 before:h-0 before:bg-lime before:transition-[height] before:duration-350 first:border-t hover:before:h-full"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : i)}
                className="wrap relative flex items-center justify-between gap-6 py-6 text-left sm:py-[35px]"
              >
                <span className="min-w-12 shrink-0 font-mono text-lg leading-[47px] tracking-[-0.02em] text-muted lg:w-[288px] sm:text-2xl">
                  {"//"}{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flex-1 text-xl font-semibold tracking-[-0.01em] text-black sm:text-[32px] sm:leading-[47px]">
                  {s.title}
                </h3>
                <span
                  className={cn(
                    "flex size-11 shrink-0 items-center justify-center rounded-full bg-forest text-lime transition-transform duration-300 sm:size-[61px]",
                    isOpen && "rotate-45",
                  )}
                >
                  <Plus className="size-5 sm:size-[25px]" />
                </span>
              </button>

              {isOpen && (
                <div id={id} className="wrap relative pb-[35px]">
                  <div className="flex flex-col gap-6 lg:pl-[312px] md:flex-row md:items-center md:gap-10 lg:pr-[100px]">
                    <Image
                      src={s.image}
                      alt=""
                      width={300}
                      height={189}
                      className="aspect-[16/10] w-full max-w-[300px] shrink-0 animate-slide-in rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="mb-5 animate-slide-in text-base leading-[1.5] text-muted [animation-delay:0.19s]">{s.desc}</p>
                      <ul className="mb-6 grid animate-slide-in gap-x-12 gap-y-3 [animation-delay:0.26s] sm:grid-cols-2">
                        {s.items.map((item) => (
                          <li key={item.name} className="flex items-center gap-2.5 text-base leading-5 font-semibold tracking-[-0.02em] text-black">
                            <span className="size-2 shrink-0 rounded-full bg-lime" />
                            {item.href ? (
                              <a
                                href={item.href}
                                className="after:block after:h-0.5 after:w-0 after:bg-lime after:transition-[width] after:duration-300 hover:after:w-[45%]"
                              >
                                {item.name}
                              </a>
                            ) : (
                              <span>{item.name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={s.learnMore}
                        className="inline-flex animate-slide-in items-center gap-2 text-base font-semibold text-[#5fa832] underline [animation-delay:0.33s] hover:text-[#4b8228]"
                      >
                        Learn More
                        <ArrowThin className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="wrap pt-6 md:hidden">
        <ViewAll className="w-full" />
      </div>
    </section>
  );
}
