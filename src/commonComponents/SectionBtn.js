import Link from "next/link";

export default function SectionBtn(props) {
  return (
    <>
      <Link href={props.Path} target={props.target}>
        <div
          className="d-flex justify-content-center align-items-center px-2 py-3"
          style={{ background: "var(--primary)", borderRadius: 20 }}
        >
          <p style={{ color: "var(--dark)", margin: 0, fontWeight: 600 }}>
            {props.Label}
          </p>
        </div>
      </Link>
    </>
  );
}
