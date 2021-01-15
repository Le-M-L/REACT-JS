import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Switch 只匹配一个  Route路由挂载 Redirect 重定向 页面找不到的时候匹配
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom"
//引入路由
// import { adminRoutes, mainRoutes } from "./routes"

ReactDOM.render(
    <Router>
        <Switch>


            <App />


        </Switch>
    </Router>,
    document.getElementById('root')
);

