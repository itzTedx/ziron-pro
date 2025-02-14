import type { Metadata } from "next";

import { monaSans, plusJakarta, valverde } from "@/assets/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Navbar from "@/components/global/navbar";
import "../styles/globals.css";
import "../styles/ui.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [{ name: siteConfig.shortName, url: siteConfig.url }],
  creator: siteConfig.shortName,
  openGraph: {
    type: "website",
    locale: "en_AE",
    alternateLocale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Ziron Media" />
        <meta
          name="google-site-verification"
          content="ApzGDgxzf02cJKRvF91NImSEkYYlfYjD60c7JH6ky_I"
        />
      </head>
      <body
        className={cn(
          plusJakarta.className,
          monaSans.variable,
          valverde.variable,
          "antialiased"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
