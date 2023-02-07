export default function Head() {
  return (
    <>
      <title>Shawn&apos;s Stream Helpers</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Various utilities to help improve your stream"
      />
      <meta name="title" content="Shawn's Stream Helpers" />
      {/* Icons */}
      {/* <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" /> */}
      {/* Preloads */}
      <link
        rel="preload"
        href="/fonts/BerkeleyMonoVariable-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/BerkeleyMonoVariable-Italic.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="stylesheet"
        precedence="default"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </>
  );
}
