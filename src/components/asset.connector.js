import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { AssertDetails } from "./AssertDetails";
import { assetActionCreators } from "./actions/asset.action";

function mapStateToProps(state) {
    const {
        assetInfo,
        error
    } = state.asset;
    return {
        assetInfo,
        error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        getAssetInfo: bindActionCreators(assetActionCreators.getAccessInfo, dispatch),
        getAssetError: bindActionCreators(assetActionCreators.getAccessError, dispatch),
    };
}
 const Asset = connect(mapStateToProps, mapDispatchToProps)(AssertDetails);
 export default Asset;
