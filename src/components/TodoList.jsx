import React from "react";
import Todo from "./Todo";
import '../styles/todoList.css';

function TodoList({ todos }) {
    return (
        <ul className="list">
            {todos.map(todo => (
                <Todo key={todo.title} todo={todo}></Todo>
            ))}
        </ul>
    );
}

export default TodoList;