import Image from "next/image";
import { memo } from "react";

import { cn } from "@/lib/utils";

export const PartnerLogo = memo(function PartnerLogo({
  className,
  height = 50,
  width = 120,
}: {
  className?: string;
  height?: number;
  width?: number;
}) {
  return (
    <div role="list" className={cn("flex items-center gap-12", className)}>
      {[
        { src: "/logos/google-partner.svg", alt: "Google Partner" },
        {
          src: "/logos/meta-business-partner.svg",
          darkSrc: "/logos/meta-dark.svg",
          alt: "Meta Business Partner",
        },
        {
          src: "/logos/tiktok-partner.svg",
          darkSrc: "/logos/tiktok-dark.svg",
          alt: "Tiktok Partner",
        },
      ].map((logo) => (
        <div key={logo.alt} role="listitem">
          <Image
            src={logo.src}
            width={width}
            height={height}
            alt={logo.alt}
            loading="eager"
            className={logo.darkSrc ? "dark:hidden" : ""}
            priority
          />
          {logo.darkSrc && (
            <Image
              src={logo.darkSrc}
              width={width}
              height={height}
              alt={logo.alt}
              loading="eager"
              className="hidden dark:block"
              priority
            />
          )}
        </div>
      ))}
    </div>
  );
});
