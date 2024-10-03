import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import RecoilRoot from "@/HOCs/RecoilRoot";
import Sidenav from "@/components/Sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Home",
  description: "UI for controlling smart home devices and settings"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body className={`max-h-screen overflow-clip ${inter.className}`}>
          <Header />
          <div className="flex items-start">
            <Sidenav />
            {children}
          </div>
        </body>
      </html>
    </RecoilRoot>
  );
}
