import { portfolioArr } from "@/database/portfolio";
export default function ProjectDetails({ portfolioItem }) {
  const Type = portfolioItem?.ProjectType;
  const Duration = portfolioItem?.Duration;
  const Collaboration = portfolioItem?.Collaboration;
  const Role = portfolioItem?.MyRole;
  return (
    <>
      <div
        className="d-flex flex-row flex-wrap p-4 mb-4 row"
        style={{ background: "var(--bg-lighter" }}
      >
        <div className="col-md-6">
          <div className="py-2">
            <h5>Project Type</h5>
            <p style={{ color: "var(--text)", margin: 0 }}>{Type}</p>
          </div>
          <div className="py-2">
            <h5>My Role</h5>
            <p
              style={{
                color: "var(--text)",
                margin: 0,
                width: "fit-content",
              }}
            >
              {Role}
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="py-2">
            <h5>Duration</h5>
            <p style={{ color: "var(--text)", margin: 0 }}>{Duration}</p>
          </div>
          <div className="py-2">
            <h5>Collaboration</h5>
            <p style={{ color: "var(--text)", margin: 0 }}>{Collaboration}</p>
          </div>
        </div>
      </div>
    </>
  );
}
