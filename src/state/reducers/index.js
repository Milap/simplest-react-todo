import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const reducers = combineReducers({
    currentTheme: themeReducer
})

export default reducers;