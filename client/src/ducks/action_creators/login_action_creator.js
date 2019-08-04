import actionTypes from "../action_types"
import axios from "axios";

export const login = (token, user, push) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.CHANGE_LOADING_STATUS, isLoading: true })
        dispatch({ type: actionTypes.LOGIN_JWT, jwt: token });
        dispatch({ type: actionTypes.LOGIN_USER, user });

        //query DB for Profile by username
        axios.get(`http://localhost:5000/profiles?username=${user.username}`)
            .then(res => {
                dispatch({ type: actionTypes.LOGIN_PROFILE, profile: res.data })

                axios.get("http://localhost:5000/posts")
                    .then(res => {
                        dispatch({ type: actionTypes.LOGIN_POSTS, posts: res.data })
                        dispatch({ type: actionTypes.CHANGE_LOADING_STATUS, isLoading: false })
                        // push("landing");
                    })
                    .catch(err => {
                        console.log("an error occurred when retrieving all the posts" + err);
                    })
            })
            .catch(err => {
                console.log("An error occured when attempting to fetch user's profile" + err)
            })

    }
}