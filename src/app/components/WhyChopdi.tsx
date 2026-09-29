import Image from "next/image";

export default function WhyChopdi() {
  return (
    <section id="why-chopdi" className="w-full bg-[#FDEDD9] overflow-hidden scroll-mt-20">
      {/* 
        DESKTOP CANVAS (>= 1280px / 1440px) 
        Matches exact Figma specs:
        - Canvas width: 1440px, height: 386px
        - Adult Image: left: 0px, top: 27px, width: 506px, height: 359px
        - Text block: left: 596px, top: 40px
        - Feature row: left: 596px, top: 236px, width: 762px, height: 70px
      */}
      <div className="hidden xl:block relative mx-auto w-full max-w-[1440px] h-[386px]">

        <div className="absolute left-0 bottom-0 w-[506px] h-[359px] select-none pointer-events-none">
          <Image
            src="/Assest/adultImg.png"
            alt="Chopdi - Made for real businesses"
            width={506}
            height={359}
            priority
            className="w-full h-full object-contain object-bottom"
          />
        </div>

        {/* Content Container (starts at left: 596px, top: 40px) */}
        <div className="absolute left-[540px] 2xl:left-[596px] top-[40px] flex flex-col">
          {/* WHY CHOPDI */}
          <span className="font-['Manrope'] font-bold text-[16px] leading-[40px] tracking-[2px] text-[#C74C4C] uppercase">
            WHY CHOPDI
          </span>

          {/* Made for real businesses. */}
          <h2 className="font-['Manrope'] font-extrabold text-[35px] leading-[40px] text-[#223A5E] mt-[4px]">
            Made for real businesses.
          </h2>

          {/* Subheading */}
          <p className="font-['Manrope'] font-semibold text-[16px] leading-[24px] text-[#223A5E] max-w-[623px] mt-[12px]">
            Whether you give loans or take them, Chopdi keeps everything organized - with automatic interest calculation and clear records.
          </p>

          {/* Frame 158: Feature row (top: 236px in Figma, which is mt-[40px] from subtext) */}
          <div className="mt-[40px] flex flex-row items-center gap-[11px] w-[762px] h-[70px]">
            {/* Frame 155: Simple to use */}
            <div className="relative w-[207px] h-[70px] shrink-0">
              <div className="absolute left-0 top-[15px] w-[25px] h-[40px] flex items-center justify-center">
                <Image
                  src="/Assest/mobileIcon.png"
                  alt="Simple to use"
                  width={25}
                  height={40}
                  className="w-[25px] h-[40px] object-contain"
                />
              </div>
              <div className="absolute left-[39px] top-0 flex flex-col justify-between h-[70px]">
                <h3 className="font-['Manrope'] font-extrabold text-[20px] leading-[24px] text-[#223A5E] whitespace-nowrap">
                  Simple to use
                </h3>
                <p className="font-['Manrope'] font-medium text-[15px] leading-[20px] text-[#223A5E] w-[168px]">
                  Start in minutes, no training needed.
                </p>
              </div>
            </div>

            {/* Line 48: Divider 1 */}
            <div className="w-[1px] h-[58px] bg-[#AAB9CF] shrink-0" />

            {/* Frame 156: Your data is safe */}
            <div className="relative w-[222px] h-[70px] shrink-0">
              <div className="absolute left-0 top-[15px] w-[40px] h-[40px] flex items-center justify-center">
                <Image
                  src="/Assest/shieldTickIcon.png"
                  alt="Your data is safe"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] object-contain"
                />
              </div>
              <div className="absolute left-[54px] top-0 flex flex-col justify-between h-[70px]">
                <h3 className="font-['Manrope'] font-extrabold text-[20px] leading-[24px] text-[#223A5E] whitespace-nowrap">
                  Your data is safe
                </h3>
                <p className="font-['Manrope'] font-medium text-[15px] leading-[20px] text-[#223A5E] w-[168px]">
                  Secure and private, always.
                </p>
              </div>
            </div>

            {/* Line 49: Divider 2 */}
            <div className="w-[1px] h-[58px] bg-[#AAB9CF] shrink-0" />

            {/* Frame 157: Built for Bharat */}
            <div className="relative w-[289px] h-[70px] shrink-0">
              <div className="absolute left-0 top-[15px] w-[40px] h-[40px] flex items-center justify-center">
                <Image
                  src="/Assest/heartImg.png"
                  alt="Built for Bharat"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] object-contain"
                />
              </div>
              <div className="absolute left-[54px] top-0 flex flex-col justify-between h-[70px]">
                <h3 className="font-['Manrope'] font-extrabold text-[20px] leading-[24px] text-[#223A5E] whitespace-nowrap">
                  Built for Bharat
                </h3>
                <p className="font-['Manrope'] font-medium text-[15px] leading-[20px] text-[#223A5E] w-[235px]">
                  For shopkeepers, small businesses and individuals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        TABLET / MEDIUM DESKTOP (768px <= width < 1280px)
        Clean adaptive 2-column or stacked layout
      */}
      <div className="hidden md:flex xl:hidden flex-col lg:flex-row items-center justify-between mx-auto max-w-[1240px] px-6 py-10 lg:py-8 gap-8">
        {/* Left: Adult Image */}
        <div className="w-[380px] lg:w-[440px] shrink-0 flex justify-center items-end self-end">
          <Image
            src="/Assest/adultImg.png"
            alt="Chopdi - Made for real businesses"
            width={506}
            height={359}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: Text & Features */}
        <div className="flex-1 flex flex-col max-w-[680px]">
          <span className="font-['Manrope'] font-bold text-[16px] tracking-[2px] text-[#C74C4C] uppercase">
            WHY CHOPDI
          </span>
          <h2 className="font-['Manrope'] font-extrabold text-[36px] lg:text-[42px] leading-tight text-[#223A5E] mt-1.5">
            Made for real businesses.
          </h2>
          <p className="font-['Manrope'] font-semibold text-[17px] lg:text-[19px] leading-relaxed text-[#223A5E] mt-3">
            Whether you give loans or take them, Chopdi keeps everything organized - with automatic interest calculation and clear records.
          </p>

          {/* Features Row */}
          <div className="mt-8 flex flex-row flex-wrap lg:flex-nowrap items-center gap-4 lg:gap-3">
            {/* Simple to use */}
            <div className="flex items-center gap-3">
              <div className="w-[25px] h-[38px] shrink-0 flex items-center justify-center">
                <Image
                  src="/Assest/mobileIcon.png"
                  alt="Simple to use"
                  width={25}
                  height={40}
                  className="w-[22px] h-[36px] object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-['Manrope'] font-extrabold text-[17px] leading-tight text-[#223A5E]">
                  Simple to use
                </h3>
                <p className="font-['Manrope'] font-medium text-[15px] leading-snug text-[#223A5E] max-w-[150px]">
                  Start in minutes, no training needed.
                </p>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] h-[48px] bg-[#AAB9CF] shrink-0" />

            {/* Your data is safe */}
            <div className="flex items-center gap-3">
              <div className="w-[36px] h-[36px] shrink-0 flex items-center justify-center">
                <Image
                  src="/Assest/shieldTickIcon.png"
                  alt="Your data is safe"
                  width={40}
                  height={40}
                  className="w-[34px] h-[34px] object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-['Manrope'] font-extrabold text-[17px] leading-tight text-[#223A5E]">
                  Your data is safe
                </h3>
                <p className="font-['Manrope'] font-medium text-[15px] leading-snug text-[#223A5E] max-w-[150px]">
                  Secure and private, always.
                </p>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] h-[48px] bg-[#AAB9CF] shrink-0" />

            {/* Built for Bharat */}
            <div className="flex items-center gap-3">
              <div className="w-[36px] h-[36px] shrink-0 flex items-center justify-center">
                <Image
                  src="/Assest/heartImg.png"
                  alt="Built for Bharat"
                  width={40}
                  height={40}
                  className="w-[34px] h-[34px] object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-['Manrope'] font-extrabold text-[17px] leading-tight text-[#223A5E]">
                  Built for Bharat
                </h3>
                <p className="font-['Manrope'] font-medium text-[15px] leading-snug text-[#223A5E] max-w-[190px]">
                  For shopkeepers, small businesses and individuals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        MOBILE PHONES (< 768px)
        Stacked layout optimized for mobile screens
      */}
      <div className="flex md:hidden flex-col px-5 pt-10 pb-6">
        <span className="font-['Manrope'] font-bold text-[14px] tracking-[2px] text-[#C74C4C] uppercase">
          WHY CHOPDI
        </span>
        <h2 className="font-['Manrope'] font-extrabold text-[30px] leading-[34px] text-[#223A5E] mt-2">
          Made for real businesses.
        </h2>
        <p className="font-['Manrope'] font-semibold text-[16px] leading-[22px] text-[#223A5E] mt-3">
          Whether you give loans or take them, Chopdi keeps everything organized - with automatic interest calculation and clear records.
        </p>

        {/* Feature Cards List */}
        <div className="mt-8 flex flex-col gap-5">
          {/* Feature 1 */}
          <div className="flex items-start gap-3.5">
            <div className="w-[28px] h-[36px] shrink-0 flex items-center justify-center pt-0.5">
              <Image
                src="/Assest/mobileIcon.png"
                alt="Simple to use"
                width={25}
                height={40}
                className="w-[22px] h-[36px] object-contain"
              />
            </div>
            <div>
              <h3 className="font-['Manrope'] font-extrabold text-[18px] leading-[22px] text-[#223A5E]">
                Simple to use
              </h3>
              <p className="font-['Manrope'] font-medium text-[15px] leading-[20px] text-[#223A5E] mt-0.5">
                Start in minutes, no training needed.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#AAB9CF]/40" />

          {/* Feature 2 */}
          <div className="flex items-start gap-3.5">
            <div className="w-[34px] h-[34px] shrink-0 flex items-center justify-center pt-0.5">
              <Image
                src="/Assest/shieldTickIcon.png"
                alt="Your data is safe"
                width={40}
                height={40}
                className="w-[32px] h-[32px] object-contain"
              />
            </div>
            <div>
              <h3 className="font-['Manrope'] font-extrabold text-[18px] leading-[22px] text-[#223A5E]">
                Your data is safe
              </h3>
              <p className="font-['Manrope'] font-medium text-[15px] leading-[20px] text-[#223A5E] mt-0.5">
                Secure and private, always.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#AAB9CF]/40" />

          {/* Feature 3 */}
          <div className="flex items-start gap-3.5">
            <div className="w-[34px] h-[34px] shrink-0 flex items-center justify-center pt-0.5">
              <Image
                src="/Assest/heartImg.png"
                alt="Built for Bharat"
                width={40}
                height={40}
                className="w-[32px] h-[32px] object-contain"
              />
            </div>
            <div>
              <h3 className="font-['Manrope'] font-extrabold text-[18px] leading-[22px] text-[#223A5E]">
                Built for Bharat
              </h3>
              <p className="font-['Manrope'] font-medium text-[15px] leading-[20px] text-[#223A5E] mt-0.5">
                For shopkeepers, small businesses and individuals
              </p>
            </div>
          </div>
        </div>

        {/* Adult Image on Mobile */}
        <div className="mt-8 flex justify-center w-full">
          <Image
            src="/Assest/adultImg.png"
            alt="Chopdi - Made for real businesses"
            width={506}
            height={359}
            className="w-full max-w-[340px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
