//Theme reducer function
const themeReducer = (state = "light", action) => {
    if (action.type === 'toDark') {
        return "dark";
    }
    else if (action.type === 'toLight') {
        return "light";
    }
    else {
        return state;
    }
}

export default themeReducer;