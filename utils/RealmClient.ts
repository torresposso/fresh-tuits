import * as Realm from "@realm";

const REALM_APP_ID = Deno.env.get("REALM_APP_ID");

if (!REALM_APP_ID) {
  throw new Error("REALM ID NOT SET");
}

export const realm = new Realm.App({ id: REALM_APP_ID });
