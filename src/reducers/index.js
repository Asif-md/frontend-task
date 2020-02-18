import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import errorReducer from './errorReducer'
import userReducer from "./userReducer"

export default combineReducers({
    todos: todoReducer,
    error: errorReducer,
    users: userReducer
});
