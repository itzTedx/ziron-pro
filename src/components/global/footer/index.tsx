import { Suspense, lazy } from "react";

import { IconCircle } from "@tabler/icons-react";

import { TextHoverEffect } from "../../animations/text-stroke-hover";
import FooterCopy from "./copy";
import { FooterHead } from "./head";
import FooterLinks from "./links";

const SparklingGrid = lazy(() =>
  import("../../animations/sparkling-grid").then((mod) => ({
    default: mod.default,
  }))
);

const Footer = () => {
  return (
    <footer className="relative h-full bg-gray-950" role="contentinfo">
      <Suspense fallback={<IconCircle className="animate-spin" />}>
        <SparklingGrid />
      </Suspense>
      <div className="container relative z-50 grid grid-cols-2 justify-between gap-12 px-9 py-12 md:grid-cols-3 md:gap-6 md:py-20">
        <FooterHead />
        <FooterLinks />
      </div>
      <div className="flex w-full items-center justify-center max-md:px-4">
        <TextHoverEffect text="ZIRONPRO" />
      </div>
      <FooterCopy />
    </footer>
  );
};

export default Footer;
