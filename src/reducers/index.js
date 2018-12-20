import { combineReducers } from 'redux'
import { posts } from './posts'
import { auth } from './auth'
import { maxHeight } from './maxHeight'

const rootReducer = combineReducers({
    auth,
    posts,
    maxHeight,
})
export default rootReducer;