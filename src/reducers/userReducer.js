import {
    GET_USERS,
    GET_USER,
    POST_LOADING
} from '../actions/action_types';

const initialState = {
    users: [],
    user: {},
    loading: false
};


export default function (state = initialState, action) {
    switch (action.type) {
        case POST_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        default:
            return state;
    }
}