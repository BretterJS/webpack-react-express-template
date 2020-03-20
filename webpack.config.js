const path = require("path");
const webpack = require("webpack");
const envDev = process.env.NODE_ENV || "development";
const devMode = process.env.NODE_ENV !== "production";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
const CopyPlugin = require("copy-webpack-plugin");
const lodash = require("lodash");
const compiler = webpack({});
const handlebarsLoader = require("handlebars-loader");
const devServer = require("webpack-dev-server");

module.exports = {
  mode: envDev,
  // entry: ["webpack-hot-middleware/client", { app: "./src/main.js" }], // For Express
  entry: {
    app: ["./src/index.js"]
  },
  // devtool: "inline-source-map",
  devtool: false,
  devServer: {
    contentBase: "./dist",
    overlay: true,
    stats: {
      colors: true
    },
    hot: true,
    port: 9000
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"]
          },
          options: { minimize: true }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(scss|sass|css)$/, // /\.s[ac]ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Development"
    }),
    new CopyPlugin([{ from: "./src", to: "../backup" }]),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    }),
    new CleanWebpackPlugin()
  ]
};
