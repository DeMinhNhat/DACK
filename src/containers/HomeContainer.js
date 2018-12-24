import { connect } from "react-redux";
import Home from "../components/Home";
import * as authAction from "../actions/authAction";
import * as followAction from "../actions/followAction";
import * as postAction from "../actions/postAction";

const mapStateToProps = state => ({ auth: state.auth, posts: state.posts });

export default connect(mapStateToProps, {
    onUpdateName: authAction.onUpdateName,
    onUpdatePic: authAction.onUpdatePic,
    onLogOut: authAction.onLogOut,
    onPost: postAction.onPost,
    retrievePost: postAction.retrievePost,
    onFollow: followAction.onFollow,
})(Home);