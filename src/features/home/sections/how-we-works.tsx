import Image from "next/image";
import { memo } from "react";

import { Icons } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getBase64 } from "@/lib/placeholder";

const ProcessCard = memo(
  ({ id, icon, title, description }: (typeof HOW_WE_WORKS)[0]) => (
    <Card className="relative overflow-clip bg-gray-50">
      <CardHeader className="flex flex-row items-center justify-between p-6 md:p-8">
        <div className="relative size-16 md:size-20" aria-hidden="true">
          {icon}
        </div>
        <span
          className="absolute right-3 top-0 font-monaSans text-7xl font-semibold italic text-violet-100"
          aria-hidden="true"
        >
          #{id}
        </span>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-4 pt-0 md:gap-6 md:p-6 md:pt-0">
        <h3 className="text-balance text-xl font-medium md:leading-10 lg:text-3xl">
          {title}
        </h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
);

ProcessCard.displayName = "ProcessCard";

export default async function HowWeWorks() {
  const blurData = await getBase64("/images/marketing.jpg");

  return (
    <section
      className="container grid gap-10 py-12 md:grid-cols-2 md:py-24"
      id="how-we-works"
      aria-labelledby="how-we-works-title"
    >
      <div className="top-28 flex h-fit flex-col gap-5 md:sticky">
        <Badge>✦ How we works</Badge>
        <h2 id="how-we-works-title" className="title-2">
          Here&apos;s how your{" "}
          <span className="text-secondary">our process</span> works
        </h2>
        <p className="text-balance">
          From initial consultation to final execution, we keep you informed
          every step of the way, ensuring your digital marketing strategy is
          developed and implemented seamlessly.
        </p>
        <div className="relative aspect-video">
          <Image
            src="/images/marketing.jpg"
            fill
            priority
            placeholder="blur"
            blurDataURL={blurData}
            alt="Digital marketing process illustration"
            className="rounded-xl object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <aside className="space-y-12 md:px-12" role="complementary">
        {HOW_WE_WORKS.map((item) => (
          <ProcessCard key={item.id} {...item} />
        ))}
      </aside>
    </section>
  );
}

const HOW_WE_WORKS = [
  {
    id: 1,
    title: `Understanding your Business`,
    description:
      "We begin by discussing your goals and identifying your target audience, defining key customer profiles and your position in the market.",
    icon: <Icons.briefcase className="size-16 text-violet-500 md:size-24" />,
  },
  {
    id: 2,
    title: `Refining your Brand`,
    description:
      "Next, we either create or refine your brand identity, aligning it with your business vision and ensuring it resonates with your audience.",
    icon: <Icons.paintbrush className="size-16 text-violet-500 md:size-24" />,
  },
  {
    id: 3,
    title: `Crafting a Customized Marketing Strategy`,
    description:
      "We develop a tailored digital marketing plan, including SEO, PPC, content creation, and branding to drive growth and meet your specific objectives.",
    icon: <Icons.blueprint className="size-16 text-violet-500 md:size-24" />,
  },
  {
    id: 4,
    title: `Executing & Optimizing Campaigns`,
    description:
      "Finally, we launch your campaigns, continuously monitoring and optimizing them for improved performance, higher lead generation, and maximum ROI.",
    icon: <Icons.chart className="size-16 text-violet-500 md:size-24" />,
  },
];
