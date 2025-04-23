"use client";

// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import ScrollToTop from "@/components/ScrollToTop";
import { Urbanist } from "next/font/google";
import "../styles/index.css";
import Sidebar from "@/components/Sidebar";

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
        <div className="relative h-screen flex">
          <Sidebar />

          {/* Main content: pushes right only on desktop */}
          <main
            className="flex-1 overflow-y-auto p-4"
            // style={{ marginLeft: "200px" }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
