import { Handlers } from "$fresh/server.ts";

import "https://deno.land/std@0.182.0/dotenv/load.ts";

export const handler: Handlers = {
  async GET(req: Request) {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    const appSecret = Deno.env.get("FACEBOOK_APP_SECRET");

    console.log("app secret", appSecret);
    try {
      const res = await (
        await fetch(`https://graph.facebook.com/v16.0/oauth/access_token?
      client_id=928587835115791
      &redirect_uri=http://localhost:8000/auth/login
      &client_secret=${appSecret}
      &code=${code}`)
      ).json();

      return Response.json(res);
    } catch (error) {
      console.log("==>>>", error);
      return Response.json({
        error: error.message,
      });
    }
  },
};
