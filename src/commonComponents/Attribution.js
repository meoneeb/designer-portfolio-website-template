export default function Attribution() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        background: "#f9f9f9",
        padding: "5px 20px",
        zIndex: 999999999,
        borderTop: "1px solid var(--outline)"
      }}
    >
      <div>
        <p style={{ margin: 0, fontSize: "small", color: "#030303" }}>
          Powered by <a href="https://meoneeb.com">www.meoneeb.com</a>
           {/* - CREATE YOUR WEBSITE NOW! */}
        </p>
      </div>
    </div>
  );
}
