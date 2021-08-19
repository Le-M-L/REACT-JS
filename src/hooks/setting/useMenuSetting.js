import { useMemo } from 'react';
import store from '@/store';
import { MenuModeEnum, MenuTypeEnum, TriggerEnum } from '@/enums/menuEnum';

export function useMenuSetting() {
    let { app } = store.getState();
    // const routesList = app.routesList;
    
    const getCollapsed = app.getMenuSetting.collapsed; // 收起菜单

    const getMenuType = app.getMenuSetting.type; // 菜单类型

    const getMenuMode = app.getMenuSetting.mode; // 菜单模式

    const getMenuFixed = app.getMenuSetting.fixed; // 菜单固定

    const getShowMenu = app.getMenuSetting.show; // 显示菜单

    const getMenuHidden = app.getMenuSetting.hidden; // 隐藏菜单

    const getMenuWidth = app.getMenuSetting.menuWidth; // 菜单宽度

    const getTrigger = app.getMenuSetting.trigger; // 菜单触发器

    const getMenuTheme = app.getMenuSetting.theme; // 菜单主题

    const getSplit = app.getMenuSetting.split; // 菜单拆分

    const getMenuBgColor = app.getMenuSetting.bgColor; // 菜单背景颜色

    const getMixSideTrigger = app.getMenuSetting.mixSideTrigger; // 混合菜单触发器

    const getAccordion = app.getMenuSetting.accordion; // 手风琴模式 只展开一个

    const getMixSideFixed = app.getMenuSetting.mixSideFixed; // 混合菜单侧边栏固定

    const getTopMenuAlign = app.getMenuSetting.topMenuAlign; // 顶部菜单排序

    const getCloseMixSidebarOnChange = app.getMenuSetting.closeMixSidebarOnChange; // 关闭混合菜单

    const getIsSidebarType = getMenuType === MenuTypeEnum.SIDEBAR; // 侧边栏

    const getIsTopMenu = getMenuType === MenuTypeEnum.TOP_MENU; // 顶部菜单

    const getCollapsedShowTitle = app.getMenuSetting.collapsedShowTitle; //关闭

    const getShowTopMenu = getMenuMode === MenuModeEnum.HORIZONTAL || getSplit;

    const getShowHeaderTrigger = (getMenuType, getShowMenu, getMenuHidden, getTrigger) => {
        if (getMenuType === MenuTypeEnum.TOP_MENU || !getShowMenu || getMenuHidden) {
            return false;
        }
        return getTrigger === TriggerEnum.HEADER;
    };

    const getIsHorizontal = getMenuMode === MenuModeEnum.HORIZONTAL;

    return {
        getCollapsed,
        getMenuType,
        getMenuMode,
        getMenuFixed,
        getShowMenu,
        getMenuHidden,
        getMenuWidth,
        getTrigger,
        getMenuTheme,
        getSplit,
        getMenuBgColor,
        getMixSideTrigger,
        getAccordion,
        getMixSideFixed,
        getTopMenuAlign,
        getCloseMixSidebarOnChange,
        getIsSidebarType,
        getIsTopMenu,
        getCollapsedShowTitle,
        getShowTopMenu,
        getShowHeaderTrigger: useMemo(
            () => getShowHeaderTrigger(getMenuType, getShowMenu, getMenuHidden, getTrigger),
            [getMenuType, getShowMenu, getMenuHidden, getTrigger]
        ),
        getIsHorizontal,
    };
}
