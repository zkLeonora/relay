import AnimatedSection from "@/app/_components/ui/AnimatedSection";

const ecosystem = [
  {
    category: "Point of Sale",
    product: "Counter",
    description: "Fast, reliable checkout for retail and service businesses.",
    detail: "Offline-first. Multi-terminal. Real-time sync.",
  },
  {
    category: "Booking",
    product: "Queue",
    description: "Online appointments and scheduling for service businesses.",
    detail: "Embeddable widget. SMS reminders. No double bookings.",
  },
  {
    category: "Inventory",
    product: "Stock",
    description: "Precise tracking of products, quantities, and suppliers.",
    detail: "Low-stock alerts. Barcode scanning. Multi-location.",
  },
  {
    category: "Accounting",
    product: "Ledger",
    description: "Clean, simple accounting without the complexity.",
    detail: "Invoicing. Bank reconciliation. Tax summaries.",
  },
  {
    category: "HR",
    product: "People",
    description: "Employee management from onboarding to payroll.",
    detail: "Leave management. Contracts. Performance check-ins.",
  },
  {
    category: "Analytics",
    product: "Analytics",
    description: "A unified view of your business across all products.",
    detail: "Cross-product insights. Custom reports. Scheduled exports.",
  },
];

export default function ProductEcosystem() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="section border-b border-[#e6e6e6]"
    >
      <div className="container flex flex-col gap-14">
        {/* CENTERED HEADER VARIATION */}
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <h2 id="ecosystem-heading" className="text-3xl md:text-4xl font-bold tracking-tight">
              Six products. One system.
            </h2>
            <p className="text-base leading-relaxed text-[#6b6b6b]">
              Every Relay product is built to work independently, and even better
              together. Data flows between them seamlessly so you never have to reconcile
              spreadsheets or copy numbers between systems.
            </p>
          </div>
        </AnimatedSection>

        {/* ECOSYSTEM CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ecosystem.map((item, i) => (
            <AnimatedSection key={item.product} delay={i * 0.05}>
              <div className="bg-[#fafaf8] border border-[#e6e6e6] hover:border-[#111111] rounded-xl p-7 flex flex-col gap-3 transition-all duration-200 h-full group">
                <div className="flex items-center justify-between">
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#6b6b6b] bg-[#f4f4f2] px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#6b6b6b] font-mono group-hover:text-[#111111]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight mt-1">
                  {item.product}
                </h3>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">{item.description}</p>
                <p className="text-xs text-[#6b6b6b] border-t border-[#e6e6e6] pt-3 mt-auto font-mono">
                  {item.detail}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
