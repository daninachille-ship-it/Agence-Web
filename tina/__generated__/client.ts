import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/home/user/Agence-Web/tina/__generated__/.cache/1774296463010', url: 'https://content.tinajs.io/1.6/content/dummy/github/main', token: 'dummy', queries,  });
export default client;
  