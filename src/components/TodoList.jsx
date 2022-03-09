import React from "react";
import Todo from "./Todo";
import '../styles/todoList.css';

function TodoList({ todos, deleteTodo }) {
    return (
        <ul className="list">
            {todos.map(todo => (
                <Todo key={todo.title} todo={todo} deleteTodo={deleteTodo}></Todo>
            ))}
        </ul>
    );
}

export default TodoList;