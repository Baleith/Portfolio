module.exports = {
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
        modules: true
      }
    },
    "plugins": [
      "react"
    ],
    "extends": [
      "airbnb"
    ],
    env: {
      es6: true,
      browser: true
    },
    "settings": {
      "react": {
        "createClass": "createReactClass", // Regex for Component Factory to use,
                                            // default to "createReactClass"
        "pragma": "React",  // Pragma to use, default to "React"
        "version": "15.0", // React version, default to the latest React stable release
        "flowVersion": "0.53" // Flow version
      },
      "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the
                                                      // propTypes object, e.g. `forbidExtraProps`.
                                                      // If this isn't set, any propTypes wrapped in
                                                      // a function will be skipped.
    },
    rules: {
      "no-console": "off",
      "quotes": [ 2, "single" ],
      "semi": "error",
      "linebreak-style": 0
    }
  };
    
