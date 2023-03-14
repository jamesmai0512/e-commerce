const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-css-modules-preset',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath:
        '/Users/jamesmai/Project/asnet/practices/next-js/e-commerce-app/next.config.js',
    },
  },
  features: {
    storyStoreV7: true,
  },
  async webpackFinal(config) {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    ]

    return config
  },
  docs: {
    autodocs: true,
  },
}
