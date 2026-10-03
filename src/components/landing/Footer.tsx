import Image from "next/image";
import { contact, footerColumns, legalLinks, office, reviewPlatforms, socials } from "@/lib/content";
import { Star } from "@/components/icons";

export function Footer() {
  return (
    <footer className="relative bg-black pt-[60px] text-white">
      <div className="wrap">
        <div className="flex flex-col gap-10 pt-12 lg:flex-row lg:gap-0">
          {/* Contact card */}
          <div className="w-full shrink-0 rounded-3xl border border-white/12 p-7 lg:h-[475px] lg:max-w-[324px]">
            {[
              { icon: contact.phoneIcon, label: "Direct Call", value: contact.phone, href: contact.phoneHref },
              { icon: contact.emailIcon, label: "Email Us", value: contact.email, href: `mailto:${contact.email}` },
            ].map((c, i) => (
              <div key={c.label} className={i ? "mt-6 flex items-center" : "flex items-center"}>
                <Image src={c.icon} alt="" width={48} height={48} className="mr-4 size-12" />
                <div>
                  <p className="text-xs">{c.label}</p>
                  <a href={c.href} className="text-[17px]">
                    {c.value}
                  </a>
                </div>
              </div>
            ))}

            <div className="my-7 border-b border-white/27" />
            <p className="flex items-center gap-2 text-lg font-medium">
              <Star className="size-4 text-[#ffb400]" /> 5 Star Reviews
            </p>
            <div className="mt-4 flex justify-center gap-3">
              {reviewPlatforms.map((r) => (
                <span key={r.name} className="group relative inline-flex size-12 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-lime">
                  <Image src={r.src} alt={r.name} width={48} height={48} className="size-12 transition group-hover:brightness-0" />
                  <span className="pointer-events-none invisible absolute top-[calc(100%+10px)] left-1/2 z-10 -translate-x-1/2 -translate-y-1 rounded-lg bg-white px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap text-[#111] opacity-0 shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {r.name}
                  </span>
                </span>
              ))}
            </div>

            <div className="my-7 border-b border-white/27" />
            <p className="text-lg">Our Socials</p>
            <div className="flex">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="group mt-4 mr-4 flex size-12 items-center justify-center rounded-full border border-white/18 transition-colors hover:bg-lime"
                >
                  <Image src={s.src} alt="" width={20} height={20} className="transition group-hover:brightness-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns + office */}
          <div className="flex-1 lg:pl-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-[4fr_3fr_3fr_2fr]">
              {footerColumns.map((col) => (
                <nav key={col.title} aria-label={col.title}>
                  <p className="mb-[23px] text-[17px] font-semibold text-lime">{col.title}</p>
                  <ul>
                    {col.links.map((link) => (
                      <li key={link.label} className="mb-[26px]">
                        <a
                          href={link.href}
                          className="text-[15px] text-white/70 capitalize transition-colors after:block after:h-0.5 after:w-0 after:bg-lime after:transition-[width] after:duration-300 hover:text-white hover:after:w-[45%]"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
            <div className="border-b border-white/27" />
            <a
              href={office.map}
              target="_blank"
              rel="noreferrer"
              className="mt-[30px] flex w-fit items-center transition-colors hover:text-lime"
            >
              <Image src={office.flag} alt={office.country} width={48} height={48} className="mr-3 size-12 shrink-0" />
              <span className="text-sm font-medium">{office.address}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Giant wordmark: live text so it stays sharp at any size */}
      <div
        aria-hidden="true"
        className="relative mt-12 overflow-hidden bg-[radial-gradient(ellipse_70%_100%_at_center_bottom,rgba(135,230,75,0.55),rgba(61,157,48,0.35)_0,rgba(30,45,28,0.1)_100%)] pt-14 text-center select-none"
      >
        <p className="mb-5 flex items-center justify-center gap-4 font-mono text-[11px] tracking-[0.4em] text-lime/80 uppercase sm:text-xs">
          <span className="h-px w-10 bg-lime/50 sm:w-16" />
          BXTrack Solutions · Software House
          <span className="h-px w-10 bg-lime/50 sm:w-16" />
        </p>
        <p className="-mb-[0.08em] bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(255,255,255,0.03)_85%)] bg-clip-text font-heading text-[clamp(72px,20vw,300px)] leading-[0.85] font-bold tracking-[-0.05em] text-transparent">
          BX<span className="[-webkit-text-stroke:2px_rgba(135,230,75,0.6)]">TRACK</span>
        </p>
      </div>

      <div className="wrap">
        <div className="flex flex-col items-center gap-3 rounded-t-3xl bg-lime px-6 py-3.5 text-[#1a1a1a] md:flex-row md:justify-between">
          <p className="text-xs">© 2026 All Rights Reserved By BXTrack Solutions</p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center divide-x-2 divide-[#1a1a1a] text-xs leading-none">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="px-2.5 last:pr-0">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
