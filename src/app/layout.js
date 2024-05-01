"use client";
import { Inter, Syne } from "next/font/google";
import SideNavBar from "@/commonComponents/SideNavBar";
import "./globals.scss";
import Attribution from "@/commonComponents/Attribution";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // const pathname = usePathname();

  // useEffect(() => {
  //   AOS.init({ duration: 1000 });

  //   pathname.events.on("routeChangeStart", progress.start);
  //   pathname.events.on("routeChangeComplete", progress.finish);
  //   pathname.events.on("routeChangeError", progress.finish);
  // }, []);

  return (
    <html lang="en">
      <body className={syne.className}>
        <SideNavBar />
        <Attribution />
        {children}
      </body>
    </html>
  );
}
