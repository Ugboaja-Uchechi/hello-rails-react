import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import greetingsReducer from './greetings/greeting'

const rootReducer = combineReducers({ greetings: greetingsReducer });

const store = createStore(rootReducer,  applyMiddleware(thunk));

export default store