import initialState from "../initial_state";
import actionTypes from "../action_types";


export const profileReducer = (state = initialState.profile, action) => {
    switch (action.type) {
        case (actionTypes.LOGIN_PROFILE): {
            return { ...action.profile };
        }
        default:
            return state;
    }
}