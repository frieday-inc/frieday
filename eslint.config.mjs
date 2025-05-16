import { dirname } from 'path';
import { fileURLToPath } from 'url';

import pluginSonarjs from 'eslint-plugin-sonarjs';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'),
  {
    plugins: {
      sonarjs: pluginSonarjs,
    },
    rules: {
      ...pluginSonarjs.configs.recommended.rules,
      'prettier/prettier': 'warn',
    },
  },
];

export default eslintConfig;
