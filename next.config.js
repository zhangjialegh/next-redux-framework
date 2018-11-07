const withLess = require("@zeit/next-less")
module.exports = withLess({
  lessLoaderOptions: {
    cssModules: false,
    javascriptEnabled:true
  }
})