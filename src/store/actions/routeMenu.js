import { BACKMENULIST, FORNTMENULIST } from '../constant/routeMenu';

// 设置 后台菜单列表
export const setBackMenuList = (data) => ({ type: BACKMENULIST, data });
// 设置 全部菜单列表
export const setFrontMenuList = (data) => ({ type: FORNTMENULIST, data });
