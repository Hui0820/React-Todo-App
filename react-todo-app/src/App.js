import React from "react";
import './App.css';

import Greeting from "./components/Greeting"
import TodoItem from './components/TodoItem';
import ClickCounting from "./components/ClickCounting"
import Conditional from "./components/Conditional"

import todosData from "./data/todosData"
import TravelFormContainer from "./components/TravelFormContainer";
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: todosData,
      isLoading: true,
      unreadMessage: [
        "Call you mom!", "Can I come over tonight?", "Good morning!"
      ],
      isLoggedIn: false,
      character: {},
      loadingAPIData: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleChange(id){
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

  handleLogin() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)

    this.setState({ loadingAPIData: true })

    fetch("https://swapi.dev/api/people/1/")
    .then(response => response.json())
    .then(data => this.setState({
      character: data,
      loadingAPIData: false
    }))

    fetch("https://swapi.dev/api/people/1/")
      .then(response => response.json())
      .then(data => this.setState({
        character: data
      }))
  }

  render () {
    const toDoComponent = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <div>
        <div className="meme-generator">
          <Header />
          <MemeGenerator />
        </div>

        <br />
        
        <div className="todo-list">
          <Greeting />
          {toDoComponent}
        </div>

        <br />

        <div className="travel-form">
          <TravelFormContainer />
        </div>

        <br />

        <div>
          <h1>Conditional rendering practice</h1>
          <div>
            <h3>Your are currently {this.state.isLoggedIn ? "logged in" : "logged out"}</h3>
            <button onClick={this.handleLogin}>{this.state.isLoggedIn ? "Log out" : "Log in"}</button>
          </div>
          <ClickCounting />
          <Conditional isLoading={this.state.isLoading} />
          { this.state.unreadMessage.length > 0 && <h1>You have {this.state.unreadMessage.length} unread messages!</h1> }
          <h1>Star War</h1>
          <div>{this.state.loadingAPIData ? "Loading..." : this.state.character.name}</div>
        </div>
      </div>
    )
  }
}

export default App;
