# Bao MCP Server

A modular MCP server for simulating **Bao**, the traditional East African board game. Built with JavaScript and powered by the [Model Context Protocol (MCP)](https://modelcontextprotocol.io), this server exposes Bao gameplay tools to AI agents and developer clients.

## 🎮 Features

- Forward sowing logic (`sowForward`)
- Modular tool registration via MCP
- JSON-based board state management
- Cloud-friendly setup for iPad and browser IDEs

## 🧠 What Is MCP?

MCP (Model Context Protocol) is a universal standard that lets AI agents interact with tools, files, and services. This server uses MCP to expose Bao gameplay mechanics as callable tools.

## 📁 Folder Structure

📁./data

- ./data/board-state.json

📁./tools:

- ./tools/sow-forward.js

- ./tools/sow-reverse.js

- ./tools/strategy.js

📁./:

- ./index.js

- ./mcp.config.js

- ./package.js

## 🚀 Getting Started

1. Clone the repo  
   `git clone https://github.com/aislum-studio/bao-mcp-server`

2. Install dependencies  
   `npm install`

3. Start the server  
   `npm start`

## 🧪 Tool: sowForward

Simulates forward sowing from a given pit index

**Input:**
```json
{
  "board": [4, 4, 3, 4, 4, 4, 4, 4],
  "pitIndex": 2
}

**output:**
{
  "newBoard": [4, 4, 0, 5, 5, 5, 4, 4],
  "lastPit": 5
}

🌍 Cultural Context

Bao is more than a game—it’s a reflection of strategy, rhythm, and heritage. This server aims to preserve and share its mechanics through modern tooling.

📦 License

MIT © Salum @ Aislum Studio
