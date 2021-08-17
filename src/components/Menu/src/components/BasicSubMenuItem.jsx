import React, { Component } from 'react'
import { Menu } from "antd"
import MenuItemContent from "./MenuItemContent"
const { SubMenu } = Menu
export default class BasicSubMenuItem extends Component {
    render () {
        const { item } = this.props;
        return (
            <SubMenu key={item.path}>
                <MenuItemContent {...this.props} item={item} />
            </SubMenu>
        )
    }
}
