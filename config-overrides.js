/* config-overrides.js */
const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra');
const path = require("path");


const alter_config= ()=>(config, env)=>{
    return config;
}



module.exports = override(
    alter_config(),
    // antd按需加载配置
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    //   主题样式配置
    addLessLoader({
        lessOptions: {
            modifyVars: {
                '@primary-color': '#1DA57A',
                //   '@font-size-base': '24px'
            },
            javascriptEnabled: true,
        },
    }),
    // 配置装饰器
    addDecoratorsLegacy(),
    //增加路径别名的处理
    addWebpackAlias({
        '@': path.resolve('./src')
    })
);