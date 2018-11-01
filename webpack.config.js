const path = require('path')
const webpackConfig = require('./config/webpack').config
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const htmlPlugin = []

Object.keys(webpackConfig.entry).forEach(entry => {
  htmlPlugin.push(new HtmlWebpackPlugin({
    title: entry,
    chunks: [entry],
    template: path.resolve(__dirname, `static/${entry}`, 'index.html'),
    filename: path.resolve(__dirname, `app/view/${entry}`, 'index.html')
  }))
})

const webpackOptions = {
  entry: webpackConfig.entry,

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app/public')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              useRelativePath: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles/[name].css'),
  ]
}

webpackOptions.plugins = webpackOptions.plugins.concat(htmlPlugin)

module.exports = webpackOptions

