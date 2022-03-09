import React from "react";
import '../styles/todo.css';

function Todo({todo, deleteTodo}) {
    return (
        <div className="container">
            <input type="checkbox" className="checkbox"/>
            <li className={todo.done ? "doneItem" : "item"}>{todo.title}</li>
            <button className="deleteButton" onClick={onDeleteClicked}>Delete</button>
        </div>
    )

    function onDeleteClicked() {
        deleteTodo(todo)
    }
}

export default Todo;