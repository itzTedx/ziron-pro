"use client";

import { useCallback, useEffect, useRef } from "react";

import createGlobe from "cobe";
import { animate, motion, useMotionValue } from "framer-motion";
import debounce from "lodash/debounce";

const containerStyle = {
  width: "100%",
  aspectRatio: "1 / 0.4",
  margin: "auto",
  position: "relative",
} as const;

const canvasStyle = {
  width: "100%",
  height: "100%",
  cursor: "grab",
  contain: "layout paint size",
  opacity: 0,
  transition: "opacity 1s ease",
} as const;

const MARKERS = [
  { location: [37.7595, -122.4367], size: 0.04 },
  { location: [40.7128, -74.006], size: 0.05 },
  { location: [60.7128, -174.006], size: 0.05 },
  { location: [80.7128, -4.006], size: 0.03 },
  { location: [25.0749, 55.152], size: 0.06 },
  { location: [55.274, 24.008], size: 0.06 },
] as const;

export function CobeDraggable({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const rotationValue = useMotionValue(0);
  const globeRef = useRef<ReturnType<typeof createGlobe>>();
  const animationRef = useRef<{ stop: () => void }>();

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (canvasRef.current) {
      pointerInteracting.current =
        e.clientX - pointerInteractionMovement.current;
      canvasRef.current.style.cursor = "grabbing";
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    if (canvasRef.current) {
      pointerInteracting.current = null;
      canvasRef.current.style.cursor = "grab";
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (pointerInteracting.current !== null && canvasRef.current) {
        const delta = e.clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        animationRef.current?.stop();
        animationRef.current = animate(rotationValue, delta / 200, {
          type: "spring",
          mass: 1,
          stiffness: 280,
          damping: 40,
        });
      }
    },
    [rotationValue]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (pointerInteracting.current !== null && e.touches[0]) {
        const delta = e.touches[0].clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        animationRef.current?.stop();
        animationRef.current = animate(rotationValue, delta / 100, {
          type: "spring",
          mass: 1,
          stiffness: 280,
          damping: 40,
        });
      }
    },
    [rotationValue]
  );

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = debounce(
      () => canvasRef.current && (width = canvasRef.current.offsetWidth),
      100
    );

    window.addEventListener("resize", onResize);
    onResize();

    if (canvasRef.current) {
      globeRef.current = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2 * 0.4,
        phi: 0,
        theta: 0.2,
        dark: 0,
        opacity: 0.7,
        baseColor: [237 / 255, 237 / 255, 255 / 255],
        diffuse: 3,
        glowColor: [231 / 255, 204 / 255, 255 / 255],
        mapSamples: 16000,
        mapBrightness: 3.2,
        markerColor: [73 / 255, 56 / 255, 255 / 255],
        markers: MARKERS,
        scale: 2,
        offset: [width * 2 * 0.4 * 0.6, width * 2 * 0.4 * 0.4],
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi += 0.005;
          }
          state.phi = phi + rotationValue.get();
          state.width = width * 2;
          state.height = width * 2 * 0.4;
        },
      });

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      });
    }

    return () => {
      globeRef.current?.destroy();
      window.removeEventListener("resize", onResize);
      animationRef.current?.stop();
      onResize.cancel();
    };
  }, []);

  return (
    <div className={className} style={containerStyle}>
      <motion.canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        style={canvasStyle}
      />
    </div>
  );
}
