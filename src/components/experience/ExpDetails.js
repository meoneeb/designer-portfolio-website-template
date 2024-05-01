import { expArr } from "@/database/experience";
import ExpAccordion from "./ExpAccordion";

export default function ExpDetails() {
    const items = expArr
  return (
    <>
      <div>
        
        <div className="containerDiv">
        <h3 style={{ color: "var(--primary)", marginBottom: 20 }}>
          Experience
        </h3>
          <ExpAccordion items={items} />
        </div>
      </div>
    </>
  );
}
