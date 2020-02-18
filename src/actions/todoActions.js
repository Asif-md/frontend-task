// import axios from "axios";
import axios from "../utils/api_fetch"

import {
    ADD_TODO,
    GET_ERRORS,
    CLEAR_ERRORS,
    GET_TODOS,
    GET_POST,
    POST_LOADING,
    DELETE_TODO,
    UPDATE_TODO
} from "./action_types";

// Add Post
export const addTodo = postData => dispatch => {
    dispatch(clearErrors());
    axios
        .post("/todos", postData)
        .then(res =>
            dispatch({
                type: ADD_TODO,
                payload: res.data
            })

        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Get Posts
export const getTodos = (value) => dispatch => {
    dispatch(setPostLoading());
    axios
        .get(`todos?userId=${value}`)
        .then(res =>
            dispatch({
                type: GET_TODOS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_TODOS,
                payload: null
            })
        );

};

export const updateTodo = (value, data) => dispatch => {
    dispatch(setPostLoading());
    axios
        .put(`/todos/${value}`, data)
        .then(res =>
            dispatch({
                type: UPDATE_TODO,
                payload: res.data
            }),

        )
        .catch(err =>
            dispatch({
                type: UPDATE_TODO,
                payload: null
            })
        );

};


// Delete Post
export const deleteTodo = id => dispatch => {
    axios
        .delete(`/todos/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_TODO,
                payload: id
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};




// Set loading state
export const setPostLoading = () => {
    return {
        type: POST_LOADING
    };
};

// Clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};
