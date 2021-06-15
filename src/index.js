import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Switch } from 'react-router-dom';
import store from './redux';
// 自动传给容器组件store
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                {/* 让app 里面的所有组件 都能接收到store */}
                <Provider store={store}>
                    <App />
                </Provider>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
