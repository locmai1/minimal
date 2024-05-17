import type { Metadata } from "next";
import { IBM_Plex_Sans, Merriweather } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loc Mai",
  description: "Loc Mai's Portfolio Website",
  keywords: ["Loc Mai", "Loc", "Portfolio", "Next.js", "React", "Typescript"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.className} bg-noise`}>{children}</body>
    </html>
  );
}
