"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  companyMenu,
  hireDevsMenu,
  industriesMenu,
  recognizedBy,
  servicesMenu,
  url,
  type LinkGroup,
} from "@/lib/content";
import { ArrowThin, ChevronDown } from "@/components/icons";

const CONTACT = url("/contact-us/");
const panel =
  "invisible fixed inset-x-0 top-[112px] z-50 mx-auto w-[calc(100%-30px)] max-w-[1280px] origin-top scale-95 opacity-0 transition duration-150 group-hover:visible group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:scale-100 group-focus-within:opacity-100";

function NavTrigger({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex h-full items-center gap-2 px-4 text-[15px] text-white transition-colors group-hover:text-lime"
    >
      <span className="relative after:absolute after:inset-x-0 after:bottom-px after:h-0.5 after:bg-lime after:opacity-0 group-hover:after:opacity-100">
        {label}
      </span>
      <ChevronDown className="w-3 transition-transform group-hover:rotate-180" />
    </button>
  );
}

function TrustedPanel() {
  return (
    <div className="flex basis-1/5 flex-col justify-between bg-lime">
      <div className="px-10 pt-10">
        <p className="mb-3 text-[11px] font-semibold tracking-[1px] text-forest uppercase opacity-90">Trusted By</p>
        <p className="mb-4 font-heading text-[28px] leading-[1.3] font-semibold text-black">Services Recognised by Clutch</p>
        <p className="text-sm leading-[1.6] text-forest">
          For the fourth year in a row, InvoZone is featured among the best outsourcing service providers in Clutch
          Global Outsourcing 100 list.
        </p>
      </div>
      <div className="px-6 py-10">
        <div className="mb-6 flex items-center justify-center gap-3 before:h-px before:max-w-[60px] before:flex-1 before:bg-forest after:h-px after:max-w-[60px] after:flex-1 after:bg-forest">
          <span className="text-[11px] font-semibold tracking-[1px] whitespace-nowrap text-forest uppercase">Recognized By</span>
        </div>
        <div className="grid grid-cols-6 gap-x-6 gap-y-5">
          {recognizedBy.map((r) => (
            <div key={r.alt} className={r.row === "top" ? "col-span-3" : "col-span-2"}>
              <Image
                src={r.src}
                alt={r.alt}
                width={100}
                height={32}
                className={cn(
                  "h-auto max-h-8 w-auto [filter:brightness(0)_saturate(100%)_invert(27%)_sepia(51%)_saturate(1234%)_hue-rotate(92deg)_brightness(0.7)]",
                  r.row === "top" ? "max-w-[100px]" : "max-w-[65px]",
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ColumnsMenu({ title, groups, footer }: { title: string; groups: LinkGroup[]; footer?: boolean }) {
  return (
    <div className="flex min-h-[400px] overflow-hidden rounded-3xl border border-[#e1e1e2] bg-white shadow-[10px_-30px_55px_1px_rgba(0,0,0,0.04)]">
      <TrustedPanel />
      <div className="flex flex-1 flex-col justify-between bg-[radial-gradient(circle_at_20%_30%,rgba(115,209,35,0.08),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(115,209,35,0.08),transparent_50%)]">
        <div className="px-10 pt-10 pb-10">
          <p className="mb-7 font-heading text-[28px] leading-[1.2] font-semibold text-[#7e8371]">{title}</p>
          <div className="grid grid-cols-5 gap-x-7 gap-y-5">
            {groups.map((g) => (
              <div key={g.title}>
                <p className="relative mb-2.5 pl-4 text-[15px] leading-[1.35] font-semibold text-forest-ink before:absolute before:top-[0.35em] before:left-0 before:size-2 before:rounded-[2px] before:bg-[#73d123]">
                  {g.title}
                </p>
                <ul className="flex flex-col gap-1.5 pl-4">
                  {g.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm leading-[1.4] text-slate transition-colors hover:text-[#73d123]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {footer && (
          <div className="flex justify-end border-t border-[#e1e1e2] px-10 py-[30px]">
            <a
              href={url("/hire-remote-developers/")}
              className="group/btn inline-flex items-center gap-[15px] rounded-full bg-forest-ink px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(18,35,20,0.3)]"
            >
              Hire Remote Developers
              <ArrowThin className="size-2.5 text-lime transition-transform group-hover/btn:translate-x-[3px] group-hover/btn:-translate-y-[3px]" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function IndustriesMenu() {
  return (
    <div className="rounded-3xl border border-[#e1e1e2] bg-white bg-[radial-gradient(circle_at_20%_30%,rgba(115,209,35,0.08),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(115,209,35,0.08),transparent_50%)] px-12 pt-10 pb-12 shadow-[10px_-30px_55px_1px_rgba(0,0,0,0.04)]">
      <p className="mb-7 font-heading text-[28px] leading-[1.2] font-semibold text-[#7e8371]">Industries</p>
      <div className="grid grid-cols-4 gap-x-7 gap-y-6">
        {industriesMenu.map((i) => (
          <a key={i.title} href={i.href} className="group/card flex items-start gap-4 rounded-xl px-2 py-3">
            <span className="flex size-[61px] shrink-0 items-center justify-center rounded bg-[#2d2d2d]">
              <Image src={i.icon} alt="" width={28} height={28} className="max-h-7 w-auto" />
            </span>
            <span className="flex flex-col gap-1.5">
              <span className="text-base leading-[1.3] font-semibold text-forest-ink transition-colors group-hover/card:text-[#73d123]">
                {i.title}
              </span>
              <span className="text-[13px] leading-[1.45] text-[#64748b]">{i.desc}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function CompanyMenu() {
  return (
    <div className="absolute top-full left-1/2 z-50 min-w-[400px] -translate-x-1/2 origin-top scale-95 rounded-xl border border-[#e1e1e2] bg-white px-10 py-8 opacity-0 shadow-[10px_-30px_55px_1px_rgba(0,0,0,0.04)] transition invisible group-hover:visible group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:scale-100 group-focus-within:opacity-100">
      <p className="mb-6 font-heading text-2xl leading-[1.2] font-semibold text-forest-ink">Company</p>
      <div className="grid grid-cols-2 gap-8">
        {companyMenu.map((col, i) => (
          <ul key={i} className="flex flex-col gap-3">
            {col.map((link) => (
              <li key={link.label} className="flex items-center gap-2 before:size-2 before:shrink-0 before:rounded-[2px] before:bg-[#73d123]">
                <a href={link.href} className="text-base text-slate transition-colors hover:text-[#73d123]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

const mobileGroups: { label: string; groups: LinkGroup[] }[] = [
  { label: "Hire Devs", groups: hireDevsMenu },
  { label: "Services", groups: servicesMenu },
  { label: "Industries", groups: [{ title: "Industries", links: industriesMenu.map((i) => ({ label: i.title, href: i.href })) }] },
  { label: "Company", groups: [{ title: "Company", links: companyMenu.flat() }] },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] transition-[background,backdrop-filter] duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md"
          : "bg-[linear-gradient(rgba(0,0,0,0.12),rgba(0,0,0,0.38)_55%,rgba(0,0,0,0.52))]",
      )}
    >
      <div className={cn("border-b", scrolled ? "border-white/15" : "border-white")}>
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-[15px] lg:h-[112px] xl:px-0">
          <a href={url("/")} aria-label="BXTrack home" className="shrink-0 lg:py-5 lg:pr-10">
            <Image src="/images/bxtrack-logo-light.png" alt="BXTrack Solution Pvt Ltd." width={2907} height={852} sizes="180px" preload className="h-10 w-auto lg:h-[52px]" />
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Main"
            className={cn(
              "hidden h-full flex-1 items-center justify-evenly border-x px-6 lg:flex",
              scrolled ? "border-white/15" : "border-white",
            )}
          >
            <div className="group h-full">
              <NavTrigger label="Hire Devs" />
              <div className={panel}>
                <ColumnsMenu title="Hire Devs" groups={hireDevsMenu} footer />
              </div>
            </div>
            <div className="group h-full">
              <NavTrigger label="Services" />
              <div className={panel}>
                <ColumnsMenu title="Services" groups={servicesMenu} />
              </div>
            </div>
            <div className="group h-full">
              <NavTrigger label="Industries" />
              <div className={panel}>
                <IndustriesMenu />
              </div>
            </div>
            <a
              href={url("/portfolio/")}
              className="relative px-4 text-[15px] text-white transition-colors after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:bg-lime after:opacity-0 hover:text-lime hover:after:opacity-100"
            >
              Portfolio
            </a>
            <div className="group relative flex h-full items-center">
              <NavTrigger label="Company" />
              <CompanyMenu />
            </div>
          </nav>

          <div className="flex items-center gap-3 lg:py-5 lg:pl-10">
            <a
              href={CONTACT}
              className={cn(
                "hidden h-14 items-center gap-6 rounded-full px-5 text-base whitespace-nowrap transition-colors sm:inline-flex",
                scrolled
                  ? "bg-lime text-black hover:bg-lime-soft hover:text-forest"
                  : "bg-white text-black hover:bg-lime hover:text-forest",
              )}
            >
              Contact Us
              <ArrowThin className="size-3 text-forest-ink" />
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="flex size-11 items-center justify-center rounded-lg text-white lg:hidden"
            >
              {open ? <X className="size-7" /> : <Menu className="size-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Mobile" className="max-h-[calc(100dvh-72px)] overflow-y-auto bg-white px-[15px] pb-8 lg:hidden">
          {mobileGroups.map((m) => (
            <details key={m.label} className="group/d border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-base font-medium text-black">
                {m.label}
                <ChevronDown className="w-3 transition-transform group-open/d:rotate-180" />
              </summary>
              <div className="flex flex-col gap-4 pb-4">
                {m.groups.map((g) => (
                  <div key={g.title}>
                    {m.groups.length > 1 && <p className="mb-2 text-sm font-semibold text-forest-ink">{g.title}</p>}
                    <ul className="flex flex-col gap-2">
                      {g.links.map((link) => (
                        <li key={link.label}>
                          <a href={link.href} className="text-sm text-slate">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          ))}
          <a href={url("/portfolio/")} className="block border-b border-line py-4 text-base font-medium text-black">
            Portfolio
          </a>
          <a
            href={CONTACT}
            className="mt-6 flex h-12 items-center justify-center rounded-lg bg-forest text-base font-medium text-white"
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}
