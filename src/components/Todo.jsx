import React from "react";
import "../styles/todo.css";

function Todo({ todo, deleteTodo, toggleDone }) {
  return (
    <div
      className={todo.done ? "itemContainer doneContainer" : "itemContainer"}
    >
      <input
        type="checkbox"
        className="checkbox"
        onChange={onDoneCheckChanged}
      />
      <li className={todo.done ? "item doneItem" : "item"}>{todo.title}</li>
      <button className="deleteButton" onClick={onDeleteClicked}>
        Delete
      </button>
    </div>
  );

  function onDeleteClicked() {
    deleteTodo(todo.id);
  }

  function onDoneCheckChanged() {
    toggleDone(todo.id);
  }
}

export default Todo;
