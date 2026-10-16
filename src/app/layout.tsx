import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const georgian = localFont({
  src: [
    { path: "../../public/fonts/noto-georgian-400.ttf", weight: "400" },
    { path: "../../public/fonts/noto-georgian-600.ttf", weight: "600" },
    { path: "../../public/fonts/noto-georgian-800.ttf", weight: "800" },
  ],
  variable: "--font-georgian", display: "swap",
});
const display = localFont({ src: "../../public/fonts/manrope-800.ttf", variable: "--font-display", weight: "800", display: "swap" });
export const metadata: Metadata = {
  title: "Emory — Barber & Beauty · თბილისი",
  description: "შენი თავი. შენი წესებით. შეჭრა, ფერი, ბარბერი და მოვლა საბურთალოზე. Emory — გივი კარტოზიას 10, დელისი.",
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ka" className={`${georgian.variable} ${display.variable}`}><body>{children}</body></html>;
}
