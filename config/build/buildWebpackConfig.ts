import { BuildOptions } from "./types/buildOptions";
import webpack from "webpack";
import buildPlugins from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";

export default function(options: BuildOptions): webpack.Configuration {
  const {paths, mode} = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[name][hash].js",
      path: paths.build, 
      clean: true
    },
    plugins: buildPlugins(options),
  }
} 