import { Oswald, Cinzel, Anton } from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--oswald-font",
});
export const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--cinzel-font",
});
export const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--anton-font",
});
