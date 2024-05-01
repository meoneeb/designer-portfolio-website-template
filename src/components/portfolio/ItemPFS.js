import { portfolioArr } from "@/database/portfolio";
import Link from "next/link";
export default function ItemPFS() {
  // Function to convert spaces to hyphens
  const newSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };
  return (
    <div className="">
      <div
        className="d-flex flex-column justify-content-start align-items-start p-4 containerDiv"
        
      >
        <div
          className="d-flex flex-row flex-nowrap justify-content-between align-items-start pb-2"
          style={{ width: "100%" }}
        >
          <p style={{ color: "var(--primary)" }}>Portfolio</p>
          <a className="text-btn-sml" href="/portfolio">
            <span className="">See more </span>
            <i className="fi fi-br-arrow-up-right" style={{ fontSize: 10 }}></i>
          </a>
        </div>
        {portfolioArr.map((value, index) => {
          if (index < 1)
            return (
              <div key={index}>
                <Link href={`/portfolio/${newSlug(value.Slug)}`}>
                  <div className="ItemPFS">
                    <img
                      src={value.Thumb}
                      alt={value.Title}
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </Link>
              </div>
            );
        })}
      </div>
    </div>
  );
}
