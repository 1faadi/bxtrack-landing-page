import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, posts } from "@/lib/posts";
import { PageHero } from "@/components/landing/PageHero";
import { ContactForm } from "@/components/landing/ContactForm";

export const metadata: Metadata = {
  title: "Blog | BXTrack Solutions",
  description: "Engineering notes from building AI products: multi-agent design, retrieval, optimisation and guardrails.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Notes from the build"
        desc="What we learn shipping AI products: the decisions that worked, the ones we changed, and why."
      />

      <section className="bg-white py-20 lg:py-[110px]">
        <div className="wrap">
          <Link href={`/blog/${featured.slug}`} className="group grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col gap-1 text-base text-[#5c5c5c] lg:col-span-3 lg:pt-3">
              <span className="font-medium text-forest">Latest</span>
              <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              <span>{featured.minutes} min read</span>
            </div>
            <div className="lg:col-span-9">
              <h2 className="mb-6 max-w-[18ch] text-[40px] leading-[1.02] font-bold tracking-[-0.035em] text-black underline decoration-transparent decoration-[3px] underline-offset-[10px] transition-colors group-hover:decoration-lime sm:text-[64px]">
                {featured.title}
              </h2>
              <p className="max-w-[58ch] font-serif text-xl leading-[1.6] text-[#3d3d3d]">{featured.dek}</p>
            </div>
          </Link>

          <ul className="mt-20 border-t border-line lg:mt-28">
            {rest.map((post) => (
              <li key={post.slug} className="border-b border-line">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-3 py-9 lg:grid-cols-12 lg:gap-10 lg:py-11"
                >
                  <div className="flex gap-4 text-base text-[#5c5c5c] lg:col-span-3 lg:flex-col lg:gap-1">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="text-forest">{post.topic}</span>
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="mb-3 text-[26px] leading-tight font-semibold tracking-[-0.02em] text-black underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-lime sm:text-[30px]">
                      {post.title}
                    </h3>
                    <p className="max-w-[62ch] font-serif text-lg leading-[1.6] text-[#4a4a4a]">{post.dek}</p>
                  </div>
                  <span className="text-base text-[#5c5c5c] lg:col-span-2 lg:pt-2 lg:text-right">{post.minutes} min read</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
