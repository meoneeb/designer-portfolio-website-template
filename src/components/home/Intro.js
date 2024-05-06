"use client";
import Link from "next/link";
import { bio } from "@/database/bio";
import { useDevice } from "../../../helpers/useDevice";
import { motion } from "framer-motion";
import {
  fadeDown,
  fadeDownIn,
  fadeDownOn,
} from "@/commonComponents/motion/animate";

export default function Intro() {
  const { IsMob } = useDevice();
  const title = bio.FrontPage_Title;
  const calcHeight = "calc(100vh - 80px)";
  return (
    <div
      className="container-fluid"
      style={{
        height: calcHeight,
        background:
          "radial-gradient(75% 200% at 100% 100%,var(--primary60) 0%,var(--primary0) 50%)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div
        className="container"
        style={{
          height: "100%",
        }}
      >
        <div
          className="d-flex"
          style={{
            flexDirection: IsMob ? "column-reverse" : "row",
            height: "100%",
          }}
        >
          <motion.div
            initial={fadeDownIn}
            whileInView={fadeDownOn}
            transition={fadeDown}
            className="col-md-6"
            style={{
              height: "100%",
              background:
                "url(https://img.freepik.com/free-photo/portrait-young-beautiful-brunette-woman-girl-model-with-nude-makeup-summer-hipster-clothes-posing-near-wall_158538-8962.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundBlendMode: "multiply",
            }}
          ></motion.div>
          <div
            className="d-flex flex-column justify-content-center col-md-6"
            style={{ height: "100%" }}
          >
            <motion.div
              initial={fadeDownIn}
              whileInView={fadeDownOn}
              transition={fadeDown}
            >
              <h1>
                I'm {bio.Name}, <br />
                {title}
              </h1>
              <p>
                <span>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149059.png"
                    style={{ width: 16, height: 16 }}
                  />
                </span>
                based in Lahore, <i>operates Worldwide</i>
              </p>
              <p
                style={{
                  maxWidth: 500,
                  fontSize: IsMob ? "small" : "",
                  display: IsMob ? "none" : "",
                }}
              >
                Passionate about creating visually stunning designs that not
                only captivate the audience but also enhance user experiences.
              </p>
              <div>
                <Link href="#">
                  <div
                    className="btnPR"
                    style={{ width: "fit-content", maxWidth: "fit-content" }}
                  >
                    Hire me for a Project
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
