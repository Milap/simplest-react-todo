const themeReducer = (state = "light", action) => {
    if (action.type === 'toggleTheme') {
        return action.payload;
    }
    else {
        return state;
    }
}

export default themeReducer;