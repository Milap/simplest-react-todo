import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Nav = (props) => {
    const [isDarkMode, setDarkMode] = React.useState(false);

    const currentTheme = useSelector(state => state.currentTheme);

    const dispatch = useDispatch();
    const { toggleTheme } = bindActionCreators(actionCreators, dispatch);

    const toggleDarkMode = () => {
        toggleTheme(currentTheme === 'dark' ? "light" : "dark");
        const currentBGClass = currentTheme === 'light' ? 'bg-light' : 'bg-dark';
        const currentTextClass = currentTheme === 'light' ? 'text-dark' : 'text-light';
        document.body.classList.remove(currentBGClass);
        document.querySelector(".form-control").classList.remove(currentBGClass);
        document.querySelector(".form-control").classList.remove(currentTextClass);
    };
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={currentTheme}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.appTitle}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch d-flex">
                    <DarkModeSwitch
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={30}
                    />
                </div>
            </div>
        </nav>
    </>;
}

export default Nav;