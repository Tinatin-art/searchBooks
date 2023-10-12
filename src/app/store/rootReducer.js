import {
    combineReducers
} from "redux";
import searchBooks from "../reducer/SearchSlice";

const createReducer = (asyncReducer) => (state, action) => {
    const combineReducer = combineReducers({
        searchBooks,
        ...asyncReducer,
    });

    return combineReducer(state, action);
};

export default createReducer;