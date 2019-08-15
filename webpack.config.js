const path = require('path');
const merge = require('webpack-merge');

defaultConfig = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  watch: false,
  watchOptions: {
    ignored: ['example/**/*.js', 'node_modules']
  },
  stats: {
    all: false,
    modules: true,
    errors: true,
    warnings: true,
    colors: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}

minConfig = {
  mode: 'production',
  output: {
    filename: 'new_title.min.js'
  }
}

devConfig = {
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: 'new_title.js'
  },
  optimization: {
    minimize: false
  }
}

module.exports = [
  merge(defaultConfig, minConfig),
  merge(defaultConfig, devConfig)
]
