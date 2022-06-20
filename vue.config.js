const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
console.log('当前运行环境', process.argv[2], process.argv[4])
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
