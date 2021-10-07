import React from "react";
import './App.css';

import Greeting from "./components/Greeting"

import TodoItem from './components/TodoItem';
// import Joke from "./components/Joke";
// import Product from "./components/Product";

// import jokesData from "./data/jokesData"
// import productsData from "./data/vschoolProducts"
import todosData from "./data/todosData"

class App extends React.Component {
  render () {
    const todoComponents = todosData.map(item => <TodoItem key={item.id} todoItem={item} />)

    return (
      <div>
        <div className="todo-list">
          <Greeting />
          {todoComponents}
        </div>
      </div>
    )
  }
}

export default App;
