import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { withRouter } from "react-router-dom"; //使组件中内部可以使用路由跳转 高阶函数
import { adminRoutes } from "@/routes";
import "./Frame.less"
const { Header, Content, Sider, Footer } = Layout;

const routes = adminRoutes.filter((route) => route.isShow);

function Index(props) {

    let { location } = props;
    let selectKeys = routes.find(item => item.path === location.pathname);
    return (
        <Layout style={{ height: '100%' }}>

            <Header className="Header">
                <Layout>
                    <Sider width={150}>
                        <div className="HeaderLogo">Header</div>
                    </Sider>
                    <Content>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Content>
                </Layout>
            </Header>

            <Layout>
                {
                    routes.length !== 0
                        ? <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={selectKeys && selectKeys.path}
                                defaultOpenKeys={["sub1"]}
                                style={{ height: "100%", borderRight: 0 }}
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
                        </Sider>
                        : null
                }

                <Layout style={{ padding: "0 24px 24px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
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
            <Footer className="Footer">Footer</Footer>
        </Layout>
    );
}

export default withRouter(Index);
