import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";
import { PageHero } from "@/components/landing/PageHero";
import { ContactForm } from "@/components/landing/ContactForm";
import { ProjectVisual } from "@/components/projects/ProjectVisual";

export const metadata: Metadata = {
  title: "Portfolio | BXTrack Solutions",
  description: "AI products BXTrack has designed and built: multi-agent platforms, retrieval-augmented tutors, workplace assistants and explainable optimisation.",
  alternates: { canonical: "/portfolio" },
};

// Gallery rhythm: wide feature, then alternating 7/5 and 5/7 pairs, centred closer.
const layout = [
  { span: "lg:col-span-12", aspect: "aspect-[16/10] lg:aspect-[21/9]", sizes: "(min-width: 1280px) 1250px, 100vw" },
  { span: "lg:col-span-7", aspect: "", sizes: "(min-width: 1024px) 720px, 100vw" },
  { span: "lg:col-span-5 lg:mt-28", aspect: "", sizes: "(min-width: 1024px) 520px, 100vw" },
  { span: "lg:col-span-5", aspect: "", sizes: "(min-width: 1024px) 520px, 100vw" },
  { span: "lg:col-span-7 lg:mt-28", aspect: "", sizes: "(min-width: 1024px) 720px, 100vw" },
  { span: "lg:col-span-8 lg:col-start-3", aspect: "", sizes: "(min-width: 1024px) 830px, 100vw" },
];

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="AI products we've built"
        desc="Agents that run a growth team, a tutor that cites its sources, an assistant that lives in Slack and a planner that explains itself. Here's the work, and how each one works."
      />

      <section className="bg-white py-20 lg:py-[110px]">
        <ul className="wrap grid gap-x-10 gap-y-16 lg:grid-cols-12 lg:gap-y-24">
          {projects.map((p, i) => {
            const l = layout[i % layout.length];
            return (
              <li key={p.slug} className={l.span}>
                <Link href={`/portfolio/${p.slug}`} className="group block focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-forest">
                  <ProjectVisual visual={p.visual} sizes={l.sizes} preload={i === 0} className={cn("rounded-[20px]", l.aspect)} />
                  <div className="mt-6 flex flex-col gap-2 lg:max-w-[640px]">
                    <h2 className="text-[26px] leading-tight font-semibold tracking-[-0.02em] text-black underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-lime sm:text-[32px]">
                      {p.name}
                    </h2>
                    <p className="text-lg leading-[1.55] text-[#4a4a4a]">{p.line}</p>
                    <p className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-sm text-[#5c5c5c]">
                      <span className="font-medium text-forest">{p.category}</span>
                      <span>{p.type}</span>
                      <span>{p.year}</span>
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <ContactForm />
    </main>
  );
}
