import React from 'react';
import { Layout } from 'antd';
import LayoutContent from './content';
// import LayoutFooter from './footer';
import LayoutHeader from './header';
import LayoutSider from './sider';
const DefaultLayout = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100%' }} >
            <LayoutHeader />
            <Layout>
                <LayoutSider />
                <LayoutContent children={children} />
            </Layout>
            {/* <LayoutFooter /> */}
        </Layout>
    );
};
export default DefaultLayout;
