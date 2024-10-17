import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/hero-components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Vidhan Reddy",
  description: "A Vidhan Reddy's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar className="top-2" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
