import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

import { Icons } from "@/assets/icons";
import { LoadingSpinner } from "@/components/global/loading";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const preferredRegion = "auto";
export const revalidate = 86400; // Revalidate once per day

const ContactForm = dynamic(
  () => import("@/features/contact/form/contact-form"),
  {
    ssr: true,
    loading: () => <LoadingSpinner />,
  }
);

const meta = {
  title: "We'd love to help you grow: Ziron media",
  description:
    "We'd love to hear from you: Drop us a line using this form or pay us a visit at our beautiful office in the bustling heart of Dubai.",
  url: "/contact",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: meta.title,
  description: meta.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "#317, Aura Xavier Building, Al Gubaiba Metro Exit-1",
    addressLocality: "Dubai",
    addressCountry: "United Arab Emirates",
  },
  email: "info@zironmedia.com",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-dvh">
        <div className="relative mx-auto max-w-6xl items-start gap-6 px-4 py-12 md:grid md:grid-cols-2 md:py-32">
          <section className="space-y-3">
            <Badge>✦ Get in touch</Badge>
            <h2 className="title-2">
              Don&apos;t be shy,
              <span className="text-secondary"> say hi!</span>
            </h2>
            <p className="text-balance">
              We’d love to hear from you: Drop us a line using this form or pay
              us a visit at our beautiful office in the bustling heart of Dubai.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-12">
              <div className="space-y-4">
                <Icons.mail className="text-secondary" />
                <h5 className="text-2xl font-light">Email</h5>
                <p className="text-sm font-light text-gray-600">
                  Our friendly team is here to help.
                </p>
                <Link
                  href="mailto:info&#64;zironmedia&#46;com"
                  className="select-none transition-colors hover:text-secondary"
                  aria-label="Send us an email"
                >
                  info&#64;zironmedia&#46;com
                </Link>
              </div>

              <div className="space-y-4">
                <Icons.flag className="text-secondary" />
                <h5 className="text-2xl font-light">Office</h5>
                <p className="text-sm font-light text-gray-600">
                  Come visit us in Dubai.
                </p>
                <Link
                  href="https://maps.app.goo.gl/paExi9WpQtHtEfkB6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-balance pt-3 transition-colors hover:text-secondary"
                  aria-label="View our location on Google Maps"
                >
                  #317, Aura Xavier Building, Al Gubaiba Metro Exit-1, Dubai,
                  United Arab Emirates
                </Link>
              </div>
            </div>
          </section>

          <Suspense fallback={<LoadingSpinner />}>
            <ContactForm />
          </Suspense>
        </div>
      </main>
    </>
  );
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: "website",
    url: meta.url,
    title: meta.title,
    description: meta.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: meta.title,
      },
    ],
    locale: "en_US",
    siteName: "Ziron Media",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [siteConfig.ogImage],
  },
  alternates: { canonical: meta.url },
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

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black",
    "format-detection": "telephone=no",
  },
  category: "contact",
  applicationName: "Ziron Pro",
  referrer: "origin-when-cross-origin",
  keywords: [
    "contact",
    "dubai digital agency",
    "marketing agency dubai",
    "ziron Pro contact",
  ],
  authors: [{ name: "Ziron Pro", url: siteConfig.url }],
  creator: "Ziron Pro",
  publisher: "Ziron Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
