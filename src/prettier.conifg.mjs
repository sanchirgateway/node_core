/** @type {import('prettier').Config} */
export default {
  "trailingComma": "none",
  "tabWidth": 2,
  "useTabs": true,
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "avoid",
  importOrder: ["<THIRD_PARTY_MODULES", "^@/(.*)$", "^../(.*)"],
  plugins: ["trivago/prettier-plugin-sort-imports"],
}

