const path = require("path");

module.exports = {
  entry: ["./js/app.js", "./js/file2.js"],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: 'inline-source-map',
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
