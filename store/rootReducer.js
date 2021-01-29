import {combineReducers} from "redux";
import user from './settings/slice'


const reducer = combineReducers({
    user:user
})

export default reducer;
