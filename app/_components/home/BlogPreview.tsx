import Link from "next/link";
import { getLatestPosts, formatDate } from "@/lib/blog";
import AnimatedSection from "@/app/_components/ui/AnimatedSection";
import { ArrowUpRight } from "lucide-react";

export default function BlogPreview() {
  const posts = getLatestPosts(3);

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="section border-b border-[#e6e6e6]"
    >
      <div className="container flex flex-col gap-12">
        {/* HEADER */}
        <AnimatedSection>
          <div className="flex items-end justify-between flex-wrap gap-4 pb-6 border-b border-[#e6e6e6]">
            <div>
              <h2 id="blog-heading" className="text-3xl font-bold tracking-tight text-[#111111]">
                From the team.
              </h2>
              <p className="text-sm text-[#6b6b6b] mt-1">
                Engineering choices, product updates, and building Relay.
              </p>
            </div>
            <Link href="/blog" className="btn btn-secondary text-xs py-2.5 px-4">
              All articles
            </Link>
          </div>
        </AnimatedSection>

        {/* CLEAN EDITORIAL ARTICLE ROWS (NO BOX CARDS) */}
        <div className="flex flex-col">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-[#e6e6e6] last:border-b-0 items-baseline group"
              >
                <div className="md:col-span-3 flex items-center gap-3">
                  <span className="text-xs font-mono text-[#6b6b6b]">{formatDate(post.date)}</span>
                  <span className="text-[0.6875rem] font-medium text-[#6b6b6b] border border-[#e6e6e6] px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>

                <div className="md:col-span-8 flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-[#111111] tracking-tight group-hover:text-[#6b6b6b] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#6b6b6b] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="md:col-span-1 flex justify-end text-xs text-[#6b6b6b]">
                  <ArrowUpRight size={16} className="text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
