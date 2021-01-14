/* config-overrides.js */
const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
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
    addDecoratorsLegacy(),  // 配置装饰器
);