module.exports = {
  parser: '@typescript-eslint/parser',
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "rules": {
    "indent": ["error", 2],
    "semi": [2, "never"],
    "quotes": [2, "single", { "avoidEscape": true }],
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-unreachable": ["error"],
    "no-unused-labels": "error",
    "no-fallthrough": "error",
    "default-case": "error",
    "consistent-return": "error",
    "comma-dangle": "off",
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
    "space-before-function-paren": ["off"],
    "no-useless-constructor": ["off"],
    "no-console": ["warn", { "allow": ["warn", "error", "info", "group", "groupEnd"] }],

    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/space-before-function-paren": ["error"],
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"]
  },
  "root": true
}
