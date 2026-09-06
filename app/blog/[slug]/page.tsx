import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionKicker } from "@/components/SectionKicker";
import { CTASection } from "@/components/CTASection";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="container-page pt-8">
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />

      <article className="pt-8 sm:pt-10">
        <SectionKicker>
          {new Date(post.date).toLocaleDateString("tr-TR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          · {post.readingTime} okuma
        </SectionKicker>
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
          {post.intro}
        </p>

        <div className="mt-10 max-w-3xl space-y-10">
          {post.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-white">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-400">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>

      <section className="section-padding">
        <CTASection />
      </section>
    </div>
  );
}
