import { BACKMENULIST, FORNTMENULIST } from '../constant/routeMenu';

const defaultState = {
    frontMenuList: [], // 菜单列表
    backMenuList: [], // 后台菜单列表
};

const routeMenu = (state = defaultState, action) => {
    switch (action.type) {
        case BACKMENULIST:
            return { backMenuList: action.data };
        case FORNTMENULIST:
            return { backMenuList: action.data };
        default:
            break;
    }
    return state;
};

export default routeMenu;
