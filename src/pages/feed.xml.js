import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog", (p) => !p.data.draft);
  return rss({
    title: "Ali Yasir Naç",
    description:
      "Ali Yasir Naç'ın resmi web sitesi. Yazılım geliştirme, frontend, backend ve veri bilimi konularında bilgi ve projeler.",
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      tags: post.data.tags,
    })),
    customData: "<language>tr-tr</language>",
    canonicalUrl: "https://aliyasirnac.com",
  });
}
