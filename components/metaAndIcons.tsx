const Favicons = () => {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={prefix + "apple-touch-icon.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={prefix + "favicon-32x32.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={prefix + "favicon-16x16.png"}
      />
      <link rel="manifest" href={prefix + "site.webmanifest"} />
      <link
        rel="mask-icon"
        href={prefix + "safari-pinned-tab.svg"}
        color="#5bbad5"
      />
      <meta
        name="description"
        content="A place to remember your progression in Lies of P"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#c39e66" />
      {/* https://ogp.me/ */}
      <meta property="og:title" content="Lies of P Checklist" />
      <meta
        property="og:description"
        content="A place to remember your progression in Lies of P"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://ishan0445.github.io/lies_of_p_checklist/"
      />
      <meta
        property="og:image"
        content="https://ishan0445.github.io/lies_of_p_checklist/android-chrome-256x256.png"
      />
      {/* https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary */}
      <meta name="twitter:title" content="Lies of P Checklist" />
      <meta
        name="twitter:description"
        content="A place to remember your progression in Lies of P"
      />
      <meta
        name="twitter:image"
        content="https://ishan0445.github.io/lies_of_p_checklist/android-chrome-256x256.png"
      />
      <meta name="twitter:card" content="summary" />
    </>
  );
};

export default Favicons;
