const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  externals: {
    vue: 'Vue' // must treat Vue as external
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['weex-loader']
      }, {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  }
}
