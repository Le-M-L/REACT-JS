import { cloneDeep } from 'lodash-es';
import { findPath, treeMap } from '@/utils/helper/treeHelper';
import { isUrl } from "@/utils/is"


export function getAllParentPath(treeData, path) {
    const menuList = findPath(treeData, (n) => n.path === path);
    return (menuList || []).map((item) => item.path);
}

// 拼接父级路径
 export function joinParentPath(menus, parentPath = ''){
    for (let index = 0; index < menus.length; index++) {
        const menu = menus[index];
        // 注意，以/开头的嵌套路径将被视为根路径。
        // 这允许您在不必使用嵌套URL的情况下利用组件嵌套。
        if (!(menu.path.startsWith('/') || isUrl(menu.path))) {
          // Path不是以/开头的，也不是url, 拼接父路径
          menu.path = `${parentPath}/${menu.path}`;
        }
        if (menu?.children?.length) {
            joinParentPath(menu.children, menu.meta?.hidePathForChildren ? parentPath : menu.path);
        }
      }
}


// 菜单结构
export function transformRouteToMenu(routeModList, routerMapping = false) {
    const cloneRouteModList = cloneDeep(routeModList);
    const routeList = [];
    cloneRouteModList.forEach((item) => {
        // 是否开启 重定向
        if (routerMapping && item.meta.hideChildrenInMenu && typeof item.redirect === 'string') {
            item.path = item.redirect;
        }

        routeList.push(item);

        // 动态路由
        // if (item.meta?.single) {
        //     const realItem = item?.children?.[0];
        //     realItem && routeList.push(realItem);
        // } else {
        //     routeList.push(item);
        // }
    });

    // 提取出指定路由结构   
    const list = treeMap(routeList, {
        // 配置路由
        conversion: (node) => {
            const { meta: { title = '', hideMenu = false } = {} } = node;
            return {
                ...(node.meta || {}),
                meta: node.meta,
                name: title,
                hideMenu, // 
                path: node.path,
                ...(node.redirect ? { redirect: node.redirect } : {}),
            };
        },
    });
    joinParentPath(list);
    return cloneDeep(list);
}
