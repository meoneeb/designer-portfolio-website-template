import { expArr } from "@/database/experience";
import "@/styles/items.scss";

export default function ItemExp(props) {
  return (
    <div className="">
      <div className="d-flex flex-column justify-content-start align-items-start p-4 containerDiv">
        <div
          className="d-flex flex-row flex-nowrap justify-content-between align-items-start "
          style={{ width: "100%" }}
        >
          <p style={{ color: "var(--primary)" }}>Experience</p>
          <a className="text-btn-sml" href="/bio">
            <span className="">See more </span>
            <i className="fi fi-br-arrow-up-right" style={{ fontSize: 10 }}></i>
          </a>
        </div>
        {expArr.map((value, index) => {
          if (index < 3)
            return (
              <div key={index} className="ItemExp">
                <p style={{ margin: 0 }}>
                  {value.Title}, {value.Company}
                </p>
                <p style={{ margin: 0, color: "var(--grey)" }}>
                  {value.StartDate} - {value.EndDate}
                </p>
              </div>
            );
        })}
      </div>
    </div>
  );
}
