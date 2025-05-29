const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, 'src', "index.js"),// Входная точка вашего приложения
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'build'), // Путь для сохранения выходного файла,
    filename: "[name].js",
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
  mode: 'development', // Режим разработки,
};
