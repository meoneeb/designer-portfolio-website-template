export default function MyButton(props) {
  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center px-4"
      style={{ background: "var(--primary)", color: "#000", borderRadius: 4, width: "fit-content", height: 40 }}
    >
      {props.children}
    </div>
  );
}
