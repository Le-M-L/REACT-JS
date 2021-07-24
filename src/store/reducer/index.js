//管理数据 reducer
//暴露出去的是一个方法
const defaultState = {
    inputValue: '纯函数数据',
    list: [
        '数据1',
        '数据2',
        '数据3',
    ]
}

export const count = (state = defaultState,action) => {
    switch (action.type) {
        case 'add':
               
            break;
    
        default:
            break;
    }
    return state
}