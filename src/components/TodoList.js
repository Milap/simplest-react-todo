import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const TodoList = (props) => {

    const initState = { newItems: [...props.items] };
    const [listitems, setListitems] = useState(initState);

    const currentTheme = useSelector(state => state.currentTheme);

    useEffect(() => {
        setListitems({ ...listitems, newItems: [...props.items] })
        // eslint-disable-next-line
    }, [props.items])


    if (listitems.newItems && listitems.newItems.length === 0) return;

    const handleDelete = (id) => {
        let confirm = window.confirm("Sure you want to delete this todo ?");
        if (confirm) {
            const newTodos = listitems.newItems.filter((todo) => {
                return todo.id !== id;
            });
            localStorage.setItem('todoItems', JSON.stringify(newTodos));
            setListitems({ newItems: newTodos });
        }
    }

    return (<>
        <h4 className='todoLabel'>Your Todos:</h4>
        <ol className="list-group list-group-numbered" data-bs-theme={currentTheme}>
            {listitems.newItems.map(item => (
                <li key={item.id} className="list-group-item">
                    {item.todotext}
                    <button type="button" className="mx-3 btn-close" onClick={() => handleDelete(item.id)} aria-label="Close" title='Delete this todo'></button>
                </li>
            ))}
        </ol>
        <ul>
        </ul>
    </>);
}

export default TodoList;