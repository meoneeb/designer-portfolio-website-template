"use client";
import Footer from "@/commonComponents/Footer";
import { portfolioArr } from "@/database/portfolio";
import "@/styles/portfolio.scss";
import { usePathname } from "next/navigation";
import Header from "@/components/portfolio/SinglePortfolio/Header";
import PortfolioSingleContent from "@/components/portfolio/SinglePortfolio/PortfolioSingleContent";
import PrototypeBtn from "@/components/portfolio/SinglePortfolio/PrototypeBtn";
import CreateAmazingCTA from "@/components/home/CreateAmazingCTA";
import PortfolioNavigate from "@/components/portfolio/SinglePortfolio/PortfolioNavigate";
import ProjectDetails from "@/components/portfolio/SinglePortfolio/ProjectDetails";

export default function PortfolioSingle({ params }) {
  const pathname = usePathname();
  // Function to convert spaces to hyphens
  const newSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  // Find the portfolio item that matches the slug
  const portfolioItem = portfolioArr.find(
    (value) => params.slug === newSlug(value.Slug)
  );

  // If no matching portfolio item is found, return null
  if (!portfolioItem) {
    return null;
  }

  const author = portfolioItem.Author.Name;
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/fav.png" />
        <meta
          property="og:site_name"
          content={"meoneeb.com"}
          key="ogsitename"
        />
        <meta charSet="utf-8" />
        <meta name="description" content={portfolioItem.MetaDesc}></meta>
        <meta
          property="og:title"
          content={`Portfolio | ${portfolioItem.Title}`}
          key="ogtitle"
        />
        <meta
          property="og:url"
          content={`https://www.meoneeb.com/portfolio/${newSlug(
            portfolioItem.Slug
          )}`}
          key="ogurl"
        />
        <meta
          property="og:description"
          content={portfolioItem.MetaDesc}
          key="ogdesc"
        />
        <meta
          property="og:image"
          content={`https://www.meoneeb.com${portfolioItem.Thumb}`}
          key="ogimage"
        />
        <meta
          data-rh="true"
          name="twitter:image:src"
          content={`https://www.meoneeb.com${portfolioItem.Thumb}`}
        />
        <meta
          data-rh="true"
          name="twitter:card"
          content="summary_large_image"
        />
        <title>{`Portfolio | ${portfolioItem.Title}`}</title>
      </head>

      {/* START HERE */}
      <Header portfolioItem={portfolioItem} />
      <div
        className="pt-4"
        style={{
          background: "var(--light)",
          borderRadius: "20px 20px 0px 0px",
        }}
      >
        <div className="container py-4">
          <div className="row">
            <div className="col-2">{""}</div>
            <div className="col-lg-8">
              {portfolioItem.Details ? (
                <ProjectDetails portfolioItem={portfolioItem} />
              ) : null}
              <PortfolioSingleContent portfolioItem={portfolioItem} />
              <hr />
              {portfolioItem.Prototype ? (
                <PrototypeBtn portfolioItem={portfolioItem} />
              ) : null}
              <PortfolioNavigate portfolioItem={portfolioItem} />
            </div>
            <div className="col-2">{""}</div>
          </div>
        </div>
      </div>
      <div>
        <CreateAmazingCTA />
      </div>
      <Footer />
    </>
  );
}
