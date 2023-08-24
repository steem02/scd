import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildOptions } from "./config/build/types/config";


const paths = {
  build: path.join(__dirname, "dist"),
  entry: path.join(__dirname, "src", "index.tsx"),
  html: path.join(__dirname, "index.pug"),
  src: path.join(__dirname, "src"),
};


function config(env: BuildEnv): webpack.Configuration {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const port = env.port || 3000;

  return buildWebpackConfig({
    paths, mode, isDev, env, port,
  } as BuildOptions);

}

export default config;