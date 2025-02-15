import Link from "next/link";

import { Marquee } from "@/components/animations/marquee";
import { getServices } from "@/features/services/action";
import { cn } from "@/lib/utils";

import { Service } from "../types";

const ServiceItem = ({
  service,
  className,
}: {
  service: Service;
  className: string;
}) => (
  <Link href={`/what-we-do/${service.slug}`} tabIndex={-1} className="mx-2">
    <figure
      className={className}
      role="article"
      aria-label={`Service: ${service.title}`}
    >
      <div className="flex flex-row items-center gap-2">
        <figcaption className="font-medium">{service.title}</figcaption>
      </div>
    </figure>
  </Link>
);

export default async function MarqueeServices() {
  let services: Service[] = [];

  try {
    services = await getServices();
  } catch (error: unknown) {
    console.error(
      "Failed to fetch services:",
      error instanceof Error ? error.message : error
    );
    return (
      <div className="py-4 text-center text-gray-600">
        Unable to load services. Please try again later.
      </div>
    );
  }

  if (!services.length) {
    return null;
  }

  const figureClasses = cn(
    "relative cursor-pointer rounded-xl border px-4 py-2",
    "bg-gray-50 text-gray-900 hover:bg-gray-600 hover:text-gray-50",
    "transform-gpu transition-all duration-300 ease-out"
  );

  const serviceChunks = [
    services.slice(0, 5),
    services.slice(5, 10),
    services.slice(10, 15),
  ];

  return (
    <section
      aria-label="Our Services Showcase"
      className="relative mt-12 space-y-2"
    >
      <div className="absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-background to-transparent" />
      {serviceChunks.map(
        (chunk, index) =>
          chunk.length > 0 && (
            <Marquee
              key={`marquee-${index}`}
              reverse={index === 1}
              repeat={index !== 1 ? 2 : undefined}
              pauseOnHover
              className="[--duration:25000ms]"
            >
              {chunk.map((service, i) => (
                <ServiceItem
                  key={`${service.id}-${i}`}
                  service={service}
                  className={figureClasses}
                />
              ))}
            </Marquee>
          )
      )}
      <div className="absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}
