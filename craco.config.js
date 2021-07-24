const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const CracoLessPlugin = require("craco-less");
const webpack = require("webpack");
const path = require("path");
module.exports = {
  babel: {
    plugins: [
      ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
      ["@babel/plugin-proposal-decorators", { legacy: true }], // 装饰器
    ],
  },
  //配置代理解决跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://baidu.com",
        //target: 'http://192.168.9.19:8080',
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    // 别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    plugins: [
      // 删除console debugger
      // new UglifyJsPlugin({
      //     uglifyOptions: {
      //         compress: {
      //             warnings: false,
      //             drop_debugger: true,
      //             drop_console: true,
      //         },
      //     },
      //     sourceMap: false,
      //     parallel: true,
      // }),
      // 打压缩包
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
        threshold: 1024,
        minRatio: 0.8,
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  },
};
