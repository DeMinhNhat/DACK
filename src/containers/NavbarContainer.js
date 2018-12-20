import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import * as postAction from "../actions/postAction";

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { onPost: postAction.onPost })(Navbar);