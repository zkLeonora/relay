import AnimatedSection from "@/app/_components/ui/AnimatedSection";
import Accordion from "@/app/_components/ui/Accordion";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Can I use just one Relay product, or do I need all of them?",
    answer:
      "You can start with any single product and use it entirely on its own. Each product is fully functional independently. The integration between products is a bonus when you are ready for it, not a requirement to get started.",
  },
  {
    question: "Does Counter work without an internet connection?",
    answer:
      "Yes. Counter is built offline-first. Sales continue normally during an outage, and all data syncs automatically when connectivity returns. You will not lose a transaction or a receipt.",
  },
  {
    question: "How does Relay handle pricing?",
    answer:
      "Relay is priced per product, per month. You pay for what you use. There are no hidden integration fees or charges for connecting products together. Volume pricing is available for businesses with multiple locations.",
  },
  {
    question: "Can multiple team members use Relay at the same time?",
    answer:
      "All Relay products support multiple concurrent users with role-based access control. Counter supports multiple simultaneous terminals. You can configure exactly what each team member can see and do.",
  },
  {
    question: "Is Relay suitable for businesses with multiple locations?",
    answer:
      "Yes. Stock, Counter, and People all support multi-location operations. You can run separate inventories, terminal configurations, and staff rosters per location, with consolidated reporting across all of them.",
  },
  {
    question: "What kind of support does Relay provide?",
    answer:
      "All customers have access to our documentation and email support. Professional plan customers receive priority response and onboarding assistance. We do not outsource support, you talk to the people who build the software.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section border-b border-[#e6e6e6]"
    >
      <div className="container">
        {/* SIDEBAR GRID LAYOUT WITH SUPPORT CALLOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          <AnimatedSection className="md:col-span-4">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
                  Common questions.
                </h2>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">
                  Everything you need to know about Relay's products, pricing, and offline architecture.
                </p>
              </div>

              {/* Support Callout Box */}
              <div className="p-5 border border-[#e6e6e6] rounded-xl bg-[#f4f4f2] flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
                  <HelpCircle size={14} />
                  <span>Have a specific question?</span>
                </div>
                <p className="text-xs text-[#6b6b6b] leading-relaxed">
                  Our engineering team handles customer support directly. We respond within a few hours.
                </p>
                <Link href="/#contact" className="btn btn-primary text-xs py-2 px-3 self-start">
                  Contact support
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="md:col-span-8 border-t border-[#e6e6e6]">
            <Accordion items={faqs} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
