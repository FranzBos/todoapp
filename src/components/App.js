import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../styles/app.css';

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  return (
    <div>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}/>
    </div>
  );
}

export default App;
