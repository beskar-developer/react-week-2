import { HTTPClient } from "@shared-vendor/helpers";

const client = new HTTPClient({
  domain: "post",
}).getInstance();

export default client;
