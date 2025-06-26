import { combineReducers } from "redux";
import add_Reducer from "./CrudReducer";

const userReducer = combineReducers({
    add: add_Reducer
})
export default userReducer;