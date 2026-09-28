import type { Metadata } from "next";
import "./globals.css";

// DEFINE METADATA HERE
export const metadata: Metadata = {
  title: {
    default: "Chopdi - Your Digital Hisaab Book",
    template: "%s | Chopdi", // This allows child pages to prepend their title
  },
  description: "Keep track of loans, interest, and payments easily, accurately and without any notebook. A simple and secure digital hisaab book for businesses.",
  keywords: ["Hisaab Book", "Loan Tracker", "Interest Calculator", "Business Finance", "Chopdi App"],
  authors: [{ name: "Gelora Tech" }],
  creator: "Chopdi",
  publisher: "Chopdi",

  // Open Graph (For WhatsApp, Facebook, LinkedIn sharing)
  openGraph: {
    title: "Chopdi - Your Digital Hisaab Book",
    description: "Manage loans, track interest, and never miss a payment. Built for Bharat.",
    url: "https://chopdi.com", // Replace with actual domain
    siteName: "Chopdi",
    images: [
      {
        url: "https://chopdi.com/og-image.jpg", // Replace with your hero image URL
        width: 1200,
        height: 630,
        alt: "Chopdi App Interface",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Chopdi - Your Digital Hisaab Book",
    description: "Track loans and interest effortlessly. Simple, Secure, Made for India.",
    images: ["https://chopdi.com/twitter-image.jpg"], // Replace with image URL
  },

  // Icons (Favicon)
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Verification for Search Engines (Optional)
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}