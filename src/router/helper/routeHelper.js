import { cloneDeep, omit } from 'lodash-es';
import store from '@/store';

// 返回一级路由菜单
export function deepRoute(routes) {
    const routesMenu = cloneDeep(routes)
    const newRouteMenu = [];
    const deep = (routes, parent) => {
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].children && routes[i].children.length) {
                deep(routes[i].children, routes[i]);
            }
            if (parent) routes[i].fullPath = `${parent.path}/${routes[i].path}`;
            if(!routes[i].fullPath) routes[i].fullPath = routes[i].path
            newRouteMenu.push(omit(routes[i], 'children'));
        }
    };
    deep(routesMenu);
    return newRouteMenu;
}