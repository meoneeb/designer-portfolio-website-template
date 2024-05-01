import React from "react";
import { useDevice } from "../../../../helpers/useDevice";
import CreateAmazingCTA from "@/components/home/CreateAmazingCTA";

export default function SideContent({ portfolioItem }) {
  const { IsMob } = useDevice();
  return (
    <>
      <div className="">
        <div>
          <p>Date Posted: {portfolioItem.Date}</p>
          {/* Render tags */}
          <p>Related Tags:</p>
          <div className="d-flex flex-wrap gap-2">
            {portfolioItem.Tags.map((tag, index) => (
              <div
                key={index}
                className="d-flex justify-content-center align-items-center mr-2"
                style={{
                  height: 24,
                  padding: 12,
                  border: "1px solid #777",
                  color: "#777",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          {/* Render Author Bio */}
          <div
            className="containerDiv justify-content-start align-items-start"
            style={{
              gap: 20,
              flexDirection: IsMob ? "column" : "row",
              width: "100%",
            }}
          >
            <div
              className="d-flex flex-column justify-content-start align-items-center"
              style={{ gap: 10 }}
            >
              <div
                className="d-flex p-1"
                style={{
                  border: "2px solid var(--primary)",
                  width: "fit-content",
                  borderRadius: 100,
                  boxShadow: "20px 5px 20px -20px var(--primary)",
                }}
              >
                <img
                  src={portfolioItem.Author.Avatar}
                  alt={portfolioItem.Author.Name}
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: 100,
                    margin: 0,
                  }}
                />
              </div>

              <a
                href="/bio"
                style={{
                  whiteSpace: "nowrap",
                  padding: "5px 10px",
                  fontSize: "small",
                  border: "1px solid var(--primary)",
                  borderRadius: 10,
                }}
              >
                Complete Profile
              </a>
            </div>
            <div>
              <h3>About Author</h3>
              <p style={{ margin: 0, fontSize: "larger", fontWeight: 500 }}>
                {portfolioItem.Author.Name}
                <span
                  style={{
                    fontSize: "small",
                    color: "var(--primary)",
                    textTransform: "uppercase",
                    borderRadius: 100,
                    padding: "5px 10px",
                    background: "var(--primary20)",
                    marginLeft: 4,
                  }}
                >
                  {portfolioItem.Author.Role}
                </span>
              </p>
              <p style={{ margin: 0, color: "#777", fontSize: "medium" }}>
                {portfolioItem.Author.Job}
              </p>
              <p style={{ margin: 0, color: "#777", fontSize: "small" }}>
                {portfolioItem.Author.Bio}
              </p>
              {/* <p>No. of Posts: {count}</p> */}
            </div>
          </div>
          <CreateAmazingCTA />
        </div>
      </div>
    </>
  );
}
