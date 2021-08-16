import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '@/layouts/default'; //引入form组件
// import store from "@/store"
function App(props) {
    const adminRoutes = props.routesList || [];
    console.log(adminRoutes)
    return (
        <Layout className="App">
            <Switch>
                {adminRoutes.map((route) => {
                    return (
                        <Route
                            key={route.fullPath}
                            path={route.fullPath}
                            exact={route.exact}
                            render={(routeProps) => {
                                return <route.component {...routeProps} />;
                            }}
                        />
                    );
                })}
                {/* 当访问的是/admin路由的时候 默认展示  重定向 第一个地址 */}
                {adminRoutes.length && <Redirect to={adminRoutes[0].fullPath} from="/admin" />}
                {/* 管理后台查找不到 给404 */}
                <Redirect to="/404" />
            </Switch>
        </Layout>
    );
}
const mapStateToProps = ({ app: { routesList } }) => {
    return {
        routesList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
