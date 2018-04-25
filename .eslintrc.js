module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  "extends": ["airbnb", "prettier"],
  "rules": {
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-for": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ]
  }
}
