"use client";
import React, { useState } from "react";
import { useDevice } from "../../helpers/useDevice";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { menu, menuButtons } from "@/database/menu";
import Navbar from "./Navbar";

export default function Header() {
  const pathname = usePathname();
  const { IsMob } = useDevice();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className="container d-flex justify-content-between align-items-center px-4 flex-row"
        style={{
          // position: "fixed", top: 0,
          width: "100%",
          alignItems: IsMob ? "flex-end" : "center",
          zIndex: 9999999,
          height: 80,
          gap: 10,
          background: "rgba(255,255,255, 1)",
          borderBottom: "1px solid var(--outline)",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center flex-row"
          style={{
            gap: 20,
            height: "100%",
          }}
        >
          <div>
            <Link href={"/"}>
              <span
                style={{ fontSize: 24, fontWeight: 400, whiteSpace: "nowrap" }}
              >
                Sameen Hassan
              </span>
            </Link>
            {/* <span style={{color: "var(--grey)"}}> | Portfolio</span> */}
          </div>
        </div>
        <div
          className="d-flex flex-row justify-content-between align-items-center"
          style={{ width: "100%" }}
        >
          <div className="d-flex flex-row" style={{ width: "100%" }}>
            <div
              className={`hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <div className="d-flex justify-content-center align-items-center">
                <i class="fi fi-br-menu-burger"></i>
              </div>
            </div>
            <div
              className={`menuItems justify-content-between ${
                isMenuOpen ? "open" : ""
              }`}
              style={{ width: "100%" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: IsMob ? "column" : "row",
                }}
              >
                {menu.map((nav, index) => (
                  <Link href={nav.Link} key={index}>
                    <div
                      className={`${
                        (pathname.startsWith(nav.Link) && index !== 0) ||
                        (pathname === nav.Link && index === 0)
                          ? "navActive"
                          : "navItem"
                      }`}
                      style={{ position: "relative" }}
                    >
                      <p style={{ margin: 0 }}>{nav.Label}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div
                className="d-flex"
                style={{
                  gap: 10,
                  flexDirection: IsMob ? "column" : "row",
                  padding: IsMob ? "0px 24px" : "",
                  marginTop: IsMob ? 24 : "",
                }}
              >
                {menuButtons.map((btn, index) => (
                  <Link key={index} href={btn.Link}>
                    <div className={btn.CTA ? "btnPR" : "btnSEC"}>
                      {btn.Label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="d-flex flex-row justify-content-between align-items-center"
          style={{ width: "100%" }}
        >
          <div className="d-flex flex-row">
            {menu.map((nav, index) => (
              <Link href={nav.Link} key={index}>
                <div
                  className={`d-flex justify-content-center align-items-center ${
                    pathname.startsWith(nav.Link) && index !== 0
                      ? "navActive"
                      : "navItem" && pathname === nav.Link && index === 0
                      ? "navActive"
                      : "navItem"
                  }`}
                  style={{ position: "relative" }}
                >
                  <p style={{ margin: 0 }}>{nav.Label}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="d-flex flex-row" style={{ gap: 10 }}>
            {menuButtons.map((btn, index) => (
              <Link key={index} href={btn.Link}>
                <div className={btn.CTA ? "btnPR" : "btnSEC"}>{btn.Label}</div>
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}
