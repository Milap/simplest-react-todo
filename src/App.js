import './App.css';
import Nav from './components/Nav';
import Todo from './components/Todo';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {

    const currentTheme = useSelector(state => state.currentTheme);
    const title = "Add New Todo:";
    const appTitle = "Simplest ToDo";
    const currentBGClass = currentTheme === 'light' ? 'bg-light' : 'bg-dark';
    const currentTextClass = currentTheme === 'light' ? 'text-dark' : 'text-light';
    
    useEffect(() => {
        document.body.classList.add(currentBGClass);
        document.querySelector(".form-control").classList.add(currentBGClass);
        document.querySelector(".form-control").classList.add(currentTextClass);
    });

    return (
        <>
            <Nav appTitle={appTitle} />
            <Todo title={title} />
        </>
    );
}

export default App;
