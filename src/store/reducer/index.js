import { combineReducers } from 'redux';

import count from "./count"
const rootReducer = {
    count,
};

export const createReducer = (asyncReducers) =>
    combineReducers({
        ...rootReducer,
        ...asyncReducers,
    });
export default combineReducers(rootReducer);
