import HomePage from "@/components/home/HomePage";
export default function Home() {
  const metadata = {
    title: "Sameen Hassan - Portfolio",
    description:
      "I am Oneeb Faisal, Graphic & UI Designer packing more than 4 years of experience.",
      thumb: "/meoneeb.png"
  };
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/fav.png" />
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description}></meta>
        <meta property="og:title" content={metadata.title} key="ogtitle" />
        <meta
          property="og:description"
          content={metadata.description}
          key="ogdesc"
        />
        <title>{metadata.title}</title>
        <meta
          property="og:image"
          content={`https://www.meoneeb.com${metadata.thumb}`}
          key="ogimage"
        />
        <meta
          data-rh="true"
          name="twitter:image:src"
          content={`https://www.meoneeb.com${metadata.thumb}`}
        />
        <meta
          data-rh="true"
          name="twitter:card"
          content="summary_large_image"
        />
      </head>
      {/* <FeaturedPortfolio /> */}
      <HomePage />
    </>
  );
}
