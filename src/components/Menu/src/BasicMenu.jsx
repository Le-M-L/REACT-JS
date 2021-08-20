import React, { Component } from 'react'
import { Menu } from "antd"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import "./index.less"
const { SubMenu } = Menu;

@withRouter
class BasicMenu extends Component {
    state = {
        // selectedKeys: [], // 当前选中的菜单项 key
        // defaultSelectedKeys: [], // 初始选中的菜单 key 
        mode: 'inline',
        // openKeys: [],  // 当前展开的 SubMenu 菜单项 key
        // inlineIndent: 24, // inline 模式的菜单缩进宽度
        // className: '',
        // subMenuOpenDelay: 0.2, // 用户鼠标进入子菜单后开启延时，单位：秒
    }
    items = this.props.items || []
    static propTypes = {
        selectedKeys: PropTypes.array,
        defaultSelectedKeys: PropTypes.array,
        openKeys: PropTypes.array,
        inlineIndent: PropTypes.number,
        subMenuOpenDelay: PropTypes.number,
        mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
    }

    componentDidMount () {
        console.log(this.props);
        this.setState({
            openKeys: ["/admin/user", "/admin"],
            selectedKeys: ["/admin/user"]
        })
    }

    handleMenuClick = ({ key }) => {
        if(this.props.location.pathname == key) return;
        this.props.history.push(key)
        this.setState({ selectedKeys: [key] })
    }

    menuItem (item) {
        return <Menu.Item key={item.path} >{item.title}</Menu.Item>
    }

    subMenuItem (items) {
        if (items.children) {
            return <SubMenu key={items.path} title={items.title} >
                {
                    items.children.map(item => this.subMenuItem(item))
                }
            </SubMenu>
        }
        return this.menuItem(items)
    }
    
    render () {
        return (
            <Menu ref={e => this.menuRef = e} {...this.state}
                onClick={this.handleMenuClick}
                onOpenChange={(openKeys) => this.setState({ openKeys })} >
                {
                    this.items.map((item) => this.subMenuItem(item))
                }
            </Menu>
        )
    }
}
export default BasicMenu