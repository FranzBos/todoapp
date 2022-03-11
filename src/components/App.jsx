import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useEffect } from "react";
import "../styles/app.css";
import DoneList from "./DoneList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("TODOS_STORAGE_KEY"));
    if (storedTodos) {
      sortAndSetTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TODOS_STORAGE_KEY", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    sortAndSetTodos([...todos, todo])
  }

  function deleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  function markAsDone(todoId) {
    markDone(todoId, true)
  }

  function markAsTodo(todoId) {
    markDone(todoId, false)
  }

  function updateTodo(todoToUpdate, title) {
    setTodos(todos.map((todo) => {
      if (todoToUpdate.id === todo.id) {
        return { ...todo, title: title };
      }
      return todo;
    }))
  }

  function sortAndSetTodos(todos) {
    let doneTodos = todos.filter((todo) => todo.done === true)
    let todoTodos = todos.filter((todo) => todo.done === false).sort((a, b) => b.id - a.id)
    setTodos(todoTodos.concat(doneTodos));
  }

  function markDone(todoId, done) {
    sortAndSetTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, done: done };
        }
        return todo;
      })
    )
  }

  return (
    <div className="mainContainer">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos.filter((todo) => todo.done === false)} deleteTodo={deleteTodo} markAsDone={markAsDone} updateTodo={updateTodo}/>
      <DoneList todos={todos.filter((todo) => todo.done === true)} deleteTodo={deleteTodo} markAsTodo={markAsTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default App;
