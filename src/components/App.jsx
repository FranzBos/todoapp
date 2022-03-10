import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useEffect } from "react";
import "../styles/app.css";

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

  function toggleDone(todoId) {
    sortAndSetTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    )
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

  return (
    <div className="mainContainer">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone} updateTodo={updateTodo}/>
    </div>
  );
}

export default App;
