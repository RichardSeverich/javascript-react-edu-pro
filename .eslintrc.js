module.exports = {
  env: {
    browser: true // include global variables (like document, window, etc.)
  },
  extends: [
    "eslint:recommended", // You can see all rules in https://eslint.org/docs/rules
    "plugin:react/recommended"
  ],
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    indent: ["error", 4],
    "no-trailing-spaces": ["error"]
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
