import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Todo from "./components/todo.js"
import TodoForm from "./components/todoform.js"

function App() {


  const [todos, setTodos] = useState([
    {text: "Walk dog", isCompleted: false, createdAt: new Date() },
    {text: "Feed cat", isCompleted: false, createdAt: new Date() }
  ]);

  //for deleting todos
  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }

  //for toggling todos
  const toggleTodo = (index) => {
    //use spread operator to grab the current list of items
    const newTodos = [...todos];
    //toggles isComplete
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    //setTodos to update that state
    setTodos(newTodos);
  }


    //ADD TODOS FUNCTIONALITY
    const addTodo = (userInput) => {
      const newTodos = [
        ...todos,
        { text: userInput, isCompleted: false, createdAt: new Date() },
      ];
      setTodos(newTodos);
    };



  //SORTING FUNCTIONALITY
  const [sortBy, setSortBy] = useState('asc')

  //the toggle function
  const sortByTime = () => {
    setSortBy(sortBy === 'asc' ? 'dsc' : 'asc');
    const sortedTodos = [...todos];
    sortedTodos
      .sort((a, b) => {
        if (sortBy === 'asc'){
          return a.createdAt - b.createdAt;
        } else {
            return b.createdAt - a.createdAt
        }
    })
    setTodos(sortedTodos)
  }




  return (
    <div className="App">


      <div className="app">
        <h1>My Todos:</h1>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            ))}
        </div>
      </div>
        
      <div className="add-todo">
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="sort">
          <button onClick={sortByTime}>Sort toggle by time</button>
        </div>

      
    </div>
  );
}

export default App;
