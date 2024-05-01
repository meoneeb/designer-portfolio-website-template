import React from "react";
import { expArr } from "@/database/experience";

export default function ExperienceCards() {
  return (
    <div className="exp-card-container my-2 py-4">
      <div className="d-flex flex-row gap-4 flex-nowrap mx-4">
        {expArr.map((value, index) => (
          <div
            key={index}
            className={`exp-card ${value.Featured ? 'exp-card-featured' : ''}`}
          >
            <span>{value.Title},</span>
            <span>{value.Company}</span>
            <span>
              {value.StartDate} - {value.EndDate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
