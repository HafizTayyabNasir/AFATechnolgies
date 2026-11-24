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
  title: "AFA Technologies | Dedicated B2B Sales Partner for Global Tech Companies",
  description:
    "We sell your B2B tech products and services to enterprise buyers worldwide. AFA Technologies acts as the dedicated commercial bridge between your technology and global enterprise decision-makers.",
  metadataBase: new URL("https://afatechnologies.com"),
  openGraph: {
    title: "AFA Technologies | Dedicated B2B Sales Partner for Global Tech Companies",
    description:
      "We sell your B2B tech products and services to enterprise buyers worldwide. Dedicated commercial sales pods live in 14 days without in-house hiring.",
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
