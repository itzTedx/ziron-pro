import Link from "next/link";
import { memo } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { SOCIALS } from "./constant";

const Socials = memo(function Socials() {
  return (
    <nav aria-label="Social media links">
      <ul className="flex gap-3 text-violet-300">
        {SOCIALS.map((social) => (
          <li key={social.label}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              title={`Follow us on ${social.label}`}
              href={social.href}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-11 p-0 backdrop-blur-md hover:bg-primary/30"
              )}
              aria-label={`Visit our ${social.label} page`}
            >
              {<social.icon aria-hidden="true" />}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Socials;
