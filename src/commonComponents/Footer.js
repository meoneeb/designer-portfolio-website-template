"use client";
import React from "react";
import Link from "next/link";
import { useDevice } from "../../helpers/useDevice";
import { sociallinks } from "@/database/bio";

export default function Footer() {
  const { IsMob } = useDevice();
  return (
    <div
      className="fluid-container"
      style={{
        textAlign: "center",
      }}
    >
      {/* <div
        className="container d-flex pt-5"
        style={{
          flexDirection: IsMob ? "column" : "row",
          background: "var(--dark)",
          borderRadius: "20px 20px 0px 0px",
          border: "1px solid var(--outline)",
          paddingBottom: IsMob ? 100 : 50,
        }}
      >
        <div className="col-md-4 d-flex justify-content-start align-items-start px-4">
          <img
            src="/logo/logo.svg"
            alt="meoneeb.com"
            style={{ maxWidth: 240, width: "100%" }}
          />
        </div>
        <div className="col-md-2 d-flex flex-column">
          <Link className="footerLink" href="/">
            Home
          </Link>
          <Link className="footerLink" href="/portfolio">
            Portfolio
          </Link>
          <Link className="footerLink" href="/contact">
            Contact
          </Link>
        </div>

        <div className="col-md-2 d-flex flex-column">
          <Link className="footerLink" href="/bio">
            Bio
          </Link>
          <Link className="footerLink" href="/bio">
            Experience
          </Link>
          <Link className="footerLink" href="/portfolio">
            Portfolio
          </Link>
          <Link
            className="footerLinkBtn"
            href="/pdf/resume-oneeb-apr24.pdf"
            target="_blank"
            style={{
              border: "1px solid var(--primary)",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Download CV
          </Link>
        </div>

        <div className="col-md-4">
          <div
            className="d-flex flex-row flex-wrap mt-3 justify-content-start"
            style={{ gap: 10, width: "100%" }}
          >
            {sociallinks.map((value, index) => (
              <Link href={value.Link} target="_blank">
                <div
                  key={index}
                  className="d-flex flex-wrap flex-row brandsIcon justify-content-center align-items-center"
                >
                  <i
                    className={`icon ${value.Icon}`}
                    style={{ margin: 0, fontSize: 24 }}
                  ></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
