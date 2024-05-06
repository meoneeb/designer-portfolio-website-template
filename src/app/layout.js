"use client";
import { Red_Hat_Display } from "next/font/google";
import "./globals.scss";
import Attribution from "@/commonComponents/Attribution";
// import Navbar from "@/commonComponents/Header";
import Header from "@/commonComponents/Header";
import { motion } from "framer-motion";
import {
  fadeDown,
  fadeDownIn,
  fadeDownOn,
} from "@/commonComponents/motion/animate";

const font = Red_Hat_Display({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <motion.div
          initial={fadeDownIn}
          whileInView={fadeDownOn}
          transition={fadeDown}
        >
          <Header />
        </motion.div>

        {children}
        <Attribution />
      </body>
    </html>
  );
}
