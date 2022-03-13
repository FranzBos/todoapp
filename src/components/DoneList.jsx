import React from "react";
import Todo from "./Todo";
import "../styles/todoList.css";

function DoneList({ todos, deleteTodo, markAsTodo, updateTodo }) {
  let doneList = null;
  if (todos.length > 0) {
    doneList = (
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
            ></Todo>
          ))}
        </ul>
      </div>
    );
  }

  return doneList;
}

export default DoneList;
