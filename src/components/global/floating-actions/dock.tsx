"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useEffect, useRef, useState } from "react";

import {
  IconBriefcase,
  IconBuildingSkyscraper,
  IconPhone,
  IconStar,
} from "@tabler/icons-react";
import { ListCollapseIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { useOnClickOutside } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";

const sectionLinks = [
  {
    title: "What we do",
    Icon: <IconStar />,
    href: "/what-we-do",
  },
  {
    title: "About us",
    Icon: <IconBuildingSkyscraper />,
    href: "/about",
  },
  {
    title: "Case Studies",
    Icon: <IconBriefcase />,
    href: "/case-studies",
  },
  {
    title: "Contact",
    Icon: <IconPhone />,
    href: "/contact",
  },
] as const;

export const FloatingDock = memo(({ className }: { className?: string }) => {
  return <FloatingDockMobile className={className} />;
});

FloatingDock.displayName = "FloatingDock";

const FloatingDockMobile = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement | null>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const handleClickOutside = () => {
    setOpen(false);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) {
      return;
    }
    setOpen(false);
  }, [pathname]);

  useOnClickOutside(ref, handleClickOutside);
  const [open, setOpen] = useState(false);
  return (
    <div ref={ref} className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full z-[999999] mb-2 flex flex-col items-end gap-2"
          >
            {sectionLinks.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (sectionLinks.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  className={cn(
                    "flex w-fit items-center justify-center gap-2 rounded-full border border-neutral-400/20 bg-background px-4 py-4",
                    pathname.includes(item.href)
                      ? "bg-neutral-700 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-800"
                      : "text-neutral-500 dark:bg-neutral-900 dark:text-neutral-300"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.Icon}
                  <p className="text-nowrap font-medium tracking-tighter">
                    {item.title}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex size-16 items-center justify-center rounded-full border border-neutral-400/20 bg-neutral-50 dark:bg-neutral-800"
      >
        <ListCollapseIcon className="size-7 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};
