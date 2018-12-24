import { combineReducers } from 'redux'
import { maxHeight } from './maxHeight'
import { sequence } from './sequence'
import { posts } from './posts'
import { auth } from './auth'
import { followings } from './followings'

const rootReducer = combineReducers({
    auth,
    posts,
    maxHeight,
    sequence,
    followings,
})
export default rootReducer;