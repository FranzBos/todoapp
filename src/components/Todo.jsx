import React from "react";
import '../styles/todo.css';

function Todo({todo}) {
    return (
        <div className="container">
            <input type="checkbox" className="checkbox"/>
            <li className={todo.done ? "doneItem" : "item"}>{todo.title}</li>
            <button className="deleteButton">Delete</button>
        </div>
    )
}

export default Todo;