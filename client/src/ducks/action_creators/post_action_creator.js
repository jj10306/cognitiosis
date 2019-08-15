import axios from "axios";
import actionTypes from "../action_types";
import { LOCAL_API_HOST } from "../../utils/constants/api_config"

export const newPost = postData => {
    return (dispatch) => {
        dispatch({ type: actionTypes.CHANGE_LOADING_STATUS, isLoading: true })
        axios.post(`${LOCAL_API_HOST}/posts`, postData)
            .then(({ data: post}) => {
                dispatch({ type: actionTypes.NEW_POST, post })
                dispatch({ type: actionTypes.CHANGE_LOADING_STATUS, isLoading: false })
            })
            .catch(err => {
                console.log("An error occurred trying to post")
            })
    }
}