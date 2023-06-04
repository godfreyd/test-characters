const path = require("path");

module.exports = {
  extends: ["react-app", "plugin:prettier/recommended", "prettier"],
  parserOptions: {
    project: path.resolve(__dirname, "./tsconfig.json"),
  },
  plugins: ["import"],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
  },
};
