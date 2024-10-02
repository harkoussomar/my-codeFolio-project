module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js.cjs}"],
      parseOptions: {
        sourceType: "script",
      },
    },
  ],
  parseOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
