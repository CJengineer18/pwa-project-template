import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  { ignores: ["build/**", "node_modules/**"] },
  {
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error'
    }
  },
  {
    settings: {
      react: {
        pragma: 'React',
        fragment: 'Fragment',
        version: 'detect',
        flowVersion: '0.53'
      },
      propWrapperFunctions: [],
      componentWrapperFunctions: [],
      formComponents: [],
      linkComponents: [
        { name: 'Link', linkAttribute: 'to' }
      ]
    }
  }
];
