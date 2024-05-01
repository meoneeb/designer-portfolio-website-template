import Link from "next/link";
import { useEffect, useState } from "react";
import { portfolioArr } from "@/database/portfolio";

export default function PortfolioNavigate({ portfolioItem }) {
  const newSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    if (portfolioItem && portfolioItem?.Slug) {
      const newSlug = portfolioItem?.Slug.toLowerCase().replace(/\s+/g, "-");

      // Find the index of the current portfolio item in the array
      const index = portfolioArr.findIndex(
        (value) => newSlug === value.Slug.toLowerCase().replace(/\s+/g, "-")
      );

      setCurrentIndex(index);
    }
  }, [portfolioItem]);

  let prev = null;
  let next = null;
  let prevTitle = null;
  let nextTitle = null;

  if (
    currentIndex !== null &&
    currentIndex >= 0 &&
    currentIndex < portfolioArr.length
  ) {
    prev = currentIndex - 1 >= 0 ? portfolioArr[currentIndex - 1].Slug : null;
    prevTitle =
      currentIndex - 1 >= 0 ? portfolioArr[currentIndex - 1].Title : null;
    next =
      currentIndex + 1 < portfolioArr.length
        ? portfolioArr[currentIndex + 1].Slug
        : null;
    nextTitle =
      currentIndex + 1 < portfolioArr.length
        ? portfolioArr[currentIndex + 1].Title
        : null;
  } else {
    console.log("Invalid index:", currentIndex);
  }

  return (
    <>
      <div
        className="d-flex flex-row justify-content-center align-items-center"
        style={{
          width: "100%",
          background: "var(--bg-lighter)",
        }}
      >
        {prev && (
          <div
            className="d-flex flex-column justify-content-center align-items-start p-2"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Link href={`/portfolio/${newSlug(prev)}`}>
              <p style={{ color: "var(--text3)", margin: 0 }}>
                <b style={{ color: "var(--text3)" }}>Previous:</b> {prevTitle}
              </p>
              <i
                className="fi fi-br-arrow-left"
                style={{ color: "var(--text3)" }}
              ></i>
            </Link>
          </div>
        )}

        {next && (
          <div
            className="d-flex flex-column justify-content-center align-items-end p-2"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Link
              href={`/portfolio/${newSlug(next)}`}
              style={{ textAlign: "right" }}
            >
              <p style={{ color: "var(--text3)", margin: 0 }}>
                <b style={{ color: "var(--text3)" }}>Next:</b> {nextTitle}
              </p>
              <i
                className="fi fi-br-arrow-right"
                style={{ color: "var(--text3)" }}
              ></i>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
