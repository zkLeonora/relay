import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/app/_components/layout/Nav";
import Footer from "@/app/_components/layout/Footer";
import { getBlogPost, getAllBlogSlugs, formatDate, blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Relay"],
      url: `${siteConfig.url}/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: { canonical: `/blog/${slug}` },
  };
}

export const revalidate = 86400;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Relay",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Relay",
      url: siteConfig.url,
    },
  };

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content" className="pt-[var(--nav-height)]">
        {/* Header */}
        <div className="py-16 md:py-12 border-b border-[#e6e6e6]">
          <div className="container max-w-[760px]">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 list-none text-[0.8125rem] text-[#6b6b6b]">
                <li>
                  <Link href="/" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">
                    Relay
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[0.625rem]">&rsaquo;</li>
                <li>
                  <Link href="/blog" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[0.625rem]">&rsaquo;</li>
                <li className="text-[#111111]" aria-current="page">{post.title}</li>
              </ol>
            </nav>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-6">
              <span className="tag">{post.category}</span>
              <span className="text-[0.6875rem] text-[#e6e6e6]">·</span>
              <time dateTime={post.date} className="text-[0.8125rem] text-[#6b6b6b]">
                {formatDate(post.date)}
              </time>
              <span className="text-[0.6875rem] text-[#e6e6e6]">·</span>
              <span className="text-[0.8125rem] text-[#6b6b6b]">
                {post.readTime} min read
              </span>
            </div>

            <h1 className="mb-4">{post.title}</h1>
            <p className="text-[1.125rem] leading-relaxed max-w-[580px] text-[#6b6b6b]">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Article body */}
        <article aria-label={post.title} className="py-14 md:pb-24">
          <div className="container max-w-[680px] text-base leading-[1.8] text-[#6b6b6b]">
            {post.content ? (
              post.content.split("\n\n").map((para, i) => (
                <p key={i} className="mb-6">
                  {para}
                </p>
              ))
            ) : (
              <p>This article has not been published yet. Check back soon.</p>
            )}
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="border-t border-[#e6e6e6] pt-12 pb-24">
            <div className="container">
              <p className="text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-[#6b6b6b] mb-6">
                Related
              </p>
              <div className="flex flex-col">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="block py-5 border-b border-[#e6e6e6] group"
                  >
                    <h3 className="text-[0.9375rem] font-semibold text-[#111111] tracking-[-0.01em] mb-1 group-hover:text-[#6b6b6b] transition-colors">
                      {rp.title}
                    </h3>
                    <p className="text-[0.8125rem] text-[#6b6b6b]">
                      {formatDate(rp.date)} · {rp.readTime} min read
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
