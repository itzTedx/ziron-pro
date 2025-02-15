import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import { IconArrowRight } from "@tabler/icons-react";

import PrimaryButton from "@/components/ui/primary-button";
import { getBase64 } from "@/lib/placeholder";

interface ServiceCardProps {
  data: ServiceMetadata;
}

const ServiceCard = memo(async function ServiceCard({
  data,
}: ServiceCardProps) {
  const { title, description, image, slug } = data;
  const blurData = await getBase64(image!);

  return (
    <article className="group grid gap-4 pb-12 md:grid-cols-2 md:gap-20 md:pb-16">
      <figure className="relative grid aspect-[4/3] place-content-center overflow-hidden rounded-lg bg-gray-200 md:group-even:order-2">
        <Image
          src={image!}
          alt={title!}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL={blurData}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <figcaption className="sr-only">{title}</figcaption>
      </figure>

      <div className="flex flex-col justify-between md:group-even:items-end lg:py-6">
        <Link
          href={`/what-we-do/${slug}`}
          title={`Explore more about ${title}`}
          aria-label={`Read more about ${title}`}
        >
          <h2 className="text-3xl font-medium">{title}</h2>
          <p className="mt-3 text-balance text-lg leading-relaxed">
            {description}
          </p>
        </Link>

        <div className="mt-9 flex items-center gap-9 max-md:mt-6">
          <Link
            href={`/contact?message=${encodeURIComponent(title!)}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            aria-label={`Contact us about ${title}`}
          >
            Let&apos;s Talk{" "}
            <IconArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <PrimaryButton
            href={`/what-we-do/${slug}`}
            label="Explore More"
            aria-label={`Learn more about ${title}`}
          />
        </div>
      </div>
    </article>
  );
});

export default ServiceCard;
