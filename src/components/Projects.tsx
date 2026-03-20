import { cn } from "@/lib/utils";
import portfolioData from "@/data/portfolio.json";

export function Projects() {
  return (
    <section id="projects" className="relative z-20 bg-black py-24 px-6 md:px-12 lg:px-24">
      {/* Subtle top gradient separating the canvas and the projects section */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none -translate-y-full" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-4">
            {portfolioData.projects.section_title}
          </h2>
          <div className="w-16 h-[1px] bg-zinc-700" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative group h-full">
          {portfolioData.projects.list.map((project, i) => (
            <div
              key={i}
              className={cn(
                "group/card relative overflow-hidden rounded-3xl border border-white/10 bg-white/5",
                "backdrop-blur-xl transition-all duration-500 hover:border-white/30",
                "hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] flex flex-col"
              )}
            >
              {/* Image Placeholder with glass pattern or actual image */}
              <div className="h-48 sm:h-64 w-full bg-zinc-900 overflow-hidden relative border-b border-white/10">
                <div className="absolute inset-0 bg-neutral-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* Micro-interaction on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover/card:bg-white/5 transition-colors duration-500" />
                
                {/* App-like mockup UI lines */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-700/50" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700/50" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700/50" />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col relative z-20">
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-4 group-hover/card:text-blue-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech_stack.map((tech, j) => (
                    <span key={j} className="px-3 py-1 text-xs font-medium bg-white/10 text-zinc-300 rounded-md border border-white/5 backdrop-blur-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  <a href={project.live_link || "#"} className="flex flex-1 justify-center items-center py-2.5 rounded-lg bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 hover:border-zinc-500 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Live Preview
                  </a>
                  <a href={project.github_link || "#"} className="flex flex-1 justify-center items-center py-2.5 rounded-lg border border-white/10 text-zinc-300 font-medium hover:bg-white/5 hover:text-white transition-colors gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>

              {/* Glossy corner highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
