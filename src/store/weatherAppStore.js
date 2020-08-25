// Store
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import promiseMiddleware from 'redux-promise'
import storeReducer from "../reducers/index";

const initialState = {
  weatherData: {
    dataLoaded: false
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
         storeReducer,
         initialState,
         composeEnhancers(applyMiddleware(thunk))
       );
