import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/buildOptions";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default function({paths, isDev}: BuildOptions):webpack.WebpackPluginInstance[] {
  return ([
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    // * отслеживание прогресса
    new webpack.ProgressPlugin(),
    // * сохраняем CSS отдельно
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    // * прокидывание глобальной переменной
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin(),
    (isDev && new ReactRefreshWebpackPlugin())
  ].filter(Boolean))
}