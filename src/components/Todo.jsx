import React from "react";
import "../styles/todo.css";

function Todo({ todo, deleteTodo, toggleDone, updateTodo }) {

  function onDeleteClicked() {
    deleteTodo(todo.id);
  }

  function onDoneCheckChanged() {
    toggleDone(todo.id);
  }

  function onTitleEdited(event) {
    updateTodo(todo, event.target.value);
  }
  
  return (
    <div
      className={todo.done ? "itemContainer doneContainer" : "itemContainer"}
    >
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.done}
        onChange={onDoneCheckChanged}
      />
      <li className="item">
        <input
          type="text"
          className={todo.done ? "itemLabel doneItemLabel" : "itemLabel"}
          defaultValue={todo.title}
          onChange={onTitleEdited}
        />
      </li>
      <button className="deleteButton" onClick={onDeleteClicked}>
        Delete
      </button>
    </div>
  );

}

export default Todo;
