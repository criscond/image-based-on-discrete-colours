module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "parser": "babel-eslint",
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'no-negated-condition': 'error',
    'security/detect-object-injection': 'off',
    'import/first': 0,
    'max-len': ['error', 120, 2, {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
    }],
    'react/jsx-sort-props': ['error', {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
    }],
    'react/sort-prop-types': ['error', {
        callbacksLast: true,
        ignoreCase: false,
        requiredFirst: true,
        sortShapeProp: false,
        noSortAlphabetically: false,
    }],
  }
};
