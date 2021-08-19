import { ROUTESLIST, SETPAGELOADING } from '../constant/app';
import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '@/enums/menuEnum';

const defaultState = {
    routesList: [], // 路由表
    getMenuSetting: {
        // 背景色
        // bgColor: SIDE_BAR_BG_COLOR_LIST[0],
        // 是否固定住菜单
        fixed: true,
        // 菜单折叠
        collapsed: false,
        // 折叠菜单时候是否显示菜单名
        collapsedShowTitle: false,
        // 是否可拖拽
        // 仅限打开左侧菜单时，鼠标在右侧菜单上有一个拖动条
        canDrag: false,
        // 是否显示
        show: true,
        // 是否隐藏
        hidden: false,
        // 菜单宽度
        menuWidth: 210,
        // 分割菜单
        split: false,
        // 菜单模式
        mode: MenuModeEnum.INLINE,
        // 菜单类型
        type: MenuTypeEnum.SIDEBAR,
        // 菜单主题
        // theme: ThemeEnum.DARK,
        // 顶部菜单布局
        topMenuAlign: 'center',
        // 折叠触发器的位置
        trigger: TriggerEnum.HEADER,
        // 手风琴模式，只显示一个菜单
        accordion: true,
        // 在路由切换的时候关闭左侧混合菜单展开菜单
        closeMixSidebarOnChange: false,
        // 左侧混合菜单模块切换触发方式' click ' |'hover'
        mixSideTrigger: MixSidebarTriggerEnum.CLICK,
        // 是否固定左侧混合菜单
        mixSideFixed: false,
    },
};

const routeMenu = (state = defaultState, action) => {
    // let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ROUTESLIST:
            return { ...state, routesList: action.value };
        case SETPAGELOADING:
            // let getMenuSetting = {
            //     ...state.getMenuSetting,
            //     collapsed:!state.getMenuSetting.collapsed
            // }
            return { ...state, dd: 456 };
        default:
            break;
    }
    return state;
};

export default routeMenu;
