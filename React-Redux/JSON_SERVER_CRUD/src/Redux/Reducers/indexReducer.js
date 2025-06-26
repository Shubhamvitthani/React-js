import { combineReducers } from "redux"
import crudReducer from "./crudReducer"

const rootReducer = combineReducers({
    cruddata: crudReducer
})

export default rootReducer;