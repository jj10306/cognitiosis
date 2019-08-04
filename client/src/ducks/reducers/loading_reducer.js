import initialState from "../initial_state";
import actionTypes from "../action_types";


export const loadingReducer = (state = initialState.loading, action) => {
    switch (action.type) {
        case(actionTypes.CHANGE_LOADING_STATUS): {
            return action.isLoading;
        }
        default:
            return state;

    }
}