import Image from "next/image";
import { url } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export function AiCta() {
  return (
    <section className="relative isolate my-20 overflow-hidden bg-[#c7f0a3] bg-[linear-gradient(90deg,#b6ecaa,#cdf3a8_45%,#9ae374)] py-[57px] sm:px-12">
      <Image
        src="/images/Frame_1991423448_1ace842d1a.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover"
      />
      <div className="wrap">
        <div className="flex max-w-[820px] flex-col items-start gap-3">
          <h2 className="text-[34px] leading-[1.15] font-semibold tracking-[-0.01em] text-forest sm:text-[44px]">
            Hire AI-Native Engineers
          </h2>
          <p className="font-heading text-lg leading-[1.5] text-forest sm:text-xl">
            Our engineers don&apos;t resist AI. They leverage tools like Claude, Copilot and Cursor to drive 22% higher
            output.
          </p>
          <a
            href={url("/contact-us/")}
            className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-forest px-10 py-5 font-heading text-lg leading-none font-semibold text-white transition hover:-translate-y-px hover:bg-[#1a3d28] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#76d148] sm:px-[66px] sm:py-6"
          >
            Find Your Match
            <ArrowUpRight className="size-3 text-lime" />
          </a>
        </div>
      </div>
    </section>
  );
}
