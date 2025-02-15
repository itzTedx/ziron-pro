import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

import { siteConfig } from "@/config/site";

export const SOCIALS = [
  {
    label: "instagram",
    href: "https://www.instagram.com/ziron_media/",
    icon: IconBrandInstagram,
  },
  {
    label: "facebook",
    href: "https://www.facebook.com/zironmedia",
    icon: IconBrandFacebook,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/company/ziron-media",
    icon: IconBrandLinkedin,
  },
  {
    label: "whatsapp",
    href: `https://wa.me/${siteConfig.contact.replace(/\s/g, "").replace(/\+/g, "")}`,
    icon: IconBrandWhatsapp,
  },
];

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ziron Media",
  description: "A Friendly Digital Marketing Company in Dubai",
  url: "https://yourdomain.com",
  logo: "https://yourdomain.com/logo.png",
  sameAs: [
    "https://facebook.com/zironmedia",
    "https://twitter.com/zironmedia",
    "https://instagram.com/zironmedia",
  ],
};
