// State function for changing theme to Dark 
export const toggleThemeToDark = (themeType) => {
    return (dispatch) => {
        dispatch({
            type: "toDark",
            payload: themeType
        });
    }
}

// State function for changing theme to Light
export const toggleThemeToLight = (themeType) => {
    return (dispatch) => {
        dispatch({
            type: "toLight",
            payload: themeType
        });
    }
}
