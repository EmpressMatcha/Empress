import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata with updated logo
export const metadata: Metadata = {
  title: "Empress Matcha | Ceremonial Grade Matcha",
  description:
    "Discover Empress Matcha — a mother-and-daughters brand crafting premium ceremonial matcha for mindful moments and modern rituals.",
  keywords: [
    "matcha",
    "ceremonial matcha",
    "premium matcha",
    "Empress Matcha",
    "Japanese tea",
    "green tea",
  ],
  authors: [{ name: "Empress Matcha", url: "https://empressmatcha.com" }],
  openGraph: {
    title: "Empress Matcha | Ceremonial-Grade Matcha",
    description:
      "A mother-and-daughters brand crafting premium ceremonial matcha for mindful moments.",
    url: "https://empressmatcha.com",
    siteName: "Empress Matcha",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Empress Matcha Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empress Matcha | Premium Ceremonial Matcha",
    description:
      "Premium Japanese matcha crafted for ritual and balance — by a mom and her daughters.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

// Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Mobile browser theme color */}
        <meta name="theme-color" content="#8BAE74" />

        {/* Force favicon refresh by using a cache-busting query string */}
        <link rel="icon" href="/logo.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png?v=2" />
        <link rel="manifest" href="/manifest.json" />

        {/* Optional brand metadata */}
        <meta name="author" content="Empress Matcha" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAEBDD] text-[#1E1E1E]`}
      >
        {children}
      </body>
    </html>
  );
}
