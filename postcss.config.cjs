// const postcss = require("postcss");
// const postcssCustomMedia = require("postcss-custom-media");
// const postcssGlobalData = require("@csstools/postcss-global-data");
// const postcssNesting = require("postcss-nesting");

module.exports = {
  plugins: {
    "@csstools/postcss-global-data": {
      files: ["./variables.css"],
    },
    "postcss-custom-media": {} || null,
    "postcss-nesting": {} || null,
  },
};
