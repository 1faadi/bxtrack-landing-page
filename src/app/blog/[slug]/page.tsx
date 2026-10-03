import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, posts, type Block } from "@/lib/posts";
import { getProject } from "@/lib/projects";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { ContactForm } from "@/components/landing/ContactForm";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} | BXTrack Blog`,
    description: post.dek,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.dek, publishedTime: post.date },
  };
}

function Render({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-8 font-heading text-[28px] leading-tight font-semibold tracking-[-0.02em] text-black">{block.text}</h2>;
    case "quote":
      return (
        <blockquote className="my-6 font-serif text-[28px] leading-[1.35] text-forest italic sm:-mx-10 sm:text-[32px]">
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="relative pl-7 before:absolute before:top-[0.62em] before:left-0 before:size-2.5 before:rounded-[3px] before:bg-lime-deep">
              {item}
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre className="-mx-[15px] overflow-x-auto bg-forest-ink px-6 py-5 font-mono text-[14px] leading-[1.7] text-[#d9f2c9] sm:mx-0 sm:rounded-2xl">
          <code>{block.text}</code>
        </pre>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const project = post.project ? getProject(post.project) : undefined;
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <header className="bg-forest-ink pt-[150px] pb-16 text-white lg:pt-[190px] lg:pb-24">
        <div className="mx-auto max-w-[860px] px-[15px]">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/70">
            <Link href="/blog" className="underline-offset-4 hover:text-lime hover:underline">
              Blog
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span>{post.topic}</span>
          </nav>
          <h1 className="mb-6 text-[38px] leading-[1.05] font-bold tracking-[-0.035em] sm:text-[58px]">{post.title}</h1>
          <p className="mb-10 max-w-[60ch] font-serif text-xl leading-[1.55] text-white/85 sm:text-[22px]">{post.dek}</p>
          <p className="flex flex-wrap gap-x-6 gap-y-1 text-base text-white/70">
            <span className="text-white">BXTrack Engineering</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.minutes} min read</span>
          </p>
        </div>
      </header>

      <article className="bg-white px-[15px] py-16 lg:py-24">
        <div className="mx-auto flex max-w-[68ch] flex-col gap-6 font-serif text-[19px] leading-[1.75] text-[#262626]">
          {post.body.map((block, i) => (
            <Render key={i} block={block} />
          ))}
        </div>
      </article>

      {project && (
        <aside aria-label="Related project" className="bg-white px-[15px] pb-16">
          <Link
            href={`/portfolio/${project.slug}`}
            className="group mx-auto grid max-w-[860px] gap-6 overflow-hidden rounded-[24px] bg-surface sm:grid-cols-[1.1fr_1fr] sm:items-center"
          >
            <ProjectVisual visual={project.visual} sizes="(min-width: 640px) 460px, 100vw" />
            <div className="px-6 pb-7 sm:px-2 sm:py-6 sm:pr-8">
              <p className="mb-2 text-sm text-[#5c5c5c]">The project behind this post</p>
              <p className="mb-2 text-[28px] leading-tight font-bold tracking-[-0.02em] text-black underline decoration-transparent decoration-2 underline-offset-[6px] group-hover:decoration-lime">
                {project.name}
              </p>
              <p className="text-base leading-[1.6] text-[#4a4a4a]">{project.line}</p>
            </div>
          </Link>
        </aside>
      )}

      <nav aria-label="More posts" className="border-t border-line bg-white px-[15px] py-16">
        <div className="mx-auto max-w-[860px]">
          <p className="mb-6 text-base text-[#5c5c5c]">Keep reading</p>
          <ul className="grid gap-10 sm:grid-cols-2">
            {more.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <p className="mb-2 text-[24px] leading-tight font-semibold tracking-[-0.02em] text-black underline decoration-transparent decoration-2 underline-offset-[6px] group-hover:decoration-lime">
                    {p.title}
                  </p>
                  <p className="font-serif text-lg leading-[1.6] text-[#4a4a4a]">{p.dek}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <ContactForm />
    </main>
  );
}
