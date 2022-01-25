//@ts-nocheck
import path from 'path'
import merge from 'webpack-merge'
import common from './webpack.config.common.babel'

export default merge([common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    webSocketServer: 'ws',
    historyApiFallback: true,
    https: true,
    host: 'localhost.dev.io',
    port: 9000,
  },
  devtool: 'inline-source-map',
}])
