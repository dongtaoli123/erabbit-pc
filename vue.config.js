// const { defineConfig } = require('@vue/cli-service')

// module.exports = defineConfig({
//   transpileDependencies: true

// })
const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 那些文件自动引入，最好使用绝对路径
      // 需要使用path.join 来拼接完整路径
      patterns: [
        path.join(__dirname, './src/assets/styles/varibles.less'),
        path.join(__dirname, './src/assets/styles/mixin.less')
      ]
    }
  }
}
