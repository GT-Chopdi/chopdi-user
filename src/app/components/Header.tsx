"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#why-chopdi", label: "Why Chopdi" },
  { href: "#how-it-works", label: "How It Works" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setHash("#home");
        return;
      }

      const sections = navItems.map((item) => ({
        href: item.href,
        el: document.getElementById(item.href.slice(1)),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const { href, el } = sections[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            setHash(href);
            return;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeAndGo = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-[80] w-full bg-[#C1D2EB] px-5 py-3.5 md:px-10 lg:px-16 xl:px-20">
        <div className="relative z-[81] mx-auto flex max-w-[1440px] items-center justify-between gap-4">
          <a
            href="#home"
            className="relative z-[82] flex-shrink-0"
            onClick={() => {
              setHash("#home");
              closeAndGo();
            }}
          >
            <Image
              src="/Assest/logo.png"
              alt="Chopdi"
              width={150}
              height={50}
              className="h-12 w-auto md:h-14 lg:h-[50px]"
              priority
            />
          </a>

          <nav className="hidden items-center gap-10 md:flex lg:gap-14">
            {navItems.map((item) => {
              const active = hash === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setHash(item.href)}
                  className={`relative pb-1 text-[15px] font-medium text-[#223A5E] lg:text-[17px] ${
                    active
                      ? "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#223A5E] after:content-['']"
                      : "opacity-90 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="relative z-[90] flex items-center gap-2">
            <a
              href="#download"
              className="relative z-[91] flex flex-shrink-0 items-center gap-3 rounded-full bg-[#223A5E] py-1 pr-1.5 pl-6 shadow-[0_4px_12px_rgba(34,58,94,0.25)] transition-colors duration-300 hover:bg-[#1a2c47] md:py-1.5 md:pr-2 md:pl-7"
            >
              <span className="text-[13px] font-medium leading-none text-[#FDEDD9] md:text-[15px] lg:text-[17px]">
                Download App
              </span>
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#FDEDD9] md:h-10 md:w-10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19" stroke="#223A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5L19 12L12 19" stroke="#223A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#223A5E] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="md:hidden">
        <button
          type="button"
          aria-label="Close menu"
          className={`fixed inset-0 z-[100] bg-black/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <aside
          id="mobile-drawer"
          className={`fixed top-0 right-0 z-[110] flex h-full w-[78%] max-w-[320px] flex-col bg-[#C1D2EB] shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!open}
        >
          <div className="flex items-center justify-between px-5 py-5">
            <Image src="/Assest/logo.png" alt="Chopdi" width={150} height={48} className="h-10 w-auto" />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#223A5E]"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-3 pt-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-xl px-4 py-3 text-[18px] font-medium text-[#223A5E] ${
                  hash === item.href ? "bg-[#223A5E]/10" : ""
                }`}
                onClick={() => {
                  setHash(item.href);
                  closeAndGo();
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="px-5 pb-8">
            <a
              href="#download"
              className="flex items-center justify-center gap-3 rounded-full bg-[#223A5E] py-3 pr-2 pl-5"
              onClick={closeAndGo}
            >
              <span className="text-[16px] font-medium text-[#FDEDD9]">Download App</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FDEDD9]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19" stroke="#223A5E" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L19 12L12 19" stroke="#223A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
