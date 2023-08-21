import webpack from "webpack";
import { BuildOptions, BuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule => {
  console.log(isDev);
  const sassLoader = {
    test: /\.scss$/,
    use: [
      // fallback to style-loader in development
      isDev
        ? "style-loader"
        : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => {
              return !resourcePath.includes("node_modules") && resourcePath.includes(".module.");
            },
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const pugLoader = {
    test: /\.pug$/,
    use: [ "pug-loader" ],
  };

  return {
    rules:
      [
        pugLoader,
        tsLoader,
        sassLoader,
      ],
  };
};
