import postReducer from "./Reducer/postReducer";
const { createStore, applyMiddleware, combineReducers } = require("redux");
const { thunk } = require("redux-thunk");

const rootReducer = combineReducers({
    post: postReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;