export default defineEventHandler(async (event) => {
  const { objectId } = getQuery(event);
  const likes = await hubKV().keys(`like:${objectId}`);
  return likes.length || 0;
});
