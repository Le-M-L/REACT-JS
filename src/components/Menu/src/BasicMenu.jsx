import React, { Component } from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './index.less';
const { SubMenu } = Menu;

@withRouter
class BasicMenu extends Component {
    static propTypes = {
        selectedKeys: PropTypes.array, // 当前选中的菜单项 key
        defaultSelectedKeys: PropTypes.array, // 初始选中的菜单 key
        openKeys: PropTypes.array, // 当前展开的 SubMenu 菜单项 key
        inlineIndent: PropTypes.number, // inline 模式的菜单缩进宽度
        subMenuOpenDelay: PropTypes.number, // 用户鼠标进入子菜单后开启延时，单位：秒
        mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
        items: PropTypes.array.isRequired, //
    };

    static defaultProps = {
        mode: 'inline',
        items: [],
    };

    componentDidMount() {
        console.log(this.props);
        this.setState({
            openKeys: ['/admin/user', '/admin'],
            selectedKeys: ['/admin/user'],
        });
    }

    handleMenuClick = ({ key }) => {
        this.props.history.push(key);
        this.setState({ selectedKeys: [key] });
    };

    menuItem(item) {
        return <Menu.Item key={item.path}>{item.title}</Menu.Item>;
    }

    subMenuItem(items) {
        if (items.children) {
            return (
                <SubMenu key={items.path} title={items.title}>
                    {items.children.map((item) => this.subMenuItem(item))}
                </SubMenu>
            );
        }
        return this.menuItem(items);
    }

    render() {
        return (
            <Menu
                ref={(e) => (this.menuRef = e)}
                mode={this.props.mode}
                onClick={this.handleMenuClick}
                onOpenChange={(openKeys) => this.setState({ openKeys })}
            >
                {this.props.items.map((item) => this.subMenuItem(item))}
            </Menu>
        );
    }
}

export default BasicMenu;
