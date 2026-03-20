"use client";

import portfolioData from "@/data/portfolio.json";
import { motion } from "framer-motion";

interface Achievement {
  title: string;
  type: string;
  ui: {
    color: string;
    icon: string;
  };
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/30 text-blue-400 group-hover:bg-blue-500/20",
  green: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500/20",
  purple: "bg-purple-500/10 border-purple-500/30 text-purple-400 group-hover:bg-purple-500/20",
  orange: "bg-orange-500/10 border-orange-500/30 text-orange-400 group-hover:bg-orange-500/20",
};

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case "trophy":
      return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3-3h.375a3.375 3.375 0 0 0 3.375-3.375V6.125c0-.621-.504-1.125-1.125-1.125H20.25M16.5 18.75V18a2.25 2.25 0 0 0-2.25-2.25h-4.5A2.25 2.25 0 0 0 7.5 18v.75m9 0a3.75 3.75 0 0 1-3.75 3.75h-3.75a3.75 3.75 0 0 1-3.75-3.75m9 0H1.5M1.5 6.125c0-.621.504-1.125 1.125-1.125H3.75m16.5 0v-2.25A2.25 2.25 0 0 0 18 2.25h-15a2.25 2.25 0 0 0-2.25 2.25V6.125m18.75 0c.621 0 1.125.504 1.125 1.125v4.25c0 .621-.504 1.125-1.125 1.125H16.5M1.5 11.25H3.75m-2.25 0a3.375 3.375 0 0 0 3.375 3.375h.375a3 3 0 0 0 3-3V6.125" /></svg>;
    case "certificate":
      return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>;
    case "bolt":
      return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;
    case "star":
      return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>;
    case "fire":
      return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18z" /></svg>;
    default:
      return null;
  }
};

export function Achievements() {
  const { section_title, list } = portfolioData.achievements;

  return (
    <section id="achievements" className="relative z-20 bg-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-4 text-center">
            {section_title}
          </h2>
          <div className="w-16 h-[1px] bg-zinc-700 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(list as Achievement[]).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-xl flex flex-col gap-6 hover:border-white/20 hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-500 relative z-10 ${colorMap[item.ui.color] || "bg-zinc-500/10 border-zinc-500/30 text-zinc-400 group-hover:bg-zinc-500/20"}`}>
                <Icon name={item.ui.icon} />
              </div>
              
              <div className="space-y-3 relative z-10">
                <span className={`text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full border ${colorMap[item.ui.color] || "border-zinc-500/30 text-zinc-400"}`}>
                  {item.type}
                </span>
                <p className="text-xl font-medium text-white leading-tight group-hover:text-blue-300 transition-colors">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
