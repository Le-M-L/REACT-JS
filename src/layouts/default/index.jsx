import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import Sider from './sider';
export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sider />
                <Footer />
            </div>
        );
    }
}
