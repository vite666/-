const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    historyApiFallback: true,
    allowedHosts: "all",
    port: 14223,
    https:true
  },
  lintOnSave:false,
  transpileDependencies: true
})
