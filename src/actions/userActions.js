import axios from "../utils/api_fetch"

import { GET_USERS, POST_LOADING } from "./action_types"

export const getUsers = () => dispatch => {
    dispatch(setPostLoading());
    axios
        .get("/users")
        .then(res =>
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_USERS,
                payload: null
            })
        );
};

// Set loading state
export const setPostLoading = () => {
    return {
        type: POST_LOADING
    };
};