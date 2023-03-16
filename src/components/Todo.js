import React, { useState } from 'react';
import TodoList from './TodoList';

const Todo = (props) => {

    const [todo, updateTodo] = useState({ items: [], todotext: '' });

    const handleOnChange = (e) => {
        updateTodo({ ...todo, [e.target.name]: e.target.value });
    }

    const getTodoFromLocal = () => {
        let getTodo = localStorage.getItem("todoItems") ? localStorage.getItem("todoItems") : '[]';
        return JSON.parse(getTodo);
    }

    let getTodoFromDb = getTodoFromLocal();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let updatedTodo;
        if (todo.todotext.length === 0) {
            return;
        }
        const newItem = {
            todotext: todo.todotext,
            id: Date.now()
        };

        if (getTodoFromDb) {
            updatedTodo = getTodoFromDb.concat(newItem);
        } else {
            updatedTodo = todo.items.concat(newItem);
        }
        updateTodo({ items: updatedTodo, todotext: '' });
        localStorage.setItem('todoItems', JSON.stringify(updatedTodo));
    }

    return <>

        <form method='post' onSubmit={handleOnSubmit}>
            <div>
                <div className="mb-3">
                    <label htmlFor="todotext" className="form-label">{props.title}</label>
                    <input type="text" name='todotext' id='todotext' value={todo.todotext} onChange={handleOnChange} className="form-control" />
                </div>

                <button type="submit" className="my-2 btn btn-primary" disabled={todo.todotext.length === 0 ? `disable` : ""}>Add ToDo</button>
            </div>
        </form>
        <div className='mt-4'>
            <TodoList items={getTodoFromDb} />
        </div>
    </>;
}

export default Todo;