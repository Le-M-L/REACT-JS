import store from '@/store';

import { setBackMenuList } from '@/store/actions/routeMenu';
import { setRoutesList } from '@/store/actions/app';

import { adminRoutes } from '@/router/index';
import { deepRoute } from '@/router/helper/routeHelper';
import { transformRouteToMenu } from '@/router/helper/menuHelper';

// 项目初始化状态
export function initAppConfigStore() {
    const backMenuList = transformRouteToMenu(adminRoutes)
    // 设置后台菜单
    store.dispatch(setBackMenuList(backMenuList));
    // 初始化路由表为一级路由 并注册
    let data = setRoutesList(deepRoute(adminRoutes))
    console.log(adminRoutes,backMenuList);
    store.dispatch(data);
}
