import AnimatedSection from "@/app/_components/ui/AnimatedSection";

const values = [
  {
    title: "Work is the product.",
    description:
      "We measure our success by the quality of what we ship. Not the size of our team, the number of features on a roadmap, or the valuation of the company.",
  },
  {
    title: "Clarity over cleverness.",
    description:
      "Simple, direct software. Clear documentation. Honest communication. We do not complicate things that do not need to be complicated.",
  },
  {
    title: "Long-term thinking.",
    description:
      "We build software that should last. That means saying no to shortcuts, investing in reliability, and caring about the businesses that depend on us.",
  },
  {
    title: "Accountability.",
    description:
      "When something breaks, we say so. When we make a mistake, we fix it and explain what happened. We treat our customers as adults who deserve the truth.",
  },
];

export default function Values() {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="section border-b border-[#e6e6e6]"
    >
      <div className="container flex flex-col gap-12">
        {/* HEADER */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-8 border-b border-[#e6e6e6]">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6b6b6b]">Company Ethos</span>
              <h2 id="values-heading" className="text-3xl font-bold tracking-tight text-[#111111]">
                How we work.
              </h2>
            </div>
            <p className="text-sm text-[#6b6b6b] max-w-xs sm:text-right">
              The operating principles behind every line of code we write.
            </p>
          </div>
        </AnimatedSection>

        {/* CLEAN 4-COLUMN TEXT LIST (NO CARD BOX / HOVER) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.06}>
              <div className="flex flex-col gap-3">
                <span className="text-xs text-[#6b6b6b] font-mono font-semibold">
                  0{i + 1}
                </span>
                <h3 className="text-base font-bold text-[#111111] tracking-tight border-b border-[#e6e6e6] pb-2">
                  {value.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#6b6b6b]">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
