import { combineReducers } from 'redux'
import { maxHeight } from './maxHeight'
import { posts } from './posts'
import { auth } from './auth'

const rootReducer = combineReducers({
    auth,
    posts,
    maxHeight,
})
export default rootReducer;