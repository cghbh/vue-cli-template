module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'assets': '@/assets',
        'http': '@/http',
        'pages': '@/pages',
      }
    }
  }
}
