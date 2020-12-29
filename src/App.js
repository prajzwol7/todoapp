import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {

  const [todos, setTodos] = useState([])
  // {
  //   id: 1,
  //   title: "Play",
  //   isCompleted: false,
  // },
  // {
  //   id: 2,
  //   title: "Play Football",
  //   isCompleted: true,
  // },
  // {
  //   id: 3,
  //   title: "Eat Food",
  //   isCompleted: false,
  // },
  // {
  //   id: 4,
  //   title: "Practise Coding",
  //   isCompleted: false,
  // },
  // ]);


  const checkTodo = (id) => {
    // console.log(id);
    setTodos(todos.map((todo) => {
      if(todo.id === id) todo.isCompleted = !todo.isCompleted;
      // console.log(todo.isCompleted);
      return todo;

    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const addTodo = (text) => {
    const newTodo = {
      id: uuid(),
      title: text,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
  }

  return (
      <div>
        <center><h1 style={{color:"#0FBFCC", fontSize:"5vw"}}>ToDo App</h1></center>
        <TodoForm addTodo = {addTodo}/>
        <TodoList todos = {todos} checkTodo = {checkTodo} deleteTodo = {deleteTodo}/>
      </div>
  );
}

export default App;