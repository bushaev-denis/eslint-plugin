module.exports = {
  extends: [
    "./configs/base",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  overrides: {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
};
