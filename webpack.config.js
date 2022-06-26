const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  entry: {
    main1:"./index.js",
    main2:"./3dmodel.js"
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html",filename: 'index.html' }),
    new HtmlWebpackPlugin({ template: "./time_table.html",filename: 'time_table.html' }),
    new HtmlWebpackPlugin({ template: "./community_partner.html",filename: 'community_partner.html' }),
    new HtmlWebpackPlugin({ template: "./sponsor.html",filename: 'sponsor.html' }),
    new MiniCssExtractPlugin({filename: 'index.css'})
  ],
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    open: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:8080",
    },
  }, 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader' ],
      }, 
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {}
      //     }
      //   ]
      // },
    //   {
    //     test: /\.svg$/,
    //     loader: 'svg-inline-loader'
    // } 
    ],
  },
};