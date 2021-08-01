import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
//纯函数
import rootReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]

//创建redux创建方法    将方法传入到创建里
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//配置调试工具
);
export default store