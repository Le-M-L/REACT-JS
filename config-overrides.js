/* config-overrides.js */
const path = require("path");
const {
    override,
    fixBabelImports,
    addLessLoader,
    addDecoratorsLegacy,
    addWebpackExternals,
    addWebpackAlias,
    addWebpackPlugin,
    // setWebpackPublicPath
} = require("customize-cra");

const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const options = {
    antDir: path.join(__dirname, "./node_modules/antd"), //antd包位置
    stylesDir: path.join(__dirname, "./src/assets/styles/theme"), //主题所在文件夹
    varFile: path.join(__dirname, "./src/assets/styles/theme/variables.less"), //自己设置默认的主题色
    // mainLessFile: path.join(__dirname, './src/assets/styles/index.less'),//项目中其他自定义的样式 如果不需要动态修改其他样式 该文件为空
    themeVariables: [//这里写要改变的主题变量
        '@primary-color',
        '@btn-primary-bg',
    ],
    indexFileName: "./public/index.html",
    outputFilePath: path.join(__dirname, './public/theme/color.less'),//输出到什么地方
    // publicPath: "",
    generateOnce: false, //是否只生成一次
};

//基础路径，发布布前修改这里，当前配置打包出来的资源都是相对路径
let publicPath = './';
module.exports = override(
    // antd按需加载配置
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
    }),
    //   主题样式配置
    addLessLoader({
        lessOptions: {
            // modifyVars: {
            //     // "@primary-color": "#1DA57A",
            //     //   '@font-size-base': '24px'
            // },
            javascriptEnabled: true,
        },
    }),
    //不做打包处理配置，如直接以cdn引入的
    addWebpackExternals({
        echarts: "window.echarts",
        // highcharts:"window.highcharts"
    }),
    // 配置装饰器
    addDecoratorsLegacy(),
    //增加路径别名的处理
    addWebpackAlias({
        "@": path.resolve("./src"),
    }),
    // setWebpackPublicPath(process.env.NODE_ENV === 'production' && '/antd-theme-demo'),
    addWebpackPlugin(new AntDesignThemePlugin(options)),
);
