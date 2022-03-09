import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}/>
      </header>
    </div>
  );
}

export default App;
