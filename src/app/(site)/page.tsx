import Script from "next/script";

import type { Organization, WithContext } from "schema-dts";

import Cta from "@/components/global/cta";
import { siteConfig } from "@/config/site";
import Faq from "@/features/home/sections/faq";
import { Featured } from "@/features/home/sections/featured";
import Feedback from "@/features/home/sections/feedback";
import GetStarted from "@/features/home/sections/get-started";
import Hero from "@/features/home/sections/hero";
import HowWeWorks from "@/features/home/sections/how-we-works";
import { Works } from "@/features/home/sections/works";

export const dynamic = "force-static";

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.shortName,
  image: `${process.env.BASE_URL}${siteConfig.ogImage}`,
  logo: `${process.env.BASE_URL}${siteConfig.logo}`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact,
    contactType: "Customer services",
    areaServed: "Worldwide",
    availableLanguage: "English, Arabic, Hindi, Malayalam, Tamil",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Metro Exit 1 Burdubai - 303, Aura Xavier Building",
    addressLocality: "Al Gubaiba",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [
    siteConfig.links.facebook,
    siteConfig.links.instagram,
    siteConfig.links.linkedin,
  ],

  description: siteConfig.description,
};

export default function Home() {
  return (
    <main className="pt-0">
      <Hero />
      <Featured />
      <HowWeWorks />
      <Works />
      <GetStarted />
      <Feedback />
      <Faq />
      <Cta />

      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
