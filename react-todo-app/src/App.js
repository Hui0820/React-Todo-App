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
  }

  render () {
    const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} todoItem={item} />)

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
