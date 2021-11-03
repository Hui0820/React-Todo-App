import React from "react";
import './App.css';

import Greeting from "./components/Greeting"
import TodoItem from './components/TodoItem';
import ClickCounting from "./components/ClickCounting"
import Conditional from "./components/Conditional"

import todosData from "./data/todosData"

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
      loadingAPIData: false,
      firstName: "",
      lastName: "",
      textarea: "",
      isChecked: false,
      gender: "",
      favColor: "blue"
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
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

  handleFormChange(event) {
    const {name, value, type, checked} = event.target

    type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
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
        <div className="todo-list">
          <Greeting />
          {toDoComponent}
        </div>

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

        <div>
          <h1>Forms</h1>
          <form>
            <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleFormChange} />
            <br />
            <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleFormChange} />
            <br />
            <textarea name="textarea" value={this.state.textarea} onChange={this.handleFormChange} />
            <br />
            <div>
              <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleFormChange} />
              <label>Is friendly?</label>
            </div>
            <br />
            <div>
              <input type="radio" name="gender" checked={this.state.gender === "male"} value="male" onChange={this.handleFormChange} />
              <label>Male</label>
            </div>
            <div>
              <input type="radio" name="gender" checked={this.state.gender === "female"} value="female" onChange={this.handleFormChange} />
              <label>Female</label>
            </div>

            <label>My favourite color is: </label>
            <select name="favColor" value={this.state.favColor} onChange={this.handleFormChange}>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
            </select>

            <h1>{this.state.textarea} {this.state.firstName} {this.state.lastName}</h1>
            { this.state.gender !== "" && <h2>You are a {this.state.gender}</h2> }
            <h2>My favourite color is {this.state.favColor}</h2>

            <button>Submit</button>

          </form>
        </div>
      </div>
    )
  }
}

export default App;
