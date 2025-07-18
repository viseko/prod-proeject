import { BuildOptions } from "./types/buildOptions";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export default function(options: BuildOptions): DevServerConfiguration {
  const {port} = options;

  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}