import portfolioData from "@/data/portfolio.json";

export function Notes() {
  const { section_title, content } = portfolioData.notes;

  return (
    <section className="relative z-20 bg-black pb-24 pt-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <div className="bg-zinc-100 text-zinc-900 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(255,255,255,0.1)] flex gap-4 items-start border border-zinc-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 flex-shrink-0 text-blue-600 mt-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <div>
            <h3 className="text-lg font-bold mb-2 tracking-tight">{section_title}</h3>
            <p className="text-zinc-700 text-sm md:text-base leading-relaxed font-medium">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
