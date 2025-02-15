import dynamic from "next/dynamic";
import { memo } from "react";

import { LoadingSpinner } from "@/components/global/loading";

// Lazy load the Toolkit component
const DynamicToolkit = dynamic(
  () => import("../components/toolkit").then((mod) => mod.Toolkit),
  {
    loading: () => <LoadingSpinner />,
    ssr: true,
  }
);

export const ToolkitSection = memo(() => {
  return (
    <section
      className="container mx-auto grid max-w-5xl gap-4 px-4 md:grid-cols-3"
      aria-labelledby="toolkit-heading"
    >
      <h3 id="toolkit-heading" className="md:hidden">
        Creating Long Term
        <span className="text-secondary"> Success</span>
      </h3>
      <h3 className="hidden md:block" aria-hidden="true">
        Creating
        <br />
        Long Term
        <br />
        <span className="text-secondary">Success</span>
      </h3>

      <article className="text-xl md:col-span-2">
        <p className="mb-4">
          We help all kinds of companies, big and small, from all kinds of
          sectors. The thing they have in common is that they&apos;re ambitious
          and want to make their mark online. They like that we&apos;re experts
          in our field, have been doing it for years, and have proven results
          and a fair few awards to show for it.
        </p>
        <p>
          Our digital specialists, strategists, creatives and number crunchers
          are good at what they do and love doing it. That&apos;s why our
          clients and the team tend to stick around, and there&apos;s always a
          great buzz about the place. And why we come into work each day wanting
          to go one better.
        </p>
      </article>

      <div
        className="space-y-12 py-12 md:col-span-3 md:py-24"
        aria-labelledby="toolkit-subtitle"
      >
        <h2 id="toolkit-subtitle" className="py-12 text-center max-md:pb-32">
          Our Marketing Toolkit
        </h2>
        <DynamicToolkit />
      </div>
    </section>
  );
});

ToolkitSection.displayName = "ToolkitSection";
