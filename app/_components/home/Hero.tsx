import Link from "next/link";
import AnimatedSection from "@/app/_components/ui/AnimatedSection";

const products = [
  { name: "Counter", label: "Point of Sale" },
  { name: "Queue", label: "Booking" },
  { name: "Stock", label: "Inventory" },
  { name: "Ledger", label: "Accounting" },
  { name: "People", label: "HR" },
  { name: "Analytics", label: "Analytics" },
];

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="pt-[calc(var(--nav-height)+6rem)] pb-20 border-b border-[#e6e6e6]"
    >
      <div className="container flex flex-col gap-10">
        <AnimatedSection delay={0}>
          <div className="flex flex-col gap-6 items-start">
            <h1 className="max-w-[840px]">
              Business software
              <br />
              for real operations.
            </h1>
            <p className="text-lg md:text-xl max-w-[520px] leading-relaxed text-[#6b6b6b]">
              Relay is a suite of six practical applications, from point of sale
              to HR, built to work together and grow with your business.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#products"
              className="btn btn-primary py-3 px-5 text-sm"
            >
              Explore products
            </Link>
            <Link
              href="/blog/why-we-built-relay"
              className="btn btn-secondary py-3 px-5 text-sm"
            >
              Our story
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap gap-2 pt-6 border-t border-[#e6e6e6]">
            {products.map((p) => (
              <Link
                key={p.name}
                href={`/products/${p.name.toLowerCase()}`}
                className="inline-flex flex-col px-3.5 py-2.5 border border-[#e6e6e6] rounded-md hover:border-[#b0b0b0] hover:bg-[#f4f4f2] transition-colors"
              >
                <span className="text-xs font-semibold text-[#111111] tracking-tight">
                  {p.name}
                </span>
                <span className="text-[0.6875rem] text-[#6b6b6b]">{p.label}</span>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
