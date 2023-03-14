export const toggleTheme = (currentTheme) => {
    return (dispatch) => {
        dispatch({
            type: "toggleTheme",
            payload: currentTheme
        });
    }
}