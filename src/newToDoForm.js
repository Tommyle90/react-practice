import React from 'react'

const NewtoDoForm = (props) => {
 return (
     <form onSubmit={props.formSubmitted}>
        <label htmlFor='newTodo'></label>
        <input onChange={props.newToDoChange} id='newTodo' name='newTodo' value={props.newTodo}/>
        <button type='submit'>Add to do</button>
      </form> 
 )
}  

export default NewtoDoForm