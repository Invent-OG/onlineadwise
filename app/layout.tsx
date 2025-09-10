import Footer from "@/components/sections/Footer";
import "./globals.css";
import { Jost, Caveat } from "next/font/google";
import OfferBanner from "@/components/sections/OfferBanner";
import NavBar from "@/components/sections/NavBar";
import { Providers } from "./providers";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Use only the variable classes */}
      <body className={`${jost.variable} ${caveat.variable}`}>
        <Providers>
          <NavBar />
          <OfferBanner />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
