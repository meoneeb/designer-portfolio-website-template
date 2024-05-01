"use client";
import { portfolioArr } from "@/database/portfolio";
import { useDevice } from "../../../../helpers/useDevice";
import "@/styles/portfolio.scss";
import "@/styles/buttons.scss";
export default function FeaturedPortfolio() {
  const { IsMob } = useDevice();
// Function to convert spaces to hyphens
const newSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };
  return (
    <>
      <div
        className="container-fluid"
        style={{
          height: "100vh",
          width: "100vw",
          overflowY: "scroll",
        }}
      >
        {portfolioArr.map((item, index) => (
          <div
            className="row"
            key={index}
            style={{
              height: "100vh",
              position: "sticky",
              top: 0,
            }}
          >
            <div
              className="col-md-6 d-flex justify-content-center align-items-start flex-column p-5"
              style={{
                height: IsMob ? "50%" : "100%",
                background: "var(--bg-main)",
              }}
            >
              <h1>{item.Title}</h1>
              <p className="descThumb">{item.MetaDesc}</p>
              <a className="btn-text2" href={newSlug(item.Slug)}>
                View Portfolio{" "}
                <i
                  className="fi fi-br-arrow-up-right"
                  style={{ fontSize: "medium" }}
                ></i>
              </a>
            </div>
            <div
              className="col-md-6 d-flex justify-content-center align-items-center"
              style={{
                height: IsMob ? "50%" : "100%",
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.95),rgba(0,0,0,0.9)) , url(${item.Thumb})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <img src={item.Thumb} style={{ width: "90%" }} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
