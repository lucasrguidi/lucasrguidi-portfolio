module.exports = {
  '**/*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],
  '**/*.{css,scss}': ['prettier --write'],
  '**/*.{json,md}': ['prettier --write'],
};
