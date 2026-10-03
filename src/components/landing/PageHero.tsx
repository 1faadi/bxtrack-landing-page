import Image from "next/image";
import Link from "next/link";
import { ArrowThin } from "@/components/icons";

type Props = { eyebrow: string; title: string; desc: string; cta?: { label: string; href: string } };

/** Dark banner used at the top of every inner page (sits under the fixed header). */
export function PageHero({ eyebrow, title, desc, cta }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(#0d0d0d,#1a1a1a)] pt-[150px] pb-24 text-white lg:pt-[200px] lg:pb-28">
      <Image src="/images/Rectangle_40234_6ca78a8eee.webp" alt="" fill preload sizes="100vw" className="-z-10 object-cover" />
      <div className="wrap">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-white/60 uppercase">
          <Link href="/" className="transition-colors hover:text-lime">
            Home
          </Link>
          <span className="text-lime">/</span>
          <span className="text-lime">{eyebrow}</span>
        </nav>
        <h1 className="mb-5 max-w-[820px] text-[40px] leading-[1.05] font-semibold tracking-[-0.02em] sm:text-[56px]">{title}</h1>
        <p className="mb-10 max-w-[640px] font-heading text-lg leading-[1.5] text-white/80 sm:text-xl">{desc}</p>
        {cta && (
          <a
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-lg border-[1.74px] border-lime-soft bg-lime px-6 py-3.5 text-base font-semibold text-forest transition hover:-translate-y-0.5 hover:border-lime hover:bg-forest hover:text-lime"
          >
            {cta.label}
            <ArrowThin className="size-4" />
          </a>
        )}
      </div>
    </section>
  );
}
