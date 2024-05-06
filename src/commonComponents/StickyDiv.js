"use client";
import AboutPage from "@/components/about/AboutPage";
import { useState, useEffect } from "react";

const StickyDiv = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const divElement = document.getElementById("stickyDiv");
      const rect = divElement.getBoundingClientRect();
      const offset = window.pageYOffset || document.documentElement.scrollTop;

      if (rect.top <= 0 && !isSticky) {
        setIsSticky(true);
        divElement.classList.add("sticky");
      } else if (offset < rect.top && isSticky) {
        setIsSticky(false);
        divElement.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <div id="stickyDiv" className="container">
      {/* Add your content inside the sticky div */}
      <div className="content" style={{height: "100vh", overflowY: "scroll"}}>
            <AboutPage/>
      </div>
    </div>
  );
};

export default StickyDiv;
