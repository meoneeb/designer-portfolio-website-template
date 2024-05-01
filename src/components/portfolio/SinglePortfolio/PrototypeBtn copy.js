import React from "react";
import Link from "next/link";
import { useDevice } from "../../../../helpers/useDevice";

export default function PrototypeBtn({ portfolioItem }) {
  const link = portfolioItem?.PrototypeLink;
  const {IsMob} = useDevice();
  const textColor = "var(--text3)"
  return (
    <>
      <div
        className="d-flex align-items-center py-4 px-4 my-4"
        style={{ background: "var(--primary)", flexDirection: IsMob ? "column":"row"}}
      >
        <div>
          <h3 style={{ color: textColor }}>
            Experience the Live Action!
          </h3>
          <p style={{ margin: 0, color: textColor }}>
            Explore the prototype to discover the essence of our design.
            Interact seamlessly with our product's functionality and intuitive
            interface.
          </p>
        </div>
        <div className="py-2 px-4">
          <Link href={link}>
            
          </Link>
        </div>
      </div>
    </>
  );
}