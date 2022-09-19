import * as contentful from "../../utils/contentful";

export default async function handler(req, res) {
  const { secret, slug } = req.query;
  console.log("slug: ", slug);

  //   if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
  //     return res.status(401).json({ message: "Invalid token" });
  //   }

  //   const page = await contentful.client.getEntries({
  //     content_type: "page",
  //     limit: 50,
  //   });

  //   console.log("page", page);

  //   if (!page.items.length) {
  //     return res.status(401).json({ message: "Invalid productId" });
  //   }

  //   const pageFields = page.items[0].fields;

  //   console.log(pageFields);

  res.setPreviewData({});
  res.redirect(`/examples/${slug}`);
}
