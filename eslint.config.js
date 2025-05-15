import eslint from "@eslint/js"
import importPlugin from "eslint-plugin-import"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"

export default [
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      import: importPlugin,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
]
