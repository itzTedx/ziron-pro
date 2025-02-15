import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { SOCIALS } from "./constant";

export default function Socials() {
  return (
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
          >
            {<social.icon />}
          </Link>
        </li>
      ))}
    </ul>
  );
}
