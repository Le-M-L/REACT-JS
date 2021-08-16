import { useState } from "react"
import { Layout } from "antd"
import "./index.less"
import LayoutMenu from "../menu"

const LayoutSider = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [theme] = useState('dark')
    return (
        <Layout.Sider collapsible theme={theme} collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} className="layout-sider" >
            <LayoutMenu theme={theme} />
        </Layout.Sider>
    )
}

export default LayoutSider