import React from "react";
import Todo from "./Todo";
import "../styles/todoList.css";

function TodoList({ todos, deleteTodo, markAsDone, updateTodo }) {
  return (
    <div>
      <h3>To do</h3>
      <ul className="list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            markAsDone={markAsDone}
            updateTodo={updateTodo}
          ></Todo>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
