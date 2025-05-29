import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/buildOptions";

export default function({paths}: BuildOptions):webpack.WebpackPluginInstance[] {
  return ([
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    // * отслеживание прогресса
    new webpack.ProgressPlugin(),
  ])
}