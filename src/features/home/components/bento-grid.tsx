import Link from "next/link";
import { ReactNode, memo } from "react";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BENTO_GRID_BASE_CLASSES =
  "relative z-0 flex w-full auto-rows-[22rem] grid-rows-4 gap-3 max-md:flex-col md:grid md:grid-cols-4" as const;

const BENTO_CARD_BASE_CLASSES =
  "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border bg-white shadow-lg shadow-gray-900/5" as const;

const CARD_CONTENT_BASE_CLASSES =
  "pointer-events-none z-50 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300" as const;

const CARD_CTA_BASE_CLASSES =
  "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:outline-none group-hover:translate-y-0 group-hover:opacity-100" as const;

const BentoGrid = memo(
  ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
      <div className={cn(BENTO_GRID_BASE_CLASSES, className)} role="list">
        {children}
      </div>
    );
  }
);

BentoGrid.displayName = "BentoGrid";

const BentoCard = memo(
  ({
    name,
    className,
    background,
    description,
    titleClass,
    href,
    cta,
  }: {
    name: string;
    className: string;
    background?: ReactNode;
    titleClass?: string;
    description: string;
    href?: string;
    cta?: string;
  }) => {
    const hasAction = href && cta;
    const contentClasses = cn(
      CARD_CONTENT_BASE_CLASSES,
      hasAction &&
        "group-focus-within:-translate-y-10 group-hover:-translate-y-10 group-focus-visible:outline-none"
    );

    return (
      <div
        key={name}
        className={cn(BENTO_CARD_BASE_CLASSES, className)}
        role="listitem"
      >
        <div className="h-full w-full overflow-hidden">{background}</div>
        <div className={contentClasses}>
          <h3 className={cn("text-xl font-semibold", titleClass)}>{name}</h3>
          <p className="max-w-lg">{description}</p>
        </div>

        {hasAction && (
          <div className={CARD_CTA_BASE_CLASSES}>
            <Button
              variant="link"
              asChild
              className="pointer-events-auto px-0 text-base text-gray-600 focus-visible:ring-0 focus-visible:after:origin-bottom-left focus-visible:after:scale-x-100"
            >
              <Link href={href}>
                {cta}
                <IconArrowUpRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    );
  }
);

BentoCard.displayName = "BentoCard";

export { BentoCard, BentoGrid };
