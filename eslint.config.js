// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettier = require('eslint-config-prettier');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const unusedImports = require('eslint-plugin-unused-imports');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = defineConfig([
  // ── Base: Expo (includes @typescript-eslint, react, react-hooks, import) ──
  expoConfig,

  // ── All files: import sorting + general quality ──────────────────────────
  {
    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // ── Imports ───────────────────────────────────────────────────────────
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      // Handled by simple-import-sort
      'import/order': 'off',

      // ── General code quality ──────────────────────────────────────────────
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-nested-ternary': 'warn',
      'no-var': 'error',
      curly: ['error', 'all'],
    },
  },

  // ── TypeScript files only ─────────────────────────────────────────────────
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      // Defer to unused-imports plugin
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
    },
  },

  // ── React/JSX files only ──────────────────────────────────────────────────
  {
    files: ['**/*.tsx', '**/*.jsx'],
    rules: {
      'react/self-closing-comp': ['error', { component: true, html: false }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/no-array-index-key': 'warn',
    },
  },

  // ── Prettier: disable all formatting rules (must be last) ─────────────────
  prettier,

  // ── Ignores ───────────────────────────────────────────────────────────────
  {
    ignores: ['dist/*', 'node_modules/*', '.expo/*', '.claude/*'],
  },
]);
