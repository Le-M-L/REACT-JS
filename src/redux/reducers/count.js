/*
该文件是用于常见一个count 组件服务的reducer   reducer本质就是一个函数
 reducer函数会接收两个参数 第一个是 之前的状态(preState)  和 动作对象 actions
*/
import { INCREMENT, DECREMENT } from "../constant"
const initState = 99; //初始化状态

const countReducer = (preState = initState, actions) => {
    // 从action 对象中获取 type  data
    const { type, data } = actions;
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
};

export default countReducer;
