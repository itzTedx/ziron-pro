import Image from "next/image";
import Link from "next/link";

import { Blob } from "@/assets/blob";
import { GraphUp } from "@/assets/graph";

export default function Cta() {
  return (
    <section
      className="relative mx-auto max-w-6xl overflow-hidden pb-24 pt-40 max-md:px-4"
      id="cta"
      aria-label="Call to action"
    >
      <div className="relative flex h-72 w-full items-center justify-between gap-12 rounded-[1.875rem] border border-secondary bg-gradient-to-bl from-gray-900 to-violet-900 shadow-primary-md md:h-96">
        <div className="relative z-40 w-full px-5 md:px-12">
          <h3 className="pb-9 text-2xl font-medium leading-10 text-purple-50 drop-shadow-2xl max-md:text-end md:text-[2.375rem] md:text-purple-200">
            Take your marketing
            <br />
            to the next level
          </h3>

          <Link
            href="/contact"
            className="focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
            aria-label="Get a quote for marketing services"
          >
            <div
              className="group relative w-36 cursor-pointer overflow-hidden rounded-full border border-white bg-background/50 p-3 text-center font-semibold text-background backdrop-blur-sm max-md:ml-auto"
              role="button"
            >
              <span className="inline-block translate-y-0 transition-transform duration-300 group-hover:-translate-y-12 group-hover:opacity-0">
                Get a quote
              </span>
              <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-y-12 items-center justify-center gap-2 rounded-full bg-primary text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rounded-none group-hover:opacity-100">
                <span>Get a quote</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="absolute -left-12 size-[25rem] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-50 mix-blend-overlay [background-size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] md:size-[30rem]" />
        <GraphUp
          className="absolute right-3 max-md:w-full max-md:overflow-hidden md:right-9"
          aria-hidden="true"
        />
        <Image
          src="/images/guy-holding-tab.png"
          height={522}
          width={459}
          alt="Marketing professional with tablet"
          className="absolute -bottom-[3.2rem] left-9 z-10 -translate-x-1/3 max-md:scale-75 md:-bottom-px md:left-1/2"
          priority
          loading="eager"
        />
        <Blob
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 -rotate-90 scale-50 max-sm:hidden"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="container max-w-7xl">
      <h5 className="pt-24 text-3xl tracking-tight md:text-5xl">
        Like what you see?
        <br />
        Why not get in touch.
      </h5>
      <Link href="/what-we-do">
        <div className="group relative mt-4 w-fit cursor-pointer overflow-hidden rounded-full border border-primary bg-background p-3 text-center font-semibold uppercase text-primary">
          <span className="inline-block translate-y-0 space-x-3 transition-all duration-300 group-hover:-translate-y-12 group-hover:opacity-0">
            <span>✦ </span>
            <span>Let&apos;s get connected</span>
          </span>
          <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-y-12 items-center justify-center gap-3 rounded-full bg-primary text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rounded-none group-hover:opacity-100">
            <span>✦ </span>
            <span>Let&apos;s get connected</span>
          </div>
        </div>
      </Link>
    </section>
  );
}
