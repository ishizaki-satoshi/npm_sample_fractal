
const glob = require("glob");
// const entries = glob.sync("./src/**/*.js");
const entries = glob.sync("./src/components/**/*.js");


module.exports = {
  mode: 'production', // 'production' か 'development' を指定
  entry: {
    common: entries
  },
  output: {
    path: `${__dirname}/src/public/js`,
    filename: '[name].bundle.js'
  }
}
