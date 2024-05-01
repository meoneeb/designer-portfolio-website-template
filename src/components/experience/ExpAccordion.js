"use client";
import { useState } from "react";
import parse from "html-react-parser";
import "@/styles/items.scss";
import { useDevice } from "../../../helpers/useDevice";

export default function ExpAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { IsMob } = useDevice();

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={` ${openIndex === index ? "ItemExpActive" : ""}`}
          style={{padding: IsMob ? "10px" : ""}}
        >
          <div
            className="ItemExp"
            onClick={() => toggleAccordion(index)}
            style={{ cursor: "pointer", padding: IsMob ? "10px" : "" }}
          >
            <div
              key={index}
              className="d-flex flex-row flex-nowrap justify-content-between align-items-center"
            >
              <div>
                <p style={{ margin: 0 }}>
                  {item.Title}, {item.Company}
                </p>
                <p style={{ margin: 0, color: "var(--grey)" }}>
                  {item.StartDate} - {item.EndDate}
                </p>
              </div>
              <div
                onClick={() => toggleAccordion(index)}
                style={{ cursor: "pointer" }}
              >
                <i
                  className={`fi fi-br-angle-down toggleIcon ${
                    openIndex === index ? "fi fi-br-angle-up" : ""
                  }`}
                ></i>
              </div>
            </div>
          </div>
          {openIndex === index && (
            <div className="accordion-content">{parse(item.Desc)}</div>
          )}
        </div>
      ))}
    </div>
  );
};