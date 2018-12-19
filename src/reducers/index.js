import { combineReducers } from 'redux'
import { post } from './post'
import { auth } from './auth'

const rootReducer = combineReducers({
    auth,
    post,
})
export default rootReducer;