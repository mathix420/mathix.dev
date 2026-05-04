export default defineEventHandler(async (event) => {
  const { objectId } = getQuery(event);

  const kv = event.context.cloudflare?.env?.KV;
  if (!kv) {
    throw createError("KV binding not available");
  }

  let count = 0;
  let cursor: string | undefined;
  do {
    const result = await kv.list({ prefix: `like:${objectId}:`, cursor });
    count += result.keys.length;
    cursor = result.list_complete ? undefined : result.cursor;
  } while (cursor);

  return count;
});
