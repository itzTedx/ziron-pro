import Script from "next/script";
import { memo } from "react";

import { EmblaOptionsType } from "embla-carousel";

import { Logo } from "@/assets/logo";
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from "@/components/ui/carousel";

import { FEEDBACKS } from "../constants";

const FeedbackSlide = memo(
  ({ feedback, name }: { feedback: string; name: string }) => (
    <figure className="pointer-events-none mx-auto max-w-4xl cursor-move select-none text-center">
      <blockquote>
        <p className="md:text-2xl">&quot;{feedback}&quot;</p>
      </blockquote>
      <figcaption className="mt-4 text-secondary md:mt-9">
        <cite>{name}</cite>
      </figcaption>
    </figure>
  )
);

FeedbackSlide.displayName = "FeedbackSlide";

export default function Feedback() {
  const OPTIONS: EmblaOptionsType = { loop: true, skipSnaps: false };

  return (
    <section
      className="bg-indigo-50/50 px-4 py-6 md:py-40"
      aria-label="Customer Testimonials"
    >
      <div className="mx-auto w-fit scale-150 py-9 text-center brightness-[3.5] saturate-0">
        <Logo />
      </div>
      <h3 className="sr-only">Customer Feedback</h3>
      <Carousel
        options={OPTIONS}
        isAutoPlay={true}
        aria-label="Customer reviews carousel"
      >
        <SliderContainer className="gap-2">
          {FEEDBACKS.map((feed, i) => (
            <Slider
              className="w-full"
              key={`Feedback-${i + 1}`}
              aria-roledescription="slide"
              aria-label={`Review ${i + 1} of ${FEEDBACKS.length}`}
            >
              <FeedbackSlide feedback={feed.feedback} name={feed.name} />
            </Slider>
          ))}
        </SliderContainer>
        <div className="flex justify-center py-4">
          <SliderDotButton />
        </div>
      </Carousel>

      {/* Add structured data for reviews */}
      <Script type="application/ld+json" id="reviews">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          review: FEEDBACKS.map((feed) => ({
            "@type": "Review",
            reviewBody: feed.feedback,
            author: {
              "@type": "Person",
              name: feed.name,
            },
          })),
        })}
      </Script>
    </section>
  );
}
