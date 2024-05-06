"use client";
import React from "react";
import { portfolioArr } from "@/database/portfolio";
import Link from "next/link";
import "@/styles/portfolio.scss";
import parse from "html-react-parser";
import { useDevice } from "../../../helpers/useDevice";
import { motion } from "framer-motion";
import {
  fadeDown,
  fadeDownIn,
  fadeDownOn,
} from "@/commonComponents/motion/animate";

export default function PortfolioCard() {
  const { IsMob } = useDevice();

  const newSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="d-flex flex-nowrap flex-column">
      {portfolioArr.map((value, index) => (
        <motion.div
          className="mb-4"
          key={index}
          initial={fadeDownIn}
          whileInView={fadeDownOn}
          transition={fadeDown}
        >
          <Link href={`/portfolio/${newSlug(value.Slug)}`}>
            <div
              className="portfolioCard d-flex align-items-center justify-content-start"
              style={{
                gap: 10,
                flexDirection: IsMob ? "column-reverse" : "row",
              }}
            >
              <div className="d-flex flex-column col-md-7">
                <p style={{ margin: 0, color: "var(--primary)" }}>
                  {value.Category}
                </p>
                <h3 style={{ marginBottom: 0 }}>{value.Title}</h3>
                <p style={{ margin: 0, color: "var(--grey)" }}>{value.Date}</p>
                <p
                  className="descThumb"
                  style={{ margin: 0, color: "var(--grey)" }}
                >
                  {parse(value.MetaDesc)}
                </p>
              </div>
              <div className="col-md-5">
                <img
                  className="portfolioImg"
                  src={value.Thumb}
                  alt="thumbnail"
                />
              </div>
            </div>
          </Link>
          <hr className="mt-5" style={{ border: "1px solid var(--outline)" }} />
        </motion.div>
      ))}
    </div>
  );
}
