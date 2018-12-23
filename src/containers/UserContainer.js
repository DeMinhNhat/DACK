import { connect } from "react-redux";
import User from "../components/User";
import * as authAction from "../actions/authAction";
import * as followAction from "../actions/followAction";
import * as postAction from "../actions/postAction";

const mapStateToProps = state => ({ auth: state.auth, post: state.post });

export default connect(mapStateToProps, {
    onUpdateName:authAction.onUpdateName,
    onPost: postAction.onPost,
    onFollow: followAction.onFollow,
    onLogOut: authAction.onLogOut,
})(User);