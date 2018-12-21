import { connect } from "react-redux";
import Profile from "../components/Profile";
import * as authAction from "../actions/authAction";

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, {
    onUpdateName: authAction.onUpdateName,
    onUpdatePic: authAction.onUpdatePic,
})(Profile);