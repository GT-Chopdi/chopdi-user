"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#C1D2EB] overflow-hidden select-none border-t border-[#223A5E]/15">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20 pt-12 sm:pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[1.5fr_auto_1fr_auto_1.2fr] items-start gap-8 sm:gap-10 lg:gap-4 xl:gap-6">

          {/* Column 1: Brand & About (Full width on mobile/tablet, 1st col on desktop) */}
          <div className="col-span-2 lg:col-span-1 flex flex-col max-w-[480px]">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                aria-label="Go to homepage"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Image
                  src="/Assest/logo.png"
                  alt="Chopdi"
                  width={217}
                  height={66}
                  className="h-10 sm:h-12 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
                />
              </Link>
            </div>

            {/* Tagline */}
            <h3 className="font-['Manrope'] font-semibold text-[19px] sm:text-[21px] leading-[26px] text-[#223A5E] mt-3.5 sm:mt-4">
              Hisaab, Har Kadam Saath.
            </h3>

            {/* Description */}
            <p className="font-['Manrope'] font-medium text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] text-[#223A5E] mt-2">
              Chopdi is a simple and secure digital hisab book for individuals and businesses to manage loans, track interest, and never miss a payment.
            </p>
          </div>

          {/* Built For Tomorrow Stamp + Divider 1 (Desktop only) */}
          <div className="hidden lg:flex items-center gap-4 self-stretch">
            {/* Handwritten stamp with arrow */}
            <div className="w-[115px] xl:w-[125px] shrink-0 self-start mt-2 pointer-events-none">
              <Image
                src="/Assest/buildTextImg.png"
                alt="Built for a more organized tomorrow"
                width={125}
                height={114}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Vertical Line 50 */}
            <div className="w-[1px] h-[190px] bg-[#223A5E]/30 shrink-0" />
          </div>

          {/* Column 2: Quick Links (Col 1 of row 2 on mobile/tablet) */}
          <div className="col-span-1 flex flex-col pl-0 lg:pl-4 xl:pl-6">
            <h4 className="font-['Manrope'] font-bold text-[17px] sm:text-[19px] leading-[24px] text-[#223A5E] mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-2.5 sm:space-y-3 font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-[#223A5E]">
              <li>
                <a
                  href="#home"
                  className="hover:opacity-75 hover:translate-x-0.5 transition-all duration-200 no-underline cursor-pointer inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#why-chopdi"
                  className="hover:opacity-75 hover:translate-x-0.5 transition-all duration-200 no-underline cursor-pointer inline-block"
                >
                  Why Chopdi
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:opacity-75 hover:translate-x-0.5 transition-all duration-200 no-underline cursor-pointer inline-block"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Divider 2 (Desktop only) */}
          <div className="hidden lg:flex items-center self-stretch px-2 xl:px-4">
            <div className="w-[1px] h-[190px] bg-[#223A5E]/30 shrink-0" />
          </div>

          {/* Column 3: Connect with Us (Col 2 of row 2 on mobile/tablet) */}
          <div className="col-span-1 flex flex-col">
            <h4 className="font-['Manrope'] font-bold text-[17px] sm:text-[19px] leading-[24px] text-[#223A5E] mb-2 sm:mb-2.5">
              Connect with Us
            </h4>
            <p className="font-['Manrope'] font-medium text-[13px] sm:text-[15px] leading-[20px] sm:leading-[22px] text-[#223A5E] max-w-[260px]">
              Have a question or feedback? We&apos;d love to hear from you.
            </p>

            {/* Social Icons (Instagram, LinkedIn, Email) */}
            <div className="flex items-center gap-3.5 sm:gap-4 mt-3.5 sm:mt-5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/trychopdi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-transform duration-200 hover:scale-110"
              >
                <Image
                  src="/Assest/instagramImg.png"
                  alt="Instagram"
                  width={33}
                  height={33}
                  className="w-[24px] h-[24px] sm:w-[25px] sm:h-[25px] object-contain"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/geloratech/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-transform duration-200 hover:scale-110"
              >
                <Image
                  src="/Assest/linkedIcon.png"
                  alt="LinkedIn"
                  width={33}
                  height={33}
                  className="w-[24px] h-[24px] sm:w-[25px] sm:h-[25px] object-contain"
                />
              </a>

              {/* Email */}
              <a
                href="mailto:chopdi@geloratech.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                suppressHydrationWarning
                className="transition-transform duration-200 hover:scale-110"
              >
                <Image
                  src="/Assest/emailImg.png"
                  alt="Email"
                  width={36}
                  height={36}
                  className="w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] object-contain"
                />
              </a>
            </div>

            {/* Privacy Policy | Terms of Use */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 font-['Manrope'] font-medium text-[12.5px] sm:text-[14px] text-[#223A5E] mt-3 sm:mt-4">
              <Link href="/privacy-policy" className="hover:opacity-75 transition-opacity">Privacy Policy</Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/terms-of-use" className="hover:opacity-75 transition-opacity">Terms of Use</Link>
            </div>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-[#223A5E]/20 mt-10 sm:mt-12 mb-6" />

        {/* Bottom Bar */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4 pt-1 text-center">
          {/* Powered By (1st on mobile/tablet, 2nd on desktop) */}
          <div className="order-1 lg:order-2 flex items-center gap-2.5 sm:gap-3">
            <span className="font-['Manrope'] font-semibold text-[14px] sm:text-[16px] text-[#223A5E]">
              Powered By
            </span>
            <Image
              src="/Assest/geloraTech.png"
              alt="Gelora Tech"
              width={269}
              height={96}
              className="h-9 sm:h-11 md:h-13 lg:h-14 w-auto object-contain"
            />
          </div>

          {/* Made with in India (2nd on mobile/tablet, 3rd on desktop) */}
          <div className="order-2 lg:order-3 flex items-center gap-1.5 text-center lg:text-right">
            <span className="font-['Manrope'] font-medium text-[13px] sm:text-[15px] text-[#223A5E]">
              Made with
            </span>
            <span className="text-[#E02424] text-[16px]">❤️</span>
            <span className="font-['Manrope'] font-medium text-[13px] sm:text-[15px] text-[#223A5E]">
              in India
            </span>
          </div>

          {/* Copyright (3rd on mobile/tablet, 1st on desktop) */}
          <div className="order-3 lg:order-1 text-center lg:text-left">
            <p className="font-['Manrope'] font-medium text-[13px] sm:text-[15px] text-[#223A5E]">
              © 2026 Chopdi. All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* Bottom-left plant decoration (treeeImg.png) starting from the very left edge */}
      <div className="absolute left-0 bottom-0 w-[38px] sm:w-[44px] pointer-events-none select-none z-0 hidden sm:block">
        <Image
          src="/Assest/treeeImg.png"
          alt=""
          width={67}
          height={127}
          className="w-full h-auto object-contain object-bottom block"
        />
      </div>
    </footer>
  );
}
