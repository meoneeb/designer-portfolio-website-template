"use client";
import { useState } from "react";
import { useDevice } from "../../helpers/useDevice";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { menu } from "@/database/menu";

// Custom tooltip component
const Tooltip = ({ label, style }) => {
  return (
    <div className="tooltip-card" style={style}>
      {label}
    </div>
  );
};

export default function SideNavBar(params) {
  const pathname = usePathname();
  const hiddenPages = ["/portfolio/featured"]; // ADD PAGE URL TO HIDE SIDE NAVBAR
  const Hide = hiddenPages.includes(pathname);

  const { IsWeb, IsMob } = useDevice();

  const [tooltipLabel, setTooltipLabel] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (label, event) => {
    const iconRect = event.target.getBoundingClientRect(); // Get the bounding rectangle of the icon
    const xPos = iconRect.right - 20; // Set the X position to the right of the icon
    const yPos = iconRect.top - 160; // Set the Y position to the middle of the icon

    setTooltipLabel(label);
    setTooltipPosition({ x: xPos, y: yPos });
  };

  const handleMouseLeave = () => {
    setTooltipLabel(null);
  };

  return (
    <>
      {!Hide && (
        <div
          className="d-flex justify-content-center px-4"
          style={{
            position: "fixed",
            bottom: IsMob ? 20 : "",
            left: 0,
            width: IsMob ? "100%" : "",
            alignItems: IsMob ? "flex-end" : "center",
            zIndex: 9999999,
            // border: "1px solid red",
            height: IsMob ? "" : "100vh",
            flexDirection: IsMob ? "row" : "column",
            gap: 10,
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              gap: IsMob ? 0 : 20,
              border: "1px solid var(--primary)",
              borderRadius: 10,
              background: "var(--dark)",
              height: "fit-content",
              // boxShadow: "0px 12px 20px -14px #000",
              position: "relative", // Make container position relative
              flexDirection: IsMob ? "row" : "column",
              padding: IsMob ? "10px" : "20px 10px",
            }}
          >
            {menu.map((value, index) => (
              <Link href={value.Link} key={index}>
                <div
                  className={`d-flex justify-content-center align-items-center ${
                    pathname.startsWith(value.Link) && index !== 0
                      ? "iconMenuActive"
                      : "iconMenuContainer" &&
                        pathname === value.Link &&
                        index === 0
                      ? "iconMenuActive"
                      : "iconMenuContainer"
                  }`}
                  style={{ position: "relative" }}
                  onMouseEnter={(e) => handleMouseEnter(value.Label, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  <i
                    className={`iconMenu ${value.Icon}`}
                    style={{ margin: 0, fontSize: 16 }}
                  ></i>
                </div>
              </Link>
            ))}

            {/* Conditional rendering of tooltip */}
            {tooltipLabel && (
              <Tooltip
                label={tooltipLabel}
                style={{
                  position: "absolute",
                  backgroundColor: "var(--bg-main)",
                  padding: "8px",
                  borderRadius: "5px",
                  // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                  zIndex: 9999,
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  left: tooltipPosition.x,
                  top: tooltipPosition.y,
                }}
              />
            )}
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              gap: 20,
              border: "1px solid var(--primary)",
              borderRadius: 10,
              background: "var(--primary)",
              height: "fit-content",
              // boxShadow: "0px 12px 20px -14px #000",
              position: "relative", // Make container position relative
              flexDirection: IsMob ? "row" : "column",
              padding: 10,
            }}
          >
            <Link href="/pdf/resume-oneeb-apr24.pdf" target="_blank">
              <div
                className={`d-flex justify-content-center align-items-center`}
                style={{ position: "relative", height: 48, width: 48 }}
                onMouseEnter={(e) => handleMouseEnter("Download CV", e)}
                onMouseLeave={handleMouseLeave}
              >
                <i
                  className={`iconMenu fi fi-br-down-to-line`}
                  style={{ margin: 0, fontSize: 16, color: "var(--bg-main)" }}
                ></i>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
