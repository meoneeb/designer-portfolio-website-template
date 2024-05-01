const metadata = {
  title: "Designer - Oneeb Faisal",
  description:
    "I am Oneeb Faisal, Graphic & UI Designer packing more than 4 years of experience.",
};

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/icons/fav.png" />
  <meta charSet="utf-8" />
  <meta name="description" content={metadata.description}></meta>
  <meta property="og:title" content={metadata.title} key="ogtitle" />
  <meta property="og:description" content={metadata.description} key="ogdesc" />
  <title>{metadata.title}</title>
</head>;
