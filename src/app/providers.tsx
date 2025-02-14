import LenisProvider from "@/components/animations/lenis";
import BreakpointIndicator from "@/components/layout/breakpoint-indicator";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
    return <>
        <LenisProvider />
        {children}
        <BreakpointIndicator />
        <Toaster richColors theme="light" />

        <GoogleAnalytics gaId="G-80W1TG3C5V" />
    </>;
    
};
