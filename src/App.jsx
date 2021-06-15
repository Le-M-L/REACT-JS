import React, { Component } from 'react';
import {  withRouter } from "react-router-dom"
import './index.css';
import Count from './views/Count'
import Person from './views/Person'
// Redirect 重定向
// NavLink 
// withRouter 是一个高阶函数   一般组件使用路由api  
// pubsub 组件通讯
 class App extends Component {

    render () {
        return (
            <div className="box">
                <div>
                    {/* 注册路由 */}
                    <Count  />
                    {/* 都匹配不上 进行重定向 */}
                    <br />
                    <Person />
                </div>
            </div>
        )
    }
}
export default withRouter(App)
