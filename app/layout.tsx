import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollAnimation from "@/components/ScrollAnimation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AFA Technologies | B2B Sales-as-a-Service for Global Tech Companies",
  description:
    "AFA Technologies embeds dedicated SDRs, full-cycle Account Executives and RevOps into your business to build a predictable global sales pipeline in 14 days.",
  metadataBase: new URL("https://afatechnologies.com"),
  openGraph: {
    title: "AFA Technologies | B2B Sales-as-a-Service",
    description:
      "Build a predictable global sales pipeline without the overhead of an in-house team.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/images/logo.webp",
    shortcut: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
};

export const viewport: Viewport = {
  themeColor: "#083262",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ScrollAnimation />
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
