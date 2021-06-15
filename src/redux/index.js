/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 创建 redux 中 最为核心的 store
// applyMiddleware 执行中间件
// combineReducers 合并reducer
import { createStore, applyMiddleware } from 'redux';
// 引入为Count 组件服务的 reducer
import allReducer from './reducers';
//中间件
import thunk from 'redux-thunk';

export default createStore(allReducer, applyMiddleware(thunk));
