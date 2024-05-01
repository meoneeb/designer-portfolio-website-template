export default function Attribution() {
  return (
    <div
      style={{
        background: "#1e1e1e",
        position: "fixed",
        bottom: 10,
        left: 0,
        zIndex: 9999999999,
        padding: "5px 20px",
      }}
    >
      <p style={{ margin: 0, fontSize: "small" }}>
        Designed & Developed by{" "}
        <b>
          <a href="https://meoneeb.com" style={{ color: "rgba(143,255,0,1)" }}>
            Oneeb Faisal
          </a>
        </b>
      </p>
    </div>
  );
}
