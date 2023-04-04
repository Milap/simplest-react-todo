import React, { useState } from 'react';
import TodoList from './TodoList';
import { getTodoFromLocal } from '../helpers/helpers';
import FinishedTodo from '../components/FinishedTodo';
import { getFinishedTodoFromLocal } from '../helpers/helpers';

const Todo = (props) => {
    const [todo, updateTodo] = useState({ items: [], todotext: '' });
    
    let finishedtodoItems;
    let getTodoFromDb = getTodoFromLocal();
    let getFinishedTodo = getFinishedTodoFromLocal();

    const handleOnChange = (e) => {
        updateTodo({ ...todo, [e.target.name]: e.target.value });
    }

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
        props.showAlert("ToDo Added Successfully!", "success");
    }

    const handleMarkAsDone = (id) => {
        const confirm = window.confirm("Sure, You Want To Mark this ToDo As Done?");

        if (confirm) {
            let updatedToDo = getTodoFromDb.filter((todo) => {
                return todo.id !== id;
            });

            if (getFinishedTodo.length > 0) {
                // eslint-disable-next-line
                getTodoFromDb.filter((todo) => {
                    if (todo.id === id) {
                        finishedtodoItems = getFinishedTodo.concat(todo);
                    }
                });
            }
            else {
                finishedtodoItems = getTodoFromDb.filter((todo) => {
                    return todo.id === id;
                });
            }

            localStorage.setItem('todoItems', JSON.stringify(updatedToDo));
            getTodoFromDb = updatedToDo;
            getFinishedTodo = finishedtodoItems;
            localStorage.setItem('finishedtodoItems', JSON.stringify(finishedtodoItems));
            props.showAlert("ToDo Marked As Done Successfully!", "success");
        }
    }

    return <>
        <form method='post' onSubmit={handleOnSubmit}>
            <div>
                <div className="mb-3">
                    <label htmlFor="todotext" className="form-label">{props.title} 👇</label>
                    <input type="text" name='todotext' id='todotext' value={todo.todotext} onChange={handleOnChange} className="form-control" />
                </div>

                <button type="submit" className="my-2 btn btn-primary" disabled={todo.todotext.length === 0 ? `disable` : ""}>Add ToDo</button>
            </div>
        </form>
        <hr />
        <div className='mt-4'>
            <TodoList items={getTodoFromDb} showAlert={props.showAlert} handleMarkAsDone={handleMarkAsDone} />
        </div>
        <hr />
        <div className='mt-4'>
            <FinishedTodo finishedTodos={getFinishedTodo} showAlert={props.showAlert} />
        </div>
    </>;
}

export default Todo;