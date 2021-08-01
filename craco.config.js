const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const CracoLessPlugin = require('craco-less');
const webpack = require('webpack');
const path = require('path');
const { generateModifyVars } = require('./build/generate/generateModifyVars');
module.exports = {
    babel: {
        plugins: [
            ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
            ['@babel/plugin-proposal-decorators', { legacy: true }], // 装饰器
        ],
    },
    //配置代理解决跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://baidu.com',
                //target: 'http://192.168.9.19:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
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
                        modifyVars: generateModifyVars(),
                        javascriptEnabled: true,
                        modules: true,
                    },
                },
                cssLoaderOptions: {
                    modules: {
                        localIdentName: '[local]__[hash:base64:5]',
                        // 回调必须返回 `local`，`global`  默认global
                        mode: (resourcePath) => {
                            if (/(modules|local)\.(less|css)$/i.test(resourcePath)) {
                                return 'local';
                            }

                            return 'global';
                        },
                    },
                },
            },
        },
    ],
    webpack: {
        // 别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
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
                algorithm: 'gzip',
                test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
                threshold: 1024,
                minRatio: 0.8,
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        ],
        //抽离公用模块
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        chunks: 'initial',
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                    },
                    vendor: {
                        test: /node_modules/,
                        chunks: 'initial',
                        name: 'vendor',
                        priority: 10,
                        enforce: true,
                    },
                },
            },
        },
    },
};
