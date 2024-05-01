"use client";
import { useDevice } from "../../../helpers/useDevice";
import Link from "next/link";
import { sociallinks, details } from "@/database/bio";
export default function Contact() {
  const { IsWeb, IsMob } = useDevice();

  return (
    <>
      <div
        className="d-flex justify-content-start align-items-start p-4 containerDiv"
        style={{
          gap: 20,
        }}
      >
        {details.map((value, index) => (
          <div
            className="d-flex flex-row justify-content-start align-items-start"
            style={{ width: "100%", borderBottom: "1px solid #222" }}
          >
            <div style={{ width: "40%" }}>
              <p style={{ color: "var(--grey)" }}>{value.Label}</p>
            </div>
            <div style={{ width: "60%" }}>
              <p>{value.Value}</p>
            </div>
          </div>
        ))}
        <div
          className="d-flex flex-row flex-wrap mt-3 justify-content-start"
          style={{ gap: 10, width: "100%" }}
        >
          {sociallinks.map((value, index) => (
            <Link href={value.Link} target="_blank">
              <div
                key={index}
                className="d-flex flex-wrap flex-row brandsIcon justify-content-center align-items-center"
              >
                <i
                  className={`icon ${value.Icon}`}
                  style={{ margin: 0, fontSize: 24 }}
                ></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
