"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { NanoBanana } from "./NanoBanana";
import portfolioData from "@/data/portfolio.json";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to ~25% (Fades out)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
  const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 1.05]);

  // Section 2: 30% to ~55% (Fades in, then out)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.55], [100, 0, -100]);

  // Section 3: 60% to ~85% (Fades in, then out)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.9], [100, 0, -100]);

  return (
    <div className="relative w-full h-full flex items-center">
      {/* Section 1 - Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mix-blend-difference drop-shadow-2xl uppercase">
          {portfolioData.personal_info.name}
        </h1>
        <p className="mt-4 text-sm md:text-xl font-light tracking-widest text-zinc-300 uppercase mix-blend-difference mb-8 max-w-3xl leading-relaxed">
          {portfolioData.personal_info.tagline}
        </p>
        <NanoBanana />
      </motion.div>

      {/* Section 2 - Left */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute left-0 lg:left-24 flex flex-col justify-center h-full max-w-2xl px-6"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mix-blend-difference drop-shadow-2xl">
          Master in <br />
          <span className="text-zinc-400 italic font-serif">AI &amp; Automation.</span>
        </h2>
      </motion.div>

      {/* Section 3 - Right */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute right-0 lg:right-24 flex flex-col justify-center items-end text-right h-full max-w-2xl px-6"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mix-blend-difference drop-shadow-2xl">
          Bridging development <br />
          <span className="text-zinc-400 italic font-serif">&amp; intelligent solutions.</span>
        </h2>
      </motion.div>
    </div>
  );
}
