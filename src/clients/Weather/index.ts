import { HTTPClient } from "@shared-vendor/helpers";

export default new HTTPClient({
  baseURL: getEnv("WEATHER_URL"),
  domain: "forecast",
}).getInstance();
