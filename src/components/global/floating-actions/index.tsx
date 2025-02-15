import { cn } from "@/lib/utils";

import { FloatingDock } from "./dock";
import FloatingWhatsapp from "./whatsapp";

export const FloatingActions = () => {
  return (
    <>
      <div
        className={cn(
          "fixed z-[99999999999] inline-flex items-center justify-center gap-2 p-2",
          "bottom-4 right-4",
          "md:bottom-4 md:left-1/2 md:right-auto md:-translate-x-1/2",
          "scale-90 transform-gpu transition duration-150 hover:scale-100"
        )}
      >
        <FloatingWhatsapp className="md:hidden" />
        <FloatingDock />
      </div>
      <FloatingWhatsapp className="hidden md:block" />
    </>
  );
};
