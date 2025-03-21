import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import EmailBanner from "@/layout/EmailBanner";
import GoogleAddressSection from "@/layout/GoogleAddressSection";
import Footer from "@/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SAZARAAT & FISHERIES",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts link for Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col font-poppins">
          <Navbar />
          <div className="mt-[96px]">{children}</div>
          <EmailBanner />
          <GoogleAddressSection />
          <Footer />
        </div>
      </body>
    </html>
  );
}
