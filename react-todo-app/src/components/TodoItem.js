import React from "react"

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <input 
          type="checkbox" 
          checked={this.props.todoItem.completed} 
          onChange={() => console.log("Changed!")}
        />
        <p>{this.props.todoItem.text}</p>
      </div>
    )
  }
}

export default TodoItem
