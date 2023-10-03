import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoaders = (isDev: boolean) => ({
  test: /\.scss$/,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resourcePath: string) => {
            return !resourcePath.includes('node_modules') && resourcePath.includes('.module.');
          },
          localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          exportLocalsConvention: 'camelCase',
        },
      },
    },
    'sass-loader',
  ],
});
