"use client";

import Image from "next/image";
import Link from "next/link";
import { smoothScrollTo } from "../utils/smoothScroll";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#C1D2EB] overflow-hidden select-none border-t border-[#223A5E]/15">
      {/* Decorative Bottom-Left Organic Curve & Plant */}
      <div className="absolute left-0 bottom-0 pointer-events-none select-none z-0 hidden sm:block">
        <Image
          src="/Assest/offCurve.png"
          alt=""
          width={85}
          height={156}
          className="w-[45px] sm:w-[55px] md:w-[65px] lg:w-[75px] h-auto object-contain object-bottom-left block opacity-90"
        />
      </div>
      <div className="absolute left-0 bottom-0 pointer-events-none select-none z-10 hidden sm:block">
        <Image
          src="/Assest/treeeImg.png"
          alt=""
          width={67}
          height={127}
          className="w-[36px] sm:w-[42px] md:w-[48px] lg:w-[56px] h-auto object-contain object-bottom-left block"
        />
      </div>

      {/* Main Footer Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1680px] px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 pt-10 sm:pt-12 lg:pt-14 pb-6 sm:pb-8">
        {/* 3-Column Top Section with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_max-content_1.1fr] lg:grid-cols-[1.3fr_auto_max-content_auto_1.1fr] items-stretch gap-8 md:gap-6 lg:gap-0">

          {/* Column 1: Brand & Tagline & Description */}
          <div className="flex flex-col lg:pr-8 xl:pr-12 max-w-[500px]">
            <Link
              href="/"
              aria-label="Go to homepage"
              onClick={(e) => { e.preventDefault(); smoothScrollTo("#home"); }}
              className="inline-block"
            >
              <Image
                src="/Assest/logo.png"
                alt="Chopdi"
                width={217}
                height={66}
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
              />
            </Link>

            <h3 className="font-['Manrope'] font-bold text-[18px] sm:text-[20px] lg:text-[22px] leading-tight text-[#223A5E] mt-3 sm:mt-4">
              Hisaab, Har Kadam Saath.
            </h3>

            <p className="font-['Manrope'] font-medium text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] leading-[22px] sm:leading-[24px] text-[#223A5E] mt-2 sm:mt-2.5 opacity-90">
              Chopdi is a simple and secure digital hisab book for individuals and businesses to manage loans, track interest, and never miss a payment.
            </p>
          </div>

          {/* Vertical Divider 1 with Floating 'Built for tomorrow' Stamp */}
          <div className="hidden lg:flex relative flex-col items-center justify-start self-stretch px-4 xl:px-8">
            {/* Built for a more organized tomorrow Stamp */}
            <div className="absolute -top-12 xl:-top-14 -left-32 xl:-left-35 w-[120px] xl:w-[135px] pointer-events-none select-none z-20">
              <Image
                src="/Assest/buildTextImg.png"
                alt="Built for a more organized tomorrow"
                width={125}
                height={114}
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Divider Line */}
            <div className="w-[1px] h-full min-h-[160px] bg-[#223A5E]/25" />
          </div>

          {/* Column 2: Quick Links (No wrapping on tab, laptop, monitor) */}
          <div className="flex flex-col shrink-0 min-w-max w-max whitespace-nowrap px-0 sm:px-2 md:px-4 lg:px-8 xl:px-14">
            <h4 className="font-['Manrope'] font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-normal text-[#223A5E] mb-3 sm:mb-4 whitespace-nowrap select-none">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-2 sm:space-y-2.5 font-['Manrope'] font-medium text-[14px] sm:text-[15px] lg:text-[16px] text-[#223A5E] whitespace-nowrap">
              <li className="whitespace-nowrap">
                <a
                  href="#home"
                  className="hover:opacity-75 transition-opacity inline-flex items-center gap-2 whitespace-nowrap"
                  onClick={(e) => { e.preventDefault(); smoothScrollTo("#home"); }}
                >
                  <span className="text-[18px] leading-none select-none">•</span>
                  <span className="whitespace-nowrap">Home</span>
                </a>
              </li>
              <li className="whitespace-nowrap">
                <a
                  href="#why-chopdi"
                  className="hover:opacity-75 transition-opacity inline-flex items-center gap-2 whitespace-nowrap"
                  onClick={(e) => { e.preventDefault(); smoothScrollTo("#why-chopdi"); }}
                >
                  <span className="text-[18px] leading-none select-none">•</span>
                  <span className="whitespace-nowrap">Why Chopdi</span>
                </a>
              </li>
              <li className="whitespace-nowrap">
                <a
                  href="#how-it-works"
                  className="hover:opacity-75 transition-opacity inline-flex items-center gap-2 whitespace-nowrap"
                  onClick={(e) => { e.preventDefault(); smoothScrollTo("#how-it-works"); }}
                >
                  <span className="text-[18px] leading-none select-none">•</span>
                  <span className="whitespace-nowrap">How It Works</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden lg:flex flex-col items-center justify-center self-stretch px-4 xl:px-8">
            <div className="w-[1px] h-full min-h-[160px] bg-[#223A5E]/25" />
          </div>

          {/* Column 3: Connect with Us */}
          <div className="flex flex-col lg:pl-6 xl:pl-16">
            <h4 className="font-['Manrope'] font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-normal text-[#223A5E] mb-1.5 sm:mb-2 whitespace-nowrap">
              Connect with Us
            </h4>
            <p className="font-['Manrope'] font-medium text-[13px] sm:text-[14px] lg:text-[15px] leading-snug text-[#223A5E] max-w-[280px] opacity-90">
              Have a question or feedback? We&apos;d love to hear from you.
            </p>

            {/* Social Icons: Instagram, LinkedIn, Email */}
            <div className="flex items-center gap-3 sm:gap-4.5 mt-3 sm:mt-4">
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
                  width={28}
                  height={28}
                  className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] object-contain"
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
                  width={28}
                  height={28}
                  className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] object-contain"
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
                  width={28}
                  height={28}
                  className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] object-contain"
                />
              </a>
            </div>

            {/* Privacy Policy | Terms of Use */}
            <div className="flex items-center gap-2 font-['Manrope'] font-bold text-[13px] sm:text-[14px] text-[#223A5E] mt-3 sm:mt-4 whitespace-nowrap">
              <Link href="/privacy-policy" className="hover:opacity-75 transition-opacity">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-of-use" className="hover:opacity-75 transition-opacity">Terms of Use</Link>
            </div>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-[#223A5E]/20 mt-8 sm:mt-10 lg:mt-12 mb-5 sm:mb-6" />

        {/* Bottom Bar: Copyright, Powered By, Made in India */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Copyright */}
          <div>
            <p className="font-['Manrope'] font-medium text-[13px] sm:text-[14px] lg:text-[15px] text-[#223A5E]">
              &copy; 2026 Chopdi. All rights reserved
            </p>
          </div>

          {/* Powered By Gelora Tech */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="font-['Manrope'] font-semibold text-[13.5px] sm:text-[15px] text-[#223A5E]">
              Powered By
            </span>

            <a
              href="https://www.geloratech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Assest/geloraTech.png"
                alt="Gelora Tech"
                width={180}
                height={85}
                className="h-8 sm:h-9 md:h-23 w-auto object-contain"
              />
            </a>
          </div>

          {/* Made with [heartImg] in India */}
          <div className="flex items-center gap-1.5">
            <span className="font-['Manrope'] font-medium text-[13px] sm:text-[14px] lg:text-[15px] text-[#223A5E]">
              Made with
            </span>
            <Image
              src="/Assest/heartImg.png"
              alt="love"
              width={18}
              height={18}
              className="w-4 h-4 object-contain inline-block"
            />
            <span className="font-['Manrope'] font-medium text-[13px] sm:text-[14px] lg:text-[15px] text-[#223A5E]">
              in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
