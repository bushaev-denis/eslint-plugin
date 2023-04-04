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
  },
};
