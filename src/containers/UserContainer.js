import { connect } from "react-redux";
import User from "../components/User";
import * as authAction from "../actions/authAction";
import * as followAction from "../actions/followAction";
import * as postAction from "../actions/postAction";

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, {
    onUpdateName: authAction.onUpdateName,
    onUpdatePic: authAction.onUpdatePic,
    onLogOut: authAction.onLogOut,
    onPost: postAction.onPost,
    onFollow: followAction.onFollow,
    getFollowings: followAction.getFollowings,
    onPayment: authAction.onPayment,
})(User);