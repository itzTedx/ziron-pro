import Image from "next/image";

import { Blob } from "@/assets/blob";

export function Hero() {
  return (
    <section
      className="container relative overflow-x-clip py-20 text-center"
      aria-label="About Us Hero Section"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="font-monaSans text-6xl leading-tight tracking-tight text-gray-900">
          We&apos;re a <span className="text-secondary">New Generation</span> of
          digital creators
        </h1>
        <p className="mx-auto mt-6 text-xl text-gray-700">
          We are a digital marketing agencies creating powerful brand identities
          and scalable digital strategies
        </p>
      </div>

      <div className="relative mt-8 aspect-[1064/400]">
        <Image
          src="/images/about-hero.png"
          fill
          sizes="(max-width: 1064px) 100vw, 1064px"
          priority
          quality={85}
          alt="Digital creators working on creative projects"
          className="mx-auto object-contain"
        />
      </div>

      <Blob
        className="absolute left-0 top-[10rem] rotate-45"
        aria-hidden="true"
      />
    </section>
  );
}
