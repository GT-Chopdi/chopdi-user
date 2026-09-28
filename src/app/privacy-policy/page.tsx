import type { Metadata } from "next";
import Link from "next/link";
import LegalTableOfContents from "@/components/legal-toc";

export const metadata: Metadata = {
  title: "Privacy Policy | Chopdi - Your Digital Hisaab Book",
  description:
    "Learn how Chopdi and Gelora Tech collect, use, and protect your digital hisaab records and personal information. Your business privacy is our top priority.",
};

export default function PrivacyPolicyPage() {
  const appName = "Chopdi";
  const companyName = "Gelora Tech";
  const contactEmail = "chopdi@geloratech.com";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        `${companyName} ("we", "our", or "us") operates ${appName} ("Chopdi", "Platform", or "App") — Your Digital Hisaab Book. We are deeply committed to safeguarding the privacy and confidentiality of your business and personal records.`,
        `This Privacy Policy outlines how we collect, process, store, and safeguard your data when you use the ${appName} mobile application, website, and related financial ledger services.`,
        `This policy is formulated in compliance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, the Digital Personal Data Protection Act, 2023, and other applicable Indian regulations.`,
        `By downloading, accessing, or using ${appName}, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue using the App.`,
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      content: [
        `2.1 Account & Profile Information: When registering for ${appName}, we collect your mobile phone number (for secure OTP verification), business or shop name, owner/user name, and email address (optional, for receiving statement exports and reports).`,
        `2.2 Customer & Ledger Data (Hisaab Records): As part of our digital ledger service, you enter information about your borrowers, lenders, and customers. This includes customer names, contact numbers, loan amounts, transaction type (Loan Given / Loan Taken), interest rates, repayment schedules, notes, and payment histories.`,
        `2.3 Device & Usage Information: We collect technical diagnostic information such as your device model, operating system version, unique device identifiers, IP address, app performance logs, crash reports, and interaction patterns to ensure smooth app performance.`,
        `2.4 Device Permissions: With your explicit permission, the App may request access to: (a) Contacts: to easily select and add customer names and phone numbers without manual typing; (b) Storage / Camera: to capture and attach bill receipts, promissory notes, or payment proofs to specific ledger transactions.`,
      ],
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      content: [
        `We use the collected information exclusively to provide, maintain, and enhance your digital hisaab experience:`,
        `Ledger Management & Calculations: To calculate interest accurately, track principal amounts, compute total outstanding dues, and generate real-time balances.`,
        `Cloud Backup & Synchronization: To back up your hisaab securely in the cloud, allowing seamless restoration if your mobile device is lost, damaged, or changed.`,
        `Payment Reminders & Statements: To facilitate automated or manual payment reminders via SMS or WhatsApp to your debtors, and generate downloadable PDF/Excel statements for your records.`,
        `Customer Support & Updates: To assist you with troubleshooting, respond to inquiries, and notify you about critical app updates, new features, and security advisories.`,
        `Security & Fraud Prevention: To verify your identity via OTP, detect unauthorized logins, and protect the integrity of your ledger data.`,
      ],
    },
    {
      id: "data-ownership",
      title: "4. Data Ownership & Confidentiality",
      content: [
        `You maintain 100% ownership of all your hisaab books, customer records, and financial entries created in ${appName}.`,
        `${companyName} does NOT sell, rent, monetize, or trade your ledger data, customer lists, or financial records to any third party, marketing agency, or advertiser.`,
        `Your financial entries are confidential to your account. Our personnel cannot access or view your private ledger entries unless explicitly authorized by you for specific customer support troubleshooting.`,
      ],
    },
    {
      id: "information-sharing",
      title: "5. How We Share Your Information",
      content: [
        `We only share minimal necessary information under strict conditions:`,
        `Infrastructure & Service Providers: Trusted cloud hosting platforms (e.g., AWS, Google Cloud) that provide encrypted database storage, and telecom gateway partners who deliver OTPs and transactional reminder messages. All partners are bound by strict non-disclosure and security agreements.`,
        `Legal & Regulatory Mandates: We may disclose information if required by a valid court order, law enforcement inquiry, or applicable statutory regulation under Indian jurisdiction.`,
        `Business Reorganization: In the event of a merger, acquisition, or corporate restructuring of ${companyName}, your data may be transferred to the successor entity under the same privacy commitments, with prior notice to you.`,
      ],
    },
    {
      id: "data-security",
      title: "6. Data Security & Encryption",
      content: [
        `We employ multi-layered industry-standard technical and organizational security controls to protect your data:`,
        `In-Transit Encryption: All communication between the ${appName} app and our servers is encrypted using modern TLS 1.3 cryptographic protocols.`,
        `At-Rest Encryption: Your ledger records, backups, and attachments are encrypted using AES-256 bit encryption in secure data centers located in India.`,
        `Authentication & Session Controls: Accounts are protected by mobile OTP verification, biometric authentication support (fingerprint / face unlock on supported devices), and automated session expirations.`,
        `While we implement the highest reasonable standards of security, please note that no transmission method over the internet is completely infallible. We encourage you to keep your device secure and never share OTPs with anyone.`,
      ],
    },
    {
      id: "data-retention",
      title: "7. Data Retention & Account Deletion",
      content: [
        `We retain your digital hisaab records for as long as your account remains active so that you can view past transaction histories and interest calculations.`,
        `You have the right to request deletion of your account and all associated data at any time. When an account deletion request is processed, all customer ledgers, personal details, and transaction records are permanently purged from our active databases.`,
        `Certain anonymized transaction audit logs may be retained for the minimum statutory period required by Indian tax or regulatory authorities.`,
      ],
    },
    {
      id: "your-rights",
      title: "8. Your Rights & Controls",
      content: [
        `As a user of ${appName}, you have complete control over your information:`,
        `Right to Access & Export: You can export your complete ledger records, individual customer ledgers, and statement summaries in PDF or Excel formats directly from the app.`,
        `Right to Rectify: You can edit or correct customer information, transaction amounts, notes, and interest configurations at any time.`,
        `Right to Erase: You can delete specific entries, customers, or request complete account erasure by contacting us at ${contactEmail}.`,
        `Revoking Permissions: You can revoke Contacts, Camera, or Storage permissions at any time via your device's operating system settings.`,
      ],
    },
    {
      id: "children-privacy",
      title: "9. Children's Privacy",
      content: [
        `${appName} is designed for business owners, lenders, and individuals managing financial accounting. It is not intended for use by persons under 18 years of age. We do not knowingly collect personal information from minors.`,
      ],
    },
    {
      id: "policy-updates",
      title: "10. Changes to This Privacy Policy",
      content: [
        `We may periodically update this Privacy Policy to reflect app enhancements, legal amendments, or revised practices.`,
        `Whenever significant changes are made, we will notify you through an in-app notice, banner, or direct communication. The "Last Updated" date at the top of this policy will reflect the effective date of the latest revisions.`,
      ],
    },
    {
      id: "contact",
      title: "11. Grievance Officer & Contact Us",
      content: [
        `If you have any questions, concerns, feedback, or grievances regarding this Privacy Policy or our data handling practices, please contact our designated Grievance Officer:`,
        `Company: ${companyName} | App: ${appName} | Email: ${contactEmail} | Address: India | Support Hours: Monday to Saturday, 9:30 AM – 6:30 PM IST. We strive to acknowledge all grievances within 24 hours and resolve them within 15 business days.`,
      ],
    },
  ];

  return (
    <>
      <main className="legal-page-root">
        <div className="legal-hero legal-hero--privacy">
          {/* Top-Left Corner: Back to Home Button */}
          <Link href="/" className="legal-back-top-left" id="privacy-back-home-btn" aria-label="Back to Home">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <div className="legal-hero-inner">
            <h1 className="legal-hero-title">Privacy Policy</h1>
            <p className="legal-hero-subtitle">
              Your business hisaab is strictly confidential. Learn how {appName} and {companyName} protect your digital ledgers, customer records, and privacy.
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
                Have questions about your data privacy? Reach out anytime at{" "}
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
          background: linear-gradient(135deg, #0e1c2e 0%, #1e3557 60%, #29476f 100%);
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
          background: #EEF8F1;
          border: 1px solid #B2DAC0;
          border-radius: 12px;
          padding: 18px 22px;
          margin-bottom: 24px;
        }
        .legal-intro-box p {
          margin: 0;
          font-size: 14.5px;
          line-height: 1.65;
          color: #1E4D2B;
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
