module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb','prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  "parser": "babel-eslint",
  plugins: ["react", "import", "prettier"],
  rules: {
    "comma-dangle": ["error", "never"],
    "prettier/prettier": "error",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "class-methods-use-this": "off",
    "no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "jsx-a11y/anchor-is-valid": ["error", {
      components: ["Link"],
      specialLink: ["to"],
      aspects: ["noHref", "invalidHref", "preferButton"]
    }],
    "no-console": ["error"],
    "react/no-array-index-key": [0],
    "react/display-name": [0],
    "max-len": ["error", { "code": 100 }],
    "react/jsx-props-no-spreading": [0],
    "react/forbid-prop-types": [0],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-filename-extension": [2, { extensions: [".js"] }],
    "import/no-unresolved": 0
  },
};
