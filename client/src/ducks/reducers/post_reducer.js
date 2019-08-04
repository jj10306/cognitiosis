import initialState from "../initial_state";
import actionTypes from "../action_types";


export const postReducer = (state = initialState.posts, action) => {
    switch(action.type) {
        case(actionTypes.LOGIN_POSTS): {
            return [ ...action.posts ];
        }
        case(actionTypes.NEW_POST): {
            return [ action.post, ...state ]
        }
        default:
            return state;
    }
}