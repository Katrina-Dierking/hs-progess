import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import {
//     assignmentCreateReducer,
//     assignmentDeleteReducer,
//     assignmentListReducer,
//     assignmentUpdateReducer,
// } from "./reducers/assignmentsReducers";
import {
    userLoginReducer,
    userRegisterReducer,
    userUpdateReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
    // assignmentList:assignmentListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    // assignmentCreate:assignmentCreateReducer,
    // assignmentDelete:assignmentDeleteReducer,
    // assignmentUpdate:assignmentUpdateReducer,
    userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
