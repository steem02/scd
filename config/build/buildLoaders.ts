import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule => {
  const svgLoader = {
    test: /\.svg$/,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const filesLoader = {
    test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  const sassLoader = {
    test: /\.scss$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) => {
              return (
                !resourcePath.includes('node_modules') &&
                resourcePath.includes('.module.')
              );
            },
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const pugLoader = {
    test: /\.pug$/,
    use: ['pug-loader'],
  };

  return {
    rules: [svgLoader, filesLoader, pugLoader, tsLoader, sassLoader],
  };
};
