const commitlintConfig = {
  extends: ['@commitlint/config-conventional'],
  helpUrl: 'https://www.conventionalcommits.org/en/v1.0.0',
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'sentence-case'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'refactor', 'build', 'test', 'ci', 'chore', 'docs', 'style', 'perf', 'revert'],
    ],
  },
};

export default commitlintConfig;
