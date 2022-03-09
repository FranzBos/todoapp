import React from "react";
import Todo from "./Todo";
import "../styles/todoList.css";

function TodoList({ todos, deleteTodo, toggleDone }) {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        ></Todo>
      ))}
    </ul>
  );
}

export default TodoList;
