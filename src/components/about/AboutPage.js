import ExpDetails from "../experience/ExpDetails";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import ProfileBio from "./ProfileBio";
import Academics from "./Academics";

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="d-flex flex-column col-md-4  mt-4"
            style={{ gap: 20 }}
          >
            <ProfileBio />
            <AboutMe />
            <Contact />
          </div>
          <div className="d-flex flex-column col-md-8 mt-4" style={{ gap: 20 }}>
            <ExpDetails />
            <Academics />
          </div>
        </div>
      </div>
      <div style={{ height: 100 }}></div>
    </>
  );
}
