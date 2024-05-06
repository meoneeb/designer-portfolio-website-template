"use client";

import { bio } from "@/database/bio";
import React from "react";
import { motion } from "framer-motion";
import {
  fadeDown,
  fadeDownIn,
  fadeDownOn,
} from "@/commonComponents/motion/animate";

export default function AboutMe() {
  return (
    <motion.div
      initial={fadeDownIn}
      whileInView={fadeDownOn}
      transition={fadeDown}
    >
      <div
        className="d-flex flex-column p-4 containerDiv"
        style={{
          boxShadow: "40px 20px 60px -60px var(--primary)",
        }}
      >
        <h6 style={{ color: "var(--primary)" }}>{bio.Role}</h6>
        <span>About Me</span>
        <p style={{ color: "var(--grey)" }}>{bio.BioShort}</p>
      </div>
    </motion.div>
  );
}
