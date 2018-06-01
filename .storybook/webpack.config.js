const config = Object.assign({})
config.plugins = []
config.module = config.module || {}
config.module.rules = [
  {
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/, /\.woff2?$/, /\.ttf$/],
    loader: require.resolve('url-loader'),
    options: {
      limit: 10,
      name: 'static/media/[name].[hash:8].[ext]',
    },
  },
  require('../config/postcss.loader')({ extract: false })
]
module.exports = config
