import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://trustagentprotocol.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trust Assurance Protocol | AI Governance & Digital Trust",
    template: "%s | Trust Assurance Protocol",
  },
  description:
    "Trust Assurance Protocol (TAP) establishes verifiable AI governance, real-time compliance, and resilient digital infrastructure for modern enterprises.",
  keywords: [
    "Trust Assurance Protocol",
    "AI governance",
    "digital trust",
    "cybersecurity",
    "compliance automation",
    "risk management",
  ],
  authors: [{ name: "Trust Assurance Protocol" }],
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  openGraph: {
    title: "Trust Assurance Protocol | Verifiable Digital Trust for AI",
    description:
      "Build verifiable confidence in AI systems with continuous monitoring, governance, and protection from Trust Assurance Protocol.",
    url: "/",
    siteName: "Trust Assurance Protocol",
    images: [
      {
        url: "/images/hero-lock.png",
        width: 1200,
        height: 630,
        alt: "Trust Assurance Protocol",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Assurance Protocol | AI Governance & Digital Trust",
    description:
      "Unshakeable digital trust for AI agents, infrastructure, and applications.",
    creator: "@trustassurance",
    images: ["/images/hero-lock.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
