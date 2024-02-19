module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    // Coloca aquí tus reglas específicas si es necesario
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
