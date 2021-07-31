import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { adminRoutes } from "@/router";//引入路由
import Layout from '@/layouts/default';//引入form组件

function App() {
  return (
    <Layout className="App">
      <Switch>
        {
          adminRoutes.map(route => {
            return <Route key={route.path} path={route.path} exact={route.exact} render={routeProps => {
              console.log(routeProps)
              return <route.component {...routeProps} />
            }} />
          })
        }
        {/* 当访问的是/admin路由的时候 默认展示  重定向 第一个地址 */}
        <Redirect to={adminRoutes[0].path} from="/admin" />
        {/* 管理后台查找不到 给404 */}
        <Redirect to="/404" />
      </Switch>
    </Layout>
  );
}

export default App;
