import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0b",
};

export const metadata: Metadata = {
  title: "ykidnwg | Tukang Pecut Ey Ay",
  description:
    "Muhamad Wildan Mubarok - Tukang Pecut Ey Ay dari Sukabumi. Teuing Tenyaho kur tes.",
  keywords: [
    "ykidnwg",
    "Muhamad Wildan Mubarok",
    "Developer",
    "Portfolio",
    "Sukabumi",
  ],
  authors: [{ name: "Muhamad Wildan Mubarok" }],
  openGraph: {
    title: "ykidnwg | Tukang Pecut Ey Ay",
    description:
      "Muhamad Wildan Mubarok - Tukang Pecut Ey Ay dari Sukabumi.",
    type: "website",
    locale: "id_ID",
    siteName: "ykidnwg Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "ykidnwg | Tukang Pecut Ey Ay",
    description:
      "Muhamad Wildan Mubarok - Tukang Pecut Ey Ay dari Sukabumi.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} style={{ scrollBehavior: "smooth" }}>
      <body className={`${inter.className} antialiased bg-background text-text`}>
        {children}
      </body>
    </html>
  );
}
