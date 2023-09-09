import { Client } from "pg";

export interface Env {
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/favicon.ico")
      return new Response(null, { status: 404 });
//
console.log("#start");
console.log("#db.DB_USERNAME=" , env.DB_USERNAME);
console.log("#db.DB_NAME=" , env.DB_NAME);
console.log("#db.DB_HOST=" , env.DB_HOST);
console.log("#db.DB_PORT=" , env.DB_PORT);
    const client = new Client({
        user: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        host: env.DB_HOST,
        port: env.DB_PORT,
        database: env.DB_NAME
    })
    await client.connect();
    const result = await client.query({
        text: `SELECT * FROM "Task" LIMIT 10`,
      });
console.log(JSON.stringify(result.rows));
    const resp = Response.json(result.rows);
    ctx.waitUntil(client.end());
    return resp;
  },
};