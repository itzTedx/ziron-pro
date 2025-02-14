import dynamic from "next/dynamic";

import { IconCircle } from "@tabler/icons-react";

import { TextHoverEffect } from "../../animations/text-stroke-hover";
import FooterCopy from "./copy";
import { FooterHead } from "./head";
import FooterLinks from "./links";


const SparklingGrid = dynamic(() => import("../../animations/sparkling-grid"), {
  loading: () => <IconCircle className="animate-spin" />,
});

export default function Footer() {
  return (
    <footer className="relative h-full bg-gray-950">
      <SparklingGrid />
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
}
