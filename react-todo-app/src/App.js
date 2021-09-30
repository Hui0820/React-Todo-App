import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="todo-list">
      <h1>To Do List</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
