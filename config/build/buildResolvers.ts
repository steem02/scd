import webpack from "webpack";

import { BuildOptions } from "./types/config";

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => (
  {
    extensions: [ ".js", ".jsx", ".tsx", ".ts" ],
    preferAbsolute: true,
    mainFiles: [ "index" ],
    alias: {
      "@": options.paths.src,
    },
  }
);