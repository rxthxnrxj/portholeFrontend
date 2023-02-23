import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  getPotholeReducer,
  updatePotholeReducer,
  sendImageReducer
} from "./reducers/potholeReducers";

const reducer = combineReducers({
  getPotholeRed: getPotholeReducer,
  updatePotholeRed: updatePotholeReducer,
  sendImageRed:sendImageReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
