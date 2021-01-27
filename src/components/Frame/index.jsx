import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Dropdown, Badge, Tabs,Button } from "antd";
import { LogoutOutlined, SettingOutlined, UserOutlined, BellOutlined ,MenuUnfoldOutlined,
    MenuFoldOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom"; //使组件中内部可以使用路由跳转 高阶函数
import { adminRoutes } from "@/routes";
import style from "./Frame.module.less";
import TabsPages from "../TabsPages";
const { Header, Content, Sider, Footer } = Layout;

const routes = adminRoutes.filter((route) => route.isShow);

const menuItems = (item) => {
    console.log(item)
}

const menu = (
    <Menu style={{minWidth:'150px'}} onClick={menuItems}>
        <Menu.Item icon={<UserOutlined />}>
            <span>个人中心</span>
        </Menu.Item>
        <Menu.Item icon={<SettingOutlined />}>
            <span>个人设置</span>
        </Menu.Item>
        <div style={{height:'1px',background:'#eee',margin:'2px 0'}}></div>
        <Menu.Item icon={<LogoutOutlined />} key="退出登录" title="退出登录">
            <span>退出登录</span>
        </Menu.Item>
    </Menu>
);
//头部
const HeaderC = () => {
    return (
        <Header className={style.Header}>
            <Layout>
                {/* 头部导航栏左边部分 */}
                <Sider width={200}>
                    <div className={style.HeaderLogo}>Header</div>
                </Sider>
                {/* 头部导航栏中间部分 */}
                <Content>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Content>
                {/* 头部导航栏右边部分 */}
                <Sider className={style.HeaderR} width="auto">
                    {/* 消息提醒 消息通知 */}
                    <Dropdown trigger={["click"]} placement="bottomRight" overlay={menu}>
                        <span className={style.spanBlock} onClick={(e) => e.preventDefault()}>
                            <Badge size="small" count={99} offset={[2, 0]}>
                                <BellOutlined style={{fontSize:'16px',padding:'4px',color:'#fff'}} />
                            </Badge>
                        </span>
                    </Dropdown>
                     {/* 个人中心 个人设置 退出登录等等 */}
                    <Dropdown placement="bottomLeft" overlay={menu}>
                        <span className={`${style.myCenter} ${style.spanBlock}`} onClick={(e) => e.preventDefault()}>
                            <img src={require("@images/user.png").default} alt="" />
                            <span>Admin</span>
                        </span>
                    </Dropdown>
                </Sider>
            </Layout>
        </Header>
    );
};
const callback =(key) => {
    console.log(key);
  }
  const { TabPane } = Tabs;
//中间主体内容
const ContentC = (props) => {
    let { location } = props;
    let [collapsed,setCollapsed] = useState(true);
    let selectKeys = routes.find((item) => item.path === location.pathname);
    return (
        <Layout>
            {routes.length !== 0 ? (
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        inlineCollapsed={collapsed}
                        defaultSelectedKeys={selectKeys && selectKeys.path}
                        defaultOpenKeys={["sub1"]}
                        style={{  borderRight: 0 }}
                    >
                        {/* 动态侧栏 */}
                        {routes.map((route) => {
                            return (
                                <Menu.Item key={route.path} onClick={(p) => props.history.push(p.key)}>
                                    {route.icon}
                                    {route.title}
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                    <Button type="primary" onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
                        {collapsed? <MenuUnfoldOutlined /> :<MenuFoldOutlined/>}
                        </Button>
                </Sider>
            ) : null}

            <Layout style={{ padding: "0 24px 24px" }}>
                {/* <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <TabsPages />
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
};

//组件
function Index(props) {
    return (
        <Layout style={{ height: "100%" }}>
            <HeaderC />
            <ContentC {...props} />
            <Footer className={style.Footer}>Footer</Footer>
        </Layout>
    );
}

export default withRouter(Index);
