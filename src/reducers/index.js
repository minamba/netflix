import {combineReducers} from "redux"
import {movieReduce, movieReducer} from "./movies"

//combien reducer est utilisé dans le cas ou on a plusieurs reducer
const rootReducer = combineReducers({
    movies: movieReducer
})


export default rootReducer