export function getCMSMedia(url) {
  if (!url) {
    return null;
  }

  try {
    const { pathname } = new URL(url);

    return `${process.env.NEXT_PUBLIC_CMS_CDN_URL}${pathname}`;
  } catch (e) {
    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith("http") || url.startsWith("//")) {
      return url;
    }

    // Otherwise prepend the URL path with the Strapi URL
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
      }${url}`;
  }
}
