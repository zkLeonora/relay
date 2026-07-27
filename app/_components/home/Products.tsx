import Link from "next/link";
import AnimatedSection from "@/app/_components/ui/AnimatedSection";
import ProductPreviewGrid from "./ProductPreviewGrid";

export default function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="section border-b border-[#e6e6e6]"
    >
      <div className="container flex flex-col gap-12">
        <AnimatedSection>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div className="flex flex-col gap-2 max-w-[540px]">
              <h2 id="products-heading">
                Practical business tools built for real operations.
              </h2>
              <p className="text-sm text-[#6b6b6b]">
                Explore live application interfaces across our entire product suite.
              </p>
            </div>
            <Link href="/products/counter" className="btn btn-secondary shrink-0">
              Explore product suite
            </Link>
          </div>
        </AnimatedSection>

        {/* Dynamic SaaS Application Interface Grid */}
        <AnimatedSection delay={0.08}>
          <ProductPreviewGrid />
        </AnimatedSection>
      </div>
    </section>
  );
}
