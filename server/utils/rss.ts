import { Feed } from "feed";
import type { H3Event } from "h3";
import * as cheerio from "cheerio";
import settings from "~~/settings";
import { serverQueryContent } from "#content/server";

export async function generateBlogFeed(event: H3Event) {
  // Fetch all documents
  const feed = new Feed({
    title: settings.blogTitle,
    description: settings.blogDescription,
    id: settings.siteUrl,
    link: `${settings.siteUrl}/blog`,
    language: "en-US",
    image: `${settings.siteUrl}/__og-image__/image/og.png`,
    copyright: `CC BY-NC-ND 4.0 - Arnaud Gissinger`,
    feedLinks: {
      atom: `${settings.siteUrl}/feed.atom`,
      rss: `${settings.siteUrl}/feed.xml`,
    },
  });

  const posts = await serverQueryContent(event, "blog").find();

  for (const post of posts) {
    if (!post.loc) continue;

    // this will return the SSR content of the post
    const content = await $fetch<string>(`${settings.siteUrl}${post.loc}`);
    let $ = cheerio.load(content);
    const prose = $("div.break-words[data-content-id]").html();

    $ = cheerio.load(prose!);

    // remove all attributes from all elements
    $("*").each(function () {
      this.attribs = {};
    });

    const item = {
      title: post.title,
      id: `${settings.siteUrl}${post.loc}`,
      link: `${settings.siteUrl}${post.loc}`,
      description: post.description,
      content: $("body").html(),
      image: post.image,
      author: {
        name: settings.name,
        link: settings.sameAs[0],
      },
      date: new Date(post.date),
    };
    feed.addItem(item);
  }

  return feed;
}
