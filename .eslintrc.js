module.exports = {
  extends: ["airbnb", "prettier"],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["svelte3"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-mutable-exports": "off",
        "import/first": "off",
      },
      settings: {
        "svelte3/ignore-warnings": (o) => {
          if (o.code === "css-unused-selector") {
            return true;
          }
          return false;
        },
      },
    },
  ],
  rules: {
    "no-use-before-define": ["error", "nofunc"],
    "import/prefer-default-export": "off",
  },
};
