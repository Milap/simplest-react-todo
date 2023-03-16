import React from 'react';
import Todo from './Todo';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { changeTheme } from '../helpers/helpers';

const Home = () => {
    const title = "Add New Todo:";
    const currentTheme = useSelector(state => state.currentTheme);

    useEffect(() => { changeTheme(currentTheme); });

    return <>
        <Todo title={title} />
    </>;
}

export default Home;