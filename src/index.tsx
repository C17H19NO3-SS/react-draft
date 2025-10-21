/**
 * @file This file is the entry point for the Elysia server.
 * It sets up a new Elysia server and listens on port 3000.
 * The server serves the `index.html` file for all GET requests.
 */

import Elysia from "elysia";
import index from "./index.html";
console.clear();
new Elysia().get("/*", index).listen(3000, sv => console.log(`🚀 Server running at ${sv.url}`));
