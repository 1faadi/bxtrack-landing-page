import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { posts } from "@/lib/posts";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { ContactForm } from "@/components/landing/ContactForm";
import { ArrowThin } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return { title: `${p.name} | BXTrack Portfolio`, description: p.summary, alternates: { canonical: `/portfolio/${p.slug}` } };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
      <h2 className="text-2xl font-semibold tracking-[-0.02em] text-black lg:sticky lg:top-32 lg:col-span-4 lg:self-start">{title}</h2>
      <div className="flex flex-col gap-5 text-lg leading-[1.7] text-[#333] lg:col-span-8 lg:max-w-[68ch]">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();

  const idx = projects.indexOf(p);
  const next = projects[(idx + 1) % projects.length];
  const related = posts.find((post) => post.project === p.slug);
  const facts = [
    ["Type", p.type],
    ["Year", p.year],
    ["Our role", p.role],
    ["Built with", p.stack.join(", ")],
  ];

  return (
    <main>
      <header className="bg-forest-ink pt-[150px] pb-[180px] text-white lg:pt-[190px] lg:pb-[230px]">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/70">
            <Link href="/portfolio" className="underline-offset-4 hover:text-lime hover:underline">
              Portfolio
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span>{p.category}</span>
          </nav>
          <h1 className="mb-6 text-[48px] leading-none font-bold tracking-[-0.04em] sm:text-[80px]">{p.name}</h1>
          <p className="max-w-[60ch] text-xl leading-[1.55] text-white/85">{p.summary}</p>
          <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-[auto_auto_1fr_1.4fr]">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt className="mb-1 text-sm text-white/60">{k}</dt>
                <dd className="text-base leading-snug text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="wrap -mt-[130px] lg:-mt-[170px]">
        <ProjectVisual
          visual={p.visual}
          preload
          sizes="(min-width: 1280px) 1250px, 100vw"
          className="rounded-[24px] shadow-[0_30px_80px_-30px_rgba(18,35,20,0.55)]"
        />
      </div>

      <article className="wrap pt-16 pb-10 lg:pt-24">
        <Section title="The problem">
          {p.problem.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </Section>

        <Section title="What we built">
          {p.built.map((t) => (
            <p key={t}>{t}</p>
          ))}
          {p.agents && (
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
              {p.agents.map((a) => (
                <li key={a.name} className="flex flex-col gap-3">
                  <Image src={a.avatar} alt="" width={160} height={160} className="aspect-square w-full rounded-2xl bg-surface object-cover" />
                  <div>
                    <p className="text-base font-semibold text-black">{a.name}</p>
                    <p className="text-sm leading-snug text-[#5c5c5c]">{a.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Section>

        <Section title="How it works">
          <ol className="flex flex-col">
            {p.steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[48px_1fr] gap-4 border-b border-line py-5 last:border-0">
                <span className="flex size-10 items-center justify-center rounded-full bg-lime font-heading text-base font-bold text-forest">
                  {i + 1}
                </span>
                <div>
                  <p className="font-heading text-xl font-semibold text-black">{s.title}</p>
                  <p className="text-base leading-[1.6] text-[#4a4a4a]">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Where it stands">
          {p.status.map((t) => (
            <p key={t}>{t}</p>
          ))}
          {related && (
            <Link
              href={`/blog/${related.slug}`}
              className="group mt-2 flex items-start justify-between gap-6 rounded-2xl bg-surface p-6 transition-colors hover:bg-[#e6ebdf]"
            >
              <span>
                <span className="block text-sm text-[#5c5c5c]">Read the engineering write-up</span>
                <span className="mt-1 block font-heading text-xl leading-snug font-semibold text-black">{related.title}</span>
              </span>
              <ArrowThin className="mt-1 size-5 shrink-0 text-forest transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          )}
        </Section>
      </article>

      <nav aria-label="Next project" className="wrap pb-4">
        <Link
          href={`/portfolio/${next.slug}`}
          className="group flex flex-col gap-2 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <span>
            <span className="block text-base text-[#5c5c5c]">Next project</span>
            <span className="block text-[36px] leading-tight font-bold tracking-[-0.03em] text-black underline decoration-transparent decoration-2 underline-offset-8 group-hover:decoration-lime sm:text-[56px]">
              {next.name}
            </span>
          </span>
          <span className="max-w-[40ch] text-lg text-[#4a4a4a]">{next.line}</span>
        </Link>
      </nav>

      <ContactForm />
    </main>
  );
}
