import { dirname } from 'path';
import { fileURLToPath } from 'url';

import parserTypescript from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import';
import pluginSonarjs from 'eslint-plugin-sonarjs';
import pluginTypescript from '@typescript-eslint/eslint-plugin';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ),
  {
    plugins: {
      '@typescript-eslint': pluginTypescript,
      import: pluginImport,
      sonarjs: pluginSonarjs,
    },
    rules: {
      ...pluginSonarjs.configs.recommended.rules,
      'prettier/prettier': 'warn',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '~/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'src/**',
              group: 'internal',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
        },
      ],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: parserTypescript,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];

export default eslintConfig;
