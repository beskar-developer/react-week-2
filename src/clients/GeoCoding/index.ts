import { HTTPClient } from "@shared-vendor/helpers";

export default new HTTPClient({
  baseURL: getEnv("GEO_CODING_URL"),
  domain: "search",
}).getInstance();
