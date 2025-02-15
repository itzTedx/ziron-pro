import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { Blob } from "@/assets/blob";
import { LoadingSpinner } from "@/components/global/loading";
import { Badge } from "@/components/ui/badge";
import { getServices } from "@/features/services/action";
import ServiceCard from "@/features/services/components/services-card";
import Hero from "@/features/services/sections/hero";

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export default async function Services() {
  const services = await getServices();

  if (!services) notFound();

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Digital Specialized Services in Dubai",
    description:
      "Professional digital services including marketing, branding, and growth hacking in Dubai",
    provider: {
      "@type": "Organization",
      name: "Ziron Media",
      areaServed: "Dubai",
    },
    offers: services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="relative py-12">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
        <Blob className="absolute -top-28 left-1/2 -z-50 -translate-x-1/2 max-md:w-full" />
        <section className="mx-auto max-w-6xl px-6 py-12 md:py-32">
          <Badge variant="secondary">✦ What we are great at</Badge>
          <h2 className="title-2 mb-12">
            Here&apos;s{" "}
            <span className="text-secondary">
              what we <br /> specialize in
            </span>
          </h2>

          <div className="grid gap-8">
            {services.map((service, i) => (
              <Suspense
                key={`${service.id}-${i}`}
                fallback={<div className="h-64 animate-pulse bg-gray-200" />}
              >
                <ServiceCard data={service} />
              </Suspense>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export const metadata: Metadata = {
  title:
    "Digital Specialized Services in Dubai | Professional Digital Marketing & Branding - Ziron Media",
  description:
    "Expert digital services in Dubai - Specialized in digital marketing, branding, and growth hacking. Transform your online presence with Ziron Media's professional solutions.",
  openGraph: {
    type: "website",
    url: "https://zironmedia.com/what-we-do",

    title: "Digital Specialized Services in Dubai | Ziron Media",
    description:
      "Expert digital services in Dubai - Specialized in digital marketing, branding, and growth hacking. Transform your online presence with Ziron Media's professional solutions.",
  },
  twitter: {
    card: "summary_large_image",

    title: "Digital Specialized Services in Dubai | Ziron Media",
    description:
      "Expert digital services in Dubai - Specialized in digital marketing, branding, and growth hacking. Transform your online presence with Ziron Media's professional solutions.",
  },
  alternates: {
    canonical: "https://zironmedia.com/what-we-do",
  },
  keywords:
    "digital services Dubai, digital marketing Dubai, branding agency Dubai, growth hacking, online presence management",
};
