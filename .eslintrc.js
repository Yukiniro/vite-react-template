module.exports = {
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": 2,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  root: true,
};
