"use client"
import { expArr } from "@/database/experience";
import ExpAccordion from "./ExpAccordion";
import { motion } from "framer-motion";
import {
  fadeDown,
  fadeDownIn,
  fadeDownOn,
} from "@/commonComponents/motion/animate";

export default function ExpDetails() {
  const items = expArr;
  return (
    <>
      <motion.div
        initial={fadeDownIn}
        whileInView={fadeDownOn}
        transition={fadeDown}
      >
        <div className="containerDiv">
          <h3 style={{ color: "var(--text)", marginBottom: 20 }}>Experience</h3>
          <ExpAccordion items={items} />
        </div>
      </motion.div>
    </>
  );
}
