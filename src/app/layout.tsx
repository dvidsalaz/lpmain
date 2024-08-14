import type { Metadata } from "next";
import { Oswald, Anton } from "next/font/google";
import "@/styles/globals.css";

const oswald = Oswald({ subsets: ["latin"], display: "swap" });
const anton = Anton({ subsets: ["latin"], display: "swap", weight: "400" });

export const metadata: Metadata = {
  title: "LP Construction – Building What Matters",
  description: "Building What Matters", // change this in near future
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anton.className}>{children}</body>
    </html>
  );
}
