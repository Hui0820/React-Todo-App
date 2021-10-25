import React from "react";
import './App.css';

import Greeting from "./components/Greeting"
import TodoItem from './components/TodoItem';
import LoginState from "./components/LoginState"
import ClickCounting from "./components/ClickCounting"

import todosData from "./data/todosData"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: todosData
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo
      })

      return {
        todos: updatedTodos
      }
    })
  }

  render () {
    const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} todoItem={item} handleChange={this.handleChange}/>)

    return (
      <div>
        <div className="todo-list">
          <Greeting />
          {todoComponents}
        </div>

        <div>
          <LoginState />
          <ClickCounting />
        </div>
      </div>
    )
  }
}

export default App;
