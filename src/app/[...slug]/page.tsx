import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPages, getPage, type SitePage } from "@/lib/pages";
import { contact } from "@/lib/content";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";
import { PageHero } from "@/components/landing/PageHero";
import { Efficiency } from "@/components/landing/Efficiency";
import { TechStack } from "@/components/landing/TechStack";
import { Process } from "@/components/landing/Process";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { ContactForm } from "@/components/landing/ContactForm";

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allPages.map((p) => ({ slug: p.path.slice(1).split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getPage((await params).slug);
  if (!page) return {};
  return { title: `${page.title} | BXTrack Solutions`, description: page.desc, alternates: { canonical: page.path } };
}

const FORM = { label: "Get In Touch", href: "#contact-sales" };

function Sitemap() {
  const groups = new Map<string, { path: string; title: string }[]>([
    ["Portfolio", [{ path: "/portfolio", title: "All projects" }, ...projects.map((p) => ({ path: `/portfolio/${p.slug}`, title: p.name }))]],
    ["Blog", [{ path: "/blog", title: "All posts" }, ...posts.map((p) => ({ path: `/blog/${p.slug}`, title: p.title }))]],
    ...Map.groupBy(allPages, (p) => p.eyebrow.replace(/^Hire .*/, "Hire Developers")),
  ]);
  return (
    <section className="bg-white py-[100px]">
      <div className="wrap grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {[...groups].map(([group, list]) => (
          <div key={group}>
            <h2 className="mb-5 text-xl font-semibold text-forest">{group}</h2>
            <ul className="flex flex-col gap-3">
              {list.map((p) => (
                <li key={p.path} className="flex items-center gap-2 before:size-2 before:shrink-0 before:rounded-[2px] before:bg-lime-deep">
                  <Link href={p.path} className="text-base text-slate transition-colors hover:text-lime-deep">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Legal({ page }: { page: SitePage }) {
  return (
    <section className="bg-white py-[100px]">
      <div className="wrap max-w-[820px] font-heading text-lg leading-[1.7] text-muted">
        <p className="mb-6">
          The full {page.title} for BXTrack Solutions is being prepared and will be published here soon.
        </p>
        <p>
          For any questions in the meantime, email{" "}
          <a href={`mailto:${contact.email}`} className="font-semibold text-forest underline underline-offset-2">
            {contact.email}
          </a>{" "}
          or call{" "}
          <a href={contact.phoneHref} className="font-semibold text-forest underline underline-offset-2">
            {contact.phone}
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default async function Page({ params }: Props) {
  const page = getPage((await params).slug);
  if (!page) notFound();

  const hero = (cta?: typeof FORM) => <PageHero eyebrow={page.eyebrow} title={page.title} desc={page.desc} cta={cta} />;

  switch (page.kind) {
    case "contact":
      return (
        <main>
          {hero()}
          <ContactForm />
        </main>
      );
    case "sitemap":
      return (
        <main>
          {hero()}
          <Sitemap />
        </main>
      );
    case "legal":
      return (
        <main>
          {hero()}
          <Legal page={page} />
        </main>
      );
    default:
      return (
        <main>
          {hero(FORM)}
          <Efficiency />
          <TechStack />
          <Process />
          <CaseStudies />
          <ContactForm />
        </main>
      );
  }
}
