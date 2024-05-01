"use client";
import { portfolioArr } from "@/database/portfolio";
import Link from "next/link";
import "@/styles/portfolio.scss";
import parse from "html-react-parser";
import { useDevice } from "../../../helpers/useDevice";

export default function PortfolioCard() {
  // Function to convert spaces to hyphens
  const newSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };
  const { IsMob } = useDevice();
  return (
    <div className="d-flex flex-nowrap flex-column">
      {portfolioArr.map((value, index) => (
        <div className="mb-4" key={index}>
          <Link href={`/portfolio/${newSlug(value.Slug)}`}>
            <div
              className="portfolioCard d-flex align-items-center justify-content-start"
              style={{
                gap: 10,
                flexDirection: IsMob ? "column-reverse" : "row",
              }}
            >
              <div className="d-flex flex-column col-md-7">
                <p style={{ margin: 0, color: "var(--primary)" }}>
                  {value.Category}
                </p>
                <h3 style={{ marginBottom: 0 }}>{value.Title}</h3>
                <p style={{ margin: 0, color: "var(--grey)" }}>{value.Date}</p>
                <p
                  className="descThumb"
                  style={{ margin: 0, color: "var(--grey)" }}
                >
                  {parse(value.MetaDesc)}
                </p>
              </div>
              <div className="col-md-5">
                <img
                  className="portfolioImg"
                  src={value.Thumb}
                  alt="thumbnail"
                />
              </div>
            </div>
          </Link>
          <hr className="mt-5" style={{ border: "1px solid var(--outline)" }} />
        </div>
      ))}
    </div>
  );
}
