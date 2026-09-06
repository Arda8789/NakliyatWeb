import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionKicker } from "@/components/SectionKicker";
import { ArrowRightIcon } from "@/components/icons";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Nakliyat Rehberi | Evden Eve ve Asansörlü Nakliyat Blog",
  description:
    "Evden eve nakliyat, asansörlü nakliyat, paketleme ve taşınma süreciyle ilgili faydalı rehber yazıları. MerkezNakliyat uzmanlarından pratik bilgiler.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <div className="container-page pt-8">
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

      <section className="pt-8 sm:pt-10">
        <SectionKicker>Nakliyat Rehberi</SectionKicker>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          Evden Eve ve <span className="text-gradient">Asansörlü Nakliyat</span>{" "}
          Hakkında Bilmeniz Gerekenler
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
          Taşınma sürecinizi kolaylaştıracak pratik bilgiler, fiyatlandırma
          rehberleri ve uzman tavsiyeleri.
        </p>
      </section>

      <section className="section-padding grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass-card card-hover group flex flex-col p-6"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-orange-600">
              {new Date(post.date).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {post.readingTime}
            </span>
            <h2 className="mt-3 text-lg font-bold text-slate-900">{post.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
              {post.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600">
              Devamını Oku
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
