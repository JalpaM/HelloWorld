/* Library imports */
import { combineReducers } from "redux";

/* Local imports */
import assetReducer from "./reducers/reducers";

const reducer = combineReducers( { asset: assetReducer } );

/* Default export */
export default reducer;
