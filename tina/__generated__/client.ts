import { createClient } from "tinacms/dist/client";
import { queries } from "./types";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  'main'

export const client = createClient({
  url: `https://content.tinajs.io/1.6/content/4a7aeaf9-d62e-422a-b8d3-b759f68788ed/github/${branch}`,
  token: process.env.TINA_TOKEN || '42943077660a01352951a90b8b96c4ff59db1baa',
  queries,
});
export default client;
