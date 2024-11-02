import type { Item } from "feed";
import type { H3Event } from "h3";

import { Feed } from "feed";
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
    image: `${settings.siteUrl}/android-chrome-192x192.png`,
    favicon: `${settings.siteUrl}/favicon.ico`,
    copyright: `CC BY-NC-ND 4.0 - Arnaud Gissinger`,
    feedLinks: {
      rss: `${settings.siteUrl}/feed.xml`,
      atom: `${settings.siteUrl}/feed.atom`,
    },
  });

  const posts = await serverQueryContent(event, "blog").sort({ datePublished: -1 }).find();

  for (const post of posts) {
    if (!post.loc) continue;

    // this will return the SSR content of the post
    const content = await $fetch<string>(post.loc);
    let $ = cheerio.load(content);
    const prose = $(".prose").html();

    $ = cheerio.load(prose!);

    // remove all attributes from all elements
    $("*").each(function () {
      this.attribs = {};
    });

    const item: Item = {
      title: post.title,
      id: `${settings.siteUrl}${post.loc}`,
      link: `${settings.siteUrl}${post.loc}`,
      description: post.description,
      content: $("body").html() || undefined,
      image: `${settings.siteUrl}/__og-image__/static${post.loc}/og.png`,
      author: [{
        name: settings.name,
        link: settings.sameAs[0],
      }],
      date: new Date(post.date),
    };
    feed.addItem(item);
  }

  return feed;
}
