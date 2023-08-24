import { createClient } from "redis";

const client = createClient();

await client.connect();

client.on("error", (err) => console.log("Redis Client Error", err));

export default client;
