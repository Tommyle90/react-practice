import React from 'react'

const TodoIteam = (props) => {
    const { todo, index } = props
    return (
        <li>
            <input onChange={(event) => props.toggleTodoDone(event, index)} type='checkbox' checked={todo.done}/>
            <span className={ todo.done ? 'done' : '' }>{props.todo.title}</span>
            <button onClick={(event) => props.removeTodo(index)}>Remove</button>
        </li>
    )
}
export default TodoIteam