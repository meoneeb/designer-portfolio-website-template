import { stats } from "@/database/bio";
export default function Stats() {
  return (
    <>
      <div
        className="d-flex flex-nowrap flex-row justify-content-between"
        style={{ width: "100%", gap: 10, marginTop: 10 }}
      >
        {stats.map((value, index) => (
          <div
            key={index}
            className="d-flex flex-column p-4 justify-content-center align-items-center containerDiv"
          >
            <h5 style={{ margin: 0 }}>{value.Value}</h5>
            <p style={{ margin: 0, color: "var(--grey)" }}>{value.Label}</p>
          </div>
        ))}
      </div>
    </>
  );
}
