import React from "react"
import { useState, useMemo } from "react"
import { Layout, Button } from "antd"
import { connect } from "react-redux"
import LayoutMenu from "../menu"
import { MenuModeEnum, MenuSplitTyeEnum } from '@/enums/menuEnum';
import { useMenuSetting } from "@/hooks/setting/useMenuSetting"
import "./index.less"
const LayoutSider = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const [theme] = useState('dark');


    const { getCollapsed, getSplit } = useMenuSetting()


    return (

        <Layout.Sider collapsible theme={theme} collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} className="layout-sider" >
            <LayoutMenu menuMode={useMemo(() => (getSplit ? MenuModeEnum.INLINE : null), [getSplit])} />

        </Layout.Sider>
    )
}
const mapStateToProps = ({ app: { dd } }) => {
    return {
        dd
    };
};
export default connect(mapStateToProps)(LayoutSider)



