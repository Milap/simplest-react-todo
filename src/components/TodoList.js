import React, { useState, useEffect } from 'react';

const TodoList = (props) => {

    const initState = { newItems: [...props.items] };

    const [listitems, setListitems] = useState(initState);

    useEffect(() => {
        setListitems({ ...listitems, newItems: [...props.items] })
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
        <h4>Your Todos:</h4>
        <ol className="list-group list-group-numbered">
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