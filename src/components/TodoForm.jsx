import React, {useState} from "react"

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        title: "",
        done: false
    });

    function onTitleInputChange(event) {
        setTodo({...todo, title: event.target.value})
    }

    function onSubmitClicked(event) {
        event.preventDefault();
        if(todo.title.trim()) {
            addTodo(todo)
            setTodo({...todo, title: ""})
        }
    }

    return (
        <form onSubmit={onSubmitClicked}>
            <input name="title" type="text" value={todo.title} onChange={onTitleInputChange} />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;