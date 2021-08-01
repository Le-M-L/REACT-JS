import { Layout } from 'antd';
import "./index.less"
const LayoutContent = ({ children }) => {
    return <Layout.Content  className="layout-content">{children}</Layout.Content>;
};

export default LayoutContent;
