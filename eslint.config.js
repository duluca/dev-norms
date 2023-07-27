import globals from 'globals'
import js from '@eslint/js'

export default [
  {
    files: ['**/*.js'],
    rules: {
      ...js.configs.recommended.rules,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
]
