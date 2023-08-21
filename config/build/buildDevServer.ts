import webpack from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    compress: true,
    port: options.port,
    historyApiFallback: true,
    open: true,
  };
};