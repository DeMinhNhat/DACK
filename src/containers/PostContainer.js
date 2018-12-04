import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { firebaseConnect } from "react-redux-firebase";
import Post from "../components/Post";
import * as postAction from "../actions/postAction";

const mapStateToProps = state => ({});

export default compose(
  firebaseConnect(),
  withRouter,
  connect(mapStateToProps, { onPost: postAction.onPost })
)(Post);
