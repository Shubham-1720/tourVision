import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: "TourVision - Your Perfect Travel Partner",
  description: "Discover amazing destinations with TourVision. We offer comprehensive travel services including tour guides, accommodation, transportation, and complete travel packages.",
  keywords: "tours, travel, vacation, holidays, tour guide, hotels, transportation, travel packages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
