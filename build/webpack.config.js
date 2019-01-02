const path = require('path')

module.exports = {
  entry: {
    'index': path.resolve('./src/index.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    globalObject: 'this',
    libraryTarget: 'umd',
  },
  externals: {
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', { loose: true }],
          ],
          plugins: [
            'transform-class-properties',
          ],
        },
      },
    }]
  },
  mode: 'production'
}
