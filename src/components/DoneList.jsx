import React from "react";
import Todo from "./Todo";
import "../styles/todoList.css";

function DoneList({ todos, deleteTodo, markAsTodo, updateTodo }) {
  return (
    <div>
      <h3>Done</h3>
      <ul className="list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            markAsTodo={markAsTodo}
          ></Todo>
        ))}
      </ul>
    </div>
  );
}

export default DoneList;
