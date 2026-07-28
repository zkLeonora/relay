import AnimatedSection from "@/app/_components/ui/AnimatedSection";

const reasons = [
  {
    number: "01",
    title: "Built to work together.",
    description:
      "Each Relay product shares a common data model. When a sale is made in Counter, Stock updates. When Ledger reconciles, it pulls from real transaction data. You never import CSVs or paste numbers between systems.",
  },
  {
    number: "02",
    title: "Practical over impressive.",
    description:
      "We make decisions based on what actually helps you run your business, not what looks good in a demo. Features are built when customers need them. Roadmap is driven by real operations.",
  },
  {
    number: "03",
    title: "Designed for reliability.",
    description:
      "Counter works offline. Queue never double-books. Stock alerts before you run out. We obsess over the failure modes that cost businesses real money, and we engineer them out.",
  },
  {
    number: "04",
    title: "Start small. Grow into it.",
    description:
      "You can start with just Counter and add more products as your business grows. Each product is fully capable on its own. The integration is a bonus, not a requirement.",
  },
];

export default function WhyRelay() {
  return (
    <section
      id="why-relay"
      aria-labelledby="why-relay-heading"
      className="section border-b border-[#e6e6e6]"
    >
      <div className="container flex flex-col gap-12">
        {/* TWO-COLUMN HEADER */}
        <AnimatedSection>
          <div className="gap-6 items-end pb-8 border-b border-[#e6e6e6]">
            <div className="md:col-span-6 flex flex-col gap-3">
              <h2 id="why-relay-heading" className="text-3xl md:text-4xl font-bold text-center tracking-tight">
                Software you can depend on.
              </h2>
            </div>
          </div>
        </AnimatedSection>

        {/* CLEAN TYPOGRAPHY ROWS (NO BOX CARDS / HOVERS) */}
        <div className="flex flex-col">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.number} delay={i * 0.06}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-[#e6e6e6] last:border-b-0 items-start">
                <h3 className="md:col-span-4 text-lg font-bold text-[#111111] tracking-tight">
                  {reason.title}
                </h3>
                <p className="md:col-span-6 text-sm leading-relaxed text-[#6b6b6b]">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
