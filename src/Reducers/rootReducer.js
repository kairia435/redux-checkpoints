import { combineReducers } from "redux";

import FilterReducerbool from "./FilterReducerbool";

import Taskreducer from "./Taskreducer";

const rootReducer = combineReducers({
  FilterReducerbool,
  Taskreducer
});

export default rootReducer;