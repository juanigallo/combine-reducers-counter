import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { firstCounter } from "./reducers/firstCounter";
import { secondCounter } from "./reducers/secondCounter";

const InitialState = {};

export const addToFirstCounter = () => (dispatch) => {
  return dispatch({
    type: "addToFirstCounter"
  });
};

export const addToSecondCounter = () => (dispatch) => {
  return dispatch({
    type: "addToSecondCounter"
  });
};

export function initializeStore() {
  return createStore(
    combineReducers({ firstCounter, secondCounter }),
    InitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
