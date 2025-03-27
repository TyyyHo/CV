import type { Metadata } from "next";

// import ScrollContainer from "./scroll-container";
import Background from "./components/background";
import Navigation from "./components/navigation";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV",
  description: "Tyler's CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen relative">
          <Background />
          {children}
          <Navigation />

          {/* <ScrollContainer>{children}</ScrollContainer> */}
        </div>
      </body>
    </html>
  );
}
