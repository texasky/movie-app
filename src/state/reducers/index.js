 import { combineReducers } from "redux";
 import moviesReducer from "./moviesReducer";

 const reducers = combineReducers({
   moviesStore: moviesReducer
 })

 export default reducers;