import type { Organization, WithContext } from "schema-dts";

import { siteConfig } from "@/config/site";

export const organizationJsonLd: WithContext<Organization> = {
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
