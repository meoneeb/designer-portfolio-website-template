import Footer from "@/commonComponents/Footer";
import PortfolioCard from "./PortfolioCard";
import PageHeader from "@/commonComponents/PageHeader";

export default function PortfolioPage() {
  const header = "Portfolio";
  return (
    <>
      <PageHeader Title={header} />
      <div className="container d-flex flex-wrap" style={{ gap: 20 }}>
        <div className="col-md-1">{""}</div>
        <div className="col-md-10">
          <PortfolioCard />
        </div>
        <div className="col-md-1">{""}</div>
      </div>
      <Footer />
    </>
  );
}
