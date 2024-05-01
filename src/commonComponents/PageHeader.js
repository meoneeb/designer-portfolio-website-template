export default function PageHeader(props) {
  return (
    <div className="">
      <div
        className="d-flex flex-column justify-content-center align-items-center mb-4"
        style={{
          background: "var(--bg-main)",
          minHeight: 200,
          maxHeight: "fit-content",
        }}
      >
        <h1 style={{ textAlign: "center" }}>{props.Title}</h1>
      </div>
    </div>
  );
}
