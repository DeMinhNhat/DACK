import { connect } from "react-redux";
import Home from "../components/Home/Home";
import * as authAction from "../actions/authAction";

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, {
    onLogIn: authAction.onLogIn,
    onSignUp: authAction.onSignUp,
})(Home);