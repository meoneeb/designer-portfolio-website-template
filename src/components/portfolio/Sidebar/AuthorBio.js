'use client'
import { author } from "@/database/author";
import { useDevice } from "../../../../helpers/useDevice";
export default function AuthorBio() {
  const { IsMob } = useDevice();
  const bioOni = author.oneeb;
  return (
    <>
      <div
        className="containerDiv justify-content-start align-items-start"
        style={{ gap: 20, flexDirection: IsMob ? "column" : "row", width: "100%" }}
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
              src={bioOni.Avatar}
              alt={bioOni.Name}
              style={{ width: 96, height: 96, borderRadius: 100, margin: 0 }}
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
          <p style={{ margin: 0, fontSize: "large" }}>
            {bioOni.Name}
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
              {bioOni.Role}
            </span>
          </p>
          <p style={{ margin: 0, color: "#777", fontSize: "medium" }}>
            {bioOni.Job}
          </p>
          <p style={{ margin: 0, color: "#777", fontSize: "small" }}>
            {bioOni.Bio}
          </p>
        </div>
      </div>
    </>
  );
}
