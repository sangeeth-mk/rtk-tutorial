import { combineReducers } from "redux";
import countReducer from "./counterSlice";
import count2Reducer from "./counterSlice2";


export const rootReducer = combineReducers({
   counter :  countReducer,
   count2: count2Reducer
});
