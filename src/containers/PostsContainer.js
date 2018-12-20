import { connect } from "react-redux";
import Posts from "../components/Home/Posts";
import * as postAction from "../actions/postAction";

const mapStateToProps = state => ({ auth: state.auth, post: state.post });

export default connect(mapStateToProps, { retrievePost: postAction.retrievePost })(Posts);