const config = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix --quiet', 'prettier --write'],
  '*.{md,json}': ['prettier --write'],
};

export default config;
