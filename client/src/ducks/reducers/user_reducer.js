import initialState from "../initial_state";
import actionTypes from "../action_types";


export const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER: {
            return { ...action.user };
        }
        default:
            return state;


    }
}