import { Layout } from "antd"
import "./index.less"
import LayoutMenu from "../menu"

const LayoutSider = () => {
    return  (
        <Layout.Sider className="layout-sider" >
            Sider
            <LayoutMenu/>
        </Layout.Sider>
    )
}

export default LayoutSider