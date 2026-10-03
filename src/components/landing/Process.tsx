import { steps } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a0a0a] pt-[120px] pb-[140px]">
      <video
        className="absolute top-1/2 left-1/2 -z-20 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/process-bg.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 -z-10 bg-[rgba(242,242,242,0.09)]" />

      <div className="wrap">
        <h2 className="mx-auto mb-14 max-w-[720px] text-center text-[32px] leading-[1.15] font-semibold tracking-[-0.02em] text-white sm:mb-20 sm:text-[44px] sm:leading-[47px]">
          Three Steps. That’s All It Takes. <span className="text-lime">Simple Process. Serious Results.</span>
        </h2>

        <ol className="mb-12 flex flex-col gap-0 md:mb-[70px] md:flex-row md:gap-10">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-1 gap-5 md:flex-col md:items-center md:gap-7 md:px-4 md:text-center">
              <div className="flex flex-col items-center">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-lime font-heading text-lg font-semibold text-forest md:size-[72px] md:text-[26px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < steps.length - 1 && <span className="min-h-10 w-0 flex-1 border-l-2 border-dashed border-white/35 md:hidden" />}
              </div>
              <div className="pb-9 md:pb-0">
                <h3 className="mb-2 text-xl leading-[1.3] font-semibold text-white md:mx-auto md:mb-3 md:max-w-[300px] md:text-[30px] md:leading-[33px]">
                  {s.title}
                </h3>
                <p className="font-heading text-[15px] leading-[1.6] text-white/70 md:text-lg md:leading-[26px]">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex justify-center">
          <a
            href="#contact-sales"
            className="inline-flex items-center justify-center gap-[18px] rounded-full bg-white px-10 py-6 font-heading text-lg font-semibold text-forest transition hover:-translate-y-px hover:bg-lime sm:px-12 sm:text-[22px]"
          >
            Schedule A Call Now
            <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
