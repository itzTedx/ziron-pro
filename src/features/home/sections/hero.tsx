import Link from "next/link";

import { siteConfig } from "@/config/site";
import { getBase64 } from "@/lib/placeholder";

import MagneticButton from "../components/magnetic-button";
import HeroVideoDialog from "../components/video-dialog";

export default async function Hero() {
  const blurData = await getBase64("/images/landing-intro-thumb.webp");

  return (
    <section className="relative" aria-label="Hero Section">
      <div className="absolute inset-0 z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container relative z-20 flex flex-col overflow-clip pb-12 md:pb-32">
        <header className="text-center">
          <h1 className="text-balance pt-24 font-monaSans text-[2.5rem] font-bold leading-10 tracking-tight text-gray-900 md:pt-32 md:text-7xl md:leading-[5rem]">
            We&apos;re great at{" "}
            <span className="font-valverde text-primary">
              Digital <br className="hidden md:block" />
              Marketing
            </span>{" "}
            Solutions
          </h1>
          <p className="mb-8 mt-6 text-balance text-xl md:mb-12">
            {siteConfig.description}
          </p>
        </header>

        <MagneticButton className="mx-auto flex w-fit">
          <Link
            href="/what-we-do"
            className="rounded-full focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
            aria-label="Learn more about our services"
          >
            <div className="group relative z-30 mx-auto w-fit cursor-pointer overflow-hidden rounded-full border border-primary bg-background p-3 text-center font-semibold uppercase text-primary">
              <span className="inline-block translate-y-0 space-x-3 transition-all duration-300 focus-within:-translate-y-12 focus-within:opacity-0 group-hover:-translate-y-12 group-hover:opacity-0">
                <span>✦ </span>
                <span>Let&apos;s get started </span>
              </span>
              <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-y-12 items-center justify-center gap-3 rounded-full bg-primary text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rounded-none group-hover:opacity-100">
                <span>✦ </span>
                <span>Let&apos;s get started </span>
              </div>
            </div>
          </Link>
        </MagneticButton>

        <div className="container mt-12 max-w-6xl md:mt-24">
          <link
            rel="preload"
            as="video"
            href="/video/Landing-intro.webm"
            type="video/webm"
          />
          <HeroVideoDialog
            blurData={blurData}
            videoSrc="/video/Landing-intro.webm"
            videoPlaceholder="/video/Landing-intro-low.webm"
            subtitle="/video/subtitle.vtt"
            thumbnailSrc="/images/landing-intro-thumb.webp"
            thumbnailAlt="Overview of our digital marketing services"
          />
        </div>
      </div>
    </section>
  );
}
