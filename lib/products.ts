export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  useCases: string[];
  icon: string;
};

export const products: Product[] = [
  {
    slug: "counter",
    name: "Counter",
    category: "Point of Sale",
    tagline: "Sell with speed and confidence.",
    description:
      "Counter is Relay's point of sale system built for businesses that need reliability at the checkout. Fast, offline-capable, and deeply integrated with the rest of the Relay ecosystem.",
    features: [
      "Offline-first architecture",
      "Multi-terminal support",
      "Receipt printing and digital receipts",
      "Split payments and discounts",
      "Real-time sync with Stock and Ledger",
      "Custom tax configurations",
      "Staff PIN login",
      "End-of-day reporting",
    ],
    useCases: ["Retail stores", "Cafes and restaurants", "Pop-up shops", "Service counters"],
    icon: "ShoppingCart",
  },
  {
    slug: "queue",
    name: "Queue",
    category: "Booking System",
    tagline: "Appointments and bookings, handled.",
    description:
      "Queue gives your customers a seamless booking experience and gives your team a clear view of the day ahead. Built for service businesses that need predictability.",
    features: [
      "Online booking widget",
      "SMS and email reminders",
      "Staff and resource scheduling",
      "Waitlist management",
      "Calendar integrations",
      "No-show and cancellation policies",
      "Recurring appointment support",
      "Custom intake forms",
    ],
    useCases: ["Clinics and salons", "Consultancies", "Service workshops", "Fitness studios"],
    icon: "Calendar",
  },
  {
    slug: "stock",
    name: "Stock",
    category: "Inventory",
    tagline: "Know what you have. Always.",
    description:
      "Stock is a precise inventory management system that removes guesswork from your operations. Track products, manage suppliers, and get alerts before you run out.",
    features: [
      "Real-time inventory tracking",
      "Low-stock alerts and reorder points",
      "Supplier and purchase order management",
      "Barcode scanning support",
      "Multi-location inventory",
      "Stock movement history",
      "Expiry date tracking",
      "Inventory reports and insights",
    ],
    useCases: ["Warehouses", "Retailers", "Distributors", "F&B operations"],
    icon: "Package",
  },
  {
    slug: "ledger",
    name: "Ledger",
    category: "Accounting",
    tagline: "Clean books. Clear picture.",
    description:
      "Ledger is straightforward accounting software for businesses that want clarity without complexity. Track income, expenses, and tax without needing an accounting background.",
    features: [
      "Income and expense tracking",
      "Bank reconciliation",
      "Invoice creation and sending",
      "Tax summaries and reporting",
      "Chart of accounts",
      "Multi-currency support",
      "Profit and loss statements",
      "Integration with Counter and Stock",
    ],
    useCases: ["Small businesses", "Freelancers", "Service companies", "Retail operations"],
    icon: "BookOpen",
  },
  {
    slug: "people",
    name: "People",
    category: "HR",
    tagline: "Manage your team, not paperwork.",
    description:
      "People is Relay's HR system designed for growing teams. Handle contracts, leave, payroll, and performance in one place, without the administrative overhead.",
    features: [
      "Employee records and profiles",
      "Leave and absence management",
      "Payroll preparation",
      "Digital contracts and documents",
      "Performance check-ins",
      "Onboarding workflows",
      "Org chart",
      "Role-based access control",
    ],
    useCases: ["Growing teams", "Multi-branch businesses", "Seasonal workforces", "Remote teams"],
    icon: "Users",
  },
  {
    slug: "analytics",
    name: "Analytics",
    category: "Analytics",
    tagline: "Data that tells you something useful.",
    description:
      "Analytics connects all your Relay products into a single view of your business. No exports, no spreadsheets, just clear answers to the questions you actually have.",
    features: [
      "Cross-product dashboards",
      "Revenue and sales trends",
      "Customer behaviour analysis",
      "Staff performance metrics",
      "Inventory turnover reports",
      "Custom report builder",
      "Scheduled email reports",
      "Data export to CSV",
    ],
    useCases: ["Business owners", "Operations managers", "Finance leads", "Multi-location businesses"],
    icon: "BarChart2",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
