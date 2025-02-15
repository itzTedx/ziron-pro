import dynamic from "next/dynamic";

import { IconCircle } from "@tabler/icons-react";

import { Blob } from "@/assets/blob";
import { Badge } from "@/components/ui/badge";

import { BentoCard, BentoGrid } from "../components/bento-grid";
import { TitlePullUp } from "../components/word-pullup";

const MarqueeComp = dynamic(() => import("../components/marquee-services"), {
  loading: () => <IconCircle className="animate-spin" />,
});
const MarqueeGallery = dynamic(() => import("../components/marquee-gallery"), {
  loading: () => <IconCircle className="animate-spin" />,
});
const AnimatedList = dynamic(
  () => import("../components/animated-list").then((mod) => mod.AnimatedList),
  {
    loading: () => <IconCircle className="animate-spin" />,
  }
);
const AnimatedBeamComp = dynamic(
  () =>
    import("../components/animated-beam").then((mod) => mod.AnimatedBeamComp),
  {
    loading: () => <IconCircle className="animate-spin" />,
  }
);
const CobeDraggable = dynamic(
  () => import("../components/cobe").then((mod) => mod.CobeDraggable),
  {
    loading: () => <IconCircle className="animate-spin" />,
  }
);

export function Featured() {
  return (
    <section
      id="services"
      aria-label="Our Featured Services"
      className="bg-indigo-50/40 px-3 py-12 pt-24 max-md:overflow-hidden md:px-9 md:py-24"
    >
      <div className="container flex flex-col items-center gap-6 max-md:px-3">
        <Badge variant={"secondary"} role="text" aria-label="Section Highlight">
          ✦ What we are great at
        </Badge>
        <TitlePullUp />

        <BentoGrid aria-label="Featured Services">
          {features.map((feature, idx) => (
            <BentoCard
              key={idx}
              {...feature}
              aria-labelledby={`feature-title-${idx}`}
            />
          ))}
          <Blob
            className="pointer-events-none absolute top-0 -z-10 scale-150 select-none"
            aria-hidden="true"
          />
        </BentoGrid>
      </div>
    </section>
  );
}

const features = [
  {
    name: "Comprehensive Digital Marketing Solutions",
    description:
      "Expert digital marketing services including SEO, social media, content strategy, and paid advertising - all integrated under one roof for maximum impact and ROI.",
    href: "/what-we-do",
    cta: "Explore Our Services",
    titleClass: "text-primary",
    className:
      "col-span-3 md:col-span-2 row-span-2 border border-primary shadow-primary-md",
    background: <MarqueeComp aria-hidden="true" />,
  },
  {
    name: "Get Connected to Your Audience – Fast",
    description:
      "Our targeted strategies are designed to quickly connect you with your ideal audience, helping you build strong relationships and drive engagement in no time.",
    href: "/contact",
    cta: "Contact us now!",
    className: "col-span-3 md:col-span-2 lg:col-span-1 row-span-2",
    background: (
      <div className="mt-28">
        <AnimatedList className="absolute right-2 top-0 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 md:top-4" />
      </div>
    ),
  },
  {
    name: "Data-Driven Strategies",
    description:
      "Unlock growth with tailored marketing strategies based on in-depth analytics and industry insights. We make every decision count, using data to fuel your success.",

    className: "lg:col-span-1 md:col-span-2 row-span-1",
  },
  {
    name: "Creative Content & Design",
    description: "",
    href: "/case-studies",
    cta: "Check out case studies",
    className: "col-span-3 md:col-span-2 lg:col-span-1",
    background: (
      <div className="mt-9">
        <MarqueeGallery />
      </div>
    ),
  },

  {
    name: "Tailored Campaigns for Maximum Impact",
    description:
      "Our marketing strategies are customized to fit your specific needs. Whether you're looking to increase brand awareness or drive conversions, we create a plan that delivers.",
    className: "col-span-3 md:col-span-4 lg:col-span-2 lg:row-start-3",
    href: "/what-we-do/digital-marketing",
    cta: "Learn more",
    background: (
      <div className="absolute bottom-0 right-0 size-full">
        <CobeDraggable />
      </div>
    ),
  },
  {
    name: "Dedicated Support",
    description:
      "Our partnership doesn’t stop at campaign launch. We provide continuous support and insights, helping you adapt and thrive as your brand evolves.",
    className: "lg:col-start-1 md:col-span-2 lg:row-start-4 lg:col-span-1",

    background: "",
  },
  {
    name: "SEO & PPC Services to Increase Visibility",
    description:
      "We focus on turning visitors into customers, optimizing every touchpoint to maximize your ROI.",
    className:
      "col-span-3 row-span-1 md:col-span-2 lg:col-start-2 lg:row-start-4 lg:col-span-1",
    href: "/what-we-do/seo",
    cta: "Learn more",
    titleClass: "text-balance",
    background: "",
  },
  {
    name: "Results-Driven Digital Marketing Agency",
    description:
      "Transform your online presence with our comprehensive digital marketing solutions. We specialize in SEO, social media management, content marketing, and data-driven strategies that deliver measurable results.",
    href: "/what-we-do/social-media-management",
    cta: "View Our Proven Strategies",
    className:
      "lg:col-span-2 row-span-2 md:col-span-4 md:row-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-3",
    background: (
      <div className="mt-28">
        <AnimatedBeamComp
          className="absolute -top-4 border-none transition-all duration-300 ease-out md:right-2 md:top-4 md:h-[350px] md:group-hover:scale-105"
          aria-hidden="true"
        />
      </div>
    ),
  },
];

// Add JSON-LD structured data
export function FeaturedStructuredData() {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Ziron Pro Digital Marketing Services",
        provider: {
          "@type": "Organization",
          name: "Ziron Pro",
        },
        serviceType: [
          "Digital Marketing",
          "SEO",
          "Social Media Marketing",
          "Content Marketing",
        ],
        areaServed: "Global",
        description:
          "Comprehensive digital marketing solutions including SEO, social media management, content strategy, and data-driven marketing campaigns.",
      })}
    </script>
  );
}
