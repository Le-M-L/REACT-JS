import { useState } from "react"
import { Layout, Button } from "antd"
import "./index.less"
import LayoutMenu from "../menu"

const LayoutSider = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [theme, setTheme] = useState('dark')
    return (
        <Layout.Sider collapsible theme={theme} collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} className="layout-sider" >
            <Button onClick={() => setTheme('light')} >白色主题</Button>
            <Button onClick={() => setTheme('dark')} >黑色主题</Button>
            <LayoutMenu theme={theme} />
        </Layout.Sider>
    )
}

export default LayoutSider