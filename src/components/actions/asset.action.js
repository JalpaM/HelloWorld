/* Local imports */

import axios from "axios";
import { GET_ASSET_ERROR, GET_ASSET_INFO } from "../model/events";

function getAccessInfo(){
    return function (dispatch){
        console.info("Calling Asset info ");
        return axios.get("MOCK_DATA.json")
            .then(resp => {
                const data = resp.data;
                dispatch({type: GET_ASSET_INFO, data:  data});
            });
    };
}

function getAccessError(){ // Planning to add another action
    return function (dispatch){
        console.info("Calling Asset Error ");
        return axios.get("MOCK_DATA.json")
            .then(resp => {
                dispatch({type: GET_ASSET_ERROR, data:  resp.error});
            });
    };
}

export const assetActionCreators = {
    getAccessInfo,
    getAccessError
};
