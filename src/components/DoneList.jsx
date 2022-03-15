import React from "react";
import Todo from "./Todo";
import "../styles/todoList.css";

function DoneList({ todos, deleteTodo, markAsTodo, updateTodo }) {
  if (todos.length > 0) {
    return (
      <div>
        <h3 className="title">Done</h3>
        <ul className="list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              markAsTodo={markAsTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
  return null;
}

export default DoneList;
