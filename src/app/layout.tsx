import type { Metadata } from "next";
import { oswald } from "./font/font";
import { anton } from "./font/font";
import { cinzel } from "./font/font";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "LP Exteriors – Building What Matters",
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
