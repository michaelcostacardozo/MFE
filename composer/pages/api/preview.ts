import { getPage } from "@/lib/cms/pages";

const preview = async (req, res) => {
  if (req.query.secret !== (process.env.PREVIEW_SECRET || "secret-token")) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const slugArray = req.query.slug.split("/");
  const pageData = await getPage({
    locale: 'en',
    slug: slugArray.join("/"),
    preview: true,
  });

  if (!pageData) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({});

  res.writeHead(307, {
    Location: `/${pageData.locale}/${pageData.slug}`,
  });
  res.end();
};

export default preview;

// You can view Preview pages with URLs like this:
// http://localhost:3000/api/preview?secret=<preview-secret>&slug=<slug>
// where <preview-secret> is the secret token defined in your .env config
// and where <slug> is the slug you entered in Strapi for your page
// The slug must match the current locale
