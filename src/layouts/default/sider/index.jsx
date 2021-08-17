import { useState } from "react"
import { Layout,Button } from "antd"
import LayoutMenu from "../menu"
import { MenuModeEnum, MenuSplitTyeEnum } from '@/enums/menuEnum';
import {useMenuSetting} from "@/hooks/setting/useMenuSetting"
import "./index.less"
import store from "@/store"
import { setRoutesList } from "@/store/actions/app"
import lazyLoad from "@/router/lazyLoad"
const LayoutSider = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [theme] = useState('dark');
    const getMode = () => {

    }
    const getSplitType = () => {

    }
    
    const { routesList } = useMenuSetting()
    const handleClick = (e) => {
        store.dispatch(setRoutesList([
            ...routesList,
            {
                path: 'user333', //组件相对路径
                component: lazyLoad(() => import('@/views/admin/system/user')), //组件地址
                title: '用户管理233',
                exact: true, //全匹配
                meta: {
                    title: '用户管理233',
                },
            },
        ]))
    }
    return (
        
        <Layout.Sider collapsible theme={theme} collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} className="layout-sider" >
            <LayoutMenu theme={theme} menuMode={getMode()} splitType={getSplitType()} />
            <Button onClick={handleClick.bind(this)} >按钮</Button>
            {
               routesList.map(item => {
                   return <span style={{color:'red'}} key={item.path} >{item.title}</span>
               })
            }
        </Layout.Sider>
    )
}

export default LayoutSider