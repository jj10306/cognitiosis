import axios from "axios";
import actionTypes from "../action_types";

export const newPost = postData => {
    return (dispatch) => {
        dispatch({ type: actionTypes.CHANGE_LOADING_STATUS, isLoading: true })
        axios.post("http://localhost:5000/posts", postData)
            .then(({ data: post}) => {
                dispatch({ type: actionTypes.NEW_POST, post })
                dispatch({ type: actionTypes.CHANGE_LOADING_STATUS, isLoading: false })
            })
            .catch(err => {
                console.log("An error occurred trying to post")
            })
    }
}