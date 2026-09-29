'use client';


/* ─── All icons/images from /Assest/ — no lucide-react ─── */
const A = '/Assest';

function TrustItem({ icon, children }: { icon: string; children: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-center text-[11px] sm:text-[12px] font-semibold leading-4 text-[#223A5E] w-[88px] sm:w-[100px] lg:w-auto lg:min-w-[92px]">
      <img src={icon} alt="" className="h-4 w-4 sm:h-5.5 sm:w-6 object-contain shrink-0" />
      <span className="break-words">{children}</span>
    </div>
  );
}

const featureItems = [
  { icon: `${A}/usersBgIcon.png`, text: 'All your customers in one place.' },
  { icon: `${A}/Group 86.png`, text: 'Automatic Interest calculation' },
  { icon: `${A}/barBgIcon.png`, text: 'Clear reports anytime.' },
  { icon: `${A}/shieldTickBgIcon.png`, text: 'Track payments effortlessly.' },
];

function FeatureCard({
  icon,
  children,
  className,
}: {
  icon: string;
  children: string;
  className: string;
}) {
  const hasBakedBg = icon.includes('BgIcon') || icon.includes('Group 86');

  return (
    <div
      className={`absolute z-20 flex flex-row items-center gap-[10px] rounded-[10px] bg-[rgba(253,237,217,0.2)] px-[10px] py-[10px] shadow-[0px_4px_4px_rgba(34,58,94,0.25)] ${className}`}
    >
      {/* Icon group: blurred cream ellipse + icon, perfectly centered */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
        {!hasBakedBg && (
          <div className="absolute inset-0 rounded-full bg-[#FDEDD9] blur-[2px]" />
        )}
        <img
          src={icon}
          alt=""
          className={`relative z-10 object-contain ${hasBakedBg ? 'h-10 w-10' : 'h-6 w-6'
            }`}
        />
      </div>
      <span className="text-[14px] font-bold leading-[18px] text-[#223A5E]">{children}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-0 overflow-hidden bg-[#C1D2EB] text-[#223A5E] pb-6 sm:pb-16 lg:min-h-[780px] lg:h-[550px] lg:pb-0">

      <div className="relative mx-auto flex flex-col items-center lg:block lg:h-[calc(100%-96px)] max-w-[1410px]">

        {/* ── Left copy block ── */}
        <div className="relative z-10 w-full px-5 pt-4 sm:px-8 md:px-12 flex flex-col items-center text-center lg:items-start lg:text-left lg:absolute lg:left-7 lg:top-10 lg:w-[500px] lg:px-0 lg:pt-0">
          <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-bold tracking-[1px] text-[#C74C4C]">
            YOUR DIGITAL HISAAB BOOK
          </p>
          <h1 className="mt-3 sm:mt-3 max-w-[440px] text-[32px] sm:text-[36px] lg:text-[40px] font-extrabold leading-[1.08] tracking-[-1.5px] lg:mt-2 mx-auto lg:mx-0">
            Hisaab ab hamesha saath mein.
          </h1>
          <p className="mt-2 sm:mt-3 lg:mt-3 max-w-[480px] text-[13px] sm:text-[14px] lg:text-[17px] font-semibold leading-[1.3] lg:leading-[1.25] mx-auto lg:mx-0">
            Keep track of loans, interest and payments - easily, accurately and without any notebook.
          </p>

          {/* Store buttons */}
          <div className="mt-3 sm:mt-4 flex justify-center lg:justify-start gap-3 mx-0 lg:mx-25 lg:mt-5 ">
            <img src={`${A}/AndroidImg.png`} alt="Get it on Google Play" className="h-14 sm:h-16 lg:h-18 w-auto lg:w-45 object-contain" />
          </div>

          {/* Trust badges */}
          <div className="mt-1 sm:mt-2 flex items-center justify-center gap-3 sm:gap-7 w-full max-w-[360px] sm:max-w-none  px-3 py-2 rounded-[10px]  lg:mt-3 lg:justify-start">
            <TrustItem icon={`${A}/shieldTickIcon.png`}>Simple to use</TrustItem>
            <TrustItem icon={`${A}/LockImg.png`}>Safe &amp; Secure</TrustItem>
            <TrustItem icon={`${A}/usersIcon.png`}>Made for everyone</TrustItem>
          </div>
        </div>

        {/* ── Visual layer (phone + decorations) ── */}
        <div className="pointer-events-none relative mt-6 sm:mt-8 md:mt-10 h-[360px] sm:h-[420px] md:h-[480px] w-full max-w-[310px] sm:max-w-[370px] md:max-w-[440px] lg:absolute lg:inset-0 lg:left-0 lg:top-0 lg:h-full lg:w-full lg:max-w-none lg:mt-0 lg:translate-x-0">
          {/* Hisaab lettering */}
          <img
            src={`${A}/HisaabImg.png`}
            alt="Hisaab lettering"
            className="absolute hidden max-w-none -rotate-[-7.58deg] lg:block lg:left-[130px] lg:top-[331px] lg:w-[450px]"
          />
          <img
            src={`${A}/simplerImg.png`}
            alt="Simpler"
            className="absolute hidden max-w-none -rotate-[-3.58deg] lg:block lg:left-[830px] lg:top-[303px] lg:w-[450px]"
          />
          {/* Phone mockup */}
          <img
            src={`${A}/phoneImg.png`}
            alt="Chopdi app on a phone"
            className="absolute left-1/2 -translate-x-1/2 top-0 z-10 w-[220px] sm:w-[260px] md:w-[300px] max-w-none drop-shadow-[-4px_2px_4px_rgba(34,58,94,0.3)] lg:left-[550px] lg:top-[32px] lg:w-[380px] lg:translate-x-0  max-h-[400px] lg:max-h-[650px]"
          />
          {/* Book */}
          <img
            src={`${A}/bookImg.png`}
            alt="Traditional account book"
            className="absolute left-[-35px]  top-[255px] sm:top-[300px] md:top-[355px] z-[5] w-[110px] sm:w-[135px] md:w-[170px] max-w-none rotate-[10deg] lg:left-[440px] lg:top-[510px] lg:w-[208px]"
          />
          {/* Pen — Figma: left:823px top:787px rotate(6.35deg) */}
          <img
            src={`${A}/penImg.png`}
            alt="Red pen"
            className="absolute right-[80px] sm:right-[90px] md:right-[110px] top-[305px] sm:top-[350px] md:top-[405px] z-[6] w-[65px] sm:w-[78px] md:w-[92px] max-w-none rotate-[2deg] lg:right-auto lg:left-[735px] lg:top-[545px] lg:w-[134px] lg:rotate-[-3.35deg]"
          />
          {/* Rupee coin – left side (mobile/tablet: left edge, desktop: Figma position) */}
          <img
            src={`${A}/leftIcon.png`}
            alt=""
            className="absolute left-[-30px]  top-[150px] md:top-[200px] z-[8] w-[75px] sm:w-[80px] md:w-[90px] rotate-[-14deg] lg:left-[490px] lg:top-[278px] lg:w-[88px]"
          />
           <img
            src={`${A}/leftIcon.png`}
            alt=""
            className="absolute left-[-30px]  top-[150px] md:top-[200px] z-[8] w-[75px] sm:w-[80px] md:w-[90px] rotate-[-14deg] lg:left-[190px] lg:top-[578px] lg:w-[88px]"
          />
          {/* Rupee coin – right side (mobile/tablet: right edge, desktop: Figma position) */}
          <img
            src={`${A}/rightIcon.png`}
            alt=""
            className="absolute right-[-30px] top-[150px] sm:top-[200px]  z-[8] w-[75px] sm:w-[80px] md:w-[90px] rotate-[14deg] lg:right-auto lg:left-[890px] lg:rotate-0 lg:top-[520px] lg:w-[92px]"
          />
          {/* Rupee coin – top-right desktop only */}
          <img
            src={`${A}/rightIcon.png`}
            alt=""
            className="absolute hidden lg:block lg:left-[1246px] lg:top-[190px] lg:w-[104px]"
          />
        </div>

        {/* ── Feature cards — 1 column on mobile, 2 columns on tablet, hidden on desktop ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-[340px] sm:max-w-[580px] md:max-w-[680px] px-3 sm:px-4 mt-8 sm:mt-10 z-20 lg:hidden">
          {featureItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center gap-[10px] rounded-[10px] bg-[rgba(253,237,217,0.3)] backdrop-blur-[2px] px-[12px] py-[10px] shadow-[0px_4px_4px_rgba(34,58,94,0.18)]"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                <img
                  src={item.icon}
                  alt=""
                  className="relative z-10 h-10 w-10 object-contain"
                />
              </div>
              <span className="text-[13px] sm:text-[14px] font-bold leading-[18px] text-[#223A5E]">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* ── Floating feature cards — desktop only, exact Figma positions & sizes ── */}

        {/* Frame 152: All your customers — left:1067 top:251 w:255 rotate:5.16deg */}
        <FeatureCard
          icon={`${A}/usersBgIcon.png`}
          className="hidden  lg:flex lg:left-[1070px] lg:top-[105px] lg:w-[225px] lg:rotate-[5.16deg]"
        >
          All your customers in one place.
        </FeatureCard>

        {/* Frame 153: Automatic Interest — left:1019 top:400 w:255 rotate:-11.95deg */}
        <FeatureCard
          icon={`${A}/Group 86.png`}
          className="hidden lg:flex lg:left-[1020px] lg:top-[254px] lg:w-[225px] lg:rotate-[-11.95deg]"
        >
          Automatic Interest calculation
        </FeatureCard>

        {/* Frame 151: Clear reports — left:1187 top:715 w:198 rotate:-8.3deg */}
        <FeatureCard
          icon={`${A}/barBgIcon.png`}
          className="hidden lg:flex lg:left-[1090px] lg:top-[490px] lg:w-[225px] lg:rotate-[-8.3deg]"
        >
          Clear reports anytime.
        </FeatureCard>

        {/* Frame 150: Track payments — left:1074 top:851 w:223 rotate:8.17deg */}
        <FeatureCard
          icon={`${A}/shieldTickBgIcon.png`}
          className="hidden lg:flex lg:left-[1075px] lg:top-[625px] lg:w-[225px] lg:rotate-[8.17deg]"
        >
          Track payments effortlessly.
        </FeatureCard>

        {/* ── Handwritten annotations ── */}
        <div className="font-mali absolute z-20 hidden lg:block lg:bottom-[5px] lg:left-[40px]">
          <p className="text-[14px] font-bold leading-[1.1] rotate-[-25deg]">Your hisaab.<br />Our support.</p>
          <img src={`${A}/downArrowImg.png`} alt="" className="absolute top-[2px] rotate-[-1deg] left-[70px]" />
        </div>
        <div className="font-mali flex-row items-center gap-2 absolute right-8 top-4 z-20 hidden lg:flex lg:right-[40px] lg:top-[20px]">
          <img src={`${A}/upArrowImg.png`} alt="" />
          <p className="text-[15px] pt-6 font-bold leading-[1.05] -rotate-[-13deg]">
            More clarity.<br />More control.
          </p>
        </div>

      </div>
    </section>
  );
}
