import { connect } from 'react-redux'
import SignUp from '../Component/SignUp'
import * as authAction from '../actions/authAction'

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { onSignUp: authAction.onSignUp })(SignUp);