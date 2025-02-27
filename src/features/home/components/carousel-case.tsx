"use client";

import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { JSX, memo, useCallback, useEffect, useRef, useState } from "react";

import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { motion } from "motion/react";

import { cn, slugify } from "@/lib/utils";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
};

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialScroll]);

  const checkScrollability = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  }, []);

  const scrollLeft = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }, []);

  return (
    <section aria-label="Case Studies Carousel" className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:pt-20"
        ref={carouselRef}
        onScroll={checkScrollability}
        role="region"
        aria-label="Scrollable case studies"
      >
        <div className={cn("flex flex-row justify-start gap-4")}>
          {items.map((item, index) => (
            <motion.div
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              key={`card_${index}`}
              className="rounded-3xl first:pl-[2%] last:pr-[5%] md:first:pl-[1.5%] lg:last:pr-[5%] xl:first:pl-[4%]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div
        className="mr-10 flex justify-end gap-2"
        role="group"
        aria-label="Carousel controls"
      >
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <IconArrowNarrowLeft
            className="h-6 w-6 text-gray-500"
            aria-hidden="true"
          />
        </button>
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <IconArrowNarrowRight
            className="h-6 w-6 text-gray-500"
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
};

export const Card = memo(
  ({ card, layout = false }: { card: Card; layout?: boolean }) => {
    return (
      <motion.article
        layoutId={layout ? `card-${card.title}` : undefined}
        className="group relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900 md:h-[35rem] md:w-96"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-foreground/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-1 max-w-xs text-left font-sans text-xl font-semibold text-white [text-wrap:balance] md:mt-2 md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
        <div className="absolute bottom-8 right-8 z-40 rounded-lg border border-background bg-background/50 px-3 py-2 opacity-0 backdrop-blur-lg transition-all duration-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring group-focus-within:opacity-100 group-hover:opacity-100">
          <Link
            href={`/case-studies/${slugify(card.title)}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold focus-within:outline-none"
            title={`Read detailed case study about ${card.title}`}
            aria-label={`View case study for ${card.title}`}
          >
            View Case Study
            <IconArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover"
        />
      </motion.article>
    );
  }
);
Card.displayName = "Card"; // Add this line to set the display name

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt || `Case study for ${rest.title || "project"}`}
      title={rest.title || alt || "Case study"}
      priority={false}
      sizes="(max-width: 768px) 224px, (max-width: 1200px) 384px, 384px"
      {...rest}
    />
  );
};
