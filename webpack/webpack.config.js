/*
 * @Description: 
 * @Author: Fearyao
 * @Date: 2020-07-27 15:35:57
 * @LastEditTime: 2020-07-29 10:06:34
 * @LastEditors: Fearyao
 */
const path = require('path')

const Uglify = require('uglifyjs-webpack-plugin')
const {
  resolve
} = path
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8196
          }
        }
        ]
      },
    ],

  },
  plugins: [
    new Uglify()
  ],
  mode: 'development',
}