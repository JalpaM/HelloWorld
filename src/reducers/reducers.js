import { GET_ASSET_INFO, GET_ASSET_ERROR } from "../components/model/events";
import { ReplaySubject } from "rxjs";


//Initial State for store
const initialState = {
   assetInfo: [],
    error: {}
};


//Reducer
export default function reducer(state = initialState, action) {
    switch(action.type){
        case GET_ASSET_INFO:
            return applyAssetInfo(state, action);
        case GET_ASSET_ERROR:
            return applyAssetError(state, action);
        default:
          return state;
    }

}
//
//RX Subject
const assetSubject = new ReplaySubject(1);

export const rxSubjects = {
        assetSubject
};

//Updates the value of store.asset info with the value action.data
function applyAssetInfo(state, action) {
    state.assetInfo = action.data;
    assetSubject.next(action.data);
    return {
        ...state,
    };
}

function applyAssetError(state, action) {
    state.error = action.data;
    return {
        ...state,
    };
}



