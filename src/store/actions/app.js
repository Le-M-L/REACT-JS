import { ROUTESLIST, SETPAGELOADING } from '../constant/app';

// 设置 路由菜单
export const setRoutesList = (value) => ({ type: ROUTESLIST, value });
export const setPageLoading = (value) => ({ type: SETPAGELOADING, value });

