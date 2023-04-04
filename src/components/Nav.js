import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
import { Link } from 'react-router-dom';

const setBodyColor = (bgColor, color) => {
    document.body.style.background = bgColor;
    document.body.style.color = color;
}

const setTextBoxColor = (currentTheme) => {
    if(document.getElementById("todotext")) {
        if (currentTheme === 'dark') {
            document.getElementById("todotext").style.background = "#212529";
            document.getElementById("todotext").style.color = "#fff";
        } else {
            document.getElementById("todotext").style.background = "#fff";
            document.getElementById("todotext").style.color = "#212529";
        }
    }
}

const Nav = (props) => {
    const [mode, setMode] = useState(false);
    const dispatch = useDispatch();
    const { toggleThemeToDark, toggleThemeToLight } = bindActionCreators(actionCreators, dispatch);

    let currentTheme = useSelector(state => state.currentTheme);
    let newTheme = currentTheme;
    let newMode;

    useEffect(() => {
        setTextBoxColor(currentTheme);
    });
    
    if (localStorage.getItem("currentTheme")) {
        currentTheme = localStorage.getItem("currentTheme");
        currentTheme === 'dark' ? setBodyColor("#212529", "#fff") : setBodyColor("#fff", "#212529");
        newMode = true;
        if (currentTheme === 'light') {
            newMode = false;
        }
    }
    
    const toggleTheme = () => {
        currentTheme === 'light' ? toggleThemeToDark() : toggleThemeToLight();
        
        if (currentTheme === 'light') newTheme = 'dark';
        else newTheme = 'light';
        
        localStorage.setItem("currentTheme", newTheme);
        setMode(!mode);
        currentTheme === 'light' ? setBodyColor("#212529", "#fff") : setBodyColor("#fff", "#212529");
        setTextBoxColor(currentTheme);
        props.showAlert(`Theme Changed To ${currentTheme === 'dark' ? 'light' : 'dark'} Successfully!`, "success");
    };

    return <>
        <nav className="navbar navbar-expand-lg bg-body-secondary" data-bs-theme={currentTheme}>
            <div className="container-fluid">
                <Link className="navbar-brand" aria-current="page" to="/">{props.appTitle}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch d-flex">
                    <DarkModeSwitch
                        checked={newMode}
                        onChange={toggleTheme}
                        size={30}
                    />
                </div>
            </div>
        </nav>
    </>;
}

export default Nav;