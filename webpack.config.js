const path = require("path");

module.exports = {
  mode: "production",
  entry: path.join(path.resolve(__dirname, "src"), "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js"
  }
};
