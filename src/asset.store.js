/* Library imports */
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

/* Importing reducer */
import assetReducer from "./container.reducer";

/* Default export */
export default createStore(assetReducer, applyMiddleware(thunk, logger));
