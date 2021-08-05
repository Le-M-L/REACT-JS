import lazyLoad from './lazyLoad';

//其他地址,
export const mainRoutes = [
    {
        path: '/login',
        title: '登录页',
        component: lazyLoad(() => import('@/views/sys/login')),
    },
    {
        path: '/404',
        title: '404页面',
        component: lazyLoad(() => import('@/views/sys/exception')),
    },
];

/**
 * redirect 重定向
 * hideChildrenInMenu 是否隐藏子集菜单
 * meta{
 *   hideMenu 是否隐藏 当前菜单
 * } 
 *   
 */

export const adminRoutes = [
    // 控制面板
    {
        path: '/admin', //组件相对路径
        component: lazyLoad(() => import('@/views/admin/system/user')), //组件地址
        exact: true, //全匹配
        title: '用户管理1',
        meta: {
            title: '用户管理1',
            icon: 'icon-react',
        },
        children: [
            {
                path: 'user', //组件相对路径
                component: lazyLoad(() => import('@/views/admin/system/user')), //组件地址
                title: '用户管理2',
                exact: true, //全匹配
                meta: {
                    title: '用户管理2',
                    icon: 'icon-react',
                },
            },
            {
                path: 'dept', //组件相对路径
                component: lazyLoad(() => import('@/views/admin/system/dept')), //组件地址
                title: '部门管理',
                exact: true, //全匹配
                hideChildrenInMenu: false, // 是否显示 菜单
                meta: {
                  title: '部门管理',
                  icon: 'icon-react',
              },
            },
        ],
    },
];
