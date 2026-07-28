import Link from "next/link";
import AnimatedSection from "@/app/_components/ui/AnimatedSection";
import { BookOpen } from "lucide-react";

const docSections = [
  {
    title: "Getting started",
    description: "Set up your first Relay product in under 10 minutes.",
    links: ["Installation", "Account setup", "Inviting your team", "Your first sale"],
  },
  {
    title: "Counter",
    description: "Point of sale setup, terminal management, and offline use.",
    links: ["Configure your menu", "Add a terminal", "Offline mode", "Receipt settings"],
  },
  {
    title: "Queue",
    description: "Booking setup, staff schedules, and the embedding guide.",
    links: ["Booking widget", "Staff availability", "Reminders", "Cancellation policy"],
  },
  {
    title: "API Reference",
    description: "Integrate Relay data into your own systems.",
    links: ["Authentication", "Products API", "Webhooks", "Rate limits"],
  },
];

export default function DocsPreview() {
  return (
    <section
      id="docs"
      aria-labelledby="docs-heading"
      className="section border-b border-[#e6e6e6]"
    >
      <div className="container flex flex-col gap-12">
        {/* HEADER */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#e6e6e6]">
            <div className="flex flex-col gap-2">
              <h2 id="docs-heading" className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
                Clear documentation.
              </h2>
            </div>
            <Link href="/docs" className="btn btn-secondary text-xs py-2.5 px-4 shrink-0">
              Browse all docs
            </Link>
          </div>
        </AnimatedSection>

        {/* CLEAN COLUMNS (NO BOX CARDS / HOVERS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {docSections.map((section, i) => (
            <AnimatedSection key={section.title} delay={i * 0.05}>
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-bold text-[#111111] tracking-tight border-b border-[#e6e6e6] pb-2">
                  {section.title}
                </h3>
                <p className="text-xs text-[#6b6b6b] leading-relaxed mb-2">
                  {section.description}
                </p>
                <ul className="flex flex-col gap-2 list-none">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="/docs"
                        className="inline-flex items-center gap-1.5 text-xs text-[#6b6b6b] hover:text-[#111111] transition-colors"
                      >
                        <span aria-hidden="true" className="text-[0.625rem] text-[#6b6b6b]">
                          &rarr;
                        </span>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
