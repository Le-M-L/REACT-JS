import React, { Component } from 'react'
import { Menu } from "antd"
import MenuItemContent from "./MenuItemContent"
import BasicMenuItem from "./BasicMenuItem"
const { SubMenu } = Menu;

const SubMenuItem = (props) => {
    const { item } = props;
    return <SubMenu key={item.path} title={item.title} >
        <MenuItemContent {...props} item={item} />
        {
            item.children.map(childremItem => {
                <BasicSubMenuItem  {...props} item={childremItem} key={childremItem.path} ></BasicSubMenuItem>
            })
        }
    </SubMenu>
}


export default class BasicSubMenuItem extends Component {
    render () {
        const { item } = this.props;
        console.log(item);
        const menuHasChildren = () => {
            if (item.meta?.hideMenu) return;
            let hasChildren = !item.meta?.hideChildrenInMenu &&
                Reflect.has(item, 'children') &&
                !!item.children &&
                item.children.length > 0;
            return !hasChildren ? <BasicMenuItem {...this.props} item={item} /> : <SubMenuItem {...this.props} item={item} />
        }
        return (
            <>
                {
                    menuHasChildren()
                }
            </>
        )
    }
}
