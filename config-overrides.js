const path = require('path');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function override(config, env) {
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => !(plugin instanceof ModuleScopePlugin),
  );
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname, './'),
    '@': path.resolve(__dirname, './src'),
  };

  switch (config.mode) {
    case 'production': {
      config.output = {
        path: path.resolve(__dirname, './build'),
        filename: 'txOne.prod.bundle.js',
        publicPath: '/',
      };
      config.plugins.push(
        new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.jsx?$|\.css$|\.(scss|sass)$|/,
          threshold: 10240,
          minRatio: 0.8,
        }),
      );
      // config.plugins.push(
      //   new BundleAnalyzerPlugin({
      //     generateStatsFile: true,
      //   }),
      // );
      return config;
    }
    case 'development': {
      return config;
    }
    default:
      return config;
  }
};
