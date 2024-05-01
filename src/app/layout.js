"use client";
import { Inter, Syne } from "next/font/google";
import SideNavBar from "@/commonComponents/SideNavBar";
import "./globals.scss";
import Attribution from "@/commonComponents/Attribution";

const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <Attribution />
        <SideNavBar />
        {children}
      </body>
    </html>
  );
}
