module.exports = {
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
        modules: true
      }
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    env: {
      es6: true,
      browser: true
    },
    rules: {
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "indent": ["error", 4],
      "no-console": "off",
      "quotes": [ 2, "single" ],
      "semi": "error"
    }
  };