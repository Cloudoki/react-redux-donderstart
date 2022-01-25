//@ts-nocheck
import merge from 'webpack-merge'
import common from './webpack.config.common.babel'

export default merge(common,{
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [() => ({
      terserOptions: {
        format: {
          comments: false,
        },
      },
      extractComments: false,
    }),
    ],
  },
})
