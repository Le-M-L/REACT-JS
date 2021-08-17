import { cloneDeep, omit } from 'lodash-es';
import { joinParentPath } from './menuHelper';
import { isUrl } from '@/utils/is';

// 返回一级路由菜单
export function deepRoute(routes) {
    const routesMenu = cloneDeep(routes);
    const newRouteMenu = [];
    const deep = (routes, parentPath) => {
        for (let i = 0; i < routes.length; i++) {
            const menu = routes[i];
            if (!(menu.path.startsWith('/') || isUrl(menu.path))) {
                // Path不是以/开头的，也不是url, 拼接父路径
                menu.path = `${parentPath}/${menu.path}`;
            }
            if (menu.children && menu.children.length) {
                deep(menu.children, menu.meta?.hidePathForChildren ? parentPath : menu.path);
            }
            newRouteMenu.push(omit(menu, 'children'));
        }
    };
    deep(routesMenu);
    joinParentPath(newRouteMenu);
    return cloneDeep(newRouteMenu);
}
