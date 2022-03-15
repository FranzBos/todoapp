import React from "react";
import Todo from "./Todo";
import "../styles/todoList.css";

function TodoList({ todos, deleteTodo, markAsDone, updateTodo }) {
  if (todos.length > 0) {
    return (
      <div>
        <h3 className="title">To do</h3>
        <ul className="list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              markAsDone={markAsDone}
              updateTodo={updateTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
  return null;
}

export default TodoList;
