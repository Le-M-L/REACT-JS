import React from 'react';
import Footer from './footer';
import Header from './header';
import Sider from './sider';
const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Sider />
            <Footer />
            { children }
        </div>
    );
};
export default Layout;
