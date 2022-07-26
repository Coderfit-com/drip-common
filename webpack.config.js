const path = require("path");
const yargs = require("yargs");
const env = yargs.argv.env;

let mode;

if (env === "build") {
  mode = "production";
} else {
  mode = "development";
}

const config = {
  mode: mode,
  entry: {
    constants: [path.resolve(__dirname, "constants", "index.ts")],
    utils: [path.resolve(__dirname, "utils", "index.ts")],
  },
  devtool: "source-map",
  output: {
    path: __dirname + "/lib",
    filename: "[name].js",
    libraryExport: "default",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
};

module.exports = config;