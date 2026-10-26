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
  title: "ykidnwg — Pengembang Kreatif",
  description:
    "Portofolio Muhamad Wildan Mubarok — pengembangan frontend, alat berbantuan AI, dan pengalaman digital yang dirancang dengan cermat.",
  keywords: [
    "ykidnwg",
    "Muhamad Wildan Mubarok",
    "Pengembang Kreatif",
    "Pengembang Frontend",
    "AI",
    "Portofolio",
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
    title: "ykidnwg — Pengembang Kreatif",
    description:
      "Frontend, AI, dan alat digital yang bermanfaat — portofolio Muhamad Wildan Mubarok.",
    type: "website",
    locale: "id_ID",
    siteName: "ykidnwg Portofolio",
    url: "https://ykidnwg.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "ykidnwg — Pengembang Kreatif",
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
    <html lang="id" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
