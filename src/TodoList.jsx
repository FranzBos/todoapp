import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.title} todo={todo}></Todo>
            ))}
        </ul>
    );
}

export default TodoList;