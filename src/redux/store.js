import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import wordReducer from "./reducer/wordReducer";


const store = createStore(wordReducer, applyMiddleware(thunk));

export default store;