/**
 * 该文件专门伟 count 组件生成action 对象
 */
 import { INCREMENT, DECREMENT } from "../constant"


 //同步actions 就是值action的值为object类型的一般对象
export const createIncrementAction = data => ({type:INCREMENT, data})
export const createDecrementAction = data => ({type:DECREMENT, data})

//异步action 就是指 actions 的值为函数 异步函数中action 一遍都会调用同步action
export const createIncrementAsyncAction = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
}

