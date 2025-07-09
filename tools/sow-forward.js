// tools/sow-forward.js

module.exports = {
  name: "sowForward",
  description: "Simulates forward sowing from a given pit index",
  inputSchema: {
    type: "object",
    properties: {
      board: { type: "array", items: { type: "number" } },
      pitIndex: { type: "number" }
    },
    required: ["board", "pitIndex"]
  },
  outputSchema: {
    type: "object",
    properties: {
      newBoard: { type: "array", items: { type: "number" } },
      lastPit: { type: "number" }
    }
  },
  handler: async ({ board, pitIndex }) => {
    let seeds = board[pitIndex];
    board[pitIndex] = 0;
    let index = pitIndex;

    while (seeds > 0) {
      index = (index + 1) % board.length;
      board[index]++;
      seeds--;
    }

    return {
      newBoard: board,
      lastPit: index
    };
  }
};
