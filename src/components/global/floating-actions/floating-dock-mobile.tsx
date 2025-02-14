"use client";

import { useOnClickOutside } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { ListCollapseIcon } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { NavigationLinks } from "./links";

export const FloatingDockMobile = memo(({ className }: { className?: string }) => {
    const ref = useRef<HTMLDivElement | null>(null) as React.RefObject<HTMLDivElement>;
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClickOutside = useCallback(() => {
    setOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  useOnClickOutside(ref, handleClickOutside);

  // Close navigation when pathname changes
  useEffect(() => {
    if (pathname) {
      setOpen(false);
    }
  }, [pathname]);

  return (
    <div ref={ref} className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && <NavigationLinks onClose={() => setOpen(false)} />}
      </AnimatePresence>
      <button
        type="button"
        onClick={handleToggle}
        className="flex size-16 items-center justify-center rounded-full border border-neutral-400/20 bg-neutral-50 dark:bg-neutral-800"
      >
        <ListCollapseIcon className="size-7 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
});

FloatingDockMobile.displayName = "FloatingDockMobile";
