//createStrore is creating a strore
//combineReducer will helps us combine all of reducers in one unit into one signle reducer
//apply middleware will help us to add middleware to our application

import { createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension"
import {userLoginReducers,userRegisterReducer} from "./reducers/userReducers";
import {savedNewsReducers,saveNewsCreateReducer,newsDeleteReducer} from "./reducers/savedNewsReducers";
import {shareNewsReducer} from "./reducers/newsShareReducers"
const reducer = combineReducers({
    userLogin: userLoginReducers,
    userRegister:userRegisterReducer,
    saveNewsList: savedNewsReducers, 
    saveNews : saveNewsCreateReducer,
    newsDelete : newsDeleteReducer,
    shareNews : shareNewsReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
     userLogin:{userInfo:userInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;