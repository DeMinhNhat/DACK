import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import * as postAction from "../actions/postAction";
import * as followAction from "../actions/followAction";

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { onPost: postAction.onPost, onFollow: followAction.onFollow })(Navbar);