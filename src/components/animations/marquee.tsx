import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: unknown;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const marqueeClass = cn(
    "group flex overflow-hidden p-2.5 [--duration:10s] [--gap:1rem] [gap:var(--gap)]",
    {
      "flex-row": !vertical,
      "flex-col": vertical,
    },
    className
  );

  const childClass = cn("flex shrink-0 justify-around [gap:var(--gap)]", {
    "animate-marquee flex-row": !vertical,
    "animate-marquee-vertical flex-col": vertical,
    "group-hover:[animation-play-state:paused]": pauseOnHover,
    "[animation-direction:reverse]": reverse,
  });

  return (
    <div {...props} className={marqueeClass}>
      {Array.from({ length: repeat }, (_, i) => (
        <div key={i} className={childClass}>
          {children}
        </div>
      ))}
    </div>
  );
}
