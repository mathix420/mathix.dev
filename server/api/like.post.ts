export default defineEventHandler(async (event) => {
  const userIpAddress = getRequestIP(event, { xForwardedFor: true });
  const { objectId } = getQuery(event);

  if (!userIpAddress) {
    throw createError("Failed to get user IP address");
  }

  const kv = event.context.cloudflare?.env?.KV;
  if (!kv) {
    throw createError("KV binding not available");
  }

  const key = `like:${objectId}:${userIpAddress}`;
  if (await kv.get(key)) {
    return 0;
  }

  await kv.put(key, JSON.stringify({ createdAt: Date.now(), objectId, ip: userIpAddress }));

  return 1;
});
