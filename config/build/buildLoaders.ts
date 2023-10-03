import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

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

  const sassLoader = buildCssLoaders(isDev);

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
