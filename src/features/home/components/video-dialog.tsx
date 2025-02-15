"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { memo, useCallback, useEffect, useRef, useState } from "react";

import { IconCircle } from "@tabler/icons-react";
import { Play } from "lucide-react";

import { Blob } from "@/assets/blob";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const MediaThemeSutro = dynamic(() => import("player.style/sutro/react"), {
  loading: () => <IconCircle className="animate-spin" />,
  ssr: false,
});

interface HeroVideoProps {
  blurData?: string;
  subtitle?: string;
  videoSrc: string;
  videoPlaceholder: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

interface VideoTriggerProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  thumbnailProps: {
    src: string;
    alt: string;
    blurData?: string;
    subtitle?: string;
  };
  isVideoPlaying: boolean;
  videoProps: {
    ref: React.RefObject<HTMLVideoElement | null>;
    src: string;
  };
  thumbnailAlt?: string;
}

// Memoize the video trigger component
const VideoTrigger = memo(
  ({
    onMouseEnter,
    onMouseLeave,
    thumbnailProps,
    isVideoPlaying,
    videoProps,
    thumbnailAlt,
  }: VideoTriggerProps) => (
    <DialogTrigger
      className="group relative z-10 w-full cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative w-full overflow-hidden rounded-2xl">
        <Image
          src={thumbnailProps.src}
          alt={thumbnailProps.alt}
          title={thumbnailProps.alt}
          width={1920}
          height={720}
          priority
          placeholder={thumbnailProps.blurData ? "blur" : "empty"}
          blurDataURL={
            thumbnailProps.blurData ? thumbnailProps.blurData : undefined
          }
          quality={80}
          className={cn(
            "w-full shadow-lg transition-all duration-200 ease-in-out group-hover:brightness-[0.8]"
          )}
        />

        <video
          className={cn(
            "absolute top-1/2 z-10 w-full -translate-y-1/2 transition-opacity delay-200 duration-200 ease-in-out group-hover:brightness-[0.9]",
            isVideoPlaying ? "opacity-100" : "opacity-0"
          )}
          muted
          ref={videoProps.ref}
          slot="media"
          src={videoProps.src}
          loop
          playsInline
          title={thumbnailAlt}
          crossOrigin="anonymous"
        >
          <track
            className="hidden"
            kind="captions"
            src={thumbnailProps.subtitle} // Replace with the actual path to your captions file
            srcLang="en"
            label="English"
          />
        </video>
        <div className="absolute inset-0 z-20 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
          <div className="relative flex size-24 items-center justify-center rounded-full bg-background/10 backdrop-blur-md">
            <span className="absolute size-28 items-center justify-center rounded-full bg-background/10 backdrop-blur-md" />
            <div
              className={`relative flex size-20 scale-100 items-center justify-center rounded-full bg-background shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]`}
            >
              <Play
                className="size-8 scale-100 fill-primary text-primary transition-transform duration-200 ease-out group-hover:scale-105"
                style={{
                  filter:
                    "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Blob className="pointer-events-none absolute left-0 top-1/2 -z-10 -translate-y-1/2 scale-75 select-none md:scale-125" />
    </DialogTrigger>
  )
);
VideoTrigger.displayName = "VideoTrigger";

export default function HeroVideoDialog({
  blurData,
  thumbnailSrc,
  thumbnailAlt,
  subtitle,
  videoSrc,
  videoPlaceholder,
  className,
}: HeroVideoProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Memoize handlers
  const handleMouseEnter = useCallback(() => setIsVideoPlaying(true), []);
  const handleMouseLeave = useCallback(() => setIsVideoPlaying(false), []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVideoPlaying) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handle autoplay restriction
          setIsVideoPlaying(false);
        });
      }
    } else {
      video.pause();
    }

    return () => {
      video.pause();
      video.currentTime = 0;
    };
  }, [isVideoPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    const video = videoRef.current;
    return () => {
      if (video) {
        video.pause();
        video.src = "";
        video.load();
      }
    };
  }, []);

  return (
    <div className={cn("relative", className)}>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <VideoTrigger
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          thumbnailProps={{
            src: thumbnailSrc,
            alt: thumbnailAlt!,
            blurData,
            subtitle,
          }}
          isVideoPlaying={isVideoPlaying}
          videoProps={{
            ref: videoRef,
            src: videoPlaceholder,
          }}
          thumbnailAlt={thumbnailAlt}
        />

        <DialogContent className="max-w-7xl overflow-hidden p-0 shadow-primary-md md:border-primary">
          {isDialogOpen && (
            <>
              <DialogHeader className="sr-only p-0">
                <DialogTitle>{thumbnailAlt}</DialogTitle>
                <DialogDescription>About us video</DialogDescription>
              </DialogHeader>

              <MediaThemeSutro className="w-full">
                <video
                  autoPlay
                  slot="media"
                  playsInline
                  crossOrigin="anonymous"
                >
                  <source
                    src={videoPlaceholder}
                    type="video/webm"
                    media="all and (max-width: 480px)"
                  />
                  <source src={videoSrc} type="video/webm" />
                  {subtitle && (
                    <track
                      kind="captions"
                      src={subtitle}
                      srcLang="en"
                      label="English"
                    />
                  )}
                </video>
              </MediaThemeSutro>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
