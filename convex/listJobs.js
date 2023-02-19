import { query } from "./_generated/server";


export default query(async ({ db }) => {
  return await db.query("Users")
  .filter(q => q.eq(q.field("Name"), "John Doe"))
  .collect();
});
