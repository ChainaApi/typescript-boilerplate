// still figuring out if its possible to use typescript for the configuration
// import * as path from "path";
// import * as webpack from "webpack";

// const config: webpack.Configuration = {
//   entry: "./src/index.ts",
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: "ts-loader",
//         include: [path.resolve(__dirname, "src")],
//       },
//     ],
//   },
//   output: {
//     filename: "index.js",
//     path: path.resolve(__dirname, "public"),
//   },
// };

const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  output: {
    publicPath: "public",
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
};
