"use client";

import { useEffect, useRef, useState } from "react";

interface Section {
  id: string;
  title: string;
}

interface LegalTableOfContentsProps {
  sections: Section[];
}

export default function LegalTableOfContents({ sections }: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isClickingRef = useRef(false);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Active section scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setShowScrollTop(scrollY > 400);

      // When user clicks a TOC tab, don't overwrite activeId during smooth scroll animation
      if (isClickingRef.current) return;
      if (!sections.length) return;

      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. If user is scrolled to the absolute bottom of the page, select the last section
      if (windowHeight + scrollY >= docHeight - 40) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      // 2. Scan sections from bottom to top using reading zone threshold
      const threshold = window.innerWidth < 1024 ? 110 : 130;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            setActiveId(sections[i].id);
            return;
          }
        }
      }

      // Fallback to first section
      setActiveId(sections[0].id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }
    };
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const el = document.getElementById(id);
    if (el) {
      isClickingRef.current = true;
      setActiveId(id);
      window.history.pushState(null, "", `#${id}`);

      // Offset for sticky navigation
      const isMobileOrTablet = window.innerWidth < 1024;
      const yOffset = isMobileOrTablet ? -75 : -40;
      const y = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) + yOffset;

      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });

      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }

      // Release lock after smooth scroll settles
      clickTimerRef.current = setTimeout(() => {
        isClickingRef.current = false;
        setActiveId(id);
      }, 700);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* ── MOBILE & TABLET COMPACT STICKY NAV (screens < 1024px) ── */}
      <div className="lg:hidden sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E2EAF0] shadow-sm transition-all duration-200">
        <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex-1 flex items-center justify-between gap-2 text-left bg-[#F4F8FB] hover:bg-[#EDF4F9] border border-[#D5E2EC] rounded-xl px-3.5 py-2 transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Table of Contents"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex-shrink-0 text-xs font-bold uppercase tracking-wider text-[#C74C4C] bg-[#FCEAEA] px-2 py-0.5 rounded-md">
                TOC
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#223A5E] truncate">
                {currentSection ? currentSection.title : "Table of Contents"}
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-[#556B7D] shrink-0 transition-transform duration-200 ${
                mobileMenuOpen ? "rotate-180 text-[#C74C4C]" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#E2EAF0] bg-white px-4 py-3 max-h-[60vh] overflow-y-auto shadow-xl">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#556B7D] mb-2 px-1">
              Select Section ({sections.length})
            </div>
            <ul className="flex flex-col gap-1 m-0 p-0 list-none">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-[#223A5E] text-white font-semibold shadow-sm"
                          : "text-[#374F62] hover:bg-[#F4F8FB]"
                      }`}
                    >
                      <span className="truncate pr-2">
                        {section.title}
                      </span>
                      {isActive && (
                        <span className="text-xs font-bold text-[#FDEDD9] shrink-0">
                          Active
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* ── DESKTOP STICKY SIDEBAR (screens >= 1024px) ── */}
      <nav className="hidden lg:block legal-toc" aria-label="Table of contents">
        <div className="legal-toc-card">
          <div className="legal-toc-title">Contents</div>
          <ul className="legal-toc-list">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id} className="legal-toc-item">
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`legal-toc-link ${isActive ? "legal-toc-link--active" : ""}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="truncate">{section.title}</span>
                    {isActive && (
                      <span className="legal-toc-pointer" aria-hidden="true">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ── FLOATING BACK TO TOP BUTTON (Mobile & Desktop) ── */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex items-center gap-1.5 bg-[#223A5E] hover:bg-[#1A2E4B] text-[#FDEDD9] hover:text-white px-3.5 py-2.5 rounded-full shadow-lg border border-[#3E5C8A] transition-all hover:scale-105 active:scale-95 cursor-pointer text-xs sm:text-sm font-semibold"
          aria-label="Back to top"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="hidden sm:inline">Top</span>
        </button>
      )}
    </>
  );
}
