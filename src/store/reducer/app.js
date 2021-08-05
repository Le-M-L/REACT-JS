import { ROUTESLIST } from '../constant/app';

const defaultState = {
    routesList: [], // 路由表
};

const routeMenu = (state = defaultState, action) => {
    switch (action.type) {
        case ROUTESLIST:
            return { routesList: action.data };
        default:
            break;
    }
    return state;
};

export default routeMenu;
