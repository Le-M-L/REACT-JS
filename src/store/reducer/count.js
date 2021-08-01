import { INCREASE, DECREASE } from '../constant/count';

//管理数据 reducer
//暴露出去的是一个方法
const defaultState = {
    count: 0,
};

const count = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case INCREASE:
            return { count: state.count + action.data };
        case DECREASE:
            return { count: state.count - action.data };
        default:
            break;
    }
    return state;
};

export default count;
