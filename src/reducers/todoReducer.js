import {
    ADD_TODO,
    GET_TODOS,
    GET_POST,
    DELETE_TODO,
    UPDATE_TODO,
    POST_LOADING
} from '../actions/action_types';

const initialState = {
    todos: [],
    todo: {},
    loading: false
};


export default function (state = initialState, action) {
    switch (action.type) {
        case POST_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            };
        case GET_POST:
            return {
                ...state,
                todo: action.payload,
                loading: false
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
                loading: false
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: [...state.todos]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
}