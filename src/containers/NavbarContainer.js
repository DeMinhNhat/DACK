import { compose } from "redux";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import * as postAction from "../actions/postAction";

const mapStateToProps = state => ({});

export default compose(connect(mapStateToProps, { onPost: postAction.onPost }))(Navbar);