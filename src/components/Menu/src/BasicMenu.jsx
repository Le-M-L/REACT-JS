import React, { Component } from 'react'
import { Menu } from "antd"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import BasicSubMenuItem from "./components/BasicSubMenuItem"
import "./index.less"
@withRouter
class BasicMenu extends Component {
    constructor() {
        super()
        this.state = {
            selectedKeys: [], // 当前选中的菜单项 key
            defaultSelectedKeys: [], // 初始选中的菜单 key 
            mode:'inline',  
            openKeys: [],  // 当前展开的 SubMenu 菜单项 key
            inlineIndent: 24, // inline 模式的菜单缩进宽度
            className: '',
            subMenuOpenDelay: 0.2, // 用户鼠标进入子菜单后开启延时，单位：秒
        }
    }
    static propTypes = {
        selectedKeys: PropTypes.array,
        defaultSelectedKeys: PropTypes.array,
        openKeys: PropTypes.array,
        inlineIndent: PropTypes.number,
        subMenuOpenDelay: PropTypes.number,
        mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
    }

    componentDidMount () {
        console.log(this);
    }

    handleOpenChange(openKeys) {
        console.log(openKeys);

    }

    handleMenuClick ({ item, key, keyPath, domEvent }) {
        console.log();
    }


    render () {
        const { items = [] } = this.props;
        console.log(items);
        return (
            <Menu {...this.state} onClick={this.handleMenuClick} onOpenChange={this.handleOpenChange} >
                {
                    items.map(item => {
                        return <BasicSubMenuItem item={item} key={item.path} />
                    })
                   
                }
            </Menu>
        )
    }
}
export default  BasicMenu