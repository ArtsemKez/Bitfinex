import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import bookReducer from "./bookReducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
    bookPage: bookReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

window._store = store;

export default store;