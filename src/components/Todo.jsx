import React from "react";
import "../styles/todo.css";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Checkbox from '@mui/material/Checkbox';

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
      <Checkbox
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
      <DeleteForeverOutlinedIcon className="deleteIcon" onClick={onDeleteClicked}/>
    </div>
  );

}

export default Todo;
