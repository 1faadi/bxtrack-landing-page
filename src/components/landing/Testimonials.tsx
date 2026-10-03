"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { testimonials } from "@/lib/content";
import { useScroller } from "@/hooks/use-scroller";
import { SliderArrows } from "./SliderArrows";

type Testimonial = (typeof testimonials)[number];

function Card({ t, onWatch }: { t: Testimonial; onWatch: () => void }) {
  const video = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="group relative flex min-h-[480px] w-[85%] flex-col justify-end gap-4 overflow-hidden rounded-[20px] p-[25px] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
      onMouseEnter={() => void video.current?.play().catch(() => {})}
      onMouseLeave={() => video.current?.pause()}
    >
      <Image src={t.image} alt={t.name} fill sizes="(min-width: 1024px) 400px, 85vw" className="object-cover" />
      <video
        ref={video}
        src={t.video}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_37.68%,rgba(0,0,0,0.85))]" />

      <button
        type="button"
        onClick={onWatch}
        className="relative z-10 inline-flex items-center gap-2 self-start rounded-3xl bg-white px-5 py-2.5 font-heading text-[0.95rem] font-medium text-[#1a1a1a] transition-colors hover:bg-lime hover:text-black"
      >
        <Image src="/images/Component_1_1ef55d8707.svg" alt="" width={19} height={19} />
        Watch Video
      </button>
      <blockquote className="relative z-10 w-full rounded-2xl bg-white/25 p-6 backdrop-blur-[16px]">
        <p className="line-clamp-2 font-heading text-base leading-[1.4] text-white">{t.quote}</p>
      </blockquote>
      <div className="relative z-10 font-heading">
        <p className="mb-1 text-[19px] leading-[1.3] font-semibold text-white">{t.name}</p>
        <p className="text-[17px] leading-[1.3] text-white/85">{t.role}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { ref, prev, next } = useScroller();
  const dialog = useRef<HTMLDialogElement>(null);
  const [playing, setPlaying] = useState<Testimonial | null>(null);

  const watch = (t: Testimonial) => {
    setPlaying(t);
    dialog.current?.showModal();
  };

  return (
    <section className="relative bg-surface py-[100px]">
      <div className="wrap">
        <div className="mb-[50px] flex flex-wrap items-center justify-between gap-6">
          <h2 className="max-w-[540px] font-heading text-[34px] leading-[1.1] font-semibold tracking-[-0.02em] text-black sm:text-[44px] sm:leading-[47px]">
            We Let Them Talk. <span className="text-lime-deep">Here&apos;s What They Said.</span>
          </h2>
          <p className="max-w-[390px] font-heading text-lg leading-[1.5] text-muted sm:text-xl">
            Hear directly from the people who trusted us with their roadmap.
          </p>
          <SliderArrows onPrev={prev} onNext={next} size="lg" className="hidden md:flex" />
        </div>

        <div ref={ref} className="scroller gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} t={t} onWatch={() => watch(t)} />
          ))}
        </div>
        <SliderArrows onPrev={prev} onNext={next} className="mt-8 justify-center md:hidden" />
      </div>

      <dialog
        ref={dialog}
        onClose={() => setPlaying(null)}
        className="m-auto w-[min(960px,92vw)] overflow-visible bg-transparent backdrop:bg-black/80"
      >
        <form method="dialog" className="flex justify-end">
          <button type="submit" className="mb-2 flex items-center gap-2 bg-lime px-3 py-2 font-heading text-base font-medium text-black">
            <X className="size-5" /> Close
          </button>
        </form>
        {playing && (
          <video key={playing.video} src={playing.video} controls autoPlay playsInline className="w-full bg-black" />
        )}
      </dialog>
    </section>
  );
}
