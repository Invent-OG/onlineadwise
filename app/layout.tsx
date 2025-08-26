import Footer from "@/components/sections/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Jost, Caveat } from "next/font/google";
import OfferBanner from "@/components/sections/OfferBanner";
import NavBar from "@/components/sections/NavBar";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});
const caveat = Caveat({ subsets: ["latin"], variable: "--font-handwritten" });

export const metadata: Metadata = {
  title: "OnlineAdwise - Turn Your Salon Into a Fully Booked Business",
  description:
    "Help nail salons & spas attract high-paying repeat clients using Meta Ads, Google Ads, and Smart Automation Systems. Get more bookings without wasting money on ads that don't work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${caveat.variable} ${jost.className}`}>
        <NavBar />
        <OfferBanner />
        {children}

        <Footer />
      </body>
    </html>
  );
}
