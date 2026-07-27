import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/app/_components/layout/Nav";
import Footer from "@/app/_components/layout/Footer";
import AnimatedSection from "@/app/_components/ui/AnimatedSection";
import { getProduct, getAllProductSlugs, products } from "@/lib/products";
import { siteConfig } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return {};

  return {
    title: `${product.name} | ${product.category}`,
    description: product.description,
    openGraph: {
      title: `${product.name} by Relay`,
      description: product.description,
      type: "website",
      url: `${siteConfig.url}/products/${slug}`,
    },
    alternates: { canonical: `/products/${slug}` },
  };
}

export const dynamic = "force-static";

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const productIndex = products.findIndex((p) => p.slug === slug);
  const prevProduct = products[productIndex - 1];
  const nextProduct = products[productIndex + 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Relay ${product.name}`,
    description: product.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Organization",
      name: "Relay",
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content" className="pt-[var(--nav-height)]">
        {/* Hero */}
        <div className="py-20 md:pb-16 border-b border-[#e6e6e6]">
          <div className="container">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 list-none text-[0.8125rem] text-[#6b6b6b]">
                <li>
                  <Link href="/" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">
                    Relay
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[0.625rem]">&rsaquo;</li>
                <li>Products</li>
                <li aria-hidden="true" className="text-[0.625rem]">&rsaquo;</li>
                <li className="text-[#111111]" aria-current="page">
                  {product.name}
                </li>
              </ol>
            </nav>

            <AnimatedSection>
              <span className="tag mb-5 inline-flex">
                {product.category}
              </span>
              <h1 className="mb-4">{product.name}</h1>
              <p className="text-[1.125rem] max-w-[520px] leading-[1.65] mb-10 text-[#6b6b6b]">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="btn btn-primary py-3 px-[1.375rem] text-[0.9375rem]"
                >
                  Get started with {product.name}
                </Link>
                <Link
                  href="/#docs"
                  className="btn btn-secondary py-3 px-[1.375rem] text-[0.9375rem]"
                >
                  Read the docs
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Features */}
        <div className="py-20 border-b border-[#e6e6e6]">
          <div className="container grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
            <AnimatedSection>
              <p className="text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-[#6b6b6b] mb-8">
                Features
              </p>
              <ul className="list-none flex flex-col">
                {product.features.map((feature, i) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3.5 py-4 border-b border-[#e6e6e6] last:border-b-0 text-[0.9375rem] text-[#111111]"
                  >
                    <span
                      aria-hidden="true"
                      className="w-4 h-4 border border-[#e6e6e6] rounded-full flex items-center justify-center shrink-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Use cases */}
            <AnimatedSection delay={0.08}>
              <p className="text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-[#6b6b6b] mb-8">
                Use cases
              </p>
              <ul className="list-none flex flex-col gap-3">
                {product.useCases.map((useCase) => (
                  <li
                    key={useCase}
                    className="p-5 border border-[#e6e6e6] rounded-md text-[0.9375rem] text-[#111111] font-medium"
                  >
                    {useCase}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>

        {/* Product navigation */}
        <div className="py-8 border-b border-[#e6e6e6]">
          <div className="container flex justify-between items-center gap-4">
            {prevProduct ? (
              <Link
                href={`/products/${prevProduct.slug}`}
                className="flex items-center gap-2 text-[0.875rem] text-[#6b6b6b] hover:text-[#111111] transition-colors"
              >
                <span aria-hidden="true">&larr;</span>
                <span>{prevProduct.name}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextProduct ? (
              <Link
                href={`/products/${nextProduct.slug}`}
                className="flex items-center gap-2 text-[0.875rem] text-[#6b6b6b] hover:text-[#111111] transition-colors"
              >
                <span>{nextProduct.name}</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
