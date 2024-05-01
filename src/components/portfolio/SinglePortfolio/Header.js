import React from "react";
import GoBackButton from "@/commonComponents/BackButton";

export default function Header({portfolioItem}) {
    return (
        <>
        <div
        className="container-fluid d-flex flex-column justify-content-end pb-4"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0, 0.9)), url(${portfolioItem.Thumb})`,
          backgroundSize: "cover",
          height: 200,
          backgroundPosition: "center center",
        }}
      >
        <div
          className="container d-flex flex-row justify-content-start align-items-center"
          style={{ gap: 20 }}
        >
          <GoBackButton />
          <h2>{portfolioItem.Title}</h2>
        </div>
      </div>
        </>
    )
}