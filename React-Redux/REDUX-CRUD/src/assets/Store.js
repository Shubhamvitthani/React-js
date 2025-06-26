import { createStore } from "redux";
import userReducer from "../Redux/Action/Reducer/indexReducer";

const store = createStore(userReducer)
export default store;