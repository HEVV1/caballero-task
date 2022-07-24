const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash].css",
  }),
  new HtmlWebpackPlugin({
    template: "../index.html",
    filename: "./index.html",
  })
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  // Temporary workaround for 'browserslist' bug that is being patched in the near future
  target = "browserslist";
}

module.exports = {
  //Mode defaults for production if not set
  mode: mode,

  entry: {
    main: ['./js/public.js', './scss/public.scss'],
  },
  // entry: "./js/public.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        //CSS + SCSS
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "/" },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        // PNG + JPG + JPEG + GIF + SVG
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
          publicPath: '../'
        },
      },
      {
        // Fonts
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
          publicPath: '../'
        },
      },
      {
        // JS + JSX
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        // html
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  plugins: plugins,

  resolve: {
    extensions: [".js", ".jsx"],
  },

  target: target,

  devtool: "source-map",

  devServer: {
    contentBase: "./dist",
    port: 8081,
    hot: true,
  },
};
