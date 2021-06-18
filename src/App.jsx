import React, { Component, Suspense } from 'react';
import { Route, Redirect, withRouter } from "react-router-dom"

import './index.less';
// Redirect 重定向
// NavLink 
// withRouter 是一个高阶函数   一般组件使用路由api  
// pubsub 组件通讯
import Home from "./views/Home"
class App extends Component {

    render () {
        return (
            <div className="box">
                <Home />
                123
                <span className="appBox">666</span>
            </div>
        )
    }
}
export default withRouter(App)
