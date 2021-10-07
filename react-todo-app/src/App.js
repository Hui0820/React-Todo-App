import logo from './logo.svg';
import './App.css';

import GreetingExamplewithJS from './components/GreetingExamplewithJS';
import TodoItem from './components/TodoItem';
import ContactCard from './components/ContactCard';
import Joke from "./components/Joke";
import Product from "./components/Product";

import jokesData from "./data/jokesData"
import productsData from "./data/vschoolProducts"
import todosData from "./data/todosData"

function App() {
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />);

  const productComponents = productsData.map(item => <Product key={item.id} product={item} />)

  const todoComponents = todosData.map(item => <TodoItem key={item.id} todoItem={item} />)
  
  return (
    <div className="container">
      <div className="todo-list">
        <GreetingExamplewithJS />
        <h1>To Do List</h1>
        {todoComponents}
      </div>

      <div className="contacts">
        <ContactCard contacts={{name:"Mr. Whiskerson", imgUrl:"http://placekitten.com/300/200", phone:"(212) 555-1234", email:"mr.whiskaz@catnap.meow"}} />
        <ContactCard contacts={{name:"Fluffykins", imgUrl:"http://placekitten.com/400/200", phone:"(212) 555-2345", email:"fluff@me.com"}} />
        <ContactCard contacts={{name:"Destroyer", imgUrl:"http://placekitten.com/400/300", phone:"(212) 555-3456", email:"ofworlds@yahoo.com"}} />
        <ContactCard contacts={{name:"Felix", imgUrl:"http://placekitten.com/200/100", phone:"(212) 555-4567", email:"thecat@hotmail.com"}} />
      </div>

      <div className="jokes">
        {jokeComponents}
      </div>

      <div className="products">
        {productComponents}
      </div>
    </div>
    
  );
}

export default App;
