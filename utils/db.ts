import * as faunadb from "https://deno.land/x/fauna@5.0.0-deno-alpha9/mod.js";
import "https://deno.land/std@0.182.0/dotenv/load.ts";

export const q = faunadb.query as any;

const domain = Deno.env.get("FAUNA_DOMAIN")!;
const secret = Deno.env.get("FAUNA_SECRET")!;

export const faunaClient = new faunadb.Client({
  domain,
  secret,
});

export const getFaunaClient = (secret: string) =>
  new faunadb.Client({
    domain,
    secret,
  });
