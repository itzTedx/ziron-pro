import dynamic from "next/dynamic";
import Script from "next/script";
import { Suspense } from "react";

import Cta from "@/components/global/cta";
import { LoadingSpinner } from "@/components/global/loading";
import Hero from "@/features/home/sections/hero";
import { organizationJsonLd } from "@/lib/json-ld";

// Dynamically import components that are below the fold
const Featured = dynamic(
  () =>
    import("@/features/home/sections/featured").then((mod) => ({
      default: mod.Featured,
    })),
  { ssr: true }
);
const HowWeWorks = dynamic(
  () => import("@/features/home/sections/how-we-works"),
  { ssr: true }
);
const Works = dynamic(
  () =>
    import("@/features/home/sections/works").then((mod) => ({
      default: mod.Works,
    })),
  { ssr: true }
);
const GetStarted = dynamic(
  () => import("@/features/home/sections/get-started"),
  { ssr: true }
);
const Feedback = dynamic(() => import("@/features/home/sections/feedback"), {
  ssr: true,
});
const Faq = dynamic(() => import("@/features/home/sections/faq"), {
  ssr: true,
});

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="pt-0">
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Featured />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <HowWeWorks />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Works />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <GetStarted />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Feedback />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Faq />
      </Suspense>
      <Cta />

      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        strategy="afterInteractive"
      />
    </main>
  );
}
