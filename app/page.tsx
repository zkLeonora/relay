import type { Metadata } from "next";
import Nav from "@/app/_components/layout/Nav";
import Footer from "@/app/_components/layout/Footer";
import Hero from "@/app/_components/home/Hero";
import Products from "@/app/_components/home/Products";
import WhyRelay from "@/app/_components/home/WhyRelay";
import DocsPreview from "@/app/_components/home/DocsPreview";
import BlogPreview from "@/app/_components/home/BlogPreview";
import Values from "@/app/_components/home/Values";
import FAQ from "@/app/_components/home/FAQ";
import AnimatedSection from "@/app/_components/ui/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Relay: Business Software for Real Operations",
  description:
    "Relay builds practical business software for Point of Sale, Booking, Inventory, Accounting, HR, and Analytics for businesses that need tools that work.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Products />
        <WhyRelay />
        <DocsPreview />
        <BlogPreview />
        <Values />
        <FAQ />

        {/* CTA Band */}
        <section
          aria-label="Call to action"
          className="py-24 border-b border-[#e6e6e6]"
        >
          <div className="container max-w-[680px] mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-4">
                Software built for how business actually works.
              </h2>
              <p className="text-base leading-relaxed mb-10 max-w-[460px] mx-auto text-[#6b6b6b]">
                Start with the product you need most. Expand when you are ready.
                No setup fees. No long-term contracts.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/#contact"
                  className="btn btn-primary py-3 px-6 text-[0.9375rem]"
                >
                  Start for free
                </Link>
                <Link
                  href="/#products"
                  className="btn btn-secondary py-3 px-6 text-[0.9375rem]"
                >
                  Explore products
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
