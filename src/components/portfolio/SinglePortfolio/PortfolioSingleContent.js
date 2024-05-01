import React from "react";
import parse from "html-react-parser";

export default function PortfolioSingleContent({portfolioItem}) {
  return (
    <>
      <div>
        {/* Render description */}
        <p>{portfolioItem.Desc}</p>
        
      </div>
    </>
  );
}
