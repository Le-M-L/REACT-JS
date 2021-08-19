import { ROUTESLIST, SETPAGELOADING } from '../constant/app';

const defaultState = {
    routesList: [], // 路由表
    getMenuSetting: {
        collapsed: false,
    },
    dd:123
};

const routeMenu = (state = defaultState, action) => {
    // let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ROUTESLIST:
            return {...state,routesList:action.value};
        case SETPAGELOADING:
            // let getMenuSetting = {
            //     ...state.getMenuSetting,
            //     collapsed:!state.getMenuSetting.collapsed
            // }
            return {...state,dd:456};
        default:
            break;
    }
    return state;
  
};

export default routeMenu;
