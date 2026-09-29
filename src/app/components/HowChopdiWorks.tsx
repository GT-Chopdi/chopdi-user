import Image from "next/image";

export default function HowChopdiWorks() {
  const cards = [
    {
      titleLine1: "Add your",
      titleLine2: "customers",
      quote: "“Iska number toh hai mere paas.”",
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-[#223A5E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
    },
    {
      titleLine1: "Give or take",
      titleLine2: "money",
      quote: "“Isne ₹50,000 diye the.”",
      icon: <span className="font-['Manrope'] font-extrabold text-[12px] sm:text-[14px] md:text-[15px] text-[#223A5E] leading-none">₹</span>,
    },
    {
      titleLine1: "Set Interest",
      titleLine2: "(easy)",
      quote: "“2% monthly rakh deta hoon.”",
      icon: <span className="font-['Manrope'] font-extrabold text-[11px] sm:text-[13px] md:text-[14px] text-[#223A5E] leading-none">%</span>,
    },
    {
      titleLine1: "Record",
      titleLine2: "payments",
      quote: "“Aaj ₹5,000 wapas aaye.”",
      icon: (
        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#223A5E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
        </svg>
      ),
    },
    {
      titleLine1: "Always know",
      titleLine2: "what's due",
      quote: "“Abhi bhi ₹45,000 baaki hai.”",
      icon: (
        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#223A5E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 9h4v11H4zm6-5h4v16h-4zm6 8h4v8h-4z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-[#C1D2EB] overflow-hidden scroll-mt-20">
      {/* 
        EDGE-TO-EDGE FLUID VIEWPORT (>= 1024px: laptop, desktop)
        Illustration fits within viewport height so the entire scene (desk, books, shopkeeper) is visible.
        All cards and arrows stay locked by percentages matching Figma exactly.
      */}
      <div className="hidden lg:block relative w-full overflow-hidden select-none">
        {/* Constrained Shopkeeper Illustration fitting within viewport */}
        <div
          className="relative w-full"
          style={{
            height: "min(calc(100vh - 80px), 840px)",
          }}
        >
          <Image
            src="/Assest/oldPersonImg.png"
            alt="Chopdi - Your hisaab, in a few simple steps."
            width={1440}
            height={840}
            priority
            className="w-full h-full block select-none pointer-events-none"
          />

          {/* Centered Header positioned in the sky area */}
          <div className="absolute top-[3%] left-0 right-0 flex flex-col items-center text-center z-10 px-4">
            <span className="font-['Manrope'] font-bold text-[10px] sm:text-[11px] md:text-[12px] lg:text-[15px] tracking-[2px] text-[#C74C4C] uppercase">
              HOW CHOPDI WORKS
            </span>
            <h2 className="font-['Manrope'] font-extrabold text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] leading-tight text-[#223A5E] mt-0.3 sm:mt-0.5">
              Your hisaab, in a few simple steps.
            </h2>
            <p className="font-['Manrope'] font-semibold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-snug text-[#223A5E] mt-0.5 sm:mt-1 max-w-[700px]">
              Add people, record loans, track payments - and let Chopdi take care of the rest.
            </p>
          </div>

          {/* DOODLE ARROW ICONS FROM ASSETS */}
          {/* Arrow 1: Pointing left toward Card 1 (Add your customers) */}
          <div
            className="absolute pointer-events-none z-15"
            style={{ left: "20.8%", top: "56.5%", width: "4%" }}
          >
            <img
              src="/Assest/addYouArrow.png"
              alt=""
              className="w-full h-auto object-contain block"
            />
          </div>

          {/* Arrow 2: Pointing up-left toward Card 2 (Give or take money) */}
          <div
            className="absolute pointer-events-none z-15"
            style={{ left: "32.8%", top: "42.5%", width: "4.9%" }}
          >
            <img
              src="/Assest/giveOrArrow.png"
              alt=""
              className="w-full h-auto object-contain block"
            />
          </div>

          {/* Arrow 3: Pointing up toward Card 3 (Set Interest easy) */}
          <div
            className="absolute pointer-events-none z-15"
            style={{ left: "41.2%", top: "32.5%", width: "2.2%" }}
          >
            <img
              src="/Assest/setInterestArrow.png"
              alt=""
              className="w-full h-auto object-contain block"
            />
          </div>

          {/* Arrow 4: Pointing up-right toward Card 4 (Record payments) */}
          <div
            className="absolute pointer-events-none z-15"
            style={{ left: "62%", top: "42.5%", width: "4.9%" }}
          >
            <img
              src="/Assest/recordPayArrow.png"
              alt=""
              className="w-full h-auto object-contain block"
            />
          </div>

          {/* Arrow 5: Pointing right toward Card 5 (Always know what's due) */}
          <div
            className="absolute pointer-events-none z-15"
            style={{ left: "71.5%", top: "56.5%", width: "4%" }}
          >
            <img
              src="/Assest/alwaysKnowArrow.png"
              alt=""
              className="w-full h-auto object-contain block"
            />
          </div>

          {/* 5 COMPACT CARDS (Matching Image 4 layout, arc & typography) */}
          {/* Card 1: Add your customers (Left: 6%, Top: 48.5%) */}
          <div
            className="absolute z-20"
            style={{ left: "6%", top: "53.5%", width: "14%" }}
          >
            <div className="flex flex-col justify-between rounded-[18px] sm:rounded-[22px] md:rounded-[28px] lg:rounded-[32px] bg-[#FDEDD9] shadow-[0px_4px_12px_rgba(34,58,94,0.16)] px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-3.5 md:py-3 transition-transform duration-200 hover:scale-[1.03]">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-[#AAB9CF] shadow-[0_0_2px_rgba(170,185,207,0.7)] flex items-center justify-center shrink-0">
                  {cards[0].icon}
                </div>
                <h3 className="font-['Manrope'] font-extrabold text-[9.5px] sm:text-[11px] md:text-[12.5px] lg:text-[14px] leading-[11px] sm:leading-[13px] md:leading-[15px] lg:leading-[17px] text-[#223A5E]">
                  {cards[0].titleLine1}
                  <br />
                  {cards[0].titleLine2}
                </h3>
              </div>
              <p className="font-['Manrope'] font-medium text-[8px] sm:text-[9.5px] md:text-[11px] lg:text-[12.5px] leading-[11px] sm:leading-[13px] md:leading-[15px] text-[#223A5E] text-center mt-1 sm:mt-1.5">
                {cards[0].quote}
              </p>
            </div>
          </div>

          {/* Card 2: Give or take money (Left: 19%, Top: 30.5%) */}
          <div
            className="absolute z-20"
            style={{ left: "22%", top: "30.5%", width: "13.5%" }}
          >
            <div className="flex flex-col justify-between rounded-[18px] sm:rounded-[22px] md:rounded-[28px] lg:rounded-[32px] bg-[#FDEDD9] shadow-[0px_4px_12px_rgba(34,58,94,0.16)] px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-3.5 md:py-3 transition-transform duration-200 hover:scale-[1.03]">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-[#AAB9CF] shadow-[0_0_2px_rgba(170,185,207,0.7)] flex items-center justify-center shrink-0">
                  {cards[1].icon}
                </div>
                <h3 className="font-['Manrope'] font-extrabold text-[9.5px] sm:text-[11px] md:text-[12.5px] lg:text-[14px] leading-[11px] sm:leading-[13px] md:leading-[15px] lg:leading-[17px] text-[#223A5E]">
                  {cards[1].titleLine1}
                  <br />
                  {cards[1].titleLine2}
                </h3>
              </div>
              <p className="font-['Manrope'] font-medium text-[8px] sm:text-[9.5px] md:text-[11px] lg:text-[12.5px] leading-[11px] sm:leading-[13px] md:leading-[15px] text-[#223A5E] text-center mt-1 sm:mt-1.5">
                {cards[1].quote}
              </p>
            </div>
          </div>

          {/* Card 3: Set Interest (easy) (Left: 41.5%, Top: 24.5%) */}
          <div
            className="absolute z-20"
            style={{ left: "41.5%", top: "20.5%", width: "14%" }}
          >
            <div className="flex flex-col justify-between rounded-[18px] sm:rounded-[22px] md:rounded-[28px] lg:rounded-[32px] bg-[#FDEDD9] shadow-[0px_4px_12px_rgba(34,58,94,0.16)] px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-3.5 md:py-3 transition-transform duration-200 hover:scale-[1.03]">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-[#AAB9CF] shadow-[0_0_2px_rgba(170,185,207,0.7)] flex items-center justify-center shrink-0">
                  {cards[2].icon}
                </div>
                <h3 className="font-['Manrope'] font-extrabold text-[9.5px] sm:text-[11px] md:text-[12.5px] lg:text-[14px] leading-[11px] sm:leading-[13px] md:leading-[15px] lg:leading-[17px] text-[#223A5E]">
                  {cards[2].titleLine1}
                  <br />
                  {cards[2].titleLine2}
                </h3>
              </div>
              <p className="font-['Manrope'] font-medium text-[8px] sm:text-[9.5px] md:text-[11px] lg:text-[12.5px] leading-[11px] sm:leading-[13px] md:leading-[15px] text-[#223A5E] text-center mt-1 sm:mt-1.5">
                {cards[2].quote}
              </p>
            </div>
          </div>

          {/* Card 4: Record payments (Left: 63.5%, Top: 30.5%) */}
          <div
            className="absolute z-20"
            style={{ left: "63.5%", top: "30.5%", width: "13.5%" }}
          >
            <div className="flex flex-col justify-between rounded-[18px] sm:rounded-[22px] md:rounded-[28px] lg:rounded-[32px] bg-[#FDEDD9] shadow-[0px_4px_12px_rgba(34,58,94,0.16)] px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-3.5 md:py-3 transition-transform duration-200 hover:scale-[1.03]">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-[#AAB9CF] shadow-[0_0_2px_rgba(170,185,207,0.7)] flex items-center justify-center shrink-0">
                  {cards[3].icon}
                </div>
                <h3 className="font-['Manrope'] font-extrabold text-[9.5px] sm:text-[11px] md:text-[12.5px] lg:text-[14px] leading-[11px] sm:leading-[13px] md:leading-[15px] lg:leading-[17px] text-[#223A5E]">
                  {cards[3].titleLine1}
                  <br />
                  {cards[3].titleLine2}
                </h3>
              </div>
              <p className="font-['Manrope'] font-medium text-[8px] sm:text-[9.5px] md:text-[11px] lg:text-[12.5px] leading-[11px] sm:leading-[13px] md:leading-[15px] text-[#223A5E] text-center mt-1 sm:mt-1.5">
                {cards[3].quote}
              </p>
            </div>
          </div>

          {/* Card 5: Always know what's due (Left: 76%, Top: 48.5%) */}
          <div
            className="absolute z-20"
            style={{ left: "77%", top: "52.5%", width: "14%" }}
          >
            <div className="flex flex-col justify-between rounded-[18px] sm:rounded-[22px] md:rounded-[28px] lg:rounded-[32px] bg-[#FDEDD9] shadow-[0px_4px_12px_rgba(34,58,94,0.16)] px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-3.5 md:py-3 transition-transform duration-200 hover:scale-[1.03]">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-[#AAB9CF] shadow-[0_0_2px_rgba(170,185,207,0.7)] flex items-center justify-center shrink-0">
                  {cards[4].icon}
                </div>
                <h3 className="font-['Manrope'] font-extrabold text-[9.5px] sm:text-[11px] md:text-[12.5px] lg:text-[14px] leading-[11px] sm:leading-[13px] md:leading-[15px] lg:leading-[17px] text-[#223A5E]">
                  {cards[4].titleLine1}
                  <br />
                  {cards[4].titleLine2}
                </h3>
              </div>
              <p className="font-['Manrope'] font-medium text-[8px] sm:text-[9.5px] md:text-[11px] lg:text-[12.5px] leading-[11px] sm:leading-[13px] md:leading-[15px] text-[#223A5E] text-center mt-1 sm:mt-1.5">
                {cards[4].quote}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 
        MOBILE PHONES & TABLETS (< 1024px)
        Clean vertical stack with cards and illustration
      */}
      <div className="flex lg:hidden flex-col items-center px-4 sm:px-8 pt-10 sm:pt-14 pb-6 sm:pb-10">
        <span className="font-['Manrope'] font-bold text-[12px] sm:text-[14px] tracking-[2px] text-[#C74C4C] uppercase text-center">
          HOW CHOPDI WORKS
        </span>
        <h2 className="font-['Manrope'] font-extrabold text-[24px] sm:text-[32px] leading-tight text-[#223A5E] text-center mt-1.5 sm:mt-2">
          Your hisaab, in a few simple steps.
        </h2>
        <p className="font-['Manrope'] font-semibold text-[13px] sm:text-[16px] leading-snug text-[#223A5E] text-center mt-1.5 sm:mt-2 max-w-[320px] sm:max-w-[500px]">
          Add people, record loans, track payments - and let Chopdi take care of the rest.
        </p>

        {/* 5 Cards Stack */}
        <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 w-full max-w-[320px] sm:max-w-[460px]">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[22px] bg-[#FDEDD9] shadow-[0px_3px_8px_rgba(34,58,94,0.15)] px-3.5 py-2.5 sm:px-5 sm:py-3.5"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#AAB9CF] shadow-[0_0_3px_rgba(170,185,207,0.7)] flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-['Manrope'] font-extrabold text-[13px] sm:text-[15px] leading-[15px] sm:leading-[18px] text-[#223A5E]">
                  {card.titleLine1} {card.titleLine2}
                </h3>
              </div>
              <p className="font-['Manrope'] font-medium text-[11.5px] sm:text-[13px] leading-[14px] sm:leading-[16px] text-[#223A5E] text-center mt-1.5 sm:mt-2">
                {card.quote}
              </p>
            </div>
          ))}
        </div>

        {/* Shopkeeper Illustration */}
        <div className="mt-6 sm:mt-8 w-full max-w-[340px] sm:max-w-[500px]">
          <Image
            src="/Assest/oldPersonImg.png"
            alt="Chopdi shopkeeper illustration"
            width={1440}
            height={840}
            className="w-full h-auto object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
