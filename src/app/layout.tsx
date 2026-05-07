import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BikeWash Pro | Premium Bike Wash Booking",
  description: "Experience the premium bike wash booking platform. Fast, reliable, and convenient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased selection:bg-brand-green/30 selection:text-white">
      <body className={`${inter.variable} font-sans min-h-full bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
