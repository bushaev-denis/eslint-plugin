module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: { sourceType: "module" },
  plugins: ["@dez64ru"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "@dez64ru/jsx-multiline-paddings": "error",
    "@dez64ru/prop-multiline-paddings": "error",
    "@typescript-eslint/no-empty-interface": "off",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      {
        blankLine: "always",
        prev: "*",
        next: [
          "multiline-expression",
          "multiline-block-like",
          "multiline-const",
          "multiline-let",
        ],
      },
      {
        blankLine: "always",
        prev: [
          "multiline-expression",
          "multiline-block-like",
          "multiline-const",
          "multiline-let",
        ],
        next: "*",
      },
    ],
  },
  },
};
