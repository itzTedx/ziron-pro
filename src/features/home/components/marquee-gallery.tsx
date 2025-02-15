import Image from "next/image";
import { memo, useMemo } from "react";

import { Marquee } from "@/components/animations/marquee";
import { getBase64 } from "@/lib/placeholder";
import { cn } from "@/lib/utils";

import { REVIEWS } from "../constants";

const firstRow = REVIEWS.slice(0, 5);
const secondRow = REVIEWS.slice(6, 10);
const thirdRow = REVIEWS.slice(11, 15);

const ReviewCard = memo(async ({ img }: { img: string }) => {
  const blurData = await getBase64(img);
  return (
    <figure
      className={cn(
        "relative z-10 aspect-square w-14 cursor-pointer overflow-hidden rounded-md border md:w-20",
        "contain-content"
      )}
    >
      <Image
        src={img}
        placeholder="blur"
        blurDataURL={blurData}
        fill
        sizes="(max-width: 768px) 56px, 80px"
        alt="Creative Designs we did"
        aria-hidden
        loading="eager"
        priority={true}
      />
    </figure>
  );
});

ReviewCard.displayName = "ReviewCard";

const MarqueeGallery = () => {
  const firstRowElements = useMemo(
    () => firstRow.map((review, i) => <ReviewCard key={i} {...review} />),
    []
  );

  const secondRowElements = useMemo(
    () => secondRow.map((review, i) => <ReviewCard key={i} {...review} />),
    []
  );

  const thirdRowElements = useMemo(
    () => thirdRow.map((review, i) => <ReviewCard key={i} {...review} />),
    []
  );

  return (
    <>
      <div className="absolute top-0 z-10 h-full w-full bg-gradient-to-r from-background via-background to-transparent md:hidden" />
      <div className="absolute -bottom-5 right-3 grid h-80 -rotate-[21deg] grid-cols-3 flex-row items-center justify-center overflow-hidden contain-paint md:-right-9">
        <Marquee
          pauseOnHover
          vertical
          className="p-1 [--duration:22s] [--gap:0.5rem]"
        >
          {firstRowElements}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          vertical
          className="p-1 [--duration:20s] [--gap:0.5rem]"
        >
          {secondRowElements}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical
          className="p-1 [--duration:28s] [--gap:0.5rem]"
        >
          {thirdRowElements}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white dark:from-background" />
    </>
  );
};

export default memo(MarqueeGallery);
