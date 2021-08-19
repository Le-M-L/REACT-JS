import React, { Component } from 'react'
import { Menu } from "antd"
import MenuItemContent from "./MenuItemContent"
export default class BasicMenuItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <Menu.Item key={item.path} >
                <MenuItemContent {...this.props} item={item} />
            </Menu.Item>
        )
    }
}
