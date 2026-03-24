"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring, motion } from "framer-motion";
import { Overlay } from "./Overlay";

const FRAME_COUNT = 120;

function getFramePath(index: number) {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/Sequence/frame_${paddedIndex}_delay-0.066s.webp`;
}

export function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      images.push(img);
    }
    imagesRef.current = images;

    images[0].onload = () => {
      renderFrame(0);
    };
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || !imagesRef.current[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Smooth Frame Transitions:
  // useSpring interpolates frame changes gently to avoid abrupt jumps
  // Adjust stiffness and damping to control animation smoothness.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 15,
    restDelta: 0.001
  });

  // 2. Extend Animation Length:
  // Map [0, 0.8] instead of [0,1]. The frame sequence finishes before the very end.
  // The scroll length is increased to 800vh below, meaning user scrolls more for the same frame distance.
  const frameIndex = useTransform(smoothProgress, [0, 0.8], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    // Update the canvas immediately when smooth value changes
    renderFrame(Math.round(latest));
  });

  // 3. Optional Enhancements:
  // A subtle scale-up and fade-out applied during the final 20% of the scroll section.
  const canvasOpacity = useTransform(smoothProgress, [0.8, 1], [1, 0]);
  const canvasScale = useTransform(smoothProgress, [0.8, 1], [1, 1.1]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(Math.round(frameIndex.get()));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // Height changed from 500vh to 800vh to make the scroll sequence significantly longer and smoother.
    <div id="home" ref={containerRef} className="relative w-full h-[800vh] bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
        <motion.canvas
          ref={canvasRef}
          style={{ opacity: canvasOpacity, scale: canvasScale }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
        <div className="absolute inset-0 z-10 p-8 flex flex-col md:p-24 pointer-events-none">
          {/* Passing smoothProgress forces the overlay typography to ease beautifully as well */}
          <Overlay scrollYProgress={smoothProgress} />
        </div>
      </div>
    </div>
  );
}
