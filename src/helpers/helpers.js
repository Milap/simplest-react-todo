// Fetch ToDos from browser localstorage
const getTodoFromLocal = () => {
    let getTodo = localStorage.getItem("todoItems") ? localStorage.getItem("todoItems") : '[]';
    return JSON.parse(getTodo);
}

// Fetch Finished ToDos from browser localstorage
const getFinishedTodoFromLocal = () => {
    let getFinishedTodo = localStorage.getItem("finishedtodoItems") ? localStorage.getItem("finishedtodoItems") : '[]';
    return JSON.parse(getFinishedTodo);
}

export { getTodoFromLocal, getFinishedTodoFromLocal };