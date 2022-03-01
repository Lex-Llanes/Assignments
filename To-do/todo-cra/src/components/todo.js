import { useState } from "react";


const Todo = ({ todo, toggleTodo, index, deleteTodo}) => {



    return (
        <div>
            <label htmlFor={`todo-${index}`}>
                <input
                    id={`todo-${index}`}
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(index)}
                />
            </label>
            <button onClick={() => deleteTodo(index)}>Delete</button>
        <div className="todo">{todo.text}</div>
        <br></br>
        </div>
    )
}


export default Todo;