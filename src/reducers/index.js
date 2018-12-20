import { combineReducers } from 'redux'
import { post } from './post'
import { auth } from './auth'
import { maxHeight } from './maxHeight'

const rootReducer = combineReducers({
    auth,
    post,
    maxHeight,
})
export default rootReducer;