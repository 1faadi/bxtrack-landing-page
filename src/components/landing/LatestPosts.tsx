import Link from "next/link";
import { formatDate, posts } from "@/lib/posts";
import { ArrowUpRight } from "@/components/icons";

export function LatestPosts() {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <section className="bg-white pt-[120px]">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-[560px] text-[34px] leading-[1.1] font-semibold tracking-[-0.02em] text-black sm:text-[44px] sm:leading-[47px]">
            Notes from the build
          </h2>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-[18px] rounded-[30px] bg-forest px-7 py-3.5 font-heading text-base font-semibold text-white transition hover:-translate-y-px hover:bg-lime hover:text-forest-deep"
          >
            Read the blog
            <ArrowUpRight className="size-3 text-lime-deep group-hover:text-forest-deep" />
          </Link>
        </div>
        <ul className="grid border-t-2 border-black md:grid-cols-3">
          {latest.map((post) => (
            <li key={post.slug} className="border-b border-line md:border-b-0 md:border-l md:first:border-l-0">
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col gap-4 py-8 md:px-8 md:first:pl-0">
                <p className="flex gap-4 text-sm text-[#5c5c5c]">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="text-forest">{post.topic}</span>
                </p>
                <p className="text-[22px] leading-[1.2] font-semibold tracking-[-0.02em] text-black underline decoration-transparent decoration-2 underline-offset-[6px] group-hover:decoration-lime">
                  {post.title}
                </p>
                <p className="font-serif text-[17px] leading-[1.6] text-[#4a4a4a]">{post.dek}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
