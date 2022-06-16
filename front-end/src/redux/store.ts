import { createStore, applyMiddleware } from "redux";
import { weatherReducer } from "./reducer/weatherReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

export const store = createStore(
  weatherReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
