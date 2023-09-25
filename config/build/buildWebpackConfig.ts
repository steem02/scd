import type webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { type BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => ({
  mode: options.mode,
  devtool: options.isDev ? 'inline-source-map' : undefined,
  entry: options.paths.entry,

  output: {
    filename: '[name].[contenthash].js',
    path: options.paths.build,
    clean: true
  },

  devServer: buildDevServer(options),

  module: {
    ...buildLoaders(options)
  },
  plugins: buildPlugins(options),
  resolve: buildResolvers(options)
})
