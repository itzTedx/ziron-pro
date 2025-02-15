import { Metadata } from "next";
import { memo } from "react";

import { siteConfig } from "@/config/site";
import { Clients } from "@/features/about/components/clients";
import { Founders } from "@/features/about/sections/founders";
import { Hero } from "@/features/about/sections/hero";
import { OurQuality } from "@/features/about/sections/our-quality";
import { ToolkitSection } from "@/features/about/sections/toolkit";

// Memoize static components
const MemoizedClients = memo(Clients);
const MemoizedToolkit = memo(ToolkitSection);
const MemoizedQuality = memo(OurQuality);

export default function AboutPage() {
  return (
    <main className="relative space-y-36 py-9 md:py-24">
      <Hero />
      <Founders />
      <MemoizedClients />
      <MemoizedToolkit />
      <MemoizedQuality />
    </main>
  );
}

const SITE_URL = process.env.BASE_URL;
const PAGE_TITLE = "New Generation of digital creators: Ziron Media";
const PAGE_DESCRIPTION =
  "We are a digital marketing agency creating powerful brand identities and scalable digital strategies";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "digital marketing, brand identity, digital strategy, marketing agency",
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: "Ziron Media",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@zironmedia",
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Add JSON-LD structured data
export const generateMetadata = async () => {
  return {
    other: {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Ziron Media",
        description: PAGE_DESCRIPTION,
        url: `${SITE_URL}/about`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.contact,
          contactType: "customer service",
        },
      },
    },
  };
};
