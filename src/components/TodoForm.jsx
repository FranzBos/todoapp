import React, { useState } from "react";
import "../styles/todoForm.css";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    done: false,
  });

  function onTitleInputChange(event) {
    setTodo({ ...todo, title: event.target.value });
  }

  function onSubmitClicked(event) {
    event.preventDefault();
    if (todo.title.trim()) {
      addTodo({ ...todo, id: Date.now() });
      setTodo({ ...todo, title: "" });
    }
  }

  return (
    <form className="formContainer" onSubmit={onSubmitClicked}>
      <div className="inputContainer">
        <input
          className="input"
          placeholder="buy eggs"
          name="title"
          type="text"
          value={todo.title}
          onChange={onTitleInputChange}
        />
      </div>
      <button className="submitButton" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
