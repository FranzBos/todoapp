import React from "react";
import Todo from "./Todo";
import "../styles/todoList.css";

function TodoList({ todos, deleteTodo, toggleDone, updateTodo }) {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
          updateTodo={updateTodo}
        ></Todo>
      ))}
    </ul>
  );
}

export default TodoList;
