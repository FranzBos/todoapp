import React from "react";

function Todo({todo}) {
    return (
        <div style={{display: "flex"}}>
            <input type="checkbox"/>
            <li style={{
                color: "white",
                textDecoration: todo.done ? "line-through" : null
            }}
            >{todo.title}</li>
            <button>Delete</button>
        </div>
    )
}

export default Todo;