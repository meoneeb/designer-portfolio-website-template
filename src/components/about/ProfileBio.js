import { bio } from "@/database/bio";
import Image from "next/image";

export default function ProfileBio() {
  const Name = bio.Name;
  const avatar = bio.Avatar;

  return (
    <>
      <div
        className="containerDiv flex-row align-items-center"
        style={{ gap: 20, width: "100%" }}
      >
        <div
          className="p-1"
          style={{ borderRadius: 100, border: "2px solid var(--primary)" }}
        >
          <Image
            src={avatar}
            width={96}
            height={96}
            style={{ borderRadius: 100 }}
          />
        </div>
        <div>
          <p style={{ fontSize: "larger", fontWeight: 600, margin: 0 }}>
            {Name}
          </p>
          <p
            className="py-1 px-3"
            style={{
              background: "var(--primary10)",
              color: "var(--primary)",
              width: "fit-content",
              margin: 0,
              borderRadius: 100,
            }}
          >
            {bio.FrontPage_Title}
          </p>
        </div>
      </div>
    </>
  );
}
