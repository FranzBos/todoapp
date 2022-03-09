import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useEffect } from "react";
import "../styles/app.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo].sort((a, b) => b.id - a.id));
  }

  function deleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  function toggleDone(todoId) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("TODOS_STORAGE_KEY"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TODOS_STORAGE_KEY", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone} />
    </div>
  );
}

export default App;
