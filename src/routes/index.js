//路由懒加载
import lazyLoad from '@/common/lazyLoad'

export const mainRoutes = [
    {
        path:'/login',
        component: lazyLoad(() => import('@/pages/Login'))
    },
    {
        path:'/404',
        component: lazyLoad(() => import('@/pages/PageNotFound'))
    }
]