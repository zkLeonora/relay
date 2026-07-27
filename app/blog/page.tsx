import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/_components/layout/Nav";
import Footer from "@/app/_components/layout/Footer";
import AnimatedSection from "@/app/_components/ui/AnimatedSection";
import { blogPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing from the Relay team on product updates, engineering decisions, and how we think about building software.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Nav />
      <main id="main-content" className="pt-[var(--nav-height)]">
        {/* Header */}
        <div className="py-16 md:py-12 border-b border-[#e6e6e6]">
          <div className="container">
            <AnimatedSection>
              <p className="tag mb-4">Blog</p>
              <h1 className="text-[clamp(2rem,3.5vw,3rem)] max-w-[520px]">
                From the team.
              </h1>
            </AnimatedSection>
          </div>
        </div>

        {/* Post list */}
        <div className="container pt-12 pb-24">
          {sorted.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.04}>
              <Link
                href={`/blog/${post.slug}`}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr_80px] gap-3 md:gap-4 py-8 border-b border-[#e6e6e6] hover:pl-2 transition-all duration-[180ms] items-start"
              >
                {/* Date + category */}
                <div className="flex items-center gap-2.5">
                  <time dateTime={post.date} className="text-[0.75rem] text-[#6b6b6b]">
                    {formatDate(post.date)}
                  </time>
                  <span className="text-[0.6875rem] text-[#e6e6e6]">·</span>
                  <span className="tag">{post.category}</span>
                </div>

                {/* Title + excerpt */}
                <div className="grid grid-cols-1 gap-2">
                  <h2 className="text-[1.125rem] font-semibold text-[#111111] tracking-[-0.02em]">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-[560px]">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read time */}
                <p className="text-[0.75rem] text-[#6b6b6b] md:text-right">
                  {post.readTime} min read
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
