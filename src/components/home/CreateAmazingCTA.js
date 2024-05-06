import React from "react";
import Link from "next/link";

export default function CreateAmazingCTA() {
  return (
    <>
      <div className="">
        <div className="d-flex flex-column justify-content-center align-items-center p-3 my-3">
          <h4 style={{ textAlign: "center" }}>
            Want to create{" "}
            <i>
              <span style={{ color: "var(--primary)" }}>something amazing</span>
              ?
            </i>
          </h4>
          <p style={{ textAlign: "center" }}>
            Elevate user experience by unleashing your design brilliance with
            us!
          </p>

          <Link
            href="mailto:hi@sameeen.com"
            className="email-link"
            target="_blank"
          >
            <h2
              style={{
                margin: 0,
                fontWeight: "600",
                textAlign: "center",
                width: "fit-content",
              }}
            >
              hi@sameeen.com
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}
