import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcfcfd",
};

export const metadata: Metadata = {
  title: "ykidnwg — Creative Developer",
  description:
    "Portfolio of Muhamad Wildan Mubarok — frontend development, AI-powered tools, and thoughtfully crafted digital experiences.",
  keywords: [
    "ykidnwg",
    "Muhamad Wildan Mubarok",
    "Creative Developer",
    "Frontend Developer",
    "AI",
    "Portfolio",
    "Sukabumi",
  ],
  authors: [{ name: "Muhamad Wildan Mubarok" }],
  metadataBase: new URL("https://ykidnwg.me"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "ykidnwg — Creative Developer",
    description:
      "Frontend, AI, and useful digital tools — a portfolio by Muhamad Wildan Mubarok.",
    type: "website",
    locale: "en_US",
    siteName: "ykidnwg Portfolio",
    url: "https://ykidnwg.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "ykidnwg — Creative Developer",
    description:
      "Frontend, AI, and useful digital tools — a portfolio by Muhamad Wildan Mubarok.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
