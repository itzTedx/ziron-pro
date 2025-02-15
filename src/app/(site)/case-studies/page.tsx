import { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";

import { Blob } from "@/assets/blob";
import { ContactCta } from "@/components/global/cta";
import { CaseCards } from "@/features/case-studies/components/case-cards";
import { Header } from "@/features/case-studies/components/header";
import { CASE_STUDIES } from "@/features/case-studies/constant";

// Generate structured data for case studies
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Ziron Media Case Studies",
  description:
    "Success stories and case studies from Ziron Media's digital marketing projects",
  mainEntity: CASE_STUDIES.map((study) => ({
    "@type": "Article",
    headline: study.title,
    description: study.category,
  })),
};

export default function CaseStudiesPage() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative min-h-svh overflow-hidden">
        <Header />
        <Blob className="absolute -right-[20%] top-0 opacity-50" />
        <section className="container grid max-w-7xl">
          <Suspense fallback={<div>Loading case studies...</div>}>
            <CaseCards items={CASE_STUDIES} />
          </Suspense>
        </section>
        <ContactCta />
      </main>
    </>
  );
}

export const metadata: Metadata = {
  title:
    "Case Studies & Success Stories | Ziron Media Digital Marketing Agency",
  description:
    "Explore our portfolio of successful digital marketing campaigns, brand transformations, and growth strategies. Real results from real clients.",
  keywords:
    "case studies, success stories, digital marketing portfolio, client results, marketing case studies",
  openGraph: {
    type: "website",
    url: "/case-studies",
    title:
      "Case Studies & Success Stories | Ziron Media Digital Marketing Agency",
    description:
      "Explore our portfolio of successful digital marketing campaigns, brand transformations, and growth strategies. Real results from real clients.",
    images: [
      {
        url: "/images/case-studies-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ziron Media Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your success is our success | Success Stories: Ziron media",
    description:
      "We are a digital marketing agencies creating powerful brand identities and scalable digital strategies",
  },
  alternates: { canonical: "/case-studies" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
