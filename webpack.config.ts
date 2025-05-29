import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

const config:webpack.Configuration = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', "index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: "[name][hash].js",
    path: path.resolve(__dirname, 'build'), 
    clean: true
  },
  plugins:[
    // * обработка HTML
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    }),
    // * отслеживание прогресса
    new webpack.ProgressPlugin()
  ],
};

export default config;