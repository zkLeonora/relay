import Link from "next/link";
import { getLatestPosts, formatDate } from "@/lib/blog";
import AnimatedSection from "@/app/_components/ui/AnimatedSection";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";

export default function BlogPreview() {
  const posts = getLatestPosts(3);
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="section border-b border-[#e6e6e6]"
    >
      <div className="container flex flex-col gap-10">
        {/* HEADER */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#e6e6e6]">
            <div>
              <h2 id="blog-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
                From the team.
              </h2>
              <p className="text-sm text-[#6b6b6b] mt-1.5 max-w-lg">
                Engineering choices, product updates, and how we build Relay.
              </p>
            </div>
            <Link href="/blog" className="btn btn-secondary text-xs py-2.5 px-4 shrink-0">
              All articles
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        {/* FEATURED + SECONDARY GRID */}
        {posts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* FEATURED POST (LEFT / 7 COLS) */}
            {featuredPost && (
              <AnimatedSection className="lg:col-span-7 flex" delay={0.05}>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group flex flex-col justify-between w-full bg-[#f4f4f2]/50 hover:bg-[#f4f4f2] border border-[#e6e6e6] rounded-xl p-7 md:p-8 transition-all duration-300 hover:shadow-xs"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-[#111111] bg-white border border-[#e6e6e6] px-2.5 py-1 rounded-md">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs text-[#6b6b6b] font-mono">Latest Article</span>
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#111111] tracking-tight group-hover:text-[#333] transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-sm text-[#6b6b6b] leading-relaxed line-clamp-3 mt-1">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#e6e6e6]/80 text-xs text-[#6b6b6b]">
                    <div className="flex items-center gap-4">
                      <span>{formatDate(featuredPost.date)}</span>
                      {featuredPost.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {featuredPost.readTime} min read
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 font-medium text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      Read story <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            )}

            {/* SECONDARY POSTS (RIGHT / 5 COLS) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {secondaryPosts.map((post, i) => (
                <AnimatedSection key={post.slug} delay={0.1 + i * 0.05} className="flex-1 flex">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col justify-between w-full bg-white hover:bg-[#f4f4f2]/60 border border-[#e6e6e6] rounded-xl p-6 transition-all duration-300 hover:shadow-xs"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[0.6875rem] font-medium text-[#6b6b6b] border border-[#e6e6e6] px-2 py-0.5 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-[#6b6b6b] font-mono">{formatDate(post.date)}</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#111111] tracking-tight group-hover:text-[#444] transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-[#6b6b6b] leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#e6e6e6]/60 text-xs">
                      {post.readTime ? (
                        <span className="flex items-center gap-1 text-[#6b6b6b]">
                          <Clock size={12} />
                          {post.readTime} min read
                        </span>
                      ) : <span />}
                      <span className="inline-flex items-center gap-1 text-[#111111] font-medium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        Read <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

