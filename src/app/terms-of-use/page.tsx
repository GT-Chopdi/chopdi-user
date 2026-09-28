import type { Metadata } from "next";
import Link from "next/link";
import LegalTableOfContents from "@/components/legal-toc";

export const metadata: Metadata = {
  title: "Terms of Use | Chopdi - Your Digital Hisaab Book",
  description:
    "Review the Terms of Use for Chopdi and Gelora Tech. Understand your rights and responsibilities when using our digital hisaab book and ledger services.",
};

export default function TermsOfUsePage() {
  const appName = "Chopdi";
  const companyName = "Gelora Tech";
  const contactEmail = "chopdi@geloratech.com";

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: [
        `These Terms of Use ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and ${companyName} ("we", "us", or "our"), governing your access to and use of the ${appName} mobile application, website, and related digital ledger services (collectively, the "Platform").`,
        `By creating an account, downloading the app, or accessing any part of the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use or access ${appName}.`,
      ],
    },
    {
      id: "eligibility",
      title: "2. Eligibility & Account Registration",
      content: [
        `2.1 Legal Capacity: You must be at least 18 years of age and legally competent to enter into binding contracts under the Indian Contract Act, 1872. By using ${appName}, you represent and warrant that you fulfill these requirements.`,
        `2.2 Account Security: Account creation requires a valid mobile number verified via One-Time Password (OTP). You are solely responsible for maintaining the confidentiality of your device, SIM card, and OTPs. Any actions performed through your registered account will be deemed to have been authorized by you.`,
        `2.3 Accuracy of Information: You agree to provide accurate and truthful business and profile details upon registration and keep your contact details updated.`,
      ],
    },
    {
      id: "services-description",
      title: "3. Service Description & Purpose",
      content: [
        `${appName} is a digital ledger, bookkeeping, and hisaab management platform designed for shopkeepers, traders, small business owners, and individuals.`,
        `Key features include recording credit and debit transactions (Loan Given / Loan Taken), calculating simple and compound interest based on custom user parameters, generating ledger balance summaries, downloading transaction statements, and sending payment reminder notifications.`,
        `${appName} is an accounting and calculation tool. It does not provide banking, lending, debt collection, or payment settlement services.`,
      ],
    },
    {
      id: "ledger-disclaimer",
      title: "4. Accuracy of Records & Financial Disclaimer",
      content: [
        `4.1 User-Generated Entries: All transactions, loan entries, principal amounts, repayment schedules, and interest rates recorded in ${appName} are entered solely by you. ${companyName} does not verify, validate, audit, or authenticate any ledger entry or customer claim.`,
        `4.2 Not a Financial Institution: ${companyName} is not a Bank, Non-Banking Financial Company (NBFC), money lender, or financial advisor. We do not lend money, borrow money, or intermediate credit agreements. Any loans or credit arrangements recorded in ${appName} are private contractual understandings exclusively between you and your counterparties.`,
        `4.3 Interest Calculation Tool: Interest amounts calculated by ${appName} are mathematical computations based strictly on the percentage rate, tenure, and calculation methodology selected by you. You are advised to independently verify all calculations prior to settling any financial dues.`,
      ],
    },
    {
      id: "user-conduct",
      title: "5. User Conduct & Acceptable Use",
      content: [
        `You agree to use ${appName} in full compliance with all applicable Indian and local laws. You shall NOT:`,
        `(a) Use the Platform for illegal money lending in violation of applicable state money lenders regulations;`,
        `(b) Record fraudulent, fictitious, or forged transaction entries to mislead any counterparty, tax authority, or court of law;`,
        `(c) Send threatening, abusive, defamatory, or harassing reminder messages to any debtor or contact;`,
        `(d) Attempt to reverse engineer, decompile, hack, copy, or disassemble the ${appName} software;`,
        `(e) Introduce malicious software, viruses, or automated scraping scripts to disrupt Platform operations;`,
        `(f) Impersonate any individual, firm, or entity without proper authorization.`,
      ],
    },
    {
      id: "reminders-communications",
      title: "6. Payment Reminders & Communications",
      content: [
        `${appName} provides tools allowing you to send payment reminders and balance statements to your customers via SMS, WhatsApp, or email.`,
        `You represent that you have obtained lawful consent from your customers to contact them regarding transaction settlements. You are solely responsible for ensuring that reminders comply with telecom regulations (TRAI guidelines) and do not constitute harassment.`,
        `${companyName} is not responsible for non-delivery of reminder messages resulting from telecom carrier downtimes, network filters, or incorrect phone numbers.`,
      ],
    },
    {
      id: "intellectual-property",
      title: "7. Intellectual Property Rights",
      content: [
        `All rights, title, and interest in and to ${appName}, including software source code, interface designs, logos, trademarks, illustrations, graphics, and documentation, are the exclusive property of ${companyName}.`,
        `We grant you a personal, limited, non-exclusive, non-transferable, and revocable license to use the ${appName} mobile application solely for your internal business or personal bookkeeping needs.`,
        `Nothing in these Terms grants you any right to license, resell, sublicense, or commercially exploit ${appName} technology or branding.`,
      ],
    },
    {
      id: "data-cloud-backup",
      title: "8. Data Ownership & Cloud Sync",
      content: [
        `You retain full ownership of all transaction data, customer profiles, and ledger books created by you within ${appName}.`,
        `Cloud synchronization is provided to help protect your records against device loss or malfunction. While we implement bank-grade encryption and frequent backups, we recommend exporting monthly PDF/Excel copies of critical hisaab ledgers for your permanent physical or offline records.`,
      ],
    },
    {
      id: "limitation-liability",
      title: "9. Disclaimers & Limitation of Liability",
      content: [
        `THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.`,
        `To the maximum extent permitted under applicable law, ${companyName} shall not be liable for: (a) Any failure to recover loans, bad debts, or defaults between you and your customers; (b) Disputes arising between you and third parties regarding disputed entries; (c) Any indirect, consequential, punitive, or lost-profit damages; (d) Data loss caused by unauthorized access to your phone or loss of your SIM card.`,
        `In any event, the total cumulative liability of ${companyName} to you for any claim arising out of these Terms shall not exceed the total fees (if any) paid by you to ${companyName} for using ${appName} in the 12 months preceding the claim.`,
      ],
    },
    {
      id: "termination",
      title: "10. Account Suspension & Termination",
      content: [
        `You may terminate your account and cease using ${appName} at any time.`,
        `We reserve the right to suspend or terminate your account immediately without prior notice if you violate these Terms, engage in fraudulent activities, or if required by law enforcement authorities.`,
        `Upon termination, your right to access the Platform ceases immediately. You may request permanent deletion of your stored records as outlined in our Privacy Policy.`,
      ],
    },
    {
      id: "governing-law",
      title: "11. Governing Law & Jurisdiction",
      content: [
        `These Terms shall be governed by, construed, and enforced in accordance with the laws of the Republic of India, without regard to conflict of law principles.`,
        `Any dispute, claim, or controversy arising out of or relating to these Terms or the breach, termination, or invalidity thereof shall be subject to the exclusive jurisdiction of the competent courts in India.`,
      ],
    },
    {
      id: "contact",
      title: "12. Contact & Customer Support",
      content: [
        `If you have questions, feedback, or require assistance regarding these Terms of Use, please reach out to us:`,
        `Company: ${companyName} | App: ${appName} | Email: ${contactEmail} | Support Hours: Monday to Saturday, 9:30 AM – 6:30 PM IST.`,
      ],
    },
  ];

  return (
    <>
      <main className="legal-page-root">
        <div className="legal-hero legal-hero--terms">
          {/* Top-Left Corner: Back to Home Button */}
          <Link href="/" className="legal-back-top-left" id="terms-back-home-btn" aria-label="Back to Home">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <div className="legal-hero-inner">
            <h1 className="legal-hero-title">Terms of Use</h1>
            <p className="legal-hero-subtitle">
              Clear, transparent rules for using {appName} — Your Digital Hisaab Book. Please review these terms carefully.
            </p>
          </div>
        </div>

        <div className="legal-body">
          <LegalTableOfContents sections={sections.map((s) => ({ id: s.id, title: s.title }))} />

          <article className="legal-content">


            {sections.map((section) => (
              <section key={section.id} id={section.id} className="legal-section">
                <h2 className="legal-section-title">{section.title}</h2>
                <div className="legal-section-body">
                  {section.content.map((para, i) => (
                    <p key={i} className="legal-para">{para}</p>
                  ))}
                </div>
              </section>
            ))}

            <div className="legal-footer-note">
              <p>
                Questions about our Terms of Use? Contact our team at{" "}
                <a href={`mailto:${contactEmail}`} className="legal-email-link">
                  {contactEmail}
                </a>.
              </p>
            </div>
          </article>
        </div>

        <footer className="legal-minimal-footer">
          <p>© 2026 {appName} by {companyName}. All rights reserved.</p>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        .legal-page-root {
          min-height: 100vh;
          background: #F7FAFC;
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #223A5E;
          width: 100%;
          position: relative;
        }
        .legal-back-top-left {
          position: absolute;
          top: 24px;
          left: clamp(16px, 4vw, 56px);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #FDEDD9;
          font-size: 13.5px;
          font-weight: 600;
          text-decoration: none;
          background: rgba(34, 58, 94, 0.45);
          border: 1px solid rgba(253, 237, 217, 0.25);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 24px;
          padding: 8px 18px 8px 12px;
          transition: all 0.2s ease;
          z-index: 20;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        }
        .legal-back-top-left:hover {
          background: rgba(34, 58, 94, 0.75);
          color: #FFFFFF;
          border-color: rgba(253, 237, 217, 0.6);
          transform: translateX(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        }
        .legal-minimal-footer {
          width: 100%;
          border-top: 1px solid #E2EAF0;
          background: #FFFFFF;
          padding: 24px 20px;
          text-align: center;
        }
        .legal-minimal-footer p {
          margin: 0;
          font-size: 13px;
          color: #556B7D;
        }
        .legal-hero {
          background: linear-gradient(135deg, #10233b 0%, #1c365c 60%, #224773 100%);
          padding: clamp(80px, 10vw, 100px) 20px clamp(40px, 6vw, 64px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .legal-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 60%, rgba(199, 76, 76, 0.15) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 20%, rgba(193, 210, 235, 0.2) 0%, transparent 55%);
          pointer-events: none;
        }
        .legal-hero-inner {
          position: relative;
          max-width: 760px;
          margin: 0 auto;
        }
        .legal-hero-title {
          font-size: clamp(28px, 5.5vw, 48px);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 14px 0;
          line-height: 1.18;
          letter-spacing: -0.02em;
        }
        .legal-hero-subtitle {
          font-size: clamp(14px, 2.5vw, 16px);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.85);
          margin: 0 auto 20px;
          max-width: 620px;
        }
        .legal-hero-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .legal-meta-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FDEDD9;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 20px;
        }
        .legal-body {
          max-width: 1180px;
          margin: 0 auto;
          padding: 48px 24px 100px;
          display: flex;
          gap: 36px;
          align-items: flex-start;
          width: 100%;
        }
        .legal-toc {
          width: 280px;
          flex-shrink: 0;
          position: sticky;
          top: 36px;
        }
        .legal-toc-card {
          background: #FFFFFF;
          border: 1px solid #E2EAF0;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 16px rgba(34, 58, 94, 0.06);
          scrollbar-width: thin;
          scrollbar-color: rgba(34, 58, 94, 0.2) transparent;
        }
        .legal-toc-card::-webkit-scrollbar {
          width: 4px;
        }
        .legal-toc-card::-webkit-scrollbar-thumb {
          background: rgba(34, 58, 94, 0.2);
          border-radius: 4px;
        }
        .legal-toc-title {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #223A5E;
          margin: 0 0 14px 0;
        }
        .legal-toc-list {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .legal-toc-item { list-style: none; }
        .legal-toc-link {
          font-size: 13px;
          line-height: 1.4;
          color: #556B7D;
          text-decoration: none;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 10px;
          border-radius: 8px;
          border-left: 3px solid transparent;
          cursor: pointer;
        }
        .legal-toc-link:hover {
          color: #223A5E;
          background: #F4F8FB;
        }
        .legal-toc-link--active {
          color: #223A5E;
          font-weight: 700;
          background: #EDF4F9;
          border-left: 3px solid #C74C4C;
        }
        .legal-toc-pointer {
          flex-shrink: 0;
          color: #C74C4C;
          display: inline-flex;
          align-items: center;
          margin-left: 6px;
        }
        .legal-content {
          flex: 1;
          min-width: 0;
          width: 100%;
        }
        .legal-intro-box {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          background: #EBF5FF;
          border: 1px solid #BDD9F0;
          border-radius: 12px;
          padding: 18px 22px;
          margin-bottom: 24px;
        }
        .legal-intro-box p {
          margin: 0;
          font-size: 14.5px;
          line-height: 1.65;
          color: #223A5E;
        }
        .legal-section {
          background: #FFFFFF;
          border: 1px solid #E2EAF0;
          border-radius: 16px;
          padding: 28px 30px;
          margin-bottom: 18px;
          transition: box-shadow 0.2s;
          scroll-margin-top: 85px;
        }
        .legal-section:hover { box-shadow: 0 4px 20px rgba(34, 58, 94, 0.08); }
        .legal-section:last-child {
          margin-bottom: 30px;
        }
        .legal-section-title {
          font-size: clamp(17px, 3vw, 19px);
          font-weight: 700;
          color: #223A5E;
          margin: 0 0 14px 0;
          padding-bottom: 10px;
          border-bottom: 2px solid #F0F6FA;
          line-height: 1.35;
        }
        .legal-section-body { display: flex; flex-direction: column; gap: 10px; }
        .legal-para {
          margin: 0;
          font-size: clamp(13.5px, 2.5vw, 14.5px);
          line-height: 1.72;
          color: #374F62;
          word-break: break-word;
        }
        .legal-footer-note {
          background: #EDF3FA;
          border-radius: 12px;
          padding: 20px 24px;
          margin-top: 16px;
          text-align: center;
        }
        .legal-footer-note p {
          margin: 0;
          font-size: 14px;
          color: #223A5E;
          line-height: 1.6;
        }
        .legal-email-link { color: #C74C4C; font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }
        .legal-email-link:hover { color: #223A5E; }

        @media (max-width: 1023px) {
          .legal-body {
            padding: 24px 16px 60px;
            display: block;
          }
          .legal-toc {
            display: none !important;
          }
          .legal-section {
            padding: 20px 16px;
            border-radius: 14px;
            margin-bottom: 14px;
            scroll-margin-top: 75px;
          }
          .legal-intro-box {
            padding: 16px;
            margin-bottom: 18px;
          }
          .legal-footer-note {
            padding: 16px 18px;
          }
        }
        @media (max-width: 640px) {
          .legal-hero {
            padding: 76px 16px 36px;
          }
          .legal-back-top-left {
            top: 16px;
            left: 14px;
            font-size: 12.5px;
            padding: 6px 12px 6px 10px;
          }
        }
      ` }} />
    </>
  );
}
