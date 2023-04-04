import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const FinishedTodo = (props) => {
    const initState = { newFinishedItems: [...props.finishedTodos] };
    const [finishedItems, setFinishedItems] = useState(initState);

    let currentTheme = useSelector(state => state.currentTheme);
    if (localStorage.getItem("currentTheme")) {
        currentTheme = localStorage.getItem("currentTheme");
    }

    useEffect(() => {
        setFinishedItems({ ...finishedItems, newFinishedItems: [...props.finishedTodos] })
        // eslint-disable-next-line
    }, [props.finishedTodos]);

    const handleDelete = (id) => {
        let confirm = window.confirm("Sure, You Want To Delete This ToDo ?");
        if (confirm) {
            const newTodos = finishedItems.newFinishedItems.filter((todo) => {
                return todo.id !== id;
            });
            setFinishedItems(newTodos);
            localStorage.setItem('finishedtodoItems', JSON.stringify(newTodos));
            props.showAlert("ToDo Deleted Successfully!", "danger");
        }
    }

    if (finishedItems.newFinishedItems?.length === undefined) {
        return <h6>No Finished ToDo Found 🤷</h6>
    } else {
        return <>
            <h5 className='todoLabel'>Finished Todos 👇</h5>
            <ol className="list-group list-group-numbered" data-bs-theme={currentTheme}>
                {finishedItems.newFinishedItems.map(item => (
                    <li key={item.id} className="list-group-item">
                        {item.todotext}
                        <button type="button" className="mx-3 btn-close" onClick={() => handleDelete(item.id)} aria-label="Close" title='Delete this todo'></button>
                    </li>
                ))}
            </ol>
        </>;
    }
}

export default FinishedTodo;