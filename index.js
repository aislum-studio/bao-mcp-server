// index.js

const path = require("path");
const { createServer } = require("@modelcontextprotocol/sdk/node");

const config = require("./mcp.config.js");

const server = createServer({
  config,
  rootDir: path.resolve(__dirname),
});

server.listen().then(() => {
  console.log("✅ Bao MCP Server is running!");
});
