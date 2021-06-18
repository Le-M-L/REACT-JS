import React, { Component,Suspense } from 'react';
import { Route, Redirect, withRouter } from "react-router-dom"
import './index.css';
import { Routers } from "./routers"
import MyNavLink from "./views/MyNavLink"
import HomeNews from './views/Home_News'
// Redirect 重定向
// NavLink 
// withRouter 是一个高阶函数   一般组件使用路由api  
// pubsub 组件通讯
 class App extends Component {

    render () {
        return (
            <div className="box">
                <div className="linkBox">
                    <MyNavLink className="link" to="/home" children={<div>home</div>} />
                    <MyNavLink className="link" to="/about" children={<div>About</div>} />
                    <MyNavLink className="link" to={{pathname:'/home/home-news',state:{id:123,title:'title'}}} children={<div>About</div>} />
                </div>
                <div>
                    <Suspense fallback={<h1>加载中。。。。</h1>} >
                    {/* 注册路由 */}
                    {
                        Routers.map(router => {
                            return <Route path={router.path} key={router.path} component={router.component} />
                        })
                    }
                    <Route path="/home/home-news" component={HomeNews} />
                    {/* 都匹配不上 进行重定向 */}
                    <Redirect to="/home" />
                    </Suspense>
                </div>
            </div>
        )
    }
}
export default withRouter(App)
