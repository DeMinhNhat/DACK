import { combineReducers } from 'redux'
import { maxHeight } from './maxHeight'
import { sequence } from './sequence'
import { posts } from './posts'
import { auth } from './auth'

const rootReducer = combineReducers({
    auth,
    posts,
    maxHeight,
    sequence,
})
export default rootReducer;