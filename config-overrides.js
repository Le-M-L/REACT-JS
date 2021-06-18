const { override, addDecoratorsLegacy, addLessLoader } = require('customize-cra');

module.exports = override(
    // ES7 装饰器使用
    addDecoratorsLegacy(),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            // 可选地将url调整为相对的。当为false时，url已经相对于条目较少的文件。
            // Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.
            relativeUrls: false,
            modifyVars: { '@primary-color': '#A80000' },
            // cssModules: {
            //   // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
            //   localIdentName: "[path][name]__[local]--[hash:base64:5]",
            // }
        },
    })
);
