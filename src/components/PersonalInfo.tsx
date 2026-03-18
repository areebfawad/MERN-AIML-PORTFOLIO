import portfolioData from "@/data/portfolio.json";

export function PersonalInfo() {
  const { name, tagline, location, contact_links } = portfolioData.personal_info;

  return (
    <section id="about" className="relative z-20 bg-black pt-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 relative z-10">
            {name}
          </h2>
          <p className="text-xl md:text-2xl font-light text-zinc-300 mb-6 relative z-10">
            {tagline}
          </p>
          
          <div className="flex items-center gap-2 text-zinc-400 mb-8 relative z-10 font-light">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span>{location}</span>
          </div>

          <div className="flex flex-wrap gap-4 relative z-10">
            {contact_links.email && (
              <a href={`mailto:${contact_links.email}`} className="px-5 py-2.5 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform">
                Email Me
              </a>
            )}
            {contact_links.portfolio && (
              <a href={contact_links.portfolio} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
                Portfolio
              </a>
            )}
            {contact_links.phone && (
              <span className="px-5 py-2.5 rounded-full border border-white/10 text-zinc-300 font-light bg-black/20">
                {contact_links.phone}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
