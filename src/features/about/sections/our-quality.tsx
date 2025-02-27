import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { OUR_QUALITIES } from "../constant";

export function OurQuality() {
  return (
    <>
      <section className="container relative z-0 grid gap-10 py-12 max-md:overflow-hidden md:grid-cols-5 md:py-24">
        <div className="top-28 col-span-2 flex h-fit flex-col gap-5 md:sticky">
          {/* <Badge>✦ How we works</Badge> */}
          <h2 className="text-balance font-normal">
            We&apos;re <span className="text-secondary">more than</span> just a
            Digital Marketing Company
          </h2>
          <p className="text-balance">
            From initial consultation to final execution, we keep you informed
            every step of the way, ensuring your digital marketing strategy is
            developed and implemented seamlessly.
          </p>
        </div>
        <aside className="col-span-3 space-y-12 md:pl-12">
          {OUR_QUALITIES.map((step) => (
            <Card className="border-primary bg-gray-50" key={step.id}>
              <CardContent className="grid grid-cols-7 items-center gap-6 p-6">
                <div className="col-span-4">
                  <CardTitle className="text-balance text-3xl font-medium leading-10">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="mt-4 text-balance text-xl text-foreground/80">
                    {step.description}
                  </CardDescription>
                </div>
                <div className="relative col-span-3 size-full shrink-0 p-3">
                  <Image
                    src={`/icons/${step.icon}.svg`}
                    fill
                    alt=""
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </aside>
      </section>
    </>
  );
}
