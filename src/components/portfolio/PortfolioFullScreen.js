"use client";
import React, { useRef } from "react";
import "@/styles/scrollx.scss";
import { portfolioArr } from "@/database/portfolio";
import parse from "html-react-parser";

const HorizontalScrollPage = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const currentSectionRef = useRef(0);

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      // Scroll down
      if (currentSectionRef.current < sectionRefs.length - 1) {
        currentSectionRef.current += 1;
        sectionRefs[currentSectionRef.current].current.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      // Scroll up
      if (currentSectionRef.current > 0) {
        currentSectionRef.current -= 1;
        sectionRefs[currentSectionRef.current].current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }
  };

  return (
    <div className="container-fluid" onWheel={handleScroll}>
      <div className="horizontalContainer">
        {portfolioArr.map((value, index) => (
          <div
            className="horizontalItem"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0, 0.95)), url(${value.Thumb})`,
              backgroundSize: "cover",
            }}
            ref={sectionRefs[index]}
          >
            <div className="container d-flex flex-column align-items-start justify-content-center" style={{height: "100%"}}>
              <h2>{value.Title}</h2>
              <p>{value.Desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollPage;
