"use client";

import { LayoutGroup, motion } from "motion/react";

import WordListSwap from "@/components/animations/word-list-swap";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <section className={cn("container max-w-7xl py-12 md:py-24", className)}>
      <div className="space-y-6">
        <Badge aria-label="Section badge">✦ Your success is our success</Badge>
        <LayoutGroup>
          <motion.h1
            className="flex whitespace-pre text-3xl font-normal tracking-tight md:text-4xl"
            layout={true}
          >
            <motion.span
              className="pt-0.5 sm:pt-1 md:pt-2"
              layout={true}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              Accelerating growth for{" "}
            </motion.span>
            <WordListSwap
              texts={[
                "startups",
                "sky",
                "small business",
                "🚀🚀🚀",
                "industry leader",
              ]}
              mainClassName="text-white px-2 sm:px-2 md:px-3 bg-violet-600 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.h1>
        </LayoutGroup>

        <p className="max-w-[600px] text-balance text-xl text-gray-700">
          We are a strategic digital marketing agency specializing in creating
          powerful brand identities and implementing scalable digital growth
          strategies that deliver results.
        </p>
      </div>
    </section>
  );
};
