import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

//combine reducers
const reducers = combineReducers({
    currentTheme: themeReducer
})

export default reducers;