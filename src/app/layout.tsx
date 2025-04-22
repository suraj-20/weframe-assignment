"use client";

// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import ScrollToTop from "@/components/ScrollToTop";
import { Urbanist } from "next/font/google";
import "../styles/index.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${urbanist.className}`}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
        {/* <ScrollToTop /> */}
      </body>
    </html>
  );
}
