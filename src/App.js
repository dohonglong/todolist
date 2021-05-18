import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState({description: ''}); //State for todo
  const [todos, setTodos] = useState([]); //State where all todos are saved

  //Invoke function that saves typed values into the todo state
  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  //Invoke function that adds newly-typed todo into the todos state array
  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: ''}); //Clear input when a new todo has been
  }

  //Delete ToDo
  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <div className="App">
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <button onClick={addTodo}>Add</button> 
      <table>
        <tbody>
          {
            todos.map((todo, index) => 
              <tr key={index}>
                <td>{todo.description}</td>
                <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
