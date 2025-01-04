export default defineEventHandler(async (event) => {
  const userIpAddress = getRequestIP(event, { xForwardedFor: true });
  const { objectId } = getQuery(event);

  if (!userIpAddress) {
    throw createError("Failed to get user IP address");
  }

  if (await hubKV().get(`like:${objectId}:${userIpAddress}`)) {
    return 0;
  }

  await hubKV().set(`like:${objectId}:${userIpAddress}`, { createdAt: new Date().getTime(), objectId, ip: userIpAddress });

  return 1;
});
