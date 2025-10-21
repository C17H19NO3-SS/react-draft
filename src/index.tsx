import Elysia from "elysia";
import index from "./index.html";
console.clear();
new Elysia().get("/*", index).listen(3000, sv => console.log(`🚀 Server running at ${sv.url}`));