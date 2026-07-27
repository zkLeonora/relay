import Link from "next/link";

const footerLinks = {
  Products: [
    { label: "Counter", href: "/products/counter" },
    { label: "Queue", href: "/products/queue" },
    { label: "Stock", href: "/products/stock" },
    { label: "Ledger", href: "/products/ledger" },
    { label: "People", href: "/products/people" },
    { label: "Analytics", href: "/products/analytics" },
  ],
  Company: [
    { label: "About", href: "/#why-relay" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Developers: [
    { label: "Documentation", href: "/#docs" },
    { label: "API Reference", href: "/docs/api" },
    { label: "Changelog", href: "/changelog" },
    { label: "Status", href: "/status" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t border-[#e6e6e6] bg-[#fafaf8] pt-16 pb-10">
      <div className="container">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Relay home" className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#111111] rounded-[4px] flex items-center justify-center">
                <div className="w-[10px] h-[10px] bg-[#fafaf8] rounded-[2px]" />
              </div>
              <span className="text-[0.9375rem] font-semibold text-[#111111] tracking-[-0.02em]">
                Relay
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-[220px]">
              Practical business software built for real operations.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="text-[0.75rem] font-semibold text-[#111111] tracking-[0.06em] uppercase mb-3.5">
                  {category}
                </p>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 border-t border-[#e6e6e6] flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <p className="text-[0.8125rem] text-[#6b6b6b]">
            &copy; {currentYear} Relay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
