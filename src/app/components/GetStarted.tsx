import Image from "next/image";

export default function GetStarted() {
  return (
    <section id="get-started" className="relative w-full bg-[#FDEDD9] overflow-hidden scroll-mt-24">
      {/* 
        DESKTOP & TABLET VIEWPORT (>= 768px)
        100% full width edge-to-edge:
        - Left: sideHeartImg touches left-0, bottom-0 (no left gap)
        - Right: chopdiTreeImg touches right-0, bottom-0 (no right gap)
        - Center: GET STARTED, Download Chopdi Today, Google Play button, 3 Badges
      */}
      <div className="hidden md:block relative w-full min-h-[500px] lg:h-[500px] overflow-hidden select-none">
        {/* Left Side Organic Background Shape (Vector 13 / sideHeartImg.png) - anchored to absolute left-0 bottom-0 */}
        <div className="absolute left-0 bottom-0 w-[380px] lg:w-[470px] h-[280px] lg:h-[324px] pointer-events-none select-none z-0">
          <Image
            src="/Assest/sideHeartImg.png"
            alt=""
            width={470}
            height={324}
            className="w-full h-full object-contain object-bottom-left"
          />
        </div>

        {/* Handwritten text in Mali font (-13deg) */}
        <div
          className="absolute left-[30px] lg:left-[80px] xl:left-[95px] top-[80px] lg:top-[95px] w-[180px] lg:w-[215px] z-10 text-center select-none"
          style={{ transform: "rotate(-13deg)" }}
        >
          <p className="font-mali font-semibold text-[26px] lg:text-[34px] xl:text-[36px] leading-[34px] lg:leading-[44px] xl:leading-[48px] tracking-[-0.5px] text-[#223A5E]">
            Traditional
            <br />
            hisaab,
            <br />
            now in your
            <br />
            pocket.
          </p>
        </div>

        {/* Hand-drawn doodle curved arrow pointing from text toward center */}
        <svg
          className="absolute left-[200px] lg:left-[275px] xl:left-[300px] top-[230px] lg:top-[250px] w-[75px] lg:w-[95px] h-[45px] lg:h-[55px] text-[#223A5E] pointer-events-none z-15"
          viewBox="0 0 95 55"
          fill="none"
        >
          <path
            d="M6 30 C28 44, 62 48, 86 18"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M70 17 L87 16 L85 33"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Center Content Column */}
        <div className="absolute top-[60px] lg:top-[80px] left-0 right-0 flex flex-col items-center text-center z-10 px-4">
          {/* GET STARTED */}
          <span className="font-['Manrope'] font-bold text-[13px] lg:text-[17px] leading-[30px] lg:leading-[40px] tracking-[2px] text-[#C74C4C] uppercase">
            GET STARTED
          </span>

          {/* Download Chopdi Today. */}
          <h2 className="font-['Manrope'] font-extrabold text-[28px] lg:text-[40px] xl:text-[44px] leading-[36px] lg:leading-[50px] text-[#223A5E] mt-[4px] lg:mt-[6px]">
            Download Chopdi Today.
          </h2>

          {/* Simple. Secure. Always with you. */}
          <p className="font-['Manrope'] font-semibold text-[15px] lg:text-[18px] xl:text-[20px] leading-[22px] lg:leading-[24px] text-[#223A5E] mt-[8px] lg:mt-[12px]">
            Simple. Secure. Always with you.
          </p>

          {/* Google Play Store button (ONLY Google Play as requested - App store excluded) */}
          <div className="mt-[24px] lg:mt-[32px]">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:scale-[1.03]"
            >
              <Image
                src="/Assest/AndroidImg.png"
                alt="Get it on Google Play"
                width={213}
                height={68}
                className="h-[56px] lg:h-[68px] w-auto object-contain drop-shadow-sm"
                priority
              />
            </a>
          </div>

          {/* 3 Trust Badges Row */}
          <div className="mt-[32px] lg:mt-[42px] flex items-center justify-center gap-6 lg:gap-[40px]">
            {/* Frame 167: Simple to use */}
            <div className="flex items-center gap-2 lg:gap-2.5">
              <Image
                src="/Assest/shieldTickIcon.png"
                alt="Simple to use"
                width={36}
                height={36}
                className="w-7 h-7 lg:w-9 lg:h-9 object-contain shrink-0"
              />
              <span className="font-['Manrope'] font-medium text-[14px] lg:text-[17px] leading-[24px] text-[#223A5E]">
                Simple to use
              </span>
            </div>

            {/* Frame 168: Safe & Secure */}
            <div className="flex items-center gap-2 lg:gap-2.5">
              <Image
                src="/Assest/LockImg.png"
                alt="Safe & Secure"
                width={36}
                height={36}
                className="w-7 h-7 lg:w-9 lg:h-9 object-contain shrink-0"
              />
              <span className="font-['Manrope'] font-medium text-[14px] lg:text-[17px] leading-[24px] text-[#223A5E]">
                Safe & Secure
              </span>
            </div>

            {/* Frame 169: Made for everyone */}
            <div className="flex items-center gap-2 lg:gap-2.5">
              <svg
                className="w-7 h-7 lg:w-9 lg:h-9 text-[#223A5E] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="font-['Manrope'] font-medium text-[14px] lg:text-[17px] leading-[24px] text-[#223A5E]">
                Made for everyone
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Illustration (chopdiTreeImg.png) - anchored to absolute right-0 bottom-0 without gaps */}
        <div className="absolute right-0 bottom-0 w-[260px] lg:w-[315px] xl:w-[335px] h-[400px] lg:h-[480px] xl:h-[500px] pointer-events-none select-none z-10">
          <Image
            src="/Assest/chopdiTreeImg.png"
            alt="Chopdi App on Smartphone"
            width={335}
            height={512}
            priority
            className="w-full h-full object-contain object-bottom-right"
          />
        </div>
      </div>

      {/* 
        MOBILE PHONES (< 768px)
        Stacked layout optimized for mobile screens
      */}
      <div className="flex md:hidden flex-col items-center px-5 pt-12 pb-8 text-center relative">
        <span className="font-['Manrope'] font-bold text-[13px] tracking-[2px] text-[#C74C4C] uppercase">
          GET STARTED
        </span>
        <h2 className="font-['Manrope'] font-extrabold text-[28px] sm:text-[32px] leading-tight text-[#223A5E] mt-1.5">
          Download Chopdi Today.
        </h2>
        <p className="font-['Manrope'] font-semibold text-[16px] leading-snug text-[#223A5E] mt-2">
          Simple. Secure. Always with you.
        </p>

        {/* Mali note for mobile */}
        <p className="font-mali font-semibold text-[20px] text-[#223A5E] mt-4">
          Traditional hisaab, now in your pocket.
        </p>

        {/* Google Play Button */}
        <div className="mt-6 z-10">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-200 hover:scale-[1.03]"
          >
            <Image
              src="/Assest/AndroidImg.png"
              alt="Get it on Google Play"
              width={213}
              height={68}
              className="h-[52px] sm:h-[58px] w-auto object-contain drop-shadow-sm"
            />
          </a>
        </div>

        {/* Badges Stack */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-1.5">
            <Image
              src="/Assest/shieldTickIcon.png"
              alt="Simple to use"
              width={26}
              height={26}
              className="w-6 h-6 object-contain"
            />
            <span className="font-['Manrope'] font-medium text-[14px] text-[#223A5E]">
              Simple to use
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Image
              src="/Assest/LockImg.png"
              alt="Safe & Secure"
              width={26}
              height={26}
              className="w-6 h-6 object-contain"
            />
            <span className="font-['Manrope'] font-medium text-[14px] text-[#223A5E]">
              Safe & Secure
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-6 h-6 text-[#223A5E]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="font-['Manrope'] font-medium text-[14px] text-[#223A5E]">
              Made for everyone
            </span>
          </div>
        </div>

        {/* Right Image on mobile */}
        <div className="mt-8 w-full max-w-[240px]">
          <Image
            src="/Assest/chopdiTreeImg.png"
            alt="Chopdi App on Smartphone"
            width={335}
            height={512}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
