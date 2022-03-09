import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../styles/app.css';

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  function deleteTodo(todoToBeDeleted) {
    setTodos(todos.filter(todo => todo.title !== todoToBeDeleted.title))
  }

  return (
    <div>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
