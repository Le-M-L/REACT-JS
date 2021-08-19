import React from "react"
import { useState, useEffect } from "react"
import { Layout, Button } from "antd"
import { connect } from "react-redux"
import LayoutMenu from "../menu"
// import { MenuModeEnum, MenuSplitTyeEnum } from '@/enums/menuEnum';
import { useMenuSetting } from "@/hooks/setting/useMenuSetting"
import "./index.less"
import { setRoutesList, setPageLoading } from "@/store/actions/app"
import store from "@/store"
const LayoutSider = (props) => {
    console.log(props);
    const [collapsed, setCollapsed] = useState(false);
    const [theme] = useState('dark');
    const getMode = () => {

    }

    const getSplitType = () => {

    }

    const handleClick = (e) => {
        props.dispatch(setPageLoading(false))
        console.log(store.getState());
    }

    const { getCollapsed } = useMenuSetting()

    useEffect(() => {
        console.log();
    })

    return (

        <Layout.Sider collapsible theme={theme} collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} className="layout-sider" >
            <span style={{ color: 'red' }}>
                {
                    `${getCollapsed}`
                }
                {`${store.getState().app.dd}`}
            </span>
            <Button onClick={handleClick} >按钮</Button>

            <LayoutMenu theme={theme} menuMode={getMode()} splitType={getSplitType()} />

        </Layout.Sider>
    )
}
const mapStateToProps = ({ app: { dd} }) => {
    return {
        dd
    };
};
export default connect(mapStateToProps)(LayoutSider)



