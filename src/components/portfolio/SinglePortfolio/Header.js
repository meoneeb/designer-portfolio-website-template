import React from "react";
import GoBackButton from "@/commonComponents/BackButton";

export default function Header({portfolioItem}) {
    return (
        <>
        <div
        className="container-fluid d-flex flex-column justify-content-start align-items-center pt-5"
        style={{
          minHeight: 200,
        }}
      >
        <div
          className=" d-flex flex-column justify-content-start align-items-center pb-4"
          style={{ gap: 0 }}
        >
          <GoBackButton />
          <h2 style={{margin: 0}}>{portfolioItem.Title}</h2>
          <p style={{margin:0, color: "var(--primary)"}}>{portfolioItem.Date}</p>
        </div>
      </div>
        </>
    )
}