import actionTypes from "../action_types";
import initialState from "../initial_state"

export const jwtReducer = (state = initialState.jwt, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_JWT: {
            return action.jwt;
        }
        default:
            return state;
    }
};