import PageHeader from "@/commonComponents/PageHeader";
import ContactForm from "./ContactForm";
import Footer from "@/commonComponents/Footer";

export default function ContactPage() {
  const header = ["Let's create something amazing together!"];

  return (
    <>
      <PageHeader Title={header} />
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div style={{textAlign: 'center'}}>
              <h2 style={{color: "var(--primary)"}}>Send a message</h2>
              <p>
                Fill the form and tap "Send Message", I will get in touch <i>ASAP</i>.
              </p>
            </div>
            <ContactForm />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
