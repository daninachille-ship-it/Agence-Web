import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/home/user/Agence-Web/tina/__generated__/.cache/1774352865488', url: 'http://localhost:4001/graphql', token: '', queries,  });
export default client;
  