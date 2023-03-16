import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
import { changeTheme } from '../helpers/helpers';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    // eslint-disable-next-line
    const [isDarkMode, setDarkMode] = React.useState(false);
    
    const currentTheme = useSelector(state => state.currentTheme);

    const dispatch = useDispatch();
    const { toggleTheme } = bindActionCreators(actionCreators, dispatch);

    const toggleDarkMode = () => {

        toggleTheme(currentTheme === 'dark' ? "light" : "dark");
        changeTheme(currentTheme);
    
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