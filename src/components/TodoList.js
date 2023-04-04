import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const TodoList = (props) => {

    const initState = { newItems: [...props.items] };
    const [listitems, setListitems] = useState(initState);

    let currentTheme = useSelector(state => state.currentTheme);
    if (localStorage.getItem("currentTheme")) {
        currentTheme = localStorage.getItem("currentTheme");
    }

    useEffect(() => {
        setListitems({ ...listitems, newItems: [...props.items] })
        // eslint-disable-next-line
    }, [props.items]);

    if (listitems.newItems.length === 0) {
        return <>
            <h6>No ToDo Found 🤷</h6>
        </>
    } else {
        return (<>
            <h5 className='todoLabel'>Your Todos 👇</h5>
            <ol className="list-group list-group-numbered" data-bs-theme={currentTheme}>
                {listitems.newItems.map(item => (
                    <li key={item.id} className="list-group-item">
                        <input className="form-check-input" type="checkbox" title='Mark As Done' onClick={() => props.handleMarkAsDone(item.id)}></input>
                        {item.todotext}
                    </li>
                ))}
            </ol>
        </>);
    }
}

export default TodoList;