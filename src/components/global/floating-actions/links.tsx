import { cn } from "@/lib/utils";
import { IconBriefcase, IconBuildingSkyscraper, IconPhone, IconStar } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

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

interface NavigationLinksProps {
  onClose: () => void;
}

export const NavigationLinks = memo(({ onClose }: NavigationLinksProps) => {
  const pathname = usePathname();

  return (
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
            title={item.title}
            className={cn(
              "flex w-fit items-center justify-center gap-2 rounded-full border border-neutral-400/20 bg-background px-4 py-4",
              pathname.includes(item.href)
                ? "bg-neutral-700 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-800"
                : "text-neutral-500 dark:bg-neutral-900 dark:text-neutral-300"
            )}
            onClick={onClose}
          >
            {item.Icon}
            <p className="text-nowrap font-medium tracking-tighter">
              {item.title}
            </p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
});

NavigationLinks.displayName = "NavigationLinks";
