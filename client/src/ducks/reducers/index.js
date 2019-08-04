import { combineReducers } from "redux";
import { jwtReducer } from "./jwt_reducer"
import { userReducer } from "./user_reducer";
import { profileReducer } from "./profile_reducer";
import { postReducer } from "./post_reducer";
import { loadingReducer } from "./loading_reducer";

const rootReducer = combineReducers({
    activeJWT: jwtReducer,
    activeUser: userReducer,
    activeProfile: profileReducer,
    allPosts: postReducer,
    isLoading: loadingReducer,
});

export default rootReducer;