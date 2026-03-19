import portfolioData from "@/data/portfolio.json";

export function ProfessionalVibe() {
  const { section_title, bio } = portfolioData.professional_vibe;

  return (
    <section className="relative z-20 bg-black py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl p-1 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
          <div className="relative bg-black/80 backdrop-blur-xl rounded-[22px] p-8 md:p-14 text-center">
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-8">
              {section_title}
            </h2>
            <div className="w-12 h-[2px] bg-zinc-600 mx-auto mb-10" />
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-zinc-300 leading-relaxed italic font-serif">
              "{bio}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
