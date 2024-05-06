"use client";
import { academicsArr } from "@/database/bio";
import { useDevice } from "../../../helpers/useDevice";
import SectionBtn from "@/commonComponents/SectionBtn";
import { motion } from "framer-motion";
import {
  fadeDown,
  fadeDownIn,
  fadeDownOn,
} from "@/commonComponents/motion/animate";

export default function Academics() {
  const { IsMob } = useDevice();
  return (
    <motion.div
      initial={fadeDownIn}
      whileInView={fadeDownOn}
      transition={fadeDown}
    >
      <div
        className="d-flex"
        style={{
          gap: 20,
          flexDirection: IsMob ? "column" : "row",
          width: "100%",
        }}
      >
        <div
          className="d-flex flex-column gap-3"
          style={{ width: IsMob ? "100%" : "50%" }}
        >
          <div className="containerDiv">
            <h3 style={{ color: "var(--text)", marginBottom: 20 }}>
              Academics
            </h3>
            <div>
              {academicsArr.map((value, index) => {
                if (value.Course === false)
                  return (
                    <div key={index} className="ItemExp">
                      <p style={{ margin: 0 }}>
                        {value.Degree}{" "}
                        <span style={{ color: "#777" }}>{value.Duration}</span>
                      </p>
                      <p style={{ margin: 0 }}>{value.Institute}</p>
                    </div>
                  );
              })}
            </div>
          </div>
          <div>
            <SectionBtn
              Label="Download CV"
              Path="/pdf/resume-oneeb-apr24.pdf"
              target="_blank"
            />
          </div>
        </div>
        <div
          className="containerDiv"
          style={{ flexGrow: 1, width: IsMob ? "100%" : "50%" }}
        >
          <h3 style={{ color: "var(--text)", marginBottom: 20 }}>Courses</h3>
          <div>
            {academicsArr.map((value, index) => {
              if (value.Course === true)
                return (
                  <div
                    key={index}
                    className="ItemExp"
                    style={{ width: "100%" }}
                  >
                    <p style={{ margin: 0 }}>
                      {value.Degree}{" "}
                      <span style={{ color: "#777" }}>{value.Duration}</span>
                    </p>
                    <p style={{ margin: 0 }}>{value.Institute}</p>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
