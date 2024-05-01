import { bio } from "@/database/bio";
import React from "react";

export default function AboutMe() {
  return (
    <>
      <div>
        <div
          className="d-flex flex-column p-4 containerDiv"
          style={{
            boxShadow: "40px 20px 60px -60px var(--primary)",
          }}
        >
          <h6 style={{ color: "var(--primary)" }}>{bio.Role}</h6>
          <span>About Me</span>
          <p style={{ color: "var(--grey)" }}>{bio.BioShort}</p>
        </div>
      </div>
    </>
  );
}
