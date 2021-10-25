import React from "react"

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <input 
          type="checkbox" 
          checked={this.props.todoItem.completed} 
          onChange={() => this.props.handleChange(this.props.todoItem.id)}
        />
        <p>{this.props.todoItem.text}</p>
      </div>
    )
  }
}

export default TodoItem
