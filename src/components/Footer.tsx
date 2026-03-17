import portfolioData from "@/data/portfolio.json";

export function Footer() {
  const { contact_links, location } = portfolioData.personal_info;

  return (
    <footer id="contact" className="relative z-20 bg-black pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
              Let's build <span className="italic font-serif text-zinc-400">something</span> together.
            </h3>
            <p className="text-zinc-400 font-light max-w-sm mb-8">
              Available for freelance opportunities and full-time roles. Ready to innovate your next digital experience.
            </p>
            {contact_links.email && (
              <a href={`mailto:${contact_links.email}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Contact Me
              </a>
            )}
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="flex flex-col gap-4 text-zinc-400 font-light">
              {contact_links.email && (
                <li>
                  <a href={`mailto:${contact_links.email}`} className="hover:text-white transition-colors flex items-center gap-3">
                    {contact_links.email}
                  </a>
                </li>
              )}
              {contact_links.phone && (
                <li>
                  <span className="flex items-center gap-3">
                    {contact_links.phone}
                  </span>
                </li>
              )}
              {location && (
                <li>
                  <span className="flex items-center gap-3">
                    {location}
                  </span>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Socials</h4>
            <ul className="flex flex-col gap-4 text-zinc-400 font-light">
              {contact_links.linkedin && (
                <li>
                  <a href={contact_links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                    LinkedIn
                  </a>
                </li>
              )}
              {contact_links.github && (
                <li>
                  <a href={contact_links.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                    GitHub
                  </a>
                </li>
              )}
              {contact_links.portfolio && (
                <li>
                  <a href={contact_links.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                    Portfolio
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 font-light text-sm">
            © {new Date().getFullYear()} Areeb Fawad. All Rights Reserved.
          </p>
          <p className="text-zinc-600 font-light text-xs uppercase tracking-widest">
            Designed & Developed meticulously
          </p>
        </div>
      </div>
    </footer>
  );
}
