export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  content?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-we-built-relay",
    title: "Why we built Relay",
    excerpt:
      "Most business software is built for enterprises. We built Relay for the businesses that actually keep cities running: the café on the corner, the clinic down the street, the warehouse on the edge of town.",
    date: "2026-07-10",
    readTime: 5,
    category: "Company",
    content: `
Most business software is built for enterprises. Thousand-seat deployments. Procurement committees. Integration consultants. The businesses that actually need reliable software, the café on the corner, the clinic down the street, the warehouse manager who arrives at 5am, are an afterthought.

We built Relay because we believe practical businesses deserve practical tools.

Not stripped-down lite versions of enterprise products. Not fragmented collections of unconnected apps. A cohesive system that understands how a real business works, where the point of sale talks to inventory, where staff scheduling connects to payroll, where every number traces back to a source.

Relay is not trying to be everything. It is six focused products that work well together. You can start with one and add more as your business grows.

We are a small team. We move carefully. We are playing a long game.
    `.trim(),
  },
  {
    slug: "introducing-analytics",
    title: "Introducing Analytics",
    excerpt:
      "The hardest part of running a business is knowing what to pay attention to. Analytics connects all your Relay products and surfaces the numbers that actually matter.",
    date: "2026-06-22",
    readTime: 4,
    category: "Product",
    content: `
The hardest part of running a business is not making decisions. It is knowing which decisions to make.

Most analytics tools give you data. Charts that look impressive in presentations. Numbers that require an analyst to interpret. What you actually need is answers.

Today we are releasing Analytics, our cross-product intelligence layer.

Analytics connects Counter, Queue, Stock, Ledger, and People into a single view. It knows that a drop in revenue on Tuesdays correlates with lower staffing levels. It knows when a product is selling well but your margin is shrinking. It knows when your best customers are drifting away.

We did not build a general-purpose BI tool. We built something that understands Relay businesses specifically, because that specificity is what makes the answers useful.

Analytics is available to all Relay customers on the Professional plan and above.
    `.trim(),
  },
  {
    slug: "counter-offline-mode",
    title: "Counter's offline mode, explained",
    excerpt:
      "Network reliability is not a given. Counter's offline mode ensures your point of sale keeps working when the internet goes down, and syncs seamlessly when it comes back.",
    date: "2026-05-14",
    readTime: 6,
    category: "Engineering",
    content: `
In an ideal world, your internet connection never drops. In practice, routers reboot, ISPs have outages, and payment terminals lose signal at the worst possible moment.

Counter is built offline-first. This is not a feature, it is an architectural choice that affects every part of the system.

When Counter loses connectivity, it continues operating normally. Sales are recorded locally. Receipts print. Inventory updates are queued. When connectivity returns, everything syncs, in the correct order, with conflict resolution that handles the edge cases you would never think to test.

We use a local-first data model, meaning the source of truth on the device is always current. The server is kept in sync, not the other way around. This means Counter is fast even on a good connection, because it is never waiting for a network response to complete a transaction.

Building reliable offline software is harder than it sounds. We are proud of what we built, and we plan to write more about the technical details soon.
    `.trim(),
  },
  {
    slug: "queue-booking-widget",
    title: "The Queue booking widget",
    excerpt:
      "Queue's embeddable booking widget lets your customers book appointments directly from your website. No third-party booking platforms, no friction.",
    date: "2026-04-30",
    readTime: 3,
    category: "Product",
    content: `
Your customers should be able to book an appointment without leaving your website.

Queue's booking widget is a small piece of JavaScript you embed on any page. It inherits your colour scheme, shows your real availability, and sends confirmation emails and SMS reminders automatically.

There is no Relay branding on the widget. Your customers never need to know which software you use. They just book.

The widget connects directly to Queue's scheduling engine, meaning availability is always accurate. Double bookings are impossible. Cancellations update your calendar in real time.

We designed the widget to be fast and accessible. It works on mobile, passes WCAG AA, and loads in under 200ms on a standard connection.

You can embed the widget in five minutes. See the documentation for the embed code and configuration options.
    `.trim(),
  },
  {
    slug: "building-for-reliability",
    title: "Building for reliability",
    excerpt:
      "Uptime is not a marketing claim. It is a responsibility. Here is how we think about reliability at Relay and what we do to maintain it.",
    date: "2026-04-08",
    readTime: 7,
    category: "Engineering",
  },
  {
    slug: "stock-multi-location",
    title: "Stock now supports multiple locations",
    excerpt:
      "If you run inventory across more than one site, you can now manage all of it from a single Stock account. Transfers, allocation, and reporting all in one place.",
    date: "2026-03-19",
    readTime: 4,
    category: "Product",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getLatestPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
