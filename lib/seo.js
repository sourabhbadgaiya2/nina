const withSlash = (p) => (p.endsWith("/") ? p : `${p}/`);

export function pageMetadata({ title, description, path }) {
  const url = withSlash(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "AgenQ",
      title,
      description,
      images: [
        { url: "/opengraph-image", width: 1200, height: 630, alt: title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: { index: true, follow: true },
  };
}
