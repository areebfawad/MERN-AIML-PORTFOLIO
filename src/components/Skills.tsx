"use client";

import portfolioData from "@/data/portfolio.json";
import { motion } from "framer-motion";

const colorMap: Record<string, string> = {
  blue: "border-blue-500/30 text-blue-200 bg-blue-500/10 hover:bg-blue-500/20 dot-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
  emerald: "border-emerald-500/30 text-emerald-200 bg-emerald-500/10 hover:bg-emerald-500/20 dot-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
  purple: "border-purple-500/30 text-purple-200 bg-purple-500/10 hover:bg-purple-500/20 dot-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
  amber: "border-amber-500/30 text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 dot-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
  rose: "border-rose-500/30 text-rose-200 bg-rose-500/10 hover:bg-rose-500/20 dot-rose-500 hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]",
  zinc: "border-zinc-500/40 text-zinc-300 bg-zinc-500/10 hover:bg-zinc-500/20 dot-zinc-500 hover:shadow-[0_0_20px_rgba(113,113,122,0.2)]",
};

const TechIcon = ({ name }: { name: string }) => {
  const iconSize = "w-4 h-4";
  
  // Normalized name for matching
  const n = name.toLowerCase();
  
  if (n.includes("react")) return <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>;
  if (n.includes("next")) return <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
  if (n.includes("node")) return <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.5 2v13L12 22l-3.5-5V4L12 2z"/></svg>;
  if (n.includes("mongo")) return <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z"/><path d="M12 8v8M8 12h8"/></svg>;
  if (n.includes("python")) return <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-5 0-5 3-5 5h10c0-2 0-5-5-5zM7 7v10c0 2 0 5 5 5s5-3 5-5V7M7 12h10"/></svg>;
  if (n.includes("java")) return <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h12M10 14h4M8 10h8M12 2v4"/></svg>;
  if (n.includes("html") || n.includes("css") || n.includes("tailwind") || n.includes("bootstrap")) return <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20l-2 17-8 4-8-4-2-17zM12 7v10"/></svg>;
  if (n.includes("hardware") || n.includes("troubleshooting") || n.includes("repairing")) return <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
  if (n.includes("system") || n.includes("debug") || n.includes("diagnostics")) return <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
  if (n.includes("component") || n.includes("ssd") || n.includes("ram")) return <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9" y2="15"/><line x1="12" y1="9" x2="12" y2="15"/><line x1="15" y1="9" x2="15" y2="15"/></svg>;
  
  return <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
};

const MarqueeRow = ({ items, direction, themeClass }: { items: string[], direction: string, themeClass: string }) => {
  const isPulse = direction === "pulse";
  const isFloat = direction === "float";
  
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? ["0%", "-50%"] : direction === "right" ? ["-50%", "0%"] : 0,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 20,
          ease: "linear" as const,
        },
      },
    },
  };

  if (isPulse) {
    return (
      <div className="flex flex-wrap gap-3 overflow-hidden py-2">
        {items.map((skill, j) => (
          <motion.span
            key={j}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: j * 0.2 }}
            className={`px-4 py-2 border rounded-full text-sm font-medium backdrop-blur-md cursor-default whitespace-nowrap flex items-center gap-2 ${themeClass.replace(/dot-\S+/, '')}`}
          >
            <TechIcon name={skill} />
            {skill}
          </motion.span>
        ))}
      </div>
    );
  }

  if (isFloat) {
    return (
      <div className="flex flex-wrap gap-3 overflow-hidden py-2">
        {items.map((skill, j) => (
          <motion.span
            key={j}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: j * 0.3, ease: "easeInOut" }}
            className={`px-4 py-2 border rounded-full text-sm font-medium backdrop-blur-md cursor-default whitespace-nowrap flex items-center gap-2 ${themeClass.replace(/dot-\S+/, '')}`}
          >
            <TechIcon name={skill} />
            {skill}
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden py-2">
      <motion.div 
        className="flex gap-4 whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...items, ...items].map((skill, j) => (
          <span
            key={j}
            className={`px-4 py-2 border rounded-full text-sm font-medium backdrop-blur-md cursor-default shadow-sm flex items-center gap-2 ${themeClass.replace(/dot-\S+/, '')}`}
          >
            <TechIcon name={skill} />
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export function Skills() {
  const { section_title, categories } = portfolioData.skills;

  return (
    <section id="skills" className="relative z-20 bg-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Dynamic background lights */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-4">
            {section_title}
          </h2>
          <div className="w-16 h-[1px] bg-zinc-700 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(categories as any[]).map((cat, i) => {
            const themeClass = colorMap[cat.ui.color_theme] || colorMap.zinc;
            const dotColor = themeClass.split(' ').find(c => c.startsWith('dot-'))?.replace('dot-', 'bg-') || 'bg-zinc-500';

            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden shadow-2xl"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-4">
                    <span className={`w-3 h-3 rounded-full ${dotColor} shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                    {cat.title}
                  </h3>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold text-zinc-500">
                    {cat.ui.direction}
                  </div>
                </div>

                <MarqueeRow 
                  items={cat.items} 
                  direction={cat.ui.direction} 
                  themeClass={themeClass} 
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
