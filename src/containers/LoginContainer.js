import { connect } from "react-redux";
import Login from "../components/Account/Login";
import * as authAction from "../actions/authAction";

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { onLogIn: authAction.onLogIn })(Login);
