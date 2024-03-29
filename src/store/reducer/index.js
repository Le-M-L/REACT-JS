import { combineReducers } from 'redux';

import routeMenu from "./routeMenu"
import app from "./app"
const rootReducer = {
    routeMenu,
    app
};

export const createReducer = (asyncReducers) =>
    combineReducers({
        ...rootReducer,
        ...asyncReducers,
    });
export default combineReducers(rootReducer);
