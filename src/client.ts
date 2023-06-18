import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "57z1j7jw",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-06-18", // use current date (YYYY-MM-DD) to target the latest API version
};
export const client = createClient(config);
