import type { StorybookConfig } from '@storybook/react-webpack5';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import webpack from 'webpack';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-react-i18next',
  ],
  staticDirs: ['../../public'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        fsCache: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  async webpackFinal(config, { configType }) {
    const paths: BuildPaths = {
      build: '',
      entry: '',
      html: '',
      src: path.join(__dirname, '..', '..', 'src'),
    };

    if (config.resolve != null) {
      config.resolve.alias = {
        '@': paths.src,
      };
      config.resolve.extensions?.push('.tsx', '.ts');
      config.resolve.modules?.push(paths.src);
    }

    config.plugins?.push(
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
      })
    );

    if (config.module?.rules != null) {
      config.module.rules.push(buildCssLoaders(true));
    }

    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;

      if (test == null) {
        return false;
      }

      return test.test('.svg');
    }) as Record<string, any>;

    imageRule.exclude = /\.svg$/;

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
export default config;
