import lazyLoad from "./lazyLoad"

//其他地址,
export const mainRoutes = [
  {
    path: "/login",
    component: lazyLoad(() => import("@/views/sys/login")),
  },
  {
    path: "/404",
    component: lazyLoad(() => import("@/views/sys/exception")),
  },
];

export const adminRoutes = [
  // 控制面板
  {
    path: '/admin/user',//组件相对路径
    name: 'user',//路由别名
    component: lazyLoad(() => import('@/views/admin/system/user')),//组件地址
    title: 'user',
    exact: true,//全匹配
    isShow: true,//是否显示
    icon: 'icon-react',
  },
]
