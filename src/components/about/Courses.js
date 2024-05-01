import { academicsArr } from "@/database/bio";

export default function Courses() {
  return (
    <>
      <div>
        <div className="containerDiv" style={{flexGrow: 1, width: "100%"}}>
          <h3 style={{ color: "var(--primary)", marginBottom: 20 }}>
            Academics
          </h3>
          <div>
            {academicsArr.map((value, index) => {
              if (value.Course === true)
                return (
                  <div key={index} className="ItemExp" style={{width: "100%"}}>
                    <p style={{ margin: 0 }}>
                      {value.Degree}
                      <span style={{ color: "var(--grey)" }}>{value.Duration}</span>
                    </p>
                    <p style={{ margin: 0 }}>{value.Institute}</p>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
