import React, {
  Component
} from 'react'
// import logo from './logo.svg';
import './App.css'
import NewtoDoForm from './newToDoForm'
import TodoList from './TodoList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello Coding Garden',
      newTodo: '',
      todos: []
    }
  }

  formSubmitted = (event) => {
    event.preventDefault()
    this.setState({ 
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
  }

  newToDoChange = (event) => {
    this.setState({
      newTodo: event.target.value
    })
  }

  toggleTodoDone = (event, index) => {
    const todos = [...this.state.todos]
    todos[index] = {
      ...todos[index],
      done: event.target.checked
    }
    this.setState({
      todos
    })
  }

  removeTodo= (index) => {
    const todos = [...this.state.todos]
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }

  allDone = () => {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      }
    })
    this.setState({
      todos
    })
  }

  render() {
    return ( 
    <div className = "App" >
      <h3> {this.state.message} </h3>
      <NewtoDoForm 
        newTodo={this.state.newTodo}
        formSubmitted={this.formSubmitted} 
        newToDoChange={this.newToDoChange} 
      />
      <button onClick={this.allDone}>All Done</button>
     <TodoList 
     todos={this.state.todos}
     toggleTodoDone={this.toggleTodoDone}
     removeTodo={this.removeTodo}
     />
    </div>
    )
  }
}

export default App