const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost'
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  }
})
