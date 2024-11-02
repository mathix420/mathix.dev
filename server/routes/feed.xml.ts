import { appendHeader } from "h3";

export default defineEventHandler(async (event) => {
  const feed = await generateBlogFeed(event);
  appendHeader(event, "Content-Type", "application/rss+xml");
  return feed.atom1();
});
