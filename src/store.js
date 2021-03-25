import thunk from "redux-thunk";
import {applyMiddleware, createStore } from "redux";
import weatherReducer from './reducers/weatherReducer';


const middleware = applyMiddleware(thunk);

const store = createStore(weatherReducer,middleware);

export default store;