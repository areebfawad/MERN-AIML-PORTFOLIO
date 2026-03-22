"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function NanoBanana({ className }: { className?: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative overflow-hidden group rounded-full",
        "px-8 py-3 font-semibold tracking-wide text-sm",
        "bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.3)]",
        "hover:shadow-[0_0_40px_rgba(250,204,21,0.6)]",
        "transition-all duration-500",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
        Nano Banana UI
      </span>
      {/* Glossy sweep */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
    </motion.button>
  );
}
