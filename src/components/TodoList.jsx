import React from "react";
import Todo from "./Todo";
import "../styles/todoList.css";

function TodoList({ todos, deleteTodo, markAsDone, updateTodo }) {
  let todoList = null;
  if (todos.length > 0) {
    todoList = (
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
            ></Todo>
          ))}
        </ul>
      </div>
    );
  }
  return todoList;
}

export default TodoList;
