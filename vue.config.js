const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const TerserPlugin = require('terser-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

console.log('当前运行环境', process.argv[2], process.argv[4], process.env.NODE_ENV)
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost'
  },
  configureWebpack: config => {
    config.plugins.push(
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    )
    const prdPlugins = [
      // 删除console插件
      new TerserPlugin({
        parallel: true,
        sourceMap: false,
        terserOptions: {
          warnings: true,
          compress: {
            // 打包时删除console以及debugger，测试环境如需使用console或者debugger请改为false（不要直接删除）
            drop_console: true,
            drop_debugger: true
          },
          output: {
            // 去掉注释内容
            comments: true
          }
        }
      }),
      new FileManagerPlugin({
        onEnd: {
          archive: [{
            source: './dist',
            destination: './dist/vue3-mobile-template.tar.gz',
            format: 'tar',
            options: {
              gzip: true,
              gzipOptions: {
                level: 9
              }
            }
          }]
        }
      }),
      new BundleAnalyzerPlugin(// 打包检测
        {
          analyzerMode: 'static',
          openAnalyzer: false,
          generateStatsFile: false,
          statsOptions: { source: false }
        }
      )
    ]
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.plugins = [...config.plugins, ...prdPlugins]
    }
  }
})
