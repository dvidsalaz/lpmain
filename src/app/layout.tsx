import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "LP Exteriors – Building What Matters",
  description: "Building What Matters", // change this in near future
};

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-anton",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-oswald",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
