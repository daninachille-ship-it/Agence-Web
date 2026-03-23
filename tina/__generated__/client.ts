import { createClient } from "tinacms/dist/client";
import { queries } from "./types";

const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '';
const token = process.env.TINA_TOKEN || '';
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  'main';

export const client = createClient({
  url: `https://content.tinajs.io/1.6/content/${clientId}/github/${branch}`,
  token,
  queries,
});
export default client;
